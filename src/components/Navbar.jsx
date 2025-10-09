import { Menu, Phone, Sparkles, User, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const navItems = [
  {
    label: "Feature",
    link: "/feature",
  },
  {
    label: "Pricing",
    link: "/pricing",
  },
  {
    label: "Contact",
    link: "/contact",
  },
  {
    label: "Admin",
    link: "/admin",
  },
  {
    label: "Sale Team",
    link: "/saleteam",
  },
  {
    label: "Market",
    link: "/marketing",
  },
];

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  // const location = location.pathname('/')
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsScroll(true);
      return;
    } else {
      setIsScroll(false);
    }
    setIsScroll((prev) => (location.pathname !== "/" ? true : prev));
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const [openUserpop, setOpenUserPop] = useState(false);
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.clear();
    window.scrollTo(0, 0);
    toast.success("Logout Succesfully");
    navigate("/login");
  };
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-shell/80 backdrop-blur-md border-b transition-all duration-500 border-ink/10 ${
        isScroll ? "backdrop-blur-lg  text-gray-700" : "py-4 md:py-6"
      }  `}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <div
          onClick={() => {
            navigate("/"), window.scrollTo(0, 0);
          }}
          className="flex cursor-pointer items-center gap-2"
        >
          <motion.span
            className="inline-flex h-10 w-10  items-center justify-center rounded-full bg-forest text-shell font-serif text-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            EO
          </motion.span>
          <div className="flex flex-col leading-tight text-sm md:text-base">
            <span className="font-serif text-lg md:text-xl tracking-tight">
              Estate Orbit
            </span>
            <span className="text-ink/70">Residences Marketplace</span>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item, index) => (
            <Link
              key={index}
              onClick={() => window.scrollTo(0, 0)}
              to={item.link}
              className="transition hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden relative items-center gap-4 md:flex">
          {token ? (
            <button className="border p-2 border-forest rounded-full">
              <User onClick={() => setOpenUserPop(!openUserpop)} />
              {openUserpop && (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`absolute p-3 bg-sand/60 mt-5 space-y-2 rounded-xl
                   
                      transition-all duration-500 right-0 `}
                  >
                    <button
                      onClick={handleLogout}
                      className="w-full cursor-pointer bg-sand px-7 py-3 "
                    >
                      Logout
                    </button>
                    <button className="w-full cursor-pointer bg-sand px-7 py-3 ">
                      Dashboard
                    </button>
                  </motion.div>
                </>
              )}
            </button>
          ) : (
            <Link to={"/login"} onClick={() => window.scrollTo(0, 0)}>
              <button className="inline-flex items-center gap-2 rounded-xl cursor-pointer bg-forest px-6 py-2 text-shell shadow-collage transition hover:bg-ink">
                Register
              </button>
            </Link>
          )}
        </div>

        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="inline-flex items-center justify-center rounded-pill  border-forest/20 p-2 md:hidden"
        >
          {!openMenu ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
          {/* <span className="sr-only">Toggle navigation</span> */}
        </button>
      </div>
      <div className="w-full ">
        {openMenu && (
          <>
            <nav className="items-center w-full gap-3 -b-2 py-10 flex-col text-sm md:hidden flex">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  onClick={() => {
                    setOpenMenu(false), window.scrollTo(0, 0);
                  }}
                  className="transition text-xl hover:text-forest"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="items-center md:hidden pb-10 gap-4 flex flex-wrap justify-center ">
              <Link to={"/login"} onClick={() => window.scrollTo(0, 0)}>
                <button className="inline-flex items-center gap-2 rounded-2xl cursor-pointer bg-forest px-4 py-2 text-sm text-shell shadow-collage transition hover:bg-ink">
                  Register
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
