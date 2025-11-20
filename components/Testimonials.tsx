import React from 'react';

const testimonials = [
  {
    quote: "Joining Velocity Fitness was the best decision I've made for my health. The trainers are incredible, and the community is so supportive!",
    author: "Sarah J.",
    title: "Long-time Member",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    quote: "I've seen amazing results in just a few months. The facilities are top-notch, and the personalized workout plans are a game-changer.",
    author: "Michael P.",
    title: "Fitness Enthusiast",
    avatar: "https://randomuser.me/api/portraits/men/70.jpg"
  },
  {
    quote: "Velocity Fitness offers a welcoming environment for all fitness levels. The classes are fun and challenging, keeping me motivated every day.",
    author: "Emily R.",
    title: "New Member",
    avatar: "https://randomuser.me/api/portraits/women/72.jpg"
  },
  {
    quote: "The advanced equipment and knowledgeable staff make Velocity Fitness stand out. It's truly a premium fitness experience.",
    author: "David L.",
    title: "Dedicated Athlete",
    avatar: "https://randomuser.me/api/portraits/men/69.jpg"
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            What Our Members Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Hear from the incredible individuals who are thriving with Velocity Fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col justify-between transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center mt-auto">
                <img
                  className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-indigo-500 dark:ring-indigo-400"
                  src={testimonial.avatar}
                  alt={testimonial.author}
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
