"use client";

import { motion } from "framer-motion";
import { Trash2, AlertTriangle, TrendingUp, Droplets, Factory, Recycle } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const wasteData = [
  { type: "Limbah B3", volume: "4.2 ton", percentage: 45, color: "bg-red-500", icon: AlertTriangle },
  { type: "Limbah Organik", volume: "2.8 ton", percentage: 30, color: "bg-emerald-500", icon: Droplets },
  { type: "Limbah Plastik", volume: "1.5 ton", percentage: 16, color: "bg-amber-500", icon: Factory },
  { type: "Limbah Kertas", volume: "0.8 ton", percentage: 9, color: "bg-blue-500", icon: Recycle },
];

const recentActivity = [
  { id: "ACT-001", location: "PT. Maju Jaya - Surabaya", waste: "Limbah B3", volume: "500 kg", time: "10 menit lalu", status: "completed" },
  { id: "ACT-002", location: "CV. Sejahtera Abadi - Sidoarjo", waste: "Limbah Organik", volume: "300 kg", time: "25 menit lalu", status: "completed" },
  { id: "ACT-003", location: "UD. Berkah Terus - Gresik", waste: "Limbah Plastik", volume: "200 kg", time: "1 jam lalu", status: "in_progress" },
  { id: "ACT-004", location: "PT. Hijau Lestari - Pasuruan", waste: "Limbah B3", volume: "750 kg", time: "2 jam lalu", status: "scheduled" },
];

export default function MonitoringPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="initial" animate="animate" variants={fadeIn} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Waste Monitoring</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pantau volume limbah secara real-time dari mana saja.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Limbah Hari Ini", value: "9.3 ton", change: "+12%", color: "bg-emerald-100 text-emerald-600" },
              { label: "Limbah Diproses", value: "7.1 ton", change: "76%", color: "bg-blue-100 text-blue-600" },
              { label: "Dalam Antrian", value: "2.2 ton", change: "24%", color: "bg-amber-100 text-amber-600" },
              { label: "Peringatan Kapasitas", value: "3", change: "+1", color: "bg-red-100 text-red-600" },
            ].map((card, i) => (
              <motion.div key={card.label} className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-5" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${card.color}`}>
                  <Trash2 className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                <p className="text-xs text-gray-500 mt-1">{card.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <motion.div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Komposisi Limbah</h2>
              <div className="space-y-4">
                {wasteData.map((w) => (
                  <div key={w.type}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="flex items-center gap-2 text-gray-700">
                        <w.icon className="w-4 h-4" />
                        {w.type}
                      </span>
                      <span className="text-gray-500 font-medium">{w.volume} ({w.percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3">
                      <div className={`h-3 rounded-full ${w.color}`} style={{ width: `${w.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Tren Volume (7 Hari Terakhir)</h2>
              <div className="flex items-end gap-2 h-48">
                {[
                  { day: "Sen", value: 7.2 },
                  { day: "Sel", value: 8.5 },
                  { day: "Rab", value: 6.8 },
                  { day: "Kam", value: 9.1 },
                  { day: "Jum", value: 7.9 },
                  { day: "Sab", value: 5.2 },
                  { day: "Min", value: 4.8 },
                ].map((d) => (
                  <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
                    <span className="text-xs text-gray-500">{d.value}</span>
                    <div className="w-full bg-emerald-500 rounded-t-lg" style={{ height: `${(d.value / 9.1) * 100}%` }} />
                    <span className="text-xs font-medium text-gray-600">{d.day}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5, delay: 0.2 }}>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Aktivitas Terkini</h2>
            <div className="space-y-4">
              {recentActivity.map((act) => (
                <div key={act.id} className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    act.status === "completed" ? "bg-emerald-100" : act.status === "in_progress" ? "bg-blue-100" : "bg-amber-100"
                  }`}>
                    <Trash2 className={`w-4 h-4 ${
                      act.status === "completed" ? "text-emerald-600" : act.status === "in_progress" ? "text-blue-600" : "text-amber-600"
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{act.location}</p>
                    <p className="text-xs text-gray-500">{act.waste} &middot; {act.volume} &middot; {act.time}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    act.status === "completed" ? "bg-emerald-100 text-emerald-700" : act.status === "in_progress" ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"
                  }`}>
                    {act.status === "completed" ? "Selesai" : act.status === "in_progress" ? "Diproses" : "Terjadwal"}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
