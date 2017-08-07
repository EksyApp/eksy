import React, { Component } from 'react'
import { connect } from 'react-redux'
import AdminToolsComponent from "../../Components/Admin/AdminToolsComponent";


export class AdminToolsContainer extends Component {

  render () {
    return (
      <AdminToolsComponent/>
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
