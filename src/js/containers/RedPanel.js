import { ActionCreators as undoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import { showPanel, setPanelInfo } from '../actions'
import Panel from '../components/Panel'

const mapStateToProps = (state) => {
	var direction = (state.panels.past.length > 0 && state.panels.past[state.panels.past.length -1].depth < state.panels.present.depth) ? 1 : 0;
// 	if(state.panels.future.length > 0){
// 		direction = -1;
// 	}
	
	return {
		active: state.panels.present.active,
		direction: direction,
		info: state.panels.present.info
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		newPanel: (id, direction) => {
			dispatch(showPanel(id, direction));
		},
		setInfo: (text) => {
			dispatch(setPanelInfo({text: text}));
		},
		onUndo: () => dispatch(undoActionCreators.undo())
	}
}

const RedPanel = connect(
	mapStateToProps,
	mapDispatchToProps
)(Panel)

export default RedPanel
