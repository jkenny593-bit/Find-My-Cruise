'use client';

import { useState, useEffect } from 'react';
import { Metadata } from 'next';

// We'll define the dashboard content in a separate internal component
// to make the state management for the login cleaner.
const DashboardContent = () => {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLogs = async () => {
    try {
      const response = await fetch('/api/logs');
      const data = await response.json();
      setLogs(data.logs || []);
    } catch (e) {
      console.error('Failed to fetch logs');
    } finally {
      setLoading(false);
    }
  };

  // Poll for logs every 5 seconds
  useEffect(() => {
    fetchLogs();
    const interval = setInterval(fetchLogs, 5000);
    return () => clearInterval(interval);
  }, []);

  // Calculate Real Metrics
  const totalConvs = new Set(logs.map(l => l.conversationId)).size;
  const started = logs.filter(l => l.event === 'chat_started').length;
  const recommended = logs.filter(l => l.event === 'recommendations_shown').length;
  const clicked = logs.filter(l => l.event === 'link_clicked').length;
  const abandoned = logs.filter(l => l.event === 'chat_abandoned').length;

  const convRate = totalConvs > 0 ? ((clicked / totalConvs) * 100).toFixed(1) : '0';
  const recommendationRate = totalConvs > 0 ? ((recommended / totalConvs) * 100).toFixed(1) : '0';

  const metrics = [
    { label: 'Total Conversations', value: totalConvs.toString(), change: 'Real-time', type: 'neutral' },
    { label: 'Recommendation Rate', value: `${recommendationRate}%`, change: 'Live', type: 'positive' },
    { label: 'Booking Click Rate', value: `${convRate}%`, change: 'Live', type: 'positive' },
    { label: 'Total Abandoned', value: abandoned.toString(), change: 'Live', type: 'negative' },
  ];

  const abandonmentStages = [
    { stage: 'Opening / No Interaction', count: started - (logs.filter(l => l.event === 'opening_completed').length), percentage: 'Auto' },
    { stage: 'Chatting (Pre-Results)', count: logs.filter(l => l.event === 'opening_completed').length - recommended, percentage: 'Auto' },
    { stage: 'Recommendations Shown', count: recommended, percentage: 'Auto' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1200px] mx-auto">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-heading font-bold text-primary">Conversation Analytics</h1>
            <p className="text-text/50">Live performance metrics from your session</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm font-bold text-primary shadow-sm flex items-center gap-2">
            <span className="text-success animate-pulse">●</span> {loading ? 'Fetching...' : 'Live View'}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {metrics.map((m, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-xs font-bold text-text/40 uppercase tracking-widest mb-2">{m.label}</p>
              <p className="text-3xl font-heading font-bold text-primary mb-2">{m.value}</p>
              <p className="text-[10px] font-bold text-text/30 uppercase">{m.change}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <h3 className="text-xl font-heading font-bold text-primary mb-6">User Activity (Last 100 Events)</h3>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4">
              {logs.length === 0 ? (
                <p className="text-center py-20 text-text/30 italic">No real-time events detected yet. Try searching for a cruise!</p>
              ) : (
                logs.map((log, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-surface rounded-xl border border-gray-50">
                    <div>
                      <p className="text-xs font-bold text-primary uppercase tracking-tight">{log.event}</p>
                      <p className="text-[9px] text-text/40 font-mono">{log.conversationId}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-text/60">{new Date(log.timestamp).toLocaleTimeString()}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-[2rem] shadow-xl h-fit">
            <h3 className="text-xl font-heading font-bold text-accent mb-6">Integration Status</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-success" />
                <p className="text-sm font-medium text-white/80">Tracker: Active</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-success" />
                <p className="text-sm font-medium text-white/80">Logging API: Reachable</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <p className="text-sm font-medium text-white/80">Database: Local Memory</p>
              </div>
            </div>
            <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-[10px] leading-relaxed text-white/50 italic">
                Real data will persist across sessions once a production database (like Vercel Postgres) is connected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AdminDashboard() {
  const [isAuthenticated, setIsFinished] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle simple login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // We'll use a hardcoded check for now that you can change in .env later
    // or just use this simple one for the prototype
    if (password === 'mara2026') {
      setIsFinished(true);
      sessionStorage.setItem('admin_auth', 'true');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  // Persist login for the session
  useEffect(() => {
    if (sessionStorage.getItem('admin_auth') === 'true') {
      setIsFinished(true);
    }
  }, []);

  if (isAuthenticated) {
    return <DashboardContent />;
  }

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-[2rem] p-10 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🔐</div>
          <h1 className="text-2xl font-heading font-bold text-primary">Admin Access</h1>
          <p className="text-text/50 text-sm">Please enter your password to view analytics.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-accent font-bold text-center"
            autoFocus
          />
          {error && <p className="text-red-500 text-xs text-center font-bold">{error}</p>}
          <button
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg"
          >
            Unlock Dashboard
          </button>
        </form>
        
        <p className="mt-8 text-[10px] text-center text-text/30 uppercase tracking-widest font-bold">
          FindMyCruise.ie Proprietary Data
        </p>
      </div>
    </div>
  );
}
