import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-[#0B0E17]">
      <div className="md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
        <div className="rounded-[40px] overflow-hidden shadow-2xl max-w-xs sm:max-w-sm md:max-w-md">
          <img
            src="/img/profile.jpg"
            alt="profil"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-[64px] font-light leading-tight bg-gradient-to-b from-white to-[#696969] bg-clip-text text-transparent">
          Ben Kadir Çebi,<br />
          Frontend Developer
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-300">
          React ve modern web teknolojileriyle hızlı, erişilebilir ve kullanıcı dostu arayüzler geliştiriyorum.
        </p>

        <div className="mt-10">
          <a
            href="/cv.docx"
            download
            className="bg-[#e8ff00] hover:bg-[#c8da00] text-black font-semibold py-3 px-6 rounded-full transition duration-300 inline-flex items-center"
          >
            <span className="mr-2">⬇</span> CV’yi indir
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
