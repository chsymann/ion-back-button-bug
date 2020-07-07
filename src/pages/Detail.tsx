import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import {useHistory} from 'react-router';

const Home: React.FC = () => {

  const history = useHistory();

  const clickedEdit = () => {
    history.replace('/edit');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton/>
          </IonButtons>
          <IonTitle>Page two</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>You should now see the back-button up there.</p>
        <IonButton onClick={() => clickedEdit()}>
          Click me (history.replace('/edit'))
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
