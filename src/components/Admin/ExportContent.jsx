import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  FileText,
  Table,
  Code,
  Search,
  Filter,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  Trash2,
  Eye,
  RefreshCw,
  FileSpreadsheet,
  File
} from "lucide-react";

const ExportsContent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterFormat, setFilterFormat] = useState("all");
  const [selectedExports, setSelectedExports] = useState([]);

  // Dummy export jobs data
  const [exportJobs, setExportJobs] = useState([
    {
      id: "EXP-001",
      name: "Real Estate Leads - Karachi",
      status: "completed",
      format: "xlsx",
      size: "2.4 MB",
      records: 1250,
      createdAt: "2024-01-15 10:30 AM",
      downloadUrl: "/downloads/exp-001.xlsx",
      expiresAt: "2024-02-15"
    },
    {
      id: "EXP-002",
      name: "IT Companies - Lahore",
      status: "completed",
      format: "csv",
      size: "1.8 MB",
      records: 890,
      createdAt: "2024-01-14 03:45 PM",
      downloadUrl: "/downloads/exp-002.csv",
      expiresAt: "2024-02-14"
    },
    {
      id: "EXP-003",
      name: "Restaurant Data - Islamabad",
      status: "processing",
      format: "json",
      size: "---",
      records: 0,
      createdAt: "2024-01-15 11:20 AM",
      downloadUrl: null,
      expiresAt: null
    },
    {
      id: "EXP-004",
      name: "Healthcare Facilities - Multan",
      status: "completed",
      format: "xlsx",
      size: "3.2 MB",
      records: 1680,
      createdAt: "2024-01-13 09:15 AM",
      downloadUrl: "/downloads/exp-004.xlsx",
      expiresAt: "2024-02-13"
    },
    {
      id: "EXP-005",
      name: "Retail Stores - Faisalabad",
      status: "failed",
      format: "csv",
      size: "---",
      records: 0,
      createdAt: "2024-01-12 02:30 PM",
      downloadUrl: null,
      expiresAt: null
    },
    {
      id: "EXP-006",
      name: "Educational Institutions - Peshawar",
      status: "completed",
      format: "json",
      size: "4.1 MB",
      records: 2340,
      createdAt: "2024-01-11 08:00 AM",
      downloadUrl: "/downloads/exp-006.json",
      expiresAt: "2024-02-11"
    }
  ]);

  const stats = {
    total: exportJobs.length,
    completed: exportJobs.filter(j => j.status === "completed").length,
    processing: exportJobs.filter(j => j.status === "processing").length,
    failed: exportJobs.filter(j => j.status === "failed").length
  };

  const filteredJobs = exportJobs.filter(job => {
    const matchesSearch = job.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || job.status === filterStatus;
    const matchesFormat = filterFormat === "all" || job.format === filterFormat;
    return matchesSearch && matchesStatus && matchesFormat;
  });

  const handleDownload = (job) => {
    if (job.status !== "completed") {
      alert("This export is not ready for download yet!");
      return;
    }
    console.log("Downloading:", job.downloadUrl);
    // API call will go here: axios.get(`/api/exports/${job.id}/download`)
    alert(`Downloading ${job.name} (API integration pending)`);
  };

  const handleCreateExport = () => {
    console.log("Creating new export");
    // API call: axios.post('/api/exports/create', { ... })
    alert("Create export modal will open (API integration pending)");
  };

  const handleRetry = (jobId) => {
    console.log("Retrying export:", jobId);
    // API call: axios.post(`/api/exports/${jobId}/retry`)
    alert("Retrying export job (API integration pending)");
  };

  const handleDelete = (jobId) => {
    if (window.confirm("Are you sure you want to delete this export?")) {
      setExportJobs(exportJobs.filter(job => job.id !== jobId));
      // API call: axios.delete(`/api/exports/${jobId}`)
      alert("Export deleted (API integration pending)");
    }
  };

  const handleBulkDownload = () => {
    if (selectedExports.length === 0) {
      alert("Please select exports to download");
      return;
    }
    console.log("Bulk downloading:", selectedExports);
    alert(`Downloading ${selectedExports.length} files (API integration pending)`);
  };

  const handleSelectExport = (jobId) => {
    setSelectedExports(prev =>
      prev.includes(jobId)
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "processing":
        return <Clock className="w-5 h-5 text-blue-600" />;
      case "failed":
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  const getFormatIcon = (format) => {
    switch (format) {
      case "xlsx":
        return <FileSpreadsheet className="w-5 h-5 text-green-600" />;
      case "csv":
        return <Table className="w-5 h-5 text-blue-600" />;
      case "json":
        return <Code className="w-5 h-5 text-purple-600" />;
      default:
        return <File className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 border border-sand/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center">
              <Download className="w-5 h-5 text-forest" />
            </div>
            <div>
              <p className="text-ink/60 text-sm">Total Exports</p>
              <p className="text-2xl font-bold text-ink">{stats.total}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-sand/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-ink/60 text-sm">Completed</p>
              <p className="text-2xl font-bold text-ink">{stats.completed}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-sand/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-ink/60 text-sm">Processing</p>
              <p className="text-2xl font-bold text-ink">{stats.processing}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-sand/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-ink/60 text-sm">Failed</p>
              <p className="text-2xl font-bold text-ink">{stats.failed}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/20">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-6">
          <div className="flex-1 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/40" />
              <input
                type="text"
                placeholder="Search exports..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors"
              />
            </div>

            {/* Status Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="processing">Processing</option>
              <option value="failed">Failed</option>
            </select>

            {/* Format Filter */}
            <select
              value={filterFormat}
              onChange={(e) => setFilterFormat(e.target.value)}
              className="px-4 py-3 bg-shell border-2 border-transparent rounded-xl focus:border-forest focus:outline-none transition-colors cursor-pointer"
            >
              <option value="all">All Formats</option>
              <option value="xlsx">Excel (.xlsx)</option>
              <option value="csv">CSV</option>
              <option value="json">JSON</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {selectedExports.length > 0 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBulkDownload}
                className="px-4 py-3 bg-clay text-white rounded-xl hover:bg-clay/90 transition-colors flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download ({selectedExports.length})</span>
              </motion.button>
            )}
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCreateExport}
              className="px-6 py-3 bg-forest text-sand rounded-xl hover:bg-clay transition-colors flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Create Export</span>
            </motion.button>
          </div>
        </div>

        {/* Export Jobs Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-shell border-b border-sand/20">
              <tr>
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedExports(filteredJobs.filter(j => j.status === "completed").map(j => j.id));
                      } else {
                        setSelectedExports([]);
                      }
                    }}
                    className="w-4 h-4 rounded border-2 border-forest text-forest focus:ring-forest"
                  />
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-ink">Job ID</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-ink">Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-ink">Status</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-ink">Format</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-ink">Records</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-ink">Size</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-ink">Created</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-ink">Expires</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-ink">Actions</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {filteredJobs.map((job) => (
                  <motion.tr
                    key={job.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="border-b border-sand/10 hover:bg-shell/50 transition-colors"
                  >
                    <td className="px-4 py-4">
                      <input
                        type="checkbox"
                        checked={selectedExports.includes(job.id)}
                        onChange={() => handleSelectExport(job.id)}
                        disabled={job.status !== "completed"}
                        className="w-4 h-4 rounded border-2 border-forest text-forest focus:ring-forest disabled:opacity-30"
                      />
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm font-mono text-forest font-semibold">{job.id}</span>
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-sm font-medium text-ink">{job.name}</p>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(job.status)}
                        <span className={`text-sm font-semibold capitalize ${
                          job.status === "completed" ? "text-green-600" :
                          job.status === "processing" ? "text-blue-600" :
                          "text-red-600"
                        }`}>
                          {job.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center space-x-2">
                        {getFormatIcon(job.format)}
                        <span className="text-sm font-semibold uppercase text-ink">
                          {job.format}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm text-ink">{job.records > 0 ? job.records.toLocaleString() : "---"}</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm text-ink/70">{job.size}</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm text-ink/70">{job.createdAt}</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm text-ink/70">{job.expiresAt || "---"}</span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center space-x-2">
                        {job.status === "completed" && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleDownload(job)}
                            className="p-2 text-forest hover:bg-forest/10 rounded-lg transition-colors"
                            title="Download"
                          >
                            <Download className="w-4 h-4" />
                          </motion.button>
                        )}
                        
                        {job.status === "failed" && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleRetry(job.id)}
                            className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                            title="Retry"
                          >
                            <RefreshCw className="w-4 h-4" />
                          </motion.button>
                        )}

                        {job.status === "processing" && (
                          <div className="p-2">
                            <RefreshCw className="w-4 h-4 text-blue-600 animate-spin" />
                          </div>
                        )}

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleDelete(job.id)}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-ink/20 mx-auto mb-4" />
              <p className="text-ink/60">No exports found</p>
            </div>
          )}
        </div>
      </div>

      {/* Export Formats Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-sand/20">
          <div className="flex items-center space-x-3 mb-3">
            <FileSpreadsheet className="w-8 h-8 text-green-600" />
            <h3 className="text-lg font-bold text-ink">Excel (.xlsx)</h3>
          </div>
          <p className="text-sm text-ink/70">
            Full-featured spreadsheet format. Best for data analysis and pivot tables. Compatible with Microsoft Excel and Google Sheets.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-sand/20">
          <div className="flex items-center space-x-3 mb-3">
            <Table className="w-8 h-8 text-blue-600" />
            <h3 className="text-lg font-bold text-ink">CSV</h3>
          </div>
          <p className="text-sm text-ink/70">
            Simple comma-separated format. Universal compatibility. Lightweight and easy to import into any system or database.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-sand/20">
          <div className="flex items-center space-x-3 mb-3">
            <Code className="w-8 h-8 text-purple-600" />
            <h3 className="text-lg font-bold text-ink">JSON</h3>
          </div>
          <p className="text-sm text-ink/70">
            Structured data format. Perfect for API integration and web applications. Preserves data hierarchy and relationships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExportsContent;