"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Server,
  Globe,
  Database,
  Paintbrush,
  Layers,
  Cpu,
  Cloud,
  Braces,
  Workflow,
  LineChart,
} from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <Code className="h-6 w-6" />,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5/CSS3",
        "Tailwind CSS",
        "Redux",
        "Framer Motion",
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: [
        "Node.js",
        "Express",
        "GraphQL",
        "REST API",
        "Authentication",
        "Serverless Functions",
      ],
    },
    {
      id: "database",
      name: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Firebase",
        "Supabase",
        "Redis",
        "Prisma",
      ],
    },
    {
      id: "design",
      name: "Design",
      icon: <Paintbrush className="h-6 w-6" />,
      skills: [
        "Figma",
        "UI/UX",
        "Responsive Design",
        "Design Systems",
        "Accessibility",
        "Animation",
      ],
    },
    {
      id: "devops",
      name: "DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        "Git",
        "GitHub Actions",
        "CI/CD",
        "Docker",
        "AWS",
        "Vercel",
        "Netlify",
      ],
    },
    {
      id: "testing",
      name: "Testing",
      icon: <Braces className="h-6 w-6" />,
      skills: [
        "Jest",
        "React Testing Library",
        "Cypress",
        "TDD",
        "E2E Testing",
        "Unit Testing",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i:number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            My toolkit spans across various technologies and domains, allowing
            me to build complete, scalable solutions.
          </p>
        </div>

        <div ref={ref} className="space-y-12">
          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {skillCategories.map((category, i) => (
              <motion.button
                key={category.id}
                custom={i}
                variants={categoryVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                    : "bg-gray-800/50 hover:bg-gray-800 text-gray-300"
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="relative min-h-[300px] bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              {skillCategories.map(
                (category) =>
                  category.id === activeCategory && (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="relative z-10"
                    >
                      <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg">
                          {category.icon}
                        </div>
                        <h3 className="text-2xl font-bold">
                          {category.name} Development
                        </h3>
                      </div>

                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                      >
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={skill}
                            variants={itemVariants}
                            className="group"
                          >
                            <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 h-full">
                              <CardContent className="p-4 flex items-center justify-center h-full">
                                <div className="text-center">
                                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-3 group-hover:w-5 transition-all duration-300"></div>
                                  <p className="font-medium">{skill}</p>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          {/* Skill Orbit (decorative) */}
          <div className="relative h-40 md:h-60 mt-16 hidden md:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-3xl mx-auto">
                {/* Center Icon */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 p-4 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <Cpu className="h-8 w-8 text-white" />
                </motion.div>

                {/* Orbiting Skills */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"
                    animate={{
                      x: Math.cos(i * (Math.PI / 4)) * 150,
                      y: Math.sin(i * (Math.PI / 4)) * 150,
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      delay: i * 0.5,
                      ease: "linear",
                    }}
                  >
                    {
                      [
                        <Code key="code" />,
                        <Server key="server" />,
                        <Globe key="globe" />,
                        <Database key="database" />,
                        <Paintbrush key="paintbrush" />,
                        <Layers key="layers" />,
                        <Workflow key="workflow" />,
                        <LineChart key="linechart" />,
                      ][i % 8]
                    }
                  </motion.div>
                ))}

                {/* Orbit Paths */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-gray-800/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
