// import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <p className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 lg:mb-0 text-center lg:text-left">
                        Dont miss our weekly updates <br className="hidden lg:block" /> about freelancer career
                    </p>
                    <div className="flex items-center  ml-0 lg:ml-8">
                        <input 
                            type="text" 
                            placeholder="Enter your email address..." 
                            className="px-3 py-2 bg-gray-800 rounded mr-2 w-64 sm:w-auto" 
                        />
                        <button className="px-4 py-2 bg-orange-500 text-white rounded">SUBSCRIBE</button>
                    </div>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Ziro</h2>
                        <p className="text-gray-400 mb-4">
                            Ziro is a Freelancer Landing Website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nisi elementum, euismod nisi sit amet, scelerisque dolor.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Ziro</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Why Ziro</a></li>
                            <li><a href="#" className="hover:text-white">Enterprise</a></li>
                            <li><a href="#" className="hover:text-white">Customer Story</a></li>
                            <li><a href="#" className="hover:text-white">Security</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Download</a></li>
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li><a href="#" className="hover:text-white">Event</a></li>
                            <li><a href="#" className="hover:text-white">Guides</a></li>
                            <li><a href="#" className="hover:text-white">Partner</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white">Product</a></li>
                            <li><a href="#" className="hover:text-white">Login</a></li>
                            <li><a href="#" className="hover:text-white">Sign Up</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Get in touch with us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">1234, Location Address, City, State</a></li>
                            <li><a href="#" className="hover:text-white">+123 456 7890</a></li>
                            <li><a href="#" className="hover:text-white">support@ziro.id</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <p className="text-gray-400 text-center lg:text-left">Ziro Freelancer Landing Website © 2020 All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
