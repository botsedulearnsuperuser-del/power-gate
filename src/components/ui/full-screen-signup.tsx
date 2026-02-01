"use client";

import { SunIcon as Sunburst } from "lucide-react";
import { useState } from "react";

interface FullScreenSignupProps {
    onLogin?: () => void;
}

export const FullScreenSignup = ({ onLogin }: FullScreenSignupProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateEmail = (value: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    const validatePassword = (value: string) => {
        return value.length >= 8;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let valid = true;

        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
            valid = false;
        } else {
            setEmailError("");
        }

        if (!validatePassword(password)) {
            setPasswordError("Password must be at least 8 characters.");
            valid = false;
        } else {
            setPasswordError("");
        }

        if (valid) {
            console.log("Form submitted!");
            console.log("Email:", email);
            if (onLogin) {
                onLogin();
            }
            setEmail("");
            setPassword("");
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center overflow-hidden bg-white p-4">
            <div className="w-full relative max-w-5xl overflow-hidden flex flex-col md:flex-row shadow-2xl rounded-3xl">
                {/* Background decorative elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 rounded-full opacity-80 blur-3xl"></div>
                    <div className="absolute bottom-10 left-20 w-32 h-20 bg-white rounded-full opacity-60"></div>
                </div>

                {/* Left Panel - Black */}
                <div className="bg-black text-white p-8 md:p-12 md:w-1/2 relative overflow-hidden flex items-center min-h-[400px] md:min-h-[600px]">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full"
                            style={{
                                background: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 100px)'
                            }}>
                        </div>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-medium leading-tight z-10 tracking-tight relative">
                        Design and dev partner for startups and founders.
                    </h1>
                </div>

                {/* Right Panel - Form */}
                <div className="p-8 md:p-12 md:w-1/2 flex flex-col bg-gray-50 relative min-h-[400px] md:min-h-[600px]">
                    <div className="flex flex-col items-start mb-8">
                        <div className="text-orange-500 mb-4">
                            <Sunburst className="h-10 w-10" />
                        </div>
                        <h2 className="text-3xl font-semibold mb-2 tracking-tight text-gray-900">
                            Get Started
                        </h2>
                        <p className="text-left text-gray-600">
                            Welcome to HextaStudio — Let's get started
                        </p>
                    </div>

                    <form
                        className="flex flex-col gap-4"
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="hi@hextastudio.in"
                                className={`text-sm w-full py-2.5 px-3 border rounded-lg focus:outline-none focus:ring-2 bg-white text-black focus:ring-orange-500 transition-all ${emailError ? "border-red-500" : "border-gray-300"
                                    }`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                aria-invalid={!!emailError}
                                aria-describedby="email-error"
                            />
                            {emailError && (
                                <p id="email-error" className="text-red-500 text-xs mt-1">
                                    {emailError}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-700">
                                Create new password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                className={`text-sm w-full py-2.5 px-3 border rounded-lg focus:outline-none focus:ring-2 bg-white text-black focus:ring-orange-500 transition-all ${passwordError ? "border-red-500" : "border-gray-300"
                                    }`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                aria-invalid={!!passwordError}
                                aria-describedby="password-error"
                            />
                            {passwordError && (
                                <p id="password-error" className="text-red-500 text-xs mt-1">
                                    {passwordError}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors mt-2 shadow-md hover:shadow-lg"
                        >
                            Create a new account
                        </button>

                        <div className="text-center text-gray-600 text-sm mt-2">
                            Already have account?{" "}
                            <button
                                type="button"
                                onClick={onLogin}
                                className="text-gray-900 font-semibold underline hover:text-orange-500 transition-colors"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
