import React, { useState } from 'react';
import { useSelector } from 'react-redux';

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
	const { userList = [] } = useSelector(selector);

	const [users, setUsers] = useState([]);
	const [FilterUsers, setFilterUsers] = useState([]);

	const [name, setName] = useState('');
	const [value, setValue] = useState('');

	const save = () => {
		console.log(name);
	};

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
					<tr>
						<td>January</td>
						<td>$100</td>
					</tr>
					<tr>
						<td>February</td>
						<td>$80</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td>Sum</td>
						<td>$180</td>
					</tr>
				</tfoot>
			</SC.TableHead>
			<div>Add records hewre</div>
			<div>Name</div>
			<form>
				<div>Name</div>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					label="Company"
				/>
				<div>Name</div>
				<input
					value={value}
					onChange={(e) => setValue(e.target.value)}
					label="Company"
				/>
				<div></div>
				<button type="button" onClick={save}></button>
			</form>
		</SC.Container>
	);
};

export default Main;
