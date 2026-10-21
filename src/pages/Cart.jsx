import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {
    const navigate = useNavigate();

    const updateQuantity = (productId, change) => {
        setCart((currentCart) =>
            currentCart.map((product) =>
                product.id === productId
                    ? {
                        ...product,
                        quantity: Math.max(
                            1,
                            (product.quantity || 1) + change
                        ),
                    }
                    : product
            )
        );
    };

    const removeProduct = (productId) => {
        setCart((currentCart) =>
            currentCart.filter((product) => product.id !== productId)
        );
    };

    const totalPrice = cart.reduce(
        (total, product) =>
            total + product.price * (product.quantity || 1),
        0
    );

    return (
        <section className="min-h-screen bg-[#FAF6F0] px-6 py-12">
            <div className="mx-auto max-w-5xl">
                <h1 className="mb-6 font-display text-3xl font-bold text-[#512A3A] md:text-4xl">
                    Shopping Cart
                </h1>

                {cart.length > 0 && (
                    <button
                        type="button"
                        onClick={() => setCart([])}
                        className="mb-6 rounded-lg bg-[#512A3A] px-5 py-2.5 text-white transition-colors hover:bg-[#C2A36B]"
                    >
                        Clear Cart
                    </button>
                )}

                {cart.length === 0 ? (
                    <p className="text-lg text-[#302A2B]">
                        Your cart is empty.
                    </p>
                ) : (
                    <>
                        {cart.map((product) => (
                            <div
                                key={product.id}
                                className="mb-4 flex items-center gap-4 rounded-xl border border-[#D8CBBF] bg-white p-4 shadow-sm"
                            >
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="h-24 w-24 rounded-lg bg-[#FAF6F0] object-contain"
                                />

                                <div className="flex-1">
                                    <h2 className="text-lg font-semibold text-[#302A2B]">
                                        {product.title}
                                    </h2>

                                    <p className="mt-2 text-lg font-bold text-[#512A3A]">
                                        ${product.price.toFixed(2)}
                                    </p>

                                    <div className="mt-3 flex items-center gap-3">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                updateQuantity(product.id, -1)
                                            }
                                            className="h-8 w-8 rounded-md border border-[#D8CBBF] text-[#512A3A] hover:bg-[#FAF6F0]"
                                            aria-label={`Decrease quantity of ${product.title}`}
                                        >
                                            −
                                        </button>

                                        <span className="font-medium text-[#302A2B]">
                                            {product.quantity || 1}
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                updateQuantity(product.id, 1)
                                            }
                                            className="h-8 w-8 rounded-md border border-[#D8CBBF] text-[#512A3A] hover:bg-[#FAF6F0]"
                                            aria-label={`Increase quantity of ${product.title}`}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            removeProduct(product.id)
                                        }
                                        className="mt-3 text-sm font-medium text-[#512A3A] transition-colors hover:text-[#C2A36B]"
                                    >
                                        Remove
                                    </button>
                                </div>

                                <p className="font-semibold text-[#302A2B]">
                                    $
                                    {(
                                        product.price *
                                        (product.quantity || 1)
                                    ).toFixed(2)}
                                </p>
                            </div>
                        ))}

                        <div className="mt-8 border-t border-[#D8CBBF] pt-6 text-right">
                            <p className="text-xl font-bold text-[#512A3A]">
                                Total: ${totalPrice.toFixed(2)}
                            </p>

                            <button
                                type="button"
                                onClick={() => navigate("/checkout")
                                }
                                className="mt-4 rounded-lg bg-[#512A3A] px-6 py-3 font-medium text-white transition-colors hover:bg-[#C2A36B]"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default Cart;
