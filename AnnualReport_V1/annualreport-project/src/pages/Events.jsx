import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Events() {

  const defaultEvents = [
    {
      id: 1,
      title: "National Tech Fest",
      date: "12 Feb 2026",
    },
    {
      id: 2,
      title: "Research Symposium",
      date: "18 Mar 2026",
    },
    {
      id: 3,
      title: "AI Workshop",
      date: "25 Apr 2026",
    },
    {
      id: 4,
      title: "Hackathon 2026",
      date: "08 May 2026",
    },
  ];

  const [events, setEvents] = useState([]);

  useEffect(() => {

    const saved =
      JSON.parse(localStorage.getItem("events"));

    if (!saved) {

      localStorage.setItem(
        "events",
        JSON.stringify(defaultEvents)
      );

      setEvents(defaultEvents);

    } else {

      setEvents(saved);

    }

  }, []);

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-8">

          <h1 className="text-4xl font-bold mb-8">
            College Events
          </h1>

          <div className="grid md:grid-cols-2 gap-6">

            {events.map((event) => (

              <div
                key={event.id}
                className="bg-slate-900 p-6 rounded-3xl"
              >

                <h2 className="text-2xl font-bold">
                  {event.title}
                </h2>

                <p className="mt-3">
                  Event Date: {event.date}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}