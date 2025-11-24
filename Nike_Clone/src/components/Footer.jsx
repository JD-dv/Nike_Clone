
const Footer = () => {
  return (
    <footer className=" w-full h-110 bg-neutral-300 p-20 max-sm:full">
      <div>
        <p className="text-4xl mb-12">Nike</p>
        <p className="mb-10 w-full">
         Nike inspires athletes worldwide through innovation and passion for sport. 
         Their gear is built to handle intense 
         performance and daily wear. 
         With iconic designs and trusted quality, 
         Nike remains a global leader. Lace up and experience the difference.
        </p>
        <div className="flex gap-3 mb-4">
          <a href="https://x.com/nikestore?lang=en">
            <img alt="X link" className="h-12 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/nike/?hl=en">
            <img
  
              alt="Instagram link"
              className="h-12 cursor-pointer"
            />
          </a>
          <a href="https://web.facebook.com/nike/?_rdc=1&_rdr#">
            <img

              alt="Facebook link"
              className="h-12 cursor-pointer"
            />
          </a>
        </div>
      </div>
      <div>
        <p>&copy; 2025 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;