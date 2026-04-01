"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top,_#f3f4f6,_#e5e7eb)]">
      <div className="text-center max-w-xl">

        {/* ICON */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl mb-6"
        >
          🚧
        </motion.div>

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm text-orange-500 font-medium mb-2 tracking-wide">
            MyPortfolio LURIO
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Website Sedang Dalam Perbaikan
          </h1>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 mb-6"
        >
          Mohon maaf atas ketidaknyamanannya. Website kami sedang
          diperbarui untuk memberikan pengalaman yang lebih baik.
        </motion.p>

        {/* STATUS BOX */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white shadow-md rounded-xl p-5 mb-6"
        >
          <p className="text-sm text-gray-500">Status:</p>
          <p className="text-lg font-semibold text-orange-500 flex items-center justify-center gap-2">
            Maintenance Progress
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              🚀
            </motion.span>
          </p>
        </motion.div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-3 overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: ["0%", "70%", "60%", "80%"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="bg-orange-500 h-2 rounded-full"
          />
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Estimasi selesai: 2 - 3 jam lagi
        </p>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition"
          onClick={() => window.location.reload()}
        >
          Refresh Halaman
        </motion.button>

      </div>
    </main>
  );
}