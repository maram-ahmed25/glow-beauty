import { useNavigate, Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <section className="min-h-screen bg-[#FAF6F0] flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 sm:p-10">

                <h1 className="text-3xl font-bold text-[#512A3A] text-center mb-8">
                    Welcome Back
                </h1>

                <form className="space-y-5" onSubmit={handleSubmit}>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-[#302A2B] mb-2"
                        >
                            Email Address
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            className="w-full rounded-lg border border-[#D8CBBF] px-4 py-3 text-[#302A2B] outline-none transition focus:border-[#512A3A] focus:ring-2 focus:ring-[#512A3A]/20"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-[#302A2B] mb-2"
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            className="w-full rounded-lg border border-[#D8CBBF] px-4 py-3 text-[#302A2B] outline-none transition focus:border-[#512A3A] focus:ring-2 focus:ring-[#512A3A]/20"
                        />
                    </div>

                    <p className="text-sm text-center text-[#302A2B] pt-2">
                        New here?{" "}
                        <Link
                            to="/Register"
                            className="font-semibold text-[#512A3A] hover:text-[#C2A36B] transition"
                        >
                            Register
                        </Link>
                    </p>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-[#512A3A] py-3 font-semibold text-white transition duration-300 hover:bg-[#6B394D] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#512A3A]/40"
                    >
                        Login
                    </button>

                </form>
            </div>
        </section>
    );
}

export default Login;
