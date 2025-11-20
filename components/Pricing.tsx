
import React from 'react';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    frequency: '/month',
    features: [
      'Basic gym access',
      'Standard equipment',
      'Locker room access',
      'Limited group classes',
    ],
    buttonText: 'Get Started',
    buttonColor: 'bg-indigo-600 hover:bg-indigo-700',
    isMostPopular: false,
  },
  {
    name: 'Premium',
    price: '$59',
    frequency: '/month',
    features: [
      'All Starter features',
      '24/7 access',
      'Personalized workout plan',
      'Unlimited group classes',
      'Sauna & Steam room access',
    ],
    buttonText: 'Choose Plan',
    buttonColor: 'bg-emerald-600 hover:bg-emerald-700',
    isMostPopular: true,
  },
  {
    name: 'Ultimate',
    price: '$99',
    frequency: '/month',
    features: [
      'All Premium features',
      '2 personal trainer sessions',
      'Nutritional guidance',
      '1 massage therapy session',
      'Towel service',
    ],
    buttonText: 'Go Ultimate',
    buttonColor: 'bg-purple-600 hover:bg-purple-700',
    isMostPopular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-emerald-300">
            Membership Plans
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Join Velocity Fitness today and unlock your full potential. Choose the plan that best fits your fitness journey.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-3xl p-8 shadow-xl ${
                plan.isMostPopular ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 ring-2 ring-emerald-500' : 'bg-gray-900 ring-1 ring-gray-800'
              }`}
            >
              {plan.isMostPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1.5 text-sm font-semibold text-white shadow-md">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="text-2xl font-semibold leading-8 text-white">{plan.name}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-300">
                  Perfect for {plan.name === 'Starter' ? 'beginners' : plan.name === 'Premium' ? 'dedicated members' : 'elite athletes'}.
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-white">{plan.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-300">{plan.frequency}</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-emerald-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                // Placeholder for Stripe Checkout or Subscription link
                onClick={() => alert(`Initiating checkout for ${plan.name} plan...`)}
                className={`mt-8 block w-full rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${plan.buttonColor} ${
                    plan.isMostPopular ? 'focus-visible:outline-emerald-600' : 'focus-visible:outline-indigo-600'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
