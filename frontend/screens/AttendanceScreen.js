import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AttendanceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance</Text>

      <Text>DBMS - 92%</Text>
      <Text>Operating Systems - 88%</Text>
      <Text>Computer Networks - 85%</Text>
      <Text>Machine Learning - 90%</Text>
      <Text>Cloud Computing - 82%</Text>
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