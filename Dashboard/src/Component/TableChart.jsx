import React from 'react'
import ApexCharts from 'apexcharts';


if (document.getElementById('new-products-chart')) {
	const options = {
		colors: ['#1A56DB', '#FDBA8C'],
		series: [
			{
				name: 'Quantity',
				color: '#1A56DB',
				data: [
					{ x: '01 Feb', y: 170 },
					{ x: '02 Feb', y: 180 },
					{ x: '03 Feb', y: 164 },
					{ x: '04 Feb', y: 145 },
					{ x: '05 Feb', y: 194 },
					{ x: '06 Feb', y: 170 },
					{ x: '07 Feb', y: 155 },
				]
			}
		],
		chart: {
			type: 'bar',
			height: '140px',
			fontFamily: 'Inter, sans-serif',
			foreColor: '#4B5563',
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			bar: {
				columnWidth: '90%',
				borderRadius: 3
			}
		},
		tooltip: {
			shared : false,
			intersect: false,
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif'
			},
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 1
				}
			}
		},
		stroke: {
			show: true,
			width: 5,
			colors: ['transparent']
		},
		grid: {
			show: false
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			show: false
		},
		xaxis: {
			floating: false,
			labels: {
				show: false
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			},
		},
		yaxis: {
			show: false
		},
		fill: {
			opacity: 1
		}
	};

	const chart = new ApexCharts(document.getElementById('new-products-chart'), options);
	chart.render();
}

if (document.getElementById('sales-by-category')) {
	const options = {
		colors: ['#1A56DB', '#FDBA8C'],
		series: [
			{
				name: 'Desktop PC',
				color: '#1A56DB',
				data: [
					{ x: '01 Feb', y: 170 },
					{ x: '02 Feb', y: 180 },
					{ x: '03 Feb', y: 164 },
					{ x: '04 Feb', y: 145 },
					{ x: '05 Feb', y: 194 },
					{ x: '06 Feb', y: 170 },
					{ x: '07 Feb', y: 155 },
				]
			},
			{
				name: 'Phones',
				color: '#FDBA8C',
				data: [
					{ x: '01 Feb', y: 120 },
					{ x: '02 Feb', y: 294 },
					{ x: '03 Feb', y: 167 },
					{ x: '04 Feb', y: 179 },
					{ x: '05 Feb', y: 245 },
					{ x: '06 Feb', y: 182 },
					{ x: '07 Feb', y: 143 }
				]
			},
			{
				name: 'Gaming/Console',
				color: '#17B0BD',
				data: [
					{ x: '01 Feb', y: 220 },
					{ x: '02 Feb', y: 194 },
					{ x: '03 Feb', y: 217 },
					{ x: '04 Feb', y: 279 },
					{ x: '05 Feb', y: 215 },
					{ x: '06 Feb', y: 263 },
					{ x: '07 Feb', y: 183 }
				]
			}
		],
		chart: {
			type: 'bar',
			height: '420px',
			fontFamily: 'Inter, sans-serif',
			foreColor: '#4B5563',
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			bar: {
				columnWidth: '90%',
				borderRadius: 3
			}
		},
		tooltip: {
			shared : true,
			intersect: false,
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif'
			},
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 1
				}
			}
		},
		stroke: {
			show: true,
			width: 5,
			colors: ['transparent']
		},
		grid: {
			show: false
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			show: false
		},
		xaxis: {
			floating: false,
			labels: {
				show: false
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			},
		},
		yaxis: {
			show: false
		},
		fill: {
			opacity: 1
		}
	};

	const chart = new ApexCharts(document.getElementById('sales-by-category'), options);
	chart.render();
}

const getVisitorsChartOptions = () => {
	let visitorsChartColors = {}

	if (document.documentElement.classList.contains('dark')) {
		visitorsChartColors = {
			fillGradientShade: 'dark',
			fillGradientShadeIntensity: 0.45,
		};
	} else {
		visitorsChartColors = {
			fillGradientShade: 'light',
			fillGradientShadeIntensity: 1,
		}
	}

	return {
		series: [{
			name: 'Visitors',
			data: [500, 590, 600, 520, 610, 550, 600]
		}],
		labels: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
		chart: {
			type: 'area',
			height: '305px',
			fontFamily: 'Inter, sans-serif',
			sparkline: {
				enabled: true
			},
			toolbar: {
				show: false
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: visitorsChartColors.fillGradientShade,
				shadeIntensity: visitorsChartColors.fillGradientShadeIntensity
			},
		},
		plotOptions: {
			area: {
				fillTo: 'end'
			}
		},
		theme: {
			monochrome: {
				enabled: true,
				color: '#1A56DB',
			}
		},
		tooltip: {
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif'
			},
		},
	}
}


