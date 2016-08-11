import undoable from 'redux-undo'

const initialState = {
	active: 'default',
	depth: 0,
	info: {}
}

const panels = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_PANEL':
			return Object.assign({}, state, {
				active: action.id,
				depth: state.depth + action.direction
			})
		case 'SET_INFO':
			let info = Object.assign({}, state.info, action.info);
			
			return Object.assign({}, state, {
				info: info
			})
		default:
			return state
	}
}

const undoablePanels = undoable(panels, {
	debug: true,
	limit: 10,
	filter: function filterActions(action, currentState, previousHistory) {
    return action.type === 'SET_PANEL'; // only add to history if action is SET_PANEL
  }
})

export default undoablePanels
