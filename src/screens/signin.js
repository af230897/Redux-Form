import React, { Component } from 'react';
import SwitchExample from '../MyFirst/src/components/switch_example'
import { Text,
         View , 
         StyleSheet ,
        TouchableOpacity,
        Button,
        TextInput,
        ScrollView,
        Image
              } from 'react-native';

export default class HelloWorldApp extends Component {

    constructor() {
        super();
        this.state = {
           switch1Value: false,
        }
     }
     toggleSwitch1 = (value) => {
        this.setState({switch1Value: value})
        console.log('Switch 1 is: ' + value)
     }
  
  render() {
    return (
    <ScrollView>
          <View style={styles.container}>


                  

                  <View style={{  width : 420 , }}>
            <TouchableOpacity style={{flexDirection : 'row', paddingTop : 5}}>
               <Image  source={require('./src/assets/image/la.png') }
                style={{height : 40 , width : 40, paddingLeft : 10}}/>
               <Text style={{fontSize : 30 , color : 'blue'}}>Back</Text>
            </TouchableOpacity>
         </View>
                  
      
                      <View style={styles.touch}>
                          <TouchableOpacity style={[styles.welcome,{borderTopLeftRadius : 10,
                            borderBottomLeftRadius : 10,
                            paddingHorizontal : 40,
                            paddingVertical : 2,
                            
                            
                            }]} > 
                            <Text style={styles.texts}>SIGN-IN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.welcome,{borderTopRightRadius : 10,
                          borderBottomRightRadius : 10,
                          paddingHorizontal : 40,
                          paddingVertical : 2,

                          }]} > 
                            <Text style={styles.texts}>SIGN-UP</Text>
                        </TouchableOpacity>
                      </View>

                      <View style={{
                        marginTop : 70
                      }}>
                        <TextInput style={styles.TextInput} 
                        placeholder="Enter username or E-mail "/>
                      
                        <TextInput style={styles.TextInput} 
                        placeholder="password"/>

                      </View>


                      
                      <View style={{flexDirection : 'row',
                      justifyContent : 'flex-end',
                      alignItems : 'center',
                      width : '75%'
                      }}>
                        <View>
                        <Text style={{fontSize : 23}}>  save password</Text>
                        </View>
                      <View>
            
            <SwitchExample
            toggleSwitch1 = {this.toggleSwitch1}
            switch1Value = {this.state.switch1Value}/>
         </View>
         </View>
                        
                        
                          


                        <View style={{flexDirection : 'row',
              justifyContent : 'space-between',
              width : '60%',
              marginTop : 100
                       }}>
        
        
        <View>
        <TouchableOpacity style={[styles.welcome,
          {borderRadius : 10,
          
          }]} > 
                          <Text style={{fontSize : 25}}>Cancel</Text>
                      </TouchableOpacity>
          </View>
          <View>
        <TouchableOpacity style={[styles.welcome,
          {borderRadius : 10,
          
          }]} >
                          <Text style={{fontSize : 25}}>Login</Text>
                      </TouchableOpacity>
          </View>
             </View>
        
    </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent : 'center',
    alignItems :'center',
  },
  welcome: {
   backgroundColor : '#ddd',
   borderColor : 'blue',
    borderWidth : 2, 
    padding : 15,
    
  },
  touch:{
     flexDirection : 'row',
     backgroundColor : '#fff',
     
    marginTop:60,
    borderColor : 'red'
    
  },
  TextInput:{margin : 10,
    height :50,
    width : 300,
    backgroundColor : '#eee',
    fontSize : 20,
    paddingLeft : 10,
  },

  texts: {
    fontSize: 30,
     marginTop:5,
     color: '#777' 
  }
});
