import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <RootNavigation />
        <StatusBar style="auto" />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
