import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  const [loaded] = useFonts({
    'SUIT-400': require('@/assets/fonts/SUIT-Regular.ttf'),
    'SUIT-500': require('@/assets/fonts/SUIT-Medium.ttf'),
    'SUIT-600': require('@/assets/fonts/SUIT-SemiBold.ttf'),
    'SUIT-700': require('@/assets/fonts/SUIT-Bold.ttf'),
    'SUIT-800': require('@/assets/fonts/SUIT-ExtraBold.ttf'),
  });

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={{ fontFamily: 'SUIT-700', fontSize: 20 }}>테스트</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
