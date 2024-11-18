import Sidebar from '../Component/Sidebar';
import Line_Chart from '../Component/Line_Chart';
import Area1Chart from '../Component/Area1Chart';
import Bar1_chart from '../Component/Bar1_Chart';
import PieCharts1 from '../Component/PieCharts1';
import DashboardMap from '../Component/DashboardMap';
import UserChart from '../Component/UserChart';
import TableChart from '../Component/TableChart';

function Dashboard() {
  return (
    <div className="flex dark:bg-gray-900 dark:border-gray-700">
      {/* Sidebar on the left */}
      <Sidebar />

     {/* Content on the right side */}
     <div className="flex-1">
        {/* Line chart aligned next to sidebar */}
        <Line_Chart />
        
        {/* Other charts in a row */}
        <div className="grid grid-cols-3 gap-3 mt-4">
  <Area1Chart />
  <Bar1_chart />
  <PieCharts1 />
</div>

<div className="grid grid-cols-2 gap-3 mt-4">
  <DashboardMap />
    <UserChart />
</div>

<div className="flex-1">
     {/* Line chart aligned next to sidebar */}
     <TableChart />
     </div>
       
      </div>
    </div>
   
  )
}

export default Dashboard
