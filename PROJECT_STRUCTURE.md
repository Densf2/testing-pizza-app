# Pizza Express - Next.js E-commerce App

A modern pizza delivery application built with Next.js 15, inspired by the Pizza-Man project structure and functionality.

## 🚀 Features

### 📄 Pages & Routes

- **Home** (`/`) - Landing page with hero section and featured pizzas
- **Menu** (`/menu`) - Product catalog with categories and cart functionality
- **Cart** (`/cart`) - Shopping cart with item management
- **Checkout** (`/checkout`) - Order placement with address and payment options
- **About** (`/about`) - Company information and team details
- **FAQ** (`/faq`) - Accordion-style frequently asked questions
- **Login** (`/login`) - User authentication
- **Terms** (`/terms`) - Terms and conditions
- **404** - Custom error page

### 🎨 UI Components

- **Responsive Navigation** - Mobile-friendly navbar with hamburger menu
- **Footer** - Comprehensive footer with links and social media
- **Reusable Components** - Button, Spinner, and other UI elements
- **Accordion** - Interactive FAQ sections
- **Forms** - Login, checkout, and address forms

### 🛒 E-commerce Features

- Product catalog with categories
- Shopping cart functionality (ready for state management)
- Checkout process with address and payment forms
- Order summary and confirmation
- Responsive design for all screen sizes

### 🔥 Firebase Integration Ready

The project includes:

- Firebase configuration setup (`src/lib/firebase.ts`)
- Firebase Storage utilities (`src/lib/storage.ts`)
- React hooks for Firebase operations (`src/hooks/useFirebaseStorage.ts`)
- Image upload component (`src/components/ImageUpload.tsx`)

## 🏗️ Project Structure

```
src/
├── app/                          # Next.js 15 App Router
│   ├── about/page.tsx           # About page
│   ├── cart/page.tsx            # Shopping cart
│   ├── checkout/page.tsx        # Checkout process
│   ├── faq/page.tsx             # FAQ with accordions
│   ├── login/page.tsx           # User authentication
│   ├── menu/page.tsx            # Product catalog
│   ├── terms/page.tsx           # Terms & conditions
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout with nav/footer
│   ├── not-found.tsx            # 404 error page
│   └── page.tsx                 # Home page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Navigation component
│   │   └── Footer.tsx           # Footer component
│   ├── ui/
│   │   ├── Button.tsx           # Reusable button component
│   │   └── Spinner.tsx          # Loading spinner
│   ├── ImageUpload.tsx          # Firebase image upload
├── hooks/
│   └── useFirebaseStorage.ts    # Firebase storage hook
├── lib/
│   ├── firebase.ts              # Firebase configuration
│   └── storage.ts               # Firebase storage utilities
└── types/                       # TypeScript type definitions
```

## 🎯 Based on Pizza-Man Project Analysis

This project replicates the structure and functionality of the original Pizza-Man React application:

### Original Tech Stack

- React with React Router
- Redux for state management
- CSS Modules + Bootstrap
- Firebase (Firestore + Authentication)

### Modern Next.js Implementation

- Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Firebase Storage integration
- Modern React patterns (hooks, functional components)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Firebase project (optional, for backend features)

### Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up environment variables** (for Firebase)

   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your Firebase configuration
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Firebase Setup (Optional)

To enable Firebase features:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication and Storage
3. Copy your config to `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Tailwind CSS

The project uses Tailwind CSS for styling. Configuration is in `tailwind.config.ts`.

## 📱 Features to Implement

### State Management

- Add Redux Toolkit or Zustand for cart state
- User authentication state
- Order history management

### Backend Integration

- Connect to Firebase Firestore for menu data
- Implement user authentication
- Order management system
- Real-time order tracking

### Enhanced Features

- User registration and profiles
- Order history page
- Search and filtering
- Payment gateway integration
- Push notifications
- Admin dashboard

## 🎨 Design System

### Colors

- Primary: Orange-600 (#EA580C)
- Secondary: Gray-800 (#1F2937)
- Success: Green-600 (#16A34A)
- Error: Red-600 (#DC2626)

### Typography

- Font: Geist Sans
- Headings: Bold, various sizes
- Body: Regular, gray-700

### Components

- Consistent button styles
- Card-based layouts
- Responsive grid system
- Mobile-first design

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel --prod
```

### Other Platforms

```bash
npm run build
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Inspired by the [Pizza-Man](https://github.com/ruppysuppy/Pizza-Man) project
- Built with Next.js 15 and modern React patterns
- Styled with Tailwind CSS
- Firebase integration for backend services

## 📞 Support

For support and questions:

- Email: support@pizzaexpress.com
- Phone: (555) 123-PIZZA
- GitHub Issues: Create an issue in this repository

---

**Happy Coding! 🍕**
