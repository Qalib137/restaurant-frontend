import { Link, useNavigate } from "react-router-dom";
import {
    validateEmail,
    validatePassword,
} from "../../utils/authValidation";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/features/authSlice";
import api from "../../services/api";
import { useState } from "react";

function LoginForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });

        setErrors({
            ...errors,
            [e.target.id]: "",
            general: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newErrors = {};

        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);

        if (emailError) newErrors.email = emailError;
        if (passwordError) newErrors.password = passwordError;

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        try {
            const response = await api.post("/auth/login", {
                email: formData.email,
                password: formData.password,
            });

            dispatch(
                login({
                    token: response.data.token,
                    user: response.data.foundUser,
                })
            );

            navigate("/");
        } catch (error) {
            setErrors({
                general:
                    error.response?.data?.message ||
                    "Email və ya şifrə yanlışdır.",
            });
        }
    };

    return (
        <section className="flex w-full md:w-1/2 flex-col justify-center items-center p-6">
            <div className="w-full max-w-md">

                <div className="mb-8 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Login to your account
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Welcome back! Login with Email
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">

                    <div className="flex flex-col gap-y-1.5">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>

                        <input
                            type="email"
                            id="email"
                            placeholder="hello@example.com"
                            className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        {errors.email && (
                            <p className="text-red-500 text-sm">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col gap-y-1.5">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition"
                            value={formData.password}
                            onChange={handleChange}
                        />

                        {errors.password && (
                            <p className="text-red-500 text-sm">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {errors.general && (
                        <p className="text-red-500 text-sm text-center -mt-2">
                            {errors.general}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 mt-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-md transition-colors cursor-pointer text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-8 text-center border-t border-gray-100 pt-6">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}

                        <Link
                            to="/register"
                            className="font-semibold text-amber-600 hover:underline hover:text-amber-700 transition-colors"
                        >
                            Create account
                        </Link>
                    </p>
                </div>

            </div>
        </section>
    );
}

export default LoginForm;