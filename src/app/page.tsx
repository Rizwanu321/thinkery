'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { useInView } from '@/hooks';
import { ArrowRight, Coffee, Leaf, Zap, Wifi, Armchair } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-olive-50/50 pt-28 md:pt-32 pb-20">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none bg-[url('/images/noise.png')] bg-repeat" />

      {/* Animated Gradient Meshes - Responsive Sizes */}
      <div className="absolute top-[-10%] left-[-20%] md:top-[-20%] md:left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-olive-200/30 to-transparent rounded-full blur-[80px] md:blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-[-5%] right-[-10%] md:bottom-[-10%] md:right-[-5%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-gold-200/20 rounded-full blur-[60px] md:blur-[80px]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Top Label */}
        <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-olive-900/10 bg-white/40 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-olive-900 text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold">
              Now Open in Calicut
            </span>
          </div>
        </div>

        {/* Main Title Block */}
        <div className="relative mb-12">
          <h1 className="leading-[0.9] text-olive-950 font-serif">
            <div className="overflow-hidden">
              <span className="block text-xl md:text-3xl lg:text-5xl font-light tracking-[0.2em] md:tracking-widest uppercase mb-2 md:mb-4 animate-reveal-up opacity-0 text-olive-600" style={{ animationDelay: '0.2s' }}>
                A Calm Café Space
              </span>
            </div>
            <div className="overflow-hidden">
              {/* Responsive max width to prevent text overflow on mobile */}
              <span className="block text-[13vw] md:text-[8rem] lg:text-[10rem] font-medium tracking-tighter mix-blend-darken animate-reveal-up opacity-0 break-words leading-none" style={{ animationDelay: '0.4s' }}>
                IN CALICUT
              </span>
            </div>
            <div className="overflow-hidden -mt-1 md:-mt-4 lg:-mt-8">
              <span className="block text-3xl md:text-6xl lg:text-7xl font-serif italic text-gold-500 animate-reveal-up opacity-0" style={{ animationDelay: '0.6s' }}>
                Where Minds Meet
              </span>
            </div>
          </h1>
        </div>

        <p className="text-olive-800/80 text-base md:text-lg lg:text-2xl max-w-xl lg:max-w-2xl mx-auto font-light leading-relaxed mb-10 md:mb-12 animate-fade-in opacity-0 px-4" style={{ animationDelay: '0.8s' }}>
          A thoughtfully designed café for <strong className="font-medium text-olive-900">work</strong>, <strong className="font-medium text-olive-900">meetings</strong>, and <strong className="font-medium text-olive-900">meaningful conversations</strong>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
          <Button asChild size="lg" className="rounded-full px-8 py-6 text-base font-bold tracking-widest uppercase bg-olive-900 text-cream-50 hover:bg-olive-800 hover:scale-105 transition-all duration-300 shadow-xl shadow-olive-900/10 min-w-[160px]">
            <Link href="/contact">
              Visit Us
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base font-bold tracking-widest uppercase border-olive-900/20 text-olive-900 hover:bg-olive-900/5 hover:border-olive-900/40 transition-all duration-300 min-w-[160px]">
            <Link href="/menu">
              View Menu
            </Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
          <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-olive-300 to-transparent mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-olive-900 animate-scroll-down" />
          </div>
        </div>
      </div >
    </section >
  );
}

