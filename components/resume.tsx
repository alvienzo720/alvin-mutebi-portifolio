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
      role: "Software Developer",
      company: "Ngeni Labs",
      location: "Nairobi, Kenya",
      period: "Jan 2023 - Jan 2025",
      description:
        "I developed efficient trading bots using TypeScript, Express, and Node.js, which significantly enhanced trading strategies and execution efficiency. I also deployed RESTful APIs using TypeScript, Node.js, Python, and Django, ensuring seamless data integration across multiple front-end platforms. My responsibilities included handling API integrations, writing comprehensive unit tests for various APIs to ensure reliability before production, and implementing smart contracts on various blockchain protocols to facilitate secure and automated transactions.",
    },
    {
      role: "Web3 Trainer",
      company: "Code 3 Camp",
      location: "Kampala, Uganda",
      period: "Jan 2024 - Aug 2024",
      description:
        "Guided developers through the fundamentals of Web3, helping them understand the core concepts and technologies that underpin decentralized applications. I taught smart contract development using Solidity and Motoko, equipping developers with the skills to create secure and efficient smart contracts. Additionally, I led comprehensive sessions on Decentralized Finance (DeFi), providing in-depth knowledge on the latest trends and practices in the DeFi space. I also conducted hands-on workshops on blockchain technologies, enabling participants to gain practical experience and insights into building and deploying blockchain solutions.",
    },
    {
      role: "Backend Developer",
      company: "CodeIT Institute of Technology",
      location: "Newark, New Jersey, USA",
      period: "Sep 2021 - Nov 2022",
      description:
        "I pioneered and implemented a Python-based blockchain student database deployed on AWS, which securely managed records for over 1000 students, ensuring data integrity and accessibility. I administered and maintained more than five critical system databases, including MySQL and PostgreSQL, achieving an impressive 99.9% uptime and significantly optimizing query performance. Additionally, I managed the deployment, configuration, and maintenance of Linux EC2 instances on AWS, including setting up firewalls and load balancers, which greatly enhanced application reliability and security.",
    },
    {
      role: "Full Stack Software Developer",
      company: "Kuko Store",
      location: "Kampala, Uganda",
      period: "Mar 2018 - Jan 2021",
      description:
        "I developed and deployed the Kuko store website and Customer Relationship Management (CRM) system using the Python Django Framework, creating a robust platform that enhanced user experience and operational efficiency. I handled API integrations from the backend to various front-ends seamlessly, ensuring smooth data flow and functionality across the platform. To increase store efficiency, I implemented Redis for in-memory data storage and caching, significantly improving response times and system performance. Additionally, I integrated online payment solutions, including PayPal and Visa, into the websites, facilitating secure and convenient transactions for customers.",
    },
  ];

  const education = [
    {
      degree: "CodeIT Institute of Technology",
      institution: "Tech Bootcamp",
      period: "2021 - 2021",
      description: "Certificate in Python, Blockchain, AWS",
    },
    {
      degree: "Bachelor of Information Technology",
      institution: "Nkumba University",
      period: "2014 - 2017",
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
                    <span>{exp.location}</span>
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
