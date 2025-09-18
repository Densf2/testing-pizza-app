import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shopping Cart - Pizza Express",
  description: "Review your selected items and proceed to checkout.",
};

function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{children}</h1>
      <div className="w-24 h-1 bg-orange-600 rounded"></div>
    </div>
  );
}

// Sample cart items (you can replace this with actual cart state later)
const cartItems = [
  {
    id: "veg1",
    name: "Margherita Classic",
    desc: "Fresh tomatoes, mozzarella cheese, and aromatic basil leaves",
    price: 299,
    quantity: 2,
    img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&w=400",
  },
  {
    id: "nonveg1",
    name: "Pepperoni Supreme",
    desc: "Loaded with pepperoni slices and extra mozzarella cheese",
    price: 549,
    quantity: 1,
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&w=400",
  },
];

const GST_RATE = 0.18; // 18% GST

function CartItem({ item }: { item: any }) {
  const itemTotal = item.price * item.quantity;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="md:flex">
        <div className="md:w-1/4">
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-48 md:h-full object-cover"
          />
        </div>
        <div className="md:w-3/4 p-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
              <p className="text-lg font-semibold text-gray-800">
                Price: {item.price} ₴
              </p>
            </div>
            <button className="text-red-500 hover:text-red-700 p-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Quantity:</span>
              <div className="flex items-center space-x-2">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                  -
                </button>
                <span className="font-semibold px-3 text-lg">
                  {item.quantity}
                </span>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                  +
                </button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-orange-600">{itemTotal}₴</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="text-center py-16">
      <div className="text-8xl mb-8">🛒</div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Your cart is empty!
      </h2>
      <p className="text-gray-600 mb-8">
        Looks like you haven't added any delicious pizzas to your cart yet.
      </p>
      <Link
        href="/menu"
        className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-lg transition-colors"
      >
        Browse Menu
      </Link>
    </div>
  );
}

export default function CartPage() {
  // For demo purposes, let's show an empty cart.
  // Change `true` to `false` to see cart with items
  const isEmpty = true;

  if (isEmpty) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <PageTitle>Cart</PageTitle>
          <EmptyCart />
        </div>
      </div>
    );
  }

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const gst = subtotal * GST_RATE;
  const total = subtotal + gst;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <PageTitle>Cart</PageTitle>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Order Summary
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold">{subtotal}₴</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST (18%):</span>
                  <span className="font-semibold">{Math.round(gst)}₴</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-orange-600">
                    {Math.round(total)}₴
                  </span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg text-center block transition-colors mb-3"
              >
                CHECKOUT
              </Link>

              <Link
                href="/menu"
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg text-center block transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
