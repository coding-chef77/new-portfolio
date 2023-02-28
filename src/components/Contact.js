import React, { useState } from "react";
import { send } from "emailjs-com";
import { Box, Button, Container, Paper, TextField } from "@mui/material";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    subject: "",
    message: "",
    reply_to: "",
  });
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_s3m4ejl", "template_e6kjwdr", toSend, "59cQ7_9eF9pJMj5L7")
      .then((response) => {
        if (response.status === 200) {
          setMessage("Message sent successfully!");
        } else {
          setMessage("Something went wrong. Please try again later.");
        }
      })
      .catch((err) => {
        setMessage("Something went wrong. Please try again later.");
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper sx={{ p: 4 }}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <form onSubmit={onSubmit}>
            <TextField
              label="From Name"
              name="from_name"
              value={toSend.from_name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Subject"
              name="subject"
              value={toSend.subject}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Message"
              name="message"
              value={toSend.message}
              onChange={handleChange}
              rows={4}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Your email"
              name="reply_to"
              value={toSend.reply_to}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
              Submit
            </Button>
            {message && (
              <Box sx={{ marginTop: 2 }}>
                {message === "Message sent successfully!" ? (
                  <span style={{ color: "green" }}>{message}</span>
                ) : (
                  <span style={{ color: "red" }}>{message}</span>
                )}
              </Box>
            )}
          </form>
        </Box>
      </Paper>
    </Container>
  );
}

export default Contact;