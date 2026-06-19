import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      {/* HERO SECTION */}
      <section className="w-full px-16 py-20">

        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[75vh]">

          {/* LEFT SIDE */}
          <div>

            <div className="inline-block px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8">
              Smart Annual Report Automation Platform
            </div>

            <h1 className="text-7xl font-bold leading-tight mb-8">
              Automated College Annual Report Platform
            </h1>

            <p className="text-xl text-slate-300 leading-10 max-w-2xl mb-10">
              Manage student records, faculty achievements,
              research activities, placements, events and
              generate professional annual reports through
              one centralized digital platform.
            </p>

            <div className="flex gap-5">

              <Link
                to="/signup"
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  text-lg
                  transition
                "
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="
                  border
                  border-slate-700
                  hover:border-blue-500
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  text-lg
                  transition
                "
              >
                Login
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <div
              className="
                bg-slate-900/70
                border
                border-slate-800
                rounded-[32px]
                p-10
                backdrop-blur-md
                shadow-2xl
              "
            >

              <h2 className="text-3xl font-bold mb-8">
                Institution Overview
              </h2>

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-blue-500/15 rounded-3xl p-8 text-center">
                  <h3 className="text-5xl font-bold text-blue-400">
                    25+
                  </h3>
                  <p className="mt-3 text-slate-300">
                    Departments
                  </p>
                </div>

                <div className="bg-purple-500/15 rounded-3xl p-8 text-center">
                  <h3 className="text-5xl font-bold text-purple-400">
                    10K+
                  </h3>
                  <p className="mt-3 text-slate-300">
                    Students
                  </p>
                </div>

                <div className="bg-emerald-500/15 rounded-3xl p-8 text-center">
                  <h3 className="text-5xl font-bold text-emerald-400">
                    500+
                  </h3>
                  <p className="mt-3 text-slate-300">
                    Faculty
                  </p>
                </div>

                <div className="bg-orange-500/15 rounded-3xl p-8 text-center">
                  <h3 className="text-5xl font-bold text-orange-400">
                    92%
                  </h3>
                  <p className="mt-3 text-slate-300">
                    Placement Rate
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES SECTION */}

      <section className="px-16 pb-24">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold mb-4">
            Platform Features
          </h2>

          <p className="text-slate-400 text-lg">
            Everything required to manage a college annual report
            from one dashboard.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Student Records
            </h3>
            <p className="text-slate-400">
              Maintain student profiles, academic performance,
              attendance and achievements.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Faculty Management
            </h3>
            <p className="text-slate-400">
              Store faculty publications, awards,
              research and departmental activities.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Research Tracking
            </h3>
            <p className="text-slate-400">
              Manage journals, conferences,
              funded projects and innovations.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Placement Cell
            </h3>
            <p className="text-slate-400">
              Track company visits, offers,
              recruitment statistics and outcomes.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Analytics Dashboard
            </h3>
            <p className="text-slate-400">
              Interactive charts and visual reports
              for institutional insights.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              PDF Report Generation
            </h3>
            <p className="text-slate-400">
              Generate professional annual reports
              instantly in downloadable format.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}