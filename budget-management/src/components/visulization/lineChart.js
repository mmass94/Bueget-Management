import React from "react";
import { useSelector } from "react-redux";
// consider SynchronizedLineChart on 4 weeks
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const LineChartcomponent = () => {
  const expenses = useSelector((state) => state.expense.expenses);
  // Calculate total spending of each category by date

  const chartData = expenses.reduce((acc, expense) => {
    const { category, amount, dateAndTime } = expense;
    const date = new Date(dateAndTime).toLocaleDateString(); // Convert date string to a standardized format

    if (!acc[date]) {
      acc[date] = { name: date };
    }

    if (!acc[date][category]) {
      acc[date][category] = 0;
    }

    acc[date][category] += Number(amount);
    return acc;
  }, {});
  const chartDataArray = Object.values(chartData);

  return (
    <div>
      {" "}
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        {Object.keys(chartData).map((category, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={category}
            stroke={`#${((Math.random() * 0xffffff) << 0).toString(16)}`} // Random color for each category
            activeDot={{ r: 8 }}
          />
        ))}
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default LineChartcomponent;
