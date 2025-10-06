import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  DollarSign,
  TrendingUp,
  Calendar,
  Download,
  Check,
  Zap,
  Crown,
  Rocket,
  AlertCircle,
  ArrowRight,
  Package
} from "lucide-react";

const BillingContent = () => {
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [billingCycle, setBillingCycle] = useState("monthly"); // monthly or yearly
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const plans = [
    {
      id: "starter",
      name: "Starter",
      icon: Package,
      price: { monthly: 49, yearly: 470 },
      credits: 1000,
      features: [
        "1,000 Lead Credits/month",
        "5 Active Campaigns",
        "Basic Analytics",
        "Email Support",
        "1 User Account"
      ],
      color: "sand"
    },
    {
      id: "pro",
      name: "Professional",
      icon: Zap,
      price: { monthly: 149, yearly: 1430 },
      credits: 5000,
      popular: true,
      features: [
        "5,000 Lead Credits/month",
        "Unlimited Campaigns",
        "Advanced Analytics",
        "Priority Support",
        "5 User Accounts",
        "API Access",
        "Custom Integrations"
      ],
      color: "forest"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      icon: Crown,
      price: { monthly: 499, yearly: 4790 },
      credits: 25000,
      features: [
        "25,000 Lead Credits/month",
        "Unlimited Everything",
        "AI-Powered Insights",
        "24/7 Dedicated Support",
        "Unlimited Users",
        "Custom AI Training",
        "White-label Solution",
        "SLA Guarantee"
      ],
      color: "clay"
    }
  ];

  const paymentMethods = [
    { id: "stripe", name: "Credit/Debit Card", logo: "💳", provider: "Stripe" },
    { id: "paypal", name: "PayPal", logo: "🅿️", provider: "PayPal" },
    { id: "jazzcash", name: "JazzCash", logo: "📱", provider: "JazzCash" },
    { id: "easypaisa", name: "Easypaisa", logo: "💰", provider: "Easypaisa" }
  ];

  const usageHistory = [
    { date: "2024-01-15", description: "Scraping Job - Real Estate Karachi", credits: -250, amount: "$12.50" },
    { date: "2024-01-14", description: "Email Campaign - 500 leads", credits: -50, amount: "$2.50" },
    { date: "2024-01-12", description: "Scraping Job - IT Companies Lahore", credits: -180, amount: "$9.00" },
    { date: "2024-01-10", description: "Monthly Plan Renewal", credits: 5000, amount: "-$149.00" },
    { date: "2024-01-08", description: "WhatsApp Campaign - 300 leads", credits: -75, amount: "$3.75" }
  ];

  const currentPlan = plans.find(p => p.id === "pro");
  const creditsRemaining = 3240;
  const creditsUsed = currentPlan.credits - creditsRemaining;
  const usagePercentage = (creditsUsed / currentPlan.credits) * 100;

  const handleUpgrade = (planId) => {
    console.log("Upgrading to:", planId);
    alert(`Upgrading to ${planId} plan (API integration pending)`);
  };

  const handlePayment = () => {
    if (!selectedPaymentMethod) {
      alert("Please select a payment method");
      return;
    }
    console.log("Processing payment with:", selectedPaymentMethod);
    alert("Payment processing... (API integration pending)");
  };

  return (
    <div className="space-y-6">
      {/* Current Plan Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 border border-sand/20">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-forest" />
            </div>
            <div>
              <p className="text-ink/60 text-sm">Current Plan</p>
              <p className="text-xl font-bold text-ink">{currentPlan.name}</p>
            </div>
          </div>
          <p className="text-sm text-ink/60">Renews on Feb 10, 2024</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-sand/20">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-clay/10 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-clay" />
            </div>
            <div>
              <p className="text-ink/60 text-sm">Credits Left</p>
              <p className="text-xl font-bold text-ink">{creditsRemaining.toLocaleString()}</p>
            </div>
          </div>
          <div className="w-full bg-shell rounded-full h-2">
            <div 
              className="bg-clay h-2 rounded-full transition-all"
              style={{ width: `${100 - usagePercentage}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-sand/20">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-sand/40 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-forest" />
            </div>
            <div>
              <p className="text-ink/60 text-sm">This Month</p>
              <p className="text-xl font-bold text-ink">${(creditsUsed * 0.05).toFixed(2)}</p>
            </div>
          </div>
          <p className="text-sm text-green-600 font-semibold">Within budget</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-sand/20">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-forest" />
            </div>
            <div>
              <p className="text-ink/60 text-sm">Next Billing</p>
              <p className="text-xl font-bold text-ink">Feb 10</p>
            </div>
          </div>
          <p className="text-sm text-ink/60">$149.00</p>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-forest">Choose Your Plan</h2>
          <div className="flex items-center space-x-2 bg-shell rounded-full p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                billingCycle === "monthly"
                  ? "bg-forest text-sand"
                  : "text-ink hover:text-forest"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                billingCycle === "yearly"
                  ? "bg-forest text-sand"
                  : "text-ink hover:text-forest"
              }`}
            >
              Yearly
              <span className="ml-2 px-2 py-0.5 bg-clay text-white text-xs rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly;
            const isCurrentPlan = plan.id === currentPlan.id;

            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -4 }}
                className={`relative rounded-2xl p-6 border-2 transition-all ${
                  plan.popular
                    ? "border-forest shadow-lg scale-105"
                    : "border-sand/20"
                } ${isCurrentPlan ? "bg-forest/5" : "bg-white"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-forest text-sand text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}

                {isCurrentPlan && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-clay text-white text-xs font-bold rounded-full">
                    CURRENT
                  </div>
                )}

                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-${plan.color}/10 rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${plan.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
                    <p className="text-sm text-ink/60">{plan.credits.toLocaleString()} credits</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-ink">${price}</span>
                    <span className="text-ink/60 ml-2">/{billingCycle === "monthly" ? "mo" : "yr"}</span>
                  </div>
                  {billingCycle === "yearly" && (
                    <p className="text-sm text-green-600 font-semibold mt-1">
                      Save ${(plan.price.monthly * 12 - plan.price.yearly).toFixed(0)}/year
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-ink/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleUpgrade(plan.id)}
                  disabled={isCurrentPlan}
                  className={`w-full py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 ${
                    isCurrentPlan
                      ? "bg-shell text-ink/40 cursor-not-allowed"
                      : plan.popular
                      ? "bg-forest text-sand hover:bg-clay"
                      : "bg-shell text-ink hover:bg-sand"
                  }`}
                >
                  <span>{isCurrentPlan ? "Current Plan" : "Upgrade Now"}</span>
                  {!isCurrentPlan && <ArrowRight className="w-4 h-4" />}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payment Methods */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
          <h3 className="text-xl font-bold text-forest mb-6">Payment Methods</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {paymentMethods.map((method) => (
              <motion.button
                key={method.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPaymentMethod(method.id)}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  selectedPaymentMethod === method.id
                    ? "border-forest bg-forest/10"
                    : "border-sand/20 bg-white hover:border-forest/50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{method.logo}</span>
                  <div>
                    <p className="font-semibold text-ink">{method.name}</p>
                    <p className="text-sm text-ink/60">{method.provider}</p>
                  </div>
                  {selectedPaymentMethod === method.id && (
                    <Check className="w-5 h-5 text-forest ml-auto" />
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          <div className="bg-clay/10 border border-clay/20 rounded-xl p-4 flex items-start space-x-3 mb-6">
            <AlertCircle className="w-5 h-5 text-clay flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-ink mb-1">Secure Payment</p>
              <p className="text-xs text-ink/70">
                All transactions are encrypted and secure. Your payment information is never stored on our servers.
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handlePayment}
            className="w-full py-4 bg-forest text-sand rounded-xl font-semibold hover:bg-clay transition-colors flex items-center justify-center space-x-2"
          >
            <CreditCard className="w-5 h-5" />
            <span>Process Payment</span>
          </motion.button>
        </div>

        {/* Cost Calculator */}
        <div className="bg-gradient-to-br from-forest to-clay text-sand rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4">Cost Per Lead</h3>
          
          <div className="space-y-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-sand/80 text-sm mb-1">Average Cost</p>
              <p className="text-3xl font-bold">$0.05</p>
              <p className="text-xs text-sand/60 mt-1">per lead</p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-sand/80">Google Maps:</span>
                <span className="font-semibold">$0.05</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sand/80">Facebook:</span>
                <span className="font-semibold">$0.08</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sand/80">LinkedIn:</span>
                <span className="font-semibold">$0.10</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sand/80">+ Reviews:</span>
                <span className="font-semibold">+$0.02</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sand/80">+ Images:</span>
                <span className="font-semibold">+$0.03</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-3">
            <p className="text-xs text-sand/90">
              💡 Bulk discounts available for Enterprise plans. Contact sales for custom pricing.
            </p>
          </div>
        </div>
      </div>

      {/* Usage History */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-forest">Usage History</h3>
          <button className="px-4 py-2 bg-shell text-ink rounded-lg hover:bg-sand transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span className="text-sm font-semibold">Export</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-shell border-b border-sand/20">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-ink">Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-ink">Description</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-ink">Credits</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-ink">Amount</th>
              </tr>
            </thead>
            <tbody>
              {usageHistory.map((item, idx) => (
                <tr key={idx} className="border-b border-sand/10 hover:bg-shell/50 transition-colors">
                  <td className="px-4 py-3 text-sm text-ink/70">{item.date}</td>
                  <td className="px-4 py-3 text-sm text-ink">{item.description}</td>
                  <td className={`px-4 py-3 text-sm text-right font-semibold ${
                    item.credits > 0 ? "text-green-600" : "text-clay"
                  }`}>
                    {item.credits > 0 ? "+" : ""}{item.credits}
                  </td>
                  <td className="px-4 py-3 text-sm text-right font-semibold text-ink">
                    {item.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BillingContent;