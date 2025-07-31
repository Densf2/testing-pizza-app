import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="min-h-screen bg-cover bg-center bg-fixed relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="text-center text-white pt-20">
            {/* Logo */}
            <div className="mb-8">
              <div className="text-8xl mb-4">🍕</div>
              <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">
                Pizza Express
              </h1>
            </div>
            
            {/* Tagline */}
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-orange-200">
              Pizza Express Online Ordering
            </h2>
            
            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Your Yummy Pizza Delivered Fast & Fresh
            </h1>
            
            {/* CTA Button */}
            <Link 
              href="/menu"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Order Now
            </Link>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-300">30-minute delivery guarantee or it's free!</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
                <p className="text-gray-300">Only the finest, freshest ingredients in every pizza</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">👨‍🍳</div>
                <h3 className="text-xl font-semibold mb-2">Expert Chefs</h3>
                <p className="text-gray-300">Handcrafted by our experienced pizza masters</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Pizzas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Popular Pizzas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most loved pizzas, crafted with passion and the finest ingredients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Sample Pizza Cards */}
            {[
              {
                name: "Margherita Classic",
                image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&w=400",
                price: "₹299",
                description: "Fresh tomatoes, mozzarella, and basil"
              },
              {
                name: "Pepperoni Supreme",
                image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&w=400",
                price: "₹449",
                description: "Loaded with pepperoni and extra cheese"
              },
              {
                name: "Veggie Delight",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&w=400",
                price: "₹399",
                description: "Bell peppers, onions, mushrooms, and olives"
              }
            ].map((pizza, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={pizza.image} 
                  alt={pizza.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{pizza.name}</h3>
                  <p className="text-gray-600 mb-4">{pizza.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">{pizza.price}</span>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/menu"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-lg transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Pizza Express?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">30-minute delivery or it's on us!</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🥬</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">Sourced daily from local farms</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Chefs</h3>
              <p className="text-gray-600">Trained Italian pizza masters</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Satisfaction</h3>
              <p className="text-gray-600">Love it or get your money back</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
