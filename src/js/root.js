import React from 'react';
import ReactDom from 'react-dom';

import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import RedPanel from './containers/RedPanel';

import mapApp from './reducers'

// Store
export let store = createStore(mapApp);

if(typeof __DEV__ !== "undefined"){
	let unsubscribe = store.subscribe(() =>
		console.log(store.getState())
	)
}

// Render!
ReactDom.render(
	<Provider store={store}>
		<RedPanel	/>
	</Provider>,
	document.getElementById('app')
);

