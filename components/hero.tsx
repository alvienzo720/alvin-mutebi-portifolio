"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black opacity-80"></div>

        {/* Grid pattern using CSS instead of image */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-1/4 -left-20 w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-purple-900/20 to-purple-600/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-gradient-to-r from-cyan-900/20 to-cyan-600/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />

        {/* Futuristic elements */}
        <div className="absolute inset-0">
          {/* Horizontal lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`h-line-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent w-full"
              style={{ top: `${20 + i * 15}%` }}
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: i * 2,
              }}
            />
          ))}

          {/* Vertical lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`v-line-${i}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent h-full"
              style={{ left: `${20 + i * 15}%` }}
              initial={{ y: "-100%" }}
              animate={{ y: "100%" }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: i * 1.5,
              }}
            />
          ))}
        </div>

        {/* Geometric overlapping shapes */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-purple-500/20 rounded-lg transform rotate-45"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-cyan-500/20 rounded-lg transform -rotate-15"></div>

        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 border border-emerald-500/20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 border border-purple-500/20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-cyan-500/20 rounded-full"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 md:px-6 z-10 relative"
        style={{ y, opacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-4 inline-block"
              >
                <span className="px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 backdrop-blur-sm">
                  Software Developer & Tech Speaker
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-tight"
              >
                <span className="block">Hello, I'm</span>
                <div className="relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500 inline-block">
                    Alvin Mutebi
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500"></div>
                </div>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-300 text-lg max-w-xl leading-relaxed"
            >
              I build exceptional digital experiences with clean code and
              cutting-edge technologies. Passionate about creating solutions
              that make a difference in the digital landscape.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 rounded-full px-6 h-12 text-base"
              >
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-gray-700 hover:bg-gray-800 rounded-full px-6 h-12 text-base backdrop-blur-sm"
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center gap-6 pt-4"
            >
              {[
                {
                  icon: <Github className="h-5 w-5" />,
                  href: "https://github.com",
                  label: "GitHub",
                },
                {
                  icon: <Linkedin className="h-5 w-5" />,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  icon: <Twitter className="h-5 w-5" />,
                  href: "https://twitter.com",
                  label: "Twitter",
                },
              ].map((social, i) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white transition-colors z-10">
                    {social.icon}
                  </div>
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </motion.div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Futuristic frame */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer hexagon */}
                <div className="absolute w-full h-full">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <motion.polygon
                      points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25"
                      fill="none"
                      stroke="url(#hexGradient)"
                      strokeWidth="0.5"
                      initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                      animate={{ opacity: 1, scale: 1, rotate: 360 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                    <defs>
                      <linearGradient
                        id="hexGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#9333ea" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Inner circle with glow */}
                <motion.div
                  className="absolute w-[90%] h-[90%] rounded-full bg-gradient-to-r from-purple-500/5 to-cyan-500/5 backdrop-blur-sm border border-gray-800"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                ></motion.div>

                {/* Rotating circles */}
                <motion.div
                  className="absolute w-full h-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500/50"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-500/50"></div>
                </motion.div>

                <motion.div
                  className="absolute w-full h-full"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500/50"></div>
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-3 h-3 rounded-full bg-amber-500/50"></div>
                </motion.div>

                {/* Profile image */}
                <div className="relative w-[75%] h-[75%] rounded-full overflow-hidden border-2 border-gray-800">
                  <Image
                    src="/alvinmutebi.jpg"
                    height={500}
                    width={500}
                    alt="Alvin Mutebi"
                    className="w-full h-full object-cover"
                  />

                  {/* Scan effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent h-full w-full"
                    initial={{ y: "-100%" }}
                    animate={{ y: "100%" }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      repeatDelay: 3,
                    }}
                  ></motion.div>
                </div>

                {/* Decorative elements */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`corner-${i}`}
                    className="absolute w-8 h-8 border-2 border-cyan-500/30"
                    style={{
                      top: i < 2 ? "-5px" : "auto",
                      bottom: i >= 2 ? "-5px" : "auto",
                      left: i % 2 === 0 ? "-5px" : "auto",
                      right: i % 2 === 1 ? "-5px" : "auto",
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                  ></motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
        <motion.div
          className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
