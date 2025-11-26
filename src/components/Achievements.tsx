import { motion } from "framer-motion";
import { Trophy, Award, Target, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const achievements = [
  {
    icon: Trophy,
    title: "HackDiwas Winner",
    description: "Best UI/UX among 60+ teams",
    date: "May 2025",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Award,
    title: "GDG Startup Show",
    description: "Top 5 finalist team in Prayagraj",
    date: "2025",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "U-Hack 2.0",
    description: "Top 10 team in hackathon",
    date: "Oct 2023",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Star,
    title: "Student of the Year",
    description: "Awarded for two consecutive years (9th & 10th)",
    date: "2018-2019",
    color: "from-green-500 to-emerald-500",
  },
];

const responsibilities = [
  {
    title: "Co-Organizer - HackDiwas",
    description: "Organized intra-college hackathon, coordinating participants and logistics",
  },
  {
    title: "Team Lead - Hackathons",
    description: "Led teams in multiple hackathons and coding competitions",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm text-primary font-semibold tracking-wider uppercase mb-4">
            Recognition
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Achievements & Leadership
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:card-shadow transition-smooth border-2 hover:border-primary/50 h-full">
                <div className={`bg-gradient-to-r ${achievement.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">{achievement.title}</h4>
                <p className="text-muted-foreground mb-2">{achievement.description}</p>
                <p className="text-sm text-primary font-semibold">{achievement.date}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="text-2xl font-bold mb-6 text-center">Positions of Responsibility</h4>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {responsibilities.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:card-shadow transition-smooth border-2 hover:border-primary/50">
                  <h5 className="text-lg font-bold mb-2">{role.title}</h5>
                  <p className="text-muted-foreground">{role.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
