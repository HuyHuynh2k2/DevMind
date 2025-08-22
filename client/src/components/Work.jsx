import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";

import bellevueImg from "../utils/bellevuecollege.png";
import uwImg from "../utils/uw.png";
import hcpImg from "../utils/hcp.png";
import skipliImg from "../utils/skipli.png";
import marketeqImg from "../utils/marketeq.png";

export default function WorkPage() {
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
      images: [],
    },
    {
      name: "Trivia Maza",
      description:
        "Magic trivia game where we would need to logically solve the maze and answer the question to win the game",
      tool: "Java, Javaswing, mySQL",
      github: "https://github.com/Drewwb/cars-maze",
      images: [],
    },
    {
      name: "Catffiend",
      description:
        "Store 153 pokemon infomation and include their evoluation, source, skills",
      tool: "JavaScript, Firebase, React",
      github: "https://github.com/HuyHuynh2k2/catffiend",
      images: [],
    },
    {
      name: "Pokedex",
      description: "This website store all hot movie update 24/7",
      tool: "TypeScript, Firebase, React",
      github: "https://github.com/HuyHuynh2k2/pokedex",
      images: [],
    },
    {
      name: "Citizen",
      description:
        "This website would international stundent, H1B work practice the citizenship exam",
      tool: "Javascript, React",
      github: "https://github.com/HuyHuynh2k2/citizen",
      images: [],
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
      <div>
        <p className="text-2xl font-bold mb-20">Project</p>
      </div>
    </div>
  );
}
