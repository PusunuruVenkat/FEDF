import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";

export default function Dashboard() {

  const [students, setStudents] = useState(0);
  const [faculty, setFaculty] = useState(0);
  const [departments, setDepartments] = useState(0);
  const [research, setResearch] = useState(0);

  useEffect(() => {

    setStudents(
      JSON.parse(localStorage.getItem("students"))?.length || 0
    );

    setFaculty(
      JSON.parse(localStorage.getItem("faculty"))?.length || 0
    );

    setDepartments(
      JSON.parse(localStorage.getItem("departments"))?.length || 0
    );

    setResearch(
      JSON.parse(localStorage.getItem("research"))?.length || 0
    );

  }, []);

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-10">

          {/* HEADER */}

          <div className="mb-10">

            <h1 className="text-5xl font-bold mb-3">
              Dashboard
            </h1>

            <p className="text-slate-400 text-lg">
              Overview of institutional records, activities,
              placements and annual report statistics.
            </p>

          </div>

          {/* STATS */}

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-12">

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

              <h2 className="text-5xl font-bold text-blue-400">
                {departments}
              </h2>

              <p className="mt-4 text-slate-400">
                Departments
              </p>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

              <h2 className="text-5xl font-bold text-purple-400">
                {students}
              </h2>

              <p className="mt-4 text-slate-400">
                Students
              </p>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

              <h2 className="text-5xl font-bold text-emerald-400">
                {faculty}
              </h2>

              <p className="mt-4 text-slate-400">
                Faculty
              </p>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

              <h2 className="text-5xl font-bold text-orange-400">
                {research}
              </h2>

              <p className="mt-4 text-slate-400">
                Research Projects
              </p>

            </div>

          </div>

          {/* QUICK ACCESS */}

          <h2 className="text-3xl font-bold mb-6">
            Quick Access
          </h2>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Student Records
              </h3>

              <p className="text-slate-400">
                View, manage and monitor student
                academic information and achievements.
              </p>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Faculty Management
              </h3>

              <p className="text-slate-400">
                Track publications, research
                contributions and departmental activities.
              </p>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Annual Reports
              </h3>

              <p className="text-slate-400">
                Generate downloadable annual reports
                for accreditation and institutional review.
              </p>

            </div>

          </div>

          {/* RECENT ACTIVITIES */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              Recent Activities
            </h2>

            <div className="space-y-4">

              <div className="bg-slate-800 rounded-2xl p-4">
                Research Symposium 2026 added
              </div>

              <div className="bg-slate-800 rounded-2xl p-4">
                Annual Placement Report generated
              </div>

              <div className="bg-slate-800 rounded-2xl p-4">
                New faculty publication recorded
              </div>

              <div className="bg-slate-800 rounded-2xl p-4">
                Student academic data updated
              </div>

            </div>

          </div>

        </main>

      </div>

    </div>

  );
}