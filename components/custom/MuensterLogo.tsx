import { Image } from "expo-image";
import { StyleSheet } from "react-native";

export default function MuensterLogo() {
  return (
    <Image
      source={require("@/assets/images/logo_tsg_muenster.png")}
      style={{ position: "absolute", top: "20%", left: "10%", width: "80%", height: "60%", opacity: 0.25}}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.75
  },
});
