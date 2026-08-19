import { Link, useNavigate } from 'react-router-dom';
import {
    validateName,
    validateEmail,
    validatePassword,
} from "../../utils/authValidation";
import { useState } from 'react';
import api from "../../services/api";

function RegisterForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({})
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });

        setErrors({
            ...errors,
            [e.target.id]: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newErrors = {};

        const nameError = validateName(formData.name);
        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);

        if (nameError) newErrors.name = nameError;
        if (emailError) newErrors.email = emailError;
        if (passwordError) newErrors.password = passwordError;

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        try {
            const response = await api.post(
                "/auth/register",
                {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                }
            );
            console.log("REGISTER SUCCESS:", response.data);
            navigate("/login");

        } catch (error) {
            console.log(error.response?.data?.message);
        }
    };

    return (
        <section className="flex w-full md:w-1/2 flex-col justify-center items-center p-6">
            <div className="w-full max-w-md">
                <div className="mb-8 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-900">Sign up your account</h1>
                    <p className="mt-2 text-sm text-gray-500">Create an account to get started</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
                    <div className="flex flex-col gap-y-1.5">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="John Doe"
                            className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col gap-y-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            id="email"
                            type="email"
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
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
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

                    <button
                        type="submit"
                        className="w-full py-3 mt-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-md transition-colors cursor-pointer text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                    >
                        Register
                    </button>
                </form>

                <div className="mt-8 text-center border-t border-gray-100 pt-6">
                    <p className="text-sm text-gray-600">
                        Do you have an account?{" "}
                        <Link
                            to="/login"
                            className="font-semibold text-amber-600 hover:underline hover:text-amber-700 transition-colors"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default RegisterForm;