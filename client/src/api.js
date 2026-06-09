import axios from "axios";

// In production, set VITE_API_URL to your backend Vercel URL
// e.g. https://portfolio-server.vercel.app
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "",
});

export default api;
