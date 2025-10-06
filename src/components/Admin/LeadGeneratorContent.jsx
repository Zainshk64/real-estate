import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Building,
  Hash,
  Star,
  Phone,
  Mail,
  Image,
  MessageSquare,
  Calendar,
  Play,
  Save,
  DollarSign,
  AlertCircle,
  CheckCircle,
  Clock
} from "lucide-react";

const LeadGeneratorContent = () => {
  const [formData, setFormData] = useState({
    searchTerms: "",
    location: "",
    businessType: "",
    platforms: [],
    numResults: 100,
    minRating: "",
    hasContactInfo: false,
    includeReviews: false,
    includeImages: false,
    scheduleDate: "",
    scheduleTime: ""
  });

  const [estimatedCost, setEstimatedCost] = useState(0);
  const [savedConfigs, setSavedConfigs] = useState([]);
  const [activeJobs, setActiveJobs] = useState([
    { id: 1, name: "Real Estate Karachi", status: "Running", progress: 45 },
    { id: 2, name: "IT Companies Lahore", status: "Completed", progress: 100 },
    { id: 3, name: "Restaurants Islamabad", status: "Scheduled", progress: 0 },
  ]);

  const businessTypes = [
    "Real Estate Agency",
    "Restaurant",
    "IT Company",
    "Retail Store",
    "Healthcare",
    "Education",
    "Manufacturing",
    "Other"
  ];

  const platforms = [
    { id: "google", name: "Google Maps", cost: 0.05 },
    { id: "facebook", name: "Facebook", cost: 0.08 },
    { id: "instagram", name: "Instagram", cost: 0.08 },
    { id: "linkedin", name: "LinkedIn", cost: 0.10 },
    { id: "yelp", name: "Yelp", cost: 0.06 }
  ];

  const ratings = ["3.5+", "4.0+", "4.5+", "5.0"];

  useEffect(() => {
    calculateCost();
  }, [formData]);

  const calculateCost = () => {
    let baseCost = formData.numResults * 0.05;
    
    formData.platforms.forEach(platformId => {
      const platform = platforms.find(p => p.id === platformId);
      if (platform) baseCost += formData.numResults * platform.cost;
    });

    if (formData.includeReviews) baseCost += formData.numResults * 0.02;
    if (formData.includeImages) baseCost += formData.numResults * 0.03;

    setEstimatedCost(baseCost.toFixed(2));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handlePlatformToggle = (platformId) => {
    const platforms = formData.platforms.includes(platformId)
      ? formData.platforms.filter(p => p !== platformId)
      : [...formData.platforms, platformId];
    
    setFormData({ ...formData, platforms });
  };

  const handleStartScraping = () => {
    console.log("Starting scraping job:", formData);
    alert("Scraping job started! (API integration pending)");
  };

  const handleSaveConfig = () => {
    const config = { ...formData, id: Date.now(), name: formData.searchTerms || "Untitled Config" };
    setSavedConfigs([...savedConfigs, config]);
    alert("Configuration saved!");
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-sand/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-forest" />
            </div>
            <div>
              <p className="text-ink/60 text-sm">Active Jobs</p>
              <p className="text-2xl font-bold text-ink">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-sand/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-clay/10 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-clay" />
            </div>
            <div>
              <p className="text-ink/60 text-sm">Completed</p>
              <p className="text-2xl font-bold text-ink">48</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-sand/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-sand/40 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-forest" />
            </div>
            <div>
              <p className="text-ink/60 text-sm">Credits Left</p>
              <p className="text-2xl font-bold text-ink">$2,450</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-sand/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center">
              <Search className="w-5 h-5 text-forest" />
            </div>
            <div>
              <p className="text-ink/60 text-sm">Total Leads</p>
              <p className="text-2xl font-bold text-ink">15.2K</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Scraping Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
          <h2 className="text-2xl font-bold text-forest mb-6">Create Scraping Job</h2>
          
          <div className="space-y-5">
            {/* Search Terms */}
            <div>
              <label className="block text-sm font-semibold text-ink mb-2">
                <Search className="w-4 h-4 inline mr-2" />
                Search Term(s)
              </label>
              <input
                type="text"
                name="searchTerms"
                value={formData.searchTerms}
                onChange={handleInputChange}
                placeholder='e.g. "Real estate agency", "IT company"'
                className="w-full px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-ink mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="e.g. Karachi, Lahore, Islamabad"
                className="w-full px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors"
              />
            </div>

            {/* Business Type */}
            <div>
              <label className="block text-sm font-semibold text-ink mb-2">
                <Building className="w-4 h-4 inline mr-2" />
                Business Type
              </label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors cursor-pointer"
              >
                <option value="">Select business type</option>
                {businessTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Platforms */}
            <div>
              <label className="block text-sm font-semibold text-ink mb-3">
                Platforms to Scrape
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {platforms.map((platform) => (
                  <motion.button
                    key={platform.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePlatformToggle(platform.id)}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      formData.platforms.includes(platform.id)
                        ? "border-forest bg-forest/10 text-forest"
                        : "border-sand/20 bg-white text-ink hover:border-forest/50"
                    }`}
                  >
                    <p className="font-medium text-sm">{platform.name}</p>
                    <p className="text-xs opacity-70">${platform.cost}/lead</p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Number of Results & Rating */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-ink mb-2">
                  <Hash className="w-4 h-4 inline mr-2" />
                  Number of Results
                </label>
                <input
                  type="number"
                  name="numResults"
                  value={formData.numResults}
                  onChange={handleInputChange}
                  min="1"
                  max="10000"
                  className="w-full px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-ink mb-2">
                  <Star className="w-4 h-4 inline mr-2" />
                  Minimum Rating
                </label>
                <select
                  name="minRating"
                  value={formData.minRating}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="">Any rating</option>
                  {ratings.map((rating) => (
                    <option key={rating} value={rating}>{rating}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Toggles */}
            <div className="space-y-3">
              <label className="flex items-center space-x-3 p-3 bg-shell rounded-xl cursor-pointer hover:bg-sand/20 transition-colors">
                <input
                  type="checkbox"
                  name="hasContactInfo"
                  checked={formData.hasContactInfo}
                  onChange={handleInputChange}
                  className="w-5 h-5 rounded border-2 border-forest text-forest focus:ring-forest"
                />
                <Phone className="w-5 h-5 text-ink/60" />
                <span className="text-sm font-medium text-ink">Only with Email/Phone</span>
              </label>

              <label className="flex items-center space-x-3 p-3 bg-shell rounded-xl cursor-pointer hover:bg-sand/20 transition-colors">
                <input
                  type="checkbox"
                  name="includeReviews"
                  checked={formData.includeReviews}
                  onChange={handleInputChange}
                  className="w-5 h-5 rounded border-2 border-forest text-forest focus:ring-forest"
                />
                <MessageSquare className="w-5 h-5 text-ink/60" />
                <span className="text-sm font-medium text-ink">Include Reviews</span>
                <span className="text-xs text-clay">+$0.02/lead</span>
              </label>

              <label className="flex items-center space-x-3 p-3 bg-shell rounded-xl cursor-pointer hover:bg-sand/20 transition-colors">
                <input
                  type="checkbox"
                  name="includeImages"
                  checked={formData.includeImages}
                  onChange={handleInputChange}
                  className="w-5 h-5 rounded border-2 border-forest text-forest focus:ring-forest"
                />
                <Image className="w-5 h-5 text-ink/60" />
                <span className="text-sm font-medium text-ink">Include Images</span>
                <span className="text-xs text-clay">+$0.03/lead</span>
              </label>
            </div>

            {/* Schedule */}
            <div>
              <label className="block text-sm font-semibold text-ink mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Schedule (Optional)
              </label>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  name="scheduleDate"
                  value={formData.scheduleDate}
                  onChange={handleInputChange}
                  className="px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors"
                />
                <input
                  type="time"
                  name="scheduleTime"
                  value={formData.scheduleTime}
                  onChange={handleInputChange}
                  className="px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleStartScraping}
                className="flex-1 py-3 bg-forest text-sand rounded-xl font-semibold hover:bg-clay transition-colors flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Start Scraping</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSaveConfig}
                className="px-6 py-3 bg-shell text-ink rounded-xl font-semibold hover:bg-sand transition-colors flex items-center space-x-2"
              >
                <Save className="w-5 h-5" />
                <span>Save</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Cost Estimator & Active Jobs */}
        <div className="space-y-6">
          {/* Cost Estimator */}
          <div className="bg-gradient-to-br from-forest to-clay text-sand rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-2 mb-4">
              <DollarSign className="w-6 h-6" />
              <h3 className="text-xl font-bold">Cost Estimate</h3>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
              <p className="text-sand/80 text-sm mb-2">Estimated Cost</p>
              <p className="text-4xl font-bold">${estimatedCost}</p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-sand/80">Base cost:</span>
                <span className="font-semibold">${(formData.numResults * 0.05).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sand/80">Platforms:</span>
                <span className="font-semibold">{formData.platforms.length} selected</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sand/80">Results:</span>
                <span className="font-semibold">{formData.numResults}</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-white/10 rounded-lg flex items-start space-x-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-sand/90">
                Final cost may vary based on actual results found and data quality.
              </p>
            </div>
          </div>

          {/* Saved Configurations */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
            <h3 className="text-lg font-bold text-forest mb-4">Saved Configs</h3>
            {savedConfigs.length === 0 ? (
              <p className="text-ink/60 text-sm text-center py-4">No saved configurations</p>
            ) : (
              <div className="space-y-2">
                {savedConfigs.slice(-3).map((config) => (
                  <div key={config.id} className="p-3 bg-shell rounded-lg hover:bg-sand/20 transition-colors cursor-pointer">
                    <p className="text-ink font-medium text-sm">{config.name}</p>
                    <p className="text-ink/60 text-xs">{config.location}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Active Jobs */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
            <h3 className="text-lg font-bold text-forest mb-4">Active Jobs</h3>
            <div className="space-y-3">
              {activeJobs.map((job) => (
                <div key={job.id} className="p-3 bg-shell rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-ink font-medium text-sm">{job.name}</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      job.status === "Running" ? "bg-blue-100 text-blue-700" :
                      job.status === "Completed" ? "bg-green-100 text-green-700" :
                      "bg-gray-100 text-gray-700"
                    }`}>
                      {job.status}
                    </span>
                  </div>
                  <div className="w-full bg-sand/30 rounded-full h-2">
                    <div
                      className="bg-forest h-2 rounded-full transition-all duration-500"
                      style={{ width: `${job.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadGeneratorContent;