export default function About() {
  return (
    <section className="border-b-4 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="mb-16">
          <h2 className="text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-foreground"></div>
        </div>

        <div className="max-w-3xl">
          <p className="text-xl text-foreground/75 leading-relaxed mb-8">
            Software Developer with 6+ years of experience in full-stack
            development, blockchain technologies, and cloud infrastructure. I
            specialize in designing and building enterprise systems,smart
            contracts and trading bots. Passionate about building innovative
            solutions that scale, leading technical teams, and mentoring
            developers.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16">
          <div className="border-2 border-foreground p-6 md:p-8">
            <p className="text-5xl md:text-6xl font-black text-foreground mb-3">
              5+
            </p>
            <p className="text-xs md:text-sm text-foreground/70 uppercase tracking-widest font-bold">
              Years
            </p>
            <p className="text-xs text-foreground/50">Experience</p>
          </div>
          <div className="border-2 border-foreground p-6 md:p-8">
            <p className="text-5xl md:text-6xl font-black text-foreground mb-3">
              30+
            </p>
            <p className="text-xs md:text-sm text-foreground/70 uppercase tracking-widest font-bold">
              Projects
            </p>
            <p className="text-xs text-foreground/50">Delivered</p>
          </div>
          <div className="border-2 border-foreground p-6 md:p-8">
            <p className="text-5xl md:text-6xl font-black text-foreground mb-3">
              30+
            </p>
            <p className="text-xs md:text-sm text-foreground/70 uppercase tracking-widest font-bold">
              Developers
            </p>
            <p className="text-xs text-foreground/50">Mentored</p>
          </div>
          <div className="border-2 border-foreground p-6 md:p-8">
            <p className="text-5xl md:text-6xl font-black text-foreground mb-3">
              5
            </p>
            <p className="text-xs md:text-sm text-foreground/70 uppercase tracking-widest font-bold">
              Tech Stacks
            </p>
            <p className="text-xs text-foreground/50">Mastered</p>
          </div>
        </div>
      </div>
    </section>
  );
}
