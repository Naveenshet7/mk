import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

// Lazy load all pages with error boundaries
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'));
const AccountPage = lazy(() => import('./pages/AccountPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const RecipesPage = lazy(() => import('./pages/RecipesPage'));
const AllProductsPage = lazy(() => import('./pages/AllProductsPage'));
const MalanadSpecialPage = lazy(() => import('./pages/MalanadSpecialPage'));
const HerbsPage = lazy(() => import('./pages/HerbsPage'));

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <button
              onClick={() => window.location.reload()}
              className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
            >
              Reload page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading component with skeleton
const LoadingSpinner = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="space-y-8 w-full max-w-md">
      <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
      <div className="space-y-3">
        <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-3 bg-gray-200 rounded animate-pulse w-5/6"></div>
        <div className="h-3 bg-gray-200 rounded animate-pulse w-4/6"></div>
      </div>
    </div>
  </div>
);

function App() {
  return (   
    <ErrorBoundary>
      <AuthProvider>
        <CartProvider>
          <Router>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products/:category" element={<ProductsPage />} />
                    <Route path="/product/:id" element={<ProductDetailPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                    <Route path="/account/*" element={<AccountPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/recipes" element={<RecipesPage />} />
                    <Route path="/all-products" element={<AllProductsPage />} />
                    <Route path="/malanad-special" element={<MalanadSpecialPage />} />
                    <Route path="/herbs" element={<HerbsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;