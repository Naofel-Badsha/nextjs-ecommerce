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
      

    </footer>
  )
}

export default Footer