import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { LinearGradient } from 'expo-linear-gradient';


const Splash = ({ navigation }) => {
  return (
          // <LinearGradient  colors={[ "#00dbde", "#fc00ff"]} style={styles.LinearGradientstyle}  >
          // <ImageBackground  style={{flex:1, justifyContent:"center",alignItems:"center",position:"absolute", zIndex:1}}  source={require("../assets/adaptive-icon.png")} resizeMode='cover'  >
          // </ImageBackground>
          // </LinearGradient>
          null
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
  }
});



