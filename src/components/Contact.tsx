import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Me",
    value: "shuklasimran1808@gmail.com",
    href: "mailto:shuklasimran1808@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Me",
    value: "+91 8924901763",
    href: "tel:+918924901763",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Pratapgarh, UP, India",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    title: "GitHub",
    href: "https://github.com/SimranShukla18",
    color: "hover:bg-gray-700",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/simran-shukla-08301326b/",
    color: "hover:bg-blue-600",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 gradient-hero">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm text-primary font-semibold tracking-wider uppercase mb-4">
            Get in Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Connect in Style ✦
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to
            collaborating on new ideas.
          </p>
        </motion.div>

        {/* CONTACT CARDS */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:card-shadow transition-smooth border-2 hover:border-primary/50 text-center h-full">
                <div className="gradient-primary w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <method.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">{method.title}</h4>
                <a
                  href={method.href}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  {method.value}
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* SOCIAL SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8 card-shadow">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {socialLinks.map((social) => (
                <Button
                  key={social.title}
                  variant="outline"
                  className={`h-14 text-lg font-semibold transition-smooth ${social.color}`}
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="mr-2 h-5 w-5" />
                    {social.title}
                  </a>
                </Button>
              ))}
            </div>

            {/* RESUME BUTTON (FINAL FIXED) */}
            <Button
              size="lg"
              className="w-full gradient-primary text-white hover:opacity-90 transition-smooth group"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1k7glcwXgFITgibcJFV1P1hulXq53CC7e/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                View Resume
              </a>
            </Button>
          </Card>
        </motion.div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 text-muted-foreground"
        >
          <p>© 2025 Simran Shukla. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
};
