import React from "react";
import { RootStackScreenProps } from "../../types";
import { DescriptionTests } from "../../components/DescriptionTests";
import {title, description} from '../../constants/DescriptionChaside'


const DescriptionChasideScreen = ({
  navigation,
}: RootStackScreenProps<"DescriptionChasideScreen">) => {

  const navegacion = () => navigation.navigate("TestChaside");
  return (
    <DescriptionTests
      title={title}
      description={description}
      navigation={navegacion}
    />
  );
};

export default DescriptionChasideScreen;


