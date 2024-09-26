import { Input } from "@/components/ui/input"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";

const Footer = () => {
    return (
        <footer className="bg-primary mt-20 flex flex-col items-center text-primary-foreground py-10">
            <div className="container px-4 max-w-7xl flex flex-col lg:flex-row justify-between items-center lg:items-start">
                {/* Left Section */}
                <div className="flex flex-col  px-4 space-y-4">
                    <h3 className="text-base font-semibold">The Fellowship App</h3>

                    {/* terms section */}
                    <div className="flex flex-col lg:flex-row flex-wrap gap-2">
                        <a href="#">Contact</a>
                        <a href="#">FAQ</a>
                        <a href="#">Terms</a>
                        <a href="#">Privacy</a>
                        <a href="#">Blog</a>
                    </div>
                    <p className="mt-4">Email us at: <a href="mailto:support@thefellowshipapp.com" className="underline">support@thefellowshipapp.com</a></p>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" aria-label="Facebook">
                            <FaFacebook className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="X (formerly Twitter)">
                            <FaXTwitter className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <FaInstagram className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <FaLinkedin className="w-5 h-5" />
                        </a>
                    </div>
                    {/* policies secton */}
                    <div className="flex gap-2 text-sm flex-col lg:flex-row text-foreground mt-6">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Community Guidelines</a>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col  items-start mt-10 lg:mt-0">
                    <h4 className="font-semibold text-lg mb-2">Newsletter</h4>
                    <p className="text-sm mb-2 text-foreground">Join our newsletter to stay up to never miss our latest releases</p>
                    <div className="flex flex-col gap-3 lg:flex-row w-full max-w-sm items-center space-x-2">
                        <Input type="email" placeholder="Email" className="placeholder:text-slate-300" />                        <Button type="submit" className="bg-purple-600" >Subscribe</Button>
                    </div>
                    <p className="text-sm text-primary-foreground mt-2">
                        By subscribing you agree to our <a href="#" className="underline">Privacy Policy</a>
                    </p>
                </div>
            </div>

            <div className="mt-10 text-center text-sm text-foreground">
                © 2024 Cranebolt Technologies. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
