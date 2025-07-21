import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16">
      {/* Sol: Foto */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 md:mb-0 md:mr-12"
      >
        <img
          src="/img/profile.jpg"
          alt="Kadir Çebi"
          className="w-64 h-64 rounded-3xl object-cover border-4 border-yellow-400 shadow-[0_0_40px_rgba(251,191,36,0.4)] transition-transform duration-500 hover:scale-105"
        />
      </motion.div>

      {/* Sağ: Yazı */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left max-w-xl"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Ben <span className="text-yellow-400">Kadir Çebi</span>
        </h1>
        <h2 className="text-xl sm:text-2xl mb-4">
          Frontend Developer & UI Kodlayıcı
        </h2>
        <p className="text-gray-300 mb-6">
          React, JavaScript ve jQuery ile modern, kullanıcı dostu arayüzler geliştiriyorum.
          Pixel-perfect tasarımlar, hızlı ve erişilebilir deneyimler oluşturuyorum.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="/cv-kadir-cebi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            📄 CV'yi İndir
          </a>
          <a
            href="/projects"
            className="border border-yellow-400 hover:bg-yellow-400 hover:text-black text-yellow-400 px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            👀 Projelerime Göz At
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
