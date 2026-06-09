import footerLogo from "../assets/circleLOGO.png";

function Footer() {
  return (
    <footer>
      <div>
        <h3 className="text-center p-4 small">
          --- Your favorite food delivery platform connecting customers with
          restaurants and riders. ---
        </h3>

        <div className="text-center mb-3">
          <img src={footerLogo} alt="Cravings" width="120" />
        </div>

        <div className="footerin flex justify-between">
          <p>© 2026 Cravings. All rights reserved.</p>

          <div className="flex gap-3">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
