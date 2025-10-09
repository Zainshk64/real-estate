import {
  Menu,
  User,
  X,
  LogOut,
  LayoutDashboard,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../hooks/ScrollToTop";

const navItems = [
  { label: "Features", link: "/feature" },
  { label: "Pricing", link: "/pricing" },
  { label: "Contact", link: "/contact" },
  { label: "Admin", link: "/admin" },
  { label: "Sales Team", link: "/saleteam" },
  { label: "Marketing", link: "/marketing" },
];

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openUserPop, setOpenUserPop] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const naviagate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (openUserPop && !e.target.closest(".user-dropdown")) {
        setOpenUserPop(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openUserPop]);

  const userEmail = "john.doe@example.com";
  const userName = "John Doe";
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    ScrollToTop();
    naviagate("/login");
    localStorage.clear();
    setOpenUserPop(false);
  };

  const handleNavigation = (path) => {
    setOpenMenu(false);
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScroll
          ? "bg-white/50 backdrop-blur-lg shadow-sm border-b border-sand/20"
          : "bg-shell/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 h-20">
        {/* Logo */}
        <Link to={"/"} onClick={ScrollToTop}>
          <motion.div
            className="flex cursor-pointer items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-forest to-clay text-white font-bold text-xl shadow-lg"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              EO
            </motion.div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-xl text-forest group-hover:text-clay transition-colors">
                Estate Orbit
              </span>
              <span className="text-ink/60 text-xs">
                Residences Marketplace
              </span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item, index) => (
            <Link to={item.link} onClick={ScrollToTop}>
              <motion.button
                 whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.98 }}
                key={index}
                className={`px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-all duration-200 ${
                  activeLink === item.link
                    ? "bg-forest/10 text-forest"
                    : "text-ink hover:text-forest "
                }`}
              >
                {item.label}
              </motion.button>
            </Link>
          ))}
        </nav>
        {/* Desktop Auth Section */}
        <div className="hidden lg:flex items-center gap-4">
          {token ? (
            <div className="relative user-dropdown">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setOpenUserPop(!openUserPop)}
                className="flex items-center gap-3 px-4 py-2 rounded-xl bg-shell hover:bg-sand/30 border border-sand/30 transition-all"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-forest to-clay flex items-center justify-center text-white font-semibold">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium text-ink">{userName}</span>
                <ChevronDown
                  className={`w-4 h-4 text-ink/60 transition-transform ${
                    openUserPop ? "rotate-180" : ""
                  }`}
                />
              </motion.button>

              <AnimatePresence>
                {openUserPop && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-sand/20 overflow-hidden"
                  >
                    {/* User Info */}
                    <div className="p-4 bg-gradient-to-br from-forest/5 to-clay/5 border-b border-sand/20">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-forest to-clay flex items-center justify-center text-white font-bold text-lg">
                          {userName.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-ink truncate">
                            {userName}
                          </p>
                          <p className="text-xs text-ink/60 truncate">
                            {userEmail}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="p-2">
                      <button
                        onClick={() => {
                          handleNavigation("/dashboard");
                          setOpenUserPop(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-shell transition-colors text-left group"
                      >
                        <LayoutDashboard className="w-5 h-5 text-forest" />
                        <span className="text-sm font-medium text-ink group-hover:text-forest">
                          Dashboard
                        </span>
                      </button>

                      <button
                        onClick={handleLogout}
                        className="w-full flex cursor-pointer items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 transition-colors text-left group"
                      >
                        <LogOut className="w-5 h-5 text-red-600" />
                        <span className="text-sm font-medium text-red-600">
                          Logout
                        </span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to={"/login"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={ScrollToTop}
                  className="px-6 py-2.5 rounded-xl cursor-pointer bg-forest text-sand text-sm font-semibold shadow-lg hover:bg-clay transition-colors"
                >
                  Sign In
                </motion.button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          whileHover={{ scale: 0.95 }}
          onClick={() => setOpenMenu(!openMenu)}
          className="lg:hidden p-2 rounded-xl cursor-pointer transition-colors"
        >
          {openMenu ? (
            <X className="h-6 w-6 text-ink" />
          ) : (
            <Menu className="h-6 w-6 text-ink" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-shell/30 border-t border-sand/20"
          >
            <div className="px-4 py-6 space-y-2">
              {/* Mobile Navigation Links */}
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link to={item.link} onClick={ScrollToTop}>
                    <button
                      className={`w-full text-left cursor-pointer block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        activeLink === item.link
                          ? "bg-forest/10 text-forest"
                          : "text-ink hover:bg-shell hover:text-forest"
                      }`}
                    >
                      {item.label}
                    </button>
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Auth Section */}
              <div className="pt-4 border-t border-sand/20 space-y-3">
                {!token ? (
                  <>
                    <div className="px-4 py-3  bg-shell/60 rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-forest to-clay flex items-center justify-center text-white font-bold text-lg">
                          {userName.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-ink truncate">
                            {userName}
                          </p>
                          <p className="text-xs text-ink/60 truncate">
                            {userEmail}
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleNavigation("/dashboard")}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-shell/60 hover:bg-sand/30 transition-colors"
                    >
                      <LayoutDashboard className="w-5 h-5 text-forest" />
                      <span className="text-sm font-medium text-ink">
                        Dashboard
                      </span>
                    </button>

                    <button
                      onClick={handleLogout}
                      className="w-full flex cursor-pointer items-center gap-3 px-4 py-3 rounded-xl bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <LogOut className="w-5 h-5 text-red-600" />
                      <span className="text-sm  font-medium text-red-600">
                        Logout
                      </span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link to={"/login"}>
                      <button
                        onClick={() => handleNavigation("/login")}
                        className="w-full px-6 cursor-pointer py-3 rounded-xl bg-forest text-sand text-base font-semibold shadow-lg hover:bg-clay transition-colors"
                      >
                        Sign In
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
