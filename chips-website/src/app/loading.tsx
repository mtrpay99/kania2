export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-golden via-primary-orange to-primary-red flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <span className="text-4xl font-bold text-kaniamazn-primary">K</span>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-red rounded-full animate-bounce"></div>
        </div>

        {/* Loading Text */}
        <h2 className="text-3xl font-bold text-white mb-4">
          Kaniamazn
        </h2>
        
        <p className="text-white/80 mb-8">
          Loading premium chips experience<span className="loading-dots"></span>
        </p>

        {/* Loading Animation */}
        <div className="flex justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-white rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}