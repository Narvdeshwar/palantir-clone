import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

function HeroOpsMind() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full text-white">
      {/* Top Nav */}
      <nav className="flex items-center justify-between px-6 lg:px-10 py-6 mt-20 relative">
        <div className="text-xl font-medium">OpsMind</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Product</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Explore Solutions</a>
          <a href="#" className="hover:text-white transition-colors">Content Hub</a>
          <a href="#" className="hover:text-white transition-colors">Developer Docs</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-full left-0 w-full border-t border-white/10 shadow-md md:hidden bg-bg-app z-50">
            <div className="flex flex-col px-6 py-6 gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Product</a>
              <a href="#" className="hover:text-white">Pricing</a>
              <a href="#" className="hover:text-white">Explore Solutions</a>
              <a href="#" className="hover:text-white">Content Hub</a>
              <a href="#" className="hover:text-white">Developer Docs</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_1.5fr] gap-10 px-6 lg:px-10 py-20 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-6xl font-light">OpsMind</h1>
          <p className="text-5xl font-light leading-tight max-w-xl text-gray-100">
            Turn documents into verifiable intelligence
          </p>

          <button className="inline-flex items-center gap-3 bg-white text-black px-6 py-4 rounded-md text-sm hover:bg-gray-200 transition font-medium">
            Request a demo
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://www.palantir.com/assets/xrfr7uokpv1b/2xGl0O6LjxBjXZF5XetpIV/25f25427282acc622dd9eb06284cc23e/shutterstock_2197639027.jpg?quality=70&width=2200"
            alt="Hero graphic"
            className="max-w-full h-auto rounded-md opacity-80"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroOpsMind;
