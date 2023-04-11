import React from "react";
import { RootStackScreenProps } from "../../types";
import { DescriptionTests } from "../../components/DescriptionTests";
import { description, title } from "../../constants/DescriptionMMYMG";

const DescriptionMMYMGScreen = ({
  navigation,
}: RootStackScreenProps<"DescriptionMMYMGScreen">) => {

  const navegacion = () => navigation.navigate("TestMMYMG");

  return (

    <DescriptionTests
    title={title}
    description={description}
    navigation={navegacion}
    />
  );
};

export default DescriptionMMYMGScreen;

