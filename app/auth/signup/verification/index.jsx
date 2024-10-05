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

const EmailVerification = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    router.push("/dashboard");
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
            <View style={{ alignItems: "center", marginTop: 100 }}>
              <Svg
                width="108"
                height="108"
                viewBox="0 0 108 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M44.5734 58.4467L54.0067 64.8967L63.1 58.6233L83.4834 78.7333C82.9467 78.9067 82.3734 79 81.7767 79H26.2234C25.4901 79 24.7901 78.8567 24.1467 78.6L44.5734 58.4467ZM87.3334 41.92V73.4433C87.3334 74.2667 87.1534 75.0467 86.8334 75.75L66.8534 56.0367L87.3334 41.92ZM20.6667 42.0967L40.8067 55.87L21.0201 75.3967C20.7857 74.7721 20.666 74.1104 20.6667 73.4433V42.0967ZM81.7767 29C84.8434 29 87.3334 31.4867 87.3334 34.5567V36.51L53.9934 59.4933L20.6667 36.7V34.5567C20.6667 31.49 23.1534 29 26.2234 29H81.7767Z"
                  fill="url(#paint0_linear_273_1393)"
                />
                <Circle
                  cx="54"
                  cy="54"
                  r="52"
                  stroke="url(#paint1_linear_273_1393)"
                  strokeWidth="4"
                />
                <Defs>
                  <LinearGradient
                    id="paint0_linear_273_1393"
                    x1="87.3334"
                    y1="54.0533"
                    x2="20.6667"
                    y2="54.0533"
                    gradientUnits="userSpaceOnUse"
                  >
                    <Stop stopColor="#FFDF00" />
                    <Stop offset="0.276042" stopColor="#F6D108" />
                    <Stop offset="0.541667" stopColor="#EDC211" />
                    <Stop offset="0.776042" stopColor="#E3B419" />
                    <Stop offset="1" stopColor="#DAA521" />
                  </LinearGradient>
                  <LinearGradient
                    id="paint1_linear_273_1393"
                    x1="104"
                    y1="54.1066"
                    x2="4"
                    y2="54.1066"
                    gradientUnits="userSpaceOnUse"
                  >
                    <Stop stopColor="#FFDF00" />
                    <Stop offset="0.276042" stopColor="#F6D108" />
                    <Stop offset="0.541667" stopColor="#EDC211" />
                    <Stop offset="0.776042" stopColor="#E3B419" />
                    <Stop offset="1" stopColor="#DAA521" />
                  </LinearGradient>
                </Defs>
              </Svg>
            </View>
            <Text style={styles.header}>Verify your mail</Text>
            <Text style={styles.subheader}>
              A 6 digit OTP code was sent to demi*****@gmail.com. Enter the code
              to complete Sign up process
            </Text>
            <View style={styles.container}>
              <View style={styles.row}>
                {[...Array(6)].map((_, index) => (
                  <TextInput key={index} style={[styles.square]} />
                ))}
              </View>
              <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Verify and Login</Text>
              </Pressable>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 50,
                  marginTop: 10,
                }}
              >
                <Pressable onPress={() => router.push("/")}>
                  <Text style={[styles.text]}>Resend OTP</Text>
                </Pressable>
                <Pressable onPress={() => router.push("/")}>
                  <Text style={[styles.text]}>Change Email</Text>
                </Pressable>
              </View>
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
    marginBottom: 10,
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
export default EmailVerification;
