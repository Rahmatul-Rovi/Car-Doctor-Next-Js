// components/Blog.tsx
export default function Blog() {
  const blogs = [
    { id: 1, title: "Car Engine Maintenance", date: "Jan 10, 2026", img: "/assets/images/banner/2.jpg" },
    { id: 2, title: "Tire Replacement Guide", date: "Feb 15, 2026", img: "/assets/images/banner/3.jpg" },
    { id: 3, title: "Best Engine Oil for SUV", date: "Mar 05, 2026", img: "/assets/images/banner/4.jpg" },
  ];

  return (
    <div className="container mx-auto my-20 px-4">
      <div className="text-center mb-10">
        <h3 className="text-[#FF3811] font-bold">Blog</h3>
        <h2 className="text-4xl font-bold text-[#151515]">Our Recent News</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <div key={blog.id} className="card bg-base-100 shadow-xl border border-gray-100">
            <figure className="px-4 pt-4">
              <img src={blog.img} alt="blog" className="rounded-xl h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
              <p className="text-[#FF3811] font-medium">{blog.date}</p>
              <h2 className="card-title font-bold">{blog.title}</h2>
              <div className="card-actions mt-4">
                <button className="text-[#FF3811] font-bold">Read More ➜</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}