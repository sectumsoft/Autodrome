import React, { useState } from 'react';
import logo from './assets/logo.jpg';
import varunImage from './assets/varun.jpeg';
import labeebImage from './assets/labeeb.jpeg';
import rinoofImage from './assets/rinoof.jpeg';

import {
  Search,
  Phone,
  Menu,
  X,
  Star,
  Truck,
  Shield,
  Award,
  PhoneCall,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  ChevronRight,
  Heart,
  User,
  MessageCircle
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inquiryCount, setInquiryCount] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const categories = [
    {
      name: "Car Speakers",
      image: "https://images.pexels.com/photos/12745440/pexels-photo-12745440.jpeg",
      count: "150+ Items"
    },
    {
      name: "Batteries",
      image: "https://images.pexels.com/photos/13065689/pexels-photo-13065689.jpeg",
      count: "80+ Items"
    },
    {
      name: "Android Systems",
      image: "https://androidguias.com/wp-content/uploads/2023/04/Android-Auto.jpg",
      count: "50+ Items"
    },
    {
      name: "Tires & Wheels",
      image: "https://images.pexels.com/photos/34357287/pexels-photo-34357287.jpeg",
      count: "200+ Items"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Diamond Dual Knod Android Stereo",
      price: 7500,
      originalPrice: 8999,
      image: "https://autobacsindia.com/wp-content/uploads/2024/10/image_67-460x460.png",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Roots Vibrosonic Horn",
      price: 850,
      originalPrice: 999,
      image: "https://srisendurmotors.in/wp-content/uploads/2024/04/Roots-vibrosonic-horn.png",
      rating: 4.9,
      reviews: 89,
      badge: "New"
    },
    {
      id: 3,
      name: "Android Car System",
      price: 8500,
      originalPrice: 10999,
      image: "https://m.media-amazon.com/images/I/61crCax-9wL.jpg",
      rating: 4.7,
      reviews: 156,
      badge: "Sale"
    },
    {
      id: 4,
      name: "TRI Colour Fog Light Projector",
      price: 2000,
      originalPrice: 2999,
      image: "https://tse4.mm.bing.net/th/id/OIP.bvlf_RLuVWXHMDuk46OHQQHaHa?cb=12ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 4.6,
      reviews: 73,
      badge: "Popular"
    }
  ];

  const testimonials = [
    {
      name: "VarunDas",
      //role: "Car Enthusiast",
 image: varunImage,      
 rating: 5,
      text: "Amazing quality products and fast delivery. My car has never performed better!"
    },
    {
      name: "Labeeb",
      //role: "Professional Driver",
      image: labeebImage,
      rating: 5,
      text: "Great customer service and competitive prices. Highly recommend this shop!"
    },
    {
      name: "Rinoof",
      //role: "Mechanic",
      image: rinoofImage,
      rating: 5,
      text: "Professional grade accessories at reasonable prices. Perfect for my workshop!"
    }
  ];

  const addInquiry = (productId: number) => {
    setInquiryCount(prev => prev + 1);
    // In a real app, this would add to inquiry list
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I want car accessory updates");
    const whatsappURL = `https://wa.me/919947859988?text=${message}`;
    window.open(whatsappURL, '_blank');
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Autodrome Logo" className="w-12 h-12 object-cover rounded-full" />

              <span className="text-2xl font-bold text-gray-800">Autodrome</span>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('categories')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">Categories</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">Products</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">Contact</button>
            </nav>

            {/* Search and Actions */}
            <div className="flex items-center space-x-4">
              {/* <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Search className="w-4 h-4 text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent outline-none text-sm w-48"
                />
              </div> */}

              {/* <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <User className="w-5 h-5 text-gray-600" />
              </button>

              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>

              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <MessageCircle className="w-5 h-5 text-gray-600" />
                {inquiryCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {inquiryCount}
                  </span>
                )}
              </button> */}

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mb-4">
                  <Search className="w-4 h-4 text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="bg-transparent outline-none text-sm flex-1"
                  />
                </div>
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left">Home</button>
                <button onClick={() => scrollToSection('categories')} className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left">Categories</button>
                <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left">Products</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left">Contact</button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      {/* <section id="home" className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20 overflow-hidden"> */}

      <section
        id="home"
        className="relative bg-cover bg-center text-white py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(127, 9, 9, 0.6), rgba(77, 4, 4, 0.6)), url('https://images.pexels.com/photos/326259/pexels-photo-326259.jpeg')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Premium Car Accessories for Every Drive
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Upgrade your vehicle with our high-quality parts and accessories. From performance to comfort, we have everything you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919947859988"
                className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-red-50 transition-colors inline-flex items-center justify-center"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="https://www.instagram.com/auto_drome_/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors inline-flex items-center justify-center"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $50</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">100% authentic products guarantee</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Professional consultation & support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Find the perfect accessories for your vehicle</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-200">{category.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Our most popular and highly-rated accessories</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {product.badge}
                    </span>
                  </div>
                  <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-600" />
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-red-600">₹{product.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      addInquiry(product.id);
                      window.location.href = 'tel:+919947859988';
                    }}
                    className="w-full bg-red-600 text-white py-2 rounded-full font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
                  >
                    <PhoneCall className="w-4 h-4 mr-2" />
                    Inquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Real feedback from satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    {/* <p className="text-sm text-gray-600">{testimonial.role}</p> */}
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      {/* <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-red-100">Get the latest deals and product updates delivered to your inbox</p>

          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 outline-none"
            />
            <a
              href="tel:+919947859988"
              className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors inline-flex items-center justify-center"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section> */}

      {/* Newsletter Signup */}
      {/* <section className="py-16 bg-gradient-to-r from-red-700 to-red-500 text-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-4 tracking-tight">Get Exclusive Offers & Updates</h2>
    <p className="text-lg mb-8 text-red-100">Join our mailing list for the latest car accessories, flash sales, and expert tips.</p>

    <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 px-4 py-3 rounded-full text-gray-800 outline-none focus:ring-2 focus:ring-red-300"
        required
      />
      <button
        type="submit"
        className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors"
      >
        Subscribe
      </button>
    </form>

    <p className="mt-6 text-sm text-red-100">No spam. Unsubscribe anytime.</p>
  </div>
</section> */}

      <section
        className="py-16 bg-cover bg-center text-white text-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(239, 157, 157, 0.8), rgba(243, 60, 47, 0.8)), url('https://images.pexels.com/photos/1104768/pexels-photo-1104768.jpeg')`
        }}
      >      <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Get Exclusive Offers & Updates</h2>
          <p className="text-lg mb-8 text-red-100">
            Subscribe via WhatsApp to receive flash deals, new arrivals, and expert tips!
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors"
          >
            Subscribe via WhatsApp
          </button>

          <p className="mt-6 text-sm text-red-100">No spam. Just updates you care about.</p>
        </div>
      </section>





      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <Truck className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold">Autodrome</span>
              </div>
              <p className="text-gray-400 mb-4">Your trusted partner for premium car accessories and parts in Kerala.</p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <a href="https://www.instagram.com/auto_drome_/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors text-left">Home</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors text-left">Products</button></li>
                <li><button onClick={() => scrollToSection('categories')} className="hover:text-white transition-colors text-left">Categories</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors text-left">About Us</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors text-left">Contact Us</button></li>
                <li><a href="tel:+919947859988" className="hover:text-white transition-colors">Call for Info</a></li>
                <li><a href="tel:+919947859988" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="tel:+919947859988" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <a href="tel:+919947859988" className="flex items-center hover:text-white transition-colors">
                  <PhoneCall className="w-4 h-4 mr-2" />
                  <span>+91 9947859988</span>
                </a>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@autodrome.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Kollengode, Palakkad, Kerala</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Autodrome. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;