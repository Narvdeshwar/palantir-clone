import FormFields from "../FormFields";
import { popularSearches } from "../../lib/data/popular-seaches";
import Button from "../Button";
import { List, X } from "lucide-react";
import { motion } from "framer-motion";
import { useCustomNavigate } from "../../hooks/useNavigate";
import { LOGO } from "../../assets/images";

function SearchComponent() {
  const { goTo } = useCustomNavigate()
  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className="h-screen flex flex-col justify-center bg-structure">
      <div className="h-[80vh] ">
        <div className="flex justify-between items-center w-[98%] mx-auto py-8">
          <img
            src={LOGO}
            alt="Jspark Logo"
            className="h-10 w-auto cursor-pointer"
            onClick={() => goTo("/")}
          />
          <div className="hidden md:flex gap-5">
            <Button variant="primary" size="lg">Get started</Button>

            <div className="flex border border-white/10 rounded-lg overflow-hidden">
              <Button
                size="icon"
                variant="outline"
                className="border-none bg-transparent text-white hover:bg-white/10"
                onClick={() => goTo("/")}
              >
                <X strokeWidth={1.5} size={24} />
              </Button>
              <div className="w-px h-6 bg-white/10 self-center" />
              <Button
                size="icon"
                variant="outline"
                className="border-none bg-transparent text-white hover:bg-white/10"
                onClick={() => goTo("/menu")}
              >
                <List strokeWidth={1.5} size={24} />
              </Button>
            </div>
          </div>
        </div>
        <div className="w-[98%] flex flex-col gap-3 h-full">
          <div className="h-full flex flex-col mt-32 px-12">
            <h1 className="text-white text-6xl font-bold mb-8">Search</h1>
            <FormFields
              type="text"
              className="text-white border-white/20 bg-white/5 py-4 px-6 text-xl focus:border-jspark-primary transition-all w-full mb-8 rounded-xl"
              placeholder="Start typing for search"
            />
            <div className="flex flex-col gap-4">
              <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-bold">
                Popular Searches
              </p>
              <motion.ul
                className="flex flex-wrap text-white gap-6"
                variants={listVariants}
                initial="hidden"
                animate="show"
              >
                {popularSearches.map((item) => (
                  <motion.li
                    key={item.id}
                    variants={itemVariants}
                    className="cursor-pointer text-lg font-medium hover:text-jspark-primary transition-colors border-b border-transparent hover:border-jspark-primary pb-1"
                  >
                    {item.title}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchComponent;
