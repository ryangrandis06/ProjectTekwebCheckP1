import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, User, ShieldCheck } from "lucide-react";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin123") {
            localStorage.setItem("isLoggedIn", "true"); 
            navigate("/admin"); 
        } else {
            setError("Username atau Password salah!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-6 relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
            
            <Card className="w-full max-w-md border-slate-800 bg-slate-900/50 backdrop-blur-xl text-white shadow-2xl rounded-[2.5rem] overflow-hidden">
                <CardHeader className="text-center pb-2">
                    <div className="mx-auto w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                        <ShieldCheck size={32} />
                    </div>
                    <CardTitle className="text-3xl font-black italic uppercase tracking-tighter">Admin Login</CardTitle>
                    <CardDescription className="text-slate-400 font-medium">
                        Masuk untuk mengelola inventaris Gk-Store.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                    <CardContent className="space-y-4 pt-4">
                        {error && (
                            <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl text-center font-bold">
                                {error}
                            </div>
                        )}
                        <div className="space-y-2">
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                <Input 
                                    placeholder="Username" 
                                    className="pl-10 bg-slate-950/50 border-slate-800 py-6 rounded-xl focus:border-blue-500 transition-all text-white"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                <Input 
                                    type="password"
                                    placeholder="Password" 
                                    className="pl-10 bg-slate-950/50 border-slate-800 py-6 rounded-xl focus:border-blue-500 transition-all text-white"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="pb-8 pt-4">
                        <Button 
                            type="submit" 
                            className="w-full bg-blue-600 hover:bg-blue-700 py-7 text-lg font-black rounded-xl shadow-xl shadow-blue-500/10 transition-transform active:scale-95"
                        >
                            MASUK SEKARANG
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
};

export default LoginPage;