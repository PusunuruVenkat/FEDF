  import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
  import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";

  export default function App() {

    const [page, setPage] = useState("home");
    const [selectedDept, setSelectedDept] = useState(null);
    const [adminLoggedIn, setAdminLoggedIn] = useState(false);

    const departmentData = {

      "Computer Science": {
        students: 520,
        placements: 460,
        research: 85,
        faculty: 42,
      },

      Mechanical: {
        students: 410,
        placements: 320,
        research: 40,
        faculty: 30,
      },

      Civil: {
        students: 300,
        placements: 210,
        research: 25,
        faculty: 20,
      },

      ECE: {
        students: 380,
        placements: 290,
        research: 55,
        faculty: 28,
      },

      EEE: {
        students: 340,
        placements: 240,
        research: 35,
        faculty: 24,
      },
    };

    const departments = Object.keys(departmentData);

    const downloadReport = () => {

      if (!selectedDept) {
        alert("Please select a department");
        return;
      }

      const data = departmentData[selectedDept];

      const content = `
  COLLEGE ANNUAL REPORT

  Department: ${selectedDept}

  Students: ${data.students}

  Placements: ${data.placements}

  Research Papers: ${data.research}

  Faculty Count: ${data.faculty}
  `;

      const blob = new Blob([content], {
        type: "text/plain",
      });

      const link = document.createElement("a");

      link.href = URL.createObjectURL(blob);

      link.download = `${selectedDept}_Annual_Report.txt`;

      link.click();
    };

    const renderHome = () => (
      <>
        <section className="grid lg:grid-cols-2 gap-12 items-center px-8 lg:px-16 py-16">

          <div>

            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 font-medium mb-6 border border-blue-500/30">
              Smart Annual Report Automation Platform
            </div>

            <h1 className="text-6xl font-extrabold leading-tight mb-6 text-white">

              Automated College Annual Report Generation Platform

            </h1>

            <p className="text-slate-300 text-lg leading-8 mb-8">

              A modern and intelligent platform for managing department records,
              generating annual reports, visualizing analytics, and exporting
              professional institutional reports with ease.

            </p>

            <div className="flex gap-6 text-lg">

  <button
    onClick={() => setPage("home")}
    className="hover:text-indigo-400 transition"
  >
    Home
  </button>

  <button
    onClick={() => setPage("dashboard")}
    className="hover:text-indigo-400 transition"
  >
    Dashboard
  </button>

  <button
    onClick={() => setPage("reports")}
    className="hover:text-indigo-400 transition"
  >
    Reports
  </button>

  <button
    onClick={() => setPage("admin")}
    className="hover:text-indigo-400 transition"
  >
    Admin
  </button>

  <button
    onClick={() => setPage("login")}
    className="bg-blue-600 px-4 py-2 rounded-xl"
  >
    Login
  </button>

  <button
    onClick={() => setPage("signup")}
    className="bg-purple-600 px-4 py-2 rounded-xl"
  >
    Sign Up
  </button>

</div>

          </div>

          <div className="bg-slate-900/90 backdrop-blur-xl rounded-[30px] p-8 border border-slate-800 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-6 rounded-3xl border border-blue-500/20">
                <h2 className="text-4xl font-bold text-blue-300">25+</h2>
                <p className="text-slate-300 mt-2">Departments</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-3xl border border-purple-500/20">
                <h2 className="text-4xl font-bold text-pink-300">10K+</h2>
                <p className="text-slate-300 mt-2">Students</p>
              </div>

              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-6 rounded-3xl border border-emerald-500/20">
                <h2 className="text-4xl font-bold text-emerald-300">500+</h2>
                <p className="text-slate-300 mt-2">Faculty</p>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 p-6 rounded-3xl border border-orange-500/20">
                <h2 className="text-4xl font-bold text-orange-300">100%</h2>
                <p className="text-slate-300 mt-2">Automation</p>
              </div>

            </div>

          </div>

        </section>

        <section className="px-8 lg:px-16 pb-20">

          <h2 className="text-5xl font-bold text-center text-white mb-14">
            Core Modules
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Department Entry",
                desc: "Manage student and faculty data efficiently.",
              },

              {
                title: "Charts & Analytics",
                desc: "Visualize institutional performance metrics.",
              },

              {
                title: "PDF Export",
                desc: "Download professional annual reports.",
              },

              {
                title: "Admin Management",
                desc: "Centralized administration and monitoring.",
              },

            ].map((item, index) => (

              <div
                key={index}
                className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-[28px] p-7 shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:-translate-y-2 transition duration-300"
              >

                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-300 leading-7 mb-6">
                  {item.desc}
                </p>

                <button
                  onClick={() => setPage("dashboard")}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-2xl font-semibold transition"
                >
                  Open Module
                </button>

              </div>

            ))}

          </div>

        </section>
      </>
    );

    const renderDashboard = () => (

      <section className="px-8 lg:px-16 py-12">

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-5xl font-bold text-white">
            Department Dashboard
          </h2>

          <button
            onClick={() => setPage("home")}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-2xl"
          >
            Back Home
          </button>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="bg-slate-900/90 p-6 rounded-[28px] border border-slate-800 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">

            <h3 className="text-2xl font-bold text-white mb-6">
              Departments
            </h3>

            <div className="space-y-4">

              {departments.map((dept, index) => (

                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-4 rounded-2xl flex justify-between items-center border border-slate-700"
                >

                  <span className="font-medium text-white">{dept}</span>

                  <button
                    onClick={() => setSelectedDept(dept)}
                    className="text-indigo-300 hover:text-indigo-200 font-semibold"
                  >
                    View
                  </button>

                </div>

              ))}

            </div>

          </div>

          <div className="lg:col-span-2 bg-slate-900/90 p-6 rounded-[28px] border border-slate-800 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">

            {!selectedDept ? (

              <div className="flex items-center justify-center h-full text-slate-400 text-xl">
                Select a Department to View Analytics
              </div>

            ) : (

              <>
                <h2 className="text-4xl font-bold text-white mb-8">
                  {selectedDept} Analytics
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-10">

                  <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-6 rounded-3xl border border-blue-500/20">
                    <h3 className="text-lg text-slate-300 mb-2">Students</h3>
                    <p className="text-5xl font-bold text-blue-300">
                      {departmentData[selectedDept].students}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-6 rounded-3xl border border-emerald-500/20">
                    <h3 className="text-lg text-slate-300 mb-2">Placements</h3>
                    <p className="text-5xl font-bold text-emerald-300">
                      {departmentData[selectedDept].placements}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 p-6 rounded-3xl border border-pink-500/20">
                    <h3 className="text-lg text-slate-300 mb-2">Research</h3>
                    <p className="text-5xl font-bold text-pink-300">
                      {departmentData[selectedDept].research}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 p-6 rounded-3xl border border-orange-500/20">
                    <h3 className="text-lg text-slate-300 mb-2">Faculty</h3>
                    <p className="text-5xl font-bold text-orange-300">
                      {departmentData[selectedDept].faculty}
                    </p>
                  </div>

                </div>

                <div className="bg-slate-950 p-6 rounded-[28px] border border-slate-800">

                  <h3 className="text-2xl font-bold mb-6 text-white">
                    Charts & Analytics
                  </h3>

                  <ResponsiveContainer width="100%" height={320}>

                    <BarChart
                      data={[
                        {
                          name: "Students",
                          value: departmentData[selectedDept].students,
                        },

                        {
                          name: "Placements",
                          value: departmentData[selectedDept].placements,
                        },

                        {
                          name: "Research",
                          value: departmentData[selectedDept].research,
                        },

                        {
                          name: "Faculty",
                          value: departmentData[selectedDept].faculty,
                        },
                      ]}
                    >

                      <XAxis dataKey="name" stroke="#cbd5e1" />
                      <YAxis stroke="#cbd5e1" />
                      <Tooltip />
                      <Bar dataKey="value" fill="#6366f1" radius={[10, 10, 0, 0]} />

                    </BarChart>

                  </ResponsiveContainer>

                </div>

                <div className="flex gap-5 mt-8 flex-wrap">

                  <button
                    onClick={downloadReport}
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-emerald-900/30 transition"
                  >
                    Download Report
                  </button>

                  <button
                    onClick={() => {

                      const shareText = `
  Department: ${selectedDept}

  Students: ${departmentData[selectedDept].students}

  Placements: ${departmentData[selectedDept].placements}

  Research: ${departmentData[selectedDept].research}
  `;

                      navigator.clipboard.writeText(shareText);

                      alert("Report copied to clipboard successfully");

                    }}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-blue-900/30 transition"
                  >
                    Share Report
                  </button>

                </div>
              </>
            )}
          </div>
        </div>
      </section>
    );

    const renderReports = () => (

      <section className="px-8 lg:px-16 py-12">

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-5xl font-bold text-white">
            Annual Report Preview
          </h2>

          <button
            onClick={() => setPage("dashboard")}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-2xl"
          >
            Dashboard
          </button>

        </div>

        <div className="bg-slate-900/90 rounded-[30px] border border-slate-800 p-10 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">

          <h3 className="text-4xl font-bold text-white mb-8">
            College Annual Report 2026
          </h3>

          <div className="space-y-6 text-slate-300 leading-8 text-lg">

            <p>
              • Student performance improved significantly across all departments.
            </p>

            <p>
              • Placement percentage increased by 18%.
            </p>

            <p>
              • Research publications and innovation activities improved.
            </p>

            <p>
              • Department events, workshops, and seminars conducted successfully.
            </p>

            <p>
              • Financial summaries and academic achievements included.
            </p>

          </div>

          <button
            onClick={() => {

              const reportContent = `
  COLLEGE ANNUAL REPORT 2026

  Overall Student Performance Improved

  Placement Percentage Increased

  Research Activities Expanded

  Annual Events Conducted Successfully
  `;

              const blob = new Blob(
                [reportContent],
                { type: "text/plain" }
              );

              const link = document.createElement("a");

              link.href = URL.createObjectURL(blob);

              link.download = "College_Annual_Report.txt";

              link.click();

            }}
            className="mt-10 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-2xl font-semibold"
          >
            Export Full Report
          </button>

        </div>

      </section>
    );

    const renderAdmin = () => (
      

      <section className="px-8 lg:px-16 py-12">

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-5xl font-bold text-white">
            Admin Dashboard
          </h2>

          <button
            onClick={() => setPage("home")}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-2xl"
          >
            Home
          </button>

        </div>

        {!adminLoggedIn ? (

          <div className="max-w-md mx-auto bg-slate-900/90 p-8 rounded-[30px] border border-slate-800 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">

            <h3 className="text-4xl font-bold text-center mb-8 text-white">
              Admin Login
            </h3>

            <input
              type="text"
              placeholder="Admin Username"
              className="w-full mb-5 p-4 rounded-2xl bg-slate-800 outline-none text-white"
              id="username"
            />

            <input
              type="password"
              placeholder="Admin Password"
              className="w-full mb-5 p-4 rounded-2xl bg-slate-800 outline-none text-white"
              id="password"
            />

            <button
              onClick={() => {

                const username =
                  document.getElementById("username").value;

                const password =
                  document.getElementById("password").value;

                if (
                  username === "admin" &&
                  password === "1234"
                ) {

                  setAdminLoggedIn(true);

                } else {

                  alert("Invalid Credentials");

                }
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-2xl font-semibold transition"
            >
              Login
            </button>

          </div>

        ) : (

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-900/90 p-6 rounded-[28px] border border-slate-800 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Total Departments
              </h3>

              <p className="text-6xl font-bold text-blue-300">
                {departments.length}
              </p>
            </div>

            <div className="bg-slate-900/90 p-6 rounded-[28px] border border-slate-800 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Total Students
              </h3>

              <p className="text-6xl font-bold text-emerald-300">
                1950
              </p>
            </div>

            <div className="bg-slate-900/90 p-6 rounded-[28px] border border-slate-800 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Placement Rate
              </h3>

              <p className="text-6xl font-bold text-pink-300">
                92%
              </p>
            </div>

          </div>

        )}

      </section>
    );

    return (

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">

        <nav className="flex items-center justify-between px-8 lg:px-16 py-5 border-b border-slate-800 sticky top-0 bg-slate-950/80 backdrop-blur-xl z-50">

          <h1 className="text-3xl font-bold text-white">
            College Report Platform
          </h1>

          <div className="flex gap-6 text-lg">

            <button
              onClick={() => setPage("home")}
              className="hover:text-indigo-400 transition"
            >
              Home
            </button>

            <button
              onClick={() => setPage("dashboard")}
              className="hover:text-indigo-400 transition"
            >
              Dashboard
            </button>

            <button
              onClick={() => setPage("reports")}
              className="hover:text-indigo-400 transition"
            >
              Reports
            </button>

            <button
              onClick={() => setPage("admin")}
              className="hover:text-indigo-400 transition"
            >
              Admin
            </button>

          </div>

        </nav>

        {page === "home" && renderHome()}
{page === "login" && <Login />}
{page === "signup" && <Signup />}o

{page === "dashboard" && renderDashboard()}
{page === "reports" && renderReports()}
{page === "admin" && renderAdmin()}

        <footer className="border-t border-slate-800 py-6 text-center text-slate-400 mt-10">
          © 2026 Automated College Annual Report Generation Platform
        </footer>

      </div>
    );
  }
  