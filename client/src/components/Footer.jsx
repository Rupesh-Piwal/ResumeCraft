import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-indigo-700 py-6 absolute bottom-0 w-full">
      <div className="container mx-auto text-center text-white">
        <p>&copy; {currentYear} Resume Craft. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
