/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Zap, 
  TrendingDown, 
  Bell, 
  BarChart3, 
  ChevronRight,
  Menu,
  X,
  Plane,
  Smartphone
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-burgundy rounded-lg flex items-center justify-center">
            <Plane className="text-sky w-5 h-5 -rotate-45" />
          </div>
          <span className="text-2xl font-display font-bold text-burgundy tracking-tighter">Flux</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium hover:text-burgundy/70 transition-colors">How it Works</a>
          <a href="#features" className="text-sm font-medium hover:text-burgundy/70 transition-colors">Features</a>
          <a href="#pricing" className="text-sm font-medium hover:text-burgundy/70 transition-colors">Pricing</a>
          <button className="btn-primary !py-2 !px-6 !text-sm">Download App</button>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-burgundy/5 p-6 flex flex-col gap-4 md:hidden"
        >
          <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">How it Works</a>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Features</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Pricing</a>
          <button className="btn-primary w-full">Download App</button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-burgundy">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-sky/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-sky/10 rounded-full blur-3xl opacity-30" />
        {/* Cloud Motif */}
        <div className="absolute top-20 left-10 opacity-10">
          <svg width="100" height="40" viewBox="0 0 100 40" fill="white"><path d="M20 35c-8.3 0-15-6.7-15-15s6.7-15 15-15c1.2 0 2.3.1 3.4.4C26.5 2.1 31.5 0 37 0c9.4 0 17 7.6 17 17 0 .3 0 .6-.1.9 2.5 1.3 4.1 3.9 4.1 6.8 0 4.4-3.6 8-8 8h-30z"/></svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl text-white leading-[1.1] mb-6">
              Stop Guessing.<br />
              <span className="text-sky">Start Booking Smarter.</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
              Set your ideal price. We track flights and book automatically when the price hits your target — removing stress and saving you money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary !bg-sky !text-burgundy flex items-center justify-center gap-2">
                Download the App <ArrowRight size={18} />
              </button>
              <button className="btn-secondary !bg-transparent !text-white !border-white/20 hover:!bg-white/10">
                See How It Works
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* iPhone Mockup Placeholder */}
            <div className="relative w-[280px] h-[580px] bg-zinc-900 rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-20" />
              <div className="absolute inset-0 bg-white p-4 pt-10 flex flex-col gap-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-burgundy rounded flex items-center justify-center">
                    <Plane className="text-sky w-4 h-4 -rotate-45" />
                  </div>
                  <div className="text-xs font-bold text-burgundy">Flux</div>
                  <div className="w-8 h-8 rounded-full bg-burgundy/10" />
                </div>
                <div className="bg-sky/20 rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-wider text-burgundy/60 font-bold mb-1">Volatility Tracker</div>
                  <div className="h-20 flex items-end gap-1">
                    {[40, 60, 45, 70, 55, 85, 65, 95].map((h, i) => (
                      <div key={i} className="flex-1 bg-burgundy/20 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 border border-burgundy/5 rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-burgundy/60">London → New York</div>
                      <div className="text-sm font-bold">£345 Threshold</div>
                    </div>
                    <div className="w-8 h-4 bg-sky rounded-full relative">
                      <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                    </div>
                  </div>
                  <div className="p-3 bg-burgundy text-white rounded-xl">
                    <div className="text-xs font-medium mb-1">Probability: 86%</div>
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-[86%] h-full bg-sky" />
                    </div>
                  </div>
                </div>
                <div className="mt-auto p-4 bg-sky rounded-2xl text-center">
                  <div className="text-xs font-bold text-burgundy">Auto-Booking Active</div>
                </div>
              </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky/20 blur-[100px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  const cards = [
    {
      title: "Time wasted refreshing prices",
      value: "(A lot)",
      icon: <Clock className="text-burgundy" size={32} />
    },
    {
      title: "Control over pricing",
      value: "(A little)",
      icon: <TrendingDown className="text-burgundy" size={32} />
    },
    {
      title: "Airlines use algorithms. We use guesswork.",
      value: "What the ✈️",
      icon: <BarChart3 className="text-burgundy" size={32} />
    }
  ];

  return (
    <section className="py-24 bg-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Booking Flights Shouldn’t Feel Like Gambling</h2>
          <p className="text-burgundy/60 text-lg max-w-2xl mx-auto">
            Flight prices move constantly. You’re left refreshing tabs and hoping you didn’t overpay.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-10 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-sky/30 rounded-2xl flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl mb-2">{card.title}</h3>
              <p className="text-2xl font-display font-bold text-burgundy">{card.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Set Your Budget",
      desc: "Choose your route, dates, and your ideal price.",
      icon: <Smartphone size={24} />
    },
    {
      title: "Automate Booking",
      desc: "We track price volatility and act when conditions are met.",
      icon: <Zap size={24} />
    },
    {
      title: "Get the Best Price",
      desc: "Flux executes at your threshold — no stress, no regret.",
      icon: <CheckCircle2 size={24} />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-4">How Flux Works</h2>
          <div className="w-20 h-1 bg-sky mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-16 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-burgundy/5 -z-0" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-sky rounded-full flex items-center justify-center mb-8 shadow-sm border-4 border-white">
                <div className="text-burgundy">{step.icon}</div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-burgundy text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-2xl mb-4">{step.title}</h3>
              <p className="text-burgundy/60 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const benefits = [
    "Price threshold control",
    "Real-time monitoring",
    "Automatic execution",
    "Push notifications option",
    "Transparent probability indicator",
    "No manual tracking required"
  ];

  return (
    <section id="features" className="py-24 bg-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-8">Designed for Smart Travellers</h2>
            <div className="space-y-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-sky rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} className="text-burgundy" />
                  </div>
                  <span className="text-lg font-medium text-burgundy/80">{benefit}</span>
                </div>
              ))}
            </div>
            <button className="mt-12 btn-primary flex items-center gap-2">
              Explore All Features <ChevronRight size={18} />
            </button>
          </div>

          <div className="relative">
            <div className="glass-card p-8 relative z-10">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-bold uppercase tracking-wider opacity-50">Price Threshold</span>
                    <span className="text-xl font-bold">£345</span>
                  </div>
                  <div className="w-full h-12 bg-burgundy/5 rounded-2xl relative flex items-center px-4">
                    <div className="w-3/4 h-2 bg-sky rounded-full" />
                    <div className="absolute left-[75%] w-6 h-6 bg-white border-2 border-sky rounded-full shadow-md" />
                  </div>
                </div>

                <div className="p-6 bg-sky/30 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="text-burgundy" size={20} />
                    <span className="font-bold">Probability Insight</span>
                  </div>
                  <div className="text-3xl font-display font-bold mb-2">86%</div>
                  <p className="text-sm text-burgundy/60">High likelihood of hitting target in next 48h.</p>
                </div>

                <div className="flex items-center justify-between p-4 border border-burgundy/10 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <Zap className="text-burgundy" size={20} />
                    <span className="font-medium">Automatic Booking</span>
                  </div>
                  <div className="w-12 h-6 bg-burgundy rounded-full relative">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-sky/40 rounded-full blur-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Validated by Real Users</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-burgundy p-12 rounded-[3rem] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3H21.017V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.0166 21L3.0166 18C3.0166 16.8954 3.91203 16 5.0166 16H8.0166C8.56888 16 9.0166 15.5523 9.0166 15V9C9.0166 8.44772 8.56888 8 8.0166 8H5.0166C3.91203 8 3.0166 7.10457 3.0166 6V3H10.0166V15C10.0166 18.3137 7.3303 21 4.0166 21H3.0166Z"/></svg>
            </div>
            <p className="text-2xl md:text-3xl font-display italic leading-relaxed mb-8 relative z-10">
              “I'm fed up of manually tracking flights. It’s such a waste of time and gives me anxiety.”
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sky rounded-full" />
              <div>
                <div className="font-bold">Freddie A.</div>
                <div className="text-sky/60 text-sm">Frequent Traveller</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card p-8 text-center">
              <div className="text-4xl font-display font-bold text-burgundy mb-2">78%</div>
              <p className="text-sm text-burgundy/60">Felt they overpaid in past year</p>
            </div>
            <div className="glass-card p-8 text-center">
              <div className="text-4xl font-display font-bold text-burgundy mb-2">86%</div>
              <p className="text-sm text-burgundy/60">Prefer automation over manual</p>
            </div>
            <div className="glass-card p-8 text-center col-span-2">
              <div className="text-4xl font-display font-bold text-burgundy mb-2">£40+</div>
              <p className="text-sm text-burgundy/60">Average regret value per booking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MarketOpportunity = () => {
  return (
    <section className="py-24 bg-burgundy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">A $685B Market — Still Booked Manually</h2>
            <p className="text-white/60 text-lg mb-8">
              Air travel is growing fast. Booking hasn’t evolved. Flux is here to bridge the gap between volatile pricing and intelligent automation.
            </p>
            <div className="flex items-center gap-4 text-sky font-bold text-xl">
              <span>+7.3% CAGR</span>
              <div className="w-12 h-0.5 bg-sky/30" />
              <span className="text-white/40">Statista</span>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="w-64 h-64 bg-sky/20 rounded-full flex items-center justify-center border border-sky/30">
              <div className="text-center">
                <div className="text-sm uppercase tracking-widest opacity-60 mb-1">2025</div>
                <div className="text-3xl font-bold">$685B</div>
              </div>
            </div>
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-96 h-96 bg-sky/10 rounded-full absolute flex items-center justify-end pr-12 border border-sky/20"
            >
              <div className="text-center">
                <div className="text-sm uppercase tracking-widest opacity-60 mb-1">2030</div>
                <div className="text-4xl font-bold">$975B</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Simple, Transparent Pricing</h2>
          <p className="text-burgundy/60">Choose the plan that fits your travel style.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-10">
            <h3 className="text-2xl mb-2">Free</h3>
            <div className="text-4xl font-display font-bold mb-6">£0<span className="text-lg font-normal opacity-40">/mo</span></div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-sky" /> <span>Monitor flights</span></li>
              <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-sky" /> <span>Push notifications</span></li>
              <li className="flex items-center gap-3 opacity-30"><X size={18} /> <span>Automatic booking</span></li>
            </ul>
            <button className="btn-secondary w-full">Start Free</button>
          </div>

          <div className="glass-card p-10 border-sky/50 ring-2 ring-sky/20 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky text-burgundy text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
            <h3 className="text-2xl mb-2">Pro</h3>
            <div className="text-4xl font-display font-bold mb-6">£9<span className="text-lg font-normal opacity-40">/mo</span></div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-sky" /> <span>Automatic booking</span></li>
              <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-sky" /> <span>Advanced probability insights</span></li>
              <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-sky" /> <span>Priority support</span></li>
            </ul>
            <button className="btn-primary w-full">Go Pro</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 bg-burgundy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky/20 via-transparent to-transparent" />
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl text-white mb-6">Let Flux Do the Timing for You</h2>
        <p className="text-white/70 text-xl mb-12">Stop refreshing. Start flying smarter.</p>
        <button className="btn-primary !bg-sky !text-burgundy !px-12 !py-5 !text-lg">
          Download the App
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-beige border-t border-burgundy/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-burgundy rounded flex items-center justify-center">
              <Plane className="text-sky w-4 h-4 -rotate-45" />
            </div>
            <span className="text-xl font-display font-bold text-burgundy tracking-tighter">Flux</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-burgundy/60">
            <a href="#" className="hover:text-burgundy transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-burgundy transition-colors">Terms</a>
            <a href="#" className="hover:text-burgundy transition-colors">Support</a>
            <a href="#" className="hover:text-burgundy transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-burgundy/40">
          <p>© 2026 Flux Technologies. All rights reserved.</p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-burgundy/5 flex items-center justify-center hover:bg-burgundy/10 cursor-pointer transition-colors">
              <Smartphone size={14} />
            </div>
            <div className="w-8 h-8 rounded-full bg-burgundy/5 flex items-center justify-center hover:bg-burgundy/10 cursor-pointer transition-colors">
              <Zap size={14} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <SocialProof />
      <MarketOpportunity />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}
