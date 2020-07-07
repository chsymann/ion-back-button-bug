import {IonBackButton, IonButton, IonButtons, IonTitle, IonContent, IonHeader, IonPage, IonToolbar} from '@ionic/react';
import React from 'react';

const List: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton/>
          </IonButtons>
          <IonTitle>Page one</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton routerLink={'/detail'}>
          Click me (routerLink='/detail')
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default List;
