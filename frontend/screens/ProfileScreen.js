import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Profile</Text>

      <Text>Name: Varsha N</Text>
      <Text>USN: 1SV22CS001</Text>
      <Text>Department: Computer Science</Text>
      <Text>Semester: 5</Text>
      <Text>Section: A</Text>
      <Text>Library ID: LIB1001</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
});