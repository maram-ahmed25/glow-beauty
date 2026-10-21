
function Checkout({ cart = [] }) {
    const subtotal = cart.reduce(
        (total, product) =>
            total + product.price * (product.quantity || 1),
        0
    );

    const shipping = cart.length > 0 ? 30 : 0;

    const orderTotal = subtotal + shipping;

    const handleSubmit = (event) => {
        event.preventDefault();

        if (cart.length === 0) {
            alert("Your cart is empty. Add products first.");
            return;
        }

        alert("Demo checkout completed. No payment was processed.");
    };

    return (
        <section className="min-h-screen bg-[#FAF6F0] px-4 py-10 sm:px-6 lg:py-12">
            <div className="mx-auto max-w-7xl">

                {/* Page Heading */}
                <div className="mb-8">
                    <h1 className="mb-3 font-display text-3xl font-bold text-[#512A3A] md:text-4xl">
                        Checkout
                    </h1>

                    <p className="text-[#302A2B]">
                        Complete your order details.
                    </p>
                </div>

                {/* Main Form */}
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

                        {/* Left Column */}
                        <div className="space-y-6 lg:col-span-2">

                            {/* Billing Address */}
                            <div className="rounded-xl border border-[#D8CBBF] bg-white p-5 shadow-sm sm:p-6">
                                <h2 className="mb-6 text-xl font-semibold text-[#512A3A]">
                                    Billing Address
                                </h2>

                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                                    <div>
                                        <label
                                            htmlFor="firstName"
                                            className="mb-2 block text-sm font-medium text-[#302A2B]"
                                        >
                                            First Name
                                        </label>

                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            autoComplete="given-name"
                                            placeholder="Enter your first name"
                                            required
                                            className="w-full rounded-lg border border-[#D8CBBF] px-4 py-3 text-[#302A2B] outline-none transition focus:border-[#512A3A] focus:ring-2 focus:ring-[#C2A36B]/30"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="lastName"
                                            className="mb-2 block text-sm font-medium text-[#302A2B]"
                                        >
                                            Last Name
                                        </label>

                                        <input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            autoComplete="family-name"
                                            placeholder="Enter your last name"
                                            required
                                            className="w-full rounded-lg border border-[#D8CBBF] px-4 py-3 text-[#302A2B] outline-none transition focus:border-[#512A3A] focus:ring-2 focus:ring-[#C2A36B]/30"
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-medium text-[#302A2B]"
                                        >
                                            Email
                                        </label>

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            placeholder="Enter your email"
                                            required
                                            className="w-full rounded-lg border border-[#D8CBBF] px-4 py-3 text-[#302A2B] outline-none transition focus:border-[#512A3A] focus:ring-2 focus:ring-[#C2A36B]/30"
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="address"
                                            className="mb-2 block text-sm font-medium text-[#302A2B]"
                                        >
                                            Address
                                        </label>

                                        <input
                                            id="address"
                                            name="address"
                                            type="text"
                                            autoComplete="street-address"
                                            placeholder="Enter your street address"
                                            required
                                            className="w-full rounded-lg border border-[#D8CBBF] px-4 py-3 text-[#302A2B] outline-none transition focus:border-[#512A3A] focus:ring-2 focus:ring-[#C2A36B]/30"
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="address2"
                                            className="mb-2 block text-sm font-medium text-[#302A2B]"
                                        >
                                            Address 2 (Optional)
                                        </label>

                                        <input
                                            id="address2"
                                            name="address2"
                                            type="text"
                                            autoComplete="address-line2"
                                            placeholder="Apartment, floor, etc."
                                            className="w-full rounded-lg border border-[#D8CBBF] px-4 py-3 text-[#302A2B] outline-none transition focus:border-[#512A3A] focus:ring-2 focus:ring-[#C2A36B]/30"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="country"
                                            className="mb-2 block text-sm font-medium text-[#302A2B]"
                                        >
                                            Country
                                        </label>

                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            defaultValue=""
                                            required
                                            className="w-full rounded-lg border border-[#D8CBBF] bg-white px-4 py-3 text-[#302A2B] outline-none transition focus:border-[#512A3A] focus:ring-2 focus:ring-[#C2A36B]/30"
                                        >
                                            <option value="" disabled>
                                                Select your country
                                            </option>

                                            <option value="Egypt">Egypt</option>
                                            <option value="Saudi Arabia">
                                                Saudi Arabia
                                            </option>
                                            <option value="United Arab Emirates">
                                                United Arab Emirates
                                            </option>
                                            <option value="United Kingdom">
                                                United Kingdom
                                            </option>
                                            <option value="United States">
                                                United States
                                            </option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="state"
                                            className="mb-2 block text-sm font-medium text-[#302A2B]"
                                        >
                                            State / Governorate
                                        </label>

                                        <input
                                            id="state"
                                            name="state"
                                            type="text"
                                            autoComplete="address-level1"
                                            placeholder="Enter your governorate"
                                            required
                                            className="w-full rounded-lg border border-[#D8CBBF] px-4 py-3 text-[#302A2B] outline-none transition focus:border-[#512A3A] focus:ring-2 focus:ring-[#C2A36B]/30"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="zipCode"
                                            className="mb-2 block text-sm font-medium text-[#302A2B]"
                                        >
                                            ZIP / Postal Code
                                        </label>

                                        <input
                                            id="zipCode"
                                            name="zipCode"
                                            type="text"
                                            inputMode="numeric"
                                            autoComplete="postal-code"
                                            placeholder="Enter postal code"
                                            required
                                            className="w-full rounded-lg border border-[#D8CBBF] px-4 py-3 text-[#302A2B] outline-none transition focus:border-[#512A3A] focus:ring-2 focus:ring-[#C2A36B]/30"
                                        />
                                    </div>

                                </div>
                            </div>

                            {/* Payment Details */}
                            <div className="rounded-xl border border-[#D8CBBF] bg-white p-5 shadow-sm sm:p-6">
                                <h2 className="mb-2 text-xl font-semibold text-[#512A3A]">
                                    Payment Details
                                </h2>

                                <p className="mb-6 text-sm text-[#302A2B]">
                                    Demo form only. Do not enter real card details.
                                </p>

                                <div className="space-y-5">

                                    <div>
                                        <label
                                            htmlFor="cardName"
                                            className="mb-2 block text-sm font-medium text-[#302A2B]"
                                        >
                                            Name on Card
                                        </label>

                                        <input
                                            id="cardName"
                                            name="cardName"
                                            type="text"
                                            autoComplete="cc-name"
                                            placeholder="Enter cardholder name"
                                            required
                                            className="w-full rounded-lg border border-[#D8CBBF] px-4 py-3 text-[#302A2B] outline-none transition focus:border-[#512A3A] focus:ring-2 focus:ring-[#C2A36B]/30"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="cardNumber"
                                            className="mb-2 block text-sm font-medium text-[#302A2B]"
                                        >
                                            Credit Card Number
                                        </label>

                                        <input
                                            id="cardNumber"
                                            name="cardNumber"
                                            type="text"
                                            inputMode="numeric"
                                            autoComplete="cc-number"
                                            placeholder="Use a dummy number for testing"
                                            required
                                            className="w-full rounded-lg border border-[#D8CBBF] px-4 py-3 text-[#302A2B] outline-none transition focus:border-[#512A3A] focus:ring-2 focus:ring-[#C2A36B]/30"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                                        <div>
                                            <label
                                                htmlFor="expiration"
                                                className="mb-2 block text-sm font-medium text-[#302A2B]"
                                            >
                                                Expiration Date
                                            </label>

                                            <input
                                                id="expiration"
                                                name="expiration"
                                                type="text"
                                                autoComplete="cc-exp"
                                                placeholder="MM/YY"
                                                required
                                                className="w-full rounded-lg border border-[#D8CBBF] px-4 py-3 text-[#302A2B] outline-none transition focus:border-[#512A3A] focus:ring-2 focus:ring-[#C2A36B]/30"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="cvv"
                                                className="mb-2 block text-sm font-medium text-[#302A2B]"
                                            >
                                                CVV
                                            </label>

                                            <input
                                                id="cvv"
                                                name="cvv"
                                                type="password"
                                                inputMode="numeric"
                                                autoComplete="cc-csc"
                                                placeholder="Dummy CVV"
                                                required
                                                className="w-full rounded-lg border border-[#D8CBBF] px-4 py-3 text-[#302A2B] outline-none transition focus:border-[#512A3A] focus:ring-2 focus:ring-[#C2A36B]/30"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <aside className="h-fit rounded-xl border border-[#D8CBBF] bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-6">
                            <h2 className="mb-6 text-xl font-semibold text-[#512A3A]">
                                Order Summary
                            </h2>

                            {cart.length === 0 ? (
                                <p className="text-sm text-[#302A2B]">
                                    Your cart is empty. Add products before checkout.
                                </p>
                            ) : (
                                <div className="space-y-4">
                                    {cart.map((product) => (
                                        <div
                                            key={product.id}
                                            className="flex items-start justify-between gap-3 border-b border-[#D8CBBF] pb-4"
                                        >
                                            <div className="min-w-0">
                                                <p className="`Warp-break-words` font-medium text-[#302A2B]">
                                                    {product.title}
                                                </p>

                                                <p className="mt-1 text-sm text-[#302A2B]">
                                                    Quantity: {product.quantity || 1}
                                                </p>
                                            </div>

                                            <p className="shrink-0 whitespace-nowrap font-semibold text-[#512A3A]">
                                                ${(product.price * (product.quantity || 1)).toFixed(2)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Price Summary */}
                            <div className="mt-6 space-y-4">
                                <div className="flex justify-between gap-3 text-sm text-[#302A2B]">
                                    <span>Products</span>
                                    <span className="shrink-0">
                                        ${subtotal.toFixed(2)}
                                    </span>
                                </div>

                                <div className="flex justify-between gap-3 text-sm text-[#302A2B]">
                                    <span>Shipping</span>
                                    <span className="shrink-0">
                                        ${shipping.toFixed(2)}
                                    </span>
                                </div>

                                <div className="flex justify-between gap-3 border-t border-[#D8CBBF] pt-4 text-lg font-bold text-[#512A3A]">
                                    <span>Total</span>
                                    <span className="shrink-0">
                                        ${orderTotal.toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={cart.length === 0}
                                className="mt-6 w-full rounded-lg bg-[#512A3A] px-5 py-3 font-medium text-white transition-colors hover:bg-[#C2A36B] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Continue to Checkout
                            </button>
                        </aside>

                    </div>
                </form>
            </div>
        </section>
    );
}

export default Checkout;
