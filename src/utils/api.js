// src/utils/api.js
import Cookies from "js-cookie";
import { baseUrl } from "./utils";

const BASE_URL = baseUrl; // replace with your backend URL

// Generic request handler
const apiRequest = async (endpoint, method = "GET", data = null) => {
  const token = Cookies.get("token"); // get token from cookies if exists

  const headers = {
    "Content-Type": "application/json",
  };

  // Attach token if available
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const options = {
    method,
    headers,
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    // Handle non-2xx responses
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Error: ${response.status}`);
    }

    // Parse JSON
    return await response.json();
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};

export default {
  get: (endpoint) => apiRequest(endpoint, "GET"),
  post: (endpoint, data) => apiRequest(endpoint, "POST", data),
  put: (endpoint, data) => apiRequest(endpoint, "PUT", data),
  patch: (endpoint, data) => apiRequest(endpoint, "PATCH", data),
  delete: (endpoint) => apiRequest(endpoint, "DELETE"),
};
