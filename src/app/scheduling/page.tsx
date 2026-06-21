"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Truck, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const months = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

const dummySchedules = [
  { id: 1, customer: "PT. Maju Jaya", address: "Jl. Raya Industri No. 10, Surabaya", waste: "Limbah B3", time: "09:00 - 11:00", date: 15, status: "confirmed" },
  { id: 2, customer: "CV. Sejahtera Abadi", address: "Jl. Merdeka No. 25, Sidoarjo", waste: "Limbah Organik", time: "10:00 - 12:00", date: 15, status: "confirmed" },
  { id: 3, customer: "UD. Berkah Terus", address: "Jl. Ahmad Yani No. 88, Gresik", waste: "Limbah Plastik", time: "13:00 - 14:30", date: 16, status: "pending" },
  { id: 4, customer: "PT. Hijau Lestari", address: "Jl. Industri No. 5, Pasuruan", waste: "Limbah B3", time: "08:00 - 10:00", date: 17, status: "confirmed" },
  { id: 5, customer: "CV. Karya Mandiri", address: "Jl. Raya Tropodo, Mojokerto", waste: "Limbah Kertas", time: "11:00 - 12:30", date: 18, status: "pending" },
];

export default function SchedulingPage() {
  const [month, setMonth] = useState(5);
  const [year] = useState(2026);
  const [selectedDate, setSelectedDate] = useState<number | null>(15);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const schedulesForSelected = dummySchedules.filter((s) => s.date === selectedDate);

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="initial" animate="animate" variants={fadeIn} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Penjadwalan</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Atur dan kelola jadwal penjemputan limbah Anda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div className="lg:col-span-1" initial="initial" animate="animate" variants={fadeIn} transition={{ duration: 0.5 }}>
              <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <button onClick={() => setMonth((m) => (m === 0 ? 11 : m - 1))} className="p-1 hover:bg-gray-100 rounded-lg">
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <span className="font-semibold text-gray-900">{months[month]} {year}</span>
                  <button onClick={() => setMonth((m) => (m === 11 ? 0 : m + 1))} className="p-1 hover:bg-gray-100 rounded-lg">
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((d) => (
                    <div key={d} className="text-xs font-medium text-gray-400 py-1">{d}</div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const hasSchedule = dummySchedules.some((s) => s.date === day);
                    return (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        className={`relative py-2 text-sm rounded-lg transition-colors ${
                          selectedDate === day
                            ? "bg-emerald-600 text-white"
                            : hasSchedule
                            ? "bg-emerald-50 text-emerald-700 font-medium hover:bg-emerald-100"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {day}
                        {hasSchedule && selectedDate !== day && (
                          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div className="lg:col-span-2" initial="initial" animate="animate" variants={fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Jadwal {months[month]} {selectedDate ? selectedDate : ""}
                  </h2>
                </div>

                {schedulesForSelected.length === 0 ? (
                  <div className="text-center py-12 text-gray-400">
                    <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p className="text-sm">Tidak ada jadwal di tanggal ini</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {schedulesForSelected.map((s) => (
                      <div key={s.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Truck className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="font-semibold text-gray-900 text-sm">{s.customer}</h3>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                              s.status === "confirmed" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                            }`}>
                              {s.status === "confirmed" ? "Dikonfirmasi" : "Menunggu"}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <MapPin className="w-3 h-3" />
                            {s.address}
                          </div>
                          <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {s.time}
                            </span>
                            <span>{s.waste}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
