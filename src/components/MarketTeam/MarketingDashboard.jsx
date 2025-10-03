import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  Mail,
  BarChart3,
  Menu,
  X,
  TrendingUp,
  Calendar,
  Send,
  Eye,
  Plus,
  Share2,
  Heart,
  MessageCircle,
  Repeat2
} from "lucide-react";

const MarketingDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "posts", label: "Posts", icon: FileText },
    { id: "campaigns", label: "Campaigns", icon: Mail },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardContent />;
      case "posts":
        return <PostsContent />;
      case "campaigns":
        return <CampaignsContent />;
      case "analytics":
        return <AnalyticsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="min-h-screen bg-shell flex">
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className={`fixed lg:sticky top-0 left-0 h-screen bg-forest z-40 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{ width: "16rem" }}
      >
        <div className="p-6 border-b border-sand/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-sand rounded-lg flex items-center justify-center">
                <Share2 className="w-6 h-6 text-forest" />
              </div>
              <div>
                <h2 className="text-sand font-bold text-lg">Marketing</h2>
                <p className="text-sand/60 text-xs">Dashboard</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-sand"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-sand text-forest shadow-lg"
                    : "text-sand/80 hover:bg-sand/10"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeMarketingTab"
                    className="ml-auto w-2 h-2 bg-forest rounded-full"
                  />
                )}
              </motion.button>
            );
          })}
        </nav>
      </motion.aside>

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white border-b border-sand/20 sticky top-0 z-30">
          <div className="px-4 lg:px-8 py-4 flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-ink p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold text-forest">
              {tabs.find((t) => t.id === activeTab)?.label}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 bg-shell px-4 py-2 rounded-lg">
                <div className="w-8 h-8 bg-sand rounded-full flex items-center justify-center">
                  <span className="text-forest text-sm font-bold">MT</span>
                </div>
                <span className="text-ink font-medium">Marketing Team</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-ink/50 z-30 lg:hidden"
        />
      )}
    </div>
  );
};

const DashboardContent = () => {
  const metrics = [
    { label: "Total Reach", value: "45.2K", change: "+18%", icon: Share2, color: "bg-clay" },
    { label: "Engagement Rate", value: "8.4%", change: "+2.1%", icon: Heart, color: "bg-forest" },
    { label: "Active Campaigns", value: "12", change: "+3", icon: Mail, color: "bg-sand" },
    { label: "Posts Published", value: "156", change: "+24", icon: FileText, color: "bg-clay" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${metric.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-green-600">{metric.change}</span>
              </div>
              <h3 className="text-3xl font-bold text-ink mb-1">{metric.value}</h3>
              <p className="text-ink/60 text-sm">{metric.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
          <h3 className="text-xl font-bold text-forest mb-4">Campaign Performance</h3>
          <div className="space-y-4">
            {[
              { name: "Summer Launch", engagement: 92, reach: "12.5K" },
              { name: "Product Demo", engagement: 88, reach: "10.2K" },
              { name: "Newsletter", engagement: 76, reach: "8.9K" },
              { name: "Holiday Special", engagement: 84, reach: "9.7K" },
            ].map((campaign, idx) => (
              <div key={idx} className="p-4 bg-shell rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-ink font-medium">{campaign.name}</span>
                  <span className="text-clay font-bold">{campaign.engagement}%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink/60">Reach: {campaign.reach}</span>
                  <button className="text-forest hover:text-clay transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
          <h3 className="text-xl font-bold text-forest mb-4">Social Performance</h3>
          <div className="space-y-4">
            {[
              { platform: "LinkedIn", followers: "2.4K", growth: "+12%" },
              { platform: "Facebook", followers: "5.8K", growth: "+8%" },
              { platform: "Twitter", followers: "3.2K", growth: "+15%" },
              { platform: "Instagram", followers: "4.6K", growth: "+20%" },
            ].map((social, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-shell rounded-lg">
                <div>
                  <p className="text-ink font-medium">{social.platform}</p>
                  <p className="text-ink/60 text-sm">{social.followers} followers</p>
                </div>
                <span className="text-green-600 font-bold">{social.growth}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PostsContent = () => {
  const [postView, setPostView] = useState("rephrased");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex gap-3">
          <button
            onClick={() => setPostView("scraped")}
            className={`px-6 py-3 rounded-xl transition-colors ${
              postView === "scraped"
                ? "bg-forest text-sand"
                : "bg-shell text-ink hover:bg-sand"
            }`}
          >
            Scraped Posts
          </button>
          <button
            onClick={() => setPostView("rephrased")}
            className={`px-6 py-3 rounded-xl transition-colors ${
              postView === "rephrased"
                ? "bg-forest text-sand"
                : "bg-shell text-ink hover:bg-sand"
            }`}
          >
            Rephrased Posts
          </button>
        </div>
        <button className="px-6 py-3 bg-clay text-white rounded-xl hover:bg-clay/90 transition-colors flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Create Post</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <motion.div
            key={item}
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-sand" />
                </div>
                <div>
                  <h4 className="font-bold text-ink">Post #{item}</h4>
                  <p className="text-ink/60 text-sm">{postView === "scraped" ? "Scraped" : "Rephrased"}</p>
                </div>
              </div>
            </div>
            <p className="text-ink/70 mb-4 text-sm">
              This is a sample post content that showcases the {postView} content. It includes engaging text optimized for social media.
            </p>
            <div className="flex items-center justify-between mb-4 text-sm text-ink/60">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>234</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>45</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Repeat2 className="w-4 h-4" />
                  <span>12</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-forest text-sand rounded-lg hover:bg-clay transition-colors flex items-center justify-center space-x-2">
                <Send className="w-4 h-4" />
                <span>Publish</span>
              </button>
              <button className="px-4 py-2 bg-shell text-ink rounded-lg hover:bg-sand transition-colors">
                <Calendar className="w-5 h-5" />
              </button>
              <button className="px-4 py-2 bg-shell text-ink rounded-lg hover:bg-sand transition-colors">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const CampaignsContent = () => {
  return (
    <div className="space-y-6">
      <div className="flex gap-3">
        <button className="px-6 py-3 bg-forest text-sand rounded-xl hover:bg-clay transition-colors flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Create Campaign</span>
        </button>
        <button className="px-6 py-3 bg-shell text-ink rounded-xl hover:bg-sand transition-colors">
          Email Templates
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Summer Sale 2024", type: "Email", status: "Active", sent: "1.2K", opened: "68%" },
          { name: "Product Launch", type: "Social", status: "Active", sent: "2.5K", opened: "72%" },
          { name: "Newsletter #12", type: "Email", status: "Scheduled", sent: "-", opened: "-" },
          { name: "Holiday Campaign", type: "Multi-channel", status: "Draft", sent: "-", opened: "-" },
          { name: "Webinar Invite", type: "Email", status: "Active", sent: "850", opened: "64%" },
          { name: "Flash Sale", type: "Social", status: "Completed", sent: "3.1K", opened: "78%" },
        ].map((campaign, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20"
          >
            <div className="flex items-center justify-between mb-4">
              <Mail className="w-10 h-10 text-clay" />
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                campaign.status === "Active" ? "bg-green-100 text-green-700" :
                campaign.status === "Scheduled" ? "bg-blue-100 text-blue-700" :
                campaign.status === "Draft" ? "bg-gray-100 text-gray-700" :
                "bg-purple-100 text-purple-700"
              }`}>
                {campaign.status}
              </span>
            </div>
            <h3 className="text-lg font-bold text-ink mb-1">{campaign.name}</h3>
            <p className="text-ink/60 text-sm mb-4">{campaign.type}</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-ink/60">Sent</span>
                <span className="text-ink font-semibold">{campaign.sent}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-ink/60">Open Rate</span>
                <span className="text-forest font-semibold">{campaign.opened}</span>
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-shell text-ink rounded-lg hover:bg-sand transition-colors flex items-center justify-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>View Analytics</span>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const AnalyticsContent = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
          <h3 className="text-xl font-bold text-forest mb-4">Engagement Over Time</h3>
          <div className="h-64 flex items-end justify-between space-x-2">
            {[65, 75, 82, 70, 88, 92, 78, 85, 90, 95, 88, 93].map((value, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${value}%` }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="w-full bg-gradient-to-t from-clay to-sand rounded-t-lg"
                />
                <span className="text-xs text-ink/60 mt-2">{idx + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
          <h3 className="text-xl font-bold text-forest mb-4">Top Performing Campaigns</h3>
          <div className="space-y-4">
            {[
              { name: "Summer Sale", engagement: 95, reach: "15.2K" },
              { name: "Product Launch", engagement: 92, reach: "13.8K" },
              { name: "Flash Sale", engagement: 88, reach: "12.5K" },
              { name: "Webinar", engagement: 85, reach: "11.2K" },
              { name: "Newsletter", engagement: 82, reach: "10.8K" },
            ].map((campaign, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-shell rounded-lg">
                <div className="flex-1">
                  <p className="text-ink font-medium">{campaign.name}</p>
                  <p className="text-ink/60 text-sm">Reach: {campaign.reach}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-clay">{campaign.engagement}%</p>
                  <p className="text-xs text-ink/60">Engagement</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-clay/10 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-clay" />
            </div>
            <div>
              <p className="text-ink/60 text-sm">Avg Engagement</p>
              <p className="text-2xl font-bold text-ink">8.7%</p>
            </div>
          </div>
          <p className="text-sm text-green-600 font-semibold">+2.3% from last month</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center">
              <Share2 className="w-6 h-6 text-forest" />
            </div>
            <div>
              <p className="text-ink/60 text-sm">Total Shares</p>
              <p className="text-2xl font-bold text-ink">3.2K</p>
            </div>
          </div>
          <p className="text-sm text-green-600 font-semibold">+18% from last month</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-sand/40 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-forest" />
            </div>
            <div>
              <p className="text-ink/60 text-sm">Total Likes</p>
              <p className="text-2xl font-bold text-ink">12.5K</p>
            </div>
          </div>
          <p className="text-sm text-green-600 font-semibold">+15% from last month</p>
        </div>
      </div>
    </div>
  );
};

export default MarketingDashboard;