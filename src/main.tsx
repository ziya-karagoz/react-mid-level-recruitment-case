import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// const primary = {
//   50: "#ECFDF5",
//   100: "#D1FAE5",
//   200: "#A7F3D0",
//   300: "#6EE7B7",
//   400: "#34D399",
//   500: "#10B981",
//   600: "#059669",
//   700: "#047857",
//   800: "#065F46",
//   900: "#064E3B",
//   950: "#163E2F",
// };
// const head = document.querySelector("head");
// if (head && head.textContent && !head.textContent.includes(":root")) {
//   head.innerHTML += `
//     <style>
//       :root {
//         --primary-50: ${primary["50"]};
//         --primary-100: ${primary["100"]};
//         --primary-200: ${primary["200"]};
//         --primary-300: ${primary["300"]};
//         --primary-400: ${primary["400"]};
//         --primary-500: ${primary["500"]};
//         --primary-600: ${primary["600"]};
//         --primary-700: ${primary["700"]};
//         --primary-800: ${primary["800"]};
//         --primary-900: ${primary["900"]};
//         --primary-950: ${primary["950"]};
//       }
//     </style>
//   `;
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
