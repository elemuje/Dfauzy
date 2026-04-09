import { useEffect, useRef, useState } from 'react';
import {
  Menu,
  X,
  MessageCircle,
  Phone,
  MapPin,
  Mail,
  Instagram,
  Facebook,
  Globe,
  ChevronDown,
  ArrowRight,
  ShoppingBag,
  Truck,
  Award,
  Users,
  Star,
} from 'lucide-react';

/* ── Data ─────────────────────────────────────────────────── */
const fabricCategories = [
  { name: 'Lace',              image: '/images/lace_gen.jpg',     description: 'Intricate patterns, delicate weight' },
  { name: 'Swiss Voile',       image: '/images/voile_gen.jpg',    description: 'Crisp, breathable, elegant' },
  { name: 'Ankara',            image: '/images/ankara_gen.jpg',   description: 'Vibrant motifs, rich color depth' },
  { name: 'Cashmere',          image: '/images/cashmere_gen.jpg', description: 'Cloud-soft warmth' },
  { name: 'Damask',            image: '/images/damask_gen.jpg',   description: 'Woven texture, formal luxury' },
  { name: 'Senator Materials', image: '/images/senator_gen.jpg',  description: 'Structured, polished' },
  { name: 'Adire',             image: '/images/adire_gen.jpg',    description: 'Hand-influenced patterns' },
  { name: 'Kampala',           image: '/images/kampala_gen.jpg',  description: 'Heritage craft fabric' },
];

const whyChooseUs = [
  { icon: ShoppingBag, title: 'Wholesale & Retail',  description: 'Flexible ordering options for all needs' },
  { icon: Award,       title: 'Affordable Prices',   description: 'Premium quality at competitive rates' },
  { icon: Star,        title: 'High Quality Fabrics', description: 'Carefully curated selection' },
  { icon: Truck,       title: 'Worldwide Shipping',  description: 'Nationwide & international delivery' },
  { icon: Users,       title: 'Trusted Brand',       description: 'Years of excellence in fabric trade' },
];

const testimonials = [
  { name: 'Amina K.',      text: "The quality of their lace fabrics is unmatched. My customers always come back for more!", location: 'Lagos' },
  { name: 'Chief Oladipo', text: "D'fauzy Fabrics has been my go-to for senator materials. Excellent service.",              location: 'Abuja' },
  { name: 'Mrs. Ngozi',    text: "Fast delivery and the Ankara prints are always vibrant and authentic.",                     location: 'Port Harcourt' },
];

const galleryImages = [
  '/images/lace_gen.jpg',
  '/images/ankara_gen.jpg',
  '/images/damask_gen.jpg',
  '/images/cashmere_gen.jpg',
  '/images/adire_gen.jpg',
  '/images/senator_gen.jpg',
  '/images/voile_gen.jpg',
  '/images/kampala_gen.jpg',
];

const WHATSAPP = 'https://wa.me/2347015425936?text=Hello%20I%20am%20interested%20in%20your%20fabrics';

