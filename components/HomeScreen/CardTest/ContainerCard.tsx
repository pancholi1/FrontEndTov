import React from "react";
import CardWithOutTest from "./CardWithOutTest";
import CardWithTest from "./CardWithTest";
export interface PropsCard {
  image: any;
  title: string;
  description: string;
  selected?: boolean;
  route: "TestMMYMG" | "Test5Grandes" | "TestChaside" | "ResultTestScreen";
}
const ContainerCard = ({
  image,
  title,
  description,
  route,
  selected,
}: PropsCard) => {
  return selected ? (
    <CardWithTest
      image={image}
      title={title}
      route={route}
      description={description}
    ></CardWithTest>
  ) : (
    <CardWithOutTest
      image={image}
      title={title}
      description={description}
      route={route}
    ></CardWithOutTest>
  );
};

export default ContainerCard;
