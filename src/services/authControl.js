// src/root/services/authControl.js
const BASE_URL = "https://etiologically-nondivisible-hermine.ngrok-free.dev";

export const loginUser = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.detail || "Login failed");
    }

    const result = await res.json();
    return result;
  } catch (err) {
    console.error("Login error:", err.message);
    throw err;
  }
};
