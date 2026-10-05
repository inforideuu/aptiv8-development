import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services Offered', href: '/services' },
    { name: 'AI Products Suite', href: '/products' },
    { 
      name: 'AI Powered Smart Integrated Facilities Management', 
      href: '/a8-cmms',
      subPages: [
        { title: 'A8 CMMS', href: '/a8-cmms', desc: 'Computerized Maintenance Management System' },
        { title: 'A8 IOT', href: '/a8-iot', desc: 'IoT & Condition-Based Monitoring Platform' }
      ]
    },
    { name: 'Co-Developed Projects', href: '/projects' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Industries We Serve', href: '/industries' },
    { name: 'Partners Ecosystem', href: '/partners' },
    { name: 'Resources & Insights', href: '/resources' },
    { name: 'Book Consultation', href: '/contact' },
    { name: 'Admin Console', href: '/admin' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-bg-secondary/90 backdrop-blur-md border-b border-border-color shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center cursor-pointer">
              <img 
                src="/logo.png" 
                alt="Aptiv8 IT Solutions" 
                className="h-20 w-auto object-contain brightness-100 dark:brightness-110 transition-transform hover:scale-[1.02]" 
              />
            </Link>

            {/* Menu trigger button & Theme Toggle */}
            <div className="flex items-center gap-4">
              {/* Ask AI Button */}
              <Link
                to="/contact"
                className="group p-[1px] rounded-full bg-border-color hover:bg-gradient-to-r hover:from-accent hover:to-[#ff3b46] transition-all duration-300 cursor-pointer block"
              >
                {/* <div className="px-4 py-2 rounded-full bg-bg-secondary text-text-primary group-hover:text-accent transition-colors duration-300 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider font-display">
                  <span>Ask AI</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div> */}
              </Link>

              <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white hover:bg-accent-hover font-display text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer z-50"
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
              >
                <span className="hidden sm:inline">{isOpen ? 'Close' : 'Menu'}</span>
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modern minimal slide-out navigation right sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs"
              onClick={() => setIsOpen(false)}
            />

            {/* Right Sidebar Drawer with theme-aware background styling */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[400px] max-w-full bg-bg-secondary/98 border-l border-border-color shadow-2xl dark:bg-gradient-to-b dark:from-[#0a0d14] dark:via-[#06080d] dark:to-black dark:border-accent/35 dark:shadow-[0_0_50px_rgba(227,6,19,0.15)] p-6 sm:p-8 pt-28 pb-8 flex flex-col justify-between overflow-y-auto"
            >
              {/* Tech grid overlay inside sidebar */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(227,6,19,0.03),transparent_50%)] pointer-events-none" />

              <div className="w-full relative z-10">
                <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block mb-6 font-display">
                  Corporate Navigation Directory
                </span>

                {/* Vertical List of Large Premium Links with staggered animation */}
                <motion.div 
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.08
                      }
                    }
                  }}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col gap-1.5"
                >
                  {navLinks.map((link) => {
                    const hasSubPages = Boolean(link.subPages);
                    return (
                      <motion.div
                        key={link.name}
                        variants={{
                          hidden: { opacity: 0, x: 25 },
                          show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } }
                        }}
                        className="relative group/item"
                        onMouseEnter={() => hasSubPages && setShowSubMenu(true)}
                        onMouseLeave={() => hasSubPages && setShowSubMenu(false)}
                      >
                        <div className="flex flex-col">
                          {hasSubPages ? (
                            <button
                              onClick={() => setShowSubMenu(!showSubMenu)}
                              className="group flex items-start justify-between py-2.5 border-b border-border-color/30 dark:border-slate-800/40 hover:border-accent/40 transition-colors cursor-pointer text-left w-full"
                            >
                              <span className={`text-base sm:text-lg font-bold font-display group-hover:text-accent transition-colors leading-snug pr-2 ${
                                location.pathname.startsWith('/a8-') 
                                  ? 'bg-clip-text text-transparent bg-gradient-to-r from-accent via-[#ff6a75] to-amber-500 font-extrabold drop-shadow-sm' 
                                  : 'text-text-primary dark:text-slate-100'
                              }`}>
                                {link.name}
                              </span>
                              <ChevronDown className={`w-4 h-4 text-accent transition-transform duration-300 shrink-0 mt-1 ${showSubMenu ? 'rotate-180' : ''}`} />
                            </button>
                          ) : (
                            <Link
                              to={link.href}
                              className="group flex items-start justify-between py-2.5 border-b border-border-color/30 dark:border-slate-800/40 hover:border-accent/40 transition-colors cursor-pointer"
                            >
                              <span className={`text-base sm:text-lg font-bold font-display group-hover:text-accent transition-colors leading-snug pr-2 ${
                                location.pathname === link.href 
                                  ? 'bg-clip-text text-transparent bg-gradient-to-r from-accent via-[#ff6a75] to-amber-500 font-extrabold drop-shadow-sm' 
                                  : 'text-text-primary dark:text-slate-100'
                              }`}>
                                {link.name}
                              </span>
                              <span className="text-xs font-semibold text-accent/0 group-hover:text-accent/100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all font-display shrink-0 mt-1">
                                Explore →
                              </span>
                            </Link>
                          )}

                          {/* Hover / Click Interactive Small Window Popover for SubPages */}
                          <AnimatePresence>
                            {hasSubPages && showSubMenu && (
                              <motion.div
                                initial={{ opacity: 0, y: -8, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: 'auto' }}
                                exit={{ opacity: 0, y: -8, height: 0 }}
                                transition={{ duration: 0.25 }}
                                className="mt-2 mb-2 p-3 bg-bg-primary dark:bg-slate-900 border border-border-color dark:border-accent/30 rounded-2xl shadow-xl backdrop-blur-md overflow-hidden"
                              >
                                <span className="text-[10px] uppercase tracking-wider text-accent font-mono font-bold block mb-2 px-1">
                                  Select Module (2)
                                </span>
                                <div className="grid grid-cols-1 gap-2">
                                  {link.subPages.map((sub) => (
                                    <Link
                                      key={sub.title}
                                      to={sub.href}
                                      onClick={() => {
                                        setIsOpen(false);
                                        setShowSubMenu(false);
                                      }}
                                      className="p-2.5 rounded-xl bg-bg-secondary dark:bg-slate-800/80 hover:bg-accent/15 dark:hover:bg-accent/20 border border-border-color dark:border-slate-700/50 hover:border-accent transition-all group/sub flex items-center justify-between"
                                    >
                                      <div>
                                        <div className="text-xs font-bold text-text-primary dark:text-white group-hover/sub:text-accent font-display flex items-center gap-1.5">
                                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                          {sub.title}
                                        </div>
                                        <span className="text-[10px] text-text-secondary dark:text-slate-400 font-sans block mt-0.5">
                                          {sub.desc}
                                        </span>
                                      </div>
                                      <span className="text-xs text-accent font-bold opacity-0 group-hover/sub:opacity-100 transition-opacity">
                                        →
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Sidebar Footer */}
              <div className="w-full border-t border-border-color/60 pt-6 mt-8 flex flex-col gap-3 text-[11px] text-text-secondary relative z-10">
                <p>© {new Date().getFullYear()} Aptiv8 IT Solutions. All rights reserved.</p>
                <div className="flex flex-col gap-1">
                  <span>Singapore Hub: 8 Burn Rd, Trivex</span>
                  <a href="mailto:Admin@Aptiveight.com" className="hover:underline text-accent">Admin@Aptiveight.com</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