const getSignupsChartOptions = () => {
	let signupsChartColors = {}

	if (document.documentElement.classList.contains('dark')) {
		signupsChartColors = {
			backgroundBarColors: ['#374151', '#374151', '#374151', '#374151', '#374151', '#374151', '#374151']
		};
	} else {
		signupsChartColors = {
			backgroundBarColors: ['#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB']
		};
	}

	return {
		series: [{
			name: 'Users',
			data: [1334, 2435, 1753, 1328, 1155, 1632, 1336]
		}],
		labels: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
		chart: {
			type: 'bar',
			height: '140px',
			foreColor: '#4B5563',
			fontFamily: 'Inter, sans-serif',
			toolbar: {
				show: false
			}
		},
		theme: {
			monochrome: {
				enabled: true,
				color: '#1A56DB'
			}
		},
		plotOptions: {
			bar: {
				columnWidth: '25%',
				borderRadius: 3,
				colors: {
					backgroundBarColors: signupsChartColors.backgroundBarColors,
					backgroundBarRadius: 3
				},
			},
			dataLabels: {
				hideOverflowingLabels: false
			}
		},
		xaxis: {
			floating: false,
			labels: {
				show: false
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			},
		},
		tooltip: {
			shared: true,
			intersect: false,
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif'
			}
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 0.8
				}
			}
		},
		fill: {
			opacity: 1
		},
		yaxis: {
			show: false
		},
		grid: {
			show: false
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			show: false
		},
	};
}

if (document.getElementById('week-signups-chart')) {
	const chart = new ApexCharts(document.getElementById('week-signups-chart'), getSignupsChartOptions());
	chart.render();

	// init again when toggling dark mode
	document.addEventListener('dark-mode', function () {
		chart.updateOptions(getSignupsChartOptions());
	});
}

const getTrafficChannelsChartOptions = () => {

	let trafficChannelsChartColors = {}

	if (document.documentElement.classList.contains('dark')) {
		trafficChannelsChartColors = {
			strokeColor: '#1f2937'
		};
	} else {
		trafficChannelsChartColors = {
			strokeColor: '#ffffff'
		}
	}

	return {
		series: [70, 5, 25],
		labels: ['Desktop', 'Tablet', 'Phone'],
		colors: ['#16BDCA', '#FDBA8C', '#1A56DB'],
		chart: {
			type: 'donut',
			height: 400,
			fontFamily: 'Inter, sans-serif',
			toolbar: {
				show: false
			},
		},
		responsive: [{
			breakpoint: 430,
			options: {
			  chart: {
				height: 300
			  }
			}
		}],
		stroke: {
			colors: [trafficChannelsChartColors.strokeColor]
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 0.9
				}
			}
		},
		tooltip: {
			shared: true,
			followCursor: false,
			fillSeriesColor: false,
			inverseOrder: true,
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif'
			},
			x: {
				show: true,
				formatter: function (_, { seriesIndex, w }) {
					const label = w.config.labels[seriesIndex];
					return label
				}
			},
			y: {
				formatter: function (value) {
					return value + '%';
				}
			}
		},
		grid: {
			show: false
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			show: false
		},
	};
}

if (document.getElementById('traffic-by-device')) {
	const chart = new ApexCharts(document.getElementById('traffic-by-device'), getTrafficChannelsChartOptions());
	chart.render();

	// init again when toggling dark mode
	document.addEventListener('dark-mode', function () {
		chart.updateOptions(getTrafficChannelsChartOptions());
	});
}


