//@ts-nocheck
import React, { useEffect, useState } from "react";

const App = () => {
  React.useEffect(() => {
    let primary50Color = "236, 253, 245";
    let primary100Color = "209, 250, 229";
    let primary200Color = "167, 243, 208";
    let primary300Color = "110, 231, 183";
    let primary400Color = "52, 211, 153";
    let primary500Color = "16, 185, 129";
    let primary600Color = "5, 150, 105";
    let primary700Color = "4, 120, 87";
    let primary800Color = "6, 95, 70";
    let primary900Color = "6, 78, 59";
    let primary950Color = "22, 62, 47";
    const head = document.querySelector("head");
    if (head && !head.textContent.includes(":root")) {
      head.innerHTML += `
        <style>
          :root {
            --primary-50-color: ${primary50Color};
            --primary-100-color: ${primary100Color};
            --primary-200-color: ${primary200Color};
            --primary-300-color: ${primary300Color};
            --primary-400-color: ${primary400Color};
            --primary-500-color: ${primary500Color};
            --primary-600-color: ${primary600Color};
            --primary-700-color: ${primary700Color};
            --primary-800-color: ${primary800Color};
            --primary-900-color: ${primary900Color};
            --primary-950-color: ${primary950Color};
          }
        </style>
      `;
    }
  });

  return (
    <div>
      <h1 className="bg-primary-500">Primary Color</h1>
      <h1 className="bg-secondary">Secondary Color</h1>
    </div>
  );
};

export default App;
