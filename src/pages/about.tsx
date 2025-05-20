export default function About() {
  return (
    <section className="container mx-auto px-6 py-16 animate-fade-in-up">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">About Todays Dental</h2>
      <p className="text-gray-800 mb-6 md:text-lg ">We are a modern dental clinic with a legacy of over 20 years in delivering quality care. Our state-of-the-art facilities and expert team ensure the best possible experience for our patients.</p>
      <div className="grid gap-6 md:grid-cols-2 mt-12">
        <div>
          <h3 className="text-xl md:text-2xl  font-semibold mb-4">Our Mission</h3>
          <img className="place-self-center"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkvOlILYOiYTJztS9BDIarnFPflFGSJQyWkg&s" alt="smile image"/>
          <p className="text-gray-800 mt-4">To help you smile confidently through gentle and effective dental solutions.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 md:text-2xl">Meet Our Team</h3>
          <ul className="text-gray-600 list-disc list-inside">
<li>Dr. Prashant Verma – Cosmetic Dentist</li>
<li>Dr. Mrinalini – Pediatric Dentist</li>
<li>Dr. Rakesh Sharma – Director & Chief Dental Surgeon</li>
<li>Dr. Anjali Mehra – Orthodontist</li>
<li>Dr. Sameer Kulkarni – Endodontist</li>
<li>Dr. Neha Agarwal – Periodontist</li>
<li>Dr. Vikram Desai – Oral & Maxillofacial Surgeon</li>
<li>Dr. Swati Bansal – Prosthodontist</li>
<li>Dr. Rahul Tiwari – Implantologist</li>
<li>Ms. Nandini Rao – Hospital Operations Manager</li>

          </ul>
        </div>
      </div>
    </section>
  );
}