function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <Section id="about" className="py-24 lg:py-40 relative z-20 -mt-20 overflow-hidden">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Visual Side (Arch Image) */}
          <div className={`relative order-2 lg:order-1 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Decorative Circle Behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-olive-50 rounded-full blur-3xl -z-10" />

            <div className="relative rounded-t-[10rem] rounded-b-[3rem] overflow-hidden shadow-2xl aspect-[3.5/5] border-[8px] border-white">
              <OptimizedImage
                src="/images/cafe-interior-2.jpg"
                alt="Premium Thinkery workspace in Calicut"
                fill
                className="object-cover hover:scale-110 transition-transform duration-[2s] ease-in-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-olive-950/40 via-transparent to-transparent" />

              {/* Floating "Open" Tag */}
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full shadow-lg">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Since 2026</span>
                </div>
              </div>
            </div>

            {/* Floating Element - Coffee Icon */}
            <div className="absolute -top-12 -right-8 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center animate-bounce-slow hidden lg:flex border border-olive-50">
              <Coffee className="w-8 h-8 text-gold-500" />
            </div>
          </div>

          {/* Content Side */}
          <div className={`order-1 lg:order-2 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="mb-6 inline-block">
              <span className="text-gold-600 font-serif italic text-2xl">The Experience</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-olive-950 leading-[1.05] mb-8">
              More than just <br />
              <span className="text-olive-500">coffee.</span>
            </h2>

            <div className="h-px w-24 bg-gold-400 mb-8" />

            <div className="space-y-6 text-xl md:text-2xl text-olive-900/80 font-light leading-relaxed mb-12">
              <p>
                Thinkery is a modern café in Calicut built for <strong className="text-olive-950 font-medium border-b-2 border-gold-300">thinkers, creators, and professionals.</strong>
              </p>
              <p className="text-lg">
                Whether you&apos;re a startup founder, remote employee, student, or simply looking for a quiet break — Thinkery welcomes you.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-olive-950 text-white hover:bg-gold-500 rounded-full px-12 py-8 text-sm tracking-[0.2em] uppercase font-bold shadow-2xl transition-all duration-500 hover:-translate-y-1 group border border-transparent hover:border-gold-400"
            >
              <Link href="/about">
                Our Story
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </Section>
  );
}

