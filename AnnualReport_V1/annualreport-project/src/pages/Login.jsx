import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {

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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [captcha, setCaptcha] =
    useState(generateCaptcha());

  const [captchaInput, setCaptchaInput] =
    useState("");

  const handleLogin = () => {

    if (
      captchaInput.toUpperCase() !==
      captcha.toUpperCase()
    ) {
      alert("Invalid CAPTCHA");
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
      return;
    }

    const savedUser =
      JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No account found");
      return;
    }

    if (
      savedUser.email === email &&
      savedUser.password === password
    ) {

      localStorage.setItem(
        "currentUser",
        JSON.stringify(savedUser)
      );

      alert("Login Successful");

      navigate("/dashboard");

    } else {

      alert("Invalid Credentials");

      setCaptcha(generateCaptcha());
      setCaptchaInput("");

    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="flex justify-center items-center min-h-[85vh]">

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl w-full max-w-md">

          <h1 className="text-4xl font-bold mb-8 text-center">
            Login
          </h1>

          <div className="space-y-4">

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-slate-800 rounded-xl"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              onChange={(e) => setCaptchaInput(e.target.value)}
              className="w-full p-4 bg-slate-800 rounded-xl"
            />

            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 py-4 rounded-xl"
            >
              Login
            </button>

          </div>

          <p className="text-center mt-6">

            <Link
              to="/signup"
              className="text-blue-400"
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}