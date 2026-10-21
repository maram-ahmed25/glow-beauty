import heroImage from "../assets/hero-beauty.jpg";

function Hero() {
    return (
        <section  id="home" className="bg-[#FAF6F0] px-6 py-12 md:py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-[#C2A36B] mb-3">
                        Welcome to Glow Beauty
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold text-[#512A3A] mb-5 leading-tight font-display">
                        Discover Your Beauty
                    </h1>

                    <p className="text-base md:text-lg text-[#302A2B] mb-8 leading-relaxed">
                        Explore makeup and fragrances made for your style.
                        Find your favorites and let your beauty shine.
                    </p>

                    <a
                        href="#products"
                        className="inline-block bg-[#512A3A] text-white px-7 py-3 rounded-lg font-medium hover:bg-[#C2A36B] hover:text-[#302A2B] transition-colors duration-300"
                    >
                        Shop Now
                    </a>
                </div>


                <div className="bg-white rounded-3xl p-3 shadow-sm">
                    <img
                        src={heroImage}
                        alt="Makeup and perfume collection"
                        className="w-full h-72 md:h-96 object-cover rounded-2xl"
                    />
                </div>

            </div>
        </section>
    );
}

export default Hero;