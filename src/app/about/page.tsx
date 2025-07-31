import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Pizza Express',
  description: 'Learn more about Pizza Express - delivering happiness with every slice since our founding.',
};

function PageInfo({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 py-16 overflow-hidden">
      {/* Animated waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 text-white animate-pulse" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,0 900,120 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-6xl font-bold text-white mb-4">{children}</h1>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PageInfo>ABOUT</PageInfo>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Pizza Express: Delivering Happiness
              <hr className="w-24 h-1 bg-orange-600 mt-2" />
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                What's better than having a crispy melty pizza, you ask?
              </p>
              <p>
                Having that crispy and melty pizza in the comfort of your own home with the ones you love, we say.
              </p>
              <p>
                With Pizza Express it is always "Rishton ka time". Whether it's a treat for your promotion, a kid topping his class or winning the heart of your wife who is too tired to cook after a long day at work! A cheesy slice of the best pizza is all one needs to put things into perspective and start any celebration. Plus, you do not even need to rush to the restaurant to have one now. A call, a few clicks on our website or a few touches on the mobile screen is all you have to do to have that tempting, light-on-the-pocket pizza at your doorstep.
              </p>
              <p>
                There is something for everyone here. The vegetarians, non-vegetarians, the sides' lovers and also the ones who love to have something sweet by the time they reach the last bite of the last slice of pizza.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What We Need - More Choice. More Fun.
              <hr className="w-24 h-1 bg-orange-600 mt-2" />
            </h2>
            
            <p className="text-gray-700 leading-relaxed">
              No matter what the situation, pizza always helps. Especially a pizza that gives you the freedom to choose your toppings - from paneer, crisp capsicum, onion, grilled mushroom, golden corn, black olives, fresh tomato, red paprika, jalapeno, paneer tikka and extra cheese to non-veg toppings such as pepper barbeque chicken, peri-peri chicken, grilled chicken rasher, chicken sausage or chicken tikka- the options are almost endless, anything and everything you can think of that too on top of the crust of your choice - New hand-tossed crust, wheat thin crust, cheese burst crust, classic hand-tossed crust or a fresh pan pizza. Because just like a pizza, Pizza Express understands you.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              The Promise Of 30-Minute Delivery
              <hr className="w-24 h-1 bg-orange-600 mt-2" />
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                At Pizza Express, we understand that time is precious. That's why we've made a commitment to deliver your hot, delicious pizza within 30 minutes of placing your order. Our efficient kitchen operations, strategic locations, and dedicated delivery team work together to ensure your pizza arrives fresh and on time.
              </p>
              <p>
                We've invested in state-of-the-art kitchen equipment and optimized our preparation processes to maintain consistent quality while meeting our delivery promise. Our delivery partners are trained to handle your order with care, ensuring that every pizza reaches you in perfect condition.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Story
              <hr className="w-24 h-1 bg-orange-600 mt-2" />
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Founded with a passion for authentic Italian flavors and a commitment to quality, Pizza Express has been serving communities with love and dedication. Our journey began with a simple vision: to bring the joy of freshly made, delicious pizza to every home.
              </p>
              <p>
                From our humble beginnings to becoming a trusted name in pizza delivery, we've always prioritized fresh ingredients, authentic recipes, and exceptional customer service. Every pizza we make is a testament to our commitment to quality and our love for what we do.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                <p className="text-gray-600">
                  We use only the finest ingredients and maintain the highest standards in every pizza we make.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Love</h3>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. Your satisfaction is our success.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We continuously innovate our recipes, technology, and service to serve you better.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Meet Our Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Marco Giovanni", role: "Head Chef", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300" },
                { name: "Sarah Johnson", role: "Operations Manager", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300" },
                { name: "Mike Chen", role: "Quality Assurance", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300" }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-orange-600 font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
