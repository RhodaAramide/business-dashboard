"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");

    function handleLogin() {
        if (email) {
            localStorage.setItem("user", email);
            router.push("/dashboard");
        }
    }

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border p-3 rounded-lg mb-4"
                />
                <button
                    onClick={handleLogin}
                    className="w-full bg-indigo-600 text-white p-3 rounded-lg"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
