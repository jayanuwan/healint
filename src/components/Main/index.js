import React, { useEffect, useState } from 'react';

import * as SC from './styles';
import MChart from './../Chart';

const selector = ({ user: { userList } }) => ({ userList });

const filter = (data, value, type) => {
	switch (type) {
		case 'text':
			return data.filter((item) =>
				item?.name.toLowerCase().includes(value.toLowerCase())
			);
		case 'number':
			return data.filter((item) =>
				item?.phone.toLowerCase().includes(value.toLowerCase())
			);
	}
};

const items = [
	{
		name: 'test1',
		value: '-10',
	},
	{
		name: 'test1',
		value: '-10',
	},
	{
		name: 'test1',
		value: '-10',
	},
];

const Main = () => {
	const [expenses, setExpense] = useState([]);
	const [total, setTotal] = useState([]);

	const [name, setName] = useState('');
	const [value, setValue] = useState('');
	const [type, setType] = useState('+');

	const save = () => {
		setExpense((expenses) => [
			...expenses,
			{ name, value: type.concat(value) },
		]);
	};

	useEffect(() => {
		const creditA = expenses.filter((x) => x.value.includes('+'));
		const totalA = creditA.reduce(function (a, val) {
			return a + parseInt(val.value);
		}, 0);

		const creditB = expenses.filter((x) => x.value.includes('-'));
		const totalB = creditB.reduce(function (acc, val) {
			return acc + parseInt(val.value);
		}, 0);

		const total = [
			{
				label: 'Credited',
				value: totalA,
			},
			{
				label: 'Debited',
				value: totalB,
			},
		];
		console.log('before', total);
		setTotal(total);
	}, [expenses]);

	return (
		<SC.Container data-testid="main-details">
			<SC.FormWrapper>
				<MChart total={total} />
				<SC.Heading>Add your expenses here</SC.Heading>

				<SC.Form>
					<SC.Lable>Description</SC.Lable>
					<SC.Input
						value={name}
						onChange={(e) => setName(e.target.value)}
						label="Name"
					/>
					<select value={type} onChange={(e) => setType(e.target.value)}>
						<option value="+">+</option>
						<option value="-">-</option>
					</select>
					<SC.Lable>Amount</SC.Lable>
					<SC.Input
						value={value}
						onChange={(e) => setValue(e.target.value)}
						label="Value"
						type="number"
					/>
					<div></div>
					<button onClick={save} type="button">
						<div>Add</div>
					</button>
				</SC.Form>
			</SC.FormWrapper>
			<SC.TableHead>
				<thead>
					<tr>
						<th>Description</th>
						<th>$</th>
					</tr>
				</thead>
				<tbody>
					{expenses.map((item, index) => {
						return (
							<tr key={index}>
								<td> {item.name}</td>
								<td> {item.value}</td>
							</tr>
						);
					})}
				</tbody>
			</SC.TableHead>
		</SC.Container>
	);
};

export default Main;
