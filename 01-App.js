import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState("Derya Gülmez");
  const [age, setAge] = useState(21);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ad: {name}</Text>
      <Text style={styles.text}>Yaş: {age}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => setAge(age + 1)} color="black" />
        <View style={styles.buttonSpacer} />
        <Button title="-" onPress={() => setAge(Math.max(0, age - 1))} color="black" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonSpacer: {
    width: 20,
  },
});