import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen px-6 py-16 flex flex-col-reverse md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src="/img/profile.jpg"
          alt="Profil"
          className="rounded-3xl shadow-lg w-full h-auto object-cover"
        />
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-white">
          <span className="text-lime-400">Tutkulu bir Frontend Developer’ım</span>
          <br /> Modern Arayüzler Kodluyorum.
        </h2>

        <p className="text-gray-400 mb-6">
          Merhaba, ben Kadir. React, JavaScript ve jQuery kullanarak modern,
          performans odaklı ve kullanıcı dostu arayüzler geliştiriyorum.
          Piksel hassasiyetinde, mobil uyumlu tasarımlarla projelere değer
          katmayı hedefliyorum. UI/UX hassasiyetimle birlikte freelance
          projelerde üretmeye devam ediyorum.
        </p>

        <ul className="text-gray-300 space-y-3 text-sm sm:text-base list-disc pl-5">
          <li>🔥 3+ yıl front-end geliştirme deneyimi</li>
          <li>💼 25+ tamamlanan freelance ve kurumsal proje</li>
          <li>🎯 Piksel hassasiyetli ve mobil uyumlu kodlama</li>
          <li>💡 Kullanıcı odaklı UI/UX tasarım yaklaşımları</li>
          <li>🚀 React, jQuery ve Vanilla JavaScript hâkimiyeti</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
