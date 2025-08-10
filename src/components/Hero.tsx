import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Gift, Users, Star } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePosition({ x, y });
  };

  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 min-h-[80vh] flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Futuristic Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#65E856] rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Animated Circles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-[#65E856]/20 rounded-full animate-ping"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${30 + (i % 3 * 20)}%`,
                width: `${100 + i * 20}px`,
                height: `${100 + i * 20}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            />
          ))}
        </div>
        
        {/* Hexagon Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <polygon 
                  points="10,1 19,5.5 19,14.5 10,19 1,14.5 1,5.5" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.2"
                  opacity="0.4"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>
        
        {/* Energy Waves */}
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#65E856]/10 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#65E856]/5 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

              {/* Interactive Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Icons with Enhanced Interactivity */}
        <div 
          className="absolute top-20 left-10 text-[#65E856]/30 hover:text-[#65E856]/60 hover:scale-150 transition-all duration-300 cursor-pointer"
          style={{ 
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) rotate(${mousePosition.x * 0.1}deg)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          <Sparkles className="h-8 w-8 animate-spin" style={{animationDuration: '4s'}} />
        </div>
        <div 
          className="absolute top-40 right-20 text-[#65E856]/30 hover:text-[#65E856]/60 hover:scale-150 transition-all duration-300 cursor-pointer"
          style={{ 
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px) scale(${1 + Math.abs(mousePosition.x) * 0.001})`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          <Gift className="h-6 w-6 animate-bounce" style={{animationDuration: '2s'}} />
        </div>
        <div 
          className="absolute bottom-40 left-20 text-[#65E856]/30 hover:text-[#65E856]/60 hover:scale-150 transition-all duration-300 cursor-pointer"
          style={{ 
            transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px) rotate(${mousePosition.y * 0.1}deg)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          <Star className="h-5 w-5 animate-pulse" />
        </div>
        <div 
          className="absolute bottom-20 right-10 text-[#65E856]/30 hover:text-[#65E856]/60 hover:scale-150 transition-all duration-300 cursor-pointer"
          style={{ 
            transform: `translate(${mousePosition.x * -0.6}px, ${mousePosition.y * -0.6}px) scale(${1 + Math.abs(mousePosition.y) * 0.001})`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          <Users className="h-7 w-7 animate-pulse" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-[#65E856]/30"></div>

      {/* Main Content - Centered */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex items-center justify-center py-16">
        <div className="max-w-4xl mx-auto">
          {/* Animated Badge */}
          <div 
            className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Sparkles className="h-5 w-5 text-[#65E856] animate-pulse" />
            <span className="text-white/90 font-medium">Join 100K+ users getting free products</span>
          </div>

          {/* Main Heading */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Get your free
            <br />
            <span className="text-[#65E856] bg-gradient-to-r from-[#65E856] to-green-400 bg-clip-text text-transparent animate-pulse">
              products now!!
            </span>
          </h1>
          
          {/* Description */}
          <p 
            className={`text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Discover amazing products at zero cost. Join thousands of users who've already claimed their favorites.
          </p>

          {/* Action Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button className="group px-8 py-4 bg-[#65E856] text-white font-bold text-lg rounded-full hover:bg-[#56d947] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 flex items-center space-x-2">
              <Gift className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Grab now!</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            <button className="px-8 py-4 border-2 border-white/30 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:scale-105 transform">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {[
              { number: '50K+', label: 'Products Available', icon: Gift },
              { number: '100K+', label: 'Happy Users', icon: Users },
              { number: '24/7', label: 'Support', icon: Star },
              { number: 'Free', label: 'Always & Forever', icon: Sparkles }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 group hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ 
                  animationDelay: `${1000 + index * 200}ms`,
                  transform: `translate(${mousePosition.x * (index - 1.5) * 0.1}px, ${mousePosition.y * (index - 1.5) * 0.1}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <div className="text-2xl md:text-3xl font-bold text-[#65E856] mb-2 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 mr-2" />
                  {stat.number}
                </div>
                <div className="text-gray-200 text-xs md:text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;