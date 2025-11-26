import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "United University, Prayagraj",
    period: "2022 – 2026",
    icon: GraduationCap,
  },
  {
    degree: "Intermediate (PCM) - CBSE",
    institution: "Sangam International School, Prayagraj",
    period: "2020 – 2021",
    icon: GraduationCap,
  },
  {
    degree: "High School - CBSE",
    institution: "Sangam International School, Prayagraj",
    period: "2018 – 2019",
    icon: GraduationCap,
  },
];

const experiences = [
  {
    title: "Data Structures & Algorithms Training",
    organization: "GeeksforGeeks",
    type: "Offline Training",
    period: "May 2025",
    description: [
      "Attended mentor-led sessions focused on refining problem-solving skills",
      "Strengthened core concepts of Data Structures and Algorithms through hands-on practice",
    ],
  },
  {
    title: "Frontend Development Internship",
    organization: "IIT Kanpur – Techkriti",
    type: "Online Internship",
    period: "2023",
    description: [
      "Worked on frontend modules and UI enhancements during Techkriti '23",
      "Gained practical exposure to web development in a collaborative environment",
    ],
  },
];

export const EducationExperience = () => {
  return (
    <section id="education-experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm text-primary font-semibold tracking-wider uppercase mb-4">
            Background
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Education & Experience
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold">Education</h4>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:card-shadow transition-smooth border-2 hover:border-primary/50">
                    <div className="flex items-start gap-4">
                      <div className="gradient-secondary w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <edu.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold mb-1">{edu.degree}</h5>
                        <p className="text-muted-foreground mb-2">{edu.institution}</p>
                        <div className="flex items-center gap-2 text-sm text-primary">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold">Experience</h4>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:card-shadow transition-smooth border-2 hover:border-primary/50">
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="text-lg font-bold">{exp.title}</h5>
                        <span className="px-3 py-1 bg-secondary text-xs rounded-full font-semibold">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-primary font-semibold mb-1">{exp.organization}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h4 className="text-2xl font-bold mb-6 text-center">Certifications</h4>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 hover:card-shadow transition-smooth border-2 hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className="gradient-accent w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h5 className="text-lg font-bold mb-1">Data Structures and Algorithms with Java</h5>
                  <p className="text-muted-foreground">PW Skills</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover:card-shadow transition-smooth border-2 hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className="gradient-accent w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h5 className="text-lg font-bold mb-1">Best UI/UX Hackathon Award</h5>
                  <p className="text-muted-foreground">HackDiwas Hackathon</p>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
