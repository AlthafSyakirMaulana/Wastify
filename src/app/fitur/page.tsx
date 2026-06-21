"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  FileCheck,
  Cpu,
  History,
  CheckCircle,
  Package,
  Calendar,
  FileText,
  BarChart,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const features = [
  {
    icon: BarChart3,
    title: "Waste Monitoring",
    desc: "Pantau volume limbah secara real-time melalui aplikasi mobile. Pengguna dapat melihat jumlah dan status limbah kapan saja.",
    href: "/monitoring",
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
    href: "/legal",
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
    href: "/analytical",
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
    href: "/historical",
    benefits: [
      "Riwayat pembuangan terlengkap",
      "Laporan kepatuhan siap cetak",
      "Audit trail transparan",
    ],
  },
  {
    icon: Package,
    title: "Status Tracking",
    desc: "Pantau status pengelolaan limbah secara real-time dari pesanan hingga selesai diproses.",
    href: "/tracking",
    benefits: [
      "Tracking real-time setiap tahap",
      "Filter berdasarkan status",
      "Notifikasi perubahan status",
    ],
  },
  {
    icon: Calendar,
    title: "Penjadwalan",
    desc: "Atur dan kelola jadwal penjemputan limbah dengan kalender interaktif.",
    href: "/scheduling",
    benefits: [
      "Kalender jadwal interaktif",
      "Konfirmasi jadwal otomatis",
      "Riwayat penjadwalan",
    ],
  },
  {
    icon: FileText,
    title: "Digital Invoicing",
    desc: "Kelola dan unduh faktur layanan pengelolaan limbah secara digital.",
    href: "/invoicing",
    benefits: [
      "Faktur digital otomatis",
      "Riwayat tagihan lengkap",
      "Export dan cetak faktur",
    ],
  },
  {
    icon: BarChart,
    title: "Analytics Report",
    desc: "Laporan dan analisis pengelolaan limbah dengan visualisasi data interaktif.",
    href: "/analytics",
    benefits: [
      "Dashboard analitik lengkap",
      "Grafik dan chart interaktif",
      "Export laporan PDF/Excel",
    ],
  },
  {
    icon: MessageSquare,
    title: "Help Desk",
    desc: "Pusat bantuan dan dukungan pelanggan dengan sistem tiket terintegrasi.",
    href: "/helpdesk",
    benefits: [
      "Tiket dukungan pelanggan",
      "FAQ interaktif",
      "Riwayat percakapan",
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <Link key={feature.title} href={feature.href}>
                <motion.div
                  className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all cursor-pointer h-full"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {feature.desc}
                    </p>
                    <ul className="space-y-1.5">
                      {feature.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2 text-xs text-gray-500"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
