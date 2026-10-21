function Contact() {
    return (
        <main className="min-h-screen bg-[#FAF6F0] px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-[#512A3A] text-center mb-12">
                    Contact Us
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="h-full `min-h-[400px]`">
                        <img
                            src="/images/contact.jpg"
                            alt="Glow Beauty makeup and perfumes"
                            className="w-full h-full `min-h-[400px]` object-cover rounded-2xl"
                        />
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-bold text-[#512A3A] mb-6">
                            Send Us a Message
                        </h2>

                        <form
                            className="space-y-5"
                            onSubmit={(event) => {
                                event.preventDefault();
                                alert("Thank you for contacting Glow Beauty!");
                            }}
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-[#302A2B] mb-2"
                                >
                                    Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                    className="w-full rounded-lg border border-[#D8CBBF] bg-white px-4 py-3 outline-none focus:border-[#512A3A] transition-colors"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-[#302A2B] mb-2"
                                >
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full rounded-lg border border-[#D8CBBF] bg-white px-4 py-3 outline-none focus:border-[#512A3A] transition-colors"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-[#302A2B] mb-2"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Write your message here..."
                                    required
                                    className="w-full rounded-lg border border-[#D8CBBF] bg-white px-4 py-3 outline-none focus:border-[#512A3A] transition-colors resize-y"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-[#512A3A] px-6 py-3 font-semibold text-white hover:bg-[#40202D] transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;