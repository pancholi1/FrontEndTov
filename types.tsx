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
  CarrerasChasideScreen: { habilidad: string; intereses: string; area: string };
  TestChaside: undefined;
  TestMMYMG: undefined;
  DescriptionMMYMGScreen: undefined;
  CarrerasMMYMGScreen: { areaUno: string; areaDos: string; prop: string };
  Test5Grandes: undefined;
  Description5GrandesScreen: undefined;
  QuestionTest: undefined;
  DescriptionTests: undefined;
  Terms: undefined;
  TermsAndConditions: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  ResultTestScreen: undefined;
  HomeScreen: undefined;
  ProfileScreen: undefined;
  BottomTabNavigator: undefined;
  SingUp: undefined;
  Resultados: undefined;
  Planes: undefined;
  MainScreen: undefined;
  Login: undefined;
  Calendar: undefined;
  TarjetaTest: undefined;
  CarrerasChasideScreen: { habilidad: string; intereses: string; area: string };
  TestChaside: undefined;
  TestMMYMG: undefined;
  DescriptionMMYMGScreen: undefined;
  CarrerasMMYMGScreen: { areaUno: string; areaDos: string; prop: string };
  Test5Grandes: undefined;
  Description5GrandesScreen: undefined;
  QuestionTest: undefined;
  DescriptionTests: undefined;
  Terms: undefined;
  TermsAndConditions: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
