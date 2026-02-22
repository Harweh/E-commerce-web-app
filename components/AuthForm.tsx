// "use client";

// import React from "react";
// import Link from "next/link";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// type AuthFormProps = { isLogin: boolean };

// const schema = yup.object({
//     email: yup.string().email("Enter a valid email").required("Email is required"),
//     password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
//     }).required();

//     export default function AuthForm({ isLogin }: AuthFormProps) {
//     const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
//         resolver: yupResolver(schema),
//         mode: "onTouched",
//     });

//     const onSubmit = async (data: any) => {
//         // Mock behavior: store in localStorage. Replace with API call in a real app.
//         try {
//         localStorage.setItem("user", JSON.stringify(data));
//         // simple feedback; replace with toast or redirect as needed
//         alert(isLogin ? "Logged in!" : "Registered!");
//         } catch (err) {
//         console.error(err);
//         alert("Something went wrong.");
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//         <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md p-6 bg-white rounded-lg shadow">
//             <h2 className="text-2xl font-semibold mb-4">{isLogin ? "Login" : "Register"}</h2>

//             <label className="block mb-2 text-sm font-medium">Email</label>
//             <input
//             {...register("email")}
//             type="email"
//             placeholder="you@example.com"
//             className="w-full p-2 border rounded mb-1"
//             />
//             {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email.message as string}</p>}

//             <label className="block mb-2 text-sm font-medium">Password</label>
//             <input
//             {...register("password")}
//             type="password"
//             placeholder="••••••••"
//             className="w-full p-2 border rounded mb-1"
//             />
//             {errors.password && <p className="text-red-500 text-sm mb-4">{errors.password.message as string}</p>}

//             <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-60"
//             >
//             {isLogin ? "Sign in" : "Create account"}
//             </button>

//             <div className="mt-4 text-center text-sm text-gray-600">
//             {isLogin ? (
//                 <>
//                 New here?{" "}
//                 <Link href="/register" className="text-blue-600 hover:underline">
//                     Create an account
//                 </Link>
//                 </>
//             ) : (
//                 <>
//                 Already have an account?{" "}
//                 <Link href="/login" className="text-blue-600 hover:underline">
//                     Sign in
//                 </Link>
//                 </>
//             )}
//             </div>
//         </form>
//         </div>
//     );
// }


// 'use client'

// import { useState } from 'react'; 
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// const schema = yup.object({
//     email: yup.string().email().required(),
//     password: yup.string().min(6).required(),
//     });

//     export default function AuthForm({ isLogin }: { isLogin: boolean }) {
//     const { register, handleSubmit, formState: { errors } } = useForm({
//         resolver: yupResolver(schema),
//     });

//     const onSubmit = (data: any) => {
//         // Mock: Store in localStorage or call API
//         localStorage.setItem('user', JSON.stringify(data));
//         alert(isLogin ? 'Logged in!' : 'Registered!');
//     };

//     return (
//         <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white rounded shadow">
//         <h2 className="text-xl mb-4">{isLogin ? 'Login' : 'Register'}</h2>
//         <input {...register('email')} placeholder="Email" className="w-full p-2 border mb-2" />
//         {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//         <input {...register('password')} type="password" placeholder="Password" className="w-full p-2 border mb-2" />
//         {errors.password && <p className="text-red-500">{errors.password.message}</p>}
//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
//         </form>
//     );
// }





