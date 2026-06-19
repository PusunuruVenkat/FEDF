import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Placements() {

  const defaultPlacements = [
    {
      id: 1,
      company: "TCS",
      selected: 120,
    },
    {
      id: 2,
      company: "Infosys",
      selected: 95,
    },
    {
      id: 3,
      company: "Wipro",
      selected: 80,
    },
    {
      id: 4,
      company: "Accenture",
      selected: 72,
    },
  ];

  const [placements, setPlacements] = useState([]);

  useEffect(() => {

    const saved =
      JSON.parse(localStorage.getItem("placements"));

    if (!saved) {

      localStorage.setItem(
        "placements",
        JSON.stringify(defaultPlacements)
      );

      setPlacements(defaultPlacements);

    } else {

      setPlacements(saved);

    }

  }, []);

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-8">

          <h1 className="text-4xl font-bold mb-8">
            Placement Statistics
          </h1>

          <div className="grid md:grid-cols-2 gap-6">

            {placements.map((item) => (

              <div
                key={item.id}
                className="bg-slate-900 p-6 rounded-3xl"
              >

                <h2 className="text-2xl font-bold">
                  {item.company}
                </h2>

                <p className="mt-3 text-lg">
                  Students Selected:
                  {" "}
                  {item.selected}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}