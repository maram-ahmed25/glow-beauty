
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetails({ cart, setCart }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const [recommendedError, setRecommendedError] = useState("");

    // Load the selected product from the allowed products
    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            setError("");
            setProduct(null);

            try {
                const response = await fetch(
                    "https://dummyjson.com/products"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await response.json();

                const allowedProducts = data.products
                    .filter(
                        (item) =>
                            item.category === "beauty" ||
                            item.category === "fragrances"
                    )
                    .slice(0, 10);

                const selectedProduct = allowedProducts.find(
                    (item) => item.id === Number(id)
                );

                if (!selectedProduct) {
                    throw new Error("Product not found");
                }

                setProduct(selectedProduct);
            } catch (error) {
                console.error(error);

                setError(
                    "Product not found or couldn't be loaded. Please try again."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    // Load the allowed products for recommendations
    useEffect(() => {
        const fetchRecommendedProducts = async () => {
            try {
                const response = await fetch(
                    "https://dummyjson.com/products"
                );

                if (!response.ok) {
                    throw new Error(
                        "Failed to fetch recommended products"
                    );
                }

                const data = await response.json();

                const allowedProducts = data.products
                    .filter(
                        (item) =>
                            item.category === "beauty" ||
                            item.category === "fragrances"
                    )
                    .slice(0, 10);

                setRecommendedProducts(allowedProducts);
            } catch (error) {
                console.error(error);

                setRecommendedError(
                    "Couldn't load recommended products. Please try again."
                );
            }
        };

        fetchRecommendedProducts();
    }, []);

    const filteredProducts = recommendedProducts.filter(
        (item) => item.id !== Number(id)
    );

    // Loading state
    if (loading) {
        return (
            <div className="bg-[#FAF6F0] min-h-screen flex items-center justify-center">
                <p className="text-[#512A3A] text-lg font-semibold">
                    Loading product details...
                </p>
            </div>
        );
    }

    // Error state
    if (error || !product) {
        return (
            <div className="bg-[#FAF6F0] min-h-screen flex items-center justify-center px-6">
                <p className="text-[#512A3A] text-lg font-semibold text-center">
                    {error || "Product not found."}
                </p>
            </div>
        );
    }

    // Add the current product to cart
    const handleAddToCart = () => {
        setCart((currentCart) => {
            const existingProduct = currentCart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                return currentCart.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: (item.quantity || 1) + 1,
                        }
                        : item
                );
            }

            return [
                ...currentCart,
                { ...product, quantity: 1 },
            ];
        });
    };

    // Add a recommended product to cart
    const handleRecommendedAddToCart = (item) => {
        setCart((currentCart) => {
            const existingProduct = currentCart.find(
                (cartItem) => cartItem.id === item.id
            );

            if (existingProduct) {
                return currentCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? {
                            ...cartItem,
                            quantity: (cartItem.quantity || 1) + 1,
                        }
                        : cartItem
                );
            }

            return [
                ...currentCart,
                { ...item, quantity: 1 },
            ];
        });
    };

    return (
        <div className="bg-[#FAF6F0] min-h-screen px-6 py-12">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Current product information */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-[#C2A36B] mb-3">
                            Product Details
                        </p>

                        <h1 className="text-3xl md:text-4xl font-bold text-[#512A3A] mb-4">
                            {product.title}
                        </h1>

                        <p className="text-2xl font-bold text-[#512A3A] mb-6">
                            ${product.price}
                        </p>

                        <p className="text-[#302A2B] text-base leading-7 mb-6">
                            {product.description}
                        </p>

                        <button
                            onClick={handleAddToCart}
                            className="bg-[#512A3A] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#C2A36B] hover:text-[#302A2B] transition-colors duration-300"
                        >
                            Add To Cart
                        </button>
                    </div>

                    {/* Current product image */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full max-w-md mx-auto object-contain"
                        />
                    </div>

                    {/* Recommended products */}
                    <div className="mt-16 md:col-span-2">
                        <h2 className="text-2xl font-bold text-[#512A3A] mb-3">
                            You May Also Like
                        </h2>

                        {recommendedError ? (
                            <p className="text-[#512A3A]">
                                {recommendedError}
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {filteredProducts.slice(0, 4).map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white rounded-xl p-4 shadow-sm"
                                    >
                                        <img
                                            onClick={() =>
                                                navigate(`/products/${item.id}`)
                                            }
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="w-full h-40 object-contain cursor-pointer"
                                        />

                                        <h3
                                            onClick={() =>
                                                navigate(`/products/${item.id}`)
                                            }
                                            className="text-[#302A2B] font-semibold mt-3 cursor-pointer hover:text-[#512A3A] transition-colors duration-300 h-14"
                                        >
                                            {item.title}
                                        </h3>

                                        <p className="text-[#512A3A] font-bold mt-2">
                                            ${item.price}
                                        </p>

                                        <button
                                            onClick={() =>
                                                handleRecommendedAddToCart(item)
                                            }
                                            className="w-full bg-[#512A3A] text-white py-2 rounded-lg mt-4 hover:bg-[#C2A36B] hover:text-[#302A2B] transition-colors duration-300"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
