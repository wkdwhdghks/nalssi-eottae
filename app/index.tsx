import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import * as Location from 'expo-location';

export default function HomeScreen() {
  const [address, setAddress] = useState('');

  useEffect(() => {
    async function getLocation() {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        return;
      }

      const { latitude, longitude } = (await Location.getCurrentPositionAsync()).coords;
      const [{ city, district }] = await Location.reverseGeocodeAsync({ latitude, longitude });
      setAddress(`${city} ${district}`);
    }
    getLocation();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text style={styles.address}>{address}</Text>

        <View style={styles.tempContainer}>
          <Text style={styles.temp}>21°</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#2d0683',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  address: {
    fontSize: 22,
    fontFamily: 'SUIT-600',
    color: 'white',
  },
  tempContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  temp: {
    color: 'white',
    fontSize: 82,
    fontFamily: 'SUIT-800',
  },
});
