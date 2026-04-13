import React, { useState } from "react";
import { Link } from "react-router-dom";

const laptops = [
  // ✅ KEEP YOUR EXISTING 8 PRODUCTS
  {
    product_id: 1,
    product_name: "Apple MacBook Air M2",
    brand: "Apple",
    product_price: 114900,
    old_price: 129900,
    badge: "Best Seller",
    badge_color: "bg-yellow-300 text-black",
    category: "MacBook",
    specs: ["M2 Chip", "8GB RAM", "256GB SSD"],
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80",
  },
  {
    product_id: 2,
    product_name: "Dell XPS 15 9530",
    brand: "Dell",
    product_price: 154990,
    old_price: 174990,
    badge: "Hot Deal",
    badge_color: "bg-red-500 text-white",
    category: "Business",
    specs: ["Intel i7-13th", "16GB RAM", "512GB SSD"],
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&auto=format&fit=crop&q=80",
  },
  {
    product_id: 3,
    product_name: "Lenovo ThinkPad X1 Carbon",
    brand: "Lenovo",
    product_price: 136990,
    old_price: 152990,
    badge: "Top Rated",
    badge_color: "bg-blue-500 text-white",
    category: "Business",
    specs: ["Intel i7-1365U", "16GB RAM", "1TB SSD"],
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80",
  },
  {
    product_id: 4,
    product_name: "ASUS ROG Zephyrus G14",
    brand: "ASUS",
    product_price: 144990,
    old_price: 164990,
    badge: "Gaming",
    badge_color: "bg-purple-500 text-white",
    category: "Gaming",
    specs: ["Ryzen 9", "32GB RAM", "1TB SSD"],
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop&q=80",
  },
  {
    product_id: 5,
    product_name: "HP Spectre x360 14",
    brand: "HP",
    product_price: 189990,
    old_price: 169990,
    badge: "New",
    badge_color: "bg-green-500 text-white",
    category: "Premium",
    specs: ["Intel i7-1355U", "16GB RAM", "512GB SSD"],
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80",
  },
  {
    product_id: 6,
    product_name: "MacBook Pro 14 M3 Pro",
    brand: "Apple",
    product_price: 198900,
    old_price: 219900,
    badge: "Pro Pick",
    badge_color: "bg-yellow-300 text-black",
    category: "MacBook",
    specs: ["M3 Pro", "18GB RAM", "512GB SSD"],
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80",
  },
  {
    product_id: 7,
    product_name: "Acer Nitro 5",
    brand: "Acer",
    product_price: 74990,
    old_price: 89990,
    badge: "Budget Pick",
    badge_color: "bg-orange-400 text-white",
    category: "Gaming",
    specs: ["Ryzen 5", "16GB RAM", "512GB SSD"],
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=80",
  },
  {
    product_id: 8,
    product_name: "Samsung Galaxy Book 4 Pro",
    brand: "Samsung",
    product_price: 159990,
    old_price: 174990,
    badge: "Trending",
    badge_color: "bg-cyan-500 text-white",
    category: "Premium",
    specs: ["Intel Ultra 7", "16GB RAM", "512GB SSD"],
    image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&auto=format&fit=crop&q=80",
  },

  // 🔥 ADD 8 MORE PRODUCTS
  {
    product_id: 9,
    product_name: "Dell Inspiron 15",
    brand: "Dell",
    product_price: 65990,
    old_price: 75990,
    badge: "Value",
    badge_color: "bg-green-400 text-black",
    category: "Business",
    specs: ["Intel i5", "8GB RAM", "512GB SSD"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
  },
  {
    product_id: 10,
    product_name: "HP Pavilion Gaming",
    brand: "HP",
    product_price: 88990,
    old_price: 99990,
    badge: "Gaming",
    badge_color: "bg-purple-500 text-white",
    category: "Gaming",
    specs: ["Ryzen 7", "16GB RAM", "512GB SSD"],
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600",
  },
  {
    product_id: 11,
    product_name: "ASUS Vivobook 16",
    brand: "ASUS",
    product_price: 57990,
    old_price: 64990,
    badge: "Popular",
    badge_color: "bg-yellow-300 text-black",
    category: "Business",
    specs: ["Intel i5", "8GB RAM", "512GB SSD"],
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=600",
  },
  {
    product_id: 12,
    product_name: "Lenovo IdeaPad Slim 5",
    brand: "Lenovo",
    product_price: 69990,
    old_price: 79990,
    badge: "Deal",
    badge_color: "bg-red-500 text-white",
    category: "Business",
    specs: ["Ryzen 5", "16GB RAM", "512GB SSD"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600",
  },
  {
    product_id: 13,
    product_name: "MacBook Air M1",
    brand: "Apple",
    product_price: 89900,
    old_price: 99900,
    badge: "Classic",
    badge_color: "bg-gray-300 text-black",
    category: "MacBook",
    specs: ["M1 Chip", "8GB RAM", "256GB SSD"],
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
  },
  {
    product_id: 14,
    product_name: "Acer Aspire 7",
    brand: "Acer",
    product_price: 72990,
    old_price: 82990,
    badge: "Hot",
    badge_color: "bg-orange-400 text-white",
    category: "Gaming",
    specs: ["Ryzen 5", "16GB RAM", "512GB SSD"],
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600",
  },
  {
    product_id: 15,
    product_name: "MSI Katana GF66",
    brand: "MSI",
    product_price: 119990,
    old_price: 134990,
    badge: "Gaming",
    badge_color: "bg-purple-600 text-white",
    category: "Gaming",
    specs: ["Intel i7", "16GB RAM", "1TB SSD"],
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600",
  },
  {
    product_id: 16,
    product_name: "Samsung Galaxy Book 3",
    brand: "Samsung",
    product_price: 99990,
    old_price: 109990,
    badge: "New",
    badge_color: "bg-cyan-500 text-white",
    category: "Premium",
    specs: ["Intel i5", "16GB RAM", "512GB SSD"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
  },
];
const categories = ["All", "MacBook", "Gaming", "Business", "Premium"];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [visibleCount, setVisibleCount] = useState(8);
  const [search, setSearch] = useState(""); // ✅ NEW

  // ✅ FILTER + SEARCH + SORT
  const filtered = laptops
    .filter((l) =>
      (activeCategory === "All" || l.category === activeCategory) &&
      (l.product_name.toLowerCase().includes(search.toLowerCase()) ||
        l.brand.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "low") return a.product_price - b.product_price;
      if (sortBy === "high") return b.product_price - a.product_price;
      return 0;
    });

  const visibleProducts = filtered.slice(0, visibleCount);

  const formatPrice = (price) => "₹" + price.toLocaleString("en-IN");

  const discount = (old, current) =>
    Math.round(((old - current) / old) * 100);

  return (
    <section className="bg-[#0a0a0f] py-20">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

        {/* 🔥 HEADER + FILTERS */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search laptops..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full lg:w-1/3 p-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-yellow-300/50"
          />

          {/* CATEGORY FILTER */}
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(8); // reset
                }}
                className={`px-4 py-2 rounded-xl text-sm transition ${
                  activeCategory === cat
                    ? "bg-yellow-300 text-black"
                    : "bg-white/5 text-white/70 border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* SORT */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-white"
          >
            <option value="default">Sort</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>

        </div>

        {/* PRODUCT GRID (UNCHANGED) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visibleProducts.map((laptop) => (
            <div key={laptop.product_id} className="bg-[#111118] border border-white/7 rounded-2xl overflow-hidden group hover:border-yellow-300/25 hover:-translate-y-1 transition-all duration-300 flex flex-col">

              <div className="relative overflow-hidden h-48 bg-[#1a1a2e]">
                <img src={laptop.image} alt={laptop.product_name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-md ${laptop.badge_color}`}>
                  {laptop.badge}
                </span>
                {laptop.old_price > laptop.product_price && (
                  <span className="absolute top-3 right-3 text-xs font-bold bg-black/70 text-yellow-300 px-2 py-1 rounded-md">
                    -{discount(laptop.old_price, laptop.product_price)}%
                  </span>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs text-white/30 uppercase tracking-widest mb-1">{laptop.brand}</p>
                <h3 className="text-white font-bold text-base leading-snug mb-3">{laptop.product_name}</h3>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {laptop.specs.map((spec) => (
                    <span key={spec} className="text-xs bg-white/5 text-white/45 px-2 py-1 rounded-md">
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex items-baseline gap-2 mb-4 mt-auto">
                  <span className="text-xl font-extrabold text-yellow-300">{formatPrice(laptop.product_price)}</span>
                  <span className="text-sm text-white/25 line-through">{formatPrice(laptop.old_price)}</span>
                </div>

                <Link to={`/productdetails/${laptop.product_id}`}>
                  <button className="w-full py-2.5 rounded-xl text-sm font-semibold border border-white/10 text-white/70 hover:bg-yellow-300 hover:text-black hover:border-yellow-300 transition-all duration-200">
                    View Details
                  </button>
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        {visibleCount < filtered.length && (
          <div className="text-center mt-14">
            <button
              onClick={() => setVisibleCount(filtered.length)}
              className="bg-white/5 border border-white/10 text-white/70 hover:bg-yellow-300 hover:text-black hover:border-yellow-300 font-medium px-8 py-3 rounded-xl transition-all duration-200 text-sm"
            >
              View All Products →
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Products;
