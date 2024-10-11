import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Hobbies", href: "/hobbies" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* Navigation Bar */}
      <nav className="my-16 animate-fade-in">
        <ul className="flex flex-wrap items-center justify-center gap-4 max-w-full px-4"> {/* Added flex-wrap, max-w-full, and padding */}
          {navigation.map((item, index) => (
            <li
              key={item.href}
              className="flex items-center"
            >
              <Link
                href={item.href}
                className="text-lg font-bold duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
              {index < navigation.length - 1 && (
                <span className="text-zinc-500 ml-5 mr-1">|</span> // More space on the left (ml-5) and less on the right (mr-1)
              )}
            </li>
          ))}
        </ul>
      </nav>
  
      {/* Main Content - Flex Centering */}
      <div className="flex flex-col items-center justify-center flex-1">
        {/* Decorative Line */}
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        {/* Name */}
        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
          deebthik
        </h1>

        {/* Decorative Line */}
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        
        {/* Slogan */}
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-lg font-bold text-zinc-500"> {/* Increased font size to lg and made it bold */}
            Hacking through life
          </h2>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto mb-8 text-center animate-fade-in">
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} Deebthik Ravi. All rights reserved.
        </p>
        <p className="text-xs text-zinc-500">
          Built with inspiration from <a href="https://github.com/chronark/chronark.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-300">chronark</a>.
        </p>
      </div>
    </div>
  );
}
