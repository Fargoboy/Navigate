import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useLinking } from '@react-navigation/native';
import 'bootstrap/dist/css/bootstrap.min.css';
function AboutIndex(props) {
return (
<View>
   <Text style={styles.container}>
      <h1> About us</h1>
   </Text>
   <View style={styles.bodytxt}>
      <Text>Hellow to our Office </Text>
      <Text>Would like some Coffee?</Text>
   </View>
   <Button
      title="Go to Home"
      onPress={() =>
   props.navigation.navigate('Home')
   }
   />
</View>
);
}
const mapStateToProps = (state) => {
const { visitors } = state
return { visitors }
};
export default connect(mapStateToProps)(AboutIndex);
const styles = StyleSheet.create({
container: {
flex: 1,
flexDirection: "row",
backgroundColor: '#3cb371',
color: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
input:{
width: 160,
height: 30,
margin: 4,
padding: 5,
borderWidth: 1,
borderColor: "red",
justifyContent: 'center',
textAlign: 'center',
},
bodytxt:{
marginLeft: 350,
margin: 4,
padding: 5,
borderWidth: 10,
borderColor: "blue",
justifyContent: 'center',
textAlign: 'center',
borderRadius:'20',
color:'white',
}
});