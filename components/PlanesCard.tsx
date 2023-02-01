import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

interface IPlanesCard {
  headerText: string;
  pricePerMonth: string;
  totalPrice: string;
}
const PlanesCard: React.FC<IPlanesCard> = ({
  headerText,
  pricePerMonth,
  totalPrice,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <View style={styles.cardHeader}>
            <Text style={styles.headerText}>{headerText}</Text>
          </View>

          <View style={styles.provinciaSeguros}>
            <View style={styles.imgProvincia}></View>
            <Text style={styles.provinciaText}>Provincia seguros</Text>
          </View>
          <View style={styles.tarifaPorMes}>
            <Text style={styles.tarifaText}>Pagas por mes:</Text>
          </View>
          <View style={styles.tarifaPrecio}>
            <Text style={styles.precioText}>{pricePerMonth}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.containerAseguramos}>
            <Text style={styles.seguroText}>Te lo aseguramos a</Text>
            <Text style={styles.seguroPrecioText}>{totalPrice}</Text>
          </View>
          <View style={styles.containerContratar}>
            <Pressable style={styles.buttonContratar} onPress={() => {}}>
              <Text style={styles.textContratar}>Contratar online</Text>
            </Pressable>
          </View>
          <View style={styles.containerDetalle}>
            <Pressable style={styles.buttonDetalle} onPress={() => {}}>
              <Text style={styles.textDetalle}>Ver detalle</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlanesCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "90%",
    borderRadius: 25,
    borderColor: "grey",
    borderWidth: 2,
    marginBottom: 15
  },
  card: {
    flex: 0,
  },
  cardHeader: {
    width: "100%",
    paddingVertical: 9,
    paddingHorizontal: 7,
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#3F3937",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  headerText: {
    fontSize: 24,
    color: "white",
  },
  cardBody: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },

  provinciaSeguros: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  imgProvincia: {
    height: 50,
    width: 50,
    backgroundColor: "grey",
  },
  provinciaText: {
    fontSize: 24,
    paddingLeft: 20,
    width: 120,
  },
  tarifaPorMes: {
    alignItems: "center",
    paddingTop: 45,
    fontSize: 54,
  },
  tarifaText: {
    fontSize: 30,
  },
  tarifaPrecio: {
    alignItems: "center",
    paddingBottom: 25,
  },
  precioText: {
    fontSize: 50,
    fontWeight: "bold",
  },
  separator: {
    borderBottomColor: "grey",
    width: "90%",
    borderBottomWidth: 1,
  },
  containerAseguramos: {
    display: "flex",
    alignItems: "center",
    padding: 25,
  },
  seguroText: {
    fontSize: 24,
  },
  seguroPrecioText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  containerContratar: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
  },

  containerDetalle: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 25,
    borderRadius: 10,
  },
  textContratar: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 25,
    color: "white",
    textAlign: "center",
  },
  textDetalle: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 25,
    color: "grey",
    textAlign: "center",
  },
  buttonContratar: {
    borderRadius: 10,
    backgroundColor: "grey",
    width: 300,
  },
  buttonDetalle: {
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 1,
    width: 300,
  },
});
