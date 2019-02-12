import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
   constructor (){
     super()
     this.state= {
       bgColor : true
     }

   }

   onepress=()=>{

    this.setState({bgColor: true})
    console.warn(this.state.bgColor)
   }

   twopress=()=>{

    this.setState({bgColor: false})
    console.warn(this.state.bgColor)
   }
  
   render() {
     const {bgColor}=this.state
      return (
         <View style = {styles.container}>
           
           
           <View>
           
            <TouchableOpacity style={bgColor ? styles.touch: styles.untouch}
              onPress= {this.onepress}
              >
              <Text style={styles.text}>
                true
              </Text>
            </TouchableOpacity>

            </View>
            
            <View>
            <TouchableOpacity 
                          onPress= {this.twopress}
            style={!bgColor ? styles.touch: styles.untouch}>
              <Text style={styles.text}>
                false
              </Text>
            </TouchableOpacity>
            </View>
            
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection : 'row',
      justifyContent : 'space-around'
   },
   text : {
     fontSize : 40,
     color : '#fff'
   },
   touch : {
     backgroundColor : 'blue',
     
   },
   untouch : {
    backgroundColor : 'red',
    
  },
});