"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Simulate login
        if (email && password) {
            localStorage.setItem('isAuthenticated', 'true');
            toast.success('Logged in successfully');
            router.push('/dashboard');
        } else {
            alert("Please enter both email and password");
        }
    };

    return (
        <main className="flex items-center justify-center h-screen bg-gray-100 rounded-lg">
            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded shadow-md w-full max-w-sm"
            >
                <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>

                <label className="block mb-2 text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="you@example.com"
                    required
                />

                <label className="block mb-2 text-sm font-medium text-gray-700">
                    Password
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="********"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-links text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
                >
                    Log In
                </button>
            </form>
        </main>
    );
}
