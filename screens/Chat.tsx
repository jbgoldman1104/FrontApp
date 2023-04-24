import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const Chat = () => {
  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = () => {
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.message}>{item}</Text>}
      />
      <View style={styles.form}>
        <TextInput style={styles.input} value={newMessage} onChangeText={setNewMessage} />
        <Button title="Send" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  message: {
    fontSize: 20,
    marginBottom: 10,
  },
  form: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default Chat;
