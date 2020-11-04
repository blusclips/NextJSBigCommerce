/** @format */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import TableContainer from '@material-ui/core/TableContainer';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';

const data = [
	{ id: 1, name: 'Shon', age: 21 },
	{ id: 2, name: 'Isaac', age: 20 },
	{ id: 3, name: 'Cephas', age: 28 },
];

const useStyles = makeStyles({
	table: {
		width: 500,
	},
});

const Index = ({ text }) => {
	const [isChecked, setChecked] = useState('Shon');
	const [newData, setNewData] = useState([...data]);
	const classes = useStyles();

	const sortAge = (e) => {
		const value = e.target.value;
		let newData1 = data.sort((a, b) => {
			if (b.age > a.age) {
				return -1;
			}
			if (b.age < a.age) {
				return 1;
			}
			return 0;
		});
		setNewData(newData1);
		setChecked(value);
	};

	return (
		<>
			<div role='division'>
				<Typography variant='h1'> {text} </Typography>
				<TableContainer className={classes.table} component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell align='left'>Id</TableCell>
								<TableCell align='left'> Name </TableCell>
								<TableCell align='right'> Age </TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{newData.map((item, i) => (
								<TableRow key={i}>
									<TableCell>
										{' '}
										<Radio
											value={item.name}
											checked={isChecked === item.name}
											onChange={(e) => sortAge(e)}
										/>{' '}
									</TableCell>
									<TableCell> {item.name} </TableCell>
									<TableCell align='right'> {item.age} </TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</>
	);
};

Index.defaultProps = {
	text: 'My name is Cepho',
};

Index.propTypes = {
	text: propTypes.string.isRequired,
};

export default Index;
