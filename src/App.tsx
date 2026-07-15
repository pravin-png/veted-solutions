import React, { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Mail,
  Globe,
  Building,
  ShieldCheck,
  Award,
  Clock,
  Send,
  Sliders,
  ChevronRight,
  MapPin,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES_DATA, OUTCOMES_DATA } from "./data";
import { ServiceItem } from "./types";
import { getServiceIcon } from "./components/ServiceIconHelper";
import HeroVisualizer from "./components/HeroVisualizer";
import ServiceDetailModal from "./components/ServiceDetailModal";

export default function App() {
  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Capabilities modal states
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Client Outcomes Tab state (Default to "fintech")
  const [activeOutcomeId, setActiveOutcomeId] = useState("fintech");
  const activeOutcome = OUTCOMES_DATA.find((o) => o.id === activeOutcomeId) || OUTCOMES_DATA[0];



  // Lead Form States
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formService, setFormService] = useState("Cloud Infrastructure");
  const [formMessage, setFormMessage] = useState("");
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [generatedTicket, setGeneratedTicket] = useState<{ ticketId: string; date: string } | null>(null);

  // Handle CTA Click to smooth scroll
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Lead form validation and submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { name?: string; email?: string } = {};

    if (!formName.trim()) {
      errors.name = "Please provide your corporate name.";
    }
    if (!formEmail.trim() || !formEmail.includes("@")) {
      errors.email = "Please enter a valid corporate business email.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    // Simulate enterprise api registration
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      const randomTicketNum = Math.floor(1000 + Math.random() * 9000);
      setGeneratedTicket({
        ticketId: `VET-2026-PR${randomTicketNum}`,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        })
      });
    }, 1200);
  };

  return (
    <div className="bg-surface font-sans text-deep-charcoal min-h-screen flex flex-col selection:bg-vivid-orange/10 selection:text-vivid-orange">
      
      {/* 1. Header (TopNavBar) */}
      <header className="fixed top-0 left-0 w-full z-50 h-20 bg-surface-white/90 backdrop-blur-md border-b border-border-gray transition-all">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 h-full flex justify-between items-center">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleScrollTo("hero")}
            className="text-[20px] font-headline font-extrabold tracking-tight text-deep-charcoal hover:opacity-90 transition-opacity"
          >
            VETED SOLUTIONS
          </button>

          {/* Desktop Navigation links */}
          <nav className="hidden md:flex gap-10 items-center">
            <button
              onClick={() => handleScrollTo("services")}
              className="text-[13px] font-mono uppercase tracking-wider text-outline hover:text-vivid-orange transition-colors font-semibold"
            >
              Services
            </button>
            <button
              onClick={() => handleScrollTo("impact")}
              className="text-[13px] font-mono uppercase tracking-wider text-outline hover:text-vivid-orange transition-colors font-semibold"
            >
              Clintle
            </button>
            <button
              onClick={() => handleScrollTo("about")}
              className="text-[13px] font-mono uppercase tracking-wider text-outline hover:text-vivid-orange transition-colors font-semibold"
            >
              About
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="bg-vivid-orange hover:bg-vivid-orange/95 text-surface-white px-6 py-2.5 font-sans text-[13px] font-bold uppercase tracking-wider rounded-sm active:scale-[0.98] transition-all shadow-sm"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-deep-charcoal hover:bg-surface-container-low transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-20 left-0 w-full bg-surface-white border-b border-border-gray shadow-lg z-45 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-5">
                <button
                  onClick={() => handleScrollTo("services")}
                  className="text-left font-mono text-sm uppercase tracking-wider py-2 text-outline hover:text-vivid-orange"
                >
                  Services Matrix
                </button>
                <button
                  onClick={() => handleScrollTo("impact")}
                  className="text-left font-mono text-sm uppercase tracking-wider py-2 text-outline hover:text-vivid-orange"
                >
                  Client Outcomes
                </button>
                <button
                  onClick={() => handleScrollTo("about")}
                  className="text-left font-mono text-sm uppercase tracking-wider py-2 text-outline hover:text-vivid-orange"
                >
                  Operational Excellence
                </button>
                <button
                  onClick={() => handleScrollTo("contact")}
                  className="w-full text-center bg-vivid-orange text-surface-white py-3.5 font-sans text-sm font-bold uppercase tracking-widest"
                >
                  Request Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Sections */}
      <main className="mt-20 flex-grow" id="hero">
        
        {/* 2. Hero Section */}
        <section 
          className="relative min-h-[700px] flex items-center py-16 lg:py-24 overflow-hidden border-b border-border-gray bg-white bg-no-repeat bg-center lg:bg-right bg-cover lg:bg-[size:auto_100%]"
          style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB04mSG-2hcSIz0oUQPAiHFstnvQMjRPs1eVLT1r8sEIbqn7oH83VeO9HD5NZaguAMDmrv_scAoSJMvhKj-HlR6ZowOmhchp9Oyduv8viYTZDrokRtBekSFFNzBvxogDmWABQFRPqwUrHmPXva_XTYn9d47wKLlxOqIGYX4GUYPqjS5v4O2QcCUv_oHcGTX2PgTu6cVQycEwD7vfK5eRNMXT2hcIVNgwUXKWD3zvUpYzyjGx-UknIGsJcB5RzgfSCabaUyt9J35N_IhJ5M")` }}
        >
          {/* Transparent overlay on smaller screens to ensure readability */}
          <div className="absolute inset-0 bg-surface-white/85 lg:bg-transparent pointer-events-none z-0" />

          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 grid grid-cols-12 gap-gutter w-full relative z-10">
            
            {/* Left Column Text details */}
            <div className="col-span-12 lg:col-span-6 flex flex-col items-start gap-8">
              <span className="font-mono text-[11px] text-electric-blue uppercase tracking-[0.2em] font-extrabold flex items-center gap-2">
                <span className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" />
                Precision Architecture
              </span>
              
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-headline font-extrabold leading-[1.1] text-deep-charcoal tracking-tighter">
                Precision System Integration for Global Enterprises.
              </h1>
              
              <p className="text-[16px] sm:text-[18px] text-outline/95 font-sans leading-relaxed max-w-xl">
                Your success in global enterprise transformation starts with precise architecture, seamless integration, and a partner who understands scale. Together, we bridge the gap between legacy stability and modern agility.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
                <button
                  onClick={() => handleScrollTo("services")}
                  className="bg-vivid-orange hover:bg-vivid-orange/95 text-surface-white px-8 py-4 font-mono text-[11px] font-bold tracking-widest flex items-center justify-center gap-3 shadow-md hover:shadow-lg active:scale-[0.99] transition-all uppercase cursor-pointer"
                >
                  OUR SOLUTIONS
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* 3. Metrics Strip */}
        <section className="bg-deep-charcoal text-surface-white py-12 border-b border-black">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            
            <div className="flex flex-col border-l-2 border-vivid-orange pl-5 group hover:border-electric-blue transition-colors duration-300">
              <span className="text-[32px] sm:text-[38px] font-headline font-bold text-vivid-orange group-hover:text-electric-blue transition-colors duration-300">
                150+
              </span>
              <span className="font-mono text-[10px] text-surface-variant/60 uppercase tracking-wider mt-1 block">
                Projects Delivered
              </span>
            </div>

            <div className="flex flex-col border-l-2 border-vivid-orange pl-5 group hover:border-electric-blue transition-colors duration-300">
              <span className="text-[32px] sm:text-[38px] font-headline font-bold text-vivid-orange group-hover:text-electric-blue transition-colors duration-300">
                50+
              </span>
              <span className="font-mono text-[10px] text-surface-variant/60 uppercase tracking-wider mt-1 block">
                Certified Engineers
              </span>
            </div>

            <div className="flex flex-col border-l-2 border-vivid-orange pl-5 group hover:border-electric-blue transition-colors duration-300">
              <span className="text-[32px] sm:text-[38px] font-headline font-bold text-vivid-orange group-hover:text-electric-blue transition-colors duration-300">
                12+
              </span>
              <span className="font-mono text-[10px] text-surface-variant/60 uppercase tracking-wider mt-1 block">
                Industries Served
              </span>
            </div>

            <div className="flex flex-col border-l-2 border-vivid-orange pl-5 group hover:border-electric-blue transition-colors duration-300">
              <span className="text-[32px] sm:text-[38px] font-headline font-bold text-vivid-orange group-hover:text-electric-blue transition-colors duration-300">
                99.9%
              </span>
              <span className="font-mono text-[10px] text-surface-variant/60 uppercase tracking-wider mt-1 block">
                System Uptime
              </span>
            </div>

          </div>
        </section>

        {/* 4. Services Matrix (Grid list of core capabilities) */}
        <section className="py-20 lg:py-28 px-6 sm:px-12 md:px-20 bg-surface border-b border-border-gray" id="services">
          <div className="w-full max-w-[1440px] mx-auto">
            
            {/* Header row with inline decoration */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div>
                <span className="font-mono text-[11px] text-vivid-orange uppercase font-bold tracking-widest block">
                  Core Capabilities
                </span>
                <h2 className="text-[28px] font-headline font-extrabold text-deep-charcoal mt-1">
                  Services Matrix
                </h2>
              </div>
              <div className="hidden md:block h-[1px] flex-grow mx-12 bg-border-gray" />
              <div className="font-mono text-[10px] text-outline font-semibold tracking-wider uppercase">
                Release V.2026.Q3
              </div>
            </div>

            {/* Matrix Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES_DATA.map((service) => {
                const IconComponent = getServiceIcon(service.iconName);
                return (
                  <div
                    key={service.id}
                    className="group bg-surface-white border border-border-gray p-8 hover:border-vivid-orange hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
                    onClick={() => setSelectedService(service)}
                    title="Click to view technical specifications"
                  >
                    <div>
                      {/* Top Code and Icon line */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 bg-vivid-orange/5 group-hover:bg-vivid-orange/10 flex items-center justify-center text-vivid-orange border border-vivid-orange/10 group-hover:border-vivid-orange/20 transition-colors duration-300">
                          <IconComponent className="w-6 h-6 stroke-[1.8]" />
                        </div>
                        <span className="font-mono text-[10px] text-outline group-hover:text-vivid-orange uppercase tracking-wider font-semibold">
                          {service.code}
                        </span>
                      </div>

                      <h3 className="text-[19px] font-headline font-bold text-deep-charcoal mb-3 group-hover:text-vivid-orange transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-body-sm text-outline leading-relaxed font-sans">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 5. Client Outcomes (Case study interactive tab view) */}
        <section className="py-20 lg:py-28 px-6 sm:px-12 md:px-20 bg-surface-container-low border-b border-border-gray" id="impact">
          <div className="w-full max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left Side: Tabs Selection */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[11px] text-vivid-orange uppercase font-bold tracking-widest block">
                    Real-World Impact
                  </span>
                  <h2 className="text-[28px] font-headline font-extrabold text-deep-charcoal mt-1 mb-4">
                    Client Outcomes
                  </h2>
                  <p className="text-body-md text-outline/90 font-sans leading-relaxed max-w-md mb-10">
                    We don't just deliver engineering; we deliver measurable strategic metrics through absolute precision. Explore outcomes by sector.
                  </p>
                </div>

                {/* Tab buttons */}
                <div className="flex flex-col gap-3">
                  {OUTCOMES_DATA.map((outcome) => (
                    <button
                      key={outcome.id}
                      onClick={() => setActiveOutcomeId(outcome.id)}
                      className={`p-5 text-left border-l-4 font-sans text-sm font-bold tracking-wide transition-all uppercase flex justify-between items-center ${
                        activeOutcomeId === outcome.id
                          ? "border-vivid-orange bg-surface-white text-deep-charcoal shadow-sm"
                          : "border-transparent text-outline hover:bg-surface-white/40 hover:text-deep-charcoal"
                      }`}
                    >
                      <span>{outcome.label}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${activeOutcomeId === outcome.id ? "text-vivid-orange translate-x-1" : "text-transparent"}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Side: Active Tab content details */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-8">
                
                {/* Stats Container with animation keying */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeOutcome.stats.map((stat, idx) => (
                    <div
                      key={`${activeOutcomeId}-stat-${idx}`}
                      className="bg-surface-white p-8 border border-border-gray hover:shadow-sm transition-all"
                    >
                      <span className="text-[44px] font-headline font-extrabold text-electric-blue block leading-none">
                        {stat.value}
                      </span>
                      <p className="font-headline font-bold text-[16px] text-deep-charcoal mt-3">
                        {stat.label}
                      </p>
                      <p className="text-body-sm text-outline mt-2 leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Testimonial Quote */}
                <div className="bg-deep-charcoal text-surface-white p-8 border-l-8 border-vivid-orange shadow-md">
                  <p className="text-[16px] sm:text-[18px] font-sans italic text-surface-variant/90 leading-relaxed">
                    "{activeOutcome.quote}"
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 6. Operational Excellence Section */}
        <section className="py-20 lg:py-28 px-6 sm:px-12 md:px-20 bg-surface-white border-b border-border-gray" id="about">
          <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: General Overview & Compliance Checklist */}
            <div className="lg:col-span-6 flex flex-col items-start gap-6">
              <span className="font-mono text-[11px] text-electric-blue uppercase font-bold tracking-[0.2em]">
                Singapore-Based Excellence, Global Reach.
              </span>
              
              <h2 className="text-[32px] font-headline font-bold text-deep-charcoal mt-2 mb-6">
                Operational Excellence at Scale
              </h2>
              
              <p className="text-body-md text-outline leading-relaxed mb-8">
                VETED SOLUTIONS operates at the intersection of deep technical expertise and global business strategy. From our headquarters in Singapore's premier innovation district, we orchestrate complex digital transformations for multinational enterprises. Our approach combines rigorous engineering standards with a localized understanding of diverse market dynamics, ensuring that your infrastructure is not only high-performing but also resilient and compliant across every jurisdiction you operate in.
              </p>

              <div className="w-full p-6 border border-border-gray rounded-sm flex flex-col gap-2">
                <ShieldCheck className="w-6 h-6 text-vivid-orange" />
                <h4 className="font-headline font-bold text-[16px]">Enterprise Security Standards</h4>
                <p className="text-[12px] text-outline mt-1 leading-relaxed">
                  Committed to the highest standards of data security and robust technical governance frameworks.
                </p>
              </div>
            </div>

            {/* Right Side: Global Delivery & Technical Governance info boxes */}
            <div className="lg:col-span-6">
              <div className="bg-surface-container-low p-8 border border-border-gray shadow-sm">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[20px] font-headline font-bold text-deep-charcoal">
                      Global Delivery Model
                    </h3>
                    <p className="text-body-sm text-outline leading-relaxed">
                      Our distributed engineering teams provide follow-the-sun support and development, ensuring that critical enterprise systems maintain 99.99% availability regardless of time zone. We leverage a unified technical stack that allows for seamless collaboration between our Singapore architects and global implementation partners.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[20px] font-headline font-bold text-deep-charcoal">
                      Technical Governance
                    </h3>
                    <p className="text-body-sm text-outline leading-relaxed">
                      We implement a proprietary governance framework that bridges the gap between legacy stability and modern agility. By automating compliance checks and performance monitoring, we provide stakeholders with real-time transparency into their global technical footprint.
                    </p>
                  </div>
                  {/* Removed Strategic Reach footer */}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 7. Lead Capture & Estimator Split Section */}
        <section className="bg-deep-charcoal text-surface-white py-24 border-b border-black" id="contact">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Form Info details */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                
                {/* Visual Info Block */}
                <div className="space-y-4">
                  <h2 className="text-[32px] font-headline font-extrabold text-white leading-tight">
                    Ready to scale your technical infrastructure?
                  </h2>
                  <p className="text-body-sm text-surface-variant/70 leading-relaxed max-w-lg">
                    Connect with our senior architects for a consultation on your next enterprise project.
                  </p>
                </div>

                {/* Mail link block */}
                <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.05] p-5 max-w-md">
                  <div className="w-11 h-11 bg-white/[0.05] border border-white/10 flex items-center justify-center text-vivid-orange rounded-sm shrink-0">
                    <Mail className="w-5 h-5 text-vivid-orange" />
                  </div>
                  <div>
                    <span className="font-headline font-extrabold text-white text-[14px] block uppercase tracking-wider">
                      Enterprise Inquiries
                    </span>
                    <a href="mailto:support@vetedsolutions.com" className="font-mono text-[13px] text-[#9ca3af] hover:text-vivid-orange transition-colors">
                      support@vetedsolutions.com
                    </a>
                  </div>
                </div>

              </div>

              {/* Right Column: Interactive Consultation Request Form */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.div
                      key="lead-form-box"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="bg-surface-white p-8 md:p-10 rounded-sm text-deep-charcoal border border-border-gray shadow-xl"
                    >
                      <form onSubmit={handleFormSubmit} className="space-y-5">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          {/* Name input */}
                          <div className="flex flex-col gap-1.5">
                            <label className="font-mono text-[10px] text-deep-charcoal uppercase font-bold tracking-wider">
                              Name
                            </label>
                            <input
                              type="text"
                              value={formName}
                              onChange={(e) => setFormName(e.target.value)}
                              className={`w-full p-4 border text-[14px] bg-white text-deep-charcoal outline-none focus:border-vivid-orange focus:ring-1 focus:ring-vivid-orange transition-all ${
                                formErrors.name ? "border-rose-500 bg-rose-50/20" : "border-border-gray"
                              }`}
                              placeholder="John Doe"
                            />
                            {formErrors.name && (
                              <span className="text-xs text-rose-600 font-medium font-sans">
                                {formErrors.name}
                              </span>
                            )}
                          </div>

                          {/* Email input */}
                          <div className="flex flex-col gap-1.5">
                            <label className="font-mono text-[10px] text-deep-charcoal uppercase font-bold tracking-wider">
                              Business Email
                            </label>
                            <input
                              type="email"
                              value={formEmail}
                              onChange={(e) => setFormEmail(e.target.value)}
                              className={`w-full p-4 border text-[14px] bg-white text-deep-charcoal outline-none focus:border-vivid-orange focus:ring-1 focus:ring-vivid-orange transition-all ${
                                formErrors.email ? "border-rose-500 bg-rose-50/20" : "border-border-gray"
                              }`}
                              placeholder="john@enterprise.com"
                            />
                            {formErrors.email && (
                              <span className="text-xs text-rose-600 font-medium font-sans">
                                {formErrors.email}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Service input */}
                        <div className="flex flex-col gap-1.5">
                          <label className="font-mono text-[10px] text-deep-charcoal uppercase font-bold tracking-wider">
                            Service of Interest
                          </label>
                          <div className="relative">
                            <select
                              value={formService}
                              onChange={(e) => setFormService(e.target.value)}
                              className="w-full p-4 border border-border-gray text-[14px] bg-white text-deep-charcoal outline-none focus:border-vivid-orange focus:ring-1 focus:ring-vivid-orange transition-all appearance-none cursor-pointer pr-10"
                            >
                              <option>Cloud Infrastructure</option>
                              <option>Enterprise Automation</option>
                              <option>Cyber Security</option>
                              <option>Custom System Integration</option>
                              <option>Data Analytics &amp; AI</option>
                              <option>Managed IT Services</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-deep-charcoal">
                              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Message input */}
                        <div className="flex flex-col gap-1.5">
                          <label className="font-mono text-[10px] text-deep-charcoal uppercase font-bold tracking-wider">
                            Message
                          </label>
                          <textarea
                            value={formMessage}
                            onChange={(e) => setFormMessage(e.target.value)}
                            rows={4}
                            className="w-full p-4 border border-border-gray text-[14px] bg-white text-deep-charcoal outline-none focus:border-vivid-orange focus:ring-1 focus:ring-vivid-orange transition-all resize-none"
                            placeholder="Briefly describe your project requirements..."
                          />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-vivid-orange text-surface-white py-4 font-mono text-[11px] font-bold uppercase tracking-widest hover:brightness-105 active:scale-[0.99] transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                          >
                            {isSubmitting ? (
                              <>
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Processing Request...
                              </>
                            ) : (
                              "Request Consultation"
                            )}
                          </button>
                        </div>

                      </form>
                    </motion.div>
                  ) : (
                    /* Beautiful confirmation ticket output */
                    <motion.div
                      key="lead-success-box"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-surface-white border border-vivid-orange p-8 md:p-10 text-deep-charcoal rounded-sm space-y-6 relative overflow-hidden shadow-2xl"
                    >
                      <div className="flex items-center gap-3 pb-4 border-b border-border-gray">
                        <CheckCircle2 className="w-10 h-10 text-vivid-orange" />
                        <div>
                          <span className="font-mono text-[9px] text-emerald-600 font-bold uppercase tracking-widest block">
                            TRANSACTION REGISTERED
                          </span>
                          <h3 className="font-headline font-extrabold text-xl text-deep-charcoal">
                            Consultation Confirmed
                          </h3>
                        </div>
                      </div>

                      {/* Receipt Ticket Details */}
                      <div className="space-y-4 font-mono text-xs text-outline">
                        <div className="bg-surface-container-low p-4 border border-border-gray space-y-2.5">
                          <div className="flex justify-between">
                            <span className="text-outline/60">TICKET_ID</span>
                            <span className="text-deep-charcoal font-bold">{generatedTicket?.ticketId}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-outline/60">REGISTER_TIME</span>
                            <span className="text-deep-charcoal">{generatedTicket?.date}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-outline/60">CLIENT_NAME</span>
                            <span className="text-deep-charcoal truncate max-w-[200px]">{formName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-outline/60">EMAIL_LINK</span>
                            <span className="text-deep-charcoal truncate max-w-[200px]">{formEmail}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-outline/60">DESIRED_SERVICE</span>
                            <span className="text-vivid-orange font-bold">{formService}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <p className="text-[11px] leading-relaxed text-outline font-sans">
                            Thank you for reaching out. We have logged your request on our secure enterprise queue. An integration architect will analyze your scope inputs and reach back to schedule a technical deep-dive.
                          </p>
                          <p className="text-[11px] leading-relaxed text-vivid-orange font-sans font-bold flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            Next steps: Automated email summary dispatched to {formEmail}.
                          </p>
                        </div>
                      </div>

                      {/* Reset option */}
                      <div className="pt-4 border-t border-border-gray flex justify-end">
                        <button
                          onClick={() => {
                            setFormSubmitted(false);
                            setFormName("");
                            setFormEmail("");
                            setFormMessage("");
                          }}
                          className="font-mono text-[10px] text-outline hover:text-deep-charcoal uppercase tracking-wider font-bold transition-colors cursor-pointer"
                        >
                          Submit Another Scope Inquiry &rarr;
                        </button>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* 8. Footer Bottom */}
      <footer className="w-full bg-[#000000] py-16 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 text-[#9ca3af]">
          
          <div className="flex flex-col gap-4">
            <div className="text-[16px] md:text-[18px] font-headline font-extrabold text-surface-white tracking-wider">
              VETED SOLUTIONS
            </div>
            <div className="text-[12px] leading-relaxed text-[#9ca3af] font-sans">
              © 2026 VETED SOLUTIONS PTE. LTD. All rights reserved.
            </div>
          </div>

          <div className="flex flex-wrap gap-8 text-[12px] text-[#9ca3af] font-sans">
            <a href="#" className="hover:text-vivid-orange transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-vivid-orange transition-colors">
              Terms of Service
            </a>
          </div>

        </div>
      </footer>

      {/* Capabilities Side Modal / Drawer overlay */}
      <AnimatePresence>
        {selectedService && (
          <ServiceDetailModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
