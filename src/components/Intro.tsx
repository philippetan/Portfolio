import type { Dispatch, SetStateAction } from "react";
import { CodeXml, Github, Linkedin, Mail, MapPin, Moon, Sun } from "lucide-react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface IntroProps {
  mode: "light" | "dark";
  setMode: Dispatch<SetStateAction<"light" | "dark">>;
}

const Intro = ({ mode, setMode }: IntroProps) => {
  const toggleMode = () => {
    const nextMode = mode === "light" ? "dark" : "light";

    toast.success(nextMode === "dark" ? "Dark mode enabled" : "Light mode enabled", {
      icon: nextMode === "dark" ? <Moon className="size-5" /> : <Sun className="size-5" />,
    });

    setMode(nextMode);
  };

  return (
    <div className="flex flex-col h-full w-full space-y-10 pt-20 md:pt-24">
      {/* available for hire */}
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <div className="bg-green-500 h-2 w-2 rounded-md overflow-hidden" />
          <Label className="text-primary-dark dark:text-primary-white text-base">
            Available for hire. <CodeXml size={20} />
          </Label>
        </div>
        <Button
          variant="link"
          onClick={toggleMode}
          className="cursor-pointer"
        >
          <motion.div
            whileHover={{ rotate: 20, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {mode === "dark" ? (
              <Moon className="text-primary-white size-6" />
            ) : (
              <Sun className="text-primary-dark size-6" />
            )}
          </motion.div>
        </Button>
      </div>

      {/* hey, i'm philippe */}
      <div className="space-y-3 flex flex-col items-center lg:items-start">
        <Label className="text-primary-dark dark:text-primary-white font-bold text-3xl md:text-5xl">
          Hey, I'm Philippe
        </Label>
        <Label className="text-primary-dark dark:text-primary-white font-bold text-3xl md:text-5xl">
          a
          <Label className="text-secondary-dark dark:text-secondary-white font-bold text-3xl md:text-5xl">
            Software Engineer.
          </Label>
        </Label>
      </div>

      {/* address */}
      <div className="flex flex-row items-center justify-center lg:justify-start gap-3">
        <MapPin className="text-primary-dark dark:text-primary-white size-5" />
        <Label className="text-primary-dark dark:text-primary-white text-base md:text-lg font-light">
          Liloan, Cebu, Philippines, 6002
        </Label>
      </div>

      {/* buttons */}
      <div className="flex flex-row items-center justify-center lg:justify-start gap-3">
        <Button
          asChild
          variant="default"
          className="cursor-pointer"
        >
          <a href="mailto:philippe21tan@gmail.com">
            <Mail /> Email
          </a>
        </Button>

        <Button
          asChild
          variant="default"
          className="cursor-pointer"
        >
          <a
            href="https://www.linkedin.com/in/tan-philippe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin /> LinkedIn
          </a>
        </Button>

        <Button
          asChild
          variant="default"
          className="cursor-pointer"
        >
          <a
            href="https://github.com/philippetan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github /> GitHub
          </a>
        </Button>
      </div>

      {/* introduction */}
      <Label className="text-primary-dark dark:text-secondary-white text-base md:text-lg font-light text-justify">
        My name is Philippe Tan, and I am a Software Engineer from Cebu with a passion for creating
        intuitive and engaging web applications. I love turning complex problems into simple,
        elegant solutions, exploring new technologies, and building projects that make a real
        impact.
      </Label>
    </div>
  );
};

export default Intro;
