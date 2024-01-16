import { StyleSheet, View } from "react-native";
import Register from "./Pages/Register";

export default function Page() {
  return (
    <View style={styles.container}>
      <Register />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B0E0E6",
    padding: 15,
  },
});
