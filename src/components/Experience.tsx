import { Briefcase } from "lucide-react";
import { Label } from "./ui/label";

const experiences = [
  {
    position: "Associate Programmer",
    company: "Bluewind Asia Corporation",
    year: "2025",
  },
  {
    position: "BS Information Technology",
    company: "University of San Carlos",
    year: "2025",
  },
  {
    position: "Intern Web Developer",
    company: "Alliance Software Inc.",
    year: "2023",
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col w-full space-y-10">
      <Label className="text-primary-white text-2xl font-bold">
        <Briefcase size={20} /> Experience
      </Label>

      {/* Timeline wrapper */}
      <div className="relative w-full">
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary-white/30" />

        {experiences.map((exp, index) => {
          const isRight = index % 2 === 0;
          const isFirst = index === 0;

          return (
            <div
              key={index}
              className="relative flex w-full mb-12"
            >
              {/* Center dot */}
              <div
                className={`absolute left-1/2 top-1 w-4 h-4 -translate-x-1/2 rounded-full z-10 ${
                  isFirst
                    ? "bg-primary-white" // filled
                    : "border-2 border-primary-white bg-[#141414]" // outline
                }`}
              />

              {/* Content */}
              <div
                className={`w-1/2 ${
                  isRight
                    ? "ml-[50%] pl-6 text-left"
                    : "mr-[50%] pr-6 text-right"
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-primary-white font-semibold text-base">
                    {exp.position}
                  </span>
                  <span className="text-secondary-white">{exp.company}</span>
                  <span className="text-secondary-white text-sm">
                    {exp.year}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
