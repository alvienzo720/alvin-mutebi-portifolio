"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Presentation,
  Mic,
  Users,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Speaking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeEvent, setActiveEvent] = useState(0);
  const [viewMode, setViewMode] = useState<"grid" | "timeline">("grid");

  const events = [
    {
      title: "Integration of coding and blockchain",
      conference: "Polkadot Kampala Meetup",
      date: "May 17, 2025",
      location: "Kampala, Uganda",
      image: "/polkadot2025.jpg",
      slides:
        "https://www.canva.com/design/DAGnoI0gcYU/iYykjLhdcBWGTSYDGqRyqA/edit?utm_content=DAGnoI0gcYU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      description:
        "Integration of coding and blockchain, with a special emphasis on Polkadot Polkadot Blockchain",
      attendees: 40,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Introduction to Web3",
      conference: "Google Devfest",
      date: "December 17, 2024",
      location: "Kampala Uganda",
      image: "/GoogleDevfest.jpg",
      slides:
        "https://www.canva.com/design/DAGY-RXCSbM/chACenXbMl5wz_sfoqFj-Q/edit?utm_content=DAGY-RXCSbM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      description:
        "I had the opportunity to share my insights on the future of the web and the transformative potential of Web 3.0 technologies. The level of engagement and thoughtful questions from the audience were truly inspiring.",
      attendees: 807,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Panelist How Web3 is shaping technology using PolkaDot",
      conference: "Kampala Polkadot Meetup",
      date: "May 25, 2024",
      location: "Kampala Uganda",
      image: "/PolkaDotKampala1.jpg",
      slides: "#",
      description:
        "Talked about how crow sourcing and DAOs are helping the polkadot ecosystem thrive and also how developers can join the wagon to build exciting projects",
      attendees: 71,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Introduction to Web3",
      conference: "ICPCC Kampala Meetup",
      date: "May, 10, 2024",
      location: "Kampala Uganda",
      image: "/intoToWeb3ICP.jpg",
      slides:
        "https://www.canva.com/design/DAGEpIz7HyU/0GEC7hGWB4tpsIL-yDNBag/edit?utm_content=DAGEpIz7HyU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      description:
        "Spoke about the transformative power of Web3 to the vibrant ICPCC community at Innovation Village in Kampala.During the session, we explored how Web3 is revolutionizing the Internet by decentralizing applications",
      attendees: 53,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Host And Panelist Code 3 Camp Byte Battle Royal Hackathon",
      conference: "𝗕𝘆𝘁𝗲 𝗕𝗮𝘁𝘁𝗹𝗲 𝗥𝗼𝘆𝗮𝗹 𝗖𝗵𝗮𝗹𝗹𝗲𝗻𝗴𝗲 - 𝗞𝗮𝗺𝗽𝗮𝗹𝗮 𝗘𝗱𝗶𝘁𝗶𝗼𝗻🚀",
      date: "November 12, 2022",
      location: "Kampala Uganda",
      image: "/code3CampHackerthon.png",
      slides: "#",
      description:
        "Guided and hosted developers competing for a prize building both web3 and web3 applications for the set tracks",
      attendees: 28,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Introduction to Code3 Camps",
      conference: "Celeo Kampala Meetup",
      date: "February 24, 2024",
      location: "Kampala Uganda",
      image: "/Code3Camp1.jpg",
      slides: "#",
      description:
        "I introduced code3Camp a web2 and web3 six month coding bootcamp and its benefits to developers.",
      attendees: 807,
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const nextEvent = () => {
    setActiveEvent((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const prevEvent = () => {
    setActiveEvent((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const goToEvent = (index: number) => {
    setActiveEvent(index);
  };

  return (
    <section
      id="speaking"
      className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=2&width=2')] bg-repeat opacity-10"></div>

        {/* Animated lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`h-line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent w-full"
            style={{ top: `${30 + i * 20}%` }}
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
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Speaking{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              Engagements
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            I regularly speak at tech conferences and events about web
            development, software architecture, and emerging technologies.
          </p>

          {/* View toggle */}
          <div className="flex justify-center mt-8">
            <div className="bg-gray-900 p-1 rounded-full border border-gray-800">
              {["grid", "timeline"].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode as "grid" | "timeline")}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    viewMode === mode
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)} View
                </button>
              ))}
            </div>
          </div>
        </div>

        <div ref={ref} className="relative">
          {viewMode === "grid" ? (
            <div className="relative">
              {/* Featured Event Showcase */}
              <div className="relative h-[600px] md:h-[500px] overflow-hidden rounded-xl border border-gray-800 mb-8">
                <AnimatePresence mode="wait">
                  {events.map(
                    (event, index) =>
                      activeEvent === index && (
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
                                className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-20`}
                              ></div>
                              <motion.div
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.7 }}
                                className="h-full"
                              >
                                <Image
                                  src={event.image || "/placeholder.svg"}
                                  alt={event.title}
                                  className="w-full h-full object-cover"
                                  height={600}
                                  width={800}
                                />
                              </motion.div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                              {/* Conference badge */}
                              <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-black/70 backdrop-blur-sm border border-gray-800 text-white">
                                {event.conference}
                              </div>
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
                                  {event.title}
                                </motion.h3>

                                <motion.div
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ duration: 0.5, delay: 0.3 }}
                                  className="flex flex-col gap-3 mb-6"
                                >
                                  <div className="flex items-center text-gray-300">
                                    <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                                    <span>{event.date}</span>
                                  </div>
                                  <div className="flex items-center text-gray-300">
                                    <MapPin className="h-4 w-4 mr-2 text-cyan-500" />
                                    <span>{event.location}</span>
                                  </div>
                                  <div className="flex items-center text-gray-300">
                                    <Users className="h-4 w-4 mr-2 text-emerald-500" />
                                    <span>{event.attendees} Attendees</span>
                                  </div>
                                </motion.div>

                                <motion.p
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ duration: 0.5, delay: 0.4 }}
                                  className="text-gray-400 mb-6"
                                >
                                  {event.description}
                                </motion.p>
                              </div>

                              <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="flex flex-wrap gap-4"
                              >
                                <Button
                                  asChild
                                  variant="outline"
                                  className="gap-2"
                                >
                                  <Link
                                    href={event.slides}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Presentation className="h-4 w-4" /> View
                                    Slides
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
                  onClick={prevEvent}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous event</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white rounded-full h-10 w-10"
                  onClick={nextEvent}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next event</span>
                </Button>
              </div>

              {/* Event Indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {events.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToEvent(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      activeEvent === index
                        ? "bg-gradient-to-r from-purple-500 to-cyan-500 w-6"
                        : "bg-gray-700 hover:bg-gray-600"
                    )}
                    aria-label={`Go to event ${index + 1}`}
                  />
                ))}
              </div>

              {/* Event Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {[
                  {
                    icon: <Mic className="h-6 w-6" />,
                    label: "Speaking Events",
                    value: "15+",
                  },
                  {
                    icon: <Users className="h-6 w-6" />,
                    label: "Total Audience",
                    value: "2,000+",
                  },
                  {
                    icon: <MapPin className="h-6 w-6" />,
                    label: "Locations",
                    value: "8",
                  },
                  {
                    icon: <Presentation className="h-6 w-6" />,
                    label: "Presentations",
                    value: "10+",
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
                      <div className="p-6 flex flex-col items-center text-center">
                        <div className="p-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full mb-3">
                          {stat.icon}
                        </div>
                        <p className="text-2xl font-bold mb-1">{stat.value}</p>
                        <p className="text-sm text-gray-400">{stat.label}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            // Timeline View
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-emerald-500/50"></div>

              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative mb-16 md:mb-24 ${
                    index % 2 === 0
                      ? "md:pr-[50%] md:text-right"
                      : "md:pl-[50%]"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 z-10"></div>

                  {/* Mobile timeline line */}
                  <div className="md:hidden absolute left-[-20px] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 to-cyan-500/50"></div>
                  <div className="md:hidden absolute left-[-20px] top-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 transform -translate-x-1/2"></div>

                  {/* Content */}
                  <div
                    className={`relative ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-20`}
                        ></div>
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover"
                          height={600}
                          width={800}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

                        {/* Date badge */}
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-black/70 backdrop-blur-sm border border-gray-800 text-white">
                          {event.date}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">
                          {event.title}
                        </h3>
                        <p className="text-purple-400 font-medium mb-4">
                          {event.conference}
                        </p>

                        <div className="flex items-center text-gray-400 mb-4">
                          <MapPin className="h-4 w-4 mr-2 text-cyan-500" />
                          <span>{event.location}</span>
                        </div>

                        <p className="text-gray-400 mb-6 line-clamp-2">
                          {event.description}
                        </p>

                        <div className="flex flex-wrap gap-3">
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="gap-1"
                          >
                            <Link
                              href={event.slides}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Presentation className="h-3 w-3" /> Slides
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Timeline connector */}
                    <div
                      className={`hidden md:block absolute top-0 h-px w-12 bg-gradient-to-r ${
                        index % 2 === 0
                          ? "right-0 from-transparent to-purple-500/50"
                          : "left-0 from-purple-500/50 to-transparent"
                      }`}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
