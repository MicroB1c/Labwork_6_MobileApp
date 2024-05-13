import React, { useEffect, useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard
} from '@ionic/react';
import { fetchRecipes, Recipe } from './api/RecipeService';

const FishPage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetchRecipes('fish').then(setRecipes);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Fish Recipes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {recipes.map((recipe, index) => (
          <IonCard key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', background: 'rgba(255, 255, 255, 0.8)' }}>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} style={{ width: '100px', height: 'auto', marginRight: '10px', borderRadius: '5px' }} />
            <div style={{ flex: 1 }}>
              <h2>{recipe.recipe.label}</h2>
              <h3 style={{ color: 'gray' }}>Source: {recipe.recipe.source}</h3>
              <p>{recipe.recipe.ingredientLines.join(', ')}</p>
            </div>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default FishPage;