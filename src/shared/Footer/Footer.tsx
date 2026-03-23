import { FaClock, FaFacebook, FaGithub, FaLinkedin, FaMailBulk, FaMap, FaPhone, FaSlack, FaYoutube } from "react-icons/fa";

const Footer = () => {
  interface ContactItem {
    icon: React.ReactNode;
    title: string;
    content: string;
  }
  const contactDetails: ContactItem[] = [
    {
      icon: <FaMap className="w-6 h-6 text-slate-600" />,
      title: "Visit Us",
      content: "123 Shopping Street, Commerce District, New York, NY 10001, USA",
    },
    {
      icon: <FaPhone className="w-6 h-6 text-slate-600" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
    },
    {
      icon: <FaClock className="w-6 h-6 text-slate-600" />,
      title: "Working Hours",
      content: "Monday - Friday: 9AM - 6PM",
    },
    {
      icon: <FaMailBulk className="w-6 h-6 text-slate-600" />,
      title: "Email Us",
      content: "support@shopcart.com",
    },
  ];



  const quickLinks = ["About us", "Contact us", "Terms & Conditions", "Privacy Policy", "FAQs", "Help"];
  const categories = ["Mobiles", "Appliances", "Smartphones", "Air Conditioners", "Washing Machine", "Kitchen Appliances", "Gadget Accessories"];
  const socialIcons = [
    { icon: <FaYoutube size={20} />, link: "#" },
    { icon: <FaGithub size={20} />, link: "#" },
    { icon: <FaLinkedin size={20} />, link: "#" },
    { icon: <FaFacebook size={20} />, link: "#" },
    { icon: <FaSlack size={20} />, link: "#" },
  ];
  return (
    <footer>
      {/*--------Contact----Info---------*/}
      <section className="py-12 border-t border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactDetails.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                {/* Icon Container */}
                <div className="mt-1">
                  {item.icon}
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-[200px]">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*--------Footer----Info---------*/}
      <div className="bg-white pt-16 pb-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Column 1: Brand & About */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="text-[#003d29] text-2xl">🛒</div>
                <h2 className="text-2xl font-medium tracking-tight text-[#003d29]">
                  NexCart<span className="text-orange-400">:</span>
                </h2>
              </div>
              <p className="text-gray-500 leading-relaxed max-w-xs">
                Discover amazing products at NexCart, your trusted online shopping destination for quality items and exceptional customer service.
              </p>
              <div className="flex gap-3">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Categories */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Categories</h3>
              <ul className="space-y-4">
                {categories.map((cat) => (
                  <li key={cat}>
                    <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">{cat}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Newsletter</h3>
              <p className="text-gray-500 mb-6">
                Subscribe to our newsletter to receive updates and exclusive offers.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                <button className="w-full bg-[#0f172a] text-white font-semibold py-3 rounded-lg hover:bg-black transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500">
              © 2026 <span className="font-bold text-gray-900">SHPOPCART</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer