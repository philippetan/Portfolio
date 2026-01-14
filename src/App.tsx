import { useEffect, useRef } from "react";
import Head from "./components/Head";
import { Separator } from "./components/ui/separator";
import Experience from "./components/Experience";
import { Label } from "./components/ui/label";
import { Copyright } from "lucide-react";

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
    <div className="relative w-full min-h-screen">
      <div
        ref={vantaRef}
        className="absolute inset-0 -z-10"
      />

      {/* content */}
      <div className="flex flex-col w-full max-w-2xl mx-auto p-8 space-y-10">
        <Head />

        <Separator className="bg-secondary-white" />

        <Experience />

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
