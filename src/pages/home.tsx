import { Link } from "react-router-dom";
import FAQ from "../components/faq";
import Testimonials from "../components/testimonals"; 

export default function Home() {
  return (
    <>
      <section className="bg-[url('/image.png')] bg-cover bg-center text-white py-20 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700">Bright Smiles, Brighter Futures</h2>
          <p className="text-lg mb-12 text-shadow-amber-300">Professional dental care tailored to your needs.</p>
          <Link to="/contact" className="bg-blue-600 px-6 py-3 rounded text-white text-lg hover:bg-blue-700">
            Book Appointment
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 text-center">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Services</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From routine cleanings to complex surgeries, we cover all aspects of dental care with compassion and precision.
        </p>
      </section>

      <Testimonials /> {/* ✅ Add this line */}

      <FAQ />
    </>
  );
}
