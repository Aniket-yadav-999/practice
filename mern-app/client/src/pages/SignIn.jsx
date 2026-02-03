import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000/api";

export default function SignIn() {
  const navigate = useNavigate();

  const [showForgot, setShowForgot] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ================= LOGIN ================= */
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      // ✅ SAVE TOKEN
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));

      // ✅ REDIRECT
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ================= FORGOT PASSWORD ================= */
  const handleForgotPassword = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send email");

      setEmailSent(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* PAGE TITLE */}
      <div className="text-center pt-12 pb-10">
        <h1 className="text-4xl font-bold text-green-800">
          Access Your Account
        </h1>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-8">

          <div className="border border-green-300 bg-green-50 rounded-xl p-6 mb-6">
            <div className="flex gap-4">
              <div className="text-green-700 text-2xl">⚙️</div>
              <div>
                <h2 className="font-bold text-green-800 text-lg mb-2">
                  Complimentary Assessment: One Packaging Configuration
                </h2>

                <p className="text-sm text-gray-700 leading-relaxed">
                  Begin using the tool with a complimentary assessment of one
                  packaging configuration. Evaluate recyclability in accordance
                  with <strong> RAM v1.1</strong>, aligned with UK Packaging EPR.
                </p>

                <p className="text-sm font-semibold text-green-700 mt-3">
                  No payment or subscription required.
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mb-5">
            The tool provides a structured, regulation-based workflow to help you:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-sm">
            <div>✅ Assess each component</div>
            <div>✅ Generate RAG rating</div>
            <div>✅ Download PCS-ready report</div>
          </div>

          <h3 className="font-semibold text-lg mb-4 border-b pb-2">
            What You Receive:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800 mt-4">
            <div>🟢 First complimentary assessment</div>
            <div>🟢 Team collaboration</div>
            <div>🟢 UK pEPR guidance</div>
            <div>🟢 RAM v1.1 interpretation</div>
            <div>🟢 Auto EPR fee calculation</div>
            <div>🟢 Platform updates</div>
          </div>
        </div>

        {/* RIGHT LOGIN CARD */}
        <div className="bg-green-800 rounded-2xl shadow-2xl p-10 text-white">

          <h2 className="text-2xl font-bold mb-2">→ Sign In</h2>

          <p className="text-green-100 mb-6">
            Enter your credentials to access your account.
          </p>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">

            <div>
              <label className="block text-sm mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              />
            </div>

            <div className="text-right">
              <button
                type="button"
                onClick={() => {
                  setShowForgot(true);
                  setEmailSent(false);
                  setError("");
                }}
                className="text-sm underline text-green-200 hover:text-white"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-green-800 font-semibold py-3 rounded-lg hover:bg-green-100 transition"
            >
              {loading ? "Signing in..." : "Sign In to Account →"}
            </button>
          </form>

          <p className="text-center text-sm mt-6 text-green-100">
            Don&apos;t have an account?{" "}
            <span className="underline font-semibold cursor-pointer">
              Register now
            </span>
          </p>
        </div>
      </div>

      {/* ================= FORGOT PASSWORD MODAL ================= */}
      {showForgot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 relative">

            <button
              onClick={() => setShowForgot(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
            >
              ✕
            </button>

            {!emailSent ? (
              <>
                <h2 className="text-2xl font-bold mb-2">
                  Reset your password
                </h2>

                <p className="text-sm text-gray-600 mb-6">
                  Enter your email address and we’ll send you a secure reset link.
                </p>

                <input
                  type="email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border rounded-lg mb-6 focus:ring-2 focus:ring-green-600"
                />

                <button
                  onClick={handleForgotPassword}
                  disabled={loading}
                  className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition"
                >
                  {loading ? "Sending..." : "Send reset link"}
                </button>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-green-700 mb-2">
                  Email Sent ✅
                </h2>

                <p className="text-sm text-gray-600 mb-6">
                  If this email exists, you’ll receive a reset link shortly.
                </p>

                <button
                  onClick={() => setShowForgot(false)}
                  className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg"
                >
                  Back to Sign In
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
