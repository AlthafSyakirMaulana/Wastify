"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, PieChart, BarChart3 } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function KeuanganPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Proyeksi Keuangan
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simulasi proyeksi keuangan Wastify untuk tiga tahun pertama.
            </p>
          </motion.div>

          <motion.div
            className="mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Target Penjualan Tahun Pertama
            </h2>
            <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-emerald-600 text-white">
                    <th className="px-6 py-3 text-left text-sm font-semibold">
                      Produk/Layanan
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-semibold">
                      Target
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">
                      Satuan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Waste management limbah rumah tangga/umum", "1.840", "Unit"],
                    ["Waste management limbah B3", "431", "Unit"],
                    ["Waste Monitor", "1.840", "Unit"],
                    ["Legal Assistant", "166", "Unit"],
                  ].map((row, i) => (
                    <tr
                      key={row[0]}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <td className="px-6 py-3 text-sm text-gray-900">
                        {row[0]}
                      </td>
                      <td className="px-6 py-3 text-sm text-gray-900 text-right font-medium">
                        {row[1]}
                      </td>
                      <td className="px-6 py-3 text-sm text-gray-500">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
                Potensi Pendapatan
              </h2>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-sm font-semibold text-gray-500">
                      Periode
                    </th>
                    <th className="py-3 text-right text-sm font-semibold text-gray-500">
                      Pendapatan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Tahun Pertama", "IDR 2.760.000.000"],
                    ["Tahun Kedua", "IDR 4.830.000.000"],
                    ["Tahun Ketiga", "IDR 6.210.000.000"],
                    ["Akumulatif 3 Tahun", "IDR 13.800.000.000"],
                  ].map(([period, revenue]) => (
                    <tr key={period} className="border-b border-gray-100 last:border-0">
                      <td className="py-3 text-sm text-gray-900">{period}</td>
                      <td className="py-3 text-sm text-gray-900 text-right font-medium">
                        {revenue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <PieChart className="w-6 h-6 text-emerald-600" />
                Distribusi Keuangan
              </h2>
              <div className="space-y-4">
                {[
                  ["HPP", "55%"],
                  ["Biaya akuisisi konsumen", "4%"],
                  ["Biaya gaji", "23%"],
                  ["Biaya overhead", "8%"],
                  ["Biaya pajak", "3%"],
                  ["Biaya bunga", "2%"],
                  ["Laba", "5%"],
                ].map(([item, pct]) => (
                  <div key={item}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{item}</span>
                      <span className="font-medium text-gray-900">{pct}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          item === "Laba" ? "bg-emerald-500" : "bg-emerald-300"
                        }`}
                        style={{ width: pct }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-emerald-600" />
                Gross Profit
              </h2>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-sm font-semibold text-gray-500">
                      Tahun
                    </th>
                    <th className="py-3 text-right text-sm font-semibold text-gray-500">
                      Gross Profit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Tahun 1", "IDR 1.307.636.853"],
                    ["Tahun 2", "IDR 3.256.775.632"],
                    ["Tahun 3", "IDR 4.479.453.196"],
                  ].map(([year, profit]) => (
                    <tr key={year} className="border-b border-gray-100 last:border-0">
                      <td className="py-3 text-sm text-gray-900">{year}</td>
                      <td className="py-3 text-sm text-gray-900 text-right font-medium">
                        {profit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-emerald-600" />
                Break Even Point
              </h2>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-sm font-semibold text-gray-500">
                      Tahun
                    </th>
                    <th className="py-3 text-right text-sm font-semibold text-gray-500">
                      BEP per Tahun
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Tahun 1", "1.874 unit"],
                    ["Tahun 2", "2.006 unit"],
                    ["Tahun 3", "2.206 unit"],
                  ].map(([year, bep]) => (
                    <tr key={year} className="border-b border-gray-100 last:border-0">
                      <td className="py-3 text-sm text-gray-900">{year}</td>
                      <td className="py-3 text-sm text-gray-900 text-right font-medium">
                        {bep}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>

          <motion.div
            className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Informasi Tambahan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ["Periode pengembalian", "268,45 bulan"],
                ["Biaya akuisisi pembeli baru / CAC", "IDR 0"],
                ["EBITDA tahun pertama", "IDR 323.636.805"],
                ["Pertumbuhan pendapatan tahun kedua", "74%"],
                ["Pertumbuhan pendapatan tahun ketiga", "29%"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="p-4 bg-emerald-50 rounded-xl border border-emerald-100"
                >
                  <div className="text-xs text-emerald-600 font-medium uppercase tracking-wider mb-1">
                    {label}
                  </div>
                  <div className="text-lg font-bold text-gray-900">{value}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-gray-400 italic">
              Data pada halaman ini merupakan simulasi dan tidak menggambarkan
              kondisi keuangan perusahaan sesungguhnya.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
