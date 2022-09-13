
	import React, { Component } from 'react';

	import '../card.css';

	import axios from 'axios';


	export class Card extends Component {

		state = {

			loading  : true,
			
			isFemale : false,
			
			name     : '',
			
			phone    : '',
			
			email    : '',
			
			gender   : '',
			
			picture  : ''

		}

		getUser = () => {
			
			this.state.loading = true;

			axios.get( 'https://randomuser.me/api/' ).then( response => {

				let user = response.data.results[ 0 ];

				this.state.name     = user.name.first + ' ' + user.name.last;
				this.state.phone    = user.phone;
				this.state.email    = user.email;
				this.state.gender   = user.gender;
				this.state.picture  = user.picture.large;

				( user.gender === 'female' ) ? this.state.isFemale = true : this.state.isFemale = false;

				this.state.loading = false;

			});

		}

		componentDidMount(){

			this.getUser();

		}

		render(){

			return (

				<>

				<div className="row">

					<div className="col-md-4"></div>

					<div className={`col-md-4 card p-4 text-center ${ this.state.isFemale === true ? 'pink0' : 'blue0' } ${ this.state.loading === true ? 'loading' : '' }`} style={{ height: '400px' }}>

						<div className="card-top p-4">

							<img className="rounded-circle" src={ this.state.picture } alt="" />

						</div>

						<div className="card-title h4">{ this.state.name }</div>

						<div className="card-title h6 mt-2">{ this.state.phone }</div>

						<div className="card-title h6 mt-2">{ this.state.email }</div>

						<button className={`btn mt-4 ${ this.state.isFemale === true ? 'pink' : 'blue text-light' }`} onClick={ this.getUser }>Randomize</button>

					</div>

					<div className="col-md-4"></div>

				</div>

				</>

			)

		}

	}

	export default Card;
