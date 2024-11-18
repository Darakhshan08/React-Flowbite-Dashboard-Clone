import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#007F73', '#7091F5', '#FF8400', '#FFF455'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function PieCharts1() {
  return (
    <div className="p-5 h-[470px] bg-white rounded-lg shadow-lg mx-auto w-[525px] ml-[82px] mb-2.5 dark:bg-gray-800 dark:border-gray-700 border border-grey-800  hover:shadow-gray-600 transition-shadow duration-300 
    hover:border-2 hover:scale-100 transform cursor-pointer">
      {/* Heading */}
      <h2 className="mt-[-10px]  text-[25px] font-extrabold dark:text-white">385</h2>

      {/* Paragraph */}
      <p className="mb-5 text-[17px] dark:text-white">
      User signups this week

</p>

      {/* Pie Chart */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="40%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={110}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>

      {/* Dropdown and Button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '-10px',marginLeft:'3px' }}>
          {/* Dropdown */}
          <select className="p-2 rounded border border-gray-300">
          <option value="">Select Option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>

          {/* Button */}
          <button style={{ padding: '8px 16px', backgroundColor: '#3B1E54', color: '#ffffff', border: 'none', borderRadius: '4px' }}>
            Action Submit
          </button>
        </div>
    </div>
  );
}

export default PieCharts1;