import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ================= SUBMIT HANDLER =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      return setError("All fields are required");
    }

    if (form.password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          fullName: form.name, // 👈 backend expects fullName
          email: form.email,
          password: form.password,
          confirmPassword: form.confirmPassword,
        }
      );

      // Optional: save token
      localStorage.setItem("token", data.token);

      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* PAGE TITLE */}
      <div className="text-center pt-12 pb-10">
        <h1 className="text-4xl font-bold text-green-800">
          Create Your Account
        </h1>
      </div>

      {/* ================= MAIN SECTION ================= */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT INFO CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-8">

          <div className="border border-green-300 bg-green-50 rounded-xl p-6 mb-6">
            <div className="flex gap-4">
              <div className="text-green-700 text-2xl">⚙️</div>
              <div>
                <h2 className="font-bold text-green-800 text-lg mb-2">
                  Complimentary Assessment Included
                </h2>

                <p className="text-sm text-gray-700 leading-relaxed">
                  Register now to access your complimentary recyclability
                  assessment in accordance with <strong>RAM v1.1</strong> and
                  current UK Packaging EPR requirements.
                </p>

                <p className="text-sm font-semibold text-green-700 mt-3">
                  No payment required to get started.
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mb-5">
            With your account you can:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-sm">
            <div>✅ Build packaging configurations</div>
            <div>✅ Generate RAG ratings</div>
            <div>✅ Download PCS-ready reports</div>
          </div>

          <h3 className="font-semibold text-lg mb-4 border-b pb-2">
            Included With Registration:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800 mt-4">
            <div>🟢 Free first analysis</div>
            <div>🟢 RAM v1.1 interpretation</div>
            <div>🟢 UK pEPR guidance</div>
            <div>🟢 Auto EPR fee logic</div>
            <div>🟢 Team collaboration</div>
            <div>🟢 Platform updates</div>
          </div>
        </div>

        {/* RIGHT REGISTER CARD */}
        <div className="bg-green-800 rounded-2xl shadow-2xl p-10 text-white">

          <h2 className="text-3xl font-bold flex items-center gap-2 mb-3">
            👤 Create Account
          </h2>

          <p className="text-green-100 mb-8">
            Register now to start assessing your recyclability and access your
            complimentary analysis.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>

            {error && (
              <div className="bg-red-100 text-red-700 px-4 py-2 rounded">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email Address</label>
              <input
                type="email"
                placeholder="email@example.com"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">
                Create Password (min 6 chars)
              </label>
              <input
                type="password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Confirm Password</label>
              <input
                type="password"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-green-800 font-semibold py-3 rounded-lg hover:bg-green-100 transition flex items-center justify-center gap-2"
            >
              {loading
                ? "Creating account..."
                : "Create Account and Start Free Analysis →"}
            </button>
          </form>

          {/* LOGIN REDIRECT */}
          <p className="text-center text-sm mt-6 text-green-100">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="underline font-semibold cursor-pointer hover:text-white"
            >
              Sign In here.
            </span>
          </p>
        </div>
      </div>

      {/* ================= HOW IT WORKS ================= */}
      <div className="max-w-6xl mx-auto px-6 mt-24 pb-24">

        <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">
          How It Works: 3 Simple Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              step: "1",
              title: "Define Your Product and Packaging",
              text:
                "Enter key details on format, materials, attachments (closures, labels), and separability in accordance with RAM v1.1.",
            },
            {
              step: "2",
              title: "Collaborate and Input Component-Level Data",
              text:
                "Assign data collection responsibilities to internal teams or external suppliers across multiple SKUs.",
            },
            {
              step: "3",
              title: "Complete Assessment and Generate Reports",
              text:
                "Receive component-wise recyclability evaluation, RAG status, and PCS-ready structured reports.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative bg-white rounded-xl shadow-md pt-14 pb-10 px-6 border-t-4 border-green-500 text-center"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-600 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg shadow">
                {item.step}
              </div>

              <h3 className="font-bold text-lg mb-3 text-slate-900">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
