import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 90%;
	margin: auto;
	min-height: 400px;
	padding: 10px;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const TableHead = styled.table`
	align-items: center;
	justify-content: center;
	th {
		background-color: red;
	}
`;
