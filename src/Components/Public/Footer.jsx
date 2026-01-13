import React from "react";
import { Link } from "react-router-dom"; 
import { Store, Instagram, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-blue-600 p-1.5 rounded-lg">
                                <Store className="text-white" size={18} />
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-indigo-600">
                                GK-Store
                            </span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Toko produk pilihan terbaik dengan kualitas terjamin. Belanja mudah, cepat, dan aman langsung melalui WhatsApp.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-800 mb-4 uppercase tracking-wider text-xs">Navigasi</h4>
                        <ul className="flex flex-col gap-2 text-sm text-gray-500 font-medium">
                            <li><Link to="/" className="hover:text-blue-600 transition-colors">Beranda</Link></li>
                            <li><Link to="/catalog" className="hover:text-blue-600 transition-colors">Katalog Produk</Link></li>
                            <li><Link to="/tentang-kami" className="hover:text-blue-600 transition-colors">Tentang Kami</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-800 mb-4 uppercase tracking-wider text-xs">Hubungi Kami</h4>
                        <div className="flex gap-4 mb-4">
                            <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-pink-600 hover:bg-pink-50 transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-blue-400 hover:bg-blue-50 transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-blue-800 hover:bg-blue-50 transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Mail size={16} />
                            <span>support@GKstore.com</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400 font-medium">
                        © 2026 GK-Store. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-400 font-bold uppercase tracking-widest">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;