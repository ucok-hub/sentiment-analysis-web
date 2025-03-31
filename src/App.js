// src/App.js
import React, { useState } from "react";
import FormInput from "./components/FormInput";
import ResultDisplay from "./components/ResultDisplay";

const App = () => {
  const [result, setResult] = useState("");

  // Karena API model belum siap, buat fungsi dummy untuk simulasi analisis
  const handleAnalyze = (review) => {
    // Simulasi analisis sentiment, misalnya:
    const simulatedResult = review.includes("baik") ? "Positif" : "Negatif";
    setResult(simulatedResult);
  };

  return (
    <div className="App">
      <h1>Sentiment Analysis untuk Review Shopee COD</h1>
      <FormInput onAnalyze={handleAnalyze} />
      {result && <ResultDisplay result={result} />}
    </div>
  );
};

export default App;
