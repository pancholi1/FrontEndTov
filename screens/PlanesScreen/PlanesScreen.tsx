import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PlanesCard from "../../components/PlanesCard";
import Carousel from "react-native-anchor-carousel";
const { width: windowWidth } = Dimensions.get("window");
const PlanesScreen = () => {
  const carouselRef = React.useRef(null);
  const renderItem = ({ item, index }) => {
    return (
      <PlanesCard
        headerText={"Seguro de terceros"}
        pricePerMonth={"$15.000"}
        totalPrice={"$1.200.500"}
      />
    );
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Carousel
          ref={carouselRef}
          data={Array(3).fill(0)}
          renderItem={renderItem}
          style={styles.carousel}
          itemWidth={windowWidth * 0.8}
          containerWidth={windowWidth}
          separatorWidth={0}
        />
      </View>
    </ScrollView>
  );
};

export default PlanesScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "black",
  },
  carousel: {
    flexGrow: 0,
    height: "100%",
  },
});
