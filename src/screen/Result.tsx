import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; 
import { useRoute } from '@react-navigation/native';

type ResultProps = NativeStackScreenProps<RootStackParamList, 'Result'>;
const Result = ({navigation}:ResultProps) => {
  
  const [result, setResult] = useState('');
  const route = useRoute();
  const { height, weight } = route.params as {
    height: number;
    weight: number;
  };
  const bmicalculation=(weight:number,height:number) => {
    let convert= height/100;
    let  BMI = (weight) / (convert * convert) 
    console.log(BMI);
    
    return BMI;
   }
   const getBmiResult = (bmi: number) => {
    if (bmi  >= 25) {
      return "OverWeight";
     } else if (bmi  >= 18.5) {
      return "Normal";
    } else { 
       return 'UnderWeight';
  } 
  }

   const getBmiCategory = (bmi: number) => {
    if (bmi  >= 25) {
      return "You have a higher than normal body weight. Try to exercise more.\n 💪🚵🚴🏊🏇🏃'";
     } else if (bmi  >= 18.5) {
      return "You have a normal body weight. Good job!\n 🍇🍉🍍🍒🌽";
    } else { 
       return 'You have a lower than normal body weight. You can eat a bit more.\n 🍲🍱🍳🍗🍒🍎';
  } 
  }


   useEffect(() => {
    const calculatedResult = bmicalculation(weight,height);
    setResult(calculatedResult.toFixed(2));
  }, []);
  const bmiCategory = getBmiCategory(parseFloat(result));
  const bmiResult= getBmiResult(parseFloat(result));

 
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>Your Result</Text>
      <View style={styles.resultcontainer}>
      <Text style={styles.title}>{bmiResult}</Text>
      <Text style={styles.subtitle}>{result}</Text>
      <Text style={styles.interpretation}>{bmiCategory}</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}
        onPress={()=>navigation.replace('Calculations')}
        
        >
          <Text style={styles.buttonText}>Recalculate</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    textstyle:{
      color:'white',
      fontSize:40,
      textAlign:'center',
      marginTop:30

    },
    resultcontainer:{
      backgroundColor:'#333945',
      borderRadius:10,
      margin:20,
      marginTop:40,
      height:450
  },
  title:{
    color:'#45CE30',
    fontSize:30,
    textAlign:'center',
    marginTop:40

  },
  subtitle:{
    color:'white',
    fontSize:80,
    textAlign:'center',
    marginTop:30

  },
  interpretation:{
    color:'white',
    fontSize:20,
    textAlign:'center',
    marginTop:30

  },
  bottom: {
    flex: 1,
    marginTop:10,
    justifyContent: 'flex-end',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#E30B5C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize:20,
    color: 'white',
  },
  
  })