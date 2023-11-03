import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type CalculationProps = NativeStackScreenProps<RootStackParamList, 'Calculations'>;

const { width, height: screenHeight } = Dimensions.get('window');
const Calculations = ({ navigation }: CalculationProps) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [height, setHeight] = useState(100);
  const [weight, setWeight] = useState(60);
  const [age, setAge] = useState(28);

  const handleGenderSelection = (gender: string) => {
    setSelectedGender(gender);
  };

  const onSliderValueChange = (value: number) => {
    setHeight(Math.round(value));
  };

  const { width, height: screenHeight } = Dimensions.get('window');

  const fontSize = Math.min(width, screenHeight) * 0.04;
  return (
    <ScrollView>
      
      <View style={[styles.container, { backgroundColor: 'black' }]}>
        <View style={styles.genderview}>
          <View
            style={
              selectedGender === 'Male' ? styles.selectedgenderstyle : styles.genderstyle
            }
          >
            <TouchableOpacity onPress={() => handleGenderSelection('Male')}>
              <Icon name="mars" size={50} color="white" />
              <Text style={[styles.textstyle,]}>Male</Text>
            </TouchableOpacity>
          </View>
          <View
            style={
              selectedGender === 'Female' ? styles.selectedgenderstyle : styles.genderstyle
            }
          >
            <TouchableOpacity onPress={() => handleGenderSelection('Female')}>
              <Icon style={[styles.iconstyle ]} name="venus" size={50} color="white" />
              <Text style={[styles.textstyle,]}>Female</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.heightcontainer}>
          <Text style={[styles.heightstyle,]}>Height</Text>
          <View style={styles.heightvcontainer}>
            <Text style={[styles.heighttextstyle,]}>{height}</Text>
            <Text style={[styles.heightvtextstyle, ]}>cm</Text>
          </View>
          <Slider
            style={{ width: width * 0.75, height: 70 }}
            minimumValue={0}
            maximumValue={200}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#FFFFFF"
            onValueChange={onSliderValueChange}
            thumbTintColor="#E30B5C"
          />
        </View>

        <View style={styles.weightview}>
          <View style={styles.weightstyle}>
            <Text style={[styles.textweight, ]}>Weight</Text>
            <Text style={[styles.valueweight,]}>{weight}</Text>

            <View style={styles.floatingstyle}>
              <TouchableOpacity
                style={styles.circle}
                onPress={() => {
                  setWeight(weight + 1);
                }}
              >
                <Icon name="plus" size={20} color="#FFFF" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.circle}
                onPress={() => {
                  setWeight(weight - 1);
                }}
              >
                <Icon name="minus" size={20} color="#FFFF" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.agestyle}>
            <Text style={[styles.textage,]}>Age</Text>
            <Text style={[styles.valueage, ]}>{age}</Text>

            <View style={styles.floatingstyle}>
              <TouchableOpacity
                style={styles.circle}
                onPress={() => {
                  setAge(age + 1);
                }}
              >
                <Icon name="plus" size={20} color="#FFFF" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.circle}
                onPress={() => {
                  setAge(age - 1);
                }}
              >
                <Icon name="minus" size={20} color="#FFFF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.push('Result', { height: height, weight: weight })}
          >
            <Text style={[styles.buttonText,]}>Calculate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Calculations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  genderview: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
  },
  selectedgenderstyle: {
    flex: 1,
    height: 0.3 * screenHeight,
    backgroundColor: '#2B2B52',
    alignItems: 'center',
    alignContent:'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginHorizontal: 10,
  },
  genderstyle: {
    flex: 1,
    height: 0.3 * screenHeight,
    backgroundColor: '#333945',
    alignItems: 'center',
    alignContent:'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginHorizontal: 10,
  },
  textstyle: {
    color: '#99AAAB',
    fontWeight: 'bold',
    fontSize:20
  }, 
  iconstyle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heightcontainer: {
    flex: 1,
    height: 0.2 * screenHeight,
    backgroundColor: '#333945',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    margin: 10,
    marginTop: 20,
  },
  heightstyle: {
    color: '#99AAAB',
    fontSize:20,
    marginVertical:5
  },
  heightvcontainer: {
    flexDirection: 'row',
    flex: 1,
  },
  heighttextstyle: {
    color: '#FFFFFF',
    fontSize:35
  },
  heightvtextstyle: {
    color: '#FFFFFF',
    marginTop: 20,
    paddingLeft: 10,
  },
  weightview: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
  },
  weightstyle: {
    flex: 1,
    height: 0.25 * screenHeight,
    backgroundColor: '#333945',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginHorizontal: 10,
  },
  floatingstyle: {
    flex: 1,
    flexDirection: 'row',
  },
  circle: {
    backgroundColor: '#586776',
    width: 0.15 * width,
    height: 0.15 * width,
    borderRadius: 0.15 * width,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  textweight: {
    color: '#99AAAB',
    fontSize:20,
    marginHorizontal:20,
    marginVertical:10
  },
  valueweight: {
    color: '#FFFFFF', 
    fontSize:35
  },
  agestyle: {
    flex: 1,
    height: 0.25 * screenHeight,
    backgroundColor: '#333945',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginHorizontal: 10,
    
  },
  textage: {
    color: '#99AAAB',
    fontSize:20,
    marginHorizontal:20,
    marginVertical:10
  },
  valueage: {
    color: '#FFFFFF',
     fontSize:35
  },
  bottom: {
    flex: 1,
    marginTop: 26,
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
    fontSize: 0.04 * Math.min(width, screenHeight),
    color: 'white',
  },
});
