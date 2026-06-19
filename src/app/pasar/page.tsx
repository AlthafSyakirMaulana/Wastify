"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Building2, Target } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function PasarPage() {
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
              Ukuran Pasar
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Potensi pasar pengelolaan limbah di Indonesia sangat besar dengan
              nilai mencapai puluhan triliun rupiah.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: TrendingUp,
                label: "TAM",
                value: "Rp50 - 80 T",
                desc: "Pasar pengelolaan limbah Indonesia",
              },
              {
                icon: Building2,
                label: "SAM",
                value: "Rp3 - 5 T",
                desc: "UMKM dan industri skala menengah",
              },
              {
                icon: Target,
                label: "SOM",
                value: "Rp3 M",
                desc: "Jawa Timur dan Jabodetabek tahun pertama",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="p-8 bg-white rounded-2xl border border-emerald-100 shadow-sm text-center"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <item.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <div className="text-sm font-medium text-emerald-600 uppercase tracking-wider mb-2">
                  {item.label}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {item.value}
                </div>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Analisis Kompetitor
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl border border-emerald-100 shadow-sm">
                <thead>
                  <tr className="bg-emerald-600 text-white">
                    <th className="px-4 py-3 text-left text-sm font-semibold">
                      Pesaing
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">
                      IoT Monitoring
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">
                      Dashboard Digital
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">
                      Fokus UMKM
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">
                      Harga Terjangkau
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Waste4Change", "Tidak", "Tidak", "Ya", "Tidak"],
                    ["BANKSAMPAH.ID", "Tidak", "Ya", "Ya", "Ya"],
                    ["PeduliSampah.id", "Tidak", "Ya", "Ya", "Ya"],
                    ["Bank Sampah Lokal", "Tidak", "Tidak", "Ya", "Ya"],
                  ].map((row, i) => (
                    <tr
                      key={row[0]}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {row[0]}
                      </td>
                      {row.slice(1).map((cell, j) => (
                        <td
                          key={j}
                          className={`px-4 py-3 text-sm text-center ${
                            cell === "Ya"
                              ? "text-emerald-600 font-medium"
                              : "text-red-400"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-emerald-50 border-t-2 border-emerald-200">
                    <td className="px-4 py-3 text-sm font-bold text-emerald-800">
                      Wastify
                    </td>
                    <td className="px-4 py-3 text-sm text-center text-emerald-600 font-bold">
                      Ya
                    </td>
                    <td className="px-4 py-3 text-sm text-center text-emerald-600 font-bold">
                      Ya
                    </td>
                    <td className="px-4 py-3 text-sm text-center text-emerald-600 font-bold">
                      Ya
                    </td>
                    <td className="px-4 py-3 text-sm text-center text-emerald-600 font-bold">
                      Ya
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500 text-center">
              Wastify menonjol karena menggabungkan IoT monitoring, dashboard
              digital, fokus pada UMKM, dan harga yang lebih terjangkau.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Validasi Pasar
            </h2>
            <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-8">
              <p className="text-gray-600 leading-relaxed mb-6">
                Wastify menargetkan pelaku usaha yang menghasilkan limbah dalam
                jumlah menengah hingga tinggi, khususnya limbah B3. Target
                utamanya meliputi:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "UMKM",
                  "Industri Katering",
                  "Fasilitas Kesehatan",
                  "Bengkel Otomotif",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-center p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-sm font-medium text-emerald-800"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-500 leading-relaxed">
                Segmen ini dipilih karena memiliki kebutuhan tinggi terhadap
                pengelolaan limbah yang legal, efisien, dan mudah dipantau secara
                digital. Banyak pelaku usaha masih mengalami kesulitan dalam
                memenuhi regulasi pengelolaan limbah sehingga membutuhkan solusi
                yang praktis dan terintegrasi.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
