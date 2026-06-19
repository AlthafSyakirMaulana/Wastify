"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function KontakPage() {
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
              Hubungi Kami
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tertarik untuk bergabung atau ingin tahu lebih lanjut tentang
              Wastify? Hubungi tim kami.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="space-y-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Informasi Kontak
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: MapPin,
                      label: "Alamat",
                      value: "Jawa Timur, Indonesia",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "wastify@olahdunia.com",
                    },
                    {
                      icon: Phone,
                      label: "Telepon",
                      value: "(akan diinformasikan)",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500">
                          {item.label}
                        </div>
                        <div className="text-gray-900">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-3">
                  Siap Mengelola Limbah Secara Legal?
                </h3>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  Wastify berkomitmen menjadi solusi digital untuk membantu
                  bisnis mengelola limbah secara legal, transparan, dan
                  berkelanjutan. Hubungi kami untuk konsultasi gratis.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Kirim Pesan
              </h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                    placeholder="Masukkan email Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Perusahaan
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                    placeholder="Nama perusahaan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm resize-none"
                    placeholder="Tulis pesan Anda"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Kirim Pesan
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
