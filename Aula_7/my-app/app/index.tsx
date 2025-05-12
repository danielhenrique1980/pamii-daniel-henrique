import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAmPgS21LYzEJ5YE3WoqiHK7A-GnX-3uRM",
  authDomain: "meu-primeiro-firebase-3630e.firebaseapp.com",
  projectId: "meu-primeiro-firebase-3630e",
  storageBucket: "meu-primeiro-firebase-3630e.firebasestorage.app",
  messagingSenderId: "623035133676",
  appId: "1:623035133676:web:2458072ed692ce7654bfc9"
};

firebase.initializeApp(firebaseConfig);

import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => { // Adicionei a declaração como async
      const nomesCollection = firebase.firestore().collection('nomes');
      const snapshot = await nomesCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() }); // Corrigi a sintaxe do spread
      });

      setNomes(data);
    };

    fetchData();

  }, []); // Removi a chamada duplicada e adicionei o array de dependências vazio

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}