import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Kolyecik.com.tr",
    desc: "React + jQuery tabanlı e-ticaret entegrasyonu.",
    tags: ["React", "Tailwind", "jQuery"],
    image: "/img/project1.jpg", // placeholder
  },
  {
    id: 2,
    title: "Good4You.com.tr",
    desc: "Mobil uyumlu kurumsal sağlık web sitesi.",
    tags: ["HTML", "CSS", "jQuery"],
    image: "/img/project2.jpg",
  },
  {
    id: 3,
    title: "YaserNakliyat.com",
    desc: "SEO uyumlu taşımacılık firması sitesi.",
    tags: ["PHP", "JS", "Responsive"],
    image: "/img/project3.jpg",
  },
  {
    id: 4,
    title: "InnovaDijital.com",
    desc: "Kreatif ajans için landing page.",
    tags: ["Landing", "UI/UX", "Bootstrap"],
    image: "/img/project4.jpg",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen px-4 py-12 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-yellow-400 text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projelerim
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-gray-900 rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-yellow-400 text-black rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
