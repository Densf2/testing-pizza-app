"use client";

import { useState } from "react";
import { Metadata } from "next";

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

export default function CheckoutPage() {
  const [addressForm, setAddressForm] = useState({
    buildingNumber: "",
    streetName: "",
    city: "",
    state: "",
    country: "India",
    pinCode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sample order data
  const orderItems = [
    { name: "Margherita Classic", quantity: 2, itemPrice: 299, price: 598 },
    { name: "Pepperoni Supreme", quantity: 1, itemPrice: 549, price: 549 },
  ];

  const subtotal = 1147;
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    if (!addressForm.buildingNumber || !addressForm.city || !paymentMethod) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);

    // Simulate order placement
    setTimeout(() => {
      setOrderPlaced(true);
      setLoading(false);
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-8xl mb-8">🎉</div>
          <PageTitle>Order Placed</PageTitle>
          <h2 className="text-2xl text-gray-600 mb-8">
            Your yummy pizza will arrive at your doorstep soon! :)
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4">Order Details</h3>
            <p className="text-gray-600 mb-2">Order ID: #PZ{Date.now()}</p>
            <p className="text-gray-600 mb-2">Total: {total}grn</p>
            <p className="text-gray-600 mb-4">
              Estimated delivery: 25-30 minutes
            </p>
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              Track your order via SMS updates
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <PageTitle>Checkout</PageTitle>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Delivery Address */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <SectionTitle>Delivery Address</SectionTitle>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Building/House Number *
                  </label>
                  <input
                    type="text"
                    name="buildingNumber"
                    value={addressForm.buildingNumber}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter building/house number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street Name
                  </label>
                  <input
                    type="text"
                    name="streetName"
                    value={addressForm.streetName}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter street name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={addressForm.city}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter city"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={addressForm.state}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter state"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    name="pinCode"
                    value={addressForm.pinCode}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter PIN code"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={addressForm.country}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-100"
                    disabled
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <SectionTitle>Payment Method</SectionTitle>

              <div className="space-y-3">
                <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-gray-700">Cash on Delivery</span>
                </label>

                <label className="flex items-center p-3 border border-gray-300 rounded-lg opacity-50 cursor-not-allowed">
                  <input
                    type="radio"
                    name="payment"
                    value="wallet"
                    disabled
                    className="mr-3"
                  />
                  <span className="text-gray-500">Wallet (Coming Soon)</span>
                </label>

                <label className="flex items-center p-3 border border-gray-300 rounded-lg opacity-50 cursor-not-allowed">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    disabled
                    className="mr-3"
                  />
                  <span className="text-gray-500">
                    Credit/Debit Card (Coming Soon)
                  </span>
                </label>

                <label className="flex items-center p-3 border border-gray-300 rounded-lg opacity-50 cursor-not-allowed">
                  <input
                    type="radio"
                    name="payment"
                    value="netbanking"
                    disabled
                    className="mr-3"
                  />
                  <span className="text-gray-500">
                    Net Banking (Coming Soon)
                  </span>
                </label>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={loading}
                className="w-full mt-6 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                {loading ? "Placing Order..." : "Place Order"}
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Order Summary
              </h3>

              <div className="space-y-4 mb-6">
                {orderItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded"
                  >
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-600">
                        {item.itemPrice}grn x {item.quantity}
                      </p>
                    </div>
                    <span className="font-semibold">{item.price}grn</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold">{subtotal}grn</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST (18%):</span>
                  <span className="font-semibold">{gst}grn</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-orange-600">{total}grn</span>
                </div>
              </div>

              <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded text-sm">
                <strong>Delivery Note:</strong> Your order will be delivered
                within 30 minutes of confirmation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
