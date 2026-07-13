'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Palette, 
  Code, 
  ShoppingBag, 
  ArrowRight, 
  Star, 
  Menu, 
  X, 
  ChevronRight, 
  Check, 
  Mail, 
  User, 
  Quote, 
  Sparkles,
  Compass,
  ArrowUpRight,
  Calculator,
  TrendingUp,
  Zap,
  Layers,
  Award,
  Home as HomeIcon,
  Heart,
  Building,
  RefreshCw,
  Clock,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Smartphone,
  ClipboardList
} from 'lucide-react';

// Structuring blog/education details for the detail modals using the same interface for layout safety
interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  metric: string;
  metricLabel: string;
  duration: string;
  client: string;
  servicesProvided: string[];
  challenge: string;
  solution: string;
  techStack: string[];
}

const PROJECTS_DATA: Project[] = [
  {
    id: 'cibil-score',
    category: 'Credit Education',
    title: 'Maximizing Your Credit Score: The Key to Lower Interest Rates',
    description: 'Learn the specific financial habits our expert advisors recommend to elevate your CIBIL score above 750, unlocking premium low-interest loan products across partner banks.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800',
    metric: '780+',
    metricLabel: 'Target Credit Score',
    duration: 'July 2026',
    client: 'Shri Kalyan Punji Research',
    servicesProvided: ['Credit Monitoring', 'Debt Optimization', 'Payment Automation', 'Credit Ratio Health'],
    challenge: 'A low credit score (below 650) results in higher interest rates, reduced approval odds, and intensive manual underwriting, stalling your financial milestones.',
    solution: 'We guide you to maintain a credit utilization ratio below 30%, secure a healthy mix of secured and unsecured credit products, automate utility and card repayments to eliminate delayed flags, and rectify credit bureau reporting errors promptly.',
    techStack: ['CIBIL Score', 'Credit Health', 'Loan Pre-Approvals']
  },
  {
    id: 'mutual-funds-loan',
    category: 'Liquidity Planning',
    title: 'Unlocking Value: Why Loan Against Mutual Funds is the Smarter Option',
    description: 'Avoid liquidating your compounding equities during cash crunches. Discover how an overdraft facility against mutual funds secures immediate liquidity while preserving long-term growth.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800',
    metric: '₹0',
    metricLabel: 'Capital Gains Tax Triggered',
    duration: 'June 2026',
    client: 'Shri Kalyan Punji Advisory',
    servicesProvided: ['Portfolio Leverage', 'Overdraft Setup', 'Tax Preservation', 'Compounding Shield'],
    challenge: 'Liquidating investment portfolios to meet temporary cash flow requirements triggers costly short-term or long-term capital gains taxes and halts the compounding growth velocity of your wealth.',
    solution: 'We establish an elegant overdraft facility against your mutual fund holdings. You secure up to 50% value on equity funds and 80% on debt funds, paying interest ONLY on the exact amount and duration utilized, keeping your portfolio fully intact.',
    techStack: ['Mutual Funds', 'Overdraft Line', 'Wealth Preservation']
  },
  {
    id: 'home-loans',
    category: 'Home Financing',
    title: 'Fixed vs. Floating Interest Rates: Navigating Your First Home Loan',
    description: 'Demystifying interest rate mechanics. We compare fixed and floating mortgage structures to save you lakhs over your home loan tenure with strategic balance transfers.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    metric: '₹2.5 Lakhs',
    metricLabel: 'Average Lifetime Savings',
    duration: 'May 2026',
    client: 'Shri Kalyan Punji Mortgages',
    servicesProvided: ['Interest Rate Audit', 'Balance Transfer Analysis', 'Repo-Linked Tracking', 'Tenure Refinancing'],
    challenge: 'A home loan is a decades-long commitment where even a small 0.5% interest premium can translate to several lakhs in unnecessary interest outlays over time.',
    solution: 'We audit your floating home loan rates linked to Repo-Linked Lending Rates (RLLR). By strategically facilitating a Home Loan Balance Transfer to partner banks offering lower margins, we lower your monthly EMI burden and lifetime interest output.',
    techStack: ['Home Loans', 'RLLR Refinancing', 'Balance Transfer']
  }
];

const TESTIMONIALS = [
  {
    quote: "Shri Kalyan Punji secured my business loan in under 48 hours! Their team managed all documentation with partner banks, enabling our manufacturing unit to expand with absolutely zero stress.",
    author: "Devendra Sharma",
    role: "Founder, Sharma Handicrafts",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
  },
  {
    quote: "I was facing home loan approval challenges due to complex property titles. Shri Kalyan Punji mapped me to the ideal private banking partner and guided us patiently through the entire verification process.",
    author: "Priyanka Mehta",
    role: "Senior Architect, Jaipur",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"
  },
  {
    quote: "Outstanding digital service. I applied for a Loan Against Mutual Funds online; the overdraft limit was approved and active in my bank account in a single day without disrupting my compounding investments.",
    author: "Rajesh Singhal",
    role: "Independent Retail Investor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300"
  }
];

