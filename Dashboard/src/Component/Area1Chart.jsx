import React from 'react';
import { PieChart, Pie } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];

function Area1Chart() {
  return (
    
    <div className="p-5 h-[470px] bg-white rounded-lg shadow-lg mx-auto w-[525px] ml-[271px] mb-2.5 dark:bg-gray-800 dark:border-gray-700 border border-grey-800  hover:shadow-gray-600 transition-shadow duration-300 
    hover:border-2 hover:scale-100 transform cursor-pointer">
   <h2 className="mt-[-10px]  text-[25px] font-extrabold dark:text-white">2,340</h2>
   <p className="mb-5 text-[17px] dark:text-white">
   New products this week


</p>


        {/* Chart */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center' ,
      
        }}>
          <PieChart width={500} height={300}
            margin={{
              top: 60,
              right: -20,
              bottom: 20,
              left: 130,
            }}
          >
            <Pie data={data01} dataKey="value" cx="30%" cy="35%" outerRadius={80} fill="#CDC1FF" />
            <Pie data={data02} dataKey="value" cx="30%" cy="35%" innerRadius={90} outerRadius={100} fill="#3B1E54" label />
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
            Action
          </button>
        </div>
      </div>
 
  );
}

export default Area1Chart;