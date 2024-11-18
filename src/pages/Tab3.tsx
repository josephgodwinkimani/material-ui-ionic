import { IonContent, IonHeader, IonPage } from '@ionic/react';
import { Container, Typography } from '@mui/material';
import AppMenu from '../components/AppMenu';
import DataTable from '../components/DataTable';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <AppMenu />
        </IonHeader>
        <Container>
          <Typography variant="h5" sx={{ marginTop: 2 }}>DataTable</Typography>
          <DataTable />
        </Container>
      </IonContent>
    </IonPage >
  );
};

export default Tab3;
