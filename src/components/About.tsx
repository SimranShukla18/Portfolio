import { motion } from "framer-motion";
import { Code2, Database, Layout, Server } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Layout,
    title: "Frontend Development",
    description:
      "Crafting pixel-perfect UIs with React, Tailwind, and animations.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Building scalable API architectures using Node.js & Express.",
  },
  {
    icon: Database,
    title: "Full-Stack (Mern Stack)",
    description: "Building a scalable full stack application using MERN Stack",
  },
  {
    icon: Code2,
    title: "Problem Solving",
    description: "Strong DSA foundation with Java to crack complex challenges.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-pink-500/10 -z-10" />

      {/* Glow accents */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-10 animate-floatingSlow" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl -z-10 animate-floating" />

      <div className="container mx-auto px-6">
        {/* About Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm text-primary font-semibold tracking-widest uppercase mb-3">
            About Me
          </h2>

          <h3 className="text-4xl md:text-6xl font-extrabold mb-6">
            Hey, I'm
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent ml-2">
              Simran Shukla
            </span>
          </h3>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate Computer Science undergrad who loves turning ideas into
            clean, functional, and modern web experiences. I specialize in the
            MERN stack and enjoy solving complex problems using Java & DSA.
            Currently pursuing my Bachelor's at United University, Prayagraj.
          </p>
        </motion.div>
        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {" "}
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {" "}
              <Card className="p-6 hover:card-shadow transition-smooth border-2 hover:border-primary/50 h-full">
                {" "}
                <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {" "}
                  <service.icon className="h-6 w-6 text-white" />{" "}
                </div>{" "}
                <h4 className="text-xl font-bold mb-2">{service.title}</h4>{" "}
                <p className="text-muted-foreground">{service.description}</p>{" "}
              </Card>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          {" "}
          <h4 className="text-2xl font-bold mb-6 text-center">
            Technologies & Tools
          </h4>{" "}
          <div className="flex flex-wrap justify-center gap-3">
            {" "}
            {[
              "Java",
              "JavaScript",
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "Tailwind CSS",
              "HTML",
              "CSS",
              "SQL",
              "Git",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:gradient-primary hover:text-white transition-smooth cursor-default"
              >
                {" "}
                {tech}{" "}
              </motion.div>
            ))}{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>
    </section>
  );
};
