import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Admin() {

  const students =
    JSON.parse(localStorage.getItem("students")) || [];

  const faculty =
    JSON.parse(localStorage.getItem("faculty")) || [];

  const departments =
    JSON.parse(localStorage.getItem("departments")) || [];

  const research =
    JSON.parse(localStorage.getItem("research")) || [];

  const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser?.role !== "Admin") {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center">
        <h1 className="text-4xl font-bold">
          Access Denied
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-10">

          <h1 className="text-4xl font-bold mb-8">
            Admin Control Center
          </h1>

          <div className="grid lg:grid-cols-4 gap-6 mb-10">

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <h2 className="text-4xl font-bold text-blue-400">
                {departments.length}
              </h2>
              <p className="text-slate-400 mt-2">
                Departments
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <h2 className="text-4xl font-bold text-purple-400">
                {students.length}
              </h2>
              <p className="text-slate-400 mt-2">
                Students
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <h2 className="text-4xl font-bold text-emerald-400">
                {faculty.length}
              </h2>
              <p className="text-slate-400 mt-2">
                Faculty
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <h2 className="text-4xl font-bold text-orange-400">
                {research.length}
              </h2>
              <p className="text-slate-400 mt-2">
                Research
              </p>
            </div>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              System Privileges
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <div className="bg-slate-800 p-5 rounded-2xl">
                Add / Delete Students
              </div>

              <div className="bg-slate-800 p-5 rounded-2xl">
                Add / Delete Faculty
              </div>

              <div className="bg-slate-800 p-5 rounded-2xl">
                Manage Departments
              </div>

              <div className="bg-slate-800 p-5 rounded-2xl">
                Generate Reports
              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}