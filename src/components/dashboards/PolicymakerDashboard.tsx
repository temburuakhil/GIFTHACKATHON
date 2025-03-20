import React from 'react';
import { 
  BarChart2, AlertTriangle, Check, Clock,
  LineChart, TrendingUp, Globe, DollarSign,
  FileText, Shield, Database, Settings,
  Moon, Sun, Bell, Download,
  Users, GitBranch, Share2, ChevronDown,
  AlertCircle
} from 'lucide-react';
import type { PolicyUpdate } from '../../types';

const policyUpdates: PolicyUpdate[] = [
  {
    title: 'Digital Banking Regulation',
    status: 'proposed',
    impact: 'high',
    sector: 'Banking',
    date: '2024-03-20'
  },
  {
    title: 'SME Support Initiative',
    status: 'active',
    impact: 'medium',
    sector: 'Small Business',
    date: '2024-03-15'
  },
  {
    title: 'Green Energy Investment Framework',
    status: 'under_review',
    impact: 'high',
    sector: 'Energy',
    date: '2024-03-10'
  }
];

export function PolicymakerDashboard() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('monitoring');
  const [selectedTimeframe, setSelectedTimeframe] = React.useState('1Y');

  // Mock data for demonstration
  const economicData = {
    gdp: { current: '2.1%', forecast: '2.3%', trend: 'up' },
    inflation: { current: '3.2%', target: '2.0%', trend: 'down' },
    employment: { rate: '3.8%', change: '+0.2%', trend: 'up' },
    tradeBalance: { current: '-$45B', forecast: '-$42B', trend: 'up' },
    fiscalMetrics: {
      revenue: '$4.2T',
      spending: '$4.8T',
      deficit: '-$600B'
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#222831]' : 'bg-[#F5F7FA]'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#00457C] dark:text-[#009CDE]">
              Economic Policy Dashboard
            </h1>
            <p className="text-[#00457C] dark:text-[#009CDE] mt-1">
              Real-time Economic Monitoring & Policy Analysis
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300">
              <Bell className="w-6 h-6 text-[#00457C]" />
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              {darkMode ? <Sun className="w-6 h-6 text-[#F4A261]" /> : <Moon className="w-6 h-6 text-[#002F6C]" />}
            </button>
            <button className="flex items-center px-4 py-2 bg-gradient-to-r from-[#0070BA] to-[#00457C] text-white rounded-lg hover:from-[#009CDE] hover:to-[#0070BA] transition-all duration-300">
              <Share2 className="w-5 h-5 mr-2" />
              Share Report
            </button>
          </div>
        </div>

        {/* Main Navigation Tabs */}
        <div className="flex space-x-4 mb-6">
          {['monitoring', 'impact', 'regulation', 'research', 'fiscal'].map((tab) => (
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
          {/* Real-Time Economic Monitoring */}
          <div className="lg:col-span-2 rounded-xl bg-white shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#00457C]">Real-Time Economic Monitoring</h3>
              <div className="flex space-x-3">
                <button className="flex items-center px-3 py-2 bg-[#0070BA]/10 text-[#00457C] rounded-lg hover:bg-[#0070BA]/20">
                  <Globe className="w-4 h-4 mr-2" />
                  Global
                </button>
                <button className="flex items-center px-3 py-2 bg-[#0070BA]/10 text-[#00457C] rounded-lg hover:bg-[#0070BA]/20">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-gradient-to-br from-[#0070BA]/10 to-[#00457C]/10 rounded-lg border border-[#0070BA]/20">
                <h4 className="font-medium text-[#00457C]">GDP Growth</h4>
                <p className="text-2xl font-bold text-[#002F6C]">{economicData.gdp.current}</p>
                <p className="text-sm text-[#00457C]">Forecast: {economicData.gdp.forecast}</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#1DBF73]/10 to-[#009CDE]/10 rounded-lg border border-[#1DBF73]/20">
                <h4 className="font-medium text-[#00457C]">Inflation Rate</h4>
                <p className="text-2xl font-bold text-[#002F6C]">{economicData.inflation.current}</p>
                <p className="text-sm text-[#00457C]">Target: {economicData.inflation.target}</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#009CDE]/10 to-[#0070BA]/10 rounded-lg border border-[#009CDE]/20">
                <h4 className="font-medium text-[#00457C]">Employment Rate</h4>
                <p className="text-2xl font-bold text-[#002F6C]">{economicData.employment.rate}</p>
                <p className="text-sm text-[#00457C]">Change: {economicData.employment.change}</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#1DBF73]/10 to-[#009CDE]/10 rounded-lg border border-[#1DBF73]/20">
                <h4 className="font-medium text-[#00457C]">Trade Balance</h4>
                <p className="text-2xl font-bold text-[#002F6C]">{economicData.tradeBalance.current}</p>
                <p className="text-sm text-[#00457C]">Forecast: {economicData.tradeBalance.forecast}</p>
              </div>
            </div>
            <div className="mt-6 relative h-64 bg-gradient-to-br from-[#0070BA]/5 to-[#00457C]/5 rounded-lg p-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <LineChart className="w-12 h-12 text-[#0070BA]" />
                <p className="ml-2 text-[#00457C]">Economic Trends Visualization</p>
              </div>
            </div>
          </div>

          {/* Policy Impact Analysis */}
          <div className="rounded-xl bg-white shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#00457C]">Policy Impact Analysis</h3>
              <TrendingUp className="w-6 h-6 text-[#0070BA]" />
            </div>
            <div className="space-y-4">
              {policyUpdates.map((policy) => (
                <div key={policy.title} className="p-4 bg-gradient-to-br from-[#0070BA]/10 to-[#00457C]/10 rounded-lg border border-[#0070BA]/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-[#002F6C]">{policy.title}</h4>
                    <span className={`
                      px-3 py-1 rounded-full text-sm font-medium
                      ${policy.impact === 'high' ? 'bg-red-100 text-red-800' : 
                        policy.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-green-100 text-green-800'}
                    `}>
                      {policy.impact.toUpperCase()} Impact
                    </span>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-[#00457C]">
                    <span className="mr-4">Sector: {policy.sector}</span>
                    <span>Date: {policy.date}</span>
                  </div>
                  <div className="mt-3 flex items-center">
                    {policy.status === 'proposed' && (
                      <div className="flex items-center text-yellow-600">
                        <Clock className="w-4 h-4 mr-1" />
                        Proposed
                      </div>
                    )}
                    {policy.status === 'active' && (
                      <div className="flex items-center text-green-600">
                        <Check className="w-4 h-4 mr-1" />
                        Active
                      </div>
                    )}
                    {policy.status === 'under_review' && (
                      <div className="flex items-center text-orange-600">
                        <AlertTriangle className="w-4 h-4 mr-1" />
                        Under Review
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Regulation Tools */}
          <div className="lg:col-span-2 rounded-xl bg-white shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#00457C]">Financial Regulation Tools</h3>
              <Shield className="w-6 h-6 text-[#0070BA]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-br from-[#0070BA]/10 to-[#00457C]/10 rounded-lg border border-[#0070BA]/20">
                <div className="flex items-center mb-2">
                  <Globe className="w-5 h-5 text-[#00457C] mr-2" />
                  <h4 className="font-medium text-[#002F6C]">Global Regulations</h4>
                </div>
                <p className="text-sm text-[#00457C]">Track regulatory changes worldwide</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#1DBF73]/10 to-[#009CDE]/10 rounded-lg border border-[#1DBF73]/20">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="w-5 h-5 text-[#1DBF73] mr-2" />
                  <h4 className="font-medium text-[#002F6C]">Compliance Risks</h4>
                </div>
                <p className="text-sm text-[#00457C]">Monitor potential compliance issues</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#009CDE]/10 to-[#0070BA]/10 rounded-lg border border-[#009CDE]/20">
                <div className="flex items-center mb-2">
                  <DollarSign className="w-5 h-5 text-[#00457C] mr-2" />
                  <h4 className="font-medium text-[#002F6C]">Tax Behavior</h4>
                </div>
                <p className="text-sm text-[#00457C]">Analyze corporate tax patterns</p>
              </div>
            </div>
          </div>

          {/* Economic Research Hub */}
          <div className="rounded-xl bg-white shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#00457C]">Economic Research Hub</h3>
              <Database className="w-6 h-6 text-[#0070BA]" />
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-[#0070BA]/10 to-[#00457C]/10 rounded-lg border border-[#0070BA]/20">
                <div className="flex items-center mb-2">
                  <FileText className="w-5 h-5 text-[#00457C] mr-2" />
                  <h4 className="font-medium text-[#002F6C]">Policy Reports</h4>
                </div>
                <p className="text-sm text-[#00457C]">Automated policy analysis and insights</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#1DBF73]/10 to-[#009CDE]/10 rounded-lg border border-[#1DBF73]/20">
                <div className="flex items-center mb-2">
                  <AlertCircle className="w-5 h-5 text-[#1DBF73] mr-2" />
                  <h4 className="font-medium text-[#002F6C]">Early Warning System</h4>
                </div>
                <p className="text-sm text-[#00457C]">Monitor economic stability indicators</p>
              </div>
            </div>
          </div>

          {/* Fiscal Planning */}
          <div className="lg:col-span-3 rounded-xl bg-white shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#00457C]">Fiscal Planning</h3>
              <DollarSign className="w-6 h-6 text-[#0070BA]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 bg-gradient-to-br from-[#0070BA]/10 to-[#00457C]/10 rounded-lg border border-[#0070BA]/20">
                <h4 className="font-medium text-[#00457C]">Revenue</h4>
                <p className="text-2xl font-bold text-[#002F6C]">{economicData.fiscalMetrics.revenue}</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#1DBF73]/10 to-[#009CDE]/10 rounded-lg border border-[#1DBF73]/20">
                <h4 className="font-medium text-[#00457C]">Spending</h4>
                <p className="text-2xl font-bold text-[#002F6C]">{economicData.fiscalMetrics.spending}</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#009CDE]/10 to-[#0070BA]/10 rounded-lg border border-[#009CDE]/20">
                <h4 className="font-medium text-[#00457C]">Deficit</h4>
                <p className="text-2xl font-bold text-[#002F6C]">{economicData.fiscalMetrics.deficit}</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-[#1DBF73]/10 to-[#009CDE]/10 rounded-lg border border-[#1DBF73]/20">
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-5 h-5 text-[#1DBF73] mr-2" />
                  <h4 className="font-medium text-[#002F6C]">Sustainability Rating</h4>
                </div>
                <p className="text-sm text-[#00457C]">Long-term fiscal health analysis</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 flex justify-end space-x-4">
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-[#0070BA] to-[#00457C] text-white rounded-lg hover:from-[#009CDE] hover:to-[#0070BA] transition-all duration-300">
            <Download className="w-5 h-5 mr-2" />
            Export Report
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