import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [state,setState]=useState<boolean>(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
   
      setFormData({ name: "", email: "", subject: "", message: "" });
      setState(true)
    } catch (err) {
      alert("Failed to send message.");
      setState(false)
    }
  };

  return (
    <section className="container mx-auto px-6 py-16 animate-fade-in-up">
      <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-4">
        <input name="name" className="border-[1.5px] border-gray-500 focus:outline-blue-800 p-1 rounded " value={formData.name} onChange={handleChange} placeholder="Enter Your Name" required />
        <input type="email" className="border-[1.5px] border-gray-500 focus:outline-blue-800 p-1 rounded "name="email" value={formData.email} onChange={handleChange} placeholder="Enter your Email"  required />
        <input name="subject" className="border-[1.5px] border-gray-500 focus:outline-blue-800 p-1 rounded "value={formData.subject} onChange={handleChange} placeholder="Enter Subject"  required />
        <textarea name="message"className="border-[1.5px] border-gray-500 focus:outline-blue-800 p-1 rounded " value={formData.message} onChange={handleChange} placeholder="Enter Message"  required />
        <button type="submit" className={`border-[1.5px] border-gray-500 focus:outline-blue-800 p-1 rounded w-1/2 mx-auto cursor-pointer  font-bold ${state ? "bg-blue-500 text-white":"hover:bg-gray-300"}`}>{state ?"sent✅" : "send message"}</button>
      </form>
      <div className="mt-10 text-center text-gray-700">
        <p><strong>Phone:</strong> +91 9493994842</p>
        <p><strong>Email:</strong> info@todaysdental.com</p>
        <p><strong>Address:</strong>Hitech city,Hyderabad,India</p>
        <iframe className="w-full h-64 mt-6 rounded shadow-md" src="https://maps.google.com/maps?q=hitechcity&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy"></iframe>
      </div>
    </section>
  );
}