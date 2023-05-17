import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useSelector } from "react-redux";

const data = [
  {
    name: "Page A",
    uv: 4000,
  },
  {
    name: "Page B",
    uv: 3000,
  },
  {
    name: "Page C",
    uv: 2000,
  },
];

const BarChartComponent = () => {
  const Expenses = useSelector((state) => state.expense.expenses);
  // console.log("Expenses is", Expenses);
  // const modi = Expenses.map(({ amount, category }) => ({
  //   category,
  //   amount: parseFloat(amount),
  // }));

  const aggregatedExpenses = Expenses.reduce(
    (acc, { amount, category, ...rest }) => {
      acc[category] = acc[category] || { amount: 0, category, ...rest };
      acc[category].amount += parseInt(amount);
      return acc;
    },
    {}
  );

  const resultArray = Object.values(aggregatedExpenses);

  console.log(resultArray);

  // console.log("data is ", modi);

  return (
    <div>
      <div>hiii</div>
      <BarChart
        width={500}
        height={300}
        data={resultArray}
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
        {/* <Bar dataKey="pv" fill="#8884d8" /> */}
        <Bar dataKey="amount" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default BarChartComponent;
