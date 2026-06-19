import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Department() {

  const defaultDepartments = [
    {
      id: 1,
      name: "Computer Science Engineering",
      hod: "Dr. Ramesh Kumar",
      students: 480,
    },
    {
      id: 2,
      name: "Information Technology",
      hod: "Dr. Kavitha Rao",
      students: 420,
    },
    {
      id: 3,
      name: "Electronics & Communication",
      hod: "Dr. Prasad",
      students: 520,
    },
    {
      id: 4,
      name: "Mechanical Engineering",
      hod: "Dr. Srinivas",
      students: 390,
    },
  ];

  const [departments, setDepartments] = useState([]);

  const [name, setName] = useState("");
  const [hod, setHod] = useState("");
  const [students, setStudents] = useState("");

  const isAdmin = true;

  useEffect(() => {

    const saved =
      JSON.parse(localStorage.getItem("departments"));

    if (!saved) {

      localStorage.setItem(
        "departments",
        JSON.stringify(defaultDepartments)
      );

      setDepartments(defaultDepartments);

    } else {

      setDepartments(saved);

    }

  }, []);

  const addDepartment = () => {

    const newDepartment = {
      id: Date.now(),
      name,
      hod,
      students,
    };

    const updated =
      [...departments, newDepartment];

    setDepartments(updated);

    localStorage.setItem(
      "departments",
      JSON.stringify(updated)
    );

    setName("");
    setHod("");
    setStudents("");
  };

  const deleteDepartment = (id) => {

    const updated =
      departments.filter((d) => d.id !== id);

    setDepartments(updated);

    localStorage.setItem(
      "departments",
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
            Department Management
          </h1>

          {isAdmin && (

            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 mb-8">

              <h2 className="text-2xl font-bold mb-6">
                Add Department
              </h2>

              <div className="grid md:grid-cols-3 gap-4">

                <input
                  placeholder="Department Name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  className="p-4 bg-slate-800 rounded-xl"
                />

                <input
                  placeholder="HOD Name"
                  value={hod}
                  onChange={(e)=>setHod(e.target.value)}
                  className="p-4 bg-slate-800 rounded-xl"
                />

                <input
                  placeholder="Student Count"
                  value={students}
                  onChange={(e)=>setStudents(e.target.value)}
                  className="p-4 bg-slate-800 rounded-xl"
                />

              </div>

              <button
                onClick={addDepartment}
                className="mt-6 bg-blue-600 px-6 py-3 rounded-xl"
              >
                Add Department
              </button>

            </div>

          )}

          <div className="grid md:grid-cols-2 gap-6">

            {departments.map((dept) => (

              <div
                key={dept.id}
                className="bg-slate-900 p-6 rounded-3xl border border-slate-800"
              >

                <h2 className="text-2xl font-bold mb-3">
                  {dept.name}
                </h2>

                <p className="text-slate-300">
                  HOD: {dept.hod}
                </p>

                <p className="text-slate-300 mt-2">
                  Students: {dept.students}
                </p>

                <button
                  onClick={() =>
                    deleteDepartment(dept.id)
                  }
                  className="mt-4 bg-red-600 px-4 py-2 rounded-lg"
                >
                  Delete
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}