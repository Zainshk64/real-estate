import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  Phone,
  MapPin,
  Building,
  Briefcase,
  Shield,
  CheckCircle,
  Loader,
  Loader2,
} from "lucide-react";
import { loginUser } from "../../services/authControl";
import toast from "react-hot-toast";

const Login = () => {
  const [currentView, setCurrentView] = useState("login"); // login, register, verify, forgot
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    city: "",
    state: "",
    country: "",
    businessName: "",
    businessType: "",
    role: "admin",
    otp: "",
    captcha: false,
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", currentView, formData);
  // };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const [Loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentView === "login") {
      try {
        setLoading(true);
        const res = await loginUser({
          email: formData.email,
          password: formData.password,
        });

        // ✅ Store token
        localStorage.setItem("token", res.access_token);

        // Optional: Toast or alert
        toast.success("Login successful!");

        // ✅ Redirect
        navigate("/");
      } catch (error) {
        toast.error(error.message || "Login failed");
      } finally {
        setLoading(false);
      }
    }
  };

  const getViewTitle = () => {
    switch (currentView) {
      case "login":
        return "Welcome Back!";
      case "register":
        return "Create Account";
      case "verify":
        return "Verify Your Account";
      case "forgot":
        return "Reset Password";
      default:
        return "Welcome!";
    }
  };

  const getViewSubtitle = () => {
    switch (currentView) {
      case "login":
        return "Enter your credentials to access your account";
      case "register":
        return "Fill in your details to get started";
      case "verify":
        return "Enter the OTP sent to your email and phone";
      case "forgot":
        return "Enter your email to receive OTP";
      default:
        return "";
    }
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
              className="relative bg-forest p-6 md:p-12 flex flex-col gap-10 justify-etween min-h-[400px] md:min-h-[600px]"
            >
              <div className="space-y-4 z-10">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-3xl md:text-5xl font-bold text-sand leading-tight"
                >
                  Unlock Growth, Connections & Opportunities
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-sand/80 md:text-lg"
                >
                  From real estate to retail, join businesses and professionals
                  building their next chapter on Estate Orbit your space for
                  progress.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentView}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    src={
                      currentView === "login" || currentView === "forgot"
                        ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                        : currentView === "verify"
                        ? "https://res.cloudinary.com/daljxhxzf/image/upload/v1759813975/vision2_ks0p9o.jpg"
                        : "https://res.cloudinary.com/daljxhxzf/image/upload/v1759813974/vision1_rpuyl1.avif"
                    }
                    alt="Login Thumbnail"
                    className="rounded-3xl object-cover w-full h-full"
                  />
                </AnimatePresence>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 md:p-12 flex flex-col justify-center "
            >
              {(currentView === "login" || currentView === "register") && (
                <div className="flex gap-2 mb-8 bg-shell p-1 rounded-full">
                  <button
                    onClick={() => setCurrentView("login")}
                    className={`flex-1 py-3 px-6 rounded-full cursor-pointer font-semibold transition-all duration-500 ${
                      currentView === "login"
                        ? "bg-forest text-sand shadow-md"
                        : "text-ink hover:text-forest"
                    }`}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setCurrentView("register")}
                    className={`flex-1 py-3 px-6 rounded-full cursor-pointer font-semibold transition-all duration-500 ${
                      currentView === "register"
                        ? "bg-forest text-sand shadow-md"
                        : "text-ink hover:text-forest"
                    }`}
                  >
                    Sign Up
                  </button>
                </div>
              )}

              <motion.div
                key={currentView}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-8 "
              >
                <h3 className="text-3xl font-bold text-forest mb-2">
                  {getViewTitle()}
                </h3>
                <p className="text-ink/60">{getViewSubtitle()}</p>
              </motion.div>

              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  {currentView === "login" && (
                    <LoginForm
                      formData={formData}
                      handleInputChange={handleInputChange}
                      showPassword={showPassword}
                      setShowPassword={setShowPassword}
                      handleSubmit={handleSubmit}
                      setCurrentView={setCurrentView}
                      Loading={Loading}
                    />
                  )}

                  {currentView === "register" && (
                    <RegisterForm
                      formData={formData}
                      handleInputChange={handleInputChange}
                      showPassword={showPassword}
                      setShowPassword={setShowPassword}
                      handleSubmit={handleSubmit}
                      setCurrentView={setCurrentView}
                    />
                  )}

                  {currentView === "verify" && (
                    <VerifyForm
                      formData={formData}
                      handleInputChange={handleInputChange}
                      handleSubmit={handleSubmit}
                      setCurrentView={setCurrentView}
                    />
                  )}

                  {currentView === "forgot" && (
                    <ForgotPasswordForm
                      formData={formData}
                      handleInputChange={handleInputChange}
                      handleSubmit={handleSubmit}
                      setCurrentView={setCurrentView}
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const LoginForm = ({
  formData,
  handleInputChange,
  showPassword,
  setShowPassword,
  handleSubmit,
  setCurrentView,
  Loading
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="space-y-6"
  >
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

    <div className="flex items-center justify-between">
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          className="w-4 h-4 rounded border-2 border-forest text-forest focus:ring-forest"
        />
        <span className="text-sm text-ink/70">Remember me</span>
      </label>
      <button
        onClick={() => setCurrentView("forgot")}
        className="text-sm text-forest hover:text-clay font-semibold transition-colors"
      >
        Forgot Password?
      </button>
    </div>

    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleSubmit}
      className="w-full py-4 bg-forest text-sand rounded-xl font-semibold hover:bg-clay transition-colors duration-200 flex items-center justify-center space-x-2 group"
    >
      <span>Login</span>
      {Loading ? (
        <Loader2 className="w-5 h-5 animate-spin group-hover:translate-x-1 transition-transform duration-200" />
      ) : (
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
      )}
    </motion.button>
  </motion.div>
);

const RegisterForm = ({
  formData,
  handleInputChange,
  showPassword,
  setShowPassword,
  handleSubmit,
  setCurrentView,
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="space-y-4"
  >
    <div>
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
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          Phone Number
        </label>
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/40" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+1 234 567 8900"
            className="w-full pl-12 pr-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors duration-200"
          />
        </div>
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

    <div>
      <label className="block text-sm font-semibold text-ink mb-2">
        Address
      </label>
      <div className="relative">
        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/40" />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="123 Main Street"
          className="w-full pl-12 pr-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors duration-200"
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label className="block text-sm font-semibold text-ink mb-2">
          City
        </label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          placeholder="New York"
          className="w-full px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors duration-200"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-ink mb-2">
          State
        </label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          placeholder="NY"
          className="w-full px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors duration-200"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-ink mb-2">
          Country
        </label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          placeholder="USA"
          className="w-full px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors duration-200"
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-semibold text-ink mb-2">
          Business Name
        </label>
        <div className="relative">
          <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/40" />
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleInputChange}
            placeholder="Your Company"
            className="w-full pl-12 pr-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors duration-200"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-ink mb-2">
          Business Type
        </label>
        <div className="relative">
          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/40" />
          <input
            type="text"
            name="businessType"
            value={formData.businessType}
            onChange={handleInputChange}
            placeholder="Real Estate Agency"
            className="w-full pl-12 pr-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors duration-200"
          />
        </div>
      </div>
    </div>

    <div>
      <label className="block text-sm font-semibold text-ink mb-2">Role</label>
      <div className="relative">
        <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/40" />
        <select
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          className="w-full pl-12 pr-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors duration-200 appearance-none cursor-pointer"
        >
          <option value="admin">Admin</option>
          <option value="sales">Sales</option>
          <option value="marketing">Marketing</option>
          <option value="owner">Owner</option>
        </select>
      </div>
    </div>

    <div className="flex items-center space-x-3 p-4 bg-shell rounded-xl">
      <input
        type="checkbox"
        name="captcha"
        checked={formData.captcha}
        onChange={handleInputChange}
        className="w-5 h-5 rounded border-2 border-forest text-forest focus:ring-forest"
      />
      <span className="text-sm text-ink">I'm not a robot (CAPTCHA)</span>
    </div>

    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={(e) => {
        handleSubmit(e);
        setCurrentView("verify");
      }}
      className="w-full py-4 bg-forest text-sand rounded-xl font-semibold hover:bg-clay transition-colors duration-200 flex items-center justify-center space-x-2 group"
    >
      <span>Create Account</span>
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
    </motion.button>
  </motion.div>
);

const VerifyForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  setCurrentView,
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="space-y-6"
  >
    <div className="bg-forest/10 border border-forest/20 rounded-xl p-4 flex items-start space-x-3">
      <CheckCircle className="w-5 h-5 text-forest mt-0.5" />
      <div>
        <p className="text-ink font-medium mb-1">Verification codes sent!</p>
        <p className="text-ink/60 text-sm">
          Check your email and phone for OTP codes.
        </p>
      </div>
    </div>

    <div>
      <label className="block text-sm font-semibold text-ink mb-2">
        Email OTP
      </label>
      <input
        type="text"
        name="otp"
        value={formData.otp}
        onChange={handleInputChange}
        placeholder="Enter 6-digit OTP"
        maxLength={6}
        className="w-full px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors duration-200 text-center text-2xl tracking-widest font-bold"
      />
    </div>

    <div>
      <label className="block text-sm font-semibold text-ink mb-2">
        Phone OTP
      </label>
      <input
        type="text"
        name="phoneOtp"
        placeholder="Enter 6-digit OTP"
        maxLength={6}
        className="w-full px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors duration-200 text-center text-2xl tracking-widest font-bold"
      />
    </div>

    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={(e) => {
        handleSubmit(e);
        setCurrentView("login");
      }}
      className="w-full py-4 bg-forest text-sand rounded-xl font-semibold hover:bg-clay transition-colors duration-200 flex items-center justify-center space-x-2 group"
    >
      <span>Verify Account</span>
      <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
    </motion.button>

    <button className="w-full text-center text-sm text-forest hover:text-clay font-semibold transition-colors">
      Resend OTP Codes
    </button>
    <button
      onClick={() => setCurrentView("login")}
      className="w-full text-center text-sm text-forest hover:text-clay font-semibold transition-colors"
    >
      Back to Login
    </button>
  </motion.div>
);

const ForgotPasswordForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  setCurrentView,
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="space-y-6"
  >
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

    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleSubmit}
      className="w-full py-4 bg-forest text-sand rounded-xl font-semibold hover:bg-clay transition-colors duration-200 flex items-center justify-center space-x-2 group"
    >
      <span>Send OTP</span>
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
    </motion.button>

    <button
      onClick={() => setCurrentView("login")}
      className="w-full text-center text-sm text-forest hover:text-clay font-semibold transition-colors"
    >
      Back to Login
    </button>
  </motion.div>
);

export default Login;
