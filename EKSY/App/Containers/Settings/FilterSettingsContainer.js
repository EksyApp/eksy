import React, {Component} from 'react'
import Filters from '../../Data/Filters'
import * as ReduxActions from '../../Actions'
import {connect} from 'react-redux'
import FilterSettingsComponent from "../../Components/Settings/FilterSettingsComponent";

//Renders the view for user tho manage filters and holds it's logic
//Lower part of user settings view 
export class FilterSettingsContainer extends Component {

	constructor(props) {
		super(props)
		this.filters = [...Filters.mainFilters];
		this.setCheckedStatuses(this.props);
	}

	_handlePress(name, checked) {
		if(checked) {
			this.props.addFilter(name);
		} else {
			this.props.removeFilter(name);
		}
	}

	componentWillReceiveProps(props) {
		this.setCheckedStatuses(props);
	}

	setCheckedStatuses(props) {
		for (let filter of this.filters) {
			filter.checked = props.activeFilters.includes(filter.name);
		}
	}

	render() {
		return(
				<FilterSettingsComponent data={this.filters} onPress={(name, checked) => {this._handlePress(name, checked)}}/>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		activeFilters: state.filters
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addFilter: (filter) => {
			dispatch(ReduxActions.addFilter(filter))
		},
		removeFilter: (filter) => {
			dispatch(ReduxActions.removeFilter(filter))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterSettingsContainer)
