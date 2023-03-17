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
import PlanesScreen from "../screens/PlanesScreen/PlanesScreen";
import CalendarInterviewScreen from "../screens/CalendarInterviewScreen/CalendarInterviewScreen";
import { Avatar } from "react-native-paper";
import { Image } from "react-native";
import {
  HomeScreen,
  LoginScreen,
  MainScreen,
  NotFoundScreen,
  PersonalityScreen,
  ProfileScreen,
  ResultadosScreen,
  ResultTestScreen,
  SingUpScreen,
} from "../screens";
import Login from "../screens/Login";
import Personality from "../screens/PersonalityScreen/Personality";
import CarrerasScreen from "../screens/CarrerasScreen/CarrerasScreen";
import SurveyScreen from "../screens/TestsScreen/SurveyScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
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
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login",
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
        <Stack.Screen name="ResultTestScreen" component={ResultTestScreen} />
        <Stack.Screen name="Resultados" component={ResultadosScreen} />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />


        <Stack.Screen
          name="Personality"
          component={Personality}
          options={{
            title: "Test de Personalidad",
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
             name="SurveyScreen"
             component={SurveyScreen}
             options={{
               title: "Test",
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
        <Stack.Screen
          name="SingUp"
          component={SingUpScreen}
          options={({ navigation }: RootTabScreenProps<"SingUp">) => ({
            title: "",

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
      name='CarrerasScreen'
      component={CarrerasScreen}
      options={{
        title: "Carreras",
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
          headerTitle: "",
          tabBarIcon: () => (
            <Image source={require("../assets/images/home.png")} />
          ),
          headerStyle: {
            backgroundColor: "#130C34",
          },
          headerRight: () => (
            <View style={styles.containerHeaederRight}>
              <Image
                source={require("../assets/images/ISO.png")}
                style={styles.logoHeaederRight}
              />
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
      <BottomTab.Screen
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
      />



      <BottomTab.Screen
        name="Resultados"
        component={ResultadosScreen}
        options={({ navigation }: RootTabScreenProps<"Resultados">) => ({
          title: "Resultados",
          tabBarLabel: "Resultados",

          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#130C34" },
          headerTitleStyle: {
            color: "white",
            fontFamily: "Poppins_ExtraBold",
            fontSize: 20,
          },
          headerTintColor: "#06D6DD",
          tabBarIcon: () => (
            <Image source={require("../assets/images/resultados.png")} />
          ),
          headerRight: () => (
            <View style={styles.containerHeaederRight}>
              {/* <Image
                source={require("../assets/images/ISO.png")}
                style={styles.logoHeaederRight}
              /> */}
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
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

const styles = StyleSheet.create({
  containerHeaederRight: {
    display: "flex",
    flexDirection: "row",
    padding: 9,
  },
  logoHeaederRight: {
    marginRight: 15,
  },
});
