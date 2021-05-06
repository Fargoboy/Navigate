import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

function VisitorProfile({visitor}) {
    return (
        <View style={styles.container}>
            <Text>Name: {visitor.visitorName}</Text>
            <Text>Email: {visitor.visitorEmail}</Text>
            <Text>Phone: {visitor.visitorPhone}</Text>
        </View>
    );
}

export default VisitorProfile;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#ece0cf",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      height: 50,
      margin: 4,
      width: 200,
      padding: 15
    },
  });