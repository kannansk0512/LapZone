import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const laptops = [
  {
    product_id: 1,
    product_name: "Apple MacBook Air M2",
    brand: "Apple",
    product_price: 114900,
    old_price: 129900,
    badge: "Best Seller",
    badge_color: "bg-yellow-300 text-black",
    category: "MacBook",
    specs: ["M2 Chip", "8GB RAM", "256GB SSD", "13.6-inch Display", "18hr Battery"],
    description: "The MacBook Air M2 is Apple's most popular laptop, redesigned around the powerful M2 chip. With a stunning Liquid Retina display, fanless design, and all-day battery life, it's perfect for students, creatives, and professionals alike.",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80",
    ],
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
    specs: ["Intel i7-13th", "16GB RAM", "512GB SSD", "15.6-inch OLED", "86Wh Battery"],
    description: "The Dell XPS 15 9530 delivers pro-level performance in a premium aluminium chassis. The stunning OLED display and 13th Gen Intel processor make it ideal for content creators, developers, and power users.",
    images: [
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80",
    ],
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
    specs: ["Intel i7-1365U", "16GB RAM", "1TB SSD", "14-inch IPS", "MIL-SPEC Build"],
    description: "The ThinkPad X1 Carbon is the gold standard for business laptops. Featherlight at just 1.12kg, it combines enterprise-grade security with blazing performance and an ultra-durable MIL-SPEC tested chassis.",
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80",
    ],
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
    specs: ["Ryzen 9", "32GB RAM", "1TB SSD", "14-inch QHD 165Hz", "RTX 4060"],
    description: "The ROG Zephyrus G14 packs desktop-class gaming into a compact 14-inch form. With an AMD Ryzen 9 processor and NVIDIA RTX 4060, it dominates every game while staying thin enough to carry anywhere.",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600&auto=format&fit=crop&q=80",
    ],
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
    specs: ["Intel i7-1355U", "16GB RAM", "512GB SSD", "14-inch OLED Touch", "2-in-1 Design"],
    description: "The HP Spectre x360 14 is a stunning 2-in-1 premium convertible with an OLED touchscreen. Its gem-cut design, OLED panel, and long battery life make it one of the most beautiful laptops money can buy.",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&auto=format&fit=crop&q=80",
    ],
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
    specs: ["M3 Pro", "18GB RAM", "512GB SSD", "14-inch Liquid Retina XDR", "22hr Battery"],
    description: "The MacBook Pro 14 with M3 Pro is a powerhouse built for professionals. From video editing to 3D rendering, the M3 Pro chip handles everything with ease while the Liquid Retina XDR display stuns with every frame.",
    images: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=80",
    ],
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
    specs: ["Ryzen 5", "16GB RAM", "512GB SSD", "15.6-inch FHD 144Hz", "RTX 3050"],
    description: "The Acer Nitro 5 is the go-to gaming laptop for budget-conscious gamers. With an RTX 3050 GPU and 144Hz display, it delivers smooth gaming on popular titles without breaking the bank.",
    images: [
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600&auto=format&fit=crop&q=80",
    ],
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
    specs: ["Intel Ultra 7", "16GB RAM", "512GB SSD", "16-inch AMOLED", "Galaxy AI"],
    description: "The Samsung Galaxy Book 4 Pro features a breathtaking 3K AMOLED display and Intel Core Ultra 7 processor. Powered by Galaxy AI, it brings intelligent features to your workflow for maximum productivity.",
    images: [
      "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80",
    ],
  },
  {
    product_id: 9,
    product_name: "Dell Inspiron 15",
    brand: "Dell",
    product_price: 65990,
    old_price: 75990,
    badge: "Value",
    badge_color: "bg-green-400 text-black",
    category: "Business",
    specs: ["Intel i5", "8GB RAM", "512GB SSD", "15.6-inch FHD", "Backlit Keyboard"],
    description: "The Dell Inspiron 15 is a reliable everyday laptop offering solid performance for work, study, and light entertainment. With a full HD display and fast SSD, it keeps your day running smoothly at a great price.",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80",
    ],
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
    specs: ["Ryzen 7", "16GB RAM", "512GB SSD", "15.6-inch FHD 144Hz", "RTX 3050 Ti"],
    description: "The HP Pavilion Gaming laptop delivers capable gaming performance at a mid-range price. With Ryzen 7 and RTX 3050 Ti, it handles popular titles at high settings while the 144Hz display keeps gameplay silky smooth.",
    images: [
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=80",
    ],
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
    specs: ["Intel i5", "8GB RAM", "512GB SSD", "16-inch FHD", "Fingerprint Sensor"],
    description: "The ASUS Vivobook 16 is a capable everyday laptop with a large 16-inch display ideal for multitasking. Its slim profile, fast SSD, and fingerprint login make it a smart pick for students and home users.",
    images: [
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80",
    ],
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
    specs: ["Ryzen 5", "16GB RAM", "512GB SSD", "14-inch FHD IPS", "Dolby Audio"],
    description: "The Lenovo IdeaPad Slim 5 strikes a perfect balance between performance and portability. With a Ryzen 5 processor and 16GB RAM, it handles multitasking with ease while Dolby Audio delivers an immersive sound experience.",
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80",
    ],
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
    specs: ["M1 Chip", "8GB RAM", "256GB SSD", "13.3-inch Retina", "Fanless Design"],
    description: "The MacBook Air M1 started a revolution. With Apple's groundbreaking M1 chip, it delivers incredible performance and all-day battery life in a fanless, silent design — still one of the best laptops ever made.",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80",
    ],
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
    specs: ["Ryzen 5", "16GB RAM", "512GB SSD", "15.6-inch FHD", "GTX 1650"],
    description: "The Acer Aspire 7 is a versatile laptop that blends everyday productivity with entry-level gaming. The GTX 1650 GPU handles casual gaming smoothly while the Ryzen 5 processor keeps your workflow fast and efficient.",
    images: [
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop&q=80",
    ],
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
    specs: ["Intel i7", "16GB RAM", "1TB SSD", "15.6-inch FHD 144Hz", "RTX 3060"],
    description: "The MSI Katana GF66 is a serious gaming machine with an RTX 3060 GPU and Intel Core i7. Whether you're grinding ranked matches or streaming your gameplay, the Katana delivers the power and performance to dominate.",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=80",
    ],
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
    specs: ["Intel i5", "16GB RAM", "512GB SSD", "15.6-inch FHD AMOLED", "Galaxy Ecosystem"],
    description: "The Samsung Galaxy Book 3 offers a premium AMOLED display and seamless Galaxy ecosystem integration. It's the perfect companion for Samsung phone users, enabling cross-device features like Link to Windows and Samsung DeX.",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80",
    ],
  },
];

