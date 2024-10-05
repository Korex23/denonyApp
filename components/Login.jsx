import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  ImageBackground,
  Pressable,
} from "react-native";
import { Colors, gradients } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert("Validation Error", "Please fill in both email and password");
      return;
    }

    // You can handle form submission logic here, like an API call.
    Alert.alert(
      "Login Success",
      `Email: ${email}\nPassword: ${"*".repeat(password.length)}`
    );

    // Redirect to the home page after successful login
    router.push("/dashboard");
  };

  //   const image = require("@/assets/BACKG.jpg");
  const image = { uri: "https://i.ibb.co/hyZpgW1/BACKG.jpg" };

  return (
    <LinearGradient
      colors={gradients.mainGradient} // Using your gradient from theme.js
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradientBackground}
    >
      <View style={[styles.content]}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.background}
        >
          <Text style={styles.header}>Log in to your account</Text>
          <Text style={styles.subheader}>
            “Share and receive anonymous messages"
          </Text>
          <View style={styles.container}>
            <Text style={styles.label}>Your Username or Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor={Colors.SUBHEADER}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Text style={styles.label}>Your Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor={Colors.SUBHEADER}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true} // Hides the password input
              autoCapitalize="none"
            />
            <Pressable onPress={() => router.push("/auth/resetpassword")}>
              <Text style={styles.text}>Forgot your password?</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 50,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  color: Colors.WHITE,
                  fontFamily: "Poppins",
                  textAlign: "center",
                }}
              >
                Don't have an account?{" "}
              </Text>
              <Pressable onPress={() => router.push("/auth/signup")}>
                <Text
                  style={[styles.text, { textDecorationLine: "underline" }]}
                >
                  Sign Up
                </Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1, // Make sure it covers the whole screen
    width: "100%", // Set width to the screen width
    height: "100%", // Set height to the screen height
    position: "absolute", // Ensure it's positioned behind other components
  },
  content: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    margin: 20,
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 20, // Ensure this is set
    overflow: "hidden", // Clips content inside the View to match the borderRadius
  },
  background: {
    flex: 1, // Ensure the background fills the entire area
    width: "100%",
    height: "100%",
    borderRadius: 20, // Ensure the ImageBackground respects the borderRadius
  },
  header: {
    fontSize: 28,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
    color: "white",
    fontFamily: "Poppins-Bold",
  },
  subheader: {
    fontSize: 16,
    padding: 10,
    paddingHorizontal: 20,
    textAlign: "center",
    color: "white",
    fontFamily: "Poppins",
  },
  text: {
    fontSize: 14,
    color: "#FFDF00", // Yellow color for the "Forgot your password?" link
    fontFamily: "Poppins",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    marginTop: 50,
    padding: 20,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    color: "white", // Ensure this is visible against the background
    fontFamily: "Poppins",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    color: Colors.SUBHEADER,
    width: "100%",
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginBottom: 30,
    paddingHorizontal: 10,
    fontFamily: "Poppins",
  },
  button: {
    backgroundColor: "#FFDF00", // Background color of the button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: "#000", // Black text color for contrast
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Poppins-Bold",
  },
});

export default Login;
