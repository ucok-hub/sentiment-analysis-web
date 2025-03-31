// src/components/FormInput.jsx
import React, { useState } from "react";

const FormInput = ({ onAnalyze }) => {
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnalyze(review);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Masukkan review di sini..."
      />
      <button type="submit">Analisis Sentimen</button>
    </form>
  );
};

export default FormInput;
