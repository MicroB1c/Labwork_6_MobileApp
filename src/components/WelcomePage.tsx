// src/components/WelcomePage.tsx
import React from 'react';
import { IonPage, IonContent, IonButton, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import { useHistory } from 'react-router-dom';

interface WelcomePageProps {
  onDismiss: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onDismiss }) => {
  const history = useHistory();

  const goToLogin = () => {
    onDismiss(); // Если вы хотите закрыть приветственную страницу
    history.push('/login');
  };

  const goToRegister = () => {
    onDismiss(); // Если вы хотите закрыть приветственную страницу
    history.push('/register');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome to Recipe App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div>
          <h2>Discover Delicious Recipes</h2>
          <IonButton expand="block" onClick={goToLogin}>Login</IonButton>
          <IonButton expand="block" onClick={goToRegister}>Register</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default WelcomePage;
