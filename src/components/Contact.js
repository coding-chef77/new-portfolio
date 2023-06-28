import React, { useState } from "react";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Card,
  TextField,
  Typography,
  Stack,
  CardHeader,
  CardContent,
  Toolbar,
} from "@mui/material";
import Logo from "../components/navbar/logo/logo.png";
import SendIcon from "@mui/icons-material/Send";

const schema = yup.object().shape({
  from_name: yup.string().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
  reply_to: yup.string().email().required(),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await send(
        "service_s3m4ejl",
        "template_e6kjwdr",
        data,
        "59cQ7_9eF9pJMj5L7"
      );
      if (response.status === 200) {
        setMessage("Takk for at du tar kontakt!");
        reset();
      } else {
        setMessage("Noe gikk galt. Vennligst prøv igjen.");
      }
    } catch (err) {
      setMessage("Noe gikk galt. Vennligst prøv igjen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ marginBottom: 6, marginTop: 6 }}
    >
      <Card
        elevation={10}
        sx={{ backgroundColor: "#363636", border: "2px solid #f27735" }}
      >
        <Toolbar disableGutters>
          <img
            src={Logo}
            alt="logo"
            style={{ height: "30px", margin: "auto" }}
          />
        </Toolbar>
        <CardHeader
          title={
            <Stack alignItems="center">
              <Typography variant="h4">Kontakt meg</Typography>
            </Stack>
          }
        />

        <CardContent>
          <Stack spacing={4}>
            <Stack direction="column" spacing={2}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  label="Navn"
                  {...register("from_name")}
                  variant="filled"
                  fullWidth
                  margin="normal"
                  InputProps={{ style: { backgroundColor: "#ddeeff" } }}
                  error={Boolean(errors.from_name)}
                  helperText={errors.from_name && "Name is required"}
                />
                <TextField
                  label="Emne"
                  {...register("subject")}
                  variant="filled"
                  fullWidth
                  margin="normal"
                  InputProps={{ style: { backgroundColor: "#ddeeff" } }}
                  error={Boolean(errors.subject)}
                  helperText={errors.subject && "Subject is required"}
                />
                <TextField
                  label="Melding"
                  {...register("message")}
                  variant="filled"
                  rows={4}
                  fullWidth
                  multiline
                  margin="normal"
                  InputProps={{ style: { backgroundColor: "#ddeeff" } }}
                  error={Boolean(errors.message)}
                  helperText={errors.message && "Message is required"}
                />
                <TextField
                  label="Epost-adresse"
                  {...register("reply_to")}
                  variant="filled"
                  fullWidth
                  margin="normal"
                  InputProps={{ style: { backgroundColor: "#ddeeff" } }}
                  error={Boolean(errors.reply_to)}
                  helperText={
                    errors.reply_to && "Please enter a valid email address"
                  }
                />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ marginTop: 2 }}
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : <SendIcon />}
                </Button>
                {message && (
                  <Box
                    sx={{
                      marginTop: 2,
                    }}
                  >
                    {message === "Takk for at du tar kontakt!" ? (
                      <span
                        style={{
                          color: "#43a047",
                          fontFamily: "'Sofia Sans Semi Condensed'",
                        }}
                      >
                        {message}
                      </span>
                    ) : (
                      <span
                        style={{
                          color: "red",
                          fontFamily: "'Sofia Sans Semi Condensed'",
                        }}
                      >
                        {message}
                      </span>
                    )}
                  </Box>
                )}
              </form>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
