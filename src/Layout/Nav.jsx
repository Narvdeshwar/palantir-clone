import Button from "@/components/Button";
import { List, Search } from "lucide-react";
import { useCustomNavigate } from "@/hooks/useNavigate";
import { Link, useLocation } from "react-router-dom";
import { LOGO } from "@/assets/images";
function Nav({ onOpenDrawer }) {
  const { goTo } = useCustomNavigate();
  const location = useLocation();
  return (
    <div className="fixed inset-0 w-[98%] bg-[#ababab1a] mx-auto mt-4 h-16 flex items-center justify-between shadow-2xl rounded-[10px] backdrop-blur-[10px] border-[0.1] border-[#ababab1a] px-3 z-1000">
      <Link to="/">
        <img
      src={LOGO}      // Replace with your image path
      alt="Company Logo"   // Accessibility text
      className="h-12 w-auto" // Adjust height, width auto to maintain aspect ratio
    />
      </Link>
      {/* right section */}
      <div className="hidden md:flex gap-1">
        <Button size="lg" onClick={onOpenDrawer}>
          Get started
        </Button>

        <div className="flex border">
          <Button
            size="icon"
            onClick={() => goTo("/search")}
            className="border-none border-r-2"
          >
            <Search strokeWidth={0.9} />
          </Button>
          <Button
            size="icon"
            onClick={() => goTo("/menu")}
            className="border-none"
          >
            <List strokeWidth={0.9} />
          </Button>
        </div>
      </div>

    </div>

  );
}

export default Nav;
