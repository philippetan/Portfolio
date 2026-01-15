import { CodeXml, Linkedin, Mail, MapPin } from "lucide-react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const Head = () => {
  return (
    <div className="flex flex-col h-full w-full space-y-10 pt-20 md:pt-24">
      {/* available for hire */}
      <div className="flex flex-row items-center gap-3">
        <div className="bg-green-500 h-2 w-2 rounded-md overflow-hidden" />
        <Label className="text-primary-white text-base">
          Available for hire. <CodeXml size={20} />
        </Label>
      </div>

      {/* hey, i'm philippe */}
      <div className="space-y-3">
        <Label className="text-primary-white font-bold text-3xl md:text-5xl">
          Hey, I'm Philippe
        </Label>
        <Label className="text-primary-white font-bold text-3xl md:text-5xl">
          a
          <Label className="text-secondary-white font-bold text-3xl md:text-5xl">
            Software Engineer.
          </Label>
        </Label>
      </div>

      {/* address */}
      <div className="flex flex-row items-center gap-3">
        <MapPin className="text-primary-white size-5" />
        <Label className="text-primary-white text-base md:text-lg font-light">
          Liloan, Cebu, Philippines, 6002
        </Label>
      </div>

      {/* buttons */}
      <div className="flex flex-row items-center gap-3">
        <Button
          variant="secondary"
          className="cursor-pointer"
        >
          <Mail /> Email
        </Button>

        <Button
          variant="secondary"
          className="cursor-pointer"
        >
          <Linkedin /> LinkedIn
        </Button>
      </div>

      {/* my name */}
      <Label className="text-secondary-white text-base md:text-lg font-light text-justify">
        My name is Philippe Tan, and I am a Software Engineer from Cebu with a
        passion for creating intuitive and engaging web applications. I love
        turning complex problems into simple, elegant solutions, exploring new
        technologies, and building projects that make a real impact.
      </Label>
    </div>
  );
};

export default Head;
