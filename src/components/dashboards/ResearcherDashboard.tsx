import React from 'react';
import { 
  LineChart, Filter, Download, RefreshCw, 
  Search, Brain, TrendingUp, BarChart3,
  Users, GitBranch, FileText, Settings,
  AlertCircle, Database, Code, Share2,
  Moon, Sun, ChevronDown
} from 'lucide-react';

export function ResearcherDashboard() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = React.useState('1Y');
  const [activeTab, setActiveTab] = React.useState('analytics');

  // Mock data for demonstration
  const marketData = {
    indices: [
      { name: 'S&P 500', value: '4,783.83', change: '+1.2%' },
      { name: 'NASDAQ', value: '15,003.22', change: '+1.5%' },
      { name: 'Dow Jones', value: '37,592.98', change: '+0.8%' }
    ],
    sentiment: {
      overall: 0.75,
      news: 0.68,
      social: 0.82
    },
    researchMetrics: {
      dataPoints: 1234,
      accuracy: 98.5,
      timeRange: '5Y'
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#222831]' : 'bg-[#F5F7FA]'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#00457C] dark:text-[#009CDE]">
              Research Analytics Platform
            </h1>
            <p className="text-[#00457C] dark:text-[#009CDE] mt-1">
              Advanced Financial Research & Analysis Tools
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              {darkMode ? <Sun className="w-6 h-6 text-[#F4A261]" /> : <Moon className="w-6 h-6 text-[#002F6C]" />}
            </button>
            <button className="flex items-center px-4 py-2 bg-gradient-to-r from-[#0070BA] to-[#00457C] text-white rounded-lg hover:from-[#009CDE] hover:to-[#0070BA] transition-all duration-300">
              <Share2 className="w-5 h-5 mr-2" />
              Share Research
            </button>
          </div>
        </div>

        {/* Main Navigation Tabs */}
        <div className="flex space-x-4 mb-6">
          {['analytics', 'research', 'sentiment', 'quantitative', 'collaboration'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#0070BA] to-[#00457C] text-white'
                  : 'bg-white text-[#00457C] hover:bg-[#0070BA]/10'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Data Analytics Hub */}
          <div className="lg:col-span-2 rounded-xl bg-white shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#00457C]">Data Analytics Hub</h3>
              <div className="flex space-x-3">
                <button className="flex items-center px-3 py-2 bg-[#0070BA]/10 text-[#00457C] rounded-lg hover:bg-[#0070BA]/20">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-3 py-2 bg-[#0070BA]/10 text-[#00457C] rounded-lg hover:bg-[#0070BA]/20">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </button>
                <button className="flex items-center px-3 py-2 bg-[#0070BA]/10 text-[#00457C] rounded-lg hover:bg-[#0070BA]/20">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </button>
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-[#0070BA]/5 to-[#00457C]/5 rounded-lg p-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <LineChart className="w-12 h-12 text-[#0070BA]" />
                <p className="ml-2 text-[#00457C]">Interactive Chart Area</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-br from-[#0070BA]/10 to-[#00457C]/10 rounded-lg border border-[#0070BA]/20">
                <h4 className="font-medium text-[#00457C]">Data Points</h4>
                <p className="text-2xl font-bold text-[#002F6C]">{marketData.researchMetrics.dataPoints}</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#1DBF73]/10 to-[#009CDE]/10 rounded-lg border border-[#1DBF73]/20">
                <h4 className="font-medium text-[#1DBF73]">Accuracy</h4>
                <p className="text-2xl font-bold text-[#002F6C]">{marketData.researchMetrics.accuracy}%</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#009CDE]/10 to-[#0070BA]/10 rounded-lg border border-[#009CDE]/20">
                <h4 className="font-medium text-[#00457C]">Time Range</h4>
                <p className="text-2xl font-bold text-[#002F6C]">{marketData.researchMetrics.timeRange}</p>
              </div>
            </div>
          </div>

          {/* AI Research Tools */}
          <div className="rounded-xl bg-white shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#00457C]">AI Research Tools</h3>
              <Brain className="w-6 h-6 text-[#0070BA]" />
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-[#0070BA]/10 to-[#00457C]/10 rounded-lg border border-[#0070BA]/20">
                <div className="flex items-center mb-2">
                  <Search className="w-5 h-5 text-[#00457C] mr-2" />
                  <h4 className="font-medium text-[#002F6C]">NLP Search</h4>
                </div>
                <input
                  type="text"
                  placeholder="Search research papers..."
                  className="w-full p-2 rounded-lg border border-[#0070BA]/20 focus:ring-2 focus:ring-[#009CDE]"
                />
              </div>
              <div className="p-4 bg-gradient-to-br from-[#1DBF73]/10 to-[#009CDE]/10 rounded-lg border border-[#1DBF73]/20">
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-5 h-5 text-[#1DBF73] mr-2" />
                  <h4 className="font-medium text-[#002F6C]">Predictive Models</h4>
                </div>
                <p className="text-sm text-[#00457C]">Market trend forecasting and pattern recognition</p>
              </div>
            </div>
          </div>

          {/* Market Sentiment Analysis */}
          <div className="lg:col-span-2 rounded-xl bg-white shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#00457C]">Market Sentiment Analysis</h3>
              <AlertCircle className="w-6 h-6 text-[#0070BA]" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-br from-[#0070BA]/10 to-[#00457C]/10 rounded-lg border border-[#0070BA]/20">
                <h4 className="font-medium text-[#00457C]">Overall Sentiment</h4>
                <p className="text-2xl font-bold text-[#002F6C]">{(marketData.sentiment.overall * 100).toFixed(1)}%</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#009CDE]/10 to-[#0070BA]/10 rounded-lg border border-[#009CDE]/20">
                <h4 className="font-medium text-[#00457C]">News Sentiment</h4>
                <p className="text-2xl font-bold text-[#002F6C]">{(marketData.sentiment.news * 100).toFixed(1)}%</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#1DBF73]/10 to-[#009CDE]/10 rounded-lg border border-[#1DBF73]/20">
                <h4 className="font-medium text-[#00457C]">Social Sentiment</h4>
                <p className="text-2xl font-bold text-[#002F6C]">{(marketData.sentiment.social * 100).toFixed(1)}%</p>
              </div>
            </div>
          </div>

          {/* Quantitative Analysis */}
          <div className="rounded-xl bg-white shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#00457C]">Quantitative Analysis</h3>
              <BarChart3 className="w-6 h-6 text-[#0070BA]" />
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-[#0070BA]/10 to-[#00457C]/10 rounded-lg border border-[#0070BA]/20">
                <div className="flex items-center mb-2">
                  <Code className="w-5 h-5 text-[#00457C] mr-2" />
                  <h4 className="font-medium text-[#002F6C]">Statistical Models</h4>
                </div>
                <p className="text-sm text-[#00457C]">Advanced statistical analysis and modeling</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#1DBF73]/10 to-[#009CDE]/10 rounded-lg border border-[#1DBF73]/20">
                <div className="flex items-center mb-2">
                  <Database className="w-5 h-5 text-[#1DBF73] mr-2" />
                  <h4 className="font-medium text-[#002F6C]">Backtesting</h4>
                </div>
                <p className="text-sm text-[#00457C]">Historical performance analysis</p>
              </div>
            </div>
          </div>

          {/* Collaboration Platform */}
          <div className="lg:col-span-3 rounded-xl bg-white shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#00457C]">Collaboration Platform</h3>
              <Users className="w-6 h-6 text-[#0070BA]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-br from-[#0070BA]/10 to-[#00457C]/10 rounded-lg border border-[#0070BA]/20">
                <div className="flex items-center mb-2">
                  <GitBranch className="w-5 h-5 text-[#00457C] mr-2" />
                  <h4 className="font-medium text-[#002F6C]">Version Control</h4>
                </div>
                <p className="text-sm text-[#00457C]">Track changes and collaborate on research</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#009CDE]/10 to-[#0070BA]/10 rounded-lg border border-[#009CDE]/20">
                <div className="flex items-center mb-2">
                  <FileText className="w-5 h-5 text-[#00457C] mr-2" />
                  <h4 className="font-medium text-[#002F6C]">Shared Workspace</h4>
                </div>
                <p className="text-sm text-[#00457C]">Real-time collaboration on documents</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#1DBF73]/10 to-[#009CDE]/10 rounded-lg border border-[#1DBF73]/20">
                <div className="flex items-center mb-2">
                  <Settings className="w-5 h-5 text-[#1DBF73] mr-2" />
                  <h4 className="font-medium text-[#002F6C]">Export Options</h4>
                </div>
                <p className="text-sm text-[#00457C]">Multiple format export capabilities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 flex justify-end space-x-4">
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-[#0070BA] to-[#00457C] text-white rounded-lg hover:from-[#009CDE] hover:to-[#0070BA] transition-all duration-300">
            <Download className="w-5 h-5 mr-2" />
            Export Research
          </button>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-[#002F6C] to-[#00457C] text-white rounded-lg hover:from-[#00457C] hover:to-[#002F6C] transition-all duration-300">
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}