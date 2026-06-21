"use client";

import { motion } from "framer-motion";
import { FileText, Download, Eye, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const dummyInvoices = [
  { id: "INV-001", customer: "PT. Maju Jaya", amount: "Rp 2.500.000", date: "20 Jun 2026", dueDate: "5 Jul 2026", status: "paid", waste: "Limbah B3 - 2.5 ton" },
  { id: "INV-002", customer: "CV. Sejahtera Abadi", amount: "Rp 1.200.000", date: "18 Jun 2026", dueDate: "3 Jul 2026", status: "paid", waste: "Limbah Organik - 1.2 ton" },
  { id: "INV-003", customer: "UD. Berkah Terus", amount: "Rp 800.000", date: "15 Jun 2026", dueDate: "30 Jun 2026", status: "pending", waste: "Limbah Plastik - 800 kg" },
  { id: "INV-004", customer: "PT. Hijau Lestari", amount: "Rp 3.000.000", date: "12 Jun 2026", dueDate: "27 Jun 2026", status: "overdue", waste: "Limbah B3 - 3 ton" },
  { id: "INV-005", customer: "CV. Karya Mandiri", amount: "Rp 650.000", date: "10 Jun 2026", dueDate: "25 Jun 2026", status: "paid", waste: "Limbah Kertas - 500 kg" },
  { id: "INV-006", customer: "PT. Maju Jaya", amount: "Rp 2.200.000", date: "5 Jun 2026", dueDate: "20 Jun 2026", status: "pending", waste: "Limbah B3 - 2 ton" },
];

const statusConfig: Record<string, { label: string; color: string; icon: any }> = {
  paid: { label: "Lunas", color: "text-emerald-600 bg-emerald-100", icon: CheckCircle },
  pending: { label: "Menunggu", color: "text-amber-600 bg-amber-100", icon: Clock },
  overdue: { label: "Jatuh Tempo", color: "text-red-600 bg-red-100", icon: AlertCircle },
};

export default function InvoicingPage() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? dummyInvoices : dummyInvoices.filter((inv) => inv.status === filter);

  const totalAmount = filtered.reduce((sum, inv) => {
    const num = parseInt(inv.amount.replace(/[^0-9]/g, ""));
    return sum + num;
  }, 0);

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="initial" animate="animate" variants={fadeIn} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Digital Invoicing</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kelola dan unduh faktur layanan pengelolaan limbah Anda.
            </p>
          </motion.div>

          <motion.div className="bg-emerald-600 rounded-2xl p-6 mb-8 text-white" initial="initial" animate="animate" variants={fadeIn} transition={{ duration: 0.5 }}>
            <p className="text-emerald-100 text-sm mb-1">Total Tagihan ({filter === "all" ? "Semua" : filter})</p>
            <p className="text-3xl font-bold">Rp {totalAmount.toLocaleString("id-ID")}</p>
          </motion.div>

          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { key: "all", label: "Semua" },
              { key: "paid", label: "Lunas" },
              { key: "pending", label: "Menunggu" },
              { key: "overdue", label: "Jatuh Tempo" },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  filter === f.key
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-emerald-300"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((inv, i) => {
              const StatusIcon = statusConfig[inv.status].icon;
              return (
                <motion.div
                  key={inv.id}
                  className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-5"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-900">{inv.id}</h3>
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${statusConfig[inv.status].color}`}>
                            <StatusIcon className="w-3 h-3" />
                            {statusConfig[inv.status].label}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">{inv.customer}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{inv.waste}</p>
                        <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
                          <span>Dibuat: {inv.date}</span>
                          <span>Jatuh Tempo: {inv.dueDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-gray-900">{inv.amount}</span>
                      <button className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
