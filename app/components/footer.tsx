import Link from "next/link";
import { Mail, MapPin, PhoneCall, ShoppingCartIcon } from "lucide-react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";

const socials = [
  { id: 1, icon: <BsFacebook />, url: "www.facebook.com" },
  { id: 2, icon: <BsTwitterX />, url: "www.twitter.com" },
  { id: 3, icon: <BsInstagram />, url: "www.github.com" },
  { id: 4, icon: <BsYoutube />, url: "www.youtube.com" },
  { id: 4, icon: <BsGithub />, url: "www.instagram.com" },
];

const aboutUs = [
  { id: 1, label: "Company History", href: "/" },
  { id: 2, label: "Meet the Team", href: "/" },
  { id: 3, label: "Employee Handbook", href: "/" },
  { id: 4, label: "Careers", href: "/" },
];

const ourServices = [
  { id: 1, label: "Web Development", href: "/" },
  { id: 2, label: "Web Design", href: "/" },
  { id: 3, label: "Marketing", href: "/" },
  { id: 4, label: "Google Ads", href: "/" },
];

const helpLinks = [
  { id: 1, label: "FAQs", href: "/" },
  { id: 2, label: "Support", href: "/" },
];

const contactUs = [
  { id: 1, icon: Mail, label: "john@doe.com", href: "/" },
  { id: 2, icon: PhoneCall, label: "+251-123456789", href: "/" },
  {
    id: 3,
    icon: MapPin,
    label: "123, 4-kill, Addis Ababa, Ethiopia",
    href: "/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-6 sm:px-6 lg:px-8 lg:pt-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-black-600 sm:justify-start gap-4">
              <ShoppingCartIcon />
              <span className="text-lg font-medium text-gray-900">
                e-Commerce Website
              </span>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              You can buy any product here.
            </p>

            <ul className="mt-6 flex items-center justify-center gap-6 sm:justify-start md:gap-8">
              {socials.map((social) => (
                <Link key={social.id} href={social.url} className="h-4 w-4">
                  <li>{social.icon}</li>
                </Link>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">About Us</p>

              <ul className="mt-5 space-y-4 text-sm">
                {aboutUs.map((about) => (
                  <Link
                    key={about.href}
                    href={about.href}
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    <li>{about.label}</li>
                  </Link>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Our Services</p>

              <ul className="mt-5 space-y-4 text-sm">
                {ourServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    <li>{service.label}</li>
                  </Link>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Helpful Links</p>

              <ul className="mt-5 space-y-4 text-sm">
                {helpLinks.map((help) => (
                  <Link
                    key={help.href}
                    href={help.href}
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    <li>{help.label}</li>
                  </Link>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Contact Us</p>

              <ul className="mt-5 space-y-4 text-sm">
                {contactUs.map((contact) => (
                  <Link
                    key={contact.href}
                    href={contact.href}
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    <li>{contact.label}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="text-center flex justify-between sm:text-left">
            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; 2024 Company Name
            </p>

            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>
              <Link
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="/"
              >
                Terms & Conditions
              </Link>

              <span>&middot;</span>

              <Link
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="/"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
