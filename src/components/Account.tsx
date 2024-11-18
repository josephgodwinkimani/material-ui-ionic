import './Account.css';
import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonItem,
  IonLabel,
  IonList
} from "@ionic/react";

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onClose}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel>Profile</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Settings</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Support</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Language</IonLabel>
          </IonItem>
        </IonList>
        <IonList lines="none">
          <IonItem>
            <IonLabel>Sign Out</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonModal>
  );
};

export default AccountModal;
