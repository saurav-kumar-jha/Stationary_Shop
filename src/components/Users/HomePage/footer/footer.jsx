import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">MK Stationery</h2>
          <p className="text-zinc-400 text-sm">
            Your one-stop solution for all school, office, and gifting needs. We offer stationery, print services, snacks, gift packing & more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-zinc-300 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Shop</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2 text-zinc-300 text-sm">
            <li>Print & Photocopy</li>
            <li>Gift Wrapping</li>
            <li>Stationery Supplies</li>
            <li>Home Delivery</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm text-zinc-300 mb-2">📍 Gaya, Bihar – 823001</p>
          <p className="text-sm text-zinc-300 mb-2">📞 +91-9876543210</p>
          <p className="text-sm text-zinc-300 mb-4">✉️ mkstationery@gmail.com</p>

          <div className="flex space-x-4 text-zinc-400 text-xl">
            <a href="#"><FaFacebook className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaLinkedin className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-700 mt-10 pt-5 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} MK Stationery. All rights reserved.
      </div>
    </footer>
  );
}
