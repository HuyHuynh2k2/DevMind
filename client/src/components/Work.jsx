import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Button, Typography } from "@mui/material";

import bellevueImg from "../utils/bellevuecollege.png";
import uwImg from "../utils/uw.png";
import hcpImg from "../utils/hcp.png";
import skipliImg from "../utils/skipli.png";
import marketeqImg from "../utils/marketeq.png";
import amazon1 from "../utils/amazon1.jpeg";
import amazon2 from "../utils/amazon2.jpeg";
import amazon3 from "../utils/amazon3.jpeg";
import caffined1 from "../utils/caffine1.png";
import citizen1 from "../utils/citizen1.png";
import citizen2 from "../utils/citizen2.png";
import pokedex1 from "../utils/pokedex.jpeg";
import receipt1 from "../utils/receipt1.png";
import receipt2 from "../utils/receipt2.png";
import trivia1 from "../utils/trivia1.png";
import trivia2 from "../utils/trivia2.png";

import { useState } from "react";

function ImageCard({ photos }) {
  const [photo, setPhoto] = useState(0);

  return (
    <div className="flex items-center gap-4 md:w-1/2">
      {/* Left Arrow */}
      <button
        onClick={() => {
          if (photos.length === 1) {
            setPhoto(0);
          } else if (photo === 0) {
            setPhoto(photos.length - 1);
          } else {
            setPhoto(photo - 1);
          }
        }}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
      >
        <i className="fa-regular fa-circle-left text-2xl"></i>
      </button>

      {/* Image Container */}
      <div className="w-80 h-80 flex items-center justify-center bg-gray-100 rounded-xl shadow-md overflow-hidden">
        <img
          src={photos[photo]}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => {
          if (photos.length === 1 || photo === photos.length - 1) {
            setPhoto(0);
          } else {
            setPhoto(photo + 1);
          }
        }}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
      >
        <i className="fa-regular fa-circle-right text-2xl"></i>
      </button>
    </div>
  );
}

export default function WorkPage() {
  const [theImage, setTheImage] = useState(0);

  const timeline = [
    {
      year: "2021",
      title: "Bellevue College",
      description:
        "Started my academic journey with transfer credits to build a strong foundation",
      type: "education",
      image: bellevueImg,
    },
    {
      year: "2022 - 2025",
      title: "University of Washington",
      description:
        "Pursuing Computer Science degree with focus on software engineering",
      type: "education",
      image: uwImg,
    },
    {
      year: "2022 - 2025",
      title: "Huskii Coding Club",
      description:
        "Active member participating in coding competitions and collaborative projects",
      type: "activity",
      image: hcpImg,
    },
    {
      year: "2023",
      title: "SKIPLI",
      description:
        "Software Engineer Intern - Developed full-stack applications and gained industry experience",
      type: "work",
      image: skipliImg,
    },
    {
      year: "2025",
      title: "Marketeq Digital",
      description:
        "Backend Software Engineer Intern - Specialized in server-side development and API design",
      type: "work",
      image: marketeqImg,
    },
  ];

  const project = [
    {
      name: "Receipt Tracker",
      description:
        "Financial manage application where you could tracker your payment base on the recieve you stored in",
      tool: "React, JavaScript, SQL, Firebase, Git",
      github: "https://github.com/HuyHuynh2k2/reciept",
      images: [receipt1, receipt2],
    },
    {
      name: "Trivia Maza",
      description:
        "Magic trivia game where we would need to logically solve the maze and answer the question to win the game",
      tool: "Java, Javaswing, mySQL",
      github: "https://github.com/Drewwb/cars-maze",
      images: [trivia1, trivia2],
    },
    {
      name: "Catffiend",
      description:
        "Store 153 pokemon infomation and include their evoluation, source, skills",
      tool: "JavaScript, Firebase, React",
      github: "https://github.com/HuyHuynh2k2/catffiend",
      images: [caffined1],
    },
    {
      name: "Pokedex",
      description: "This website store all hot movie update 24/7",
      tool: "TypeScript, Firebase, React",
      github: "https://github.com/HuyHuynh2k2/pokedex",
      images: [pokedex1],
    },
    {
      name: "Citizen",
      description:
        "This website would international stundent, H1B work practice the citizenship exam",
      tool: "Javascript, React",
      github: "https://github.com/HuyHuynh2k2/citizen",
      images: [citizen1, citizen2],
    },
    {
      name: "Amazon Clone",
      description:
        "This website would international stundent, H1B work practice the citizenship exam",
      tool: "Javascript, React",
      github: "https://github.com/HuyHuynh2k2/citizen",
      images: [amazon1, amazon2, amazon3],
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-20">Industry History</h1>
      <div className="flex justify-center items-center mr-[35%]">
        <Timeline>
          {timeline.map((tl, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot
                  variant="outlined"
                  sx={{
                    borderColor: "black", // dot border color
                    backgroundColor: "black", // dot fill color
                  }}
                />
                {index !== timeline.length - 1 && (
                  <TimelineConnector className="h-40" />
                )}
              </TimelineSeparator>

              <TimelineContent>
                <div className="flex items-center gap-4 font-mono">
                  <img
                    src={tl.image}
                    alt={tl.title}
                    className="w-12 h-12 object-contain rounded-full"
                  />
                  <div>
                    <Typography sx={{ fontFamily: '"Space Mono", monospace' }}>
                      {tl.year}
                    </Typography>
                    <Typography
                      variant="h8"
                      component="span"
                      className="font-semibold"
                      sx={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      {tl.title}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      {tl.description}
                    </Typography>
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>

      {/* PROJECT */}

      <div className="mt-50">
        <p className="text-2xl font-bold mb-12">Projects</p>
        <div className="flex flex-col gap-8">
          {project.map((proj, index) => (
            <div
              key={index}
              className="
          flex flex-col md:flex-row items-start gap-6 
          rounded-xl ring-1 ring-gray-100 p-6 
          transition-transform duration-300 hover:scale-102
        "
            >
              {/* Left: Images */}
              <ImageCard photos={proj.images} />

              {/* Right: Project Info */}
              <div className="flex flex-col justify-center md:w-1/2">
                <h3 className="font-semibold text-xl mb-1">{proj.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{proj.description}</p>
                <p className="text-gray-400 text-xs mb-3">{proj.tool}</p>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm font-medium hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