/* ── App ─────────────────────────────────────────────────── */
export default function App() {
  const [isMenuOpen,   setIsMenuOpen]   = useState(false);
  const [isScrolled,   setIsScrolled]   = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const heroRef       = useRef(null);
  const aboutRef      = useRef(null);
  const categoriesRef = useRef(null);
  const galleryRef    = useRef(null);
  const ceoRef        = useRef(null);
  const whyUsRef      = useRef(null);
  const contactRef    = useRef(null);

  /* scroll tracking */
  useEffect(() => {
    const sections = [
      { id: 'home',       ref: heroRef },
      { id: 'about',      ref: aboutRef },
      { id: 'categories', ref: categoriesRef },
      { id: 'gallery',    ref: galleryRef },
      { id: 'ceo',        ref: ceoRef },
      { id: 'why-us',     ref: whyUsRef },
      { id: 'contact',    ref: contactRef },
    ];

    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
      for (const s of sections) {
        const el = s.ref.current;
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 100 && bottom >= 100) { setActiveSection(s.id); break; }
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  /* ── Render ──────────────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-near-black text-cream font-body overflow-x-hidden">
      {/* Grain */}
      <div className="grain-overlay" />

      {/* ─── Navigation ──────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-near-black/90 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollTo(heroRef)}
              className="font-display text-2xl sm:text-3xl font-bold text-gold tracking-wide hover:opacity-80 transition-opacity"
            >
              D'fauzy
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                { label: 'Collections', ref: categoriesRef, id: 'categories' },
                { label: 'Lookbook',    ref: galleryRef,    id: 'gallery' },
                { label: 'About',       ref: aboutRef,      id: 'about' },
                { label: 'Contact',     ref: contactRef,    id: 'contact' },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.ref)}
                  className={`text-sm font-medium tracking-wider uppercase underline-animate transition-colors ${
                    activeSection === item.id ? 'text-gold' : 'text-cream/80 hover:text-cream'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-near-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors btn-press flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Order on WhatsApp
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-cream p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-near-black/95 backdrop-blur-md border-t border-cream/10 animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {[
                { label: 'Collections', ref: categoriesRef },
                { label: 'Lookbook',    ref: galleryRef },
                { label: 'About',       ref: aboutRef },
                { label: 'Contact',     ref: contactRef },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.ref)}
                  className="block w-full text-left text-cream/80 hover:text-gold py-2 text-lg font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gold text-near-black px-5 py-3 rounded-full font-semibold mt-4 justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        id="home"
        className="relative h-screen max-h-[700px] sm:max-h-[800px] lg:min-h-screen lg:max-h-none flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero_fabric.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-near-black/70 via-near-black/50 to-near-black/90" />
        </div>

        <div className="relative z-10 text-center px-5 sm:px-8 lg:px-12 max-w-4xl mx-auto pt-16 sm:pt-20">
          {/* Eyebrow */}
          <p
            className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            Wholesale &amp; Retail · Nigeria
          </p>

          <h1
            className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold text-cream mb-4 sm:mb-5 leading-tight animate-fade-in-up"
          >
            D'fauzy <span className="text-gold">Fabrics</span>
          </h1>

          <p
            className="text-sm sm:text-lg text-cream/70 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Premium fabrics for every occasion — Lace, Ankara, Cashmere &amp; more. Shipped worldwide.
          </p>

          <div
            className="flex flex-col xs:flex-row items-center justify-center gap-3 animate-fade-in-up"
            style={{ animationDelay: '0.35s' }}
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full xs:w-auto bg-gold text-near-black px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-gold-light transition-all btn-press flex items-center justify-center gap-2 shadow-gold animate-pulse-glow"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Chat on WhatsApp
            </a>
            <button
              onClick={() => scrollTo(categoriesRef)}
              className="w-full xs:w-auto border border-cream/30 text-cream px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-cream/10 transition-all btn-press flex items-center justify-center gap-2"
            >
              View Collections
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-float">
          <button
            onClick={() => scrollTo(aboutRef)}
            className="text-cream/40 hover:text-gold transition-colors"
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      </section>

      {/* ─── Marquee ticker ───────────────────────────────────── */}
      <div className="bg-gold/10 border-y border-gold/20 py-3 overflow-hidden">
        <div className="marquee-track flex gap-12 items-center whitespace-nowrap">
          {[...Array(3)].map((_, pass) =>
            ['Lace', 'Swiss Voile', 'Ankara', 'Cashmere', 'Damask', 'Senator Materials', 'Adire', 'Kampala', 'Worldwide Shipping', 'Wholesale & Retail'].map((name) => (
              <span key={`${pass}-${name}`} className="flex items-center gap-3 text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block flex-shrink-0" />
                {name}
              </span>
            ))
          )}
        </div>
      </div>

      {/* ─── About ────────────────────────────────────────────── */}
      <section
        ref={aboutRef}
        id="about"
        className="relative py-20 sm:py-28 lg:py-32 bg-near-black"
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">About Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-8">
              Your Trusted Fabric Partner
            </h2>
            <p className="text-lg sm:text-xl text-cream/70 leading-relaxed mb-10">
              Are you looking to start a fabric business or buy for personal use at the cheapest price ever?
              Slide into our DM and let's have a deal. We specialize in wholesale and retail of both male and
              female fabrics, bringing you the finest selection from around the world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-14">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-near-black px-8 py-4 rounded-full text-base font-semibold hover:bg-gold-light transition-all btn-press flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Start a Conversation
              </a>
              <div className="flex items-center gap-2 text-cream/60">
                <Globe className="w-5 h-5 text-gold" />
                <span>We ship worldwide</span>
              </div>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-cream/10 rounded-2xl overflow-hidden border border-cream/10">
              {[
                { value: '500+',  label: 'Happy Clients' },
                { value: '8',     label: 'Fabric Types' },
                { value: '10+',   label: 'Years Trading' },
                { value: '24hrs', label: 'Reply Time' },
              ].map((stat) => (
                <div key={stat.label} className="bg-near-black px-6 py-6 text-center">
                  <p className="font-display text-3xl sm:text-4xl font-bold text-gold mb-1">{stat.value}</p>
                  <p className="text-cream/50 text-xs tracking-widest uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Fabric Categories ─────────────────────────────────── */}
      <section
        ref={categoriesRef}
        id="categories"
        className="relative py-20 sm:py-28 lg:py-32 bg-near-black"
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">Our Collections</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
              Fabric Categories
            </h2>
            <p className="text-cream/60 max-w-2xl mx-auto">
              Discover our curated selection of premium fabrics for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fabricCategories.map((category, index) => (
              <div
                key={category.name}
                className="group relative rounded-3xl overflow-hidden card-hover cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[3/4] img-zoom">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-gold text-xs font-semibold tracking-widest uppercase mb-2 block">Collection</span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-cream mb-1">{category.name}</h3>
                  <p className="text-cream/60 text-sm">{category.description}</p>
                </div>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label={`View ${category.name} collection`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gallery / Lookbook ───────────────────────────────── */}
      <section
        ref={galleryRef}
        id="gallery"
        className="relative py-20 sm:py-28 lg:py-32 bg-near-black"
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">Lookbook</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
              Featured Collections
            </h2>
            <p className="text-cream/60 max-w-2xl mx-auto">
              Browse through our stunning fabric displays
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden img-zoom ${
                  index === 0 || index === 5 ? 'row-span-2' : ''
                }`}
              >
                <img
                  src={src}
                  alt={`Fabric collection ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-near-black/20 hover:bg-transparent transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CEO Section ─────────────────────────────────────── */}
      <section
        ref={ceoRef}
        id="ceo"
        className="relative py-20 sm:py-28 lg:py-32 bg-near-black"
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <div className="relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-luxury">
                  <img
                    src="/images/ceo_new.jpg"
                    alt="Alhaja Folake Fauziat Olaniyan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
              </div>

              {/* Text */}
              <div className="lg:pl-8">
                <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">Meet the CEO</span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
                  Alhaja Folake<br />
                  <span className="text-gold">Fauziat Olaniyan</span>
                </h2>
                <p className="text-cream/60 text-lg mb-6">CEO, Dfauzy Fabrics &amp; More</p>
                <p className="text-cream/70 text-lg leading-relaxed mb-8">
                  I deal in wholesale and retail of both male and female fabrics.
                  With years of experience in the textile industry, I am committed
                  to bringing you the finest fabrics at the most competitive prices.
                  Your satisfaction is my priority.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-gold text-near-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gold-light transition-all btn-press items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Connect on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ───────────────────────────────────── */}
      <section
        ref={whyUsRef}
        id="why-us"
        className="relative py-20 sm:py-28 lg:py-32 bg-near-black"
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">Why Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
              Why Choose D'fauzy Fabrics
            </h2>
            <p className="text-cream/60 max-w-2xl mx-auto">
              We go the extra mile to ensure you get the best fabric experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="bg-cream/5 rounded-3xl p-6 text-center card-hover border border-cream/5"
              >
                <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-lg font-bold text-cream mb-2">{item.title}</h3>
                <p className="text-cream/60 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust Badge Strip ───────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-cream/[0.02] border-y border-cream/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <p className="text-center text-cream/40 text-xs tracking-widest uppercase mb-8">Trusted · Verified · Established</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {[
              { icon: '🏛️', title: 'CAC Registered',       sub: 'Corporate Affairs Commission' },
              { icon: '📦', title: 'Wholesale Licensed',    sub: 'Bulk orders welcome' },
              { icon: '🚚', title: 'Worldwide Shipping',    sub: 'Nigeria & International' },
              { icon: '⭐', title: '10+ Years in Business', sub: 'Est. 2014, Osogbo' },
              { icon: '🔒', title: 'Secure Transactions',   sub: 'Safe & trusted payments' },
              { icon: '✅', title: '100% Authentic Fabrics', sub: 'Quality guaranteed' },
            ].map((badge) => (
              <div
                key={badge.title}
                className="flex items-center gap-3 bg-cream/5 border border-cream/10 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 hover:border-gold/30 hover:bg-gold/5 transition-all"
              >
                <span className="text-2xl leading-none">{badge.icon}</span>
                <div>
                  <p className="text-cream text-xs sm:text-sm font-semibold leading-tight">{badge.title}</p>
                  <p className="text-cream/40 text-[10px] sm:text-xs leading-tight">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 lg:py-32 bg-near-black">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">Testimonials</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-cream/5 rounded-3xl p-8 border border-cream/5 card-hover">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-cream/80 mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-gold font-semibold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-cream font-semibold text-sm">{t.name}</p>
                    <p className="text-cream/50 text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── Fabric Finder Quiz ──────────────────────────────── */}
      <FabricFinderSection whatsapp={WHATSAPP} />

      {/* ─── WhatsApp Order Form ─────────────────────────────── */}
      <OrderFormSection whatsapp={WHATSAPP} />

      {/* ─── Contact ─────────────────────────────────────────── */}
      <section
        ref={contactRef}
        id="contact"
        className="relative py-20 sm:py-28 lg:py-32 bg-cocoa"
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">Get in Touch</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
              Ready to Order?
            </h2>
            <p className="text-cream/70 text-lg mb-10">We ship worldwide. Reply within hours.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-near-black px-8 py-4 rounded-full text-base font-semibold hover:bg-gold-light transition-all btn-press flex items-center gap-3 shadow-gold animate-pulse-glow"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+2347015425936"
                className="border border-cream/30 text-cream px-8 py-4 rounded-full text-base font-medium hover:bg-cream/10 transition-all btn-press flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Request a Call
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <p className="text-cream/80 text-sm text-center">
                  Opposite Bovas Petrol Station,<br />
                  Lameco, Osogbo, Osun State, Nigeria
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <p className="text-cream/80 text-sm">+234 701 542 5936</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <a
                  href="mailto:dfauzyventures@gmail.com"
                  className="text-cream/80 text-sm hover:text-gold transition-colors"
                >
                  dfauzyventures@gmail.com
                </a>
              </div>
            </div>

            {/* Google Maps embed — Lameco, Osogbo */}
            <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden border border-cream/10 shadow-luxury">
              <iframe
                title="D'fauzy Fabrics Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.9!2d4.5498!3d7.7719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1035a1a3b3b3b3b3%3A0x0!2sLameco%2C%20Osogbo%2C%20Osun%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng&q=Lameco,Osogbo,Osun+State,Nigeria"
                width="100%"
                height="320"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.6) brightness(0.85)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Lameco,Osogbo,Osun+State,Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-gold/70 hover:text-gold text-xs tracking-wider transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ──────────────────────────────────────────── */}
      <footer className="relative py-12 bg-near-black border-t border-cream/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-10 mb-10">
              {/* Brand */}
              <div className="md:col-span-2">
                <h3 className="font-display text-3xl font-bold text-gold mb-3">D'fauzy</h3>
                <p className="text-cream/60 mb-4 max-w-md">
                  Premium fabrics for elegance, style, and affordability.
                  Your trusted partner in wholesale and retail fabric business.
                </p>
                <div className="flex items-center gap-2 text-gold">
                  <Globe className="w-5 h-5" />
                  <span className="text-sm font-medium">We ship worldwide</span>
                </div>
              </div>

              {/* Quick links */}
              <div>
                <h4 className="text-cream font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {[
                    { label: 'Collections', ref: categoriesRef },
                    { label: 'Lookbook',    ref: galleryRef },
                    { label: 'About Us',    ref: aboutRef },
                    { label: 'Contact',     ref: contactRef },
                  ].map((item) => (
                    <li key={item.label}>
                      <button
                        onClick={() => scrollTo(item.ref)}
                        className="text-cream/60 hover:text-gold transition-colors text-sm"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div>
                <h4 className="text-cream font-semibold mb-4">Connect With Us</h4>
                <div className="flex gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 text-gold" />
                  </a>
                  <a
                    href="https://instagram.com/dfauzyfabrics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream/20 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-cream" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1acNN17A5s/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream/20 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-cream" />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-cream/5 text-center">
              <p className="text-cream/40 text-sm">
                © {new Date().getFullYear()} D'fauzy Fabrics. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── Floating WhatsApp button ─────────────────────────── */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-luxury hover:shadow-luxury-hover hover:scale-110 transition-all animate-pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-near-black" />
      </a>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FABRIC FINDER QUIZ
═══════════════════════════════════════════════════════════ */
const quizSteps = [
  {
    question: 'What is the occasion?',
    options: ['Wedding / Event', 'Everyday Wear', 'Office / Corporate', 'Gift / Business'],
  },
  {
    question: 'Who is the fabric for?',
    options: ['Women', 'Men', 'Both / Unisex', 'Not sure yet'],
  },
  {
    question: 'What feel do you prefer?',
    options: ['Light & Airy', 'Rich & Structured', 'Soft & Warm', 'Bold & Colourful'],
  },
];

const quizResults = {
  'Wedding / Event-Women-Light & Airy':       { fabric: 'Swiss Voile', desc: 'Perfect for bridal and event attire — crisp, elegant, and effortlessly graceful.' },
  'Wedding / Event-Women-Rich & Structured':  { fabric: 'Lace',        desc: 'Classic and romantic. Our lace is the go-to for weddings and formal occasions.' },
  'Wedding / Event-Men-Rich & Structured':    { fabric: 'Senator Materials', desc: 'Tailored and commanding — the fabric of choice for men at events.' },
  'Wedding / Event-Men-Bold & Colourful':     { fabric: 'Ankara',      desc: 'Make a statement at any event with vivid Ankara prints.' },
  'Everyday Wear-Women-Light & Airy':         { fabric: 'Swiss Voile', desc: 'Breathable and beautiful for daily wear in warm climates.' },
  'Everyday Wear-Women-Bold & Colourful':     { fabric: 'Ankara',      desc: 'Ankara brings everyday life to life with colour and culture.' },
  'Everyday Wear-Men-Rich & Structured':      { fabric: 'Damask',      desc: 'Structured and refined for everyday elegance.' },
  'Office / Corporate-Men-Rich & Structured': { fabric: 'Senator Materials', desc: 'Sharp and professional — commands respect in any boardroom.' },
  'Office / Corporate-Women-Light & Airy':    { fabric: 'Swiss Voile', desc: 'Professional, polished, and comfortable through long days.' },
  'Gift / Business-Both / Unisex-Bold & Colourful': { fabric: 'Ankara', desc: 'A vibrant, thoughtful gift that celebrates heritage and style.' },
};

function getResult(answers) {
  const key = answers.join('-');
  if (quizResults[key]) return quizResults[key];
  // Fallback logic by feel
  const feel = answers[2];
  if (feel === 'Soft & Warm')      return { fabric: 'Cashmere',  desc: 'Cloud-soft and luxurious — nothing beats cashmere for warmth and comfort.' };
  if (feel === 'Bold & Colourful') return { fabric: 'Adire',     desc: 'Hand-influenced patterns with deep cultural roots — bold and unforgettable.' };
  if (feel === 'Rich & Structured') return { fabric: 'Damask',   desc: 'Woven texture and formal luxury — ideal for any structured look.' };
  return { fabric: 'Lace', desc: 'A timeless classic that works for almost any occasion.' };
}

function FabricFinderSection({ whatsapp }) {
  const [step, setStep]       = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult]   = useState(null);

  const choose = (option) => {
    const next = [...answers, option];
    if (step < quizSteps.length - 1) {
      setAnswers(next);
      setStep(step + 1);
    } else {
      setAnswers(next);
      setResult(getResult(next));
    }
  };

  const reset = () => { setStep(0); setAnswers([]); setResult(null); };

  const waLink = result
    ? `${whatsapp.split('?')[0]}?text=Hello%20I%20am%20interested%20in%20${encodeURIComponent(result.fabric)}%20fabric`
    : whatsapp;

  return (
    <section className="relative py-20 sm:py-28 bg-near-black">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">Interactive</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-3">
            Find Your Perfect Fabric
          </h2>
          <p className="text-cream/60 mb-10">Answer 3 quick questions and we'll match you to the right material.</p>

          {!result ? (
            <div className="bg-cream/5 border border-cream/10 rounded-3xl p-6 sm:p-10">
              {/* Progress dots */}
              <div className="flex justify-center gap-2 mb-8">
                {quizSteps.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i < step ? 'bg-gold' : i === step ? 'bg-gold scale-125' : 'bg-cream/20'
                    }`}
                  />
                ))}
              </div>

              <p className="font-display text-xl sm:text-2xl text-cream mb-6">
                {quizSteps[step].question}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quizSteps[step].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => choose(opt)}
                    className="border border-cream/20 text-cream/80 hover:border-gold hover:text-gold hover:bg-gold/5 px-5 py-4 rounded-2xl text-sm font-medium transition-all text-left btn-press"
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button onClick={reset} className="mt-6 text-cream/40 hover:text-cream/70 text-xs transition-colors">
                  ← Start over
                </button>
              )}
            </div>
          ) : (
            <div className="bg-cream/5 border border-gold/30 rounded-3xl p-6 sm:p-10 animate-fade-in">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-5">
                <Star className="w-8 h-8 text-gold fill-gold" />
              </div>
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">Your Match</p>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-4">{result.fabric}</h3>
              <p className="text-cream/70 mb-8 max-w-md mx-auto">{result.desc}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-near-black px-7 py-3 rounded-full text-sm font-semibold hover:bg-gold-light transition-all btn-press flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Order {result.fabric}
                </a>
                <button
                  onClick={reset}
                  className="border border-cream/30 text-cream/70 px-7 py-3 rounded-full text-sm font-medium hover:bg-cream/10 transition-all btn-press"
                >
                  Try again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   WHATSAPP ORDER FORM
═══════════════════════════════════════════════════════════ */
function OrderFormSection({ whatsapp }) {
  const [form, setForm] = useState({ name: '', fabric: '', qty: '', notes: '' });
  const [sent, setSent]   = useState(false);

  const fabricOptions = [
    'Lace', 'Swiss Voile', 'Ankara', 'Cashmere',
    'Damask', 'Senator Materials', 'Adire', 'Kampala', 'Other',
  ];

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = () => {
    const msg = [
      `Hello D'fauzy Fabrics! 👋`,
      `Name: ${form.name}`,
      `Fabric: ${form.fabric}`,
      form.qty    ? `Quantity/Yards: ${form.qty}`  : '',
      form.notes  ? `Notes: ${form.notes}`          : '',
      `\nPlease let me know availability and pricing. Thank you!`,
    ].filter(Boolean).join('\n');

    window.open(`${whatsapp.split('?')[0]}?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const valid = form.name.trim() && form.fabric;

  return (
    <section className="relative py-20 sm:py-28 bg-cream/[0.03]">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">Quick Order</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-3">
              Place an Inquiry
            </h2>
            <p className="text-cream/60">Fill the form and we'll open WhatsApp with your details pre-filled.</p>
          </div>

          <div className="bg-cream/5 border border-cream/10 rounded-3xl p-6 sm:p-8 space-y-4">
            <div>
              <label className="block text-cream/60 text-xs tracking-widest uppercase mb-1.5">Your Name *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={change}
                placeholder="e.g. Mrs. Adaeze"
                className="w-full bg-near-black border border-cream/15 hover:border-cream/30 focus:border-gold focus:outline-none rounded-xl px-4 py-3 text-cream placeholder:text-cream/30 text-sm transition-colors"
              />
            </div>

            <div>
              <label className="block text-cream/60 text-xs tracking-widest uppercase mb-1.5">Fabric Type *</label>
              <select
                name="fabric"
                value={form.fabric}
                onChange={change}
                className="w-full bg-near-black border border-cream/15 hover:border-cream/30 focus:border-gold focus:outline-none rounded-xl px-4 py-3 text-cream text-sm transition-colors appearance-none"
              >
                <option value="">Select a fabric…</option>
                {fabricOptions.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-cream/60 text-xs tracking-widest uppercase mb-1.5">Quantity / Yards</label>
              <input
                type="text"
                name="qty"
                value={form.qty}
                onChange={change}
                placeholder="e.g. 6 yards, 2 pieces"
                className="w-full bg-near-black border border-cream/15 hover:border-cream/30 focus:border-gold focus:outline-none rounded-xl px-4 py-3 text-cream placeholder:text-cream/30 text-sm transition-colors"
              />
            </div>

            <div>
              <label className="block text-cream/60 text-xs tracking-widest uppercase mb-1.5">Additional Notes</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={change}
                rows={3}
                placeholder="Colour preference, occasion, budget…"
                className="w-full bg-near-black border border-cream/15 hover:border-cream/30 focus:border-gold focus:outline-none rounded-xl px-4 py-3 text-cream placeholder:text-cream/30 text-sm transition-colors resize-none"
              />
            </div>

            <button
              onClick={submit}
              disabled={!valid}
              className="w-full bg-gold text-near-black py-4 rounded-xl text-sm font-semibold hover:bg-gold-light transition-all btn-press flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <MessageCircle className="w-4 h-4" />
              {sent ? 'Opening WhatsApp…' : 'Send Inquiry on WhatsApp'}
            </button>

            <p className="text-center text-cream/30 text-xs">
              This opens WhatsApp with your details pre-filled — no data is stored.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
