import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';

const Edit: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton/>
          </IonButtons>
          <IonTitle>Page three - you're out!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>
          You see the edit page but no back button :(
        </p>
        <p>
          we called history.replace() to display this page.
          When you click the browser back button you will see the first page again as desired.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Edit;
