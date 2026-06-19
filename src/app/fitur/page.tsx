"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  FileCheck,
  Cpu,
  History,
  CheckCircle,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const features = [
  {
    icon: BarChart3,
    title: "Waste Monitoring",
    desc: "Pantau volume limbah secara real-time melalui aplikasi mobile. Pengguna dapat melihat jumlah dan status limbah kapan saja.",
    benefits: [
      "Monitoring real-time dari mana saja",
      "Notifikasi otomatis saat kapasitas penuh",
      "Visualisasi data limbah harian, mingguan, bulanan",
    ],
  },
  {
    icon: FileCheck,
    title: "Legal Assistant",
    desc: "Otomatisasi manifes digital limbah B3 sesuai regulasi KLHK sehingga pelaku usaha lebih mudah menjaga kepatuhan hukum.",
    benefits: [
      "Dokumen manifes digital otomatis",
      "Sesuai regulasi KLHK terbaru",
      "Arsip dokumen kepatuhan hukum",
    ],
  },
  {
    icon: Cpu,
    title: "Analytical Services",
    desc: "Algoritma prediktif mempelajari pola produksi limbah untuk mengoptimalkan jadwal penjemputan secara otomatis.",
    benefits: [
      "Prediksi volume limbah akurat",
      "Optimasi jadwal penjemputan",
      "Rekomendasi pengurangan limbah",
    ],
  },
  {
    icon: History,
    title: "Historical Waste Management",
    desc: "Riwayat lengkap data pembuangan dan laporan kepatuhan lingkungan dapat dicetak secara instan.",
    benefits: [
      "Riwayat pembuangan terlengkap",
      "Laporan kepatuhan siap cetak",
      "Audit trail transparan",
    ],
  },
];

export default function FiturPage() {
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
              Fitur Utama Wastify
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Aplikasi waste monitoring B2B berbasis IoT & AI analytics untuk
              membantu pelaku usaha mengelola limbah secara lebih efisien dan
              legal.
            </p>
          </motion.div>

          <div className="space-y-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="flex flex-col md:flex-row gap-8 p-8 bg-white rounded-2xl border border-emerald-100 shadow-sm"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.desc}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
