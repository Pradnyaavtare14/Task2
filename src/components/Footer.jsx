// import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="flex items-center justify-between">
                <p className="text-3xl font-semibold ml-8">Dont miss our weekly updates <br /> aboubt freelancer career</p>
                <div className="flex items-center">
                    <input type="text" placeholder="enter your email address..." className="px-3 py-1 bg-none rounded mr-2" />
                    <button className="px-4 py-2 bg-orange-500 text-white rounded mr-7">SUBSCRIBE</button>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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
                            <li><a href="#" className="hover:text-white">Downlaod</a></li>
                            <li><a href="#" className="hover:text-white">Help center</a></li>
                            <li><a href="#" className="hover:text-white">Event</a></li>
                            <li><a href="#" className="hover:text-white">Guides</a></li>
                            <li><a href="#" className="hover:text-white">Partner</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">About us</a></li>
                            <li><a href="#" className="hover:text-white">Contact us</a></li>
                            <li><a href="#" className="hover:text-white">Product</a></li>
                            <li><a href="#" className="hover:text-white">login</a></li>
                            <li><a href="#" className="hover:text-white">Sign up</a></li>
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
                {/* Copyright */}
                <div className="mt-8 border-t border-gray-700 pt-8">
                    <div className="flex justify-between items-center">
                        <p className="text-gray-400">Ziro Freelancer Landing Website © 2020 All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
