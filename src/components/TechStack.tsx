import { Monitor, Server, Wrench } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";

const Frontend = [
  "React",
  "React Native",
  "Flutter",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Native Wind",
  "Vite",
  "Prettier",
  "Laravel Blade",
  "Styled Components",
];

const Backend = [
  "Node.js",
  "Firebase",
  "MySQL",
  "Express.js",
  "PHP",
  "Laravel",
  "PostgreSQL",
  "Python",
  "FastAPI",
  "REST",
];

const DeveloperTools = ["Git", "GitHub", "GitLab", "VS Code", "Discord", "Teams", "Android Studio"];

const TechStack = () => {
  return (
    <div className="flex flex-col h-full w-full md:w-1/2 gap-3">
      <Card className="bg-transparent h-full border-secondary-dark">
        <CardContent className="space-y-2">
          <Label className="text-primary-dark dark:text-primary-white text-lg font-bold">
            <Monitor size={20} /> Frontend
          </Label>
          <div className="space-x-2 space-y-2">
            {Frontend.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="text-primary-dark dark:text-primary-white border-secondary-dark"
              >
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="bg-transparent h-full border-secondary-dark">
        <CardContent className="space-y-2">
          <Label className="text-primary-dark dark:text-primary-white text-lg font-bold">
            <Server size={20} /> Backend
          </Label>
          <div className="space-x-2 space-y-2">
            {Backend.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="text-primary-dark dark:text-primary-white border-secondary-dark"
              >
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="bg-transparent h-full border-secondary-dark">
        <CardContent className="space-y-2">
          <Label className="text-primary-dark dark:text-primary-white text-lg font-bold">
            <Wrench size={20} /> Developer Tools
          </Label>
          <div className="space-x-2 space-y-2">
            {DeveloperTools.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="text-primary-dark dark:text-primary-white border-secondary-dark"
              >
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechStack;
