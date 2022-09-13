
	import './App.css';

	import axios from 'axios';

	import Card  from './components/Card';


	function App() {

		return (

			<main className="d-flex align-items-center" style={{ height: '100vh', marginTop: '-50px' }}>

				<div className="container p-4">

					<Card />

				</div>

			</main>

		);

	}

	export default App;
