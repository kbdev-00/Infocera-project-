import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black pt-20 pb-10 border-t border-gray-900 text-gray-400 text-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">

                    {/* Info Column */}
                    <div className="space-y-6 lg:col-span-1">
                        <div className="text-2xl font-orbitron font-bold text-white tracking-widest">
                            INFOCERA
                            <span className="block text-[10px] font-normal tracking-[0.3em] text-gray-500 mt-1">SEAMLESS CONNECTIONS</span>
                        </div>
                        <p className="leading-relaxed">
                            Leading IT services provider delivering innovative technology solutions that drive business growth and digital transformation.
                        </p>
                        <div className="space-y-3">
                            <p className="flex items-center gap-2 text-white">
                                <span className="text-green-500">+91 8882824948</span>
                            </p>
                            <p className="flex items-center gap-2 text-white">
                                <span className="text-green-500">info@infocera.in</span>
                            </p>
                            <p className="leading-relaxed text-white">
                                First Floor, L29-L34, Block L<br />
                                Connaught Place, New Delhi, Delhi - 110001
                            </p>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-[#00f2fe] font-orbitron font-bold mb-6 text-lg tracking-wider uppercase">Services</h4>
                        <ul className="space-y-3 text-white/80">
                            {[
                                'Software Products',
                                'Web Design & Development',
                                'Mobile Application',
                                'Online Marketing',
                                'Creative Design',
                                'Consultant',
                                'Data Science & Analytics',
                                'Testing & QA',

                            ].map((item, i) => (
                                <li key={i}><a href="#" className="hover:text-[#00f2fe] transition-colors flex items-center group whitespace-nowrap">{item} <span className="ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span></a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Industries */}
                    <div>
                        <h4 className="text-[#00f2fe] font-orbitron font-bold mb-6 text-lg tracking-wider uppercase">Industries</h4>
                        <ul className="space-y-3 text-white/80">
                            {[
                                'Healthcare',
                                'Finance',
                                'Education',
                                'E-commerce',
                                'Manufacturing',
                                'Retail',
                                'Gaming',
                                'Real Estate',
                                'Automotive'
                            ].map((item, i) => (
                                <li key={i}><a href="#" className="hover:text-[#00f2fe] transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                        <h4 className="text-[#00f2fe] font-orbitron font-bold mb-6 text-lg tracking-wider uppercase">Technologies</h4>
                        <ul className="space-y-3 text-white/80">
                            {[
                                'UI Design',
                                'Server Side Scripting',
                                'Cloud Computing',
                                'Data Mining and Analytics',
                                'Web Server Technology',
                                'Testing & Process',
                                'Digital Marketing'
                            ].map((item, i) => (
                                <li key={i}><a href="#" className="hover:text-[#00f2fe] transition-colors flex items-center group whitespace-nowrap">{item} <span className="ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span></a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Company & Resources */}
                    <div className="space-y-12">
                        <div>
                            <h4 className="text-[#00f2fe] font-orbitron font-bold mb-6 text-lg tracking-wider uppercase">Company</h4>
                            <ul className="space-y-3 text-white/80">
                                {['About Us', 'Portfolio', 'Careers', 'Contact', 'Privacy Policy'].map((item, i) => (
                                    <li key={i}><a href="#" className="hover:text-[#00f2fe] transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[#00f2fe] font-orbitron font-bold mb-6 text-lg tracking-wider uppercase">Resources</h4>
                            <ul className="space-y-3 text-white/80">
                                {['Blog', 'News', 'FAQ', 'Support'].map((item, i) => (
                                    <li key={i}><a href="#" className="hover:text-[#00f2fe] transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Products Column */}
                    <div>
                        <h4 className="text-[#00f2fe] font-orbitron font-bold mb-6 text-lg tracking-wider uppercase">Products</h4>
                        <ul className="space-y-3 text-white/80">
                            {[
                                'CloudSync Pro',
                                'SecureGuard Enterprise',
                                'AI Analytics Suite',
                                'MobileFlow Builder',
                                'DataVault Pro',
                                'DevOps Accelerator',
                                'TeamConnect Hub',
                                'BusinessIntel Dashboard',
                                'WebForce CMS'
                            ].map((item, i) => (
                                <li key={i}><a href="#" className="hover:text-[#00f2fe] transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© 2026 Infocera. All rights reserved.</p>
                    <div className="flex gap-4">
                        {/* Social Icons Placeholder */}
                    </div>
                </div>
            </div>

            {/* Chat Widget Button Placeholder */}
            <div className="fixed bottom-6 right-6">
                <button className="w-14 h-14 bg-teal-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-teal-500 transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                </button>
            </div>
        </footer>
    )
}

export default Footer
