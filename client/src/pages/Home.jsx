function Home() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-96px)] flex items-center justify-center"
    >
      <div className="text-center px-6">
        <p className="mb-4 text-cyan-400 text-lg">Welcome</p>

        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Futuristic Portfolio
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-slate-400 text-lg">
          Building something amazing...
        </p>
      </div>
    </section>
  );
}

export default Home;