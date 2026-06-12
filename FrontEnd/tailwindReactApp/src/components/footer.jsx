import footerLogo from "../assets/images/circleLOGO.png";

function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-10">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-sm text-gray-600 mb-6">
          --- Your favorite food delivery platform connecting customers with
          restaurants and riders. ---
        </h3>

        <div className="flex justify-center mb-6">
          <img src={footerLogo} alt="Cravings" className="w-28" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t pt-4">
          <p className="text-sm text-gray-600">
            © 2026 Cravings. All rights reserved.
          </p>

          <div className="flex gap-4 text-sm">
            <a href="#" className="text-(--color-primary) hover:underline">
              Privacy Policy
            </a>

            <a href="#" className="text-(--color-primary) hover:underline">
              Terms of Service
            </a>

            <a href="#" className="text-(--color-primary) hover:underline">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
