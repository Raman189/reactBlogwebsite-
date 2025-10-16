import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#f7f4ed] text-[rgba(0, 0, 0, 0.8)] mt-10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        
        {/* About Section */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">OpenDesk</h2>
          <p className="text-sm">
            Sharing stories, knowledge, and insights on programming, technology, and personal growth.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="flex flex-col gap-1 text-sm">
            <li><a href="/" className="hover:underline">Our Story</a></li>
            <li><a href="/write" className="hover:underline">Write</a></li>
            <li><a href="/Signin" className="hover:underline">Signin</a></li>
            <li><a href="/Signup" className="hover:underline">Get Started</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="text-sm">Email: OpenDesk@example.com</p>
          <p className="text-sm">Phone: +91 1234567890</p>
          <div className="flex mt-3 space-x-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaFacebookF size={18} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter size={18} />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram size={18} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm">
        &copy; {new Date().getFullYear()} OpenDesk. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;


