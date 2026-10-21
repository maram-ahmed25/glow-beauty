
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function Products({ cart, setCart }) {
    const [products, setProducts] = useState([]);
    const [showToast, setShowToast] = useState(false);


    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [showToast]);


    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(
                    data.products
                        .filter(
                            (product) =>
                                product.category === "beauty" ||
                                product.category === "fragrances"
                        )
                        .slice(0, 10)
                );
            });
    }, []);

    return (
        <section
            id="products"
            className="bg-white px-6 py-12 md:py-16"
        >
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#512A3A] mb-3 font-display">
                    Beauty & Fragrances
                </h1>

                <p className="text-[#302A2B] mb-8">
                    Discover your favorites and find your beauty essentials.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={() => {
                                setCart((currentCart) => {
                                    const existingProduct =
                                        currentCart.find(
                                            (item) => item.id === product.id
                                        );

                                    if (existingProduct) {
                                        return currentCart.map((item) =>
                                            item.id === product.id
                                                ? {
                                                    ...item,
                                                    quantity:
                                                        (item.quantity || 1) + 1,
                                                }
                                                : item
                                        );
                                    }

                                    return [
                                        ...currentCart,
                                        { ...product, quantity: 1 },
                                    ];
                                });

                                setShowToast(true);
                            }}
                        />
                    ))}
                </div>
            </div>


            {showToast && (
                <div className="fixed top-5 right-5 z-50 flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-lg border border-green-100">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                        ✓
                    </span>

                    <span className="font-medium text-[#302A2B]">
                        Added to cart
                    </span>
                </div>
            )}

        </section>
    );
}

export default Products;
