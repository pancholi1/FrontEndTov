import React from "react";
import { RootStackScreenProps } from "../../types";
import { DescriptionTests } from "../../components/DescriptionTests";
import { description, title } from "../../constants/Description5Grandes";

const Description5GrandesScreen = ({
  navigation,
}: RootStackScreenProps<"Description5GrandesScreen">) => {

  const navegacion = () => navigation.navigate("Test5Grandes");

  return (
    <DescriptionTests
    title={title}
    description={description}
    navigation={navegacion}
    />
  );
};


export default Description5GrandesScreen;
