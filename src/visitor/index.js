import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import VisitorProfile from './visitor-profile';
function VisitorIndex(props) {
console.log(props)
return (
<View style={styles.container}>
   <Text>List of my visitors!</Text>
   {
   props.visitors.all_visitors.map((visitor, index)=>
   <VisitorProfile key={index} visitor= {visitor}/>
   )
   }
   <Button
      title="Back to home"
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
export default connect(mapStateToProps)(VisitorIndex);
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
});