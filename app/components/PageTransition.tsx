"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true); // mulai transisi

    const halfway = setTimeout(() => {
      setDisplayChildren(children); // ganti konten di tengah animasi
    }, 300); // setengah durasi total

    const end = setTimeout(() => {
      setIsTransitioning(false); // transisi selesai
    }, 600); // durasi total

    return () => {
      clearTimeout(halfway);
      clearTimeout(end);
    };
  }, [pathname, children]);

  return (
    <div style={{ position: "relative" }}>
      {/* Konten halaman */}
      <div>{displayChildren}</div>

      {/* Overlay blur */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="transition"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(255,255,255,0.3)", // putih transparan
              zIndex: 9999,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
