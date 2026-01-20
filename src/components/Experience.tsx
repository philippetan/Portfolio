import { Briefcase } from "lucide-react";
import { Label } from "./ui/label";
import { motion } from "framer-motion";

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
  const baseDelay = 2.4;
  const increment = 0.2;

  return (
    <div className="flex flex-col w-full space-y-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.0 }}
      >
        <Label className="text-primary-dark dark:text-primary-white text-2xl font-bold">
          <Briefcase size={20} /> Experience
        </Label>
      </motion.div>

      {/* Timeline wrapper */}
      <div className="relative w-full h-full">
        {/* Center vertical line */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-black/30 dark:bg-primary-white/30"
        />

        {experiences.map((exp, index) => {
          const isRight = index % 2 === 0;
          const isFirst = index === 0;

          return (
            <div
              key={index}
              className="relative flex w-full mb-10"
            >
              {/* Center dot */}
              <motion.div
                initial={{
                  opacity: 0,
                  ...(isRight ? { x: 50 } : { x: -50 }),
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: baseDelay + index * increment,
                }}
                className={`absolute left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full z-10 ${
                  isFirst
                    ? "bg-primary-dark dark:bg-primary-white" // filled
                    : "border-2 border-primary-dark dark:border-primary-white bg-primary-white dark:bg-[#141414]" // outline
                }`}
              />

              {/* Content */}
              <motion.div
                initial={{
                  opacity: 0,
                  ...(isRight ? { x: 50 } : { x: -50 }),
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: baseDelay + index * increment,
                }}
                className={`w-1/2 -mt-1 ${
                  isRight
                    ? "ml-[50%] pl-6 text-left"
                    : "mr-[50%] pr-6 text-right"
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-primary-dark dark:text-primary-white font-semibold text-base">
                    {exp.position}
                  </span>
                  <span className="text-secondary-dark dark:text-secondary-white">
                    {exp.company}
                  </span>
                  <span className="text-secondary-dark dark:text-secondary-white text-sm">
                    {exp.year}
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
