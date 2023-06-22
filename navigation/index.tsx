import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import CalendarInterviewScreen from "../screens/CalendarInterviewScreen/CalendarInterviewScreen";
import { Avatar } from "react-native-paper";
import { Image } from "react-native";
import {
  CarrerasChasideScreen,
  CarrerasMMYMGScreen,
  HomeScreen,
  LoginScreen,
  MainScreen,
  NotFoundScreen,
  ProfileScreen,
  ResultTests,
  ResultadosScreen,
  SingUpScreen,
  TerminosScreen,
  Test5Grandes,
  TestChasideScreen,
  TestMMYMG,
} from "../screens";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { User } from "./redux/store/store";
import { auth, database } from "../firebase-config";
import { UserState, setUser } from "./redux/slices/user";
import { collection, getDocs, query, where } from "firebase/firestore";
import Terminos from "../screens/TerminosYCondiciones/TerminosScreen";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(User);
  React.useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, async (authenticatedUser) => {
      if (authenticatedUser && authenticatedUser.email) {
        const q = query(
          collection(database, "people"),
          where("email", "==", authenticatedUser.email)
        );
        const qGet = await getDocs(q);
        const docs = qGet.docs[0];

        qGet.forEach((doc) => {
          dispatch(setUser({ ...doc.data(), key: docs.id } as UserState));
        });
      } else {
        dispatch(setUser(null));
      }
    });

    return unSuscribe();
  }, []);

  return (
    <Stack.Navigator>
      {user && (
        <>
          <Stack.Screen
            name="NotFound"
            component={NotFoundScreen}
            options={{ title: "Oops!" }}
          />
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={{
                title: "Perfil",
                headerTitleAlign: "center",
                headerStyle: { backgroundColor: "#130C34" },
                headerTitleStyle: {
                  color: "white",
                  fontFamily: "Poppins_ExtraBold",
                  fontSize: 20,
                },
                headerTintColor: "#06D6DD",
              }}
            />
            <Stack.Screen
              name="ResultTestScreen"
              component={ResultTests}
              options={{
                title: "Resultado final",
                headerTitleAlign: "center",
                headerStyle: { backgroundColor: "#130C34" },
                headerTitleStyle: {
                  color: "white",
                  fontFamily: "Poppins_ExtraBold",
                  fontSize: 20,
                },
                headerTintColor: "#06D6DD",
              }}
            />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="BottomTabNavigator"
              component={BottomTabNavigator}
            />

            <Stack.Screen
              name="TestChaside"
              component={TestChasideScreen}
              options={{
                title: "Test Chaside",
                headerTitleAlign: "center",
                headerStyle: { backgroundColor: "#130C34" },
                headerTitleStyle: {
                  color: "white",
                  fontFamily: "Poppins_ExtraBold",
                  fontSize: 20,
                },
                headerTintColor: "#06D6DD",
              }}
            />

            <Stack.Screen
              name="TestMMYMG"
              component={TestMMYMG}
              options={{
                title: "Test MM Y MG",
                headerTitleAlign: "center",
                headerStyle: { backgroundColor: "#130C34" },
                headerTitleStyle: {
                  color: "white",
                  fontFamily: "Poppins_ExtraBold",
                  fontSize: 20,
                },
                headerTintColor: "#06D6DD",
              }}
            />

            <Stack.Screen
              name="CarrerasMMYMGScreen"
              component={CarrerasMMYMGScreen}
              options={{
                title: "Carreras MM Y MG",
                headerTitleAlign: "center",
                headerStyle: { backgroundColor: "#130C34" },
                headerTitleStyle: {
                  color: "white",
                  fontFamily: "Poppins_ExtraBold",
                  fontSize: 20,
                },
                headerTintColor: "#06D6DD",
              }}
            />
            <Stack.Screen
              name="Calendar"
              component={CalendarInterviewScreen}
              options={({ navigation }: RootTabScreenProps<"Calendar">) => ({
                title: "Calendario de Entrevista",
                headerLeft: () => (
                  <Pressable
                    onPress={() => navigation.goBack()}
                    style={({ pressed }) => ({
                      opacity: pressed ? 0.5 : 1,
                    })}
                  >
                    <TabBarIcon name="arrow-left" color={"white"} />
                  </Pressable>
                ),
              })}
            />
          </Stack.Group>
          <Stack.Screen
            name="CarrerasChasideScreen"
            component={CarrerasChasideScreen}
            options={{
              title: "Carreras Chaside",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#130C34" },
              headerTitleStyle: {
                color: "white",
                fontFamily: "Poppins_ExtraBold",
                fontSize: 20,
              },
              headerTintColor: "#06D6DD",
            }}
          />

          <Stack.Screen
            name="Terminos"
            component={Terminos}
            options={{
              title: "TyC",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#130C34" },
              headerTitleStyle: {
                color: "white",
                fontFamily: "Poppins_ExtraBold",
                fontSize: 20,
              },
              headerTintColor: "#06D6DD",
            }}
          />
          <Stack.Screen
            name="Test5Grandes"
            component={Test5Grandes}
            options={{
              title: "Resultados Test 5 Grandes",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#130C34" },
              headerTitleStyle: {
                color: "white",
                fontFamily: "Poppins_ExtraBold",
                fontSize: 20,
              },
              headerTintColor: "#06D6DD",
            }}
          />
        </>
      )}
      {!user && (
        <>
          <Stack.Screen
            name="Root"
            component={MainScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SingUp"
            component={SingUpScreen}
            options={{
              title: "Registrate",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#130C34" },
              headerTitleStyle: {
                color: "white",
                fontFamily: "Poppins_ExtraBold",
                fontSize: 20,
              },
              headerTintColor: "#06D6DD",
            }}
          />

          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: "Ingresa",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#130C34" },
              headerTitleStyle: {
                color: "white",
                fontFamily: "Poppins_ExtraBold",
                fontSize: 20,
              },
              headerTintColor: "#06D6DD",
            }}
          />
          <Stack.Screen
            name="Terminos"
            component={Terminos}
            options={{
              title: "TyC",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#130C34" },
              headerTitleStyle: {
                color: "white",
                fontFamily: "Poppins_ExtraBold",
                fontSize: 20,
              },
              headerTintColor: "#06D6DD",
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const { user } = useAppSelector(User);
  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#130C34",
          borderTopWidth: 0,
          paddingTop: 20,
          height: 65,
        },
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation, route }: RootTabScreenProps<"HomeScreen">) => ({
          tabBarLabel: "Inicio",
          tabBarLabelStyle: {
            fontSize: 12, // Tamaño de fuente deseado
            fontFamily: "Poppins_ExtraBold",
            marginTop: 8,
          },
          tabBarIcon: () => (
            <Image source={require("../assets/images/home.png")} />
          ),
          headerTitle: "Inicio",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "white",
            fontFamily: "Poppins_ExtraBold",
            fontSize: 20,
          },
          headerTintColor: "#06D6DD",

          headerStyle: {
            backgroundColor: "#130C34",
          },
          headerRight: () => (
            <View style={styles.containerHeaederRight}>
              <Image
                source={require("../assets/images/HomeScreen/logo.png")}
                style={styles.logoHeaederRight}
              />
              <Pressable
                onPress={() => navigation.navigate("ProfileScreen")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <Avatar.Image
                  style={{ marginTop: 10 }}
                  size={40}
                  source={
                    user?.urlImage
                      ? { uri: user.urlImage }
                      : require("../assets/images/ProfileScreen/addImg.png")
                  }
                />
              </Pressable>
            </View>
          ),
        })}
      />

      <BottomTab.Screen
        name="Resultados"
        component={ResultadosScreen}
        options={({ navigation }: RootTabScreenProps<"Resultados">) => ({
          title: "Resultados",
          tabBarLabel: "Resultados",
          tabBarLabelStyle: {
            fontSize: 12, // Tamaño de fuente deseado
            fontFamily: "Poppins_ExtraBold",
            marginTop: 4,
          },
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#130C34" },
          headerTitleStyle: {
            color: "#ffffff",
            fontFamily: "Poppins_Regular",
            fontSize: 20,
            fontWeight: "700",
          },
          headerTintColor: "#06D6DD",
          tabBarIcon: () => (
            <Image source={require("../assets/images/resultados.png")} />
          ),
          headerRight: () => (
            <View style={styles.containerHeaederRight}>
              <Pressable
                onPress={() => navigation.navigate("ProfileScreen")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <Avatar.Image
                  size={34}
                  source={
                    user?.urlImage
                      ? { uri: user.urlImage }
                      : require("../assets/images/ProfileScreen/addImg.png")
                  }
                />
              </Pressable>
            </View>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return (
    <FontAwesome
      size={23}
      style={{ marginBottom: -3, marginLeft: 6 }}
      className="fa-thin"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  containerHeaederRight: {
    display: "flex",
    flexDirection: "row",
    padding: 9,
  },
  logoHeaederRight: {
    marginRight: 1,
  },
  button: {
    flexDirection: "row",
  },
  text_button: {
    fontSize: 17,
    color: "#06D6DD",
    marginLeft: 5,
  },
});
