import { View } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default Loading;
