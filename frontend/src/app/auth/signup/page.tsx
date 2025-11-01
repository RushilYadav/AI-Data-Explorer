'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message || 'Signup failed');
                return;
            }

            alert('Signup successful! You can now login.');
            // Optionally, redirect to login page
            window.location.href = '/auth/login';
        } catch (err) {
            console.error(err);
            alert('Server error. Please try again.');
        }
    };


    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form
                onSubmit={handleSignup}
                className="bg-white p-8 rounded shadow-md w-80"
            >
                <h1 className="text-2xl mb-4">Sign Up</h1>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 mb-3 border rounded"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-3 border rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-3 border rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white p-2 rounded mb-3"
                >
                    Sign Up
                </button>
                <p className="text-sm text-center">
                    Already have an account?{' '}
                    <Link href="/auth/login" className="text-blue-600">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
}