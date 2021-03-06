import React, { Component } from 'react';
import { connect } from 'react-redux';
import { branchListUpdated } from '../actions/';

import AdminHeader from './AdminHeader';
import UserMessageView from './UserMessageView';
import GroupsViewContainer from './groupView/GroupsViewContainer';
import OrganisersViewContainer from './adminsView/OrganisersViewContainer';
import branchService from '../services/branchService.js';

class AdminDashboard extends Component {
  componentDidMount() {
    branchService.getMyBranches().then(branches => {
      this.props.onBranchListUpdate(branches);
    });
  }

  render() {
    return (
      <div className="admin-container">
        <AdminHeader />
        <UserMessageView />
        <OrganisersViewContainer />
        <GroupsViewContainer />
      </div>);
  }
}

AdminDashboard.propTypes = {
  onBranchListUpdate: React.PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onBranchListUpdate: branches => dispatch(branchListUpdated(branches)),
});

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
