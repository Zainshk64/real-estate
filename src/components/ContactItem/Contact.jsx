import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  CheckCircle,
  ArrowUp,
  ArrowBigUp,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import SectionHeader from "../SectionHeader";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    subject: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        subject: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+92 300 1234567",
      subDetails: "Mon-Fri 9am-6pm PKT",
      color: "clay",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@leadsai.com",
      subDetails: "We reply within 24 hours",
      color: "clay",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Islamabad, Pakistan",
      subDetails: "F-7 Markaz, Blue Area",
      color: "clay",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Fri: 9AM - 6PM",
      subDetails: "Sat: 10AM - 4PM",
      color: "clay",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "text-blue-600" },
    { icon: Twitter, name: "Twitter", url: "#", color: "text-blue-400" },
    { icon: Facebook, name: "Facebook", url: "#", color: "text-blue-700" },
    { icon: Instagram, name: "Instagram", url: "#", color: "text-pink-600" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How quickly can I get started?",
      answer:
        "You can start generating leads within 24 hours of signing up. Our onboarding team will help you set up your first campaign.",
    },
    {
      question: "Do you offer custom integrations?",
      answer:
        "Yes! Enterprise plans include custom API integrations with your CRM, marketing automation tools, and other business systems.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "We offer a 14-day money-back guarantee. If you're not satisfied with our service, we'll provide a full refund, no questions asked.",
    },
    {
      question: "Can I schedule a demo?",
      answer:
        "Absolutely! Fill out the form or call us directly to schedule a personalized demo with our sales team.",
    },
  ];

  return (
    <section className="bg-shell pb-24 py-24">
      <div className="mx-auto max-w-6xl flex-col gap-10 px-4 pb-24 pt-16 md:flex-row md:items-end md:gap-16 lg:pt-24">
        {/* Header Section */}
        <div className="space-y-8 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
           
            <SectionHeader
              eyebrow="Get In Touch"
              title="Let's Build Something Amazing Together"
              description="Have questions? Want to see a demo? Or ready to transform your lead generation? We're here to help you succeed."
            />
          </motion.div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white/50 rounded-2xl p-6 shadow-sm border border-sand/20 hover:shadow-lg transition-all"
              >
                <div
                  className={`w-12 h-12 bg-${item.color}/10 rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-6 h-6 text-${item.color}`} />
                </div>
                <h3 className="text-lg font-bold text-forest mb-2">
                  {item.title}
                </h3>
                <p className="text-ink font-semibold mb-1">{item.details}</p>
                <p className="text-ink/60 text-sm">{item.subDetails}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Main Contact Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/50 rounded-2xl p-8 shadow-lg border border-sand/20"
          >
            <div className="flex items-center space-x-3 mb-6">
              <MessageSquare className="w-8 h-8 text-forest" />
              <h2 className="text-2xl font-bold text-forest">
                Send us a Message
              </h2>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle className="w-16 h-16 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-forest mb-2">
                  Message Sent!
                </h3>
                <p className="text-ink/70">
                  We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+92 300 1234567"
                      className="w-full px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                      className="w-full px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="">Select a subject</option>
                    <option value="demo">Request a Demo</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="w-full py-4 bg-forest text-sand rounded-xl font-semibold hover:bg-clay transition-colors flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            )}
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-sand/20"
          >
            <div className="h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52901.89906426415!2d73.01573684863281!3d33.6844202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-2xl p-6 md:p-10 border border-sand/50 bg-shell"
        >
          <h2 className="text-3xl font-bold text-forest mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl shadow-xs border-forest/10"
              >
                {/* Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between cursor-pointer items-center text-left p-5 md:p-6"
                >
                  <span className="text-base md:text-lg font-semibold text-forest">
                    {faq.question}
                  </span>
                  {activeIndex === index ? (
                    <ChevronUp className="text-forest" />
                  ) : (
                    <ChevronDown className="text-forest" />
                  )}
                </button>

                {/* Animated Answer */}
                {activeIndex === index && (
                  <motion.div
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`px-5 md:px-6 pb-5 md:pb-6 
                       text-ink/70 transition-all  text-sm md:text-base overflow-hidden`}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Social Links & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-forest to-clay text-sand rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
          <p className="text-sand/80 text-lg mb-8 max-w-2xl mx-auto">
            Follow us on social media for the latest updates, tips, and industry
            insights.
          </p>

          <div className="flex items-center justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 bg-white rounded-full flex flex-wrap items-center justify-center hover:shadow-lg transition-shadow"
                >
                  <Icon className={`w-6 h-6 ${social.color}`} />
                </motion.a>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-sand text-forest rounded-xl font-semibold hover:bg-white transition-colors"
            >
              Schedule a Demo
            </motion.button>
            <Link to={"/pricing"} onClick={() => screenTop(0, 0)}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent cursor-pointer border-2 border-sand text-sand rounded-xl font-semibold hover:bg-sand hover:text-forest transition-colors"
              >
                View Pricing
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
