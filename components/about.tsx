"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Lightbulb, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              I'm Alvin Mutebi, a passionate software developer with a keen eye
              for creating elegant solutions to complex problems. My journey in
              technology has been driven by curiosity and a desire to build
              meaningful applications that enhance user experiences.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              With a strong foundation in modern development practices and a
              commitment to clean, maintainable code, I strive to deliver
              high-quality software that makes a difference. I'm constantly
              learning and adapting to new technologies to stay at the forefront
              of the industry.
            </p>
            <p className="text-lg text-gray-300">
              When I'm not coding, I enjoy sharing my knowledge through speaking
              engagements and contributing to the developer community. I believe
              in the power of technology to transform lives and businesses, and
              I'm excited to be part of that transformation.
            </p>
          </div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Problem Solver",
                description:
                  "I enjoy tackling complex challenges and finding elegant solutions.",
                icon: <Lightbulb className="h-10 w-10 text-purple-500" />,
              },
              {
                title: "Clean Code Advocate",
                description:
                  "I write maintainable, scalable, and well-documented code.",
                icon: <Code className="h-10 w-10 text-cyan-500" />,
              },
              {
                title: "Fast Learner",
                description:
                  "I quickly adapt to new technologies and methodologies.",
                icon: <Zap className="h-10 w-10 text-emerald-500" />,
              },
              {
                title: "Team Player",
                description:
                  "I thrive in collaborative environments and value diverse perspectives.",
                icon: <Zap className="h-10 w-10 text-amber-500" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <Card className="bg-gray-900/50 border-gray-800 h-full">
                  <CardHeader className="pb-2">
                    <div className="mb-2">{item.icon}</div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">
                      {item.description}
                    </CardDescription>
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
