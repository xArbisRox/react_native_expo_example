import styles from "@/components/custom/Style";
import Background from "@/components/custom/Gradient";
import { View } from "react-native";
import MuensterLogo from "@/components/custom/MuensterLogo";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Background />
      <MuensterLogo />
    </View>
  );
}
