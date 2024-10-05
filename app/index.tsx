import { Text, View, Dimensions, StyleSheet } from "react-native";
import Login from "../components/Login";
import { Colors, gradients } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return <Login />;
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1, // Make sure it covers the whole screen
    width: "100%", // Set width to the screen width
    height: "100%", // Set height to the screen height
    position: "absolute", // Ensure it's positioned behind other components
  },
});
