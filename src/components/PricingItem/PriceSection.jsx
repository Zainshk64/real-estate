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
  Package,
} from "lucide-react";
import SectionHeader from "../SectionHeader";

const PriceSection = () => {
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
        "1 User Account",
      ],
      color: "sand",
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
        "Custom Integrations",
      ],
      color: "forest",
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
        "SLA Guarantee",
      ],
      color: "clay",
    },
  ];

  const currentPlan = plans.find((p) => p.id === "pro");
  const creditsRemaining = 3240;
  const creditsUsed = currentPlan.credits - creditsRemaining;
  const usagePercentage = (creditsUsed / currentPlan.credits) * 100;

  const handleUpgrade = (planId) => {
    console.log("Upgrading to:", planId);
    alert(`Upgrading to ${planId} plan (API integration pending)`);
  };
  return (
    <section className="bg-shell pb-24 py-24">
      <div className="mx-auto max-w-6xl flex-col gap-10 px-4 pb-24 pt-16 md:flex-row md:items-end md:gap-16 lg:pt-24">
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Pricing That Grows With You"
            title="Scale Your Business with the Right Plan"
            description="Choose the plan that matches your growth stage — from startups automating their first campaigns to enterprises running global lead engines."
          />

          <div className="bg-white/70 rounded-2xl p-6 shadow-sm border border-sand/20">
            <div className="flex flex-wrap items-center justify-center space-y-3 md:justify-between mb-6">
              <h2 className="text-2xl font-bold text-forest">
                Choose Your Plan
              </h2>
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
                const price =
                  billingCycle === "monthly"
                    ? plan.price.monthly
                    : plan.price.yearly;
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
                      <div
                        className={`w-12 h-12 bg-${plan.color}/10 rounded-xl flex items-center justify-center`}
                      >
                        <Icon className={`w-6 h-6 text-${plan.color}`} />
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                      >
                        <h3 className="text-xl font-bold text-ink">
                          {plan.name}
                        </h3>
                        <p className="text-sm text-ink/60">
                          {plan.credits.toLocaleString()} credits
                        </p>
                      </motion.div>
                    </div>

                    <div className="mb-6">
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="flex items-baseline"
                      >
                        <span className="text-4xl font-bold text-ink">
                          ${price}
                        </span>
                        <span className="text-ink/60 ml-2">
                          /{billingCycle === "monthly" ? "mo" : "yr"}
                        </span>
                      </motion.div>
                      {billingCycle === "yearly" && (
                        <p className="text-sm text-green-600 font-semibold mt-1">
                          Save $
                          {(
                            plan.price.monthly * 12 -
                            plan.price.yearly
                          ).toFixed(0)}
                          /year
                        </p>
                      )}
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <motion.li
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * idx, duration: 0.6 }}
                          key={idx}
                          className="flex items-start space-x-2"
                        >
                          <Check className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-ink/70">{feature}</span>
                        </motion.li>
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
                      <span>
                        {isCurrentPlan ? "Current Plan" : "Upgrade Now"}
                      </span>
                      {!isCurrentPlan && <ArrowRight className="w-4 h-4" />}
                    </motion.button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
