import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Mail,
  MessageSquare,
  Menu,
  X,
  TrendingUp,
  Eye,
  Send,
  Phone,
  Star,
  Calendar,
  Target,
  CheckCircle,
  Clock
} from "lucide-react";

const SalesTeamDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "leads", label: "My Leads", icon: Users },
    { id: "campaigns", label: "Campaigns", icon: Mail },
    { id: "comments", label: "Comments", icon: MessageSquare },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardContent />;
      case "leads":
        return <MyLeadsContent />;
      case "campaigns":
        return <CampaignsContent />;
      case "comments":
        return <CommentsContent />;
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
              <div className="w-10 h-10 bg-clay rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-sand font-bold text-lg">Sales</h2>
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
                    layoutId="activeSalesTab"
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
                <div className="w-8 h-8 bg-clay rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">ST</span>
                </div>
                <span className="text-ink font-medium">Sales Team</span>
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
    { label: "My Leads", value: "42", change: "+8", icon: Users, color: "bg-clay" },
    { label: "Conversions", value: "18", change: "+5", icon: CheckCircle, color: "bg-forest" },
    { label: "Active Campaigns", value: "6", change: "+2", icon: Mail, color: "bg-sand" },
    { label: "Engagement Rate", value: "74%", change: "+12%", icon: TrendingUp, color: "bg-clay" },
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
          <h3 className="text-xl font-bold text-forest mb-4">My Performance</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-shell rounded-lg">
              <div className="flex items-center space-x-3">
                <Target className="w-8 h-8 text-clay" />
                <div>
                  <p className="text-ink font-medium">Monthly Target</p>
                  <p className="text-ink/60 text-sm">20 conversions</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-clay">18/20</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-shell rounded-lg">
              <div className="flex items-center space-x-3">
                <Star className="w-8 h-8 text-forest" />
                <div>
                  <p className="text-ink font-medium">Success Rate</p>
                  <p className="text-ink/60 text-sm">This month</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-forest">90%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
          <h3 className="text-xl font-bold text-forest mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: "Lead contacted", time: "10 mins ago", icon: Phone },
              { action: "Email sent", time: "1 hour ago", icon: Mail },
              { action: "Meeting scheduled", time: "2 hours ago", icon: Calendar },
              { action: "Lead converted", time: "3 hours ago", icon: CheckCircle },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center space-x-4 p-3 bg-shell rounded-lg">
                  <div className="w-10 h-10 bg-clay rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-ink font-medium">{item.action}</p>
                    <p className="text-ink/60 text-sm">{item.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const MyLeadsContent = () => {
  const leads = [
    { id: 1, name: "John Smith", email: "john@example.com", score: 92, status: "Hot", assigned: true },
    { id: 2, name: "Sarah Johnson", email: "sarah@example.com", score: 78, status: "Warm", assigned: true },
    { id: 3, name: "Mike Williams", email: "mike@example.com", score: 65, status: "Cold", assigned: true },
    { id: 4, name: "Emily Brown", email: "emily@example.com", score: 88, status: "Hot", assigned: true },
    { id: 5, name: "David Lee", email: "david@example.com", score: 82, status: "Warm", assigned: true },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-clay/10 border border-clay/20 rounded-xl p-4 flex items-center space-x-3">
        <Users className="w-6 h-6 text-clay" />
        <p className="text-ink">
          <span className="font-bold text-clay">{leads.length}</span> leads assigned to you
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {leads.map((lead) => (
          <motion.div
            key={lead.id}
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center">
                  <span className="text-sand font-bold">{lead.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-bold text-ink">{lead.name}</h4>
                  <p className="text-ink/60 text-sm">{lead.email}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                lead.status === "Hot" ? "bg-clay/10 text-clay" :
                lead.status === "Warm" ? "bg-sand/30 text-forest" :
                "bg-ink/10 text-ink"
              }`}>
                {lead.status}
              </span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-ink/60 text-sm">Engagement Score</span>
              <span className="text-forest font-bold text-lg">{lead.score}</span>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-forest text-sand rounded-lg hover:bg-clay transition-colors flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </button>
              <button className="flex-1 px-4 py-2 bg-shell text-ink rounded-lg hover:bg-sand transition-colors flex items-center justify-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>View</span>
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
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
        <h3 className="text-xl font-bold text-forest mb-4">Send Nurturing Campaign</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-ink mb-2">Campaign Type</label>
            <select className="w-full px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none">
              <option>Email Campaign</option>
              <option>WhatsApp Campaign</option>
              <option>SMS Campaign</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-ink mb-2">Select Template</label>
            <select className="w-full px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none">
              <option>Welcome Email</option>
              <option>Follow-up Email</option>
              <option>Product Demo</option>
              <option>Special Offer</option>
            </select>
          </div>
          <button className="w-full px-6 py-3 bg-forest text-sand rounded-xl hover:bg-clay transition-colors flex items-center justify-center space-x-2">
            <Send className="w-5 h-5" />
            <span>Send Campaign</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
            <div className="flex items-center justify-between mb-4">
              <Mail className="w-10 h-10 text-clay" />
              <span className="px-3 py-1 bg-forest/10 text-forest rounded-full text-sm font-semibold">
                Sent
              </span>
            </div>
            <h3 className="text-lg font-bold text-ink mb-2">Campaign #{item}</h3>
            <p className="text-ink/60 text-sm mb-4">Sent to 12 leads</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink/60">Opened</span>
                <span className="text-forest font-bold">8/12</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink/60">Clicked</span>
                <span className="text-clay font-bold">5/12</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CommentsContent = () => {
  return (
    <div className="space-y-6">
      <div className="bg-clay/10 border border-clay/20 rounded-xl p-4 flex items-center space-x-3">
        <MessageSquare className="w-6 h-6 text-clay" />
        <p className="text-ink">
          Engage with high-scoring leads based on their comments
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-sand/20 overflow-hidden">
        {[
          { user: "Alex Martinez", score: 95, comment: "Very interested in this product!" },
          { user: "Jessica Chen", score: 88, comment: "Can you provide more details?" },
          { user: "Robert Taylor", score: 82, comment: "Looking for enterprise solutions" },
          { user: "Maria Garcia", score: 78, comment: "Great service!" },
        ].map((item, idx) => (
          <div key={idx} className="p-6 border-b border-sand/10 last:border-b-0">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-clay rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{item.user.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-bold text-ink">{item.user}</h4>
                  <p className="text-ink/60 text-sm">Posted 2 hours ago</p>
                </div>
              </div>
              <div className="px-3 py-1 bg-clay/10 text-clay rounded-full text-sm font-semibold">
                Score: {item.score}
              </div>
            </div>
            <p className="text-ink/70 mb-4 ml-16">{item.comment}</p>
            <div className="ml-16 flex gap-2">
              <button className="px-4 py-2 bg-forest text-sand rounded-lg hover:bg-clay transition-colors flex items-center space-x-2">
                <Send className="w-4 h-4" />
                <span>Engage</span>
              </button>
              <button className="px-4 py-2 bg-shell text-ink rounded-lg hover:bg-sand transition-colors">
                Add to Leads
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesTeamDashboard;