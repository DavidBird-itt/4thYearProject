import Recipe from './src/Recipe.js';
import Selection from './src/screens/Selection/Selection.js';
import './App.css';

import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { firebase } from './src/firebase/config';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens';
import {decode, encode} from 'base-64';
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

const App = () => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  const APP_ID = "cb90e89a";
  const APP_KEY = "5169595c097ab43f04267a6be8d64ade";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("chicken");

  /*
  useEffect(() => {
    //getRecipes();
  }, [query]);
*/
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(users => {
      if(user) {
        usersRef
          .doc(user.uid)
          .get
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  return (
    <div className="App">
      <NavigationContainer>
        <Stack.Navigator>
          { user ? (
            <Stack.Screen name="Home">
              {props => <HomeScreen {...props} extraData={user} />}
            </Stack.Screen>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Registration" component={RegistrationScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>


      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit"> Search </button>
      </form>

      <Selection />

      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image} 
        ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
