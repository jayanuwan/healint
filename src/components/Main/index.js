import React, { useState } from 'react';

import * as SC from './styles';

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

	const [name, setName] = useState('');
	const [value, setValue] = useState('');

	const save = () => {
		setExpense((expenses) => [...expenses, { name, value }]);
	};
	console.log(expenses);
	return (
		<SC.Container data-testid="main-details">
			<div>Test</div>
			<SC.TableHead>
				<thead>
					<tr>
						<th>Month</th>
						<th>Savings</th>
					</tr>
				</thead>
				<tbody>
					{expenses.map((item, index) => {
						return;
						<tr key={index}>
							<td key={index + item.name}>{item.name}</td>
							<td key={index + item.value}>{item.value}</td>
						</tr>;
					})}
				</tbody>
			</SC.TableHead>
			<div>Add records here</div>
			<div>Name</div>
			<form>
				<div>Name</div>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					label="Name"
				/>
				<div>Name</div>
				<input
					value={value}
					onChange={(e) => setValue(e.target.value)}
					label="Value"
				/>
				<div></div>
				<button onClick={save} type="button">
					<div>Add</div>
				</button>
			</form>
		</SC.Container>
	);
};

export default Main;
