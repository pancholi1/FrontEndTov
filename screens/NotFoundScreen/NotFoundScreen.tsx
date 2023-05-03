import { StyleSheet, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { Text, View } from "../../components/Themed";
import { RootStackScreenProps } from "../../types";
import { User } from "../../navigation/redux/store/store";
import { useAppSelector } from "../../navigation/redux/hooks";

export default function NotFoundScreen({
  navigation,
}: RootStackScreenProps<"NotFound">) {
  const user = useAppSelector(User);
  useEffect(() => {
    return user.user
      ? navigation.navigate("HomeScreen")
      : navigation.navigate("MainScreen");
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity
        onPress={() => navigation.replace("BottomTabNavigator")}
        style={styles.link}
      >
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
