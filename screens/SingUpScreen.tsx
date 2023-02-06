import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const SingUpScreen = () => {

    const [input, setInput] = React.useState({
      name:"",
      apellido:"",
      email:"",
      password:"",
      school:""
    });

    const sendInfo = (changeApellido) => {
      console.log(changeApellido)
    }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container_panel}>
        <Text style={styles.title}>Registrate</Text>
        <View style={styles.container_input_name}>
          <Text style={styles.text_input_name}>Nombre</Text>
          <TextInput
          style={styles.input_nombre}
          placeholder="Nombre Completo"
          placeholderTextColor="white"
          onChangeText={(value) => {setInput({...input, name:value})}}
        />
        </View>

        <View style={styles.container_input_name}>
          <Text style={styles.text_input_name}>Apellido</Text>
          <TextInput
          placeholder="Apellido"
          style={styles.input_nombre}
          placeholderTextColor="white"
          onChangeText={(value) => {setInput({...input, apellido:value})}}
        />
        </View>

        <View style={styles.container_input_name}>
          <Text style={styles.text_input_name}>Correo Electronico</Text>
          <TextInput
          placeholder="Correo Electronico"
          style={styles.input_nombre}
          keyboardType="email-address"
          placeholderTextColor="white"
          onChangeText={(value) => {setInput({...input, email:value})}}
        />
        </View>

        <View style={styles.container_input_name}>
          <Text style={styles.text_input_name}>Contraseña</Text>
          <TextInput
          placeholder="Contraseña"
          secureTextEntry={true}
          style={styles.input_nombre}
          placeholderTextColor="white"
          onChangeText={(value) => {setInput({...input, password:value})}}
        />
        </View>
        
        <View style={styles.container_input_name}>
          <Text style={styles.text_input_name}>Fecha de Nacimiento</Text>
          <TextInput
          keyboardType="numeric"
          style={styles.input_nombre}
        />
        </View>

        <View style={styles.container_input_name}>
          <Text style={styles.text_input_name}>Escuela</Text>
          <TextInput
          placeholder="Escuela"
          style={styles.input_nombre}
          placeholderTextColor="white"
          onChangeText={(value) => {setInput({...input, school:value})}}
        />
        </View>

          <Pressable 
          onPress={(changeApellido) => sendInfo(changeApellido)}
          style={styles.button_signup}>
            <Text style={styles.text_button}>Registrate</Text>
          </Pressable>

          <Text style={styles.text_bottom}>Ya está registrado?</Text>


      </ScrollView>
    </View>
  );
};

export default SingUpScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "black",
    alignItems: "center",
    flexDirection:"column",
  },
  container_panel:{
    width:"95%",
    height:"95%",
    backgroundColor:"black",
    marginTop: 20,
    borderRadius:20,
  },
  title:{
    fontWeight: "700",
    fontSize: 30,
    backgroundColor:"black",
    marginTop:15,
    marginLeft:"29%",
    color:"white",
   },
   container_input_name:{
    width:"90%",
    marginTop:"3%",
    marginLeft:"5%"
   },
   text_input_name:{
    fontWeight:"600",
    fontSize:20,
    marginBottom:10,
    color:"white",
   },
   input_nombre:{
    borderColor: "#edebeb",
    borderWidth: 2,
    borderRadius: 10,
    padding:10,
   },
   button_signup:{
    backgroundColor:"#F5F5F9",
    margin:10,
    padding:10,
    borderRadius:10,
    width:"90%",
    marginLeft:"5%"
   },
   text_button:{
    fontWeight:"500",
    fontSize:15,
    textAlign:"center"
   },
   text_bottom:{
    width:"90%",
    fontSize: 14,
    color: "blue",
    fontWeight: "bold",
    marginLeft:"5%",
    marginTop:"3%",
    marginBottom:"5%"
  
   },

});
