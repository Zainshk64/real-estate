import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Mail,
  FileText,
  MessageSquare,
  UserCog,
  Settings,
  Menu,
  X,
  TrendingUp,
  Eye,
  Send,
  Calendar,
  BarChart3,
  Plus,
  Search,
  Filter,
  ChevronRight,
  CreditCard,
  Download,
} from "lucide-react";
import LeadGeneratorContent from "./LeadGeneratorContent";
import BillingContent from "./BillingContent";
import ExportsContent from "./ExportContent";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "leadgenerator", label: "Lead Generator", icon: Search }, // NEW
    { id: "leads", label: "Leads", icon: Users },
    { id: "campaigns", label: "Campaigns", icon: Mail },
    { id: "posts", label: "Posts", icon: FileText },
    { id: "comments", label: "Comments", icon: MessageSquare },
    { id: "users", label: "Users & Roles", icon: UserCog },
    { id: "billing", label: "Billing", icon: CreditCard }, // NEW
    { id: "exports", label: "Exports", icon: Download },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardContent />;
      case "leadgenerator":
        return <LeadGeneratorContent />; // NEW
      case "leads":
        return <LeadsContent />;
      case "campaigns":
        return <CampaignsContent />;
      case "posts":
        return <PostsContent />;
      case "comments":
        return <CommentsContent />;
      case "users":
        return <UsersContent />;
      case "billing":
        return <BillingContent />; // NEW
      case "exports":
        return <ExportsContent />;
      case "settings":
        return <SettingsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="min-h-screen bg-shell flex">
      {/* Sidebar */}
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
                <LayoutDashboard className="w-6 h-6 text-forest" />
              </div>
              <div>
                <h2 className="text-sand font-bold text-lg">Admin</h2>
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
                    layoutId="activeTab"
                    className="ml-auto w-2 h-2 bg-forest rounded-full"
                  />
                )}
              </motion.button>
            );
          })}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
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
                <div className="w-8 h-8 bg-forest rounded-full flex items-center justify-center">
                  <span className="text-sand text-sm font-bold">AD</span>
                </div>
                <span className="text-ink font-medium">Admin User</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
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

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-ink/50 z-30 lg:hidden"
        />
      )}
    </div>
  );
};