function DifferenceSection() {
  const { ref, isInView } = useInView();

  const differences = [
    {
      title: 'Quiet by Design',
      description: 'Acoustically treated interiors and a culture of respect. No loud music, just focus.',
      icon: <span className="text-3xl">🤫</span>
    },
    {
      title: 'Biophilic Interiors',
      description: 'Living plants and natural light to reduce stress and boost creativity.',
      icon: <Leaf className="w-8 h-8" />
    },
    {
      title: 'Gigabit WiFi',
      description: 'Fiber-optic speed for seamless video calls and heavy downloads.',
      icon: <Wifi className="w-8 h-8" />
    },
    {
      title: 'Workspace Ready',
      description: 'Premium seating designed for long hours and power sockets at every table.',
      icon: <Armchair className="w-8 h-8" />
    }
  ];

  return (
    <Section className="bg-olive-950 py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-olive-900/40 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Header */}
      <div ref={ref} className={`mb-16 md:mb-24 text-center max-w-3xl mx-auto px-4 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="inline-block mb-4">
          <span className="py-1 px-3 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-300 text-[10px] uppercase tracking-[0.2em] font-bold backdrop-blur-sm">
            The Standard
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream-50 leading-tight mb-6">
          Not a noisy hangout. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 to-gold-500 italic">A place for clarity.</span>
        </h2>
        <p className="text-white/60 text-lg font-light leading-relaxed">
          Designed from the ground up to support focused work and meaningful meetings.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto px-4 relative z-10">
        {differences.map((feature, index) => (
          <div
            key={feature.title}
            className={`group p-8 lg:p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold-500/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.1)] hover:-translate-y-1 backdrop-blur-sm ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="flex flex-col h-full">
              {/* Icon Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-olive-800/50 to-transparent border border-white/5 group-hover:border-gold-500/20 transition-colors duration-500">
                  <div className="text-gold-400 group-hover:text-gold-300 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                </div>
                <span className="text-white/20 font-serif text-4xl group-hover:text-gold-500/20 transition-colors duration-500 select-none">
                  0{index + 1}
                </span>
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-2xl font-serif text-cream-50 mb-3 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <div className="h-px w-12 bg-white/10 mb-4 group-hover:w-full group-hover:bg-gold-500/30 transition-all duration-700 ease-out" />
                <p className="text-white/60 text-base leading-relaxed font-light group-hover:text-white/80 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function OfferingsSection() {
  const { ref, isInView } = useInView();

  return (
    <Section className="py-24 lg:py-32 relative overflow-hidden bg-cream-50">
      {/* Texture & Ambient Light */}
      <div className="absolute inset-0 bg-fluted opacity-20 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }} />

      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-olive-100/30 blur-[120px] rounded-full pointer-events-none transition-all duration-[3s] ${isInView ? 'scale-125 opacity-40' : 'scale-100 opacity-20'}`} />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4">

        {/* Section Header */}
        <div className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="text-olive-600/80 font-medium tracking-[0.3em] text-xs uppercase mb-6 block">Savor the Moment</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium text-olive-900 leading-tight mb-6 relative inline-block">
            Simple. Fresh.<br />
            <span className="italic text-olive-500">Comforting.</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-olive-300 to-transparent mx-auto mt-8" />
        </div>

        {/* Premium Menu Cards Layout - Asymmetrical Grid */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">

          {/* 1. BEVERAGES CARD (Span 7) */}
          <div className={`md:col-span-7 group relative bg-white border border-cream-100 p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl shadow-olive-900/5 transition-all duration-1000 delay-200 hover:-translate-y-2 hover:shadow-olive-900/10 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Decorative Number */}
            <span className="absolute top-6 right-6 md:top-10 md:right-10 text-6xl md:text-8xl lg:text-9xl font-serif text-olive-900/10 select-none pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">01</span>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mb-10 md:mb-14">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-olive-900 text-cream-50 flex items-center justify-center shadow-lg shadow-olive-900/20">
                  <Coffee className="w-7 h-7 md:w-9 md:h-9" />
                </div>
                <div>
                  <span className="text-olive-500 font-medium tracking-widest text-xs uppercase mb-2 block">The Brew Bar</span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-olive-900 leading-none">Liquid Inspiration</h3>
                </div>
              </div>

              {/* Menu Items - Clean Minimal List */}
              <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
                {[
                  { name: 'Signature Tea', price: '₹120', desc: 'Loose Leaf • Blends' },
                  { name: 'Premium Coffee', price: '₹140', desc: 'Espresso • Pour-over' },
                  { name: 'Fresh Juices', price: '₹160', desc: 'No Sugar • Cold Pressed' },
                  { name: 'Milkshakes', price: '₹180', desc: 'Thick • Creamy' },
                  { name: 'Iced Drinks', price: '₹150', desc: 'Summer Refreshers' },
                ].map((item) => (
                  <div key={item.name} className="space-y-1 group/item cursor-pointer">
                    <div className="flex justify-between items-baseline border-b border-olive-100 pb-2 transition-colors group-hover/item:border-olive-400">
                      <span className="font-medium text-lg text-olive-900">{item.name}</span>
                      <span className="text-olive-500 font-serif">{item.price}</span>
                    </div>
                    <p className="text-xs text-olive-400 uppercase tracking-widest">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. FOOD CARD (Span 5) - Dark Mode Contrast */}
          <div className={`md:col-span-5 group relative bg-olive-950 overflow-hidden p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl shadow-olive-900/10 transition-all duration-1000 delay-300 hover:-translate-y-2 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Gradient Depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-olive-800/20 to-transparent pointer-events-none" />

            {/* Decorative Number */}
            <span className="absolute top-6 right-6 md:top-10 md:right-10 text-6xl md:text-8xl lg:text-9xl font-serif text-white/5 select-none pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12">02</span>

            <div className="relative z-10">
              <div className="flex flex-col gap-6 mb-10 md:mb-14">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-olive-800/50 text-cream-50 border border-olive-700 flex items-center justify-center shadow-lg shadow-black/20">
                  <Zap className="w-7 h-7 md:w-9 md:h-9" />
                </div>
                <div>
                  <span className="text-olive-400/80 font-medium tracking-widest text-xs uppercase mb-2 block">The Kitchen</span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-cream-50 leading-none">Nourishment</h3>
                </div>
              </div>

              <div className="space-y-8">
                {[
                  { name: 'Gourmet Wraps', price: '₹190', desc: 'Freshly Grilled • Chicken / Paneer' },
                  { name: 'Burgers', price: '₹220', desc: 'Juicy Patty • Classic / Veg' },
                  { name: 'Loaded Fries', price: '₹180', desc: 'Seasoned • Cheese / Sauces' },
                  { name: 'Cutlets & Snacks', price: '₹90', desc: 'Crispy • Light Bites' },
                ].map((item) => (
                  <div key={item.name} className="space-y-1 group/item cursor-pointer">
                    <div className="flex justify-between items-baseline border-b border-olive-700 pb-2 transition-colors group-hover/item:border-cream-50">
                      <span className="font-medium text-lg text-cream-50">{item.name}</span>
                      <span className="text-olive-300 font-serif">{item.price}</span>
                    </div>
                    <p className="text-xs text-olive-400 uppercase tracking-widest">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA / Note */}
        <div className={`text-center mt-16 md:mt-24 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-olive-500 font-serif italic text-xl md:text-2xl mb-8">&quot;Fuel for your best ideas.&quot;</p>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-8 py-6 border-olive-200 text-olive-800 hover:bg-olive-50 hover:text-olive-900 transition-all duration-300"
          >
            <Link href="/menu">Explore Full Menu</Link>
          </Button>
        </div>

      </div>
    </Section>
  );
}

function AudienceSection() {
  const { ref, isInView } = useInView();

  const audience = [
    {
      icon: '💼',
      label: 'Corporate',
      desc: 'A quiet alternative to office cafeterias for meetings and focused work.',
      bg: 'bg-olive-900',
      text: 'text-cream-50',
      accent: 'text-gold-400',
      border: 'border-olive-800'
    },
    {
      icon: '💻',
      label: 'Remote',
      desc: 'Reliable WiFi, power outlets, and a calm ambiance — your ideal remote office.',
      bg: 'bg-white',
      text: 'text-olive-900',
      accent: 'text-olive-500',
      border: 'border-olive-100'
    },
    {
      icon: '🤝',
      label: 'Meetings',
      desc: 'An informal yet professional setting for productive discussions.',
      bg: 'bg-gold-50',
      text: 'text-olive-950',
      accent: 'text-gold-600',
      border: 'border-gold-100'
    },
    {
      icon: '📚',
      label: 'Students',
      desc: 'A focused space for studying, planning, and creative work.',
      bg: 'bg-stone-100',
      text: 'text-stone-900',
      accent: 'text-restore-500',
      border: 'border-stone-200'
    },
    {
      icon: '☀️',
      label: 'Calm',
      desc: 'Step away from the noise. Find your moment of peace over a cup of coffee.',
      bg: 'bg-olive-100',
      text: 'text-olive-900',
      accent: 'text-olive-600',
      border: 'border-olive-200'
    }
  ];

  return (
    <Section className="py-24 lg:py-32 overflow-hidden bg-cream-50">
      <div className="container mx-auto px-4">
        {/* Section Header - Left Aligned for Editorial Feel */}
        <div ref={ref} className={`mb-16 max-w-2xl transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
          <span className="text-olive-500 text-xs uppercase tracking-[0.3em] font-bold pl-1 block mb-4">
            Curated Audience
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-olive-900 leading-[1.1] mb-6">
            A space for <br />
            <span className="italic text-gold-600">Deep Work.</span>
          </h2>
          <p className="text-olive-800/70 text-lg font-light max-w-lg">
            Whether you&apos;re here to focus, collaborate, or simply exhale — we&apos;ve designed this environment for you.
          </p>
        </div>

        {/* Accordion Grid */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[500px] transition-all duration-500">
          {audience.map((item, index) => (
            <div
              key={item.label}
              className={`group relative flex-1 lg:hover:flex-[1.5] flex flex-col justify-between p-8 rounded-[2rem] ${item.bg} ${item.border} border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-2xl overflow-hidden min-h-[300px] lg:min-h-0`}
            >
              {/* Decorative Number */}
              <span className={`absolute top-4 right-6 text-6xl font-serif font-bold opacity-10 ${item.text}`}>
                0{index + 1}
              </span>

              {/* Top Content */}
              <div className="relative z-10 transition-transform duration-500 group-hover:translate-y-2">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-6 bg-current opacity-10 ${item.text}`}>
                  <span className="opacity-1000">{item.icon}</span>
                </div>
                <h3 className={`text-3xl font-serif mb-2 leading-none ${item.text}`}>
                  {item.label}
                </h3>
                <div className={`h-0.5 w-8 opacity-30 mt-4 mb-4 group-hover:w-16 transition-all duration-700 ${item.text.replace('text-', 'bg-')}`} />
              </div>

              {/* Bottom Content (Description) */}
              <div className="relative z-10">
                <p className={`text-base font-light leading-relaxed opacity-0 lg:opacity-100 lg:max-h-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-700 ease-out delay-100 ${item.text}`}>
                  {item.desc}
                </p>
                <div className={`lg:hidden text-sm opacity-80 mt-4 ${item.text}`}>
                  {item.desc}
                </div>

                {/* Arrow Action */}
                <div className={`absolute bottom-6 right-6 p-2 rounded-full border opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 ${item.text} ${item.border}`}>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function GallerySection() {
  const { ref, isInView } = useInView();

  return (
    <Section className="py-0 relative bg-cream-50 overflow-hidden">
      {/* Ambient Noise Texture */}
      <div className="absolute inset-0 bg-fluted opacity-20 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }} />

      {/* Full Width Container */}
      <div ref={ref} className="relative w-full">

        {/* Editorial Header */}
        <div className="relative z-20 max-w-[90rem] mx-auto px-6 pt-24 pb-12 md:pt-32 md:pb-20 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className={`md:col-span-7 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-8 bg-olive-400"></span>
              <span className="text-olive-600 font-medium tracking-[0.2em] text-xs uppercase">The Interiors</span>
            </div>
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif font-medium text-olive-900 leading-[0.9] tracking-tight">
              Designed for <br />
              <span className="italic text-olive-500 ml-4 md:ml-12">Clarity.</span>
            </h2>
          </div>
          <div className={`md:col-span-5 md:pb-4 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <p className="text-lg md:text-xl text-olive-800/80 font-light leading-relaxed max-w-md ml-auto border-l border-olive-200 pl-6">
              A peek into our minimal, green-inspired interiors — thoughtfully crafted for calm, comfort, and conversation.
            </p>
          </div>
        </div>

        {/* Mosaic Image Grid - Varied Heights & Widths */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 w-full px-4 md:px-0 pb-20">

          {/* 1. Tall Feature (Entrance) - Spans 4 cols, 2 rows height */}
          <div className={`md:col-span-4 md:row-span-2 relative h-[50vh] md:h-auto min-h-[500px] rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-olive-900/20 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <OptimizedImage
              src="/images/gallery-4.jpg"
              alt="Minimal archway entrance"
              fill
              className="object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity duration-700" />

            {/* Floating Caption */}
            <div className="absolute top-8 left-8 z-20">
              <span className="inline-block text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/30 bg-white/10 px-4 py-2 rounded-full backdrop-blur-xl shadow-lg">
                The Entrance
              </span>
            </div>
          </div>

          {/* 2. Wide Feature (Lounge) - Spans 8 cols */}
          <div className={`md:col-span-8 relative h-[35vh] md:h-[45vh] min-h-[300px] rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-olive-900/20 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <OptimizedImage
              src="/images/gallery-1.jpg"
              alt="Green inspired minimal interior seating"
              fill
              className="object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />

            <div className="absolute bottom-8 left-8 z-20">
              <span className="inline-block text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/30 bg-white/10 px-4 py-2 rounded-full backdrop-blur-xl shadow-lg">
                Main Lounge
              </span>
            </div>
          </div>

          {/* 3. Medium (Counter/Detail) - Spans 4 cols */}
          <div className={`md:col-span-4 relative h-[30vh] md:h-[40vh] min-h-[250px] rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-olive-900/20 transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <OptimizedImage
              src="/images/gallery-2.jpg"
              alt="Coffee bar details"
              fill
              className="object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
            <div className="absolute bottom-8 left-8 z-20">
              <span className="inline-block text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/30 bg-white/10 px-4 py-2 rounded-full backdrop-blur-xl shadow-lg">
                The Bar
              </span>
            </div>
          </div>

          {/* 4. Medium (Workspace) - Spans 4 cols */}
          <div className={`md:col-span-4 relative h-[30vh] md:h-[40vh] min-h-[250px] rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-olive-900/20 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <OptimizedImage
              src="/images/gallery-3.jpg"
              alt="Workspace area"
              fill
              className="object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
            <div className="absolute bottom-8 left-8 z-20">
              <span className="inline-block text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/30 bg-white/10 px-4 py-2 rounded-full backdrop-blur-xl shadow-lg">
                Workspace
              </span>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <DifferenceSection />
      <OfferingsSection />
      <GallerySection />
      <AudienceSection />
    </>
  );
}
