import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';

export default function RootLayout() {
  const [loaded] = useFonts({
    'SUIT-400': require('@/assets/fonts/SUIT-Regular.ttf'),
    'SUIT-500': require('@/assets/fonts/SUIT-Medium.ttf'),
    'SUIT-600': require('@/assets/fonts/SUIT-SemiBold.ttf'),
    'SUIT-700': require('@/assets/fonts/SUIT-Bold.ttf'),
    'SUIT-800': require('@/assets/fonts/SUIT-ExtraBold.ttf'),
  });

  if (!loaded) return null;

  return <Slot />;
}
