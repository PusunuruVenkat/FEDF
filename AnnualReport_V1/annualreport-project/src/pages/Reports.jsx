import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Reports() {

  const students =
    JSON.parse(localStorage.getItem("students")) || [];

  const faculty =
    JSON.parse(localStorage.getItem("faculty")) || [];

  const departments =
    JSON.parse(localStorage.getItem("departments")) || [];

  const research =
    JSON.parse(localStorage.getItem("research")) || [];

  const downloadReport = () => {

    const report = `
COLLEGE ANNUAL REPORT

Departments : ${departments.length}

Students : ${students.length}

Faculty : ${faculty.length}

Research Projects : ${research.length}
`;

    const blob =
      new Blob([report], { type: "text/plain" });

    const link =
      document.createElement("a");

    link.href =
      URL.createObjectURL(blob);

    link.download =
      "Annual_Report.txt";

    link.click();
  };

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-10">

          <h1 className="text-4xl font-bold mb-8">
            Annual Report Preview
          </h1>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              College Annual Report
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-slate-800 p-5 rounded-2xl">
                Departments : {departments.length}
              </div>

              <div className="bg-slate-800 p-5 rounded-2xl">
                Students : {students.length}
              </div>

              <div className="bg-slate-800 p-5 rounded-2xl">
                Faculty : {faculty.length}
              </div>

              <div className="bg-slate-800 p-5 rounded-2xl">
                Research Projects : {research.length}
              </div>

            </div>

            <button
              onClick={downloadReport}
              className="mt-8 bg-blue-600 px-6 py-3 rounded-xl"
            >
              Download Report
            </button>

          </div>

        </main>

      </div>

    </div>
  );
}