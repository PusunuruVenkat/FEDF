import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Students() {

  const defaultStudents = [
    {
      id: 1,
      rollNo: "CSE101",
      name: "Rahul Sharma",
      department: "CSE",
      cgpa: 9.2,
    },
    {
      id: 2,
      rollNo: "CSE102",
      name: "Priya Reddy",
      department: "CSE",
      cgpa: 8.9,
    },
    {
      id: 3,
      rollNo: "IT103",
      name: "Anjali Gupta",
      department: "IT",
      cgpa: 9.4,
    },
    {
      id: 4,
      rollNo: "ECE104",
      name: "Arjun Kumar",
      department: "ECE",
      cgpa: 8.7,
    },
    {
      id: 5,
      rollNo: "ME105",
      name: "Vikram Singh",
      department: "MECH",
      cgpa: 8.5,
    },
    {
      id: 6,
      rollNo: "EEE106",
      name: "Sneha Patel",
      department: "EEE",
      cgpa: 9.1,
    },
    {
      id: 7,
      rollNo: "CSE107",
      name: "Kiran Rao",
      department: "CSE",
      cgpa: 8.8,
    },
    {
      id: 8,
      rollNo: "IT108",
      name: "Pooja Sharma",
      department: "IT",
      cgpa: 9.0,
    }
  ];

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [department, setDepartment] = useState("");
  const [cgpa, setCgpa] = useState("");

  const isAdmin = true;

  useEffect(() => {

    const saved =
      JSON.parse(localStorage.getItem("students"));

    if (!saved) {

      localStorage.setItem(
        "students",
        JSON.stringify(defaultStudents)
      );

      setStudents(defaultStudents);

    } else {

      setStudents(saved);

    }

  }, []);

  const addStudent = () => {

    const newStudent = {
      id: Date.now(),
      rollNo,
      name,
      department,
      cgpa,
    };

    const updated = [...students, newStudent];

    setStudents(updated);

    localStorage.setItem(
      "students",
      JSON.stringify(updated)
    );

    setName("");
    setRollNo("");
    setDepartment("");
    setCgpa("");
  };

  const deleteStudent = (id) => {

    const updated =
      students.filter((s) => s.id !== id);

    setStudents(updated);

    localStorage.setItem(
      "students",
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
            Student Management
          </h1>

          {isAdmin && (

            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 mb-8">

              <h2 className="text-2xl font-bold mb-6">
                Add Student
              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  placeholder="Student Name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  className="p-4 bg-slate-800 rounded-xl"
                />

                <input
                  placeholder="Roll Number"
                  value={rollNo}
                  onChange={(e)=>setRollNo(e.target.value)}
                  className="p-4 bg-slate-800 rounded-xl"
                />

                <input
                  placeholder="Department"
                  value={department}
                  onChange={(e)=>setDepartment(e.target.value)}
                  className="p-4 bg-slate-800 rounded-xl"
                />

                <input
                  placeholder="CGPA"
                  value={cgpa}
                  onChange={(e)=>setCgpa(e.target.value)}
                  className="p-4 bg-slate-800 rounded-xl"
                />

              </div>

              <button
                onClick={addStudent}
                className="mt-6 bg-blue-600 px-6 py-3 rounded-xl"
              >
                Add Student
              </button>

            </div>

          )}

          <input
            placeholder="Search Student..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="w-full p-4 bg-slate-800 rounded-xl mb-8"
          />

          <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">

            <table className="w-full">

              <thead className="bg-slate-800">

                <tr>

                  <th className="p-4 text-left">
                    Roll No
                  </th>

                  <th className="p-4 text-left">
                    Name
                  </th>

                  <th className="p-4 text-left">
                    Department
                  </th>

                  <th className="p-4 text-left">
                    CGPA
                  </th>

                  <th className="p-4 text-left">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {students
                  .filter((student)=>
                    student.name
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  )
                  .map((student)=>(

                  <tr
                    key={student.id}
                    className="border-t border-slate-800"
                  >

                    <td className="p-4">
                      {student.rollNo}
                    </td>

                    <td className="p-4">
                      {student.name}
                    </td>

                    <td className="p-4">
                      {student.department}
                    </td>

                    <td className="p-4">
                      {student.cgpa}
                    </td>

                    <td className="p-4">

                      {isAdmin && (

                        <button
                          onClick={() =>
                            deleteStudent(student.id)
                          }
                          className="bg-red-600 px-4 py-2 rounded-lg"
                        >
                          Delete
                        </button>

                      )}

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