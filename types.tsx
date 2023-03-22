/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  ProfileScreen: undefined;
  NotFound: undefined;
  HomeScreen: undefined;
  Personality: undefined;
  BottomTabNavigator: undefined;
  SingUp: undefined;
  Resultados: undefined;
  Planes: undefined;
  MainScreen: undefined;
  Login: undefined;
  Calendar: undefined;
  ResultTestScreen: undefined;
  Test: undefined;
  TarjetaTest: undefined;
  CarrerasScreen: {habilidad: string, intereses:string, area:string};
  SurveyScreen: undefined;
  TestMMYMG: undefined;
  TestMMYMGScreen: undefined;
  CarrerasTest2: {areaUno: string, areaDos: string, prop:string};
  Test5Grandes: undefined;
  Test5GrandesScreen: undefined;
  QuestionTest:undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  ResultTestScreen: undefined;
  HomeScreen: undefined;
  Personality: undefined;
  ProfileScreen: undefined;
  BottomTabNavigator: undefined;
  SingUp: undefined;
  Resultados: undefined;
  Planes: undefined;
  MainScreen: undefined;
  Login: undefined;
  Calendar: undefined;
  TarjetaTest: undefined;
  CarrerasScreen: {habilidad: string, intereses:string, area:string};
  SurveyScreen: undefined;
  TestMMYMG: undefined;
  TestMMYMGScreen: undefined;
  CarrerasTest2: {areaUno: string, areaDos: string, prop:string};
  Test5Grandes: undefined,
  Test5GrandesScreen: undefined,
  QuestionTest:undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
