"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, TrendingDown, Trash2, Building2, AlertTriangle, Download } from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const summaryCards = [
  { label: "Total Limbah Diproses", value: "12.5 ton", change: "+8%", icon: Trash2, color: "bg-emerald-100 text-emerald-600", trend: "up" },
  { label: "Pelanggan Aktif", value: "24", change: "+3", icon: Building2, color: "bg-blue-100 text-blue-600", trend: "up" },
  { label: "Pengaduan Bulan Ini", value: "2", change: "-50%", icon: AlertTriangle, color: "bg-amber-100 text-amber-600", trend: "down" },
  { label: "Tingkat Kepatuhan", value: "94%", change: "+2%", icon: BarChart3, color: "bg-purple-100 text-purple-600", trend: "up" },
];

const monthlyData = [
  { month: "Jan", waste: 8.2, revenue: 8200 },
  { month: "Feb", waste: 9.1, revenue: 9100 },
  { month: "Mar", waste: 7.8, revenue: 7800 },
  { month: "Apr", waste: 10.5, revenue: 10500 },
  { month: "Mei", waste: 11.2, revenue: 11200 },
  { month: "Jun", waste: 12.5, revenue: 12500 },
];

const wasteTypeData = [
  { type: "Limbah B3", percentage: 45, color: "bg-red-500" },
  { type: "Limbah Organik", percentage: 25, color: "bg-emerald-500" },
  { type: "Limbah Plastik", percentage: 18, color: "bg-amber-500" },
  { type: "Limbah Kertas", percentage: 12, color: "bg-blue-500" },
];

const topCustomers = [
  { name: "PT. Maju Jaya", total: "4.5 ton", revenue: "Rp 4.700.000" },
  { name: "PT. Hijau Lestari", total: "3 ton", revenue: "Rp 3.000.000" },
  { name: "CV. Sejahtera Abadi", total: "2.4 ton", revenue: "Rp 2.400.000" },
  { name: "UD. Berkah Terus", total: "1.6 ton", revenue: "Rp 1.600.000" },
];

export default function AnalyticsPage() {
  const [period, setPeriod] = useState("6m");

  const maxWaste = Math.max(...monthlyData.map((d) => d.waste));
  const maxRevenue = Math.max(...monthlyData.map((d) => d.revenue));

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12" initial="initial" animate="animate" variants={fadeIn} transition={{ duration: 0.6 }}>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">Analytics Report</h1>
              <p className="text-lg text-gray-600">Laporan dan analisis pengelolaan limbah Anda.</p>
            </div>
            <div className="flex items-center gap-3">
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="1m">1 Bulan</option>
                <option value="3m">3 Bulan</option>
                <option value="6m">6 Bulan</option>
                <option value="1y">1 Tahun</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition-colors">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {summaryCards.map((card, i) => {
              const TrendIcon = card.trend === "up" ? TrendingUp : TrendingDown;
              return (
                <motion.div
                  key={card.label}
                  className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-5"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.color}`}>
                      <card.icon className="w-5 h-5" />
                    </div>
                    <span className={`flex items-center gap-0.5 text-xs font-medium ${
                      card.trend === "up" ? "text-emerald-600" : "text-red-500"
                    }`}>
                      <TrendIcon className="w-3 h-3" />
                      {card.change}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{card.label}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <motion.div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Volume Limbah per Bulan (ton)</h2>
              <div className="flex items-end gap-3 h-48">
                {monthlyData.map((d) => (
                  <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
                    <span className="text-xs text-gray-500">{d.waste}</span>
                    <div
                      className="w-full bg-emerald-500 rounded-t-lg transition-all hover:bg-emerald-600"
                      style={{ height: `${(d.waste / maxWaste) * 100}%` }}
                    />
                    <span className="text-xs font-medium text-gray-600">{d.month}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Komposisi Jenis Limbah</h2>
              <div className="space-y-4">
                {wasteTypeData.map((w) => (
                  <div key={w.type}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{w.type}</span>
                      <span className="text-gray-500 font-medium">{w.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3">
                      <div className={`h-3 rounded-full ${w.color}`} style={{ width: `${w.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5, delay: 0.2 }}>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Pelanggan Teratas</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-3 text-gray-500 font-medium">Pelanggan</th>
                    <th className="text-left py-3 text-gray-500 font-medium">Total Limbah</th>
                    <th className="text-left py-3 text-gray-500 font-medium">Pendapatan</th>
                  </tr>
                </thead>
                <tbody>
                  {topCustomers.map((c) => (
                    <tr key={c.name} className="border-b border-gray-50">
                      <td className="py-3 text-gray-900 font-medium">{c.name}</td>
                      <td className="py-3 text-gray-600">{c.total}</td>
                      <td className="py-3 text-gray-900 font-medium">{c.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
