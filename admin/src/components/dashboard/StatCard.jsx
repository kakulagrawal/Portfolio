const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-cyan-500/20">
      {/* Animated Glow */}
      <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-white/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {title}
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            {value}
          </h2>

          <div className="mt-4 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="text-sm text-slate-400">
              Live Statistics
            </span>
          </div>
        </div>

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${color} shadow-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}
        >
          <div className="text-3xl text-white">
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;