// Dashboard Content
const DashboardContent = () => {
  const metrics = [
    {
      label: "Total Leads",
      value: "1,234",
      change: "+12%",
      icon: Users,
      color: "bg-forest",
    },
    {
      label: "Active Campaigns",
      value: "24",
      change: "+8%",
      icon: Mail,
      color: "bg-clay",
    },
    {
      label: "Conversions",
      value: "456",
      change: "+23%",
      icon: TrendingUp,
      color: "bg-sand",
    },
    {
      label: "Engagement Rate",
      value: "67%",
      change: "+5%",
      icon: BarChart3,
      color: "bg-forest",
    },
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
                <div
                  className={`w-12 h-12 ${metric.color} rounded-xl flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-green-600">
                  {metric.change}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-ink mb-1">
                {metric.value}
              </h3>
              <p className="text-ink/60 text-sm">{metric.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
          <h3 className="text-xl font-bold text-forest mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex items-center space-x-4 p-3 bg-shell rounded-lg"
              >
                <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-sand" />
                </div>
                <div className="flex-1">
                  <p className="text-ink font-medium">New lead added</p>
                  <p className="text-ink/60 text-sm">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
          <h3 className="text-xl font-bold text-forest mb-4">Top Campaigns</h3>
          <div className="space-y-4">
            {[
              "Summer Sale 2024",
              "Product Launch",
              "Newsletter #45",
              "Holiday Special",
            ].map((campaign, idx) => (
              <div
                key={campaign}
                className="flex items-center justify-between p-3 bg-shell rounded-lg"
              >
                <span className="text-ink font-medium">{campaign}</span>
                <span className="text-clay font-bold">{85 - idx * 5}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Leads Content
const LeadsContent = () => {
  const leads = [
    {
      id: 1,
      name: "John Smith",
      email: "john@example.com",
      score: 92,
      status: "Hot",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      score: 78,
      status: "Warm",
    },
    {
      id: 3,
      name: "Mike Williams",
      email: "mike@example.com",
      score: 65,
      status: "Cold",
    },
    {
      id: 4,
      name: "Emily Brown",
      email: "emily@example.com",
      score: 88,
      status: "Hot",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/40" />
          <input
            type="text"
            placeholder="Search leads..."
            className="w-full pl-10 pr-4 py-3 bg-white border-2 border-sand/20 rounded-xl focus:border-forest focus:outline-none"
          />
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-3 bg-shell text-ink rounded-xl hover:bg-sand transition-colors flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <span>Filter</span>
          </button>
          <button className="px-4 py-3 bg-forest text-sand rounded-xl hover:bg-clay transition-colors flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Add Lead</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-sand/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-shell border-b border-sand/20">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-ink">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-ink">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-ink">
                  Score
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-ink">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-ink">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-sand/10 hover:bg-shell/50 transition-colors"
                >
                  <td className="px-6 py-4 text-ink font-medium">
                    {lead.name}
                  </td>
                  <td className="px-6 py-4 text-ink/70">{lead.email}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-forest/10 text-forest rounded-full text-sm font-semibold">
                      {lead.score}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        lead.status === "Hot"
                          ? "bg-clay/10 text-clay"
                          : lead.status === "Warm"
                          ? "bg-sand/30 text-forest"
                          : "bg-ink/10 text-ink"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-forest hover:text-clay transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
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

// Campaigns Content
const CampaignsContent = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-forest text-sand rounded-xl hover:bg-clay transition-colors flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Create Campaign</span>
          </button>
          <button className="px-6 py-3 bg-shell text-ink rounded-xl hover:bg-sand transition-colors">
            Templates
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <motion.div
            key={item}
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20"
          >
            <div className="flex items-center justify-between mb-4">
              <Mail className="w-10 h-10 text-forest" />
              <span className="px-3 py-1 bg-forest/10 text-forest rounded-full text-sm font-semibold">
                Active
              </span>
            </div>
            <h3 className="text-lg font-bold text-ink mb-2">
              Campaign #{item}
            </h3>
            <p className="text-ink/60 text-sm mb-4">
              Email marketing campaign with automated follow-ups
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-ink/60">Open Rate</span>
              <span className="text-forest font-bold">68%</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-ink/60">Click Rate</span>
              <span className="text-clay font-bold">24%</span>
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

// Posts Content
const PostsContent = () => {
  return (
    <div className="space-y-6">
      <div className="flex gap-3">
        <button className="px-6 py-3 bg-forest text-sand rounded-xl hover:bg-clay transition-colors">
          Scraped Posts
        </button>
        <button className="px-6 py-3 bg-shell text-ink rounded-xl hover:bg-sand transition-colors">
          Rephrased Posts
        </button>
        <button className="px-6 py-3 bg-shell text-ink rounded-xl hover:bg-sand transition-colors flex items-center space-x-2">
          <Calendar className="w-5 h-5" />
          <span>Schedule</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-sand" />
                </div>
                <div>
                  <h4 className="font-bold text-ink">Post Title #{item}</h4>
                  <p className="text-ink/60 text-sm">2 hours ago</p>
                </div>
              </div>
            </div>
            <p className="text-ink/70 mb-4">
              This is a sample post content that has been rephrased using AI. It
              maintains the original message while improving clarity and
              engagement.
            </p>
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-forest text-sand rounded-lg hover:bg-clay transition-colors">
                Publish Now
              </button>
              <button className="px-4 py-2 bg-shell text-ink rounded-lg hover:bg-sand transition-colors">
                <Calendar className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Comments Content
const CommentsContent = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-sand/20 overflow-hidden">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="p-6 border-b border-sand/10 last:border-b-0"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center">
                  <span className="text-sand font-bold">U{item}</span>
                </div>
                <div>
                  <h4 className="font-bold text-ink">User Name #{item}</h4>
                  <p className="text-ink/60 text-sm">Commented on Post Title</p>
                </div>
              </div>
              <div className="px-3 py-1 bg-clay/10 text-clay rounded-full text-sm font-semibold">
                Score: {90 - item * 5}
              </div>
            </div>
            <p className="text-ink/70 mb-4 ml-16">
              This is a sample comment showing interest in the product. The AI
              has analyzed and scored this comment based on engagement
              potential.
            </p>
            <div className="ml-16 flex gap-2">
              <button className="px-4 py-2 bg-forest text-sand rounded-lg hover:bg-clay transition-colors flex items-center space-x-2">
                <Send className="w-4 h-4" />
                <span>Trigger Outreach</span>
              </button>
              <button className="px-4 py-2 bg-shell text-ink rounded-lg hover:bg-sand transition-colors">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Users Content
const UsersContent = () => {
  return (
    <div className="space-y-6">
      <button className="px-6 py-3 bg-forest text-sand rounded-xl hover:bg-clay transition-colors flex items-center space-x-2">
        <Plus className="w-5 h-5" />
        <span>Add User</span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Sales Team 1", role: "Sales", email: "sales1@company.com" },
          { name: "Sales Team 2", role: "Sales", email: "sales2@company.com" },
          {
            name: "Marketing Team 1",
            role: "Marketing",
            email: "marketing1@company.com",
          },
          {
            name: "Marketing Team 2",
            role: "Marketing",
            email: "marketing2@company.com",
          },
        ].map((user, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center">
                <span className="text-sand font-bold text-xl">
                  {user.name.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-ink">{user.name}</h4>
                <p className="text-ink/60 text-sm">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  user.role === "Sales"
                    ? "bg-clay/10 text-clay"
                    : "bg-forest/10 text-forest"
                }`}
              >
                {user.role}
              </span>
              <button className="text-forest hover:text-clay transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Settings Content
const SettingsContent = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
        <h3 className="text-xl font-bold text-forest mb-4">API Keys</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-ink mb-2">
              OpenAI API Key
            </label>
            <input
              type="password"
              placeholder="sk-..."
              className="w-full px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-ink mb-2">
              Email Service API
            </label>
            <input
              type="password"
              placeholder="Enter API key"
              className="w-full px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
        <h3 className="text-xl font-bold text-forest mb-4">Integrations</h3>
        <div className="space-y-3">
          {["LinkedIn", "Facebook", "Twitter", "WhatsApp"].map((platform) => (
            <div
              key={platform}
              className="flex items-center justify-between p-4 bg-shell rounded-xl"
            >
              <span className="text-ink font-medium">{platform}</span>
              <button className="px-4 py-2 bg-forest text-sand rounded-lg hover:bg-clay transition-colors">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
        <h3 className="text-xl font-bold text-forest mb-4">Compliance</h3>
        <div className="space-y-3">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-2 border-forest text-forest"
              defaultChecked
            />
            <span className="text-ink">GDPR Compliance</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-2 border-forest text-forest"
              defaultChecked
            />
            <span className="text-ink">Email Opt-out Settings</span>
          </label>
        </div>
      </div>

      <button className="px-8 py-3 bg-forest text-sand rounded-xl hover:bg-clay transition-colors">
        Save Changes
      </button>
    </div>
  );
};

export default AdminDashboard;
