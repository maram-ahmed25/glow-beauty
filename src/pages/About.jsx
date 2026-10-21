function About() {
    const categories = [
        {
            title: "Face Makeup",
            description: "Discover beauty essentials for a flawless look.",
            image: "/images/face-makeup.jpg",
            alt: "Face makeup products",
        },
        {
            title: "Eye Makeup",
            description: "Explore mascara and eyeshadow for beautiful eyes.",
            image: "/images/eye-makeup.jpg",
            alt: "Eye makeup products",
        },
        {
            title: "Lips & Nails",
            description: "Add the perfect finishing touch to your beauty look.",
            image: "/images/lips-nails.jpg",
            alt: "Lipstick and beauty products",
        },
        {
            title: "Women's Fragrances",
            description: "Discover elegant fragrances that express your personality.",
            image: "/images/perfume.jpg",
            alt: "Women's perfume bottles",
        },
    ];

    return (
        <main className="min-h-screen bg-[#FAF6F0] px-6 py-16 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* About Us */}
                <section className="text-center max-w-4xl mx-auto mb-16">
                    <p className="text-sm font-semibold tracking-[0.25em] text-[#C2A36B] mb-4">
                        DISCOVER OUR STORY
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold text-[#512A3A] mb-6 font-display">
                        About Us
                    </h1>

                    <p className="text-[#302A2B] text-lg leading-8">
                        Glow Beauty is your destination for makeup and fragrances,
                        offering a carefully selected range of beauty products to
                        help you look and feel your best. From everyday makeup
                        essentials to elegant women's perfumes, we bring together
                        quality, beauty, and style in one place. Our goal is to help
                        every woman express her personality, discover her favorite
                        products, and feel confident in her own beauty.
                    </p>
                </section>

                {/* Our Products */}
                <section>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#512A3A] mb-4 font-display">
                            Our Products
                        </h2>

                        <div className="w-16 h-1 bg-[#C2A36B] mx-auto rounded-full"></div>
                    </div>

                    {/* Product Categories */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((category) => (
                            <article
                                key={category.title}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <img
                                    src={category.image}
                                    alt={category.alt}
                                    className="w-full h-56 object-cover"
                                    loading="lazy"
                                />

                                <div className="p-5 text-center">
                                    <h3 className="text-xl font-semibold text-[#512A3A] mb-2">
                                        {category.title}
                                    </h3>

                                    <p className="text-sm text-[#302A2B] leading-6">
                                        {category.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}

export default About;