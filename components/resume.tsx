"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      role: "Senior Software Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Led the development of multiple web applications using React and Next.js. Implemented CI/CD pipelines and mentored junior developers.",
    },
    {
      role: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description:
        "Developed responsive web applications and implemented new features. Collaborated with designers and backend developers to create seamless user experiences.",
    },
    {
      role: "Web Developer Intern",
      company: "StartUp Hub",
      period: "2017 - 2018",
      description:
        "Assisted in the development of web applications. Learned modern web development practices and contributed to open-source projects.",
    },
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2016 - 2018",
      description:
        "Specialized in Web Technologies and Software Engineering. Graduated with honors.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      period: "2012 - 2016",
      description:
        "Focused on programming fundamentals, data structures, and algorithms. Participated in coding competitions.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="resume" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              Resume
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          <div className="mt-6 flex justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
            >
              <Link href="/resume.pdf" target="_blank" download>
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Link>
            </Button>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mr-3"></span>
              Work Experience
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-gray-800"
                >
                  <div className="absolute w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-xl font-medium">{exp.role}</h4>
                  <div className="flex justify-between text-sm text-gray-400 mt-1 mb-2">
                    <span>{exp.company}</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-400">{exp.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mr-3"></span>
              Education
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-gray-800"
                >
                  <div className="absolute w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-xl font-medium">{edu.degree}</h4>
                  <div className="flex justify-between text-sm text-gray-400 mt-1 mb-2">
                    <span>{edu.institution}</span>
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-gray-400">{edu.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
