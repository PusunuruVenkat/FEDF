import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const navigate = useNavigate();

  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let result = "";

    for (let i = 0; i < 5; i++) {
      result += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    return result;
  };

  const [role, setRole] = useState("Student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [captcha, setCaptcha] =
    useState(generateCaptcha());

  const [captchaInput, setCaptchaInput] =
    useState("");

  const createAccount = () => {

    if (
      password !== confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    if (
      captchaInput.toUpperCase() !==
      captcha.toUpperCase()
    ) {
      alert("Invalid CAPTCHA");
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
      return;
    }

    const user = {
      role,
      name,
      email,
      id,
      password
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert("Account Created Successfully");

    navigate("/login");
  };

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <div className="flex justify-center items-center min-h-[85vh]">

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl w-full max-w-lg">

          <h1 className="text-4xl font-bold mb-8 text-center">
            Create Account
          </h1>

          <div className="space-y-4">

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-4 bg-slate-800 rounded-xl"
            >
              <option>Student</option>
              <option>Faculty</option>
              <option>Admin</option>
            </select>

            <input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 bg-slate-800 rounded-xl"
            />

            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-slate-800 rounded-xl"
            />

            <input
              placeholder={
                role === "Faculty"
                  ? "Employee ID"
                  : role === "Admin"
                  ? "Admin ID"
                  : "Student ID"
              }
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full p-4 bg-slate-800 rounded-xl"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-slate-800 rounded-xl"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              className="w-full p-4 bg-slate-800 rounded-xl"
            />

            <div className="bg-slate-800 p-4 rounded-xl flex justify-between items-center">

              <span className="text-xl font-bold tracking-widest">
                {captcha}
              </span>

              <button
                type="button"
                onClick={() => setCaptcha(generateCaptcha())}
                className="bg-purple-600 px-3 py-1 rounded-lg"
              >
                Refresh
              </button>

            </div>

            <input
              type="text"
              placeholder="Enter CAPTCHA"
              value={captchaInput}
              onChange={(e) =>
                setCaptchaInput(e.target.value)
              }
              className="w-full p-4 bg-slate-800 rounded-xl"
            />

            <button
              onClick={createAccount}
              className="w-full bg-purple-600 py-4 rounded-xl"
            >
              Create Account
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}