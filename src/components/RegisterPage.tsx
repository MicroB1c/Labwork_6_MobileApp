// src/components/RegisterPage.tsx

import React, { useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonItem, IonLabel, IonInput, IonButton, IonAlert } from '@ionic/react';
import { auth } from '../firebaseConfig';

const RegisterPage: React.FC<{ setIsAuthenticated: (isAuthenticated: boolean) => void }> = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');

  const handleRegister = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
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
          <IonTitle>Register</IonTitle>
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
        <IonButton expand="block" onClick={handleRegister}>Register</IonButton>
        {error && (
          <IonAlert
            isOpen={!!error}
            onDidDismiss={() => setError('')}
            header='Registration Failed'
            message={error}
            buttons={['OK']}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;
