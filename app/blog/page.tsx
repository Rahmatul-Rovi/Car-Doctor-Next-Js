import React from 'react';
import Image from 'next/image';

const BlogPage = () => {
    const blogs = [
        { id: 1, title: "Car Engine Maintenance Tips", date: "Jan 10, 2026", img: "/assets/images/banner/2.jpg", desc: "Learn how to keep your engine running smoothly for years." },
        { id: 2, title: "When to Change Your Tires", date: "Feb 15, 2026", img: "/assets/images/banner/3.jpg", desc: "Safety first! Know the signs of worn-out tires." },
        { id: 3, title: "Best Engine Oil for Performance", date: "Mar 05, 2026", img: "/assets/images/banner/4.jpg", desc: "Choosing the right oil can boost your car's efficiency." },
    ];

    return (
        <div className="container mx-auto my-12 px-4">
            {/* Banner */}
            <div className="relative w-full h-60 rounded-xl overflow-hidden mb-12">
                <Image src="/assets/images/banner/1.jpg" alt="Blog Banner" fill className="object-cover opacity-80 bg-black" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <h1 className="text-5xl font-bold text-white">Our Blog</h1>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogs.map(blog => (
                    <div key={blog.id} className="card bg-base-100 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                        <figure className="px-4 pt-4">
                            <img src={blog.img} alt="blog" className="rounded-xl h-52 w-full object-cover" />
                        </figure>
                        <div className="card-body">
                            <p className="text-[#FF3811] font-semibold">{blog.date}</p>
                            <h2 className="card-title text-2xl font-bold">{blog.title}</h2>
                            <p className="text-gray-500">{blog.desc}</p>
                            <div className="card-actions mt-4">
                                <button className="btn btn-sm bg-[#FF3811] border-none text-white hover:bg-red-700">Read More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;