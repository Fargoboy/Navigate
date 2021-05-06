import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
function HomeIndex(props) {
return (
<View style={styles.container}>
   <view style={{padding:20,fontSize:24,}}>
      <Text> This is Home page</Text>
   </view>
   <Button
      title="Go to Profile"
      onPress={() =>
   props.navigation.navigate('Profile')
   }
   />
   <Button
      title="Go to About us"
      onPress={() =>
   props.navigation.navigate('About')
   }
   />
</View>
);
}
const mapStateToProps = (state) => {
const { visitors } = state
return { visitors }
};
export default connect(mapStateToProps)(HomeIndex);
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
});