import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import {Link} from 'react-router-dom';


function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/home"><SidebarRow Icon={HomeIcon} title="Listes Vehicules" /></Link>
            <Link to="/ajouterInfraction"><SidebarRow Icon={WhatshotIcon} title="Ajouter Infraction" /></Link>
            <SidebarRow Icon={SubscriptionIcon} title="Regler Situation Vehicule" />
            <hr />
        </div>
    )
}

export default Sidebar
