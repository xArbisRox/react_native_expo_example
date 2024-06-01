import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Background() {
  return (
    <LinearGradient
      colors={["rgba(0,91,167,1)", "#ffffff", "rgba(0,91,167,1)"]}
      style={styles.background}
    />
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});
