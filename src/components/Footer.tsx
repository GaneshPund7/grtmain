const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h4 className="normal-text my-3">About Us</h4>
            <p className="text-black dark:text-gray-400 text-sm">
              We provide secure and efficient staking solutions for GRT. Earn
              rewards and grow your portfolio with us.
            </p>
          </div>

          <div>
            <h4 className="normal-text my-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-black dark:text-gray-400 hover:text-green-400 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black dark:text-gray-400 hover:text-green-400 transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black dark:text-gray-400 hover:text-green-400 transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="normal-text my-3">Contact</h4>
            <p className="text-black dark:text-gray-400 text-sm">
              Email:{" "}
              <a
                href="mailto:info@grtstaking.com"
                className="text-green-400 hover:underline"
              >
                info@grtstaking.com
              </a>
            </p>
            <p className="text-black dark:text-gray-400 text-sm">
              Phone: +1-800-123-456
            </p>
            <div className="mt-3 flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="text-black dark:text-gray-400 hover:text-green-400 transition"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="#"
                className="text-black dark:text-gray-400 hover:text-green-400 transition"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="text-black dark:text-gray-400 hover:text-green-400 transition"
                aria-label="LinkedIn"
              >
                🔗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GRT Staking Platform. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
