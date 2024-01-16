import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Register from "./Pages/Register";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false}
        barStyle="dark-content"
        backgroundColor={"#B0E0E6"}
      />
      <Register />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B0E0E6",
    padding: 15,
  },
});
