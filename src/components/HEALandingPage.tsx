import React from 'react';
import { Play, ArrowRight, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const HEALandingPage = () => {
    return (
        <div className="w-full min-h-screen font-sans">
            {/* Navigation */}
            <nav className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center text-white">
                <div className="text-2xl font-bold tracking-wider">HEA</div>
                <div className="hidden md:flex space-x-8 text-sm font-medium">
                    <a href="#" className="hover:text-gray-300">Home</a>
                    <a href="#" className="hover:text-gray-300">About Us</a>
                    <a href="#" className="hover:text-gray-300">What We Do</a>
                    <a href="#" className="hover:text-gray-300">Media</a>
                    <a href="#" className="hover:text-gray-300">Contact</a>
                </div>
                <button className="bg-white text-black px-6 py-2 rounded-sm font-medium hover:bg-gray-200 transition">
                    Donate
                </button>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen w-full flex items-center bg-black text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/ngowebsite/unsplash_LjqARJaJotc.png"
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    {/* Dark overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 md:px-12 pt-20">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
                            Take a stand against discrimination and fight back
                        </h1>

                        <div className="flex items-center space-x-6 mb-16">
                            <button className="bg-white text-black px-8 py-3 rounded-sm font-semibold hover:bg-gray-200 transition">
                                What we do
                            </button>
                            <button className="flex items-center space-x-2 text-white hover:text-gray-300 transition group">
                                <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30">
                                    <Play size={16} fill="white" />
                                </div>
                                <span className="font-medium">Play Video</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats footer in Hero */}
                <div className="absolute bottom-10 left-0 w-full px-6 md:px-12 text-white/90 text-sm font-medium">
                    <div className="container mx-auto flex items-center justify-between border-t border-white/30 pt-4">
                        <span>230 discrimination cases won</span>
                        <span className="hidden md:block flex-1 mx-4 h-[1px] bg-white/30"></span>
                        <span>58 donations collected</span>
                    </div>
                </div>
            </section>

            {/* Know About Us Section - White Background */}
            <section className="py-20 md:py-28 bg-white text-black">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row items-center gap-16">

                        {/* Text Content */}
                        <div className="w-full md:w-1/2">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="w-12 h-[1px] bg-gray-400"></div>
                                <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Know About Us</span>
                            </div>
                            <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
                                We provide a services for those without a voice
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                            </p>

                            <button className="bg-gray-900 text-white px-8 py-3 rounded-sm font-medium hover:bg-gray-800 transition">
                                Learn More
                            </button>
                        </div>

                        {/* Image Content */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/assets/ngowebsite/unsplash_SBIak0pKUIE%20(1).png"
                                    alt="Hands together"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="bg-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300">
                                        <Play size={24} fill="black" className="text-black ml-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section - Dark Background */}
            <section className="relative py-20 md:py-28 bg-gray-900 text-white overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/ngowebsite/unsplash_eMB60hNHFL8.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 md:px-12">
                    <div className="max-w-xl">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-[1px] bg-yellow-500"></div>
                            <span className="text-xs font-bold tracking-widest uppercase text-yellow-500">What We Do</span>
                        </div>
                        <h2 className="text-4xl font-bold mb-4">
                            Some services we provide for our clients
                        </h2>
                        <p className="text-gray-300 mb-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </p>

                        <div className="space-y-8">
                            {/* Item 1 */}
                            <div className="flex items-start space-x-4">
                                <div className="mt-1 min-w-[24px] h-6 bg-white rounded-sm"></div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Challenging discriminatory laws and practices</h3>
                                    <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className="flex items-start space-x-4">
                                <div className="mt-1 min-w-[24px] h-6 bg-white rounded-sm"></div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Providing legal help</h3>
                                    <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                </div>
                            </div>
                            {/* Item 3 */}
                            <div className="flex items-start space-x-4">
                                <div className="mt-1 min-w-[24px] h-6 bg-white rounded-sm"></div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Providing emergency assistance</h3>
                                    <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                </div>
                            </div>
                            {/* Item 4 */}
                            <div className="flex items-start space-x-4">
                                <div className="mt-1 min-w-[24px] h-6 bg-white rounded-sm"></div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Exposing violence against women</h3>
                                    <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-16">
                <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-12">
                    <div>
                        <div className="text-2xl font-bold tracking-wider mb-8">HEA</div>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200"><Facebook size={18} /></a>
                            <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200"><Twitter size={18} /></a>
                            <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200"><Instagram size={18} /></a>
                            <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200"><Youtube size={18} /></a>
                        </div>
                    </div>

                    <div className="w-full md:w-auto">
                        <h3 className="text-xl font-bold mb-6">Subscribe to get latest updates</h3>
                        <form className="flex w-full md:w-96 border-b border-gray-700 pb-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-transparent border-none outline-none text-white w-full placeholder-gray-500"
                            />
                            <button type="submit" className="bg-white text-black px-6 py-2 rounded-sm text-sm font-bold hover:bg-gray-200">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HEALandingPage;
