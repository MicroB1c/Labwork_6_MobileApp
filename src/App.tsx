import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, fish, paw, logoOctocat, logoTwitter, fastFood } from 'ionicons/icons';
import BeefPage from './components/BeefPage';
import ChickenPage from './components/ChickenPage';
import PorkPage from './components/PorkPage';
import FishPage from './components/FishPage';
import WelcomePage from './components/WelcomePage';

import { auth } from './firebaseConfig';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user);
      if (user) {
        setShowWelcome(false); // Скрываем экран приветствия, если пользователь уже аутентифицирован
      }
    });
    return () => unsubscribe(); // Отписываемся от слушателя
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        {showWelcome ? (
          <WelcomePage onDismiss={() => setShowWelcome(false)} />
        ) : !isAuthenticated ? (
          <IonRouterOutlet>
            <Route exact path="/login" render={() => <LoginPage setIsAuthenticated={setIsAuthenticated} />} />
            <Route exact path="/register" render={() => <RegisterPage setIsAuthenticated={setIsAuthenticated} />} />
            <Route exact path="/" render={() => <Redirect to="/login" />} />
          </IonRouterOutlet>
        ) : (
          <>
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path="/beef" component={BeefPage} />
                <Route exact path="/chicken" component={ChickenPage} />
                <Route exact path="/pork" component={PorkPage} />
                <Route exact path="/fish" component={FishPage} />
                <Route exact path="/" render={() => <Redirect to="/beef" />} />
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="beef" href="/beef">
                  <IonIcon icon={fastFood} />
                  <IonLabel>Beef</IonLabel>
                </IonTabButton>
                <IonTabButton tab="chicken" href="/chicken">
                  <IonIcon icon={logoTwitter} />
                  <IonLabel>Chicken</IonLabel>
                </IonTabButton>
                <IonTabButton tab="pork" href="/pork">
                  <IonIcon icon={logoOctocat} />
                  <IonLabel>Pork</IonLabel>
                </IonTabButton>
                <IonTabButton tab="fish" href="/fish">
                  <IonIcon icon={fish} />
                  <IonLabel>Fish</IonLabel>
                </IonTabButton>
                {/* Добавьте здесь дополнительные кнопки вкладок при необходимости */}
              </IonTabBar>
            </IonTabs>
          </>
        )}
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

