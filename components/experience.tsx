export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Ajibu Virtual Academy",
      period: "2025 - Present",
      description:
        "I lead the engineering team building Ajibu Virtual Academy, an edtech solution that bridges the education accessibility gap. We're creating a scalable platform that matches students with tutors efficiently, reducing traditional tutoring costs by 30% while ensuring quality educational outcomes through our proprietary matching and scheduling system.",
      highlights: [
        "Next js",
        "Typescript",
        "TailwindCss",
        "Git",
        "AWS",
        "Docker",
        "APIs",
      ],
    },
    {
      role: "Software Engineer",
      company: "Ngeni Labs",
      period: "2023 - 2025",
      description:
        "I developed efficient trading bots using TypeScript, Express, and Node.js, which significantly enhanced trading strategies and execution efficiency. I also deployed RESTful APIs using TypeScript, Node.js, Python, and Django, ensuring seamless data integration across multiple front-end platforms. My responsibilities included handling API integrations, writing comprehensive unit tests for various APIs to ensure reliability before production, and implementing smart contracts on various blockchain protocols to facilitate secure and automated transactions.",
      highlights: [
        "AWS/GCP",
        "Docker",
        "Python",
        "Typescript",
        "Blockchain",
        "Solidity",
        "Defi",
        "APIs",
        "Django",
      ],
    },
    {
      role: "Web3 Trainer",
      company: "Code 3 Camp",
      period: "2024 - 2024",
      description:
        "Guided developers through the fundamentals of Web3, helping them understand the core concepts and technologies that underpin decentralized applications. I taught smart contract development using Solidity and Motoko, equipping developers with the skills to create secure and efficient smart contracts. Additionally, I led comprehensive sessions on Decentralized Finance (DeFi), providing in-depth knowledge on the latest trends and practices in the DeFi space. I also conducted hands-on workshops on blockchain technologies, enabling participants to gain practical experience and insights into building and deploying blockchain solutions.",
      highlights: [
        "Solidity",
        "Typescript",
        "Javascript",
        "Defi",
        "Blockchain",
        "APIs",
      ],
    },
    {
      role: "Backend Developer",
      company: "AI CITY ROBOTICS",
      period: "2021 - 2022",
      description:
        "I pioneered and implemented a Python-based blockchain student database deployed on AWS, which securely managed records for over 1000 students, ensuring data integrity and accessibility. I administered and maintained more than five critical system databases, including MySQL and PostgreSQL, achieving an impressive 99.9% uptime and significantly optimizing query performance. Additionally, I managed the deployment, configuration, and maintenance of Linux EC2 instances on AWS, including setting up firewalls and load balancers, which greatly enhanced application reliability and security.",
      highlights: [
        "Python",
        "APIs",
        "Team Collaboration",
        "Blockchain",
        "AWS",
        "Django",
        "Flask",
      ],
    },
    {
      role: "Full Stack Software Developer",
      company: "Kuko Store",
      period: "2018 - 2021",
      description:
        "I developed and deployed the Kuko store website and Customer Relationship Management (CRM) system using the Python Django Framework, creating a robust platform that enhanced user experience and operational efficiency. I handled API integrations from the backend to various front-ends seamlessly, ensuring smooth data flow and functionality across the platform. To increase store efficiency, I implemented Redis for in-memory data storage and caching, significantly improving response times and system performance. Additionally, I integrated online payment solutions, including PayPal and Visa, into the websites, facilitating secure and convenient transactions for customers.",
      highlights: ["Python", "Django", "APIs", "CRMs"],
    },
  ];

  return (
    <section className="border-b-4 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="mb-16">
          <h2 className="text-foreground mb-4">Career Timeline</h2>
          <div className="w-20 h-1 bg-foreground"></div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="border-l-4 border-foreground pl-8 pb-8 last:pb-0 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 -top-1 w-5 h-5 bg-foreground border-4 border-background"></div>

              <div className="grid md:grid-cols-12 gap-6">
                <div className="md:col-span-3">
                  <p className="text-sm font-black uppercase tracking-widest text-foreground mb-2">
                    {exp.period}
                  </p>
                  <p className="text-xs text-foreground/60 uppercase tracking-wider">
                    {exp.company}
                  </p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl font-black text-foreground mb-3">
                    {exp.role}
                  </h3>
                  <p className="text-foreground/75 leading-relaxed mb-5">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, hidx) => (
                      <span
                        key={hidx}
                        className="text-xs px-3 py-1 bg-foreground border-2 border-foreground text-background font-bold uppercase tracking-wider"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
