export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 lg:px-16 py-5 border-b border-slate-800 sticky top-0 bg-slate-950/80 backdrop-blur-xl z-50">

      <h1 className="text-3xl font-bold text-white">
        College Report Platform
      </h1>

      <div className="flex gap-6 text-lg items-center">

        <button className="hover:text-indigo-400 transition">
          Home
        </button>

        <button className="hover:text-indigo-400 transition">
          Dashboard
        </button>

        <button className="hover:text-indigo-400 transition">
          Reports
        </button>

        <button className="hover:text-indigo-400 transition">
          Admin
        </button>

        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl font-semibold transition">
          Login
        </button>

        <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl font-semibold transition">
          Sign Up
        </button>

      </div>

    </nav>
  );
}