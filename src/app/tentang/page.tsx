"use client";

import { motion } from "framer-motion";
import { Recycle, Target, Eye, Lightbulb } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function TentangPage() {
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <Recycle className="w-12 h-12 text-emerald-600" />
              <span className="text-3xl font-bold text-emerald-800">
                Wastify
              </span>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wastify adalah solusi pengelolaan limbah digital yang berfokus
              pada legalitas, transparansi, dan keberlanjutan bisnis. Kami
              menyediakan aplikasi waste monitoring B2B berbasis IoT dan AI
              analytics untuk membantu pelaku usaha mengelola limbah secara lebih
              efisien dan legal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Misi Kami",
                desc: "Membantu UMKM dan industri mengelola limbah B3 secara legal, terpantau, dan efisien melalui teknologi digital.",
              },
              {
                icon: Eye,
                title: "Visi Kami",
                desc: "Menjadi platform pengelolaan limbah digital terintegrasi dengan sistem regulasi manifes limbah Indonesia.",
              },
              {
                icon: Lightbulb,
                title: "Nilai Kami",
                desc: "Transparansi, inovasi teknologi, kepatuhan regulasi, dan keberlanjutan lingkungan.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="p-8 bg-white rounded-2xl border border-emerald-100 shadow-sm"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <item.icon className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Segmen Konsumen
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 bg-emerald-50 rounded-2xl border border-emerald-100"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sasaran Utama
              </h3>
              <p className="text-gray-600 mb-4">
                Pelaku UMKM penghasil limbah B3 dengan volume menengah hingga
                tinggi yang membutuhkan pengelolaan legal.
              </p>
            </motion.div>

            <motion.div
              className="p-8 bg-teal-50 rounded-2xl border border-teal-100"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sasaran Sekunder
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  Industri katering komersial
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  Fasilitas kesehatan
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  Bengkel otomotif
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  Industri skala menengah
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  Komunitas atau kawasan industri
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Profil Persona
            </h2>
          </motion.div>

          <motion.div
            className="max-w-lg mx-auto bg-white rounded-2xl border border-emerald-100 shadow-sm overflow-hidden"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-emerald-600 px-6 py-4">
              <h3 className="text-white font-semibold text-lg">Persona Pengguna</h3>
            </div>
            <div className="p-6">
              <table className="w-full">
                <tbody>
                  {[
                    ["Nama", "Muslim"],
                    ["Peran", "Pemilik UMKM"],
                    ["Usia", "35 tahun"],
                    ["Pendidikan", "SMA"],
                    ["Media Sosial", "TikTok"],
                    ["Lokasi", "Suburban"],
                    ["Pekerjaan", "Wiraswasta"],
                    ["Tech Comfort", "Tinggi"],
                  ].map(([key, val]) => (
                    <tr key={key} className="border-b border-gray-100 last:border-0">
                      <td className="py-3 pr-4 text-sm font-medium text-gray-500 w-1/3">
                        {key}
                      </td>
                      <td className="py-3 text-sm text-gray-900">{val}</td>
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
