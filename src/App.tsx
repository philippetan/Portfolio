import { useEffect, useRef, useState } from "react";
import { Separator } from "./components/ui/separator";
import { Label } from "./components/ui/label";
import { Copyright } from "lucide-react";
import { Toaster } from "sonner";
import { motion, useInView } from "framer-motion";

import Intro from "./components/Intro";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import FAQ from "./components/Faq";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", mode === "dark");
  }, [mode]);

  useEffect(() => {
    if (!vantaRef.current) return;

    const Effect =
      mode === "light"
        ? (window as any).VANTA.TOPOLOGY
        : (window as any).VANTA.NET;

    const vantaEffectInstance = Effect({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1.0,
      scaleMobile: 1.0,
      color: mode === "dark" ? "#4d1008" : "#aec2eb",
      backgroundColor: mode === "dark" ? "#141414" : "#ebebeb",
    });

    vantaEffect.current = vantaEffectInstance;

    return () => {
      vantaEffectInstance.destroy();
    };
  }, [mode]);

  const currentYear = new Date().getFullYear();

  return (
    <div
      ref={vantaRef}
      className="relative w-full min-h-screen"
    >
      {/* content */}
      <div className="flex flex-col w-full max-w-4xl mx-auto p-8 space-y-10">
        <Intro
          mode={mode}
          setMode={setMode}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <Separator className="bg-secondary-dark dark:bg-secondary-white" />
        </motion.div>

        <Experience />

        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0 }}
          animate={isInView && { opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Separator className="bg-secondary-dark dark:bg-secondary-white" />
        </motion.div>

        <div className="flex flex-col md:flex-row h-full md:h-150 lg:h-130 w-full gap-3">
          <TechStack />
          <FAQ />
        </div>

        {/* footer */}
        <Label className="flex w-full justify-center text-primary-dark dark:text-primary-white font-light">
          <Copyright size={14} /> {currentYear} Philippe Tan. All rights
          reserved.
        </Label>
      </div>

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            backgroundColor: `${mode === "dark" ? "#4a4a4a" : "#FFFFFF"}`,
            borderColor: `${mode === "dark" ? "#4a4a4a" : "#FFFFFF"}`,
            color: `${mode === "dark" && "#FFFFFF"}`,
          },
        }}
      />
    </div>
  );
}

export default App;
