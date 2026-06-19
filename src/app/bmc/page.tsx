"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Lightbulb,
  Star,
  Zap,
  Users,
  BarChart3,
  Share2,
  DollarSign,
  CreditCard,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const bmcItems = [
  {
    icon: AlertTriangle,
    title: "Problem",
    desc: "Pelaku industri kecil atau menengah sering kali gagal dalam mengelola limbahnya sehingga berakibat pada pencemaran lingkungan dan penutupan industri.",
    color: "bg-red-50 border-red-200",
    iconColor: "text-red-600",
  },
  {
    icon: Lightbulb,
    title: "Solution",
    desc: "Waste Monitoring: aplikasi yang memantau limbah yang dihasilkan. Pengguna dapat mengetahui berapa banyak limbah dan statusnya dari aplikasi.",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    icon: Star,
    title: "Unique Value Proposition",
    desc: "Dasbor pintar limbah B2B: pantau IoT, otomatisasi manifes legal, dan efisiensi operasional.",
    color: "bg-yellow-50 border-yellow-200",
    iconColor: "text-yellow-600",
  },
  {
    icon: Zap,
    title: "Unfair Advantage",
    desc: "Integrasi eksklusif antara sensor IoT dan sistem regulasi manifes limbah lokal Indonesia, serta jejaring akademik dan industri yang kuat sebagai basis penetrasi awal di Jawa Timur.",
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
  },
  {
    icon: Users,
    title: "Customer Segment",
    desc: "Pelaku UMKM yang menghasilkan limbah dengan volume menengah ke tinggi, khususnya limbah B3. Contoh: industri catering komersial, fasilitas kesehatan, bengkel otomotif.",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
  },
  {
    icon: BarChart3,
    title: "Key Metric",
    desc: "Jumlah klien B2B aktif, total titik sensor IoT terpasang, pertumbuhan MRR, tingkat keberhasilan otomasi dokumen manifes legal.",
    color: "bg-indigo-50 border-indigo-200",
    iconColor: "text-indigo-600",
  },
  {
    icon: Share2,
    title: "Channels",
    desc: "Penjualan langsung B2B, penjualan langsung ke manajemen pabrik, kemitraan melalui pengelola kawasan industri.",
    color: "bg-pink-50 border-pink-200",
    iconColor: "text-pink-600",
  },
  {
    icon: DollarSign,
    title: "Cost Structure",
    desc: "Pengadaan dan pemeliharaan sensor IoT, pengembangan platform dan infrastruktur cloud, biaya operasional tim penjualan B2B, pengurusan legalitas manifes.",
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600",
  },
  {
    icon: CreditCard,
    title: "Revenue Streams",
    desc: "Model berlangganan, pendapatan layanan waste management, pendapatan dari fitur tambahan atau layanan premium.",
    color: "bg-teal-50 border-teal-200",
    iconColor: "text-teal-600",
  },
];

export default function BmcPage() {
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
              Business Model Canvas
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Model bisnis Wastify yang menggambarkan bagaimana kami
              menciptakan, memberikan, dan menangkap nilai.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bmcItems.map((item, i) => (
              <motion.div
                key={item.title}
                className={`p-6 rounded-2xl border ${item.color}`}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <item.icon
                  className={`w-8 h-8 ${item.iconColor} mb-3`}
                />
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
    </div>
  );
}
