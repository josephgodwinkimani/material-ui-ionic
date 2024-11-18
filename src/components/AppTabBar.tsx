import * as React from 'react';
import {
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
} from '@ionic/react';
import { home, library, list } from 'ionicons/icons';
import Avatar from '@mui/material/Avatar';

const TabBar: ({ setIsAccountOpen }: {
    setIsAccountOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => JSX.Element = ({ setIsAccountOpen }) => {
    return (
        <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
                <IonIcon aria-hidden="true" icon={home} />
                <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
                <IonIcon aria-hidden="true" icon={library} />
                <IonLabel>Library</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
                <IonIcon aria-hidden="true" icon={list} />
                <IonLabel>Users</IonLabel>
            </IonTabButton>
            <IonTabButton tab="account" onClick={() => setIsAccountOpen(true)}>
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" sx={{ width: 24, height: 24 }} />
                <IonLabel className="tab-account-label">Account</IonLabel>
            </IonTabButton>
        </IonTabBar>
    );
};

export default TabBar;