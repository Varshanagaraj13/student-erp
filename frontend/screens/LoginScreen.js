import React, { useState } from "react";

import {

View,
Text,
TextInput,
TouchableOpacity,
StyleSheet,
Alert

} from "react-native";

import api from "../services/api";

export default function LoginScreen({ navigation }) {

const [username,setUsername]=useState("");

const [password,setPassword]=useState("");

const login = async () => {
  try {
    console.log("Login button clicked");

    console.log("Username:", username);
    console.log("Password:", password);

    const response = await api.post("/auth/login", {
      username,
      password,
    });

    console.log("Backend Response:", response.data);

    Alert.alert("Login Successful");

    navigation.navigate("Dashboard", {
      studentId: response.data.id,
    });

  } catch (error) {
    console.log("ERROR:", error);

    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Data:", error.response.data);
    }

    Alert.alert("Login Failed");
  }
};

return(

<View style={styles.container}>

<Text style={styles.title}>

Student ERP

</Text>

<TextInput

placeholder="Username"

style={styles.input}

value={username}

onChangeText={setUsername}

/>

<TextInput

placeholder="Password"

secureTextEntry

style={styles.input}

value={password}

onChangeText={setPassword}

/>

<TouchableOpacity

style={styles.button}

onPress={login}

>

<Text style={styles.buttonText}>

Login

</Text>

</TouchableOpacity>

</View>

);

}

const styles=StyleSheet.create({

container:{

flex:1,

justifyContent:"center",

padding:20

},

title:{

fontSize:30,

fontWeight:"bold",

textAlign:"center",

marginBottom:40

},

input:{

borderWidth:1,

borderColor:"#ccc",

padding:12,

borderRadius:8,

marginBottom:20

},

button:{

backgroundColor:"#2563eb",

padding:15,

borderRadius:8

},

buttonText:{

color:"white",

textAlign:"center",

fontWeight:"bold"

}

});