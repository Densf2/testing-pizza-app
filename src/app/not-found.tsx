import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-9xl mb-8">🍕</div>
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-600 mb-6">
          Oops! Looks like this pizza got lost!
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-lg transition-colors mr-4"
          >
            Go Home
          </Link>
          <Link 
            href="/menu"
            className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-8 py-3 rounded-lg transition-colors"
          >
            View Menu
          </Link>
        </div>
        
        <div className="mt-12 text-gray-400">
          <p>Need help? <a href="mailto:support@pizzaexpress.com" className="text-orange-600 hover:text-orange-700">Contact Support</a></p>
        </div>
      </div>
    </div>
  );
}
