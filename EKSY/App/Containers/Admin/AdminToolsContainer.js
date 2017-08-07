import React, { Component } from 'react'
import { connect } from 'react-redux'
import AdminToolsComponent from "../../Components/Admin/AdminToolsComponent";
import Dao from "../../Dao/Dao"


export class AdminToolsContainer extends Component {

  constructor(props){
    super(props)
    this.dao= new Dao()
    this.state={
      loading: true,
      pendingMarkers: null,
    }
  }

  componentWillMount() {
    this.getMarkers()
  }

  refresh() {
    this.setState({loading: true})
    this.getMarkers()
  }

  async getMarkers() {
    let markers = await this.dao.getPendingMarkers()
    this.setState({loading: false, pendingMarkers: markers})
  }

  render () {
    return (
      <AdminToolsComponent
          loading={this.state.loading}
          pendingMarkers={this.state.pendingMarkers}
          onRefresh={() => {this.refresh()}}
      />
    )
  }
}


const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminToolsContainer)
