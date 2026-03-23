import { FaClock, FaMailBulk, FaMap, FaPhone } from "react-icons/fa";

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
  return (
    <footer>
      {/*--------Contact----Info---------*/}
    </footer>
  )
}

export default Footer