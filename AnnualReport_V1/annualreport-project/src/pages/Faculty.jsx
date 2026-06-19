import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Faculty() {

  const defaultFaculty = [
    {
      id: 1,
      employeeId: "FAC101",
      name: "Dr. Ramesh Kumar",
      department: "CSE",
      designation: "Professor",
      publications: 32,
    },
    {
      id: 2,
      employeeId: "FAC102",
      name: "Dr. Kavitha Rao",
      department: "IT",
      designation: "Associate Professor",
      publications: 21,
    },
    {
      id: 3,
      employeeId: "FAC103",
      name: "Dr. Prasad",
      department: "ECE",
      designation: "Professor",
      publications: 28,
    },
    {
      id: 4,
      employeeId: "FAC104",
      name: "Dr. Srinivas",
      department: "MECH",
      designation: "Professor",
      publications: 17,
    },
    {
      id: 5,
      employeeId: "FAC105",
      name: "Dr. Sneha Patel",
      department: "EEE",
      designation: "Assistant Professor",
      publications: 12,
    },
  ];

  const [faculty, setFaculty] = useState([]);

  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [publications, setPublications] = useState("");

  const isAdmin = true;

  useEffect(() => {

    const saved =
      JSON.parse(localStorage.getItem("faculty"));

    if (!saved) {

      localStorage.setItem(
        "faculty",
        JSON.stringify(defaultFaculty)
      );

      setFaculty(defaultFaculty);

    } else {

      setFaculty(saved);

    }

  }, []);

  const addFaculty = () => {

    const newFaculty = {
      id: Date.now(),
      employeeId,
      name,
      department,
      designation,
      publications,
    };

    const updated = [...faculty, newFaculty];

    setFaculty(updated);

    localStorage.setItem(
      "faculty",
      JSON.stringify(updated)
    );

    setName("");
    setEmployeeId("");
    setDepartment("");
    setDesignation("");
    setPublications("");
  };

  const deleteFaculty = (id) => {

    const updated =
      faculty.filter((f) => f.id !== id);

    setFaculty(updated);

    localStorage.setItem(
      "faculty",
      JSON.stringify(updated)
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-8">

          <h1 className="text-4xl font-bold mb-8">
            Faculty Management
          </h1>

          {isAdmin && (

            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 mb-8">

              <h2 className="text-2xl font-bold mb-6">
                Add Faculty
              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  placeholder="Faculty Name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  className="p-4 bg-slate-800 rounded-xl"
                />

                <input
                  placeholder="Employee ID"
                  value={employeeId}
                  onChange={(e)=>setEmployeeId(e.target.value)}
                  className="p-4 bg-slate-800 rounded-xl"
                />

                <input
                  placeholder="Department"
                  value={department}
                  onChange={(e)=>setDepartment(e.target.value)}
                  className="p-4 bg-slate-800 rounded-xl"
                />

                <input
                  placeholder="Designation"
                  value={designation}
                  onChange={(e)=>setDesignation(e.target.value)}
                  className="p-4 bg-slate-800 rounded-xl"
                />

                <input
                  placeholder="Publications"
                  value={publications}
                  onChange={(e)=>setPublications(e.target.value)}
                  className="p-4 bg-slate-800 rounded-xl"
                />

              </div>

              <button
                onClick={addFaculty}
                className="mt-6 bg-blue-600 px-6 py-3 rounded-xl"
              >
                Add Faculty
              </button>

            </div>

          )}

          <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">

            <table className="w-full">

              <thead className="bg-slate-800">

                <tr>

                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Department</th>
                  <th className="p-4 text-left">Designation</th>
                  <th className="p-4 text-left">Publications</th>
                  <th className="p-4 text-left">Action</th>

                </tr>

              </thead>

              <tbody>

                {faculty.map((f) => (

                  <tr
                    key={f.id}
                    className="border-t border-slate-800"
                  >

                    <td className="p-4">{f.employeeId}</td>
                    <td className="p-4">{f.name}</td>
                    <td className="p-4">{f.department}</td>
                    <td className="p-4">{f.designation}</td>
                    <td className="p-4">{f.publications}</td>

                    <td className="p-4">

                      <button
                        onClick={() =>
                          deleteFaculty(f.id)
                        }
                        className="bg-red-600 px-4 py-2 rounded-lg"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}