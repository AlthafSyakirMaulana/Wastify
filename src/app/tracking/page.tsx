"use client";

import { motion } from "framer-motion";
import { Package, Truck, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const dummyOrders = [
  {
    id: "WST-001",
    customer: "PT. Maju Jaya",
    wasteType: "Limbah B3",
    volume: "2.5 ton",
    status: "completed",
    date: "20 Jun 2026",
    steps: [
      { label: "Pesanan Dibuat", done: true, time: "20 Jun 08:00" },
      { label: "Penjemputan", done: true, time: "20 Jun 10:30" },
      { label: "Dalam Perjalanan", done: true, time: "20 Jun 11:15" },
      { label: "Selesai Diproses", done: true, time: "20 Jun 14:00" },
    ],
  },
  {
    id: "WST-002",
    customer: "CV. Sejahtera Abadi",
    wasteType: "Limbah Organik",
    volume: "1.2 ton",
    status: "in_transit",
    date: "21 Jun 2026",
    steps: [
      { label: "Pesanan Dibuat", done: true, time: "21 Jun 07:30" },
      { label: "Penjemputan", done: true, time: "21 Jun 09:00" },
      { label: "Dalam Perjalanan", done: true, time: "21 Jun 09:45" },
      { label: "Selesai Diproses", done: false, time: "-" },
    ],
  },
  {
    id: "WST-003",
    customer: "UD. Berkah Terus",
    wasteType: "Limbah Plastik",
    volume: "800 kg",
    status: "scheduled",
    date: "22 Jun 2026",
    steps: [
      { label: "Pesanan Dibuat", done: true, time: "21 Jun 14:00" },
      { label: "Penjemputan", done: false, time: "22 Jun 09:00" },
      { label: "Dalam Perjalanan", done: false, time: "-" },
      { label: "Selesai Diproses", done: false, time: "-" },
    ],
  },
  {
    id: "WST-004",
    customer: "PT. Hijau Lestari",
    wasteType: "Limbah B3",
    volume: "3 ton",
    status: "pending",
    date: "23 Jun 2026",
    steps: [
      { label: "Pesanan Dibuat", done: true, time: "21 Jun 10:00" },
      { label: "Penjemputan", done: false, time: "-" },
      { label: "Dalam Perjalanan", done: false, time: "-" },
      { label: "Selesai Diproses", done: false, time: "-" },
    ],
  },
];

const statusConfig: Record<string, { label: string; color: string; icon: any }> = {
  completed: { label: "Selesai", color: "text-emerald-600 bg-emerald-100", icon: CheckCircle },
  in_transit: { label: "Dalam Perjalanan", color: "text-blue-600 bg-blue-100", icon: Truck },
  scheduled: { label: "Terjadwal", color: "text-amber-600 bg-amber-100", icon: Clock },
  pending: { label: "Menunggu", color: "text-gray-600 bg-gray-100", icon: AlertCircle },
};

export default function TrackingPage() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? dummyOrders : dummyOrders.filter((o) => o.status === filter);

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="initial" animate="animate" variants={fadeIn} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Status Tracking</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pantau status pengelolaan limbah Anda secara real-time.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {[
              { key: "all", label: "Semua" },
              { key: "completed", label: "Selesai" },
              { key: "in_transit", label: "Dalam Perjalanan" },
              { key: "scheduled", label: "Terjadwal" },
              { key: "pending", label: "Menunggu" },
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

          <div className="space-y-6">
            {filtered.map((order, i) => {
              const StatusIcon = statusConfig[order.status].icon;
              return (
                <motion.div
                  key={order.id}
                  className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-6"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Package className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{order.id}</h3>
                        <p className="text-sm text-gray-500">{order.customer}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {order.wasteType} &middot; {order.volume} &middot; {order.date}
                        </p>
                      </div>
                    </div>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${statusConfig[order.status].color}`}>
                      <StatusIcon className="w-3.5 h-3.5" />
                      {statusConfig[order.status].label}
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {order.steps.map((step, si) => (
                      <div key={step.label} className="text-center">
                        <div
                          className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-xs font-bold mb-1 ${
                            step.done
                              ? "bg-emerald-100 text-emerald-600"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          {si + 1}
                        </div>
                        <p className={`text-xs font-medium ${step.done ? "text-gray-900" : "text-gray-400"}`}>
                          {step.label}
                        </p>
                        <p className="text-[10px] text-gray-400">{step.time}</p>
                      </div>
                    ))}
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
