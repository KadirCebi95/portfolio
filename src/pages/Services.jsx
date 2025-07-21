import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaReact, FaCogs } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-4xl text-yellow-400" />,
    title: "UI Geliştirme",
    desc: "HTML, CSS, Tailwind ve Bootstrap ile piksel hassasiyetli arayüz geliştirme.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-yellow-400" />,
    title: "Mobil Uyumlu Kodlama",
    desc: "Her cihazda sorunsuz çalışan responsive yapılar geliştiriyorum.",
  },
  {
    icon: <FaReact className="text-4xl text-yellow-400" />,
    title: "React Uygulamaları",
    desc: "Bileşen bazlı modern React projeleri geliştiriyorum.",
  },
  {
    icon: <FaCogs className="text-4xl text-yellow-400" />,
    title: "jQuery & AJAX",
    desc: "Dinamik etkileşimler ve veri işlemleri için jQuery + AJAX çözümleri.",
  },
];

const Services = () => {
  return (
    <section className="min-h-screen px-4 py-12 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-yellow-400 text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hizmetlerim
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-gray-900 p-6 rounded-xl shadow-md hover:scale-105 transition"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
