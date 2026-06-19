"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Recycle, BarChart3, FileCheck, History, Cpu } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full opacity-20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full opacity-20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Recycle className="w-10 h-10 text-emerald-600" />
              <span className="text-2xl font-bold text-emerald-800">
                Wastify
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Membangun Masa Depan{" "}
              <span className="text-emerald-600">Bisnis Berkelanjutan</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Solusi pengelolaan limbah digital berbasis IoT dan AI analytics
              untuk membantu UMKM dan industri mengelola limbah B3 secara legal,
              transparan, dan efisien.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/fitur"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors"
              >
                Jelajahi Fitur
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-emerald-600 text-emerald-700 rounded-xl font-medium hover:bg-emerald-50 transition-colors"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Masalah yang Kami Selesaikan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sekitar 40% limbah B3 di Indonesia belum terkelola secara resmi,
              menimbulkan risiko hukum, pencemaran lingkungan, dan ancaman
              kesehatan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileCheck,
                title: "Risiko Hukum",
                desc: "Pelaku usaha yang tidak patuh terhadap regulasi limbah dapat terkena sanksi pidana dan denda.",
              },
              {
                icon: BarChart3,
                title: "Pencemaran Lingkungan",
                desc: "Pembuangan limbah yang tidak sesuai standar dapat mencemari ekosistem air dan tanah.",
              },
              {
                icon: Cpu,
                title: "Dampak bagi Pelaku Usaha",
                desc: "Ketidakpastian biaya operasional dan risiko penutupan industri.",
              },
              {
                icon: History,
                title: "Dampak bagi Masyarakat",
                desc: "Paparan zat beracun dapat menimbulkan ancaman kesehatan kronis.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <item.icon className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Fitur Utama Wastify
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Aplikasi waste monitoring B2B berbasis IoT & AI analytics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Waste Monitoring",
                desc: "Pantau volume limbah secara real-time melalui aplikasi mobile. Lihat jumlah dan status limbah kapan saja.",
              },
              {
                icon: FileCheck,
                title: "Legal Assistant",
                desc: "Otomatisasi manifes digital limbah B3 sesuai regulasi KLHK untuk menjaga kepatuhan hukum.",
              },
              {
                icon: Cpu,
                title: "Analytical Services",
                desc: "Algoritma prediktif mempelajari pola produksi limbah untuk mengoptimalkan jadwal penjemputan.",
              },
              {
                icon: History,
                title: "Historical Waste Management",
                desc: "Riwayat lengkap data pembuangan dan laporan kepatuhan lingkungan yang dapat dicetak instan.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="flex gap-5 p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Siap Mengelola Limbah Secara Legal?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Bergabunglah dengan Wastify dan kelola limbah bisnis Anda secara
              transparan, legal, dan berkelanjutan.
            </p>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-xl font-medium text-lg hover:bg-emerald-700 transition-colors"
            >
              Hubungi Kami
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
