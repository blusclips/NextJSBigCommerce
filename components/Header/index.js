/** @format */

const styles = {
	nav: {
		flex: 1,
		height: 50,
		backgroundColor: 'green',
		padding: 0,
	},
	bg: {
		backgroundColor: 'blue',
	},
};

const Index = () => {
	return (
		<>
			<div style={{ ...styles.nav, ...styles.bg }}></div>
		</>
	);
};

export default Index;
