"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LogoIntro({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("logo-intro-played");

    if (!hasPlayed) {
      sessionStorage.setItem("logo-intro-played", "true");
      setShow(true);

      const t = setTimeout(() => {
        setShow(false);
        onFinish();
      }, 2200);

      return () => clearTimeout(t);
    } else {
      onFinish();
    }
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#e5e5e5]"
        >
          <motion.img
            src="/logo.png"
            alt="Dan Thiesing Performance"
            initial={{ scale: 0.6, rotate: -90 }}
            animate={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="w-[320px] md:w-[420px]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
