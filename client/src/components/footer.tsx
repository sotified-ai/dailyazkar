import { Link } from "wouter";

export function Footer() {
  const quickLinks = [
    { name: "Morning Azkar", href: "/morning-azkar" },
    { name: "Evening Azkar", href: "/evening-azkar" },
    { name: "Holy Quran", href: "/quran" },
    { name: "Dua after Salah", href: "/dua-after-salah" },
    { name: "Rabbana Duas", href: "/rabbana-duas" },
    { name: "Ruqiya", href: "/ruqiya" }
  ];

  const resources = [
    { name: "Resources", href: "/resources" },
    { name: "About Islam", href: "/about-islam" },
    { name: "Prayer Times", href: "/prayer-times" },
    { name: "Islamic Calendar", href: "/islamic-calendar" },
    { name: "Community", href: "/community" },
    { name: "Donate", href: "/donate" }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-youtube", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-full flex items-center justify-center">
                <i className="fas fa-moon text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold gradient-text">Daily Azkar</h3>
                <p className="text-gray-400 text-sm">Islamic Remembrance & Guidance</p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted companion for authentic Islamic daily remembrance, Quranic verses, and spiritual guidance. 
              Connect with Allah through beautiful Azkar and duas.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-gray-300">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <a
                    href={resource.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Daily Azkar. All rights reserved. Made with ❤️ for the Muslim Ummah.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="/donate" className="hover:text-emerald-400 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
