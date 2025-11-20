const Services = () => {
  const serviceItems = [
    {
      iconBg: "bg-red-600",
      icon: "💪",
      title: "Personal Training",
      description: "Customized workout plans and one-on-one coaching to help you achieve your fitness goals faster."
    },
    {
      iconBg: "bg-blue-600",
      icon: "🏋️",
      title: "Group Classes",
      description: "Energetic group sessions including HIIT, Yoga, Spin, and more. Find your community and get fit together."
    },
    {
      iconBg: "bg-green-600",
      icon: "🥗",
      title: "Nutrition Coaching",
      description: "Expert guidance on healthy eating habits, meal planning, and dietary advice to fuel your body effectively."
    },
    {
      iconBg: "bg-yellow-600",
      icon: "💻",
      title: "Online Programs",
      description: "Access our top-tier training programs and resources from anywhere, anytime. Stay consistent with our virtual support."
    },
    {
      iconBg: "bg-purple-600",
      icon: "🧘",
      title: "Wellness Workshops",
      description: "Educational workshops focusing on mindfulness, recovery, injury prevention, and holistic well-being."
    },
    {
      iconBg: "bg-indigo-600",
      icon: "🏃",
      title: "Strength & Conditioning",
      description: "Specialized training to build strength, improve endurance, and enhance athletic performance for all levels."
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Velocity Fitness offers a comprehensive range of services designed to help you reach your full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center border border-gray-100">
              <div className={`w-16 h-16 ${service.iconBg} rounded-full flex items-center justify-center text-3xl mb-4 text-white p-2`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;