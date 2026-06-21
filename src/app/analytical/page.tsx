"use client";

import { motion } from "framer-motion";
import { Cpu, TrendingUp, TrendingDown, Lightbulb, Calendar, BarChart3 } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const predictions = [
  { month: "Jul 2026", predicted: 13.2, actual: null },
  { month: "Agu 2026", predicted: 14.1, actual: null },
  { month: "Sep 2026", predicted: 12.8, actual: null },
  { month: "Okt 2026", predicted: 15.3, actual: null },
  { month: "Nov 2026", predicted: 14.7, actual: null },
  { month: "Des 2026", predicted: 16.2, actual: null },
];

const recommendations = [
  { icon: Calendar, title: "Optimasi Jadwal", desc: "Kurangi jadwal penjemputan di hari Sabtu karena volume turun 30%", impact: "Hemat 15% biaya operasional" },
  { icon: TrendingDown, title: "Reduksi Limbah Plastik", desc: "Terapkan program daur ulang untuk pelanggan dengan volume plastik tinggi", impact: "Kurangi 20% limbah ke TPA" },
  { icon: Lightbulb, title: "Efisiensi Rute", desc: "Gabungkan penjemputan di wilayah Sidoarjo dan Gresik pada hari yang sama", impact: "Hemat 25% bahan bakar" },
];

export default function AnalyticalPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="initial" animate="animate" variants={fadeIn} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Analytical Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prediksi volume limbah dan optimasi operasional berbasis AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              { icon: BarChart3, label: "Akurasi Prediksi", value: "92%", color: "bg-emerald-100 text-emerald-600" },
              { icon: TrendingUp, label: "Efisiensi Operasional", value: "+35%", color: "bg-blue-100 text-blue-600" },
              { icon: Lightbulb, label: "Rekomendasi Aktif", value: "12", color: "bg-amber-100 text-amber-600" },
            ].map((card, i) => (
              <motion.div key={card.label} className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-5" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${card.color}`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                <p className="text-xs text-gray-500 mt-1">{card.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <motion.div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Prediksi Volume Limbah (ton)</h2>
              <div className="flex items-end gap-3 h-48">
                {predictions.map((p) => (
                  <div key={p.month} className="flex-1 flex flex-col items-center gap-2">
                    <span className="text-xs text-gray-500">{p.predicted}</span>
                    <div className="w-full bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t-lg opacity-80" style={{ height: `${(p.predicted / 16.2) * 100}%` }} />
                    <span className="text-xs font-medium text-gray-600 text-center">{p.month}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4 text-center">Prediksi 6 bulan ke depan berdasarkan data historis</p>
            </motion.div>

            <motion.div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Rekomendasi AI</h2>
              <div className="space-y-4">
                {recommendations.map((rec) => (
                  <div key={rec.title} className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <rec.icon className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{rec.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{rec.desc}</p>
                        <span className="inline-block mt-1 text-xs font-medium text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          {rec.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
