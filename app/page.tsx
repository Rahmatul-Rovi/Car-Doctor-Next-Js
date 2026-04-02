import Image from "next/image";
import ServicesSection from "./components/ServicesSection";
import AboutPage from "./about/page"; 
import BlogPage from "./blog/page";

export default function Home() {
  
  // ব্যানারের ডাটাগুলো এখানে গুছিয়ে রাখলাম যাতে কোড পরিষ্কার থাকে
  const bannerData = [
    { id: 1, next: "#slide2", prev: "#slide4", img: "/assets/images/banner/1.jpg" },
    { id: 2, next: "#slide3", prev: "#slide1", img: "/assets/images/banner/2.jpg" },
    { id: 3, next: "#slide4", prev: "#slide2", img: "/assets/images/banner/3.jpg" },
    { id: 4, next: "#slide1", prev: "#slide3", img: "/assets/images/banner/4.jpg" },
  ];

  return (
    <main className="min-h-screen">
      {/* ১. প্রফেশনাল ব্যানার সেকশন (Carousel) */}
      <div className="container mx-auto mt-6">
        <div className="carousel w-full h-[600px] rounded-xl overflow-hidden">
          {bannerData.map((slide) => (
            <div key={slide.id} id={`slide${slide.id}`} className="carousel-item relative w-full">
              <Image 
                src={slide.img} 
                fill 
                className="w-full object-cover" 
                alt="Banner"
              />
              {/* টেক্সট ওভারলে এবং গ্রেডিয়েন্ট */}
              <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] pl-20">
                <div className="text-white space-y-7 w-1/2">
                  <h2 className="text-6xl font-bold leading-tight">
                    Affordable <br /> Price For Car <br /> Servicing
                  </h2>
                  <p className="text-lg">
                    There are many variations of passages of available, but the majority have suffered alteration in some form.
                  </p>
                  <div className="flex gap-5">
                    <button className="btn bg-[#FF3811] border-none text-white px-8 hover:bg-red-700 transition-all">
                      Discover More
                    </button>
                    <button className="btn btn-outline text-white border-white px-8 hover:bg-[#FF3811] hover:border-[#FF3811] transition-all">
                      Latest Project
                    </button>
                  </div>
                </div>
              </div>
              
              {/* নেভিগেশন বাটন (❮ ❯) */}
              <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-12 bottom-0">
                <a href={slide.prev} className="btn btn-circle bg-white/20 border-none text-white hover:bg-[#FF3811] transition-all">❮</a> 
                <a href={slide.next} className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ২. অ্যাবাউট সেকশন */}
      <section id="about" className="py-10">
        <AboutPage />
      </section>

      {/* ৩. সার্ভিস সেকশন */}
      <section id="services" className="py-10">
        <ServicesSection />
      </section>

      {/* ৪. ব্লগ সেকশন */}
      <section id="blog" className="py-10">
        <BlogPage />
      </section>
    </main>
  );
}