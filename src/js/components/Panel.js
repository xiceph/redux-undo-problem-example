import React, { Component } from 'react';

export default class Panel extends Component {
	constructor() {
		super();
	}
	
	render() {
		const {
			active,
			direction,
			info,
			setInfo,
			newPanel,
			onUndo
		} = this.props;
		
		console.log(direction)
		
		return (
			<div>
				<h1>{active}</h1>
				<p>{info.text ? info.text : 'no info'}</p>
				<div>
					<button onClick={() => newPanel('Test 0', 0)}>Test 0</button><br/>
					<button onClick={() => newPanel('Test 1', 1)} style={{margin: '1em 0 0 2em'}}>Test 1 +</button><br/>
					<button onClick={() => newPanel('Test 2', 1)} style={{margin: '1em 0 0 2em'}}>Test 2 +</button>
				</div>
				<div>
					<button onClick={() => setInfo('info '+Math.random())} style={{margin: '3em 0 3em 0'}}>set Info</button>
				</div>
				<div>
					<button onClick={onUndo} disabled={direction !== 1 ? 'disabled' : null}>back</button>
				</div>
			</div>
		)
	}
}


