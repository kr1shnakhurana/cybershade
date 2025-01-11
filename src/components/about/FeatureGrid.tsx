import React from 'react';
import { Users, Code, Globe, Cpu, Zap, Shield, Gamepad, Sparkles } from 'lucide-react';

export const FeatureGrid = () => {
  const features = [
    {
      icon: <Users className="text-pink-400" size={24} />,
      title: "Multiplayer Mode",
      description: "Team up with friends in intense co-op missions"
    },
    {
      icon: <Code className="text-red-300" size={24} />,
      title: "Skill System",
      description: "Deep progression system with unique abilities"
    },
    {
      icon: <Globe className="text-pink-400" size={24} />,
      title: "Open World",
      description: "Vast, seamless world with no loading screens"
    },
    {
      icon: <Cpu className="text-red-300" size={24} />,
      title: "AI Systems",
      description: "Advanced NPC behavior and dynamic events"
    }
  ];

  return (
    <div className="mb-24">
      <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-red-300 bg-clip-text text-transparent">
        Advanced Features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="group relative p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-red-300/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
            <div className="relative">
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold mb-2 group-hover:text-pink-400 transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};