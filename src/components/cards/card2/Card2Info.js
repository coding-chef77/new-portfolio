import React, { useState } from "react";
import { Paper, Typography, TextField, Button, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { generateText } from "./gptUtils";

export default function Card2Info({ handleClose }) {
  const [inputText, setInputText] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  async function handleGenerate() {
    if (inputText) {
      const text = await generateText(inputText);
      setGeneratedText(text);
    }
  }

  return (
    <Paper elevation={4} sx={{ maxWidth: 600, backgroundColor: "#ddeeff" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          paddingBottom: 0,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Tekstanalytikeren
        </Typography>
        <Button onClick={handleClose}>
          <CloseIcon />
        </Button>
      </Box>
      <TextField
        label="Input text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleGenerate}>
        Vurder Tekst
      </Button>
      <Typography variant="body1" component="p" marginTop={2}>
        {generatedText}
      </Typography>
    </Paper>
  );
}
