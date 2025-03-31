// src/components/ResultDisplay.jsx
import React from "react";

const ResultDisplay = ({ result }) => (
  <div>
    <h3>Hasil Analisis Sentimen</h3>
    <p>{result}</p>
  </div>
);

export default ResultDisplay;
