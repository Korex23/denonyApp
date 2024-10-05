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
import Svg, {
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
import React, { useState } from "react";
import { Colors, gradients } from "@/constants/Colors";
import { LinearGradient as Gradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    router.push("/auth/resetpassword/confirmation");
  };

  const image = { uri: "https://i.ibb.co/hyZpgW1/BACKG.jpg" };

  return (
    <Gradient
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
            <Pressable onPress={() => router.push("/")}>
              <Text
                style={[
                  styles.text,
                  {
                    textAlign: "right",
                    padding: 10,
                    marginTop: 20,
                    textDecorationLine: "underline",
                  },
                ]}
              >
                Back to Login
              </Text>
            </Pressable>
            <Text style={styles.header}>Reset Your Password</Text>
            <Text style={styles.subheader}>
              Kindly fill the form below with appropriate information.
            </Text>
            <View style={styles.container}>
              <Text style={styles.label}>Your Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor={Colors.SUBHEADER}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Next</Text>
              </Pressable>
            </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </Gradient>
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
    marginTop: 150,
    paddingHorizontal: 10,
    color: "white",
    fontFamily: "Poppins-Bold",
  },
  subheader: {
    fontSize: 16,
    padding: 10,
    color: "white",
    fontFamily: "Poppins-Bold",
  },
  text: {
    fontSize: 14,
    color: "#FFDF00",
    fontFamily: "Poppins",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    marginVertical: 50,
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
    marginBottom: 30,
    paddingHorizontal: 10,
    borderRadius: 5,
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
  row: {
    flexDirection: "row",
    justifyContent: "space-around", // Space between squares
    alignItems: "center",
    padding: 10,
  },
  square: {
    width: 40,
    height: 40,
    backgroundColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    color: "white",
    textAlign: "center",
    fontFamily: "Poppins-Bold",
    fontSize: 24,
  },
});
export default ResetPassword;
