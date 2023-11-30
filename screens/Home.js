import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, FlatList } from 'react-native';
import { FocusedStatusBar, NFTCard, HomeHeader } from '../component';
import { COLORS, NFTData } from '../constants';

const Home = ({ navigation }) => {
  const renderItem = (item) => <NFTCard data={item} navigation={navigation} />;
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }} >
          <FlatList
            data={nftData}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader   onSearch={handleSearch} />}
          />
        </View>
      </View>
      <View style={styles.backgroundContainer} >
        <View style={{ height: 300, backgroundColor: COLORS.primary }} />
        <View style={{ flex: 1, backgroundColor: COLORS.white }} />
      </View>
    </SafeAreaView>
  );
};

export default Home;


const styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
  },
  primaryBackground: {
    height: 300,
    backgroundColor: COLORS.primary,
  },
  whiteBackground: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});