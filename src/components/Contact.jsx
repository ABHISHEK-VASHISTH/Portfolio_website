import { useState } from "react";
import {motion} from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xeojgodo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-4 px-4">
      <motion.h2 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity: 0, y:-50}}
      transition={{duration: 1}}
      className="my-20 text-center text-4xl">
        Get-
        <span className="bg-gradient-to-r from-purple-900 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
          In
        </span>
        -Touch
      </motion.h2>

      <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto w-full">
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 1 }}
        className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium text-white">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full bg-black text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </motion.div>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
        className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full bg-black text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </motion.div>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 1 }}
        className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium text-white">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full bg-black text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="4"
            required
          />
        </motion.div>
        <motion.button
         whileInView={{ opacity: 1, scale: 1 }}
         initial={{ opacity: 0, scale: 0.9 }}
         transition={{ duration: 1 }}
          type="submit"
          className="w-full bg-gradient-to-r from-purple-900 to-purple-500 text-white py-2 px-4 rounded-lg"
        >
          Send Message
        </motion.button>
        {status && <p className="mt-4 text-center text-white">{status}</p>}
      </form>
    </div>
  );
}

export default Contact;
