import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
function ProfileIndex(props) {
return (
<View>
   <Text> Welecome to the profile</Text>
   <Button
      title="Profile"
      onPress={() =>
   props.navigation.navigate('Profile')
   }
   />
   <Button
      title="Home"
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
export default connect(mapStateToProps)(ProfileIndex);