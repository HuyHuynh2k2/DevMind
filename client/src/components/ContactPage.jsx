import background from "../utils/contact.png";

export default function Contact() {
  return (
    <main
      className="contact h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Subtle overlay for better contrast */}
      <div className="absolute inset-0 bg-black/25"></div>

      <div className="relative z-10 flex flex-col gap-8 text-lg">
        <a
          href="https://www.linkedin.com/in/longhuyhuynh/"
          className="flex items-center gap-4  hover:text-white transition-all duration-300 group"
        >
          <i className="fa-brands fa-linkedin text-2xl group-hover:scale-110 transition-transform duration-300"></i>
          <p className="font-light tracking-wide">Huy Huynh</p>
        </a>

        <a
          href="https://www.instagram.com/longhuy_20/"
          className="flex items-center gap-4  hover:text-white transition-all duration-300 group"
        >
          <i className="fa-brands fa-instagram text-2xl group-hover:scale-110 transition-transform duration-300"></i>
          <p className="font-light tracking-wide">longhuy_20</p>
        </a>

        <a
          href="https://github.com/HuyHuynh2k2"
          className="flex items-center gap-4  hover:text-white transition-all duration-300 group"
        >
          <i className="fa-brands fa-github text-2xl group-hover:scale-110 transition-transform duration-300"></i>
          <p className="font-light tracking-wide">HuyHuynh2k2</p>
        </a>

        <a
          href="mailto:huynhlonghuy.work@gmail.com"
          className="flex items-center gap-4 hover:text-white transition-all duration-300 group"
        >
          <i className="fa-brands fa-google text-2xl group-hover:scale-110 transition-transform duration-300"></i>
          <p className="font-light tracking-wide">Huy L Huynh</p>
        </a>
      </div>
    </main>
  );
}
