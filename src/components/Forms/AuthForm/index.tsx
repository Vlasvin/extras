import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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

const AuthForm: React.FC = () => {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSwitch = (event: React.SyntheticEvent, newValue: number) => {
    setIsLogin(newValue === 0);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (isLogin) {
      console.log("Login:", { email, password });
    } else {
      if (password !== confirmPassword) {
        alert(t("auth.passwords_do_not_match"));
        return;
      }
      console.log("Register:", { firstName, lastName, email, password });
    }
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
          <Tabs value={isLogin ? 0 : 1} onChange={handleSwitch} centered>
            <Tab label={t("auth.login")} />
            <Tab label={t("auth.register")} />
          </Tabs>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {!isLogin && (
                <>
                  <Grid item xs={12}>
                    <TextField
                      label={t("auth.first_name")}
                      fullWidth
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label={t("auth.last_name")}
                      fullWidth
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </Grid>
                </>
              )}
              <Grid item xs={12}>
                <TextField
                  label={t("auth.email")}
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label={t("auth.password")}
                  type="password"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Grid>
              {!isLogin && (
                <Grid item xs={12}>
                  <TextField
                    label={t("auth.confirm_password")}
                    type="password"
                    fullWidth
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
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
