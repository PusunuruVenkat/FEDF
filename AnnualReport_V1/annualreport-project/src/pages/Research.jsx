import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Research() {

  const defaultResearch = [
    {
      id: 1,
      title: "AI Based Attendance System",
      department: "CSE",
      status: "Completed",
    },
    {
      id: 2,
      title: "Smart Irrigation Using IoT",
      department: "ECE",
      status: "Ongoing",
    },
    {
      id: 3,
      title: "Blockchain Voting System",
      department: "IT",
      status: "Completed",
    },
    {
      id: 4,
      title: "Electric Vehicle Optimization",
      department: "EEE",
      status: "Ongoing",
    },
  ];

  const [research, setResearch] = useState([]);
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {

    const saved =
      JSON.parse(localStorage.getItem("research"));

    if (!saved) {

      localStorage.setItem(
        "research",
        JSON.stringify(defaultResearch)
      );

      setResearch(defaultResearch);

    } else {

      setResearch(saved);

    }

  }, []);

  const addResearch = () => {

    const newResearch = {
      id: Date.now(),
      title,
      department,
      status,
    };

    const updated = [...research, newResearch];

    setResearch(updated);

    localStorage.setItem(
      "research",
      JSON.stringify(updated)
    );

    setTitle("");
    setDepartment("");
    setStatus("");
  };

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-8">

          <h1 className="text-4xl font-bold mb-8">
            Research Activities
          </h1>

          <div className="bg-slate-900 p-6 rounded-3xl mb-8">

            <div className="grid md:grid-cols-3 gap-4">

              <input
                placeholder="Project Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                className="p-4 bg-slate-800 rounded-xl"
              />

              <input
                placeholder="Department"
                value={department}
                onChange={(e)=>setDepartment(e.target.value)}
                className="p-4 bg-slate-800 rounded-xl"
              />

              <input
                placeholder="Status"
                value={status}
                onChange={(e)=>setStatus(e.target.value)}
                className="p-4 bg-slate-800 rounded-xl"
              />

            </div>

            <button
              onClick={addResearch}
              className="mt-5 bg-blue-600 px-6 py-3 rounded-xl"
            >
              Add Research
            </button>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {research.map((item) => (

              <div
                key={item.id}
                className="bg-slate-900 p-6 rounded-3xl"
              >

                <h2 className="text-xl font-bold">
                  {item.title}
                </h2>

                <p className="mt-2">
                  Department: {item.department}
                </p>

                <p>
                  Status: {item.status}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}