function TableChart() {
  return (
    <div class="p-4 sm:ml-64">
   <div class="w-full">
   <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800  hover:shadow-gray-600 transition-shadow duration-300 
    hover:border-2 hover:scale-100 transform cursor-pointer">
      <div class="items-center justify-between lg:flex">
        <div class="mb-4 lg:mb-0">
          <h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Transactions</h3>
          <span class="text-xl font-normal text-gray-500 dark:text-gray-400">This is a list of latest transactions</span>
        </div>
      </div>
 
      <div class="flex flex-col mt-6">
        <div class="overflow-x-auto rounded-lg">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden shadow sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="p-4 text-md font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                      Transaction
                    </th>
                    <th scope="col" class="p-4 text-md font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                      Date & Time
                    </th>
                    <th scope="col" class="p-4 text-md font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                      Amount
                    </th>
                    <th scope="col" class="p-4 text-md font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-800">
                  <tr>
                    <td class="p-4 text-xl font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Payment from <span class="font-semibold">Bonnie Green</span>
                    </td>
                    <td class="p-4 text-xl font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Apr 23 ,2021
                    </td>
                    <td class="p-4 text-xl font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                      $2300
                    </td>
                   
                   
                    <td class="p-4 whitespace-nowrap">
                    <span class="bg-green-100 text-green-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">Completed</span>
                    </td>
                  </tr>
                  <tr class="bg-gray-50 dark:bg-gray-700">
                    <td class="p-4 text-xl font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Payment refund to <span class="font-semibold">#00910</span>
                    </td>
                    <td class="p-4 text-xl font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Apr 23 ,2021
                    </td>
                    <td class="p-4 text-xl font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                      -$670
                    </td>
                    
                    <td class="p-4 whitespace-nowrap">
                    <span class="bg-green-100 text-green-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">Completed</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-4 text-xl font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Payment failed from <span class="font-semibold">#087651</span>
                    </td>
                    <td class="p-4 text-xl font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Apr 18 ,2021
                    </td>
                    <td class="p-4 text-xl font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                      $234
                    </td>
                  
                    <td class="p-4 whitespace-nowrap">
                      <span
                        class="bg-red-100 text-red-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded-md border border-red-100 dark:border-red-400 dark:bg-gray-700 dark:text-red-400">Cancelled</span>
                    </td>
                  </tr>
                  <tr class="bg-gray-50 dark:bg-gray-700">
                    <td class="p-4 text-xl font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Payment from <span class="font-semibold">Lana Byrd</span>
                    </td>
                    <td class="p-4 text-xl font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Apr 15 ,2021
                    </td>
                    <td class="p-4 text-xl font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                      $5000
                    </td>
                  
                    <td class="p-4 whitespace-nowrap">
                      <span class="bg-purple-100 text-purple-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded-md border border-purple-100 dark:bg-gray-700 dark:border-purple-500 dark:text-purple-400">In progress</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-4 text-xl font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Payment from <span class="font-semibold">Jese Leos</span>
                    </td>
                    <td class="p-4 text-xl font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Apr 15 ,2021
                    </td>
                    <td class="p-4 text-xl font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                      $2300
                    </td>
                   
                    <td class="p-4 whitespace-nowrap">
                      <span class="bg-green-100 text-green-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">Completed</span>
                    </td>
                  </tr>
                  <tr class="bg-gray-50 dark:bg-gray-700">
                    <td class="p-4 text-xl font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Refund to <span class="font-semibold">THEMESBERG LLC</span>
                    </td>
                    <td class="p-4 text-xl font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Apr 11 ,2021
                    </td>
                    <td class="p-4 text-xl font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                      -$560
                    </td>
                    
                    <td class="p-4 whitespace-nowrap">
                    <span class="bg-green-100 text-green-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">Completed</span>
                    </td>
                  </tr>

                  <tr>
                    <td class="p-4 text-xl font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Payment from <span class="font-semibold">Lana Lysle</span>
                    </td>
                    <td class="p-4 text-xl font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Apr 6 ,2021
                    </td>
                    <td class="p-4 text-xl font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                      $1437
                    </td>
                 
                    <td class="p-4 whitespace-nowrap">
                    <span class="bg-green-100 text-green-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">Completed</span>
                    </td>
                  </tr>
                  <tr class="bg-gray-50 dark:bg-gray-700">
                    <td class="p-4 text-xl font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Payment to <span class="font-semibold">Joseph Mcfall</span>
                    </td>
                    <td class="p-4 text-xl font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Apr 1 ,2021
                    </td>
                    <td class="p-4 text-xl font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                      $980
                    </td>
                   
                    <td class="p-4 whitespace-nowrap">
                    <span class="bg-green-100 text-green-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">Completed</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-4 text-xl font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Payment from <span class="font-semibold">Alphabet LLC</span>
                    </td>
                    <td class="p-4 text-xl font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Mar 23 ,2021
                    </td>
                    <td class="p-4 text-xl font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                      $11,436
                    </td>
                 
                    <td class="p-4 whitespace-nowrap">
                      <span class="bg-purple-100 text-purple-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded-md border border-purple-100 dark:bg-gray-700 dark:border-purple-500 dark:text-purple-400">In progress</span>
                    </td>
                  </tr>
                  <tr class="bg-gray-50 dark:bg-gray-700">
                    <td class="p-4 text-xl font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Payment from <span class="font-semibold">Bonnie Green</span>
                    </td>
                    <td class="p-4 text-xl font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Mar 23 ,2021
                    </td>
                    <td class="p-4 text-xl font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                      $560
                    </td>
                    <td class="p-4 whitespace-nowrap">
                      <span class="bg-green-100 text-green-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">Completed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    
      <div class="flex items-center justify-between pt-3 sm:pt-6">
        <div>
          <button class="inline-flex items-center p-2 text-xl font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" type="button" data-dropdown-toggle="transactions-dropdown">Last 7 days <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
         
          <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="transactions-dropdown">
              <div class="px-4 py-3" role="none">
                <p class="text-xl font-medium text-gray-900 truncate dark:text-white" role="none">
                  Sep 16, 2021 - Sep 22, 2021
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a href="#" class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Yesterday</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Today</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 7 days</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 30 days</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 90 days</a>
                </li>
              </ul>
              <div class="py-1" role="none">
                <a href="#" class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Custom...</a>
              </div>
          </div>
        </div>
        <div class="flex-shrink-0">
          <a href="#" class="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-blue-700 sm:text-xl hover:bg-gray-100 dark:text-blue-500 dark:hover:bg-gray-700">
           Transactions Report
            <svg class="w-4 h-4 ml-1 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
    </div>
    </div>
    </div>

  )
}

export default TableChart
