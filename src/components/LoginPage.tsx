// src/components/LoginPage.tsx



import React, { useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonItem, IonLabel, IonInput, IonButton, IonAlert } from '@ionic/react';
import { auth } from '../firebaseConfig';

const LoginPage: React.FC<{ setIsAuthenticated: (isAuthenticated: boolean) => void }> = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setIsAuthenticated(true);
    } catch (error) {
      const firebaseError = error as Error;
      setError(firebaseError.message);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
        </IonItem>
        <IonButton expand="block" onClick={handleLogin}>Login</IonButton>
        {error && (
          <IonAlert
            isOpen={!!error}
            onDidDismiss={() => setError('')}
            header='Login Failed'
            message={error}
            buttons={['OK']}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
