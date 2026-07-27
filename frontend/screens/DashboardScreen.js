import React from "react";

import {

View,
Text,
TouchableOpacity,
StyleSheet

} from "react-native";

export default function DashboardScreen({ navigation, route }) {

const { studentId } = route.params;

return (

<View style={styles.container}>

<Text style={styles.title}>

Welcome Student

</Text>

<TouchableOpacity

style={styles.button}

onPress={() =>

navigation.navigate("Profile",{

studentId

})

}

>

<Text style={styles.text}>

View Profile

</Text>

</TouchableOpacity>

<TouchableOpacity

style={styles.button}

onPress={() =>

navigation.navigate("Attendance",{

studentId

})

}

>

<Text style={styles.text}>

View Attendance

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

marginBottom:30,

textAlign:"center"

},

button:{

backgroundColor:"#2563eb",

padding:15,

marginBottom:20,

borderRadius:10

},

text:{

textAlign:"center",

color:"white",

fontWeight:"bold"

}

});