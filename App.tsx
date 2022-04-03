import { SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './components/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
