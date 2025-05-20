// src/components/Testimonials.tsx
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Prakash",
      feedback:
        "The team at Todays Dental made me feel so comfortable. I actually look forward to my visits!",
    },
    {
      id: 2,
      name: "nilesh",
      feedback:
        "Exceptional service and friendly staff. My smile has never looked better!",
    },
    {
      id: 3,
      name: "vaishnavi",
      feedback:
        "Clean, modern clinic with top-notch dentists. Highly recommend!",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">What Our Patients Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map(({ id, name, feedback }) => (
            <div
              key={id}
              className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-600"
            >
              <p className="text-gray-700 italic mb-4">"{feedback}"</p>
              <h4 className="text-blue-600 font-semibold">{name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
