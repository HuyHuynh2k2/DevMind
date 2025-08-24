import background from "../utils/contact.png";
import art1 from "../utils/art1.jpg";

export default function Contact() {
  return (
    <main className="font-['Helvetica_Neue',_'Arial_Narrow',_'Liberation_Sans_Narrow',_sans-serif]">
      <h1
        className="text-5xl font-bold ml-[2rem] mb-[5rem] mt-[5rem]"
        style={{ fontStretch: "condensed" }}
      >
        ABOUT
      </h1>
      <div className="flex mt-[2rem] ml-[2rem] text-[12px]">
        <div className="w-1/2">
          <p className="w-[80%] font-semibold">
            I'M HUY HUYNH, A RECENT COMPUTER SCIENCE GRADUATE AND FULL-STACK
            DEVELOPER PASSIONATE ABOUT CREATING CLEAN, EFFICIENT, AND
            USER-CENTERED WEB APPLICATIONS. I SPECIALIZE IN BUILDING INTERACTIVE
            AND FUNCTIONAL PROJECTS USING MODERN TECHNOLOGIES LIKE NEXT.JS,
            TAILWINDCSS, AND SQL, WHERE PERFORMANCE AND SCALABILITY ARE JUST AS
            IMPORTANT AS THE USER EXPERIENCE. MY JOURNEY FROM DATABASE SYSTEMS
            AND ALGORITHMS TO AI AND REINFORCEMENT LEARNING HAS SHAPED MY
            APPROACH: SOLVING COMPLEX PROBLEMS WITH CREATIVITY AND PRECISION.
            WHEN I'M NOT CODING, I ENJOY EXPLORING NEW TECH TRENDS,
            EXPERIMENTING WITH AI PROJECTS, AND PUSHING MYSELF TO LEARN AND
            BUILD SOMETHING IMPACTFUL.
          </p>
          <div className="w-[200px] h-[300px] mt-16 flex gap-[20rem]">
            <img
              src={art1}
              alt="Art 1"
              className="w-full h-full object-cover rounded-[50%] border-4 border-gray-300"
            />
          </div>
        </div>
        <div className="w-1/2 flex gap-2 ml-[2rem] font-bold">
          <div className="w-[30%] ">
            <h2 className="mb-10 text-neutral-400">LOCATION</h2>
            <p className="w-[50%]">Seattle ~ 47.6061° N, 122.3328° W</p>
          </div>

          <div className="w-[20%]">
            <h2 className="mb-10 text-neutral-400">SOCIALS</h2>
            <ul>
              <li>
                <a
                  className="flex items-center gap-4  hover:text-amber-500 transition-all duration-300 group"
                  href="https://www.instagram.com/longhuy_20/"
                >
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-4  hover:text-amber-500 transition-all duration-300 group"
                  href="https://www.linkedin.com/in/longhuyhuynh/"
                >
                  LINKEDIN
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-4  hover:text-amber-500 transition-all duration-300 group"
                  href="https://github.com/HuyHuynh2k2"
                >
                  GITHUB
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-10 text-neutral-400">STACK</h2>
            <ul className="mb-20 flex flex-col gap-[0.5]">
              <li>JAVA</li>
              <li>JAVASCRIPT</li>
              <li>TYPESCRIPT</li>
              <li>PYTHON</li>
              <li>REACT</li>
              <li>CSS/TAILWIND</li>
              <li>NODE.JS</li>
              <li>EXPRESS</li>
              <li>SQL</li>
              <li>C</li>
            </ul>

            <a>huynhlonghuy.work@gamil.com</a>
          </div>
        </div>
      </div>
    </main>
  );
}
