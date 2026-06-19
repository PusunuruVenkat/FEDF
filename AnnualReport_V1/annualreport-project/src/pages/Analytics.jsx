import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Analytics() {

  const data = [
    { name: "Students", value: 1000 },
    { name: "Faculty", value: 150 },
    { name: "Research", value: 75 },
    { name: "Placements", value: 90 },
  ];

  const pieData = [
    { name: "CSE", value: 40 },
    { name: "ECE", value: 25 },
    { name: "EEE", value: 15 },
    { name: "MECH", value: 20 },
  ];

  const COLORS = [
    "#2563eb",
    "#7c3aed",
    "#10b981",
    "#f59e0b",
  ];

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-10">

          <h1 className="text-5xl font-bold mb-10">
            Analytics Dashboard
          </h1>

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-slate-900 p-6 rounded-3xl">

              <h2 className="text-2xl font-bold mb-6">
                Institution Statistics
              </h2>

              <ResponsiveContainer width="100%" height={300}>

                <BarChart data={data}>

                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />

                  <Bar
                    dataKey="value"
                    fill="#3b82f6"
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

            <div className="bg-slate-900 p-6 rounded-3xl">

              <h2 className="text-2xl font-bold mb-6">
                Department Distribution
              </h2>

              <ResponsiveContainer width="100%" height={300}>

                <PieChart>

                  <Pie
                    data={pieData}
                    dataKey="value"
                    outerRadius={100}
                  >

                    {pieData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />
                    ))}

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}