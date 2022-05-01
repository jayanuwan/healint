import react, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

const MChart = ({ total }) => {
	const [graph, setGraph] = useState({ labels: [], data: [] });

	const graphData = total;

	console.log('here', graphData);

	useEffect(() => {
		const labels = [];
		const data = [];

		graphData?.map((v) => {
			labels.push(v?.label);
			data.push(v?.value);
		});

		setGraph({
			labels: labels,
			data: data,
		});
	}, [total]);

	const data = {
		labels: graph.labels,
		datasets: [
			{
				label: '# of records',
				data: graph.data,
				backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
				borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
				borderWidth: 1,
			},
		],
	};

	return (
		<>
			<div>
				<div style={{ height: '300px', width: '300px', margin: '0 auto' }}>
					<Pie data={data} />
				</div>
			</div>
		</>
	);
};

export default MChart;