const formatPrice = (price) => "₹" + price.toLocaleString("en-IN");
const discount = (oldP, newP) => Math.round(((oldP - newP) / oldP) * 100);

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const laptop = laptops.find((p) => p.product_id === Number(id));
  const [mainImage, setMainImage] = useState(laptop ? laptop.images[0] : "");

  if (!laptop) {
    return (
      <div className="text-white text-center py-20 bg-[#0a0a0f] min-h-screen">
        <p className="text-2xl font-bold mb-4">Product not found</p>
        <button
          onClick={() => navigate(-1)}
          className="text-yellow-300 hover:underline"
        >
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="bg-[#0a0a0f] py-20 min-h-screen text-white">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-white/50 hover:text-white mb-8 flex items-center gap-2 transition-colors duration-200"
        >
          ← Back
        </button>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT: Images */}
          <div>
            <div className="bg-[#111118] rounded-2xl p-6 border border-white/10 mb-4">
              <img
                src={mainImage}
                alt={laptop.product_name}
                className="w-full h-[350px] object-contain"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              <img
                src={laptop.images[0]}
                onClick={() => setMainImage(laptop.images[0])}
                alt="thumb1"
                className={"w-16 h-16 object-cover rounded-lg cursor-pointer border " + (mainImage === laptop.images[0] ? "border-yellow-300" : "border-white/10")}
              />
              <img
                src={laptop.images[1]}
                onClick={() => setMainImage(laptop.images[1])}
                alt="thumb2"
                className={"w-16 h-16 object-cover rounded-lg cursor-pointer border " + (mainImage === laptop.images[1] ? "border-yellow-300" : "border-white/10")}
              />
              <img
                src={laptop.images[2]}
                onClick={() => setMainImage(laptop.images[2])}
                alt="thumb3"
                className={"w-16 h-16 object-cover rounded-lg cursor-pointer border " + (mainImage === laptop.images[2] ? "border-yellow-300" : "border-white/10")}
              />
            </div>
          </div>

          {/* RIGHT: Details */}
          <div>

            {/* Badge */}
            <span className={"text-xs font-bold px-3 py-1 rounded-md " + laptop.badge_color}>
              {laptop.badge}
            </span>

            {/* Title */}
            <h1
              className="text-3xl lg:text-4xl font-extrabold mt-4 mb-2 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {laptop.product_name}
            </h1>

            {/* Brand */}
            <p className="text-white/40 mb-4 text-sm uppercase tracking-widest">
              {laptop.brand}
            </p>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-3xl font-bold text-yellow-300"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {formatPrice(laptop.product_price)}
              </span>
              {laptop.old_price > laptop.product_price && (
                <>
                  <span className="line-through text-white/30 text-lg">
                    {formatPrice(laptop.old_price)}
                  </span>
                  <span className="text-sm bg-yellow-300 text-black px-2 py-1 rounded font-bold">
                    -{discount(laptop.old_price, laptop.product_price)}%
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-white/60 mb-6 leading-relaxed text-sm">
              {laptop.description}
            </p>

            {/* Specs */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-sm bg-white/5 text-white/60 px-3 py-1 rounded-md">{laptop.specs[0]}</span>
              <span className="text-sm bg-white/5 text-white/60 px-3 py-1 rounded-md">{laptop.specs[1]}</span>
              <span className="text-sm bg-white/5 text-white/60 px-3 py-1 rounded-md">{laptop.specs[2]}</span>
              <span className="text-sm bg-white/5 text-white/60 px-3 py-1 rounded-md">{laptop.specs[3]}</span>
              <span className="text-sm bg-white/5 text-white/60 px-3 py-1 rounded-md">{laptop.specs[4]}</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => alert("Added to cart (demo)")}
                className="bg-yellow-300 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:scale-105 transition-all duration-200"
              >
                Add to Cart
              </button>
              <button className="border border-white/20 px-8 py-3 rounded-xl hover:bg-white hover:text-black transition-all duration-200 font-semibold">
                Buy Now
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/40">
              <span>✔ Free Delivery</span>
              <span>✔ 1 Year Warranty</span>
              <span>✔ Secure Payment</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;