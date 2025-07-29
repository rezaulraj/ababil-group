import React, { useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

const OurCulture = () => {
  const [isOpen, setIsOpen] = useState(false);

  const videoUrl =
    "https://res.cloudinary.com/dykdbtzsn/video/upload/v1753791386/Ababil_Group_fppvvf.mp4";

  return (
    <section className="w-full min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-12 md:col-span-5 h-full flex flex-col justify-center"
        >
          <div className="space-y-6 text-center md:text-left w-full">
            <h3 className="text-[#1A9695] uppercase tracking-wide text-lg font-medium">
              Our Heritage
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold">OUR CULTURE</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              At Ababil Group, we believe a strong culture is the cornerstone of
              meaningful impact, dynamic communities, and lasting progress.
            </p>
            <div>
              <button
                onClick={() => setIsOpen(true)}
                className="inline-block bg-[#1A9695] hover:bg-blue-700 transition text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
              >
                🎬 Watch Our Story
              </button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: AUTOPLAY VIDEO */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 md:col-span-7 h-full flex items-center"
        >
          <div className="w-full overflow-hidden ">
            <video
              src={videoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover "
            />
          </div>
        </motion.div>
      </div>

      {/* MODAL POPUP */}
      {isOpen &&
        createPortal(
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-10 -right-10 text-white text-3xl z-10"
              >
                &times;
              </button>
              <div className="aspect-w-16 aspect-h-9 bg-black">
                <video
                  src={videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default OurCulture;
