import Image from "next/image";

export default function Hero() {
  return (
    <section className="border-b-4 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-foreground mb-8 leading-tight">
              Software Developer
              <br />
              Web3 Specialist
              <br />
              Cloud Architect
            </h1>

            <p className="text-lg text-foreground/75 leading-relaxed mb-12 max-w-xl">
              6+ years building innovative solutions in full-stack development,
              blockchain technologies, and cloud infrastructure.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-foreground text-background font-bold uppercase tracking-widest text-sm hover:opacity-80 transition-all active:scale-95"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-3 border-foreground text-foreground font-bold uppercase tracking-widest text-sm hover:bg-foreground hover:text-background transition-all active:scale-95"
              >
                My Work
              </a>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md lg:max-w-full">
              {/* Outer border frame */}
              <div className="absolute inset-0 border-4 border-foreground bg-foreground/5"></div>

              {/* Inner accent */}
              <div className="absolute inset-4 border-2 border-foreground/30"></div>

              {/* Image container */}
              <div className="relative w-full h-full bg-muted overflow-hidden">
                {/* <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                  alt="Profile"
                  crossOrigin="anonymous"
                  className="w-full h-full object-cover"
                /> */}
                <Image
                  src={"/alvinmutebi.webp"}
                  alt="Profile"
                  width={560}
                  height={500}
                />
              </div>

              {/* Corner accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-3 border-foreground bg-background"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
