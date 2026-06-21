"use client";

import { motion } from "framer-motion";
import { FileCheck, Shield, ScrollText, Download, CheckCircle, AlertCircle } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const dummyDocuments = [
  { id: "MAN-001", customer: "PT. Maju Jaya", type: "Manifes Limbah B3", date: "20 Jun 2026", status: "completed", waste: "Limbah B3 - 2.5 ton" },
  { id: "MAN-002", customer: "CV. Sejahtera Abadi", type: "Manifes Limbah Organik", date: "18 Jun 2026", status: "completed", waste: "Limbah Organik - 1.2 ton" },
  { id: "MAN-003", customer: "UD. Berkah Terus", type: "Manifes Limbah Plastik", date: "15 Jun 2026", status: "pending", waste: "Limbah Plastik - 800 kg" },
  { id: "MAN-004", customer: "PT. Hijau Lestari", type: "Manifes Limbah B3", date: "12 Jun 2026", status: "completed", waste: "Limbah B3 - 3 ton" },
  { id: "MAN-005", customer: "CV. Karya Mandiri", type: "Manifes Limbah Kertas", date: "10 Jun 2026", status: "completed", waste: "Limbah Kertas - 500 kg" },
];

const regulations = [
  { title: "PP No. 22 Tahun 2021", desc: "Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup", status: "terpenuhi" },
  { title: "UU No. 32 Tahun 2009", desc: "Perlindungan dan Pengelolaan Lingkungan Hidup", status: "terpenuhi" },
  { title: "Permen LHK No. 6 Tahun 2021", desc: "Tata Cara Pengelolaan Limbah B3", status: "terpenuhi" },
];

export default function LegalPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="initial" animate="animate" variants={fadeIn} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Legal Assistant</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Otomatisasi dokumen kepatuhan hukum sesuai regulasi KLHK.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: FileCheck, label: "Dokumen Terbit", value: "47", color: "bg-emerald-100 text-emerald-600" },
              { icon: Shield, label: "Tingkat Kepatuhan", value: "94%", color: "bg-blue-100 text-blue-600" },
              { icon: AlertCircle, label: "Perlu Tindakan", value: "3", color: "bg-amber-100 text-amber-600" },
            ].map((card, i) => (
              <motion.div key={card.label} className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-5" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${card.color}`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                <p className="text-xs text-gray-500 mt-1">{card.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <motion.div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Dokumen Manifes Digital</h2>
              <div className="space-y-3">
                {dummyDocuments.map((doc) => (
                  <div key={doc.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ScrollText className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">{doc.id}</p>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          doc.status === "completed" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                        }`}>
                          {doc.status === "completed" ? "Terbit" : "Menunggu"}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{doc.customer} &middot; {doc.type}</p>
                      <p className="text-xs text-gray-400">{doc.waste} &middot; {doc.date}</p>
                    </div>
                    <button className="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Status Kepatuhan Regulasi</h2>
              <div className="space-y-4">
                {regulations.map((reg) => (
                  <div key={reg.title} className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{reg.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{reg.desc}</p>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex-shrink-0">
                        <CheckCircle className="w-3 h-3" />
                        {reg.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                <p className="text-sm text-emerald-800 font-medium">Semua regulasi terpenuhi</p>
                <p className="text-xs text-emerald-600 mt-1">Dokumen kepatuhan selalu diperbarui sesuai regulasi KLHK terbaru.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
