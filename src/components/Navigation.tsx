'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { name: 'الرئيسية', href: '#home' },
        { name: 'عني', href: '#about' },
        { name: 'مغامراتي', href: '#adventures' },
        { name: 'مهاراتي', href: '#skills' },
        { name: 'تواصل معي', href: '#contact' },
    ]

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    <div className="flex-shrink-0">
                        <div className="w-20 h-20 relative">
                            <Image
                                src="/logo.png"
                                alt="محمد الويشي - شعار المغامر"
                                fill
                                className="object-contain rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                                priority
                                onError={(e) => {
                                    // Fallback to burger icon if image doesn't load
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = `
                                            <div class="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                                                <div class="w-12 h-12 relative">
                                                    <div class="absolute inset-0 flex flex-col justify-center items-center">
                                                        <div class="w-10 h-2 bg-yellow-200 rounded-full mb-1"></div>
                                                        <div class="w-9 h-2 bg-red-400 rounded-full mb-1"></div>
                                                        <div class="w-9 h-2 bg-green-400 rounded-full mb-1"></div>
                                                        <div class="w-10 h-2 bg-yellow-600 rounded-full"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        `;
                                    }
                                }}
                            />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="mr-10 flex items-baseline space-x-6 space-x-reverse">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-700 hover:text-blue-600 px-4 py-3 rounded-md text-lg font-semibold transition-colors hover:bg-blue-50"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-blue-600 p-3"
                        >
                            {isOpen ? (
                                <XMarkIcon className="h-8 w-8" />
                            ) : (
                                <Bars3Icon className="h-8 w-8" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6 bg-white shadow-lg">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 rounded-lg text-lg font-semibold transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation