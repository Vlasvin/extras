import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import { authFormStyles } from "./AuthFormStyles";
import { LoginFormData, RegisterFormData } from "services/formData";
import { loginSchema, registerSchema } from "validations/validationSchema";
import { getErrorMessage } from "utils/formUtils";
import { useAuth } from "context/AuthContext";

type BackendError = {
  response?: {
    data: {
      message: string;
    };
  };
  message: string;
};

const AuthForm: React.FC = () => {
  const { t } = useTranslation();
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData | RegisterFormData>({
    resolver: yupResolver(isLogin ? loginSchema : registerSchema),
  });

  const onSubmit = async (data: LoginFormData | RegisterFormData) => {
    try {
      if (isLogin) {
        const response = await axios.post(
          "http://localhost:3001/auth/login",
          data
        );
        login(response.data.token, response.data.user);
      } else {
        await register(data);
      }
      reset();
      setIsLogin(true);
      setErrorMessage(null);
    } catch (error) {
      const backendError = error as BackendError;
      const message = backendError.response
        ? backendError.response.data.message
        : backendError.message;
      if (message === "User with this email does not exist") {
        setErrorMessage(t("auth.user_not_found"));
      } else {
        setErrorMessage(message);
      }
      console.error("Error:", message);
    }
  };

  const handleSwitch = (event: React.SyntheticEvent, newValue: number) => {
    setIsLogin(newValue === 0);
    setErrorMessage(null);
  };

  const springConfig = {
    delay: 2,
    duration: 2,
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  };

  const animation = useSpring(springConfig);

  return (
    <animated.div style={animation}>
      <Container style={authFormStyles.root}>
        <Box sx={{ maxWidth: 400, mx: "auto", textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            {isLogin ? t("auth.login") : t("auth.register")}
          </Typography>
          <Tabs
            value={isLogin ? 0 : 1}
            onChange={handleSwitch}
            centered
            sx={{ marginBottom: 2 }}
          >
            <Tab label={t("auth.login")} />
            <Tab label={t("auth.register")} />
          </Tabs>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              {errorMessage && (
                <Grid item xs={12}>
                  <Typography color="error">{errorMessage}</Typography>
                </Grid>
              )}
              {!isLogin && (
                <>
                  <Grid item xs={12}>
                    <Controller
                      name="firstName"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          label={t("auth.first_name")}
                          fullWidth
                          {...field}
                          error={!!getErrorMessage(errors, "firstName")}
                          helperText={getErrorMessage(errors, "firstName")}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name="lastName"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          label={t("auth.last_name")}
                          fullWidth
                          {...field}
                          error={!!getErrorMessage(errors, "lastName")}
                          helperText={getErrorMessage(errors, "lastName")}
                        />
                      )}
                    />
                  </Grid>
                </>
              )}
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label={t("auth.email")}
                      fullWidth
                      {...field}
                      error={!!getErrorMessage(errors, "email")}
                      helperText={getErrorMessage(errors, "email")}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label={t("auth.password")}
                      type="password"
                      fullWidth
                      {...field}
                      error={!!getErrorMessage(errors, "password")}
                      helperText={getErrorMessage(errors, "password")}
                    />
                  )}
                />
              </Grid>
              {!isLogin && (
                <Grid item xs={12}>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        label={t("auth.confirm_password")}
                        type="password"
                        fullWidth
                        {...field}
                        error={!!getErrorMessage(errors, "confirmPassword")}
                        helperText={getErrorMessage(errors, "confirmPassword")}
                      />
                    )}
                  />
                </Grid>
              )}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  {isLogin ? t("auth.login") : t("auth.register")}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </animated.div>
  );
};

export default AuthForm;
