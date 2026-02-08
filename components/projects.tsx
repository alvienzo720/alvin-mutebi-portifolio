"use client";

export default function Projects() {
  const projects = [
    {
      title: "NMS",
      description:
        "A web-based platform for visualizing and managing professional relationships. Enables organizations to track companies/contacts, map direct/indirect connections, and request warm introductions via interactive dashboards. Features include relationship-strength analytics, CRM/LinkedIn integrations, and automated introduction workflows.",
      tech: ["Next.js", "TypeScript", "Python", "Django Rest", "Docker", "AWS"],
      // impact: "100K+ daily active users, sub-100ms data updates",
      // year: "2022",
    },
    {
      title: "Hermes Solana Liquidity Simulator",
      description:
        "The Hermes Solana Liquidity Simulator is a cutting-edge tool designed to simulate liquidity provision on the Solana blockchain. It offers users a risk-free environment to explore and understand the complexities of liquidity pools, including impermanent loss and yield farming strategies. By leveraging this simulator, users can make informed decisions to optimize their liquidity provision strategies on Solana.",
      tech: [
        "Blockchain",
        "Distributed Systems",
        "Smart Contracts",
        "Nextjs",
        "Django",
        "Python",
      ],
      // impact: "Patent-pending technology, adopted by 10+ enterprises",
      // year: "2021",
    },
    {
      title: "Mintograph NFT bot",
      description:
        "Mintograph is an innovative Telegram bot that allows users to mint their own NFTs directly from the Telegram interface. By harnessing the power of Ethereum and the convenience of Telegram, Mintograph offers a user-friendly way for individuals to generate and manage NFTs with just a few simple commands.",
      tech: [
        "Node.js",
        "Redis",
        "Typescript",
        "GraphQL",
        "AWS",
        "Telegraph API",
      ],
      // impact: "99.99% uptime SLA, processed $100M in API calls",
      // year: "2021",
    },
    {
      title: "Teleka Sacco Manager version 2.0",
      description:
        "Teleka Sacco Manger version 2.0 , This is a project built on SAAS Python Django Framework to help manage small Savings And Credit Cooperatives handle their records keeping on the go without difficulty",
      tech: [
        "Python",
        "AWS",
        "Bootstrap",
        "Django",
        "Django RestFramework",
        "Docker",
      ],
      // impact: "5000+ students, 4.8/5 rating, $250K revenue",
      // year: "2020",
    },
  ];

  return (
    <section className="border-b-4 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="mb-16">
          <h2 className="text-foreground mb-4">Featured Work</h2>
          <div className="w-20 h-1 bg-foreground"></div>
        </div>

        <div className="space-y-4">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border-3 border-foreground p-8 hover:bg-foreground/5 transition-all group"
            >
              <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="text-xl font-black text-foreground">
                  {project.title}
                </h3>
                <span className="text-xs font-bold text-foreground/50 uppercase tracking-widest flex-shrink-0">
                  {project.year}
                </span>
              </div>
              <p className="text-foreground/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, tidx) => (
                  <span
                    key={tidx}
                    className="px-3 py-1 border-2 border-foreground/30 text-xs font-bold text-foreground/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
