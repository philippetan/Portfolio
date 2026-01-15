import { useEffect, useRef } from "react";
import Head from "./components/Head";
import { Separator } from "./components/ui/separator";
import Experience from "./components/Experience";
import { Label } from "./components/ui/label";
import { Copyright } from "lucide-react";
import TechStack from "./components/TechStack";
import FAQ from "./components/Faq";

function App() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (vantaRef.current) {
      const vantaEffectInstance = (window as any).VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        color: "#4d1008",
        backgroundColor: "#141414",
      });

      vantaEffect.current = vantaEffectInstance;

      return () => {
        vantaEffectInstance.destroy();
      };
    }
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div
      ref={vantaRef}
      className="relative w-full min-h-screen"
    >
      {/* content */}
      <div className="flex flex-col w-full max-w-4xl mx-auto p-8 space-y-10">
        <Head />

        <Separator className="bg-secondary-white" />

        <Experience />

        <Separator />

        <div className="flex flex-col md:flex-row md:h-140.5 lg:h-124.5 w-full gap-3">
          <TechStack />
          <FAQ />
        </div>

        <Separator />

        {/* footer */}
        <Label className="flex w-full justify-center text-primary-white font-light">
          <Copyright size={14} /> {currentYear} Philippe Tan. All rights
          reserved.
        </Label>
      </div>
    </div>
  );
}

export default App;
