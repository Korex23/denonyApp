import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  ImageBackground,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Colors, gradients } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    router.push("/auth/signup/verification");
  };

  const image = { uri: "https://i.ibb.co/hyZpgW1/BACKG.jpg" };

  return (
    <LinearGradient
      colors={gradients.mainGradient}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradientBackground}
    >
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.background}
          >
            <Text style={styles.header}>Create a new account</Text>
            <Text style={styles.subheader}>
              “Share and receive anonymous messages"
            </Text>
            <View style={styles.container}>
              <Text style={styles.label}>Username *</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your username"
                placeholderTextColor={Colors.SUBHEADER}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Text style={styles.label}>Email *</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor={Colors.SUBHEADER}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Text style={styles.label}>Password *</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor={Colors.SUBHEADER}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                autoCapitalize="none"
              />
              <Text style={styles.label}>Confirm Password *</Text>
              <TextInput
                style={styles.input}
                placeholder="Confirm password"
                placeholderTextColor={Colors.SUBHEADER}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                autoCapitalize="none"
              />
              <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Sign Up</Text>
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
                <Pressable onPress={() => router.push("/")}>
                  <Text
                    style={[styles.text, { textDecorationLine: "underline" }]}
                  >
                    Sign In
                  </Text>
                </Pressable>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    margin: 20,
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 20,
    overflow: "scroll",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
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
    color: "#FFDF00",
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
    color: "white",
    fontFamily: "Poppins",
    marginBottom: 10,
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
    backgroundColor: "#FFDF00",
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
    color: "#000",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Poppins-Bold",
  },
  gradientBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});

export default SignUp;
