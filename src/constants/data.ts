import { FaCar, FaGift, FaMoneyBill } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

export const headerNavItems = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "About", href: "/about" },
    { id: 3, title: "Shop", href: "/shop" },
    { id: 4, title: "HotDeal", href: "/hot-deal" },
    { id: 5, title: "Blogs", href: "/blogs" },
    { id: 6, title: "Contact", href: "/contact" },
];

export const singUpBenefits = [
    {
        icon: FaGift,
        title: "Welcome Bonus",
        descreption: "Get 10% off your first order when you sign up",
    },
    {
        icon: FaBagShopping,
        title: "Exclusive Deals",
        descreption: "Access member-only discounts and early sales",
    },
    {
        icon: FaCar,
        title: "Free Shipping",
        descreption: "Enjoy free shipping on orders over $50",
    },
    {
        icon: FaMoneyBill,
        title: "Secure Payments",
        descreption: "Multiple payment options with bank-level security",
    },
];