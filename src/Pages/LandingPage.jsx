import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { mockArticles } from "../data/mockData";

function LandingPage() {
    const [visibleCount, setVisibleCount] = useState(3);

    const handleReadMore = () => {
        setVisibleCount((prev) => prev + 3);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16">
                {/* Left Content */}
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 leading-tight">
                        Share Your Ideas <br /> with the World 🌍
                    </h1>
                    <p className="text-gray-600 text-lg mt-4">
                        Write, inspire, and connect with thousands of readers. Create blogs,
                        explore stories, and grow your digital voice.
                    </p>

                    <div className="mt-8 flex space-x-4">
                        <Link
                            to="/write"
                            className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center"
                        >
                            Start Writing <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            to="/blogs"
                            className="border-2 border-blue-800 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition"
                        >
                            Read Blogs
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
                        alt="Blogging Illustration"
                        className="w-full md:w-4/5 rounded-2xl shadow-lg"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-white py-16 px-8 md:px-20 text-center">
                <h2 className="text-3xl font-bold text-blue-800 mb-10">
                    Why Choose MyBlog?
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">✍ Easy Writing</h3>
                        <p className="text-gray-600">
                            Focus on your ideas, not the formatting. Our distraction-free
                            editor lets you write, edit, and publish blogs smoothly.
                        </p>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">🌐 Share Globally</h3>
                        <p className="text-gray-600">
                            Reach a worldwide audience instantly. Share across platforms and
                            let your ideas inspire readers everywhere.
                        </p>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">💬 Engage Readers</h3>
                        <p className="text-gray-600">
                            Connect through comments, likes, and discussions. Build your own
                            community around your blogs.
                        </p>
                    </div>
                </div>
            </section>


            {/* Blog Feed + Sidebar */}
            <section className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Articles */}
                <div className="lg:col-span-2 space-y-6">
                    {mockArticles.slice(0, visibleCount).map((article) => (
                        <div
                            key={article.id}
                            className="flex flex-col md:flex-row bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                        >
                            {article.image && (
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full md:w-64 h-48 object-cover"
                                />
                            )}
                            <div className="p-4 flex flex-col justify-center">
                                <p className="text-sm text-gray-500">{article.category}</p>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    {article.readTime} min read • {article.publishedDate}
                                </p>
                            </div>
                        </div>
                    ))}

                    {visibleCount < mockArticles.length && (
                        <button
                            onClick={handleReadMore}
                            className="border border-blue-700 text-blue-700 px-5 py-2 rounded-md hover:bg-blue-700 hover:text-white transition"
                        >
                            Read more articles →
                        </button>
                    )}
                </div>

                {/* Right Sidebar */}
                <aside className="space-y-10 sticky top-10 self-start">
                    {/* Recommended Topics */}
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-3">
                            RECOMMENDED TOPICS
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Programming",
                                "Design",
                                "Technology",
                                "Productivity",
                                "Self Improvement",
                                "Writing",
                                "Relationships",
                                "Machine Learning",
                            ].map((topic) => (
                                <span
                                    key={topic}
                                    className="px-3 py-1 border border-green-600 text-green-600 rounded-full text-sm cursor-pointer hover:bg-green-600 hover:text-white transition"
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                        <button className="mt-3 text-green-700 text-sm font-semibold hover:underline">
                            See more topics →
                        </button>
                    </div>

                    {/* Who to Follow */}
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-3">WHO TO FOLLOW</h4>
                        <div className="space-y-4">
                            {mockArticles.slice(0, 3).map((article) => (
                                <div
                                    key={article.author.id}
                                    className="flex items-center justify-between bg-blue-50 p-3 rounded-lg"
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={article.author.avatar}
                                            alt={article.author.name}
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <div>
                                            <p className="font-medium text-gray-800">
                                                {article.author.name}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {article.author.bio}
                                            </p>
                                        </div>
                                    </div>
                                    <button className="border border-blue-700 text-blue-700 px-3 py-1 text-sm rounded-md hover:bg-blue-700 hover:text-white transition">
                                        Follow
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button className="mt-3 text-green-700 text-sm font-semibold hover:underline">
                            See more suggestions →
                        </button>
                    </div>
                </aside>
            </section>

            {/* CTA Footer */}
            <section className="bg-[#f7f4ed] text-black text-center py-12 px-6">
                <h2 className="text-3xl font-bold mb-4">
                    Start Your Blogging Journey Today!
                </h2>
                <p className="mb-6 text-gray-700">
                    Join the growing community of creators and thinkers on MyBlog.
                </p>
                <Link
                    to="/signup"
                    className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                    Get Started
                </Link>
            </section>
        </div>
    );
}

export default LandingPage;