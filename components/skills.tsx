export default function Skills() {
  const skills = [
    "Python",
    "JavaScript",
    "TypeScript",
    "Solidity",
    "AWS",
    "Google Cloud Platform",
    "Docker",
    "Kubernetes",
    "Smart Contracts",
    "DeFi Protocols",
    "Ethereum",
    "React",
    "Next.js",
    "Node.js",
    "MySQL",
    "Mongodb",
    "PostgreSQL",
    "GraphQL",
    "System Design",
  ];

  return (
    <section className="border-b-4 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="mb-16">
          <h2 className="text-foreground mb-4">Technical Stack</h2>
          <div className="w-20 h-1 bg-foreground"></div>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-5 py-3 border-2 border-foreground text-foreground font-bold uppercase tracking-wider text-xs hover:bg-foreground hover:text-background transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
