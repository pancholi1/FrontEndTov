import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 


export const Psicotecnico = () => {
  return (
    <View style={styles.container}>
        <Pressable style={styles.button}>   
            <Image source={require("../assets/images/favicon.png")} style={styles.img_principal}/>
            <Text style={styles.text_button}>Test Personalidad</Text>
            <AntDesign name="right" size={24} color="white"  style={styles.img_flecha}/>
            {/* <Image source={require("../assets/images/Psicotecnico/flecha.png")}
              style={styles.img_flecha}/> */}
        </Pressable>

        <Pressable style={styles.button}>  
            <Image source={require("../assets/images/favicon.png")} style={styles.img_principal}/>
            <Text style={styles.text_button}>Test Psicotecnico</Text>
            <AntDesign name="right" size={24} color="white"  style={styles.img_flecha}/>
            {/* <Image source={require("../assets/images/Psicotecnico/flecha.png")}
              style={styles.img_flecha}/> */}
        </Pressable> 

        <Pressable style={styles.button}>   
            <Image source={require("../assets/images/favicon.png")} style={styles.img_principal}/>
            <Text style={styles.text_button}>Entrevista</Text>
            <AntDesign name="right" size={24} color="white" style={styles.img_flecha} />
            {/* <Image source={require("../assets/images/Psicotecnico/flecha.png")}
              style={styles.img_flecha}/> */}
        </Pressable>
        
        <Pressable style={styles.button}>
            <Image source={require("../assets/images/favicon.png")} style={styles.img_principal}/>
            <Text style={styles.text_button}>Resultado Final </Text>
            <AntDesign name="right" size={24} color="white" style={styles.img_flecha} />
            {/* <Image source={require("../assets/images/Psicotecnico/flecha.png")}
              style={styles.img_flecha}/> */}
        </Pressable>
    </View>
  )
};
<AntDesign name="right" size={24} color="black" />




const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
        alignItems:"center",
    },
    button:{
        display:"flex",
        flexDirection:"row",
        width:"90%",
        backgroundColor:"#333333",
        borderRadius:15,
        padding:15,
        marginTop:"5%",
        alignItems:"center"
    },
    text_button:{
        color:"white",
        fontWeight:"500",
        fontSize:15,
        width:"55%",
    },
    img_flecha:{
        width:"10%",
        marginLeft:"10%",
        height:30,
        borderRadius:10,
    },
    img_principal:{
        width:"15%",
        marginRight:"10%",
        borderRadius:10,
        backgroundColor:"#333333",
        color:"#333333",
        height:50
    }
});