import logo from "../assets/logo2.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-2 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-16" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/abhishek-vashisth-90a4771b1" 
          className="hover:text-purple-500 transform hover:scale-110 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/ABHISHEK-VASHISTH" 
          className="hover:text-purple-500 transform hover:scale-110 transition duration-300"
        >
          <FaGithub />
        </a>
        <a 
          href="https://x.com/Abhi__vashisth" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-purple-500 transform hover:scale-110 transition duration-300"
        >
          <FaSquareXTwitter />
        </a>
        <a 
          href="https://www.instagram.com/Abhi_vashisth" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-purple-500 transform hover:scale-110 transition duration-300"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;