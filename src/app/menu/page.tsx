import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu - Pizza Express',
  description: 'Browse our delicious pizza menu with fresh ingredients and authentic recipes.',
};

// Sample menu data (you can replace this with Firebase data later)
const menuCategories = [
  {
    name: "Vegetarian Pizzas",
    items: [
      {
        id: "veg1",
        name: "Margherita Classic",
        desc: "Fresh tomatoes, mozzarella cheese, and aromatic basil leaves",
        price: 299,
        img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&w=400"
      },
      {
        id: "veg2",
        name: "Veggie Supreme",
        desc: "Bell peppers, onions, mushrooms, black olives, and extra cheese",
        price: 399,
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&w=400"
      },
      {
        id: "veg3",
        name: "Paneer Tikka",
        desc: "Spiced paneer cubes with onions, bell peppers, and tikka sauce",
        price: 449,
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&w=400"
      }
    ]
  },
  {
    name: "Non-Vegetarian Pizzas",
    items: [
      {
        id: "nonveg1",
        name: "Pepperoni Supreme",
        desc: "Loaded with pepperoni slices and extra mozzarella cheese",
        price: 549,
        img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&w=400"
      },
      {
        id: "nonveg2",
        name: "Chicken BBQ",
        desc: "Grilled chicken with BBQ sauce, onions, and bell peppers",
        price: 599,
        img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&w=400"
      },
      {
        id: "nonveg3",
        name: "Meat Lovers",
        desc: "Pepperoni, chicken sausage, ground beef, and bacon",
        price: 699,
        img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&w=400"
      }
    ]
  },
  {
    name: "Beverages",
    items: [
      {
        id: "bev1",
        name: "Coca Cola",
        desc: "Chilled Coca Cola 330ml can",
        price: 49,
        img: "https://images.unsplash.com/photo-1592444645479-6b1ed4b3df39?ixlib=rb-4.0.3&w=400"
      },
      {
        id: "bev2",
        name: "Fresh Lime Soda",
        desc: "Refreshing lime soda with a twist of mint",
        price: 69,
        img: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?ixlib=rb-4.0.3&w=400"
      }
    ]
  }
];

function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{children}</h1>
      <div className="w-24 h-1 bg-orange-600 rounded"></div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mr-4">{children}</h2>
      <div className="flex-1 h-0.5 bg-gray-300"></div>
    </div>
  );
}

function MenuItem({ item }: { item: any }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow mb-6">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={item.img} 
            alt={item.name}
            className="w-full h-48 md:h-full object-cover"
          />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
            <span className="text-2xl font-bold text-orange-600">₹{item.price}</span>
          </div>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.desc}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                -
              </button>
              <span className="font-semibold px-3">1</span>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                +
              </button>
            </div>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Category({ category }: { category: any }) {
  return (
    <div className="mb-12">
      <SectionTitle>{category.name}</SectionTitle>
      <div className="space-y-6">
        {category.items.map((item: any) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function Cart() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Cart</h2>
      
      {/* Empty cart state */}
      <div className="text-center py-8">
        <div className="text-6xl mb-4">🛒</div>
        <p className="text-gray-500 mb-4">Cart is Empty!</p>
      </div>

      {/* When cart has items, show this instead:
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
          <div>
            <h4 className="font-semibold">Margherita Classic</h4>
            <p className="text-sm text-gray-600">₹299 x 1</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-red-500 hover:text-red-700">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-lg">Total: ₹299</span>
        </div>
        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors mb-2">
          GO TO CART
        </button>
        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm transition-colors">
          Clear Cart
        </button>
      </div>
      */}
    </div>
  );
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <PageTitle>Menu</PageTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2">
            {menuCategories.map((category) => (
              <Category key={category.name} category={category} />
            ))}
          </div>
          
          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}
