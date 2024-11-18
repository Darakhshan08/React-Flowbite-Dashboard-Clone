import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

function Bar1_chart() {
  return (
    <div className="p-5 h-[470px] bg-white rounded-lg shadow-lg mx-auto w-[525px] ml-[177px] mb-2.5 
    dark:bg-gray-800 dark:border-gray-700 border border-gray-200 
    hover:shadow-gray-600 transition-shadow duration-300 
    hover:border-2 hover:scale-100 transform cursor-pointer">
    
      {/* Heading */}
      <h2 className="mt-[-10px]  text-[25px] font-extrabold dark:text-white">5,355</h2>

      {/* Paragraph */}
      <p className="mb-5 text-[17px] dark:text-white">
    Vistors this week
</p>

      {/* Chart */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <BarChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 3,
            right: 20,
            left: -10,
            bottom: 5,
          }}
          barSize={25}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#1D267D" background={{ fill: '#eee' }} />
        </BarChart>
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
            Submit
          </button>
        </div>
    </div>
  );
}

export default Bar1_chart;
