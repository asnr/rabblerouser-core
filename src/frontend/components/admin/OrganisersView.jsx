import React from 'react';
import OrganisersList from './OrganisersList.jsx';
import AddOrganiserModalLauncher from './AddOrganiserModalLauncher.jsx';

const OrganisersView = ({ organisers, onSaveOrganiser, onDeleteOrganiser }) => (
    <section className="admin-section" id="lab-organisers">
        <h3>Lab Organisers
            <AddOrganiserModalLauncher
                onSave={onSaveOrganiser}
            />
        </h3>
        <OrganisersList onSave={onSaveOrganiser} onDelete={onDeleteOrganiser} organisers={organisers} />
    </section>
);

OrganisersView.propTypes = {
    organisers : React.PropTypes.array,
    onSaveOrganiser : React.PropTypes.func
};

export default OrganisersView
