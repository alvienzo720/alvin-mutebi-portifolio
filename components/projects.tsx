"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Code,
  Layers,
  Eye,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard. Built with performance and scalability in mind.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Supabase"],
      github: "https://github.com",
      demo: "https://example.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "AI Content Generator",
      description:
        "An AI-powered application that generates content based on user prompts using OpenAI's GPT models. Features include content history, export options, and customization.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "OpenAI API", "MongoDB", "Express"],
      github: "https://github.com",
      demo: "https://example.com",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Real-time Chat Application",
      description:
        "A real-time messaging platform with features like typing indicators, read receipts, and file sharing. Supports group chats and direct messages.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Firebase", "WebSockets", "Styled Components"],
      github: "https://github.com",
      demo: "https://example.com",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Task Management Dashboard",
      description:
        "A comprehensive task management system with drag-and-drop interface, team collaboration, and analytics. Includes calendar view and progress tracking.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Vue.js", "Vuex", "Node.js", "PostgreSQL", "Chart.js"],
      github: "https://github.com",
      demo: "https://example.com",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const nextProject = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToProject = (index:number) => {
    setActiveIndex(index);
  };

  return (
    <section id="projects" className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Explore my latest work. Each project represents a unique challenge
            and showcases different aspects of my technical expertise.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Project Slider */}
          <div className="relative h-[600px] md:h-[500px] overflow-hidden rounded-xl border border-gray-800">
            <AnimatePresence mode="wait">
              {projects.map(
                (project, index) =>
                  activeIndex === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                        {/* Image Side */}
                        <div className="relative h-[250px] md:h-full overflow-hidden">
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                          ></div>
                          <motion.div
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.7 }}
                            className="h-full"
                          >
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        </div>

                        {/* Content Side */}
                        <div className="relative p-6 md:p-10 flex flex-col justify-between bg-gray-900/90 backdrop-blur-sm">
                          <div>
                            <motion.h3
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="text-2xl md:text-3xl font-bold mb-4"
                            >
                              {project.title}
                            </motion.h3>
                            <motion.p
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                              className="text-gray-300 mb-6"
                            >
                              {project.description}
                            </motion.p>
                            <motion.div
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                              className="flex flex-wrap gap-2 mb-8"
                            >
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className={`px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </motion.div>
                          </div>

                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                          >
                            <Button asChild variant="outline" className="gap-2">
                              <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4" /> View Code
                              </Link>
                            </Button>
                            <Button
                              asChild
                              className={`bg-gradient-to-r ${project.color} hover:opacity-90 gap-2`}
                            >
                              <Link
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4" /> Live Demo
                              </Link>
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white rounded-full h-10 w-10"
              onClick={prevProject}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous project</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white rounded-full h-10 w-10"
              onClick={nextProject}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next project</span>
            </Button>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeIndex === index
                    ? "bg-gradient-to-r from-purple-500 to-cyan-500 w-6"
                    : "bg-gray-700 hover:bg-gray-600"
                )}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              {
                icon: <Code className="h-6 w-6" />,
                label: "Projects Completed",
                value: "25+",
              },
              {
                icon: <Layers className="h-6 w-6" />,
                label: "Technologies Used",
                value: "20+",
              },
              {
                icon: <Github className="h-6 w-6" />,
                label: "GitHub Repositories",
                value: "40+",
              },
              {
                icon: <Eye className="h-6 w-6" />,
                label: "Client Satisfaction",
                value: "100%",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="p-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full mb-3">
                      {stat.icon}
                    </div>
                    <p className="text-2xl font-bold mb-1">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
