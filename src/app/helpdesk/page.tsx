"use client";

import { motion } from "framer-motion";
import { MessageSquare, Plus, Search, ChevronDown, Send, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const dummyTickets = [
  { id: "TKT-001", subject: "Jadwal penjemputan tidak sesuai", customer: "PT. Maju Jaya", date: "21 Jun 2026", status: "open", priority: "high", messages: 4 },
  { id: "TKT-002", subject: "Tagihan tidak sesuai volume limbah", customer: "CV. Sejahtera Abadi", date: "20 Jun 2026", status: "in_progress", priority: "medium", messages: 6 },
  { id: "TKT-003", subject: "Dokumen manifes tidak muncul", customer: "UD. Berkah Terus", date: "19 Jun 2026", status: "resolved", priority: "low", messages: 3 },
  { id: "TKT-004", subject: "Permintaan penambahan jadwal", customer: "PT. Hijau Lestari", date: "18 Jun 2026", status: "open", priority: "low", messages: 2 },
  { id: "TKT-005", subject: "Kendala akses aplikasi", customer: "CV. Karya Mandiri", date: "17 Jun 2026", status: "resolved", priority: "high", messages: 8 },
  { id: "TKT-006", subject: "Revisi data perusahaan", customer: "PT. Maju Jaya", date: "16 Jun 2026", status: "closed", priority: "medium", messages: 5 },
];

const statusConfig: Record<string, { label: string; color: string; icon: any }> = {
  open: { label: "Terbuka", color: "text-blue-600 bg-blue-100", icon: AlertCircle },
  in_progress: { label: "Diproses", color: "text-amber-600 bg-amber-100", icon: Clock },
  resolved: { label: "Terselesaikan", color: "text-emerald-600 bg-emerald-100", icon: CheckCircle },
  closed: { label: "Ditutup", color: "text-gray-600 bg-gray-100", icon: CheckCircle },
};

const priorityConfig: Record<string, { label: string; color: string }> = {
  high: { label: "Tinggi", color: "text-red-600 bg-red-100" },
  medium: { label: "Sedang", color: "text-amber-600 bg-amber-100" },
  low: { label: "Rendah", color: "text-gray-600 bg-gray-100" },
};

const faqData = [
  { q: "Bagaimana cara menjadwalkan penjemputan limbah?", a: "Anda dapat menjadwalkan penjemputan melalui halaman Scheduling. Pilih tanggal yang tersedia dan konfirmasi jadwal Anda." },
  { q: "Berapa lama proses penjemputan limbah?", a: "Proses penjemputan biasanya memakan waktu 1-2 jam setelah petugas tiba di lokasi." },
  { q: "Bagaimana jika ada ketidaksesuaian tagihan?", a: "Silakan buat tiket help desk dengan melampirkan bukti tagihan, tim kami akan memproses dalam 1x24 jam." },
  { q: "Apakah saya bisa membatalkan jadwal?", a: "Ya, pembatalan dapat dilakukan maksimal 2 jam sebelum jadwal penjemputan." },
];

export default function HelpdeskPage() {
  const [activeTab, setActiveTab] = useState<"tickets" | "new" | "faq">("tickets");
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");

  const filteredTickets = dummyTickets
    .filter((t) => filterStatus === "all" || t.status === filterStatus)
    .filter((t) => t.subject.toLowerCase().includes(search.toLowerCase()) || t.customer.toLowerCase().includes(search.toLowerCase()));

  const ticketDetail = selectedTicket ? dummyTickets.find((t) => t.id === selectedTicket) : null;

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="initial" animate="animate" variants={fadeIn} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Help Desk</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pusat bantuan dan dukungan pelanggan Wastify.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {[
              { key: "tickets", label: "Tiket Saya" },
              { key: "new", label: "Buat Tiket" },
              { key: "faq", label: "FAQ" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => { setActiveTab(tab.key as any); setSelectedTicket(null); }}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-emerald-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "tickets" && !selectedTicket && (
            <motion.div initial="initial" animate="animate" variants={fadeIn} transition={{ duration: 0.5 }}>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari tiket..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="all">Semua Status</option>
                  <option value="open">Terbuka</option>
                  <option value="in_progress">Diproses</option>
                  <option value="resolved">Terselesaikan</option>
                  <option value="closed">Ditutup</option>
                </select>
              </div>

              <div className="space-y-3">
                {filteredTickets.map((ticket, i) => {
                  const StatusIcon = statusConfig[ticket.status].icon;
                  return (
                    <motion.div
                      key={ticket.id}
                      className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-5 cursor-pointer hover:border-emerald-300 transition-colors"
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      variants={fadeIn}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      onClick={() => setSelectedTicket(ticket.id)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <MessageSquare className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 text-sm">{ticket.subject}</h3>
                            <p className="text-xs text-gray-500 mt-0.5">{ticket.customer} &middot; {ticket.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${priorityConfig[ticket.priority].color}`}>
                            {priorityConfig[ticket.priority].label}
                          </span>
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${statusConfig[ticket.status].color}`}>
                            <StatusIcon className="w-3 h-3" />
                            {statusConfig[ticket.status].label}
                          </span>
                          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                            {ticket.messages} pesan
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === "tickets" && selectedTicket && ticketDetail && (
            <motion.div initial="initial" animate="animate" variants={fadeIn} transition={{ duration: 0.5 }}>
              <button
                onClick={() => setSelectedTicket(null)}
                className="text-sm text-emerald-600 hover:text-emerald-700 font-medium mb-4 inline-block"
              >
                &larr; Kembali ke daftar tiket
              </button>
              <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{ticketDetail.subject}</h2>
                    <p className="text-sm text-gray-500 mt-1">{ticketDetail.id} &middot; {ticketDetail.customer} &middot; {ticketDetail.date}</p>
                  </div>
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${statusConfig[ticketDetail.status].color}`}>
                    {statusConfig[ticketDetail.status].label}
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  {[
                    { role: "Anda", message: "Halo, saya ingin menanyakan status tiket saya. Terima kasih.", time: "2 jam lalu" },
                    { role: "Support", message: "Halo, terima kasih telah menghubungi Wastify. Tiket Anda sedang kami proses dan akan segera kami update.", time: "1 jam lalu" },
                    { role: "Anda", message: "Baik, terima kasih infonya.", time: "30 menit lalu" },
                  ].map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === "Anda" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[70%] p-3 rounded-xl ${
                        msg.role === "Anda" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-800"
                      }`}>
                        <p className="text-xs font-medium mb-1 opacity-70">{msg.role}</p>
                        <p className="text-sm">{msg.message}</p>
                        <p className="text-[10px] mt-1 opacity-60 text-right">{msg.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Ketik pesan..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button className="p-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "new" && (
            <motion.div className="max-w-2xl mx-auto" initial="initial" animate="animate" variants={fadeIn} transition={{ duration: 0.5 }}>
              <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Buat Tiket Baru</h2>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subjek</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm" placeholder="Judul permasalahan" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-gray-600">
                      <option>Penjadwalan</option>
                      <option>Tagihan</option>
                      <option>Dokumen</option>
                      <option>Teknis Aplikasi</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Prioritas</label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-gray-600">
                      <option>Rendah</option>
                      <option>Sedang</option>
                      <option>Tinggi</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                    <textarea rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm resize-none" placeholder="Jelaskan permasalahan Anda secara detail" />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    Buat Tiket
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {activeTab === "faq" && (
            <motion.div className="max-w-3xl mx-auto" initial="initial" animate="animate" variants={fadeIn} transition={{ duration: 0.5 }}>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="bg-white rounded-2xl border border-emerald-100 shadow-sm group">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <span className="font-medium text-gray-900 text-sm pr-4">{faq.q}</span>
                      <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
