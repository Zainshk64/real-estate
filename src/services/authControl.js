// src/root/services/authControl.js
const BASE_URL = "https://etiologically-nondivisible-hermine.ngrok-free.dev/auth";

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


export const registerUser = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    // ✅ Normalize success/error response
    if (!res.ok) {
      throw new Error(result.detail || "Registration failed");
    }

    return result;
  } catch (err) {
    console.error("Register Error:", err.message);
    throw err;
  }
};

export const verifyEmail = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    // ✅ Normalize success/error response
    if (!res.ok) {
      throw new Error(result.detail || "Verification failed");
    }

    return result;
  } catch (err) {
    console.error("Verification Error:", err.message);
    throw err;
  }
};


export const resendOtp = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/resend-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    // ✅ Normalize success/error response
    if (!res.ok) {
      throw new Error(result.detail || "Otp resending failed");
    }

    return result;
  } catch (err) {
    console.error("resend-otp Error:", err.message);
    throw err;
  }
};