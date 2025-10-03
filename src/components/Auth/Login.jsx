import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, Eye, EyeOff, Home, ArrowRight } from "lucide-react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-shell flex items-center justify-center px-4 py-12">
      <div className="mx-auto max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-forest p-6 md:p-12 flex flex-col gap-10 justify-between min-h-[400px] md:min-h-[600px]"
            >
              {/* <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-sand/20 to-transparent"></div>
              </div> */}

              <div className=" space-y-4 z-10">
                {/* <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center space-x-3 mb-8"
                >
                  <Home className="w-10 h-10 text-sand" />
                  <span className="text-3xl font-bold text-sand">RealEstate</span>
                </motion.div> */}

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-3xl md:text-5xl font-bold text-sand leading-tight"
                >
                  Find Your Dream Home Today
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-sand/80  md:text-lg"
                >
                  Join thousands of happy homeowners who found their perfect
                  property with us.
                </motion.p>
              </div>

              {/* <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative z-10 mt-8"
              >
                <div className="bg-sand/20 rounded-2xl p-8 backdrop-blur-sm border border-sand/30">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-5xl font-bold text-sand mb-1">500+</div>
                      <div className="text-sand/80 text-sm">Properties Listed</div>
                    </div>
                    <div>
                      <div className="text-5xl font-bold text-sand mb-1">1.2K</div>
                      <div className="text-sand/80 text-sm">Happy Clients</div>
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-br from-clay/40 to-sand/40 rounded-xl flex items-center justify-center">
                    <Home className="w-16 h-16 text-sand/60" />
                  </div>
                </div>
              </motion.div> */}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {isLogin ? (
                  <>
                    <motion.img
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      src="https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg"
                      alt="image"
                      className="rounded-3xl"
                    />
                  </>
                ) : (
                  <>
                    <motion.img
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      src="https://images.pexels.com/photos/6292341/pexels-photo-6292341.jpeg"
                      alt="image"
                      className="rounded-3xl"
                    />
                  </>
                )}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 md:p-12 flex flex-col justify-center"
            >
              <div className="flex gap-2 mb-8 bg-shell p-1 rounded-full">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 px-6 rounded-full  cursor-pointer font-semibold transition-all duration-500 ${
                    isLogin
                      ? "bg-forest text-sand shadow-md"
                      : "text-ink hover:text-forest"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 px-6 rounded-full  cursor-pointer font-semibold transition-all duration-500 ${
                    !isLogin
                      ? "bg-forest text-sand shadow-md"
                      : "text-ink hover:text-forest"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <motion.div
                key={isLogin ? "login" : "signup"}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-8"
              >
                <h3 className="text-3xl font-bold text-forest mb-2">
                  {isLogin ? "Welcome Back!" : "Create Account"}
                </h3>
                <p className="text-ink/60">
                  {isLogin
                    ? "Enter your credentials to access your account"
                    : "Sign up to start your real estate journey"}
                </p>
              </motion.div>

              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <label className="block text-sm font-semibold text-ink mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/40" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="w-full pl-12 pr-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors duration-200"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/40" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full pl-12 pr-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/40" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-12 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors duration-200"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-ink/40 hover:text-ink transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {isLogin && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-2 border-forest text-forest focus:ring-forest"
                      />
                      <span className="text-sm text-ink/70">Remember me</span>
                    </label>
                    <button className="text-sm text-forest hover:text-clay font-semibold transition-colors">
                      Forgot Password?
                    </button>
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="w-full py-4 bg-forest text-sand rounded-xl font-semibold hover:bg-clay transition-colors duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>{isLogin ? "Login" : "Create Account"}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>

              {/* <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-ink/10"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-ink/60">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="py-3 px-4 border-2 border-shell rounded-xl hover:border-forest transition-colors duration-200 font-semibold text-ink flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span>Google</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="py-3 px-4 border-2 border-shell rounded-xl hover:border-forest transition-colors duration-200 font-semibold text-ink flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span>Facebook</span>
                  </motion.button>
                </div>
              </div> */}

              <p className="mt-8 text-center text-sm text-ink/60">
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-forest font-semibold hover:text-clay transition-colors"
                >
                  {isLogin ? "Sign up" : "Login"}
                </button>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
