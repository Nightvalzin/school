import React from "react";
import {Text, View} from "react-native";

function Details() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text>This is the Details screen</Text>
      </View>

      <View style={styles.container2}>
        
      </View>

      <View style={styles.container3}>
        
      </View>

      <View style={styles.container4}>
        
      </View>
      
    </View>
    
  ) 
}

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    backgroundColor: "purple",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    backgroundColor: "black",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  container3: {
    backgroundColor: "green",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  container4: {
    backgroundColor: "orange",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
  },
  textTitle: {
    color: "purple",
    fontSize: 25,
    fontWeight: "700",
  },
});