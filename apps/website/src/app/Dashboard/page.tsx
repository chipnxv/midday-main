'use client';

import { Card } from "./card";
import { DollarSign, TrendingUp, PieChart, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useTheme } from "next-themes";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data - replace with actual data fetching logic
const mockData = [
  { date: 'Jan', value: 4000 },
  { date: 'Feb', value: 3000 },
  { date: 'Mar', value: 5000 },
  { date: 'Apr', value: 2780 },
  { date: 'May', value: 1890 },
  { date: 'Jun', value: 2390 },
];

const DashboardPage = () => {
  const { theme } = useTheme();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-8">Financial Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Portfolio Value Card */}
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Portfolio Value</p>
              <h2 className="text-2xl font-bold">$124,567.89</h2>
            </div>
            <DollarSign className="h-8 w-8 text-green-500" />
          </div>
          <div className="mt-4 flex items-center text-sm text-green-500">
            <ArrowUpRight className="h-4 w-4 mr-1" />
            <span>+2.5% from last month</span>
          </div>
        </Card>

        {/* Today's Return Card */}
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Today's Return</p>
              <h2 className="text-2xl font-bold">$1,234.56</h2>
            </div>
            <TrendingUp className="h-8 w-8 text-blue-500" />
          </div>
          <div className="mt-4 flex items-center text-sm text-red-500">
            <ArrowDownRight className="h-4 w-4 mr-1" />
            <span>-0.8% today</span>
          </div>
        </Card>

        {/* Total Return Card */}
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Return</p>
              <h2 className="text-2xl font-bold">$24,567.89</h2>
            </div>
            <PieChart className="h-8 w-8 text-purple-500" />
          </div>
          <div className="mt-4 flex items-center text-sm text-green-500">
            <ArrowUpRight className="h-4 w-4 mr-1" />
            <span>+19.2% all time</span>
          </div>
        </Card>

        {/* Annual Yield Card */}
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Annual Yield</p>
              <h2 className="text-2xl font-bold">12.4%</h2>
            </div>
            <Activity className="h-8 w-8 text-orange-500" />
          </div>
          <div className="mt-4 flex items-center text-sm text-green-500">
            <ArrowUpRight className="h-4 w-4 mr-1" />
            <span>+2.1% from last year</span>
          </div>
        </Card>
      </div>

      {/* Portfolio Performance Chart */}
      <Card className="p-6 mt-6">
        <h3 className="text-xl font-semibold mb-4">Portfolio Performance</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke={theme === 'dark' ? '#10b981' : '#059669'}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Asset Allocation and Recent Transactions would go here */}
    </div>
  );
};

export default DashboardPage;