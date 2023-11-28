import React from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, Image, Text, StatusBar } from 'react-native';
import { SIZES, SHADOWS, COLORS, assets, FONTS } from '../constants';
import { ReactButton, CircleButton } from '../constants/Button';
import { FocusedStatusBar } from '../component';
import { DetailSBid } from '../component/DetailSBid';
import DetailsDes from '../component/DetailsDes';
import { SubInfo } from '../component/SubInfo';

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={{ width: '100%', height: 373 }}>
      <Image source={data.image} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
      <View style={{ position: 'absolute', left: 15, top: StatusBar.currentHeight + 10 }}>
        <CircleButton imgUrl={assets.left} handlePress={() => navigation.goBack()} />
      </View>
      <View style={{ position: 'absolute', right: "13%", top: StatusBar.currentHeight + 10, }}>
        <CircleButton imgUrl={assets.heart} justifyContent="center" alignItems="center" />
      </View>
    </View>
  );
};
const Details = ({ route, navigation, style }) => {
  const { data } = route.params;

  const renderItem = ({ item, }) => {
    return <DetailSBid bid={item} />;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
      <View style={styles.bottomContainer}>
        <ReactButton minWidth={170} fontSize={SIZES.large} style={{ ...SHADOWS.dark }} />
      </View>
      <View>
        <FlatList
          data={data.bids}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <>
              <DetailsHeader data={data} navigation={navigation} />
              <SubInfo />
              <View style={{ padding: SIZES.font }}>
                <DetailsDes data={data} />
                {
                  data.bids.length > 0 && (
                    <Text
                      style={{
                        fontSize: SIZES.font,
                        fontFamily: FONTS.semiBold,
                        color: COLORS.primary,
                      }}
                    >
                      Current Bids
                    </Text>
                  )
                }
              </View>
            </>
          )}
          contentContainerStyle={{
            paddingBottom: SIZES.extraLarge * 3,
          }}
        />
      </View>
    </SafeAreaView>
  );
};


export default Details;
const styles = StyleSheet.create({
  bottomContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingVertical: SIZES.font,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 1,
  },
});
