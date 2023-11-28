import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { CircleButton, ReactButton } from "../constants/Button";
import { SubInfo, EndDate, EthPrice, ImageCmp, NFTTitle } from "./SubInfo";
const NFTCard = ({ data, navigation }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          style={styles.imgStyle}
          resizeMode="cover"
          source={data.image}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <ReactButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => { navigation.navigate("Details", { data: data }) }}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;

const styles = StyleSheet.create({
  imgStyle: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  }
})