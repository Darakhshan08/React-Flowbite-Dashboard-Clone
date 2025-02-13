import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';


  


const Line_Chart = () => {
		const [options, setOptions] = useState(getMainChartOptions());
	  
		// Function to get options based on theme
		function getMainChartOptions() {
		  let mainChartColors = {};
	  
		  if (document.documentElement.classList.contains('dark')) {
			mainChartColors = {
			  borderColor: '#374151',
			  labelColor: '#9CA3AF',
			  opacityFrom: 0,
			  opacityTo: 0.15,
			};
		  } else {
			mainChartColors = {
			  borderColor: '#F3F4F6',
			  labelColor: '#6B7280',
			  opacityFrom: 0.45,
			  opacityTo: 0,
			};
		  }
	  
		  return {
			chart: {
			  height: 420,
			  type: 'area',
			  fontFamily: 'Inter, sans-serif',
			  foreColor: mainChartColors.labelColor,
			  toolbar: {
				show: false,
			  },
			},
			fill: {
			  type: 'gradient',
			  gradient: {
				enabled: true,
				opacityFrom: mainChartColors.opacityFrom,
				opacityTo: mainChartColors.opacityTo,
			  },
			},
			dataLabels: {
			  enabled: false,
			},
			tooltip: {
			  style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif',
			  },
			},
			grid: {
			  show: true,
			  borderColor: mainChartColors.borderColor,
			  strokeDashArray: 1,
			  padding: {
				left: 35,
				bottom: 15,
			  },
			},
			series: [
			  {
				name: 'Revenue',
				data: [6356, 6218, 6156, 6526, 6356, 6256, 6056],
				color: '#1A56DB',
			  },
			  {
				name: 'Revenue (previous period)',
				data: [6556, 6725, 6424, 6356, 6586, 6756, 6616],
				color: '#FDBA8C',
			  },
			],
			markers: {
			  size: 5,
			  strokeColors: '#ffffff',
			  hover: {
				sizeOffset: 3,
			  },
			},
			xaxis: {
			  categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
			  labels: {
				style: {
				  colors: [mainChartColors.labelColor],
				  fontSize: '14px',
				  fontWeight: 500,
				},
			  },
			  axisBorder: {
				color: mainChartColors.borderColor,
			  },
			  axisTicks: {
				color: mainChartColors.borderColor,
			  },
			  crosshairs: {
				show: true,
				stroke: {
				  color: mainChartColors.borderColor,
				  width: 1,
				  dashArray: 10,
				},
			  },
			},
			yaxis: {
			  labels: {
				style: {
				  colors: [mainChartColors.labelColor],
				  fontSize: '14px',
				  fontWeight: 500,
				},
				formatter: (value) => `$${value}`,
			  },
			},
			legend: {
			  fontSize: '14px',
			  fontWeight: 500,
			  labels: {
				colors: [mainChartColors.labelColor],
			  },
			  itemMargin: {
				horizontal: 10,
			  },
			},
			responsive: [
			  {
				breakpoint: 1024,
				options: {
				  xaxis: {
					labels: {
					  show: false,
					},
				  },
				},
			  },
			],
		  };
		}
	  
		useEffect(() => {
		  const chartElement = document.getElementById('main-chart');
		  if (chartElement) {
			const chart = new ApexCharts(chartElement, options);
			chart.render();
	  
			const handleDarkModeToggle = () => {
			  setOptions(getMainChartOptions());
			  chart.updateOptions(getMainChartOptions());
			};
	  
			// Listen for theme changes
			document.addEventListener('dark-mode', handleDarkModeToggle);
	  
			// Cleanup on unmount
			return () => {
			  document.removeEventListener('dark-mode', handleDarkModeToggle);
			  chart.destroy();
			};
		  }
		}, [options]);
	  
	
  return (
    <div>
   
   <div class="p-4 sm:ml-64 dark:bg-gray-900 dark:border-gray-700">
   <div class="w-full mt-16">
 
      <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800  hover:shadow-gray-600 transition-shadow duration-300 
    hover:border-2 hover:scale-100 transform cursor-pointer">
        <div class="flex items-center justify-between mb-4">
          <div class="flex-shrink-0">
            <span class="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">$45,385</span>
            <h3 class="text-base font-light text-gray-500 dark:text-gray-400">Sales this week</h3>
          </div>
          <div class="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
            12.5%
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
        </div>
        <div id="main-chart"></div>
       
        <div class="flex items-center justify-between pt-3 mt-4 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
          <div>
            <button class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" type="button" data-dropdown-toggle="weekly-sales-dropdown">Last 7 days <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
          
            <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="weekly-sales-dropdown">
                <div class="px-4 py-3" role="none">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white" role="none">
                    Sep 16, 2021 - Sep 22, 2021
                  </p>
                </div>
                <ul class="py-1" role="none">
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Yesterday</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Today</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 7 days</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 30 days</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 90 days</a>
                  </li>
                </ul>
                <div class="py-1" role="none">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Custom...</a>
                </div>
            </div>
          </div>
          <div class="flex-shrink-0">
            <a href="#" class="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-blue-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
              Sales Report
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
  );
}


export default Line_Chart
