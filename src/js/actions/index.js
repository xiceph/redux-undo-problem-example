
//--- PANELS ----------------------------------------------------------------

export const showPanel = (id, direction) => {
	return {
		type: 'SET_PANEL',
		id: id,
		direction: direction || 0
	}
}

export const setPanelInfo = (info) => {
	return {
		type: 'SET_INFO',
		info: info
	}
}
