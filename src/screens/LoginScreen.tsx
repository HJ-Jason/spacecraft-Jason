import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Colors, Headline, TextInput } from 'react-native-paper';
import { black, blueA100, white } from 'react-native-paper/lib/typescript/styles/colors';


export const LoginScreen = () => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Headline style={styles.headline}>Welcome to STARPORT</Headline>
      </View>
      <View style={styles.body}>
        <TextInput placeholder='Email' placeholderTextColor="black" style={styles.input}
          autoComplete={true}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput placeholder='Password' placeholderTextColor="black" style={styles.input}
          autoComplete={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Button uppercase={false} labelStyle={styles.btntext} style={styles.loginbtn}>Login</Button>
        <Text style={styles.text}>Read conditions and Tearms</Text>

      </View>  
    </View>

    
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    marginBottom: "10%",
    marginLeft: "5%",
    marginRight: "5%",
    flex: 1,
  },
  body: {
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    flex: 2,
  },
  title:{
    padding: 50,
    backgroundColor: "#7950f2",
    borderWidth: 2,
  },
  headline: {
    color: "white",
    textAlign: 'center'
  },
  input: {
    marginTop: 20,
    width: "70%",
    backgroundColor:"white",
    borderWidth: 2,
    color: "black",
    textAlign: "center",
  },
  loginbtn: {
    marginTop: 20,
    width: "70%",
    backgroundColor: "#7950f2",
    borderWidth: 2,
    borderColor: "black"
  },
  btntext: {
    color: "white"
  },
  text: {
    paddingTop:"30%",
    color: "gray",
    fontSize: 22,
  }
  
});