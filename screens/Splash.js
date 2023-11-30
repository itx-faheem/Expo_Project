import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { LinearGradient } from 'expo-linear-gradient';


const Splash = ({ navigation }) => {
  return (
        <View style={{justifyContent:"center",alignItems:"center", flex:1}} >
          <LinearGradient colors={["68","254","255"]}  style={styles.LinearGradientstyle}  >
        <Image source={assets.SplashLogo} style={{width:200,height:200,}} resizeMode='contain'    />
          </LinearGradient>
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
    flex:1
  }
});



