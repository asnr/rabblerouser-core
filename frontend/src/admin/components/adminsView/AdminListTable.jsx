import React from 'react';
import SortedTable from '../../common/SortedTable';
import EditAdminModalLauncher from './EditAdminModalLauncher';
import DeleteButton from '../../common/DeleteButton';

const columns = [
  { type: 'name', field: 'name', label: 'Name' },
  { type: 'email', field: 'email', label: 'Email' },
  { type: 'tel', field: 'phoneNumber', label: 'Phone' },
  { type: 'actions' },
];

const mapFields = ({ name, email, phoneNumber }) => ({ name, email, phoneNumber });
const mapActions = (admin, onSaveAdmin, onDeleteAdmin) => [
  <EditAdminModalLauncher key={`${admin.id}-edit`} admin={admin} onSave={onSaveAdmin} />,
  <DeleteButton
    key={`${admin.id}-delete`}
    confirmMessage="Are you sure you want to delete the selected person?"
    title="Delete admin"
    onDelete={() => onDeleteAdmin(admin)}
  />,
];

const AdminListTable = ({ admins, onSaveAdmin, onDeleteAdmin }) =>
  <SortedTable
    columns={columns}
    data={admins.map(admin =>
      Object.assign({}, mapFields(admin), { actions: mapActions(admin, onSaveAdmin, onDeleteAdmin) })
    )}
    sortOn="name"
  />;

export default AdminListTable;

AdminListTable.propTypes = {
  admins: React.PropTypes.array,
  onSaveAdmin: React.PropTypes.func.isRequired,
  onDeleteAdmin: React.PropTypes.func.isRequired,
};
