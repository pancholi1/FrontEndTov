/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, View, StyleSheet } from "react-native";

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
  Description5GrandesScreen,
  DescriptionChasideScreen,
  DescriptionMMYMGScreen,
  HomeScreen,
  LoginScreen,
  MainScreen,
  NotFoundScreen,
  ProfileScreen,
  ResultadosScreen,
  ResultTestScreen,
  SingUpScreen,
  Terms,
  Test5Grandes,
  TestChasideScreen,
  TestMMYMG,
} from "../screens";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { User } from "./redux/store/store";
import { auth } from "../firebase-config";
import { setUser } from "./redux/slices/user";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const [loading, setLoading] = React.useState(true);
  const dispatch = useAppDispatch();
  const user = useAppSelector(User);

  React.useEffect(() => {
    console.log("!");
    const unSuscribe = onAuthStateChanged(auth, async (authenticatedUser) => {
      authenticatedUser
        ? dispatch(setUser({ email: authenticatedUser.email }))
        : dispatch(setUser(null));
      setLoading(false);
    });

    return unSuscribe();
  }, []);
  console.log(user.user);

  return (
    <Stack.Navigator>
      {user.user && (
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
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
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
              name="ResultTestScreen"
              component={ResultTestScreen}
            />
            <Stack.Screen name="Resultados" component={ResultadosScreen} />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="BottomTabNavigator"
              component={BottomTabNavigator}
            />

            <Stack.Screen
              name="DescriptionChasideScreen"
              component={DescriptionChasideScreen}
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
              name="DescriptionMMYMGScreen"
              component={DescriptionMMYMGScreen}
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
          <Stack.Screen
            name="Description5GrandesScreen"
            component={Description5GrandesScreen}
            options={{
              title: "Test 5 Grandes",
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
            name="Terms"
            component={Terms}
            options={({ navigation }: RootTabScreenProps<"Terms">) => ({
              title: "T&C",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#130C34" },
              headerTitleStyle: {
                fontFamily: "Poppins_Regular",
                color: "#06D6DD",
                fontSize: 20,
              },

              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}></Pressable>
              ),
            })}
          />
        </>
      )}
      {!user.user && (
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
  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#130C34",
          borderTopWidth: 0,
        },
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"HomeScreen">) => ({
          tabBarLabel: "Inicio",
          headerTitle: "Inicio",
          headerTitleAlign: "center",

          headerTitleStyle: {
            color: "white",
            fontFamily: "Poppins_ExtraBold",
            fontSize: 20,
          },
          headerTintColor: "#06D6DD",

          // headerLeft: () => (
          //   <Pressable
          //     onPress={() => navigation.goBack()}
          //     style={styles.button}
          //   >

          //     <TabBarIcon  name="chevron-left" color={'#06D6DD'} />
          //     <Text style ={styles.text_button}>Back</Text>
          //   </Pressable>
          // ),

          tabBarIcon: () => (
            <Image source={require("../assets/images/home.png")} />
          ),
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
                  source={require("../assets/images/pancho.jpeg")}
                />
              </Pressable>
            </View>
          ),
        })}
      />
      {/* <BottomTab.Screen
        name="Planes"
        component={PlanesScreen}
        options={({ navigation }: RootTabScreenProps<"Planes">) => ({
          title: "Planes",

          tabBarIcon: () => (
            <Image source={require("../assets/images/planes.png")} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("ProfileScreen")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Avatar.Image
                size={24}
                source={require("../assets/images/pancho.jpeg")}
              />
            </Pressable>
          ),
        })}
      /> */}

      <BottomTab.Screen
        name="Resultados"
        component={ResultadosScreen}
        options={({ navigation }: RootTabScreenProps<"Resultados">) => ({
          title: "Resultados",
          tabBarLabel: "Resultados",

          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#130C34" },
          headerTitleStyle: {
            color: "#06D6DD",
            fontFamily: "Poppins_Regular",
            fontSize: 20,
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
                  source={require("../assets/images/pancho.jpeg")}
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
