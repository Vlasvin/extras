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
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useSpring, animated } from "@react-spring/web";
import { LoginFormData, RegisterFormData } from "services/formData";
import { loginSchema, registerSchema } from "validations/validationSchema";
import { getErrorMessage } from "utils/formUtils";
import { useAuth } from "context/AuthContext";
import { useLoading } from "context/LoadingContext";
import { authFormStyles } from "./AuthFormStyles";

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
  const { setLoading } = useLoading();
  const [isLogin, setIsLogin] = useState(true);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PRODUCTION
      : process.env.REACT_APP_API_URL_LOCAL;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData | RegisterFormData>({
    resolver: yupResolver(isLogin ? loginSchema : registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: LoginFormData | RegisterFormData) => {
    setLoading(true);
    try {
      if (isLogin) {
        const response = await axios.post(`${apiUrl}/auth/login`, data);
        login(response.data.token, response.data.user);
      } else {
        await register(data);
      }
      reset();
      setIsLogin(true);
      setEmailError(null);
      setPasswordError(null);
    } catch (error) {
      const backendError = error as BackendError;
      const message = backendError.response
        ? backendError.response.data.message
        : backendError.message;
      if (message === "User with this email does not exist") {
        setEmailError(t("auth.user_not_found"));
      } else if (message === "Invalid credentials") {
        setPasswordError(t("auth.invalid_password"));
      } else {
        setEmailError(null);
        setPasswordError(null);
      }
      console.error("Error:", message);
    } finally {
      setLoading(false);
    }
  };

  const handleSwitch = (event: React.SyntheticEvent, newValue: number) => {
    setIsLogin(newValue === 0);
    setEmailError(null);
    setPasswordError(null);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
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
                      error={!!getErrorMessage(errors, "email") || !!emailError}
                      helperText={
                        getErrorMessage(errors, "email") || emailError
                      }
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
                      type={showPassword ? "text" : "password"}
                      fullWidth
                      {...field}
                      error={
                        !!getErrorMessage(errors, "password") || !!passwordError
                      }
                      helperText={
                        getErrorMessage(errors, "password") || passwordError
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <Visibility style={{ fontSize: 18 }} />
                              ) : (
                                <VisibilityOff style={{ fontSize: 18 }} />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
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
                        type={showPassword ? "text" : "password"}
                        fullWidth
                        {...field}
                        error={!!getErrorMessage(errors, "confirmPassword")}
                        helperText={getErrorMessage(errors, "confirmPassword")}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleClickShowPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <Visibility style={{ fontSize: 18 }} />
                                ) : (
                                  <VisibilityOff style={{ fontSize: 18 }} />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
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
