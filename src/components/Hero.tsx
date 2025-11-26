import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

// 👉 Replace this import with your own image
// Example: import myPic from "@/assets/my-pic.jpg";
 import myPic from "@/assets/profile.jpeg";

// import profilePic from "@/assets/profilePic.jpg";
export const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden"
    >
      {/* ✨ Soft moving gradient background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />

      {/* Glow blobs */}
      <div className="absolute top-10 left-16 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl -z-10 animate-floatingSlow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl -z-10 animate-floating" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-primary font-semibold uppercase tracking-widest"
            >
              Hey there 👋
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            >
              Full Stack
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Web Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl"
            >
              I build scalable web apps with smooth UI, clean code, and a
              problem-solving mindset. MERN stack is my playground — and I love
              crafting real-world products that actually feel good to use.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg hover:opacity-90 transition group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
              </Button>

              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="border-2 hover:bg-indigo-500 transition"
              >
                Get in Touch
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="https://github.com/SimranShukla18"
                target="_blank"
                className="p-3 rounded-full hover:bg-purple-800 hover:scale-110 transition"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/simran-shukla-08301326b/"
                target="_blank"
                className="p-3 rounded-full hover:bg-purple-800 hover:scale-110 transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="mailto:shuklasimran1808@gmail.com"
                className="p-3 rounded-full hover:bg-purple-800 hover:scale-110 transition"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE SECTION */}
          {/* RIGHT IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:flex hidden justify-center"
          >
            <div
              className="
      relative 
      rounded-3xl 
      overflow-hidden 
      border border-white/20 
      shadow-2xl 
      backdrop-blur-xl 
      max-w-[420px] 
      aspect-[4/4]       /* ✨ Perfect portrait aspect ratio */
    "
            >
              <img
                src={myPic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* soft glowing orbs */}
            <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-8 -left-8 w-36 h-36 bg-pink-500/30 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
