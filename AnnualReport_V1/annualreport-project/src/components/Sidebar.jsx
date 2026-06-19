import { Link } from "react-router-dom";

export default function Sidebar() {

  const currentUser =
    JSON.parse(
      localStorage.getItem("currentUser")
    );

  const role =
    currentUser?.role || "Student";

  return (

    <aside className="w-64 bg-slate-900 border-r border-slate-800 min-h-screen">

      <div className="p-6 border-b border-slate-800">

        <h2 className="text-xl font-bold text-white">
          {role} Panel
        </h2>

      </div>

      <div className="p-4 space-y-3">

        <Link
          to="/dashboard"
          className="block p-3 rounded-xl hover:bg-blue-600"
        >
          Dashboard
        </Link>

        {(role==="Faculty" || role==="Admin") && (
          <>
            <Link to="/students" className="block p-3 rounded-xl hover:bg-blue-600">
              Students
            </Link>

            <Link to="/faculty" className="block p-3 rounded-xl hover:bg-blue-600">
              Faculty
            </Link>

            <Link to="/research" className="block p-3 rounded-xl hover:bg-blue-600">
              Research
            </Link>

            <Link to="/placements" className="block p-3 rounded-xl hover:bg-blue-600">
              Placements
            </Link>

            <Link to="/events" className="block p-3 rounded-xl hover:bg-blue-600">
              Events
            </Link>
          </>
        )}

        <Link
          to="/analytics"
          className="block p-3 rounded-xl hover:bg-blue-600"
        >
          Analytics
        </Link>

        <Link
          to="/reports"
          className="block p-3 rounded-xl hover:bg-blue-600"
        >
          Reports
        </Link>

        {role==="Admin" && (

          <Link
            to="/admin"
            className="block p-3 rounded-xl hover:bg-red-600"
          >
            Admin
          </Link>

        )}

      </div>

    </aside>
  );
}