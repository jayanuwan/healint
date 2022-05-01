import styled from 'styled-components';

export const FormWrapper = styled.div`
	background-color: aliceblue;
	padding: 1rem;
	font-family: sans-serif;
	color: darkslategrey;
	width: 50rem;
`;

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
	width: 52.3rem;
	margin-top: 1rem;
	th {
		background-color: lightsteelblue;
		padding: 0.5rem;
		font-weight: 600;
		color: navy;
	}
`;

export const Heading = styled.div`
	font-weight: 600;
	text-align: center;
	padding-bottom: 2rem;
	padding-top: 2rem;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: row;
`;

export const Lable = styled.div`
	padding: 0.5rem;
`;

export const Input = styled.input`
	padding-left: 0.5rem;
	font-size: 1rem;
	margin-right: 1rem;
`;
