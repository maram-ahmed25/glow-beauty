import { useNavigate } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
    const navigate = useNavigate();

    return (
        <div className="bg-white border border-[#D8CBBF] rounded-2xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

            <div className="bg-[#FAF6F0] rounded-xl p-3 mb-4">
                <img
                    onClick={() => navigate(`/products/${product.id}`)}
                    className="w-full h-48 object-contain hover:scale-105 transition-transform duration-300"
                    src={product.thumbnail}
                    alt={product.title}
                    loading="lazy"
                    decoding="async"
                />
            </div>

            <h2
                onClick={() => navigate(`/products/${product.id}`)}
                className="text-lg font-semibold text-[#302A2B] mb-2 line-clamp-2 font-display cursor-pointer">
                {product.title}
            </h2>

            <p className="text-xl font-bold text-[#512A3A] mb-4">
                ${product.price}
            </p>
            <button
                onClick={onAddToCart}
                className="w-full bg-[#512A3A] text-white py-2.5 rounded-lg font-medium hover:bg-[#C2A36B] hover:text-[#302A2B] transition-colors duration-300"
            >Add To Cart</button>
        </div>
    );
}

export default ProductCard;