import Button from "@/components/Button";
import { List, Search } from "lucide-react";
import { useCustomNavigate } from "@/hooks/useNavigate";
import { Link, useLocation } from "react-router-dom";
import { LOGO } from "@/assets/images";
function Nav({ onOpenDrawer }) {
  const { goTo } = useCustomNavigate();
  const location = useLocation();
  return (
    <div className="fixed inset-x-0 bottom-auto top-4 w-[98%] bg-structure mx-auto h-16 flex items-center justify-between shadow-2xl rounded-[10px] border border-white/10 px-3 z-1000">
      <Link to="/">
        <img
          src={LOGO}      // Replace with your image path
          alt="Company Logo"   // Accessibility text
          className="h-12 w-auto" // Adjust height, width auto to maintain aspect ratio
        />
      </Link>
      {/* right section */}
      <div className="hidden md:flex gap-1">
        <Button variant="primary" size="lg" onClick={onOpenDrawer}>
          Get started
        </Button>

        <div className="flex border border-white/10 rounded-lg overflow-hidden">
          <Button
            size="icon"
            variant="outline"
            onClick={() => goTo("/search")}
            className="border-none bg-transparent hover:bg-white/10 text-white"
          >
            <Search strokeWidth={1.5} size={20} />
          </Button>
          <div className="w-px h-6 bg-white/10 self-center" />
          <Button
            size="icon"
            variant="outline"
            onClick={() => goTo("/menu")}
            className="border-none bg-transparent hover:bg-white/10 text-white"
          >
            <List strokeWidth={1.5} size={20} />
          </Button>
        </div>
      </div>

    </div>

  );
}

export default Nav;
