'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">AI Data Explorer</h1>
        <Link href="/auth/login">
          <button className="bg-blue-600 text-white px-6 py-3 rounded">
            Login
          </button>
        </Link>
        <p className="text-sm text-center mt-3">
            Don't have an account?{' '}
            <Link href="/auth/signup" className="text-blue-600">
                Sign Up
            </Link>
        </p>
      </div>
    </div>
  );
}