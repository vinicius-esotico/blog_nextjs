export default function Home() {
  const artists = [
    { name: "Solar Drift", genre: "Ambient Electronic", color: "neon-purple" },
    { name: "Void Walker", genre: "Dark Techno", color: "neon-cyan" },
    { name: "Prism Pulse", genre: "Synthpop", color: "neon-purple" },
    { name: "Quantum Beats", genre: "Future Bass", color: "neon-cyan" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-neon-cyan/30">
      {/* Background Accents */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-neon-purple/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-neon-cyan/10 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 glass">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-black tracking-tighter text-neon-cyan glow-cyan">
            NEON ECHOES
          </div>
          <div className="hidden space-x-8 text-sm font-medium uppercase tracking-widest sm:flex">
            <a href="#lineup" className="hover:text-neon-cyan transition-colors">Lineup</a>
            <a href="#about" className="hover:text-neon-pink transition-colors">About</a>
            <a href="#tickets" className="hover:text-neon-purple transition-colors">Tickets</a>
          </div>
          <button className="rounded-full bg-neon-cyan px-6 py-2 text-sm font-bold text-background transition-transform hover:scale-105 active:scale-95">
            GET TICKETS
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center pt-20">
          <h1 className="mb-6 text-6xl font-black leading-none tracking-tighter sm:text-8xl md:text-9xl">
            <span className="block text-white">NEON</span>
            <span className="block text-neon-purple glow-purple">ECHOES</span>
          </h1>
          <p className="mb-10 max-w-xl text-lg text-zinc-400 sm:text-xl">
            A digital odyssey in the heart of the city. Join us for three days of immersive sound and light.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="flex flex-col items-center glass px-8 py-4 rounded-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">When</span>
              <span className="text-lg font-bold">AUG 15-17, 2026</span>
            </div>
            <div className="flex flex-col items-center glass px-8 py-4 rounded-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Where</span>
              <span className="text-lg font-bold">METROPOLIS DISTRICT</span>
            </div>
          </div>
          <a
            href="#lineup"
            className="mt-16 animate-bounce text-neon-cyan"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </section>

        {/* Lineup Section */}
        <section id="lineup" className="mx-auto max-w-7xl px-6 py-32">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">THE LINEUP</h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-neon-purple to-neon-cyan" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {artists.map((artist) => (
              <div
                key={artist.name}
                className={`group relative overflow-hidden rounded-3xl glass p-8 transition-all hover:-translate-y-2 ${
                  artist.color === "neon-purple" ? "hover:neon-border-purple" : "hover:neon-border-cyan"
                }`}
              >
                <div className={`mb-4 text-xs font-bold uppercase tracking-widest ${
                  artist.color === "neon-purple" ? "text-neon-purple" : "text-neon-cyan"
                }`}>
                  {artist.genre}
                </div>
                <h3 className="text-2xl font-black">{artist.name}</h3>
                <div className="mt-8 flex justify-end">
                  <div className="rounded-full border border-white/10 p-2 transition-colors group-hover:bg-white group-hover:text-background">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section id="tickets" className="px-6 py-32 text-center">
          <div className="mx-auto max-w-4xl rounded-[3rem] bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 p-12 sm:p-20 glass">
            <h2 className="mb-6 text-4xl font-black sm:text-6xl">READY FOR THE DROP?</h2>
            <p className="mb-10 text-lg text-zinc-400">
              Limited early access passes are available now. Don't miss the digital revolution.
            </p>
            <button className="rounded-full bg-white px-10 py-4 text-lg font-black text-background transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              SECURE YOUR ACCESS
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 text-center text-sm text-zinc-600">
        <div className="mb-6 flex justify-center space-x-6">
          <span className="hover:text-neon-cyan cursor-pointer transition-colors">INSTAGRAM</span>
          <span className="hover:text-neon-purple cursor-pointer transition-colors">TWITTER</span>
          <span className="hover:text-neon-pink cursor-pointer transition-colors">DISCORD</span>
        </div>
        <p>© 2026 NEON ECHOES FESTIVAL. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
