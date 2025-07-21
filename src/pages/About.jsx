import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center md:text-left max-w-5xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-yellow-400 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hakkımda
      </motion.h2>

      <motion.p
        className="text-gray-300 mb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Merhaba! Ben Kadir Çebi. Frontend developer olarak React, JavaScript ve jQuery ile
        kullanıcı odaklı, performanslı ve modern arayüzler geliştiriyorum. Piksel hassasiyetiyle
        çalışan, mobil uyumlu ve hızlı siteler oluşturmak önceliğimdir. Freelance projelerde hem UI kodlama
        hem de kullanıcı deneyimi konularında çözümler üretmeye devam ediyorum.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-yellow-400 font-semibold text-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <span className="text-4xl font-bold">3+</span>
          <p className="text-sm text-gray-400">Yıl Deneyim</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <span className="text-4xl font-bold">25+</span>
          <p className="text-sm text-gray-400">Tamamlanan Proje</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <span className="text-4xl font-bold">100%</span>
          <p className="text-sm text-gray-400">Müşteri Memnuniyeti</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
