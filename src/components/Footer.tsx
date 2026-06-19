import { Recycle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Recycle className="w-6 h-6 text-emerald-400" />
              <span className="text-lg font-bold text-white">Wastify</span>
            </div>
            <p className="text-sm text-emerald-300 leading-relaxed">
              Solusi pengelolaan limbah digital berbasis IoT dan AI analytics
              untuk membantu UMKM mengelola limbah secara legal, transparan, dan
              berkelanjutan.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Beranda" },
                { href: "/tentang", label: "Tentang" },
                { href: "/fitur", label: "Fitur" },
                { href: "/pasar", label: "Pasar" },
                { href: "/keuangan", label: "Keuangan" },
                { href: "/bmc", label: "BMC" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-emerald-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Kontak
            </h3>
            <ul className="space-y-2 text-sm text-emerald-300">
              <li>PT. Olahdunia</li>
              <li>Jawa Timur, Indonesia</li>
              <li>wastify@olahdunia.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-emerald-800 text-center">
          <p className="text-sm text-emerald-400">
            &copy; {new Date().getFullYear()} Wastify by PT. Olahdunia. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
