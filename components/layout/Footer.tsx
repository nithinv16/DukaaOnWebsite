import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, ArrowRight } from 'lucide-react';

const navigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  stakeholders: [
    { name: 'For Retailers', href: '/#retailers' },
    { name: 'For Wholesalers', href: '/#wholesalers' },
    { name: 'For Manufacturers', href: '/#manufacturers' },
    { name: 'For Investors', href: '/investors' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
  ],
};

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Brand & Contact */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
                DukaaOn
              </span>
            </Link>
            <p className="text-sm leading-6 text-neutral-400 max-w-xs">
              Empowering rural retail with technology, credit, and efficient supply chains.
            </p>
            <div className="flex items-center gap-3 text-sm text-neutral-400">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:support@dukaaon.in" className="hover:text-white transition-colors">support@dukaaon.in</a>
            </div>
            <div className="flex items-center gap-3 text-sm text-neutral-400">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:+918089668552" className="hover:text-white transition-colors">+91 8089668552</a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
              <ul className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm hover:text-primary transition-colors flex items-center group">
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Stakeholders</h3>
              <ul className="mt-6 space-y-4">
                {navigation.stakeholders.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm hover:text-primary transition-colors flex items-center group">
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
              <ul className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm hover:text-primary transition-colors flex items-center group">
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* App Download & Social */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Get the App</h3>
              <div className="mt-6">
                <a
                  href="https://play.google.com/store/apps/details?id=com.sixn8.dukaaon&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-neutral-800 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-700 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
                >
                  <svg className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <span className="text-left">
                    <span className="text-[10px] uppercase leading-none block">Get it on</span>
                    <span className="text-base font-bold leading-none mt-1 block">Google Play</span>
                  </span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Follow Us</h3>
              <div className="mt-6 flex space-x-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="p-2 rounded-full bg-neutral-800 text-neutral-400 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                    aria-label={item.name}
                  >
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} DukaaOn. All rights reserved.
            <span className="block mt-1 text-xs text-neutral-600">A unit of SIXN8 Technologies Private Limited</span>
          </p>
          <p className="text-sm text-neutral-600 flex items-center">
            Made with <span className="text-red-500 mx-1">❤</span> for Rural India
          </p>
        </div>
      </div>
    </footer>
  );
}
