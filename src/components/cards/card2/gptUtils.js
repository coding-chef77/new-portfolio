const API_URL =
  "https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english";
const API_TOKEN = "";

export async function generateText(prompt) {
  const data = {
    inputs: {
      text: prompt,
    },
    options: {
      use_cache: false,
      wait_for_model: true,
    },
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    // Get the predicted label with the highest score
    const predictedLabel = result[0].label;
    const score = result[0].score;

    // Return the predicted label and score as a string
    return `Predicted label: ${predictedLabel}, score: ${score.toFixed(4)}`;
  } catch (error) {
    console.error("Error generating text:", error);
    return null;
  }
}
