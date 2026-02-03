import { Check, CloudCog, Sparkles } from "lucide-react";
import "./App.css";

function App() {
  const subscriptionPlans = [
    {
      id: 1,
      name: "Basic",
      price: 10,
      priceid:'price_1Swg8GAjWpOP8HLuqeCFY6Mx',
      description: "For individuals getting started",
      features: ["Feature 1", "Feature 2"],
      popular: false,
    },
    {
      id: 2,
      name: "Standard",
      price: 20,
            priceid:'price_1Swg9PAjWpOP8HLuLksO095C',

      description: "Perfect for growing teams",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      popular: true,
    },
    {
      id: 3,
      name: "Premium",
            priceid:'price_1Swg9uAjWpOP8HLuPWLE6N4y',

      price: 30,
      description: "Advanced features for scale",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      popular: false,
    },
  ];

  const handelSuscription=async(priceId:string)=>{
const res=await fetch('http://localhost:5000/api/v1/payments/create-checkout-session',{
  method:'POST',
  
  headers:{
    'Content-Type':'application/json' ,
Authorization:`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjI0MGY1My0yMGVlLTQ3MTYtOTA4My1mMjMyMTUwODBhOGMiLCJyb2xlIjoiVVNFUiIsImVtYWlsIjoibWRoYW1pbTMwODhAZ21haWwuY29tIiwiaWF0IjoxNzcwMTEyNjc4LCJleHAiOjE3NzAxOTkwNzh9.3aXg69xR0TO85GGjzEAciS3Jg87BEkMd_rv_e33nyg4`
  },
  
  body:JSON.stringify({priceId})
})
const data=await res.json();
console.log(data);
if(data?.data?.url){
  window.location.href=data.data.url
}
  }
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Choose the plan that fits your needs. Upgrade or cancel anytime.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {subscriptionPlans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-2xl p-6 transition-all duration-300 
            ${
              plan.popular
                ? "bg-gradient-to-br from-indigo-600 to-purple-600 scale-105 shadow-2xl"
                : "bg-slate-900 hover:scale-105 hover:shadow-xl"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-indigo-400 px-4 py-1 rounded-full text-sm flex items-center gap-1">
                <Sparkles size={14} /> Most Popular
              </div>
            )}

            <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-gray-300 mb-4">{plan.description}</p>

            <div className="mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-gray-300"> / month</span>
            </div>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="text-green-400" size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button

            onClick={()=>handelSuscription(plan.priceid)}
              className={`w-full py-3 rounded-xl font-medium transition
              ${
                plan.popular
                  ? "bg-black text-white hover:bg-slate-900"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
