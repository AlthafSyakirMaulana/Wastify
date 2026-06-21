"use client";

import { motion } from "framer-motion";
import { History, Search, Download, Filter, FileText } from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const historyData = [
  { id: "HST-001", date: "20 Jun 2026", customer: "PT. Maju Jaya", waste: "Limbah B3", volume: "2.5 ton", status: "completed", cost: "Rp 2.500.000" },
  { id: "HST-002", date: "19 Jun 2026", customer: "CV. Sejahtera Abadi", waste: "Limbah Organik", volume: "1.2 ton", status: "completed", cost: "Rp 1.200.000" },
  { id: "HST-003", date: "18 Jun 2026", customer: "UD. Berkah Terus", waste: "Limbah Plastik", volume: "800 kg", status: "completed", cost: "Rp 800.000" },
  { id: "HST-004", date: "17 Jun 2026", customer: "PT. Hijau Lestari", waste: "Limbah B3", volume: "3 ton", status: "completed", cost: "Rp 3.000.000" },
  { id: "HST-005", date: "16 Jun 2026", customer: "CV. Karya Mandiri", waste: "Limbah Kertas", volume: "500 kg", status: "completed", cost: "Rp 500.000" },
  { id: "HST-006", date: "15 Jun 2026", customer: "PT. Maju Jaya", waste: "Limbah B3", volume: "2 ton", status: "completed", cost: "Rp 2.000.000" },
  { id: "HST-007", date: "14 Jun 2026", customer: "CV. Sejahtera Abadi", waste: "Limbah Organik", volume: "1 ton", status: "completed", cost: "Rp 1.000.000" },
  { id: "HST-008", date: "13 Jun 2026", customer: "UD. Berkah Terus", waste: "Limbah Plastik", volume: "600 kg", status: "completed", cost: "Rp 600.000" },
];

export default function HistoricalPage() {
  const [search, setSearch] = useState("");
  const [filterMonth, setFilterMonth] = useState("all");

  const filtered = historyData.filter((h) => {
    const matchSearch = h.customer.toLowerCase().includes(search.toLowerCase()) || h.id.toLowerCase().includes(search.toLowerCase());
    const matchMonth = filterMonth === "all" || h.date.includes(filterMonth);
    return matchSearch && matchMonth;
  });

  const totalVolume = filtered.reduce((sum, h) => {
    const num = parseFloat(h.volume.replace(/[^0-9.]/g, ""));
    const multiplier = h.volume.includes("kg") ? 0.001 : 1;
    return sum + num * multiplier;
  }, 0);

  const totalCost = filtered.reduce((sum, h) => {
    return sum + parseInt(h.cost.replace(/[^0-9]/g, ""));
  }, 0);

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="initial" animate="animate" variants={fadeIn} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Historical Waste Management</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Riwayat lengkap data pembuangan dan laporan kepatuhan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              { label: "Total Transaksi", value: filtered.length.toString(), color: "bg-emerald-100 text-emerald-600" },
              { label: "Total Volume", value: `${totalVolume.toFixed(1)} ton`, color: "bg-blue-100 text-blue-600" },
              { label: "Total Biaya", value: `Rp ${(totalCost / 1000000).toFixed(1)} Jt`, color: "bg-amber-100 text-amber-600" },
            ].map((card, i) => (
              <motion.div key={card.label} className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-5" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${card.color}`}>
                  <History className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                <p className="text-xs text-gray-500 mt-1">{card.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" placeholder="Cari pelanggan atau ID..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <select value={filterMonth} onChange={(e) => setFilterMonth(e.target.value)} className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option value="all">Semua Bulan</option>
                <option value="Jun">Juni 2026</option>
                <option value="Mei">Mei 2026</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition-colors">
                <Download className="w-4 h-4" />
                Export Laporan
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 text-gray-500 font-medium">ID</th>
                    <th className="text-left py-3 text-gray-500 font-medium">Tanggal</th>
                    <th className="text-left py-3 text-gray-500 font-medium">Pelanggan</th>
                    <th className="text-left py-3 text-gray-500 font-medium">Jenis Limbah</th>
                    <th className="text-right py-3 text-gray-500 font-medium">Volume</th>
                    <th className="text-right py-3 text-gray-500 font-medium">Biaya</th>
                    <th className="text-center py-3 text-gray-500 font-medium">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((h) => (
                    <tr key={h.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="py-3 text-gray-900 font-medium">{h.id}</td>
                      <td className="py-3 text-gray-600">{h.date}</td>
                      <td className="py-3 text-gray-900">{h.customer}</td>
                      <td className="py-3 text-gray-600">{h.waste}</td>
                      <td className="py-3 text-gray-900 text-right">{h.volume}</td>
                      <td className="py-3 text-gray-900 text-right font-medium">{h.cost}</td>
                      <td className="py-3 text-center">
                        <button className="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                          <FileText className="w-4 h-4" />
                        </button>
                      </td>
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
