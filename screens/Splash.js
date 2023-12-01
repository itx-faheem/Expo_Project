import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { LinearGradient } from 'expo-linear-gradient';


const Splash = ({ navigation }) => {
  return (
          <View   style={styles.LinearGradientstyle}  >
        <Image source={assets.logoicon} style={{width:200,height:200,}} resizeMode='contain'/>
          </View>
  );
}

export default Splash;

const styles = StyleSheet.create({
  LinearGradientstyle:{
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems:"center",
    flex:1,
    backgroundColor:"#fff"
  }
});



