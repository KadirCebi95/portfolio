import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen px-4 py-12 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-yellow-400 text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        İletişim
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-gray-300">
            Benimle çalışmak veya iletişime geçmek istersen aşağıdaki bilgilerden bana ulaşabilirsin.
          </p>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-yellow-400 text-xl" />
            <a href="mailto:kadir@example.com" className="text-gray-300 hover:text-yellow-400">
              kadir@example.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaGithub className="text-yellow-400 text-xl" />
            <a href="https://github.com/kadircebi" target="_blank" className="text-gray-300 hover:text-yellow-400">
              github.com/kadircebi
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-yellow-400 text-xl" />
            <a href="https://linkedin.com/in/kadircebi" target="_blank" className="text-gray-300 hover:text-yellow-400">
              linkedin.com/in/kadircebi
            </a>
          </div>
        </div>

        <form
          action="https://formspree.io/f/xovljoqr"
          method="POST"
          className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Adınız"
            required
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="email"
            placeholder="E-posta Adresiniz"
            required
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            name="message"
            placeholder="Mesajınız"
            rows="5"
            required
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition"
          >
            Gönder
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