const GOLD_DUST_PARTICLES = [
  { id: 1, left: '5%', top: '10%', size: 4, duration: 6, delay: 0.5, color: '#FF4500' },
  { id: 2, left: '25%', top: '35%', size: 3, duration: 8, delay: 1.2, color: '#FAF6E8' },
  { id: 3, left: '45%', top: '15%', size: 5, duration: 7, delay: 0.2, color: '#FF4500' },
  { id: 4, left: '70%', top: '50%', size: 3, duration: 9, delay: 2.0, color: '#FF4500' },
  { id: 5, left: '85%', top: '25%', size: 4, duration: 6, delay: 1.5, color: '#FAF6E8' },
  { id: 6, left: '15%', top: '65%', size: 5, duration: 10, delay: 0.8, color: '#0B1B3A' },
  { id: 7, left: '35%', top: '80%', size: 3, duration: 7, delay: 2.5, color: '#FF4500' },
  { id: 8, left: '60%', top: '75%', size: 4, duration: 8, delay: 1.1, color: '#FAF6E8' },
  { id: 9, left: '80%', top: '85%', size: 3, duration: 9, delay: 0.4, color: '#0B1B3A' },
  { id: 10, left: '92%', top: '60%', size: 5, duration: 6, delay: 1.9, color: '#FF4500' },
  { id: 11, left: '50%', top: '45%', size: 2, duration: 11, delay: 0.1, color: '#FAF6E8' },
  { id: 12, left: '10%', top: '40%', size: 4, duration: 8, delay: 3.0, color: '#0B1B3A' },
  { id: 13, left: '30%', top: '20%', size: 3, duration: 7, delay: 1.7, color: '#FF4500' },
  { id: 14, left: '75%', top: '10%', size: 4, duration: 9, delay: 2.2, color: '#FAF6E8' },
  { id: 15, left: '55%', top: '90%', size: 5, duration: 8, delay: 0.7, color: '#0B1B3A' },
];

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(1000000); // Default ₹10 Lakhs
  const [interestRate, setInterestRate] = useState(10.5); // Default 10.5%
  const [tenure, setTenure] = useState(120); // Default 120 Months (10 Years)

  // Loan Application Form State
  const [selectedService, setSelectedService] = useState<string>('Personal Loan');
  const [selectedBudget, setSelectedBudget] = useState<string>('₹5 Lakhs - ₹15 Lakhs');
  const [formName, setFormName] = useState('');
  const [formMobile, setFormMobile] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formAddress, setFormAddress] = useState('');
  const [formPan, setFormPan] = useState('');
  const [formAadhaar, setFormAadhaar] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formConsent, setFormConsent] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Live EMI Calculations
  const calculateEMI = () => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure;
    if (r === 0) return P / n;
    const emiVal = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return emiVal;
  };

  const monthlyEMI = calculateEMI();
  const totalPayment = monthlyEMI * tenure;
  const totalInterest = totalPayment - loanAmount;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formMobile || !formConsent) return;
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormName('');
    setFormMobile('');
    setFormEmail('');
    setFormAddress('');
    setFormPan('');
    setFormAadhaar('');
    setFormMessage('');
    setFormConsent(false);
    setFormSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-navy selection:bg-brand-gold selection:text-brand-navy">
      
      {/* SECTION: STICKY NAVIGATION */}
      <header 
        className="sticky top-0 z-40 w-full bg-[#0B1B3A] border-b border-brand-gold/20 shadow-[0_4px_30px_rgba(11,27,58,0.25)] transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo with Compass detail */}
          <a href="#" className="flex items-center gap-2.5 group" id="nav-logo">
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center relative overflow-hidden group-hover:rotate-45 transition-transform duration-500">
              <Compass className="w-5 h-5 text-white absolute" />
              <div className="absolute w-1 h-1 bg-white rounded-full top-2 left-1/2 -translate-x-1/2"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-widest font-serif text-white leading-none">SHRI KALYAN PUNJI</span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#FF4500] font-bold">Paiso Ki Dukaan</span>
            </div>
          </a>

          {/* Desktop Navigation Link Container (Styled pill shape) */}
          <nav className="hidden md:flex items-center bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-6 py-2 shadow-inner transition-all duration-300" id="desktop-nav">
            <ul className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider">
              {[
                { label: 'Home', id: 'home', target: '#' },
                { label: 'Loans', id: 'services', target: '#services' },
                { label: 'About Us', id: 'about-us', target: '#about-us' },
                { label: 'Blogs', id: 'projects', target: '#projects' },
                { label: 'Contact Us', id: 'contact', target: '#contact' },
              ].map((item) => (
                <li key={item.id} className="relative py-1">
                  <a 
                    href={item.target}
                    onClick={() => setActiveNav(item.id)}
                    className={`transition-colors duration-300 hover:text-white tracking-wider ${activeNav === item.id ? 'text-white font-extrabold' : 'text-white/80'}`}
                  >
                    {item.label}
                  </a>
                  {activeNav === item.id && (
                    <span 
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button / Primary CTA */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-[#FF4500] text-[#0B1B3A] text-xs uppercase tracking-widest font-extrabold px-6 py-3.5 rounded-full hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-md border border-[#FF4500]/30"
              id="cta-contact-btn"
            >
              Apply Now <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              suppressHydrationWarning
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#FF4500] transition-colors duration-200"
              aria-label="Toggle Menu"
              id="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden bg-[#0B1B3A] border-b border-white/10 overflow-hidden"
            id="mobile-drawer"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {[
                { label: 'Home', id: 'home', target: '#' },
                { label: 'Loans', id: 'services', target: '#services' },
                { label: 'About Us', id: 'about-us', target: '#about-us' },
                { label: 'Blogs', id: 'projects', target: '#projects' },
                { label: 'Contact Us', id: 'contact', target: '#contact' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={item.target}
                  onClick={() => {
                    setActiveNav(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-2.5 rounded-lg font-semibold text-sm tracking-wide uppercase ${activeNav === item.id ? 'bg-white/20 text-white font-extrabold' : 'text-white/80 hover:bg-white/10'}`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 px-4">
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#FF4500] text-[#0B1B3A] text-xs uppercase tracking-widest font-bold py-3.5 rounded-full hover:bg-white hover:text-brand-navy transition-all duration-300"
                >
                  Apply Now <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* SECTION: HERO */}
      <div className="w-full">
        <section 
          className="relative overflow-hidden py-16 lg:py-24 w-full bg-[#0B1B3A]" 
          id="hero"
        >
          {/* Fine Keyline */}
          <div className="absolute inset-1.5 md:inset-2 border border-[#12141a]/15 pointer-events-none z-30" />

          {/* Drafting Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#12141a_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.03] pointer-events-none" />

          {/* Premium Background Textures, Orbs, and Animations */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
            {/* Themed Hero Background Image */}
            <Image
              src="https://res.cloudinary.com/dtrvyelcg/image/upload/v1783943642/ChatGPT_Image_Jul_13_2026_05_23_48_PM_azy0bm.png"
              alt="Shri Kalyan Punji Premium Hero Background"
              fill
              priority
              className="object-cover opacity-100"
              referrerPolicy="no-referrer"
            />

            {/* Golden and Colorful Floating Particle Star Sparkles - Enlarged & Highlighted */}
            <div 
              className="absolute top-12 left-[12%] text-[#C9A227] drop-shadow-[0_0_12px_rgba(201,162,39,0.6)]"
            >
              <Sparkles className="w-10 h-10" />
            </div>
            
            <div 
              className="absolute bottom-24 left-[6%] text-[#FF4500] drop-shadow-[0_0_10px_rgba(255,69,0,0.5)]"
            >
              <Sparkles className="w-8 h-8" />
            </div>

            <div 
              className="absolute top-24 right-[10%] text-[#0B1B3A] drop-shadow-[0_0_10px_rgba(11,27,58,0.3)]"
            >
              <Sparkles className="w-9 h-9" />
            </div>

            <div 
              className="absolute bottom-16 right-[20%] text-[#C9A227] drop-shadow-[0_0_10px_rgba(201,162,39,0.5)]"
            >
              <Sparkles className="w-7 h-7" />
            </div>

            {/* Premium Guilloche SVG Curves (Wave design lines representing trust and flow of money) - Colored & Thickened */}
            <svg className="absolute top-0 right-0 w-[55%] h-full opacity-80" viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100,50 Q200,200 150,400 T250,750" stroke="#C9A227" strokeWidth="2.5" strokeOpacity="0.45" />
              <path d="M120,60 Q220,210 170,410 T270,760" stroke="#0B1B3A" strokeWidth="1.8" strokeDasharray="5 5" strokeOpacity="0.4" />
              <path d="M80,40 Q180,190 130,390 T230,740" stroke="#FF4500" strokeWidth="1" strokeOpacity="0.3" />
              <path d="M140,70 Q240,220 190,420 T290,770" stroke="#C9A227" strokeWidth="2" strokeOpacity="0.35" />
            </svg>

            {/* Colorful vibrant light leak orbs */}
            <div 
              className="absolute -top-[12%] -left-[12%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#C9A227]/30 to-[#FF4500]/25 blur-[80px]"
            ></div>

            <div 
              className="absolute top-[20%] right-[10%] w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-[#0B1B3A]/25 via-[#C9A227]/20 to-[#FF4500]/20 blur-[100px]"
            ></div>

            <div 
              className="absolute -bottom-[15%] left-[25%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#FF4500]/25 to-[#C9A227]/30 blur-[90px]"
            ></div>

            {/* Micro diagonal shine overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                {/* Left Hero Column */}
            <div id="mobile-hero-left-col" className="lg:col-span-6 flex flex-col items-start text-left space-y-6 z-10 py-4 px-0 relative">
              <style dangerouslySetInnerHTML={{__html: `
                @media (max-width: 1023px) {
                  #mobile-hero-tagline-span {
                    display: inline-block !important;
                    width: 209.3px !important;
                    height: 38.975px !important;
                    margin-top: -104px !important;
                    margin-left: 38px !important;
                    color: #ff8b04 !important;
                    font-family: Georgia, serif !important;
                    text-align: justify !important;
                    font-style: normal !important;
                    text-decoration-line: none !important;
                    font-weight: bold !important;
                    background: none !important;
                    -webkit-background-clip: unset !important;
                    background-clip: unset !important;
                  }
                  #mobile-hero-punji-span {
                    font-family: Georgia, serif !important;
                    font-style: italic !important;
                    text-decoration-line: none !important;
                    font-weight: bold !important;
                    color: #ffbe0c !important;
                    background: none !important;
                    -webkit-background-clip: unset !important;
                    background-clip: unset !important;
                  }
                  #mobile-hero-shri-kalyan-span {
                    margin-left: 2px !important;
                    margin-top: -40px !important;
                    display: inline-block !important;
                  }
                  #mobile-hero-advisory-div {
                    margin-top: -27px !important;
                  }
                  #mobile-hero-left-col {
                    padding-top: -9px !important;
                  }
                  #mobile-hero-illustrations-container {
                    padding-top: 1px !important;
                  }
                }
              `}} />
              {/* Premium Localized Textured Animation Panel */}
              <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
                {/* 1. Gold & Crimson Dust Particles */}
                {GOLD_DUST_PARTICLES.map((particle) => (
                  <div
                    key={particle.id}
                    className="absolute rounded-full opacity-40"
                    style={{
                      left: particle.left,
                      top: particle.top,
                      width: particle.size,
                      height: particle.size,
                      backgroundColor: particle.color,
                      boxShadow: `0 0 10px ${particle.color}`,
                    }}
                  />
                ))}

                {/* 2. Decorative Star Sparkles */}
                <div 
                  className="absolute top-[20%] right-[15%] text-[#FF4500] drop-shadow-[0_0_8px_rgba(255,69,0,0.5)]"
                >
                  <Sparkles className="w-8 h-8" />
                </div>

                <div 
                  className="absolute bottom-[35%] left-[5%] text-[#FAF6E8] drop-shadow-[0_0_6px_rgba(250,246,232,0.4)] opacity-50"
                >
                  <Sparkles className="w-6 h-6" />
                </div>

                {/* 3. Micro Guilloche Math Security Waves */}
                <svg className="absolute -right-6 top-0 h-full w-[80%] opacity-25" viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M10,100 C150,150 50,350 200,500" 
                    stroke="#FF4500" 
                    strokeWidth="1.2" 
                    strokeDasharray="4 4"
                  />
                  <path 
                    d="M30,120 C170,170 70,370 220,520" 
                    stroke="#0B1B3A" 
                    strokeWidth="1" 
                  />
                  <path 
                    d="M50,140 C190,190 90,390 240,540" 
                    stroke="#FAF6E8" 
                    strokeWidth="1.5" 
                    strokeOpacity="0.4"
                  />
                </svg>
              </div>


              {/* B. Elegant Tagline */}
              <div className="flex items-center gap-3 z-10 select-none">
                <span className="h-[2px] w-6 sm:w-10 bg-[#FFF09F]/60" />
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#FFF09F] fill-[#FFF09F]/30" />
                  <span id="mobile-hero-tagline-span" className="font-sans text-xs sm:text-sm font-black bg-gradient-to-r from-[#FFFDF0] via-[#FFF09F] to-[#C59B27] bg-clip-text text-transparent tracking-[8px] md:tracking-[10px] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    PAISO KI DUKAAN
                  </span>
                </div>
                <span className="h-[2px] w-6 sm:w-10 bg-[#FFF09F]/60" />
              </div>

              {/* C. Editorial Display Heading (SHRI KALYAN PUNJI) */}
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black tracking-[3px] sm:tracking-[4px] leading-[1.15] z-10 flex flex-col gap-1 text-left">
                <span id="mobile-hero-shri-kalyan-span" className="text-[#FFFFFF] drop-shadow-[0_3px_6px_rgba(0,0,0,0.4)]">
                  SHRI KALYAN
                </span>
                <span id="mobile-hero-punji-span" className="bg-gradient-to-r from-[#FFF9D6] via-[#FFD700] via-[#F3C530] via-[#C59B27] to-[#8E6D10] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(253,224,71,0.35)] font-black">
                  PUNJI
                </span>
              </h1>

              {/* D. Premium Capital Advisory */}
              <div id="mobile-hero-advisory-div" className="w-full pt-4 border-t border-[#C9A45B]/40 mt-2 z-10 max-w-md">
                <p className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[5px] sm:tracking-[7px] leading-relaxed text-left flex flex-wrap items-center gap-x-1.5 gap-y-1">
                  <span className="text-[#FFFFFF]">PREMIUM</span>
                  <span className="text-[#FFF09F] font-black drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] bg-[#C59B27]/20 px-2.5 py-0.5 rounded-md border border-[#C59B27]/40">
                    CAPITAL
                  </span>
                  <span className="text-[#FFFFFF]">ADVISORY</span>
                </p>
              </div>

              {/* === MOBILE-ONLY CREDIT CARD ANIMATION === */}
              <div id="mobile-hero-illustrations-container" className="block lg:hidden w-full relative py-12 flex justify-center items-center">
                <div className="relative w-full max-w-[400px] aspect-[4/3] flex items-center justify-center" id="hero-illustrations-mobile">
                  
                  {/* Backing Gold Ornament Frame */}
                  <div className="absolute inset-0 bg-brand-gold/5 rounded-[40px] -rotate-3 scale-105 pointer-events-none -z-10 border border-brand-gold/10"></div>
                  
                  {/* Credit Card Video Player */}
                  <div 
                    className="w-full h-full border border-brand-gold/30 rounded-[36px] overflow-hidden shadow-2xl bg-transparent relative group"
                  >
                    <video 
                      src="/Credit.mp4" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover mix-blend-multiply"
                    />
                    {/* Inner reflection glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/20 pointer-events-none"></div>
                  </div>

                  {/* Floating Revolving Circular Stamp Badge */}
                  <div className="absolute -top-6 -left-6 bg-[#F7F1E1] border border-brand-gold/40 rounded-full p-1.5 shadow-lg z-20">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-white rounded-full">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path id="circlePathMobile" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                        <text className="text-[7px] font-extrabold fill-brand-navy tracking-[2px] uppercase">
                          <textPath href="#circlePathMobile">
                            • SHRI KALYAN PUNJI • PAISO KI DUKAAN • PREMIER •
                          </textPath>
                        </text>
                      </svg>
                      <div className="absolute flex items-center justify-center">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold fill-brand-gold" />
                      </div>
                    </div>
                  </div>

                  {/* Gold Ornament: Est Year and Trust stamp */}
                  <div className="absolute -bottom-6 left-[10%] bg-[#F7F1E1] px-4 py-2 border border-brand-gold/20 rounded-full flex items-center gap-3 shadow-md z-20">
                    <span className="text-[10px] font-mono tracking-widest text-[#5A6372]">SINCE 2012</span>
                    <span className="text-brand-gold font-bold">⇄</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-navy">TRUSTED</span>
                  </div>

                </div>
              </div>

              {/* === MOBILE-ONLY BESPOKE TEXT, BUTTONS, TRUST STACK === */}
              <div className="flex lg:hidden flex-col items-start space-y-6 w-full">
                {/* D. Tactical gold-Bordered Paragraph Box */}
                <div className="relative border-l-4 border-[#FF4500] pl-5 py-3 my-3 bg-[#0B1B3A]/60 backdrop-blur-sm pr-4 rounded-r-md shadow-[4px_4px_0px_0px_rgba(255,69,0,0.1)] border border-white/10 z-10 w-full">
                  <p className="font-sans text-sm text-[#F7F1E1]/90 font-semibold leading-relaxed">
                   Get Personal Loan Up To ₹50 Lakhs Starting @10.5% per annum.
                  </p>
                </div>

                {/* E. Tactile Pill/Pill-Adjacent Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full pt-2">
                  <a 
                    href="#contact"
                    className="px-8 py-4 bg-[#FF4500] text-[#0B1B3A] text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-[#0B1B3A] hover:-translate-y-0.5 active:translate-y-0 text-center rounded-full shadow-[0_4px_20px_rgba(255,69,0,0.35)]"
                    id="hero-get-started-mobile"
                  >
                    Apply Securely
                  </a>
                  <a 
                    href="#emi-calculator"
                    className="px-8 py-4 border-2 border-white/40 hover:border-[#FF4500] text-white hover:text-[#FF4500] text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white/5 text-center rounded-full"
                  >
                    Calculate EMI
                  </a>
                </div>

                {/* F. Premium 3 Features Stack inside High-Visibility Blue Canvas */}
                <div className="w-full bg-gradient-to-br from-[#0c234a] via-[#112a55] to-[#071735] border-2 border-brand-gold/45 shadow-[0_12px_40px_rgba(11,27,58,0.6)] rounded-3xl p-5 mt-4 z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Feature 1 */}
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="p-2 rounded-lg bg-[#FFF09F]/10 border border-[#FFF09F]/20 text-[#FFF09F] shrink-0">
                        <Smartphone className="w-4 h-4 text-[#FFF09F]" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-sans text-xs font-black text-[#FFF09F] tracking-wide uppercase">100% Digital Process</h4>
                        <p className="font-sans text-[11px] text-[#F7F1E1]/80 leading-snug">No paperwork, complete online.</p>
                      </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="p-2 rounded-lg bg-[#FFF09F]/10 border border-[#FFF09F]/20 text-[#FFF09F] shrink-0">
                        <ClipboardList className="w-4 h-4 text-[#FFF09F]" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-sans text-xs font-black text-[#FFF09F] tracking-wide uppercase">No Collateral Required</h4>
                        <p className="font-sans text-[11px] text-[#F7F1E1]/80 leading-snug">Unsecured loan, no guarantor needed.</p>
                      </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="p-2 rounded-lg bg-[#FFF09F]/10 border border-[#FFF09F]/20 text-[#FFF09F] shrink-0">
                        <Zap className="w-4 h-4 text-[#FFF09F]" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-sans text-xs font-black text-[#FFF09F] tracking-wide uppercase">Quick Approval & Disbursal</h4>
                        <p className="font-sans text-[11px] text-[#F7F1E1]/80 leading-snug">Get sanction and funds swiftly.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* === DESKTOP-ONLY BESPOKE TEXT, BUTTONS, TRUST STACK === */}
              <div className="hidden lg:flex flex-col items-start space-y-6 w-full">
                {/* D. Tactical gold-Bordered Paragraph Box */}
                <div className="relative border-l-4 border-[#FF4500] pl-5 py-3 my-3 bg-[#0B1B3A]/60 backdrop-blur-sm pr-4 rounded-r-md shadow-[4px_4px_0px_0px_rgba(255,69,0,0.1)] border border-white/10 z-10 w-full">
                  <p className="font-sans text-sm md:text-base text-[#F7F1E1]/90 font-semibold leading-relaxed max-w-lg">
                    Bespoke digital canvases designed to celebrate your timeless heritage, absolute financial precision, and high-performance wealth solutions.
                  </p>
                </div>

                {/* E. Tactile Pill/Pill-Adjacent Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
                  <a 
                    href="#contact"
                    className="px-8 py-4 bg-[#FF4500] text-[#0B1B3A] text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-[#0B1B3A] hover:-translate-y-0.5 active:translate-y-0 text-center rounded-full shadow-[0_4px_20px_rgba(255,69,0,0.35)]"
                    id="hero-get-started-desktop"
                  >
                    Apply Securely
                  </a>
                  <a 
                    href="#emi-calculator"
                    className="px-8 py-4 border-2 border-white/40 hover:border-[#FF4500] text-white hover:text-[#FF4500] text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white/5 text-center rounded-full"
                  >
                    Calculate EMI
                  </a>
                </div>

                {/* F. Premium 3 Features Stack inside High-Visibility Blue Canvas */}
                <div className="w-full bg-gradient-to-br from-[#0c234a] via-[#112a55] to-[#071735] border-2 border-brand-gold/45 shadow-[0_12px_40px_rgba(11,27,58,0.6)] rounded-3xl p-5 mt-4 z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Feature 1 */}
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="p-2 rounded-lg bg-[#FFF09F]/10 border border-[#FFF09F]/20 text-[#FFF09F] shrink-0">
                        <Smartphone className="w-4 h-4 text-[#FFF09F]" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-sans text-xs font-black text-[#FFF09F] tracking-wide uppercase">100% Digital Process</h4>
                        <p className="font-sans text-[11px] text-[#F7F1E1]/80 leading-snug">No paperwork, complete online.</p>
                      </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="p-2 rounded-lg bg-[#FFF09F]/10 border border-[#FFF09F]/20 text-[#FFF09F] shrink-0">
                        <ClipboardList className="w-4 h-4 text-[#FFF09F]" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-sans text-xs font-black text-[#FFF09F] tracking-wide uppercase">No Collateral Required</h4>
                        <p className="font-sans text-[11px] text-[#F7F1E1]/80 leading-snug">Unsecured loan, no guarantor needed.</p>
                      </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="p-2 rounded-lg bg-[#FFF09F]/10 border border-[#FFF09F]/20 text-[#FFF09F] shrink-0">
                        <Zap className="w-4 h-4 text-[#FFF09F]" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-sans text-xs font-black text-[#FFF09F] tracking-wide uppercase">Quick Approval & Disbursal</h4>
                        <p className="font-sans text-[11px] text-[#F7F1E1]/80 leading-snug">Get sanction and funds swiftly.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Hero Column: Premium Credit Card Video Animation */}
            <div className="hidden lg:flex lg:col-span-6 relative justify-center items-center mt-8 lg:mt-0">
              <div className="relative w-full max-w-[450px] aspect-[4/3] flex items-center justify-center" id="hero-illustrations-desktop">
                
                {/* Backing Gold Ornament Frame */}
                <div className="absolute inset-0 bg-brand-gold/5 rounded-[40px] -rotate-3 scale-105 pointer-events-none -z-10 border border-brand-gold/10"></div>
                
                {/* Credit Card Video Player */}
                <div 
                  className="w-full h-full border border-brand-gold/30 rounded-[36px] overflow-hidden shadow-2xl bg-transparent relative group"
                >
                  <video 
                    src="/Credit.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover mix-blend-multiply"
                  />
                  {/* Inner reflection glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/20 pointer-events-none"></div>
                </div>

                {/* Floating Revolving Circular Stamp Badge */}
                <div className="absolute -top-6 -left-6 bg-[#F7F1E1] border border-brand-gold/40 rounded-full p-1.5 shadow-lg z-20">
                  <div className="relative w-24 h-24 flex items-center justify-center bg-white rounded-full">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path id="circlePathDesktop" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                      <text className="text-[7px] font-extrabold fill-brand-navy tracking-[2px] uppercase">
                        <textPath href="#circlePathDesktop">
                          • SHRI KALYAN PUNJI • PAISO KI DUKAAN • PREMIER •
                        </textPath>
                      </text>
                    </svg>
                    <div className="absolute flex items-center justify-center">
                      <Star className="w-5 h-5 text-brand-gold fill-brand-gold" />
                    </div>
                  </div>
                </div>

                {/* Gold Ornament: Est Year and Trust stamp */}
                <div className="absolute -bottom-6 left-[10%] bg-[#F7F1E1] px-4 py-2 border border-brand-gold/20 rounded-full flex items-center gap-3 shadow-md z-20">
                  <span className="text-[10px] font-mono tracking-widest text-[#5A6372]">SINCE 2012</span>
                  <span className="text-brand-gold font-bold">⇄</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-navy">TRUSTED</span>
                </div>

              </div>
            </div>

          </div>
        </div>
        </section>
      </div>

      {/* SECTION: BRAND / PARTNER BANNER */}
      <section className="bg-brand-navy text-white py-10 w-full overflow-hidden shadow-inner border-y border-[#FF4500]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#FF4500] font-extrabold text-center mb-8 opacity-80">
            Our Trusted Banking & Financial Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-x-16 lg:gap-x-20 opacity-80 text-sm font-bold" id="brand-logos">
            
            {/* HDFC Bank */}
            <div className="flex items-center gap-1.5 group cursor-pointer">
              <span className="text-white group-hover:text-[#FF4500] transition-colors">HDFC BANK</span>
            </div>

            {/* ICICI Bank */}
            <div className="flex items-center gap-1.5 group cursor-pointer">
              <span className="text-white group-hover:text-[#FF4500] transition-colors">ICICI Bank</span>
            </div>

            {/* SBI */}
            <div className="flex items-center gap-1.5 group cursor-pointer">
              <span className="text-white group-hover:text-[#FF4500] transition-colors">State Bank of India</span>
            </div>

            {/* Axis Bank */}
            <div className="flex items-center gap-1.5 group cursor-pointer">
              <span className="text-white group-hover:text-[#FF4500] transition-colors">AXIS BANK</span>
            </div>

            {/* Kotak */}
            <div className="flex items-center gap-1.5 group cursor-pointer">
              <span className="text-white group-hover:text-[#FF4500] transition-colors">kotak</span>
            </div>

            {/* Bajaj Finserv */}
            <div className="flex items-center gap-1.5 group cursor-pointer">
              <span className="text-white group-hover:text-[#FF4500] transition-colors">BAJAJ FINSERV</span>
            </div>

            {/* Tata Capital */}
            <div className="flex items-center gap-1.5 group cursor-pointer">
              <span className="text-white group-hover:text-[#FF4500] transition-colors">TATA CAPITAL</span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: SERVICES / FINANCIAL SOLUTIONS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF4500] bg-[#FF4500]/10 px-3.5 py-1 rounded-full">
            Financial Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-brand-navy tracking-tight leading-tight">
            Tailored Loan & Insurance Products for Every Milestone
          </h2>
          <div className="w-16 h-0.5 bg-[#FF4500] mx-auto my-3"></div>
          <p className="text-[#5A6372] text-sm leading-relaxed">
            We simplify borrowing and protection. Compare and apply for optimal rates backed by leading banking partners and custom advisory.
          </p>
        </div>

        {/* 3 Columns Responsive Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {[
            {
              id: 'personal-loan',
              title: 'Personal Loan',
              description: 'Quick, unsecured financing with minimal documentation for weddings, emergencies, or personal purchases.',
              bg: '#D5EAE9',
              rgb: '213, 234, 233',
              textColor: '#1E4341',
              icon: User,
              iconColor: '#3C6E6B'
            },
            {
              id: 'gold-loan',
              title: 'Gold Loan',
              description: 'Instant liquidity against your gold assets with low interest rates, high-value calculations, and safe custody.',
              bg: '#F5DBD2',
              rgb: '245, 219, 210',
              textColor: '#603125',
              icon: Sparkles,
              iconColor: '#BE6A51'
            },
            {
              id: 'credit-card',
              title: 'Credit Cards',
              description: 'Compare and apply for top rewards, lounge access, and fee-waiver credit cards from elite banking partners.',
              bg: '#F6CD73',
              rgb: '246, 205, 115',
              textColor: '#573E0B',
              icon: ShoppingBag,
              iconColor: '#C9A227'
            },
            {
              id: 'mutual-fund-loan',
              title: 'Loan Against Mutual Funds',
              description: 'Keep your investments compounding and unlock instant overdraft limits against your mutual fund portfolio.',
              bg: '#D5EAE9',
              rgb: '213, 234, 233',
              textColor: '#1E4341',
              icon: TrendingUp,
              iconColor: '#3C6E6B'
            },
            {
              id: 'business-loan',
              title: 'Business Loan',
              description: 'Customized credit lines and capital loans to fuel your company\'s infrastructure, inventory, and growth.',
              bg: '#F5DBD2',
              rgb: '245, 219, 210',
              textColor: '#603125',
              icon: Zap,
              iconColor: '#BE6A51'
            },
            {
              id: 'home-loan',
              title: 'Home Loan',
              description: 'Affordable, low-interest mortgage options to construct, buy, or remodel your residential dream space.',
              bg: '#F6CD73',
              rgb: '246, 205, 115',
              textColor: '#573E0B',
              icon: HomeIcon,
              iconColor: '#C9A227'
            },
            {
              id: 'short-term-loan',
              title: 'Short Term Personal Loan',
              description: 'Micro-tenure flexible loans designed to bridge transient financial gaps with straightforward repayments.',
              bg: '#D5EAE9',
              rgb: '213, 234, 233',
              textColor: '#1E4341',
              icon: Clock,
              iconColor: '#3C6E6B'
            },
            {
              id: 'property-loan',
              title: 'Loan Against Property',
              description: 'Leverage the commercial or residential market value of your property to secure maximum borrowing amounts.',
              bg: '#F5DBD2',
              rgb: '245, 219, 210',
              textColor: '#603125',
              icon: Building,
              iconColor: '#BE6A51'
            },
            {
              id: 'balance-transfer',
              title: 'Home Loan Balance Transfer',
              description: 'Refinance high-interest mortgage debt to lower-cost banking partners to achieve significant interest savings.',
              bg: '#F6CD73',
              rgb: '246, 205, 115',
              textColor: '#573E0B',
              icon: RefreshCw,
              iconColor: '#C9A227'
            },
            {
              id: 'health-insurance',
              title: 'Health Insurance',
              description: 'Cashless treatments and secure coverage plans for your family with India\'s premier healthcare networks.',
              bg: '#D5EAE9',
              rgb: '213, 234, 233',
              textColor: '#1E4341',
              icon: Heart,
              iconColor: '#3C6E6B'
            }
          ].map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <div 
                key={srv.id}
                style={{ 
                  background: `linear-gradient(135deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.45) 50%, rgba(${srv.rgb}, 0.4) 100%)`,
                  borderColor: 'rgba(255, 255, 255, 0.6)',
                  boxShadow: 'inset 0 1.5px 1.5px 0 rgba(255, 255, 255, 0.9), inset 0 -1.5px 1.5px 0 rgba(11, 27, 58, 0.04), 0 10px 30px -10px rgba(11, 27, 58, 0.08)',
                  backdropFilter: 'blur(28px) saturate(160%)',
                  WebkitBackdropFilter: 'blur(28px) saturate(160%)'
                }}
                className="rounded-[32px] p-8 md:p-10 border shadow-sm flex flex-col justify-between min-h-[360px] relative overflow-hidden group hover:-translate-y-2 hover:border-[#FFF09F]/60 hover:shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.95),_0_24px_50px_rgba(11,27,58,0.14)] transition-all duration-500 ease-out before:absolute before:inset-0 before:-translate-x-full group-hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/45 before:to-transparent before:transition-transform before:duration-1000 before:z-10 before:pointer-events-none"
                id={`service-${srv.id}`}
              >
                {/* Under-glass Floating Liquid Light Orbs */}
                <div 
                  className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full blur-3xl opacity-35 transition-all duration-700 ease-out group-hover:scale-150 group-hover:opacity-55 pointer-events-none -z-10" 
                  style={{ backgroundColor: srv.iconColor }} 
                />
                <div 
                  className="absolute -top-12 -right-12 w-44 h-44 rounded-full blur-3xl opacity-25 transition-all duration-700 ease-out group-hover:scale-125 group-hover:opacity-45 pointer-events-none -z-10" 
                  style={{ backgroundColor: '#FFFFFF' }} 
                />
                
                <div className="space-y-6 z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.85),0_8px_20px_rgba(11,27,58,0.06)] border border-white/75 bg-white/50 backdrop-blur-md group-hover:scale-110 group-hover:shadow-[inset_0_2px_3px_rgba(255,255,255,1),0_12px_24px_rgba(11,27,58,0.1)] transition-all duration-500 relative overflow-hidden">
                    <IconComponent className="w-6 h-6" style={{ color: srv.iconColor }} />
                  </div>
                  <h3 className="text-2xl font-extrabold font-serif text-brand-navy tracking-tight group-hover:text-black transition-colors duration-300">{srv.title}</h3>
                  <p className="text-sm leading-relaxed font-semibold transition-all duration-300 group-hover:opacity-100" style={{ color: srv.textColor }}>
                    {srv.description}
                  </p>
                </div>
                
                <div className="pt-6 z-10">
                  <a 
                    href="#contact" 
                    onClick={() => {
                      setSelectedService(srv.title);
                      // Update loan amount suggestion based on type
                      if (srv.id === 'home-loan' || srv.id === 'property-loan') {
                        setSelectedBudget('₹50 Lakhs+');
                      } else if (srv.id === 'business-loan') {
                        setSelectedBudget('₹15 Lakhs - ₹50 Lakhs');
                      } else {
                        setSelectedBudget('₹5 Lakhs - ₹15 Lakhs');
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-navy transition-all duration-300 group-hover:text-black"
                  >
                    <span className="relative pb-1">
                      Inquire Product
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C59B27] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-[#C59B27]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION: WHY US? */}
      <section className="bg-[#D4AF37] text-brand-navy py-20 w-full" id="about-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Portrait with Sketch Elements */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-[#0B1B3A] flex flex-col items-center justify-center p-8">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,155,39,0.15),transparent_70%)] pointer-events-none" />
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#C59B27] via-[#FFF09F] to-[#C59B27]/40 p-[2px] shadow-[0_8px_32px_rgba(197,155,39,0.2)] mb-6 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#0B1B3A] flex items-center justify-center">
                    <User className="w-12 h-12 text-[#FFF09F]" />
                  </div>
                </div>
                <div className="text-center space-y-1 z-10">
                  <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wider">EXECUTIVE BOARD</h4>
                  <p className="text-[10px] text-[#FFF09F] font-bold tracking-widest uppercase">SHRI KALYAN PUNJI</p>
                  <div className="w-8 h-[1px] bg-brand-gold/40 mx-auto my-2" />
                  <p className="text-[11px] text-white/60 leading-relaxed">Trusted financial advisors and legal experts guiding your wealth compounding journey since 2012.</p>
                </div>
                
                {/* Handdrawn decorative SVG squiggles overlaid on picture borders */}
                <div className="absolute -top-4 -right-4 w-12 h-12 text-brand-navy opacity-90 pointer-events-none">
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="10" />
                    <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="8" />
                    <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="8" />
                  </svg>
                </div>
                
                <div className="absolute -bottom-2 -left-2 w-16 h-16 text-brand-navy opacity-80 pointer-events-none">
                  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
                    <path d="M10,90 Q40,40 90,10" />
                    <path d="M30,90 Q50,60 90,30" strokeDasharray="5,5" />
                  </svg>
                </div>
              </div>

              {/* Float Stamp Card */}
              <div className="absolute -right-6 bottom-8 bg-white text-brand-navy rounded-2xl p-4 shadow-xl border border-brand-gold/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/15 flex items-center justify-center">
                  <Award className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider leading-none">ISO Certified</div>
                  <div className="text-[10px] text-[#5A6372] mt-0.5">Financial Advisory</div>
                </div>
              </div>
            </div>

            {/* Right Column: Copy & Stats List */}
            <div className="lg:col-span-7 space-y-10 text-left">
              
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-brand-navy/90 bg-brand-navy/10 px-4 py-1.5 rounded-full border border-brand-navy/20 inline-block">
                  About Our Brand
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold font-serif tracking-tight text-brand-navy leading-none">
                  Why Shri Kalyan Punji?
                </h2>
                <div className="w-16 h-0.5 bg-brand-navy"></div>
              </div>

              {/* Stats items with thin divider borders */}
              <div className="divide-y divide-brand-navy/20">
                
                {/* Stat 1 */}
                <div className="py-6 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="text-5xl md:text-6xl font-bold text-brand-navy tracking-tighter shrink-0 min-w-[120px]">
                    12+
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold uppercase tracking-wider text-brand-navy">Years of Excellence</h3>
                    <p className="text-brand-navy/80 text-sm leading-relaxed max-w-xl">
                      Since 2012, we have assisted thousands of clients in securing structured debt and coverage products with complete digital transparency and zero stress.
                    </p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="py-6 flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="text-5xl md:text-6xl font-bold text-brand-navy tracking-tighter shrink-0 min-w-[120px]">
                    5K+
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold uppercase tracking-wider text-brand-navy">Happy Customers</h3>
                    <p className="text-brand-navy/80 text-sm leading-relaxed max-w-xl">
                      Delivering reliable capital flow to individuals, startup founders, and families to support real estate, higher education, or emergency cash flow needs.
                    </p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="py-6 flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="text-5xl md:text-6xl font-bold text-brand-navy tracking-tighter shrink-0 min-w-[120px]">
                    15+
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold uppercase tracking-wider text-brand-navy">Premium Banking Partners</h3>
                    <p className="text-brand-navy/80 text-sm leading-relaxed max-w-xl">
                      Deep integrations with India&apos;s elite banks and financial institutions ensures we source the lowest interest rates and optimal tenure models for you.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION: INTERACTIVE EMI CALCULATOR */}
      <section className="py-24 bg-brand-cream border-y border-[#FF4500]/10" id="emi-calculator">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF4500] bg-[#FF4500]/10 px-3.5 py-1 rounded-full inline-block">
              Interactive Planning
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-brand-navy tracking-tight leading-tight">
              Calculate Your Monthly EMI
            </h2>
            <div className="w-16 h-0.5 bg-[#FF4500] mx-auto my-3"></div>
            <p className="text-[#5A6372] text-sm max-w-xl mx-auto leading-relaxed">
              Use our slider-based calculator to dynamically estimate your monthly installments, interest burden, and design an optimal repayment timeline.
            </p>
          </div>

          <div className="bg-white rounded-[32px] border border-brand-gold/15 p-8 md:p-10 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            
            {/* Left Sliders Column */}
            <div className="md:col-span-7 space-y-8">
              
              {/* Slider 1: Loan Amount */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-brand-navy">Loan Amount</span>
                  <span className="font-mono font-bold text-[#FF4500] bg-[#FF4500]/10 px-3 py-1 rounded-lg">
                    ₹{loanAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <input 
                  suppressHydrationWarning
                  type="range" 
                  min="50000" 
                  max="10000000" 
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-[#FF4500] h-2 bg-brand-cream rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                  <span>₹50,000</span>
                  <span>₹1 Crore</span>
                </div>
              </div>

              {/* Slider 2: Interest Rate */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-brand-navy">Interest Rate (p.a.)</span>
                  <span className="font-mono font-bold text-[#FF4500] bg-[#FF4500]/10 px-3 py-1 rounded-lg">
                    {interestRate}%
                  </span>
                </div>
                <input 
                  suppressHydrationWarning
                  type="range" 
                  min="5" 
                  max="25" 
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-[#FF4500] h-2 bg-brand-cream rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                  <span>5%</span>
                  <span>25%</span>
                </div>
              </div>

              {/* Slider 3: Tenure */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-brand-navy">Tenure (Months)</span>
                  <span className="font-mono font-bold text-[#FF4500] bg-[#FF4500]/10 px-3 py-1 rounded-lg">
                    {tenure} Months ({Math.round(tenure/12)} Years)
                  </span>
                </div>
                <input 
                  suppressHydrationWarning
                  type="range" 
                  min="12" 
                  max="360" 
                  step="12"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full accent-[#FF4500] h-2 bg-brand-cream rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                  <span>12 Mos (1 Yr)</span>
                  <span>360 Mos (30 Yrs)</span>
                </div>
              </div>

            </div>

            {/* Right Output Card Column */}
            <div className="md:col-span-5 bg-brand-navy text-white rounded-[24px] p-6 md:p-8 flex flex-col justify-between border border-[#FF4500]/20 shadow-inner">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#FF4500] font-bold">Estimated Monthly EMI</span>
                  <div className="text-3xl md:text-4xl font-serif font-black text-[#FF4500] mt-1.5">
                    ₹{Math.round(monthlyEMI).toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="space-y-3.5 border-t border-white/10 pt-6 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Principal Amount:</span>
                    <span className="font-mono font-semibold">₹{loanAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Total Interest Burden:</span>
                    <span className="font-mono font-semibold text-[#FF4500]">₹{Math.round(totalInterest).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Total Amount Payable:</span>
                    <span className="font-mono font-semibold">₹{Math.round(totalPayment).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a 
                  href="#contact" 
                  onClick={() => {
                    setSelectedService('Personal Loan');
                    // Automatically suggest budget tier in the form based on calculated loan amount
                    if (loanAmount >= 5000000) {
                      setSelectedBudget('₹50 Lakhs+');
                    } else if (loanAmount >= 1500000) {
                      setSelectedBudget('₹15 Lakhs - ₹50 Lakhs');
                    } else {
                      setSelectedBudget('₹5 Lakhs - ₹15 Lakhs');
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FF4500] text-brand-navy font-bold text-xs uppercase tracking-widest py-3.5 rounded-full hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-md"
                >
                  Apply with this Plan <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION: SELECTED PROJECTS / EDUCATIONAL GUIDES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="projects">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-6">
          <div className="space-y-4 max-w-lg">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF4500] bg-[#FF4500]/10 px-3.5 py-1 rounded-full inline-block">
              Financial Wisdom
            </span>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-brand-navy tracking-tight leading-tight">
                Our Educational Blogs & Guides
              </h2>
              {/* Playful abstract loop SVG underneath the heading */}
              <div className="absolute -bottom-4 left-0 text-[#FF4500]/40 pointer-events-none">
                <svg width="180" height="15" viewBox="0 0 180 15" fill="none">
                  <path d="M3 12C35 4 110 -2 177 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M22 10C55 5 105 3 145 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3,3" />
                </svg>
              </div>
            </div>
            <p className="text-[#5A6372] text-sm mt-4">
              Equip yourself with structured insights on interest trends, borrow optimization, and smart insurance coverage before deciding.
            </p>
          </div>
          
          <div className="text-sm font-semibold text-[#FF4500] flex items-center gap-2 border border-[#FF4500]/20 rounded-full px-5 py-2.5 bg-white/40 shadow-sm shrink-0">
            <span>Scroll & Click to read</span> <Sparkles className="w-4 h-4" />
          </div>
        </div>

        {/* PROJECTS: ALTERNATING GRID LIST */}
        <div className="space-y-24 sm:space-y-32">
          {PROJECTS_DATA.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={project.id} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                id={`project-item-${project.id}`}
              >
                
                {/* Content Block */}
                <div className={`lg:col-span-5 space-y-6 flex flex-col items-start ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  
                  <h3 className="text-3xl font-bold font-serif text-brand-navy tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#5A6372] text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-8 py-3 border-y border-brand-gold/10 w-full">
                    <div>
                      <div className="text-2xl font-black text-brand-gold">{project.metric}</div>
                      <div className="text-[10px] uppercase tracking-wider text-[#8B93A1] mt-0.5">{project.metricLabel}</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-brand-navy">{project.duration}</div>
                      <div className="text-[10px] uppercase tracking-wider text-[#8B93A1] mt-0.5">Read Time</div>
                    </div>
                  </div>

                  <button 
                    suppressHydrationWarning
                    onClick={() => setActiveProjectModal(project)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-navy hover:text-brand-gold transition-colors py-2 border-b-2 border-brand-navy hover:border-brand-gold"
                  >
                    Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Image Block with Luxury Arched / Beveled Container */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div 
                    onClick={() => setActiveProjectModal(project)}
                    className="relative rounded-[28px] overflow-hidden group cursor-pointer border border-brand-gold/20 shadow-lg aspect-[16/10]"
                  >
                    {/* Hover Tint Overlay */}
                    <div className="absolute inset-0 bg-brand-navy/30 group-hover:bg-brand-navy/5 transition-colors duration-500 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white/95 text-brand-navy px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1.5">
                        Read Article <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Corner Tag */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-brand-gold/20 rounded-xl px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-navy z-20 shadow-sm">
                      Guide #{idx + 1}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* SECTION: CLIENT REVIEWS */}
      <section className="bg-brand-navy text-white py-20 w-full overflow-hidden shadow-lg border-y border-brand-gold/10" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Testimonial Portrait inside offset double borders */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                {/* Border effect */}
                <div className="absolute -inset-3 border border-brand-gold rounded-[32px] translate-x-3 translate-y-3 pointer-events-none"></div>
                
                <div className="relative w-[280px] h-[320px] bg-[#0c2044] rounded-[28px] overflow-hidden border-2 border-brand-gold/30 shadow-xl flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,155,39,0.15),transparent_70%)] pointer-events-none" />
                  
                  {/* Default Person Premium Silhouette */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-brand-gold via-[#FFF09F] to-brand-gold/60 p-[2px] shadow-[0_8px_32px_rgba(197,155,39,0.25)] mb-12 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-[#0c2044] flex items-center justify-center">
                      <User className="w-12 h-12 text-[#FFF09F]" />
                    </div>
                  </div>
                  
                  {/* Subtle profile tag */}
                  <div className="absolute bottom-4 inset-x-4 bg-brand-navy/90 backdrop-blur-sm text-center p-3 rounded-xl border border-[#FF4500]/20 z-10">
                    <div className="text-xs font-bold text-white tracking-wide">{TESTIMONIALS[activeTestimonial].author}</div>
                    <div className="text-[10px] text-[#FF4500] tracking-widest uppercase mt-0.5">{TESTIMONIALS[activeTestimonial].role}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Testimony quotation with smooth toggle animations */}
            <div className="lg:col-span-7 text-left space-y-8 relative">
              <Quote className="w-14 h-14 text-[#FF4500] opacity-60" />
              
              <div className="min-h-[160px] flex items-center">
                <div
                  key={activeTestimonial}
                  className="space-y-4"
                >
                  <p className="text-xl sm:text-2xl font-serif leading-relaxed font-medium tracking-wide">
                    &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/20">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    suppressHydrationWarning
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${activeTestimonial === index ? 'w-10 bg-[#FF4500]' : 'w-2.5 bg-white/40 hover:bg-white/70'}`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION: CONTACT APPLICATION FORM */}
      <section className="bg-brand-cream text-brand-navy py-20 w-full border-b border-brand-gold/10" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-white bg-brand-navy px-4 py-1.5 rounded-full">
              Seamless Digital Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight leading-none text-brand-navy">
              Apply Securely Online
            </h2>
            <p className="text-[#5A6372] text-sm max-w-md mx-auto">
              Please provide your financial request parameters. Our senior loan underwriters will review your credentials and contact you shortly.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="bg-white rounded-[32px] p-6 sm:p-10 text-left border border-brand-gold/15 shadow-xl space-y-8">
            
            {/* Step 1: Services Picker */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-[#5A6372] block">
                1. Select Desired Financial Product
              </label>
              <div className="flex flex-wrap gap-2.5">
                {[
                  'Personal Loan',
                  'Gold Loan',
                  'Credit Cards',
                  'Loan Against Mutual Funds',
                  'Business Loan',
                  'Home Loan',
                  'Short Term Personal Loan',
                  'Loan Against Property',
                  'Home Loan Balance Transfer',
                  'Health Insurance'
                ].map((srv) => (
                  <button
                    type="button"
                    key={srv}
                    suppressHydrationWarning
                    onClick={() => setSelectedService(srv)}
                    className={`px-4 py-2 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${selectedService === srv ? 'bg-brand-navy text-white border-transparent shadow-md' : 'bg-[#F7F1E1]/40 text-brand-navy border-brand-gold/20 hover:bg-[#F7F1E1]'}`}
                  >
                    {srv}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Budget Picker */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-[#5A6372] block">
                2. Required Funding Bracket
              </label>
              <div className="flex flex-wrap gap-2.5">
                {['Under ₹5 Lakhs', '₹5 Lakhs - ₹15 Lakhs', '₹15 Lakhs - ₹50 Lakhs', '₹50 Lakhs+'].map((bdg) => (
                  <button
                    type="button"
                    key={bdg}
                    suppressHydrationWarning
                    onClick={() => setSelectedBudget(bdg)}
                    className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${selectedBudget === bdg ? 'bg-brand-navy text-white border-transparent shadow-md' : 'bg-[#F7F1E1]/40 text-brand-navy border-brand-gold/20 hover:bg-[#F7F1E1]'}`}
                  >
                    {bdg}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Coordinates */}
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-[#5A6372] block">
                3. Your Personal Coordinates & Verification
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-brand-navy/40">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    suppressHydrationWarning
                    type="text"
                    required
                    placeholder="Enter full name (as in PAN)"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3.5 bg-[#F7F1E1]/40 border border-brand-gold/20 rounded-xl text-sm placeholder-brand-navy/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-transparent text-brand-navy"
                  />
                </div>

                {/* Mobile Number */}
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-brand-navy/40">
                    <Phone className="w-4 h-4" />
                  </span>
                  <input
                    suppressHydrationWarning
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    value={formMobile}
                    onChange={(e) => setFormMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="w-full pl-10 pr-4 py-3.5 bg-[#F7F1E1]/40 border border-brand-gold/20 rounded-xl text-sm placeholder-brand-navy/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-transparent text-brand-navy font-mono"
                  />
                </div>

                {/* Email address */}
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-brand-navy/40">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    suppressHydrationWarning
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3.5 bg-[#F7F1E1]/40 border border-brand-gold/20 rounded-xl text-sm placeholder-brand-navy/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-transparent text-brand-navy"
                  />
                </div>

                {/* PAN Number */}
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-brand-navy/40">
                    <Shield className="w-4 h-4" />
                  </span>
                  <input
                    suppressHydrationWarning
                    type="text"
                    required
                    maxLength={10}
                    placeholder="PAN card number (e.g. ABCDE1234F)"
                    value={formPan}
                    onChange={(e) => setFormPan(e.target.value.toUpperCase())}
                    className="w-full pl-10 pr-4 py-3.5 bg-[#F7F1E1]/40 border border-brand-gold/20 rounded-xl text-sm placeholder-brand-navy/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-transparent text-brand-navy uppercase font-mono tracking-widest"
                  />
                </div>

                {/* Aadhaar Number */}
                <div className="relative md:col-span-2">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-brand-navy/40">
                    <Shield className="w-4 h-4" />
                  </span>
                  <input
                    suppressHydrationWarning
                    type="text"
                    required
                    maxLength={12}
                    placeholder="Aadhaar number (12 digits)"
                    value={formAadhaar}
                    onChange={(e) => setFormAadhaar(e.target.value.replace(/\D/g, '').slice(0, 12))}
                    className="w-full pl-10 pr-4 py-3.5 bg-[#F7F1E1]/40 border border-brand-gold/20 rounded-xl text-sm placeholder-brand-navy/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-transparent text-brand-navy font-mono"
                  />
                </div>

                {/* Home Address */}
                <div className="relative md:col-span-2">
                  <span className="absolute top-3.5 left-3.5 text-brand-navy/40">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <textarea
                    rows={2}
                    required
                    placeholder="Enter complete current residential address"
                    value={formAddress}
                    onChange={(e) => setFormAddress(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-[#F7F1E1]/40 border border-brand-gold/20 rounded-xl text-sm placeholder-brand-navy/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-transparent text-brand-navy"
                  />
                </div>

              </div>
            </div>

            {/* Step 4: Optional Remarks */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-[#5A6372] block">
                4. Describe your requirements briefly (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Specify preferred banking partners, any existing loans, or critical disbursal timelines..."
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                className="w-full p-4 bg-[#F7F1E1]/40 border border-brand-gold/20 rounded-xl text-sm placeholder-brand-navy/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-transparent text-brand-navy"
              />
            </div>

            {/* Step 5: Consent Checkbox */}
            <div className="flex items-start gap-3 bg-brand-gold/5 p-4 rounded-xl border border-brand-gold/15">
              <input 
                suppressHydrationWarning
                type="checkbox" 
                id="formConsent" 
                required
                checked={formConsent}
                onChange={(e) => setFormConsent(e.target.checked)}
                className="mt-1 accent-brand-navy w-4 h-4 cursor-pointer"
              />
              <label htmlFor="formConsent" className="text-xs text-[#5A6372] leading-relaxed select-none cursor-pointer">
                I hereby declare that the coordinates provided are correct. I explicitly authorize <strong>Shri Kalyan Punji</strong> to fetch my credit score details, share verified credentials with empanelled banking partners, and contact me via Phone Call, SMS, or WhatsApp regarding this request.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                suppressHydrationWarning
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-brand-navy text-white text-xs uppercase tracking-widest font-extrabold px-8 py-4.5 rounded-xl hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 shadow-md border border-transparent"
              >
                Submit Secure Loan Application <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </form>

        </div>
      </section>

      {/* SECTION: FOOTER */}
      <footer className="bg-brand-navy text-white py-16 w-full border-t border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
            
            {/* Logo and Intro */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full border border-brand-gold flex items-center justify-center">
                  <Compass className="w-4.5 h-4.5 text-brand-gold" />
                </div>
                <span className="text-lg font-bold tracking-widest font-serif text-white">SHRI KALYAN PUNJI</span>
              </div>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm">
                Shri Kalyan Punji (Paiso Ki Dukaan) is an authorized premium multi-brand financial distributor offering structured personal loans, gold loans, credit cards, and insurance since 2012.
              </p>
              
              <div className="text-xs text-white/50 space-y-1.5 pt-2">
                <div className="font-bold text-white uppercase tracking-wider">Registered Office:</div>
                <p>303, 3rd Floor, Shreenath Towers, Near Central Bank, Jaipur, Rajasthan - 302001</p>
                <p>Support Hotline: +91 141 400 9999 | contact@shrikalyanpunji.com</p>
              </div>
            </div>

            {/* Link Column 1: Loan Products */}
            <div className="lg:col-span-2.5 space-y-4">
              <h4 className="text-[#FF4500] text-xs uppercase tracking-widest font-bold">Loan Products</h4>
              <ul className="space-y-2.5 text-xs text-white/60 font-semibold uppercase tracking-wider">
                <li><a href="#services" className="hover:text-[#FF4500] transition-colors">Personal Loan</a></li>
                <li><a href="#services" className="hover:text-[#FF4500] transition-colors">Gold Loan</a></li>
                <li><a href="#services" className="hover:text-[#FF4500] transition-colors">Business Loan</a></li>
                <li><a href="#services" className="hover:text-[#FF4500] transition-colors">Mutual Fund Loan</a></li>
              </ul>
            </div>

            {/* Link Column 2: Solutions */}
            <div className="lg:col-span-2.5 space-y-4">
              <h4 className="text-[#FF4500] text-xs uppercase tracking-widest font-bold">Solutions</h4>
              <ul className="space-y-2.5 text-xs text-white/60 font-semibold uppercase tracking-wider">
                <li><a href="#services" className="hover:text-[#FF4500] transition-colors">Credit Cards</a></li>
                <li><a href="#services" className="hover:text-[#FF4500] transition-colors">Home Loan</a></li>
                <li><a href="#services" className="hover:text-[#FF4500] transition-colors">Property Loan</a></li>
                <li><a href="#services" className="hover:text-[#FF4500] transition-colors">Health Cover</a></li>
              </ul>
            </div>

            {/* Link Column 3: Brand */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-[#FF4500] text-xs uppercase tracking-widest font-bold">Brand</h4>
              <ul className="space-y-2.5 text-xs text-white/60 font-semibold uppercase tracking-wider">
                <li><a href="#about-us" className="hover:text-[#FF4500] transition-colors">Our Story</a></li>
                <li><a href="#emi-calculator" className="hover:text-[#FF4500] transition-colors">EMI Calculator</a></li>
                <li><a href="#projects" className="hover:text-[#FF4500] transition-colors">Wisdom Blogs</a></li>
                <li><a href="#contact" className="hover:text-[#FF4500] transition-colors">Apply Now</a></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 text-[11px] text-white/40 space-y-4 leading-relaxed">
            <p><strong>Legal Disclaimer:</strong> Shri Kalyan Punji is an independent financial technology platform and authorized marketing distributor for multiple banks and Non-Banking Financial Companies (NBFCs). We do not directly issue credit cards, disburse cash loans, or underwrite insurance policies. Approval is at the sole discretion of empanelled lending institutions based on custom credit scoring models and compliance audits. Zero service fee is charged directly to consumers.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5 text-xs">
              <p>© 2026 Shri Kalyan Punji. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Charter</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL: CASE STUDY DETAIL SIDE-OVER / DIALOG (Repurposed as Blog Reader Popup) */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto" id="project-detail-modal">
          {/* Backdrop */}
          <div 
            onClick={() => setActiveProjectModal(null)}
            className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm"
          />
          
          {/* Modal Body Container */}
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div 
              className="relative transform overflow-hidden rounded-[32px] bg-brand-cream border border-brand-gold/30 text-left shadow-2xl transition-all w-full max-w-3xl my-8"
            >
              {/* Header Image banner */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                <Image 
                  src={activeProjectModal.image} 
                  alt={activeProjectModal.title} 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-cream via-brand-cream/40 to-transparent"></div>
                
                {/* Close button */}
                <button 
                  suppressHydrationWarning
                  onClick={() => setActiveProjectModal(null)}
                  className="absolute top-4 right-4 bg-brand-navy/80 hover:bg-brand-navy text-white p-2.5 rounded-full shadow-lg transition-transform hover:scale-105"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 sm:left-8 bg-brand-navy/90 text-white rounded-xl px-4 py-1.5 text-xs font-bold uppercase tracking-widest border border-brand-gold/20">
                  {activeProjectModal.category}
                </div>
              </div>

              {/* Body Content */}
              <div className="px-6 sm:px-10 pb-10 pt-4 space-y-6">
                
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-brand-navy tracking-tight leading-tight">
                    {activeProjectModal.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-6 gap-y-1.5 mt-2 text-xs font-medium text-[#5A6372]">
                    <span>Category: <strong className="text-brand-navy">{activeProjectModal.category}</strong></span>
                    <span>•</span>
                    <span>Read Time: <strong className="text-brand-navy">{activeProjectModal.duration}</strong></span>
                  </div>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/60 p-5 rounded-2xl border border-[#FF4500]/15">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#FF4500]/10 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-6 h-6 text-[#FF4500]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#8B93A1] font-semibold leading-none">PRIMARY FOCUS</div>
                      <div className="text-base font-bold text-brand-navy mt-1">{activeProjectModal.metric}</div>
                      <div className="text-[9px] text-[#5A6372]">{activeProjectModal.metricLabel}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center shrink-0">
                      <Shield className="w-6 h-6 text-brand-navy" />
                    </div>
                    <div>
                      <div className="text-xs text-[#8B93A1] font-semibold leading-none">RECOMMENDED PRODUCTS</div>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {activeProjectModal.techStack.map((tech) => (
                          <span key={tech} className="bg-brand-navy/10 text-brand-navy px-1.5 py-0.5 rounded text-[8px] font-bold">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Details (Introduction & Takeaways) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-widest font-extrabold text-[#FF4500] flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> Introduction & Background
                    </h4>
                    <p className="text-[#5A6372] text-xs sm:text-sm leading-relaxed">
                      {activeProjectModal.challenge}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-widest font-extrabold text-[#FF4500] flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" /> Core Takeaways & Advisory
                    </h4>
                    <p className="text-[#5A6372] text-xs sm:text-sm leading-relaxed">
                      {activeProjectModal.solution}
                    </p>
                  </div>
                </div>

                {/* Services List pills (Actionable Next Steps) */}
                <div className="space-y-2 pt-2 border-t border-brand-gold/15">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#8B93A1]">Actionable Next Steps:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProjectModal.servicesProvided.map((serv) => (
                      <span key={serv} className="bg-white text-brand-navy border border-brand-gold/15 px-3 py-1 rounded-full text-[10px] font-bold">
                        {serv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA inside modal */}
                <div className="pt-4 flex justify-end gap-3">
                  <button
                    suppressHydrationWarning
                    onClick={() => setActiveProjectModal(null)}
                    className="px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#5A6372] hover:bg-brand-navy/5 transition-colors"
                  >
                    Close Article
                  </button>
                  <a
                    href="#contact"
                    onClick={() => {
                      setSelectedService(activeProjectModal.category);
                      setActiveProjectModal(null);
                    }}
                    className="inline-flex items-center gap-2 bg-brand-navy text-white text-xs uppercase tracking-widest font-bold px-6 py-3 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-colors shadow-md"
                  >
                    Apply for {activeProjectModal.category} <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBMISSION SUCCESS MODAL */}
      {formSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={resetForm}
            className="fixed inset-0 bg-brand-navy/50 backdrop-blur-sm"
          />
          <div 
            className="bg-brand-cream border border-brand-gold rounded-[28px] p-8 max-w-md w-full relative z-10 shadow-2xl text-center space-y-6"
          >
            <div className="w-16 h-16 bg-brand-gold/15 rounded-full flex items-center justify-center mx-auto text-brand-gold">
              <Check className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-brand-navy">Application Received!</h3>
              <p className="text-[#5A6372] text-sm leading-relaxed">
                Thank you, <strong>{formName}</strong>. Your financial assistance application has been successfully initiated under secure reference protocols.
              </p>
              <p className="text-[#5A6372] text-xs leading-relaxed pt-2">
                Our credit underwriters have logged your credentials. A dedicated financial officer will call you at <strong>{formMobile}</strong> within 2 business hours.
              </p>
            </div>

            <div className="bg-white border border-brand-gold/10 p-4 rounded-xl text-left text-xs text-[#5A6372] space-y-1.5 font-mono">
              <div>• Product: <strong className="text-brand-navy font-sans">{selectedService}</strong></div>
              <div>• Required Budget: <strong className="text-brand-navy font-sans">{selectedBudget}</strong></div>
              {formPan && (
                <div>• PAN Number: <strong>{formPan.substring(0, 2) + 'XXXXX' + formPan.substring(formPan.length - 3)}</strong></div>
              )}
              {formAadhaar && (
                <div>• Aadhaar Number: <strong>XXXX-XXXX-{formAadhaar.substring(formAadhaar.length - 4)}</strong></div>
              )}
              <div>• Status: <strong className="text-emerald-600 font-sans uppercase font-bold">Pending Review</strong></div>
            </div>

            <button
              suppressHydrationWarning
              onClick={resetForm}
              className="w-full bg-brand-navy text-white hover:bg-brand-gold hover:text-brand-navy text-xs uppercase tracking-widest font-extrabold py-3.5 rounded-full transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
