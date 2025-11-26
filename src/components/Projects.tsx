import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import quickchatPreview from "@/assets/quickchat-preview.jpg";
import collabversePreview from "@/assets/collabverse-preview.jpg";
import codereviewPreview from "@/assets/codereview-preview.jpg";
import turism from "@/assets/turismImg.png";

const projects = [
  {
    title: "Quick-Chat",
    description:
      "A real-time web application for instant messaging with features like image sharing, online status, and profile management. Built with Socket.io for real-time communication.",
    image: quickchatPreview,
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoLink: "https://quickchat-website.vercel.app/",
    githubLink: "https://github.com/SimranShukla18/QuickChat-Website",
    highlight: "Real-time messaging platform",
  },
  {
    title: "Code Reviewer",
    description:
      "AI-powered code reviewer integrating Gemini AI Model. Provides automated feedback on code quality, performance, security, and refactoring suggestions to enhance developer productivity.",
    image: codereviewPreview,
    tags: ["MERN Stack", "Gemini AI", "Code Analysis"],
    demoLink: "https://code-reviewer-delta-kohl.vercel.app/",
    githubLink: "https://github.com/SimranShukla18/Code-Reviewer",
    highlight: "AI-powered analysis",
  },
  {
    title: "CollabVerse",
    description:
      "Award-winning collaborative platform connecting creators and contributors. Winner of Best UI/UX at HackDiwas among 60+ teams. Features project management and team collaboration tools.",
    image: collabversePreview,
    tags: ["MERN Stack", "Socket.io", "UI Libraries"],
    demoLink: "https://collabverse-final-main-1.onrender.com/",
    githubLink: "https://github.com/SimranShukla18/CollabVerse-Final-main",
    highlight: "🏆 Best UI/UX Award",
  },

  {
    title: "Turism website",
    description:
      "A comprehensive and user-friendly platform built using Html, Css and Javascript, designed to help users explore travel destinations, book accommodations, and plan their trips with ease.",
    image: turism,
    tags: ["Html", "Css", "Javascript"],
    demoLink: "#",
    githubLink: "#",
    highlight: "Tour and travel",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm text-primary font-semibold tracking-wider uppercase mb-4">
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of projects that currently define design,
            development, and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:card-shadow transition-smooth border-2 hover:border-primary/50 group h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  {project.highlight && (
                    <div className="absolute top-4 left-4 gradient-primary px-3 py-1 rounded-full text-white text-xs font-semibold">
                      {project.highlight}
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="default"
                      size="sm"
                      className="gradient-primary text-white flex-1 group/btn"
                      asChild
                    >
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-45 transition-smooth" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
