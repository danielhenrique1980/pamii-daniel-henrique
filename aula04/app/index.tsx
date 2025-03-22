import firebase from 'firebase/compat/app';
import 'firebase/compat/app'

const firebaseConfig = {
  apiKey: "AIzaSyAxB0pGjAOzMi45P_QFEqm7faHWiCiWkpo",
  authDomain: "meu-primeiro-firebase-b9e65.firebaseapp.com",
  projectId: "meu-primeiro-firebase-b9e65",
  storageBucket: "meu-primeiro-firebase-b9e65.firebasestorage.app",
  messagingSenderId: "994594781729",
  appId: "1:994594781729:web:fb778b373d584cdc524160"
};


firebase.initializeApp(firebaseConfig);

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const nomesCollection = firebase.firestore().collection('Nomes');
        const snapshot = await nomesCollection.get();

        const data = [];
        snapshot.forEach((doc) => {
          data.push ({ id: doc.id, ...doc.data() });
         });

         setNomes(data);
      };

      fetchData();
    }, []);

    return (
      <View style={{ flex: 1, justifyContent: 'center',
      alignItems: 'center'}}>
        <Text>Lista de Nomes:</Text>
        <FlatList
          data={nomes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.Nome} {item.Sobrenome}</Text>
            </View>
          )}
      </View>
    )
}
