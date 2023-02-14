import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Length = () => {
  const [firstVal, setFirstVal] = useState('');
  const [secondVal, setSecondVal] = useState('');
  const [valueFrom, setValueFrom] = useState('Centimeter');
  const [valueTo, setValueTo] = useState('Centimeter');

  const reset = () => {
    setFirstVal(' ');
    setSecondVal(' ');
    setValueFrom(' ');
    setValueTo(' ');
  };

  const convert = () => {
    if (valueFrom === valueTo) {
      setSecondVal(firstVal);
    } else {
      if (valueFrom === 'Centimeter') {
        if (valueTo === 'Meter') {
          setSecondVal(firstVal / 100);
        } else if (valueTo === 'Kilometer') {
          setSecondVal(firstVal / 100000);
        }
      } else if (valueFrom === 'Meter') {
        if (valueTo === 'Centimeter') {
          setSecondVal(firstVal * 100);
        }
        if (valueTo === 'Kilometer') {
          setSecondVal(firstVal / 1000);
        }
      } else if (valueFrom === 'Kilometer') {
        if (valueTo === 'Centimeter') {
          setSecondVal(firstVal * 100000);
        }
        if (valueTo === 'Meter') {
          setSecondVal(firstVal * 1000);
        }
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {firstVal} {valueFrom} = {secondVal} {valueTo}
      </Text>
      <View style={styles.horizontal}>
        <Text style={styles.paragraph}>From : </Text>
        <Picker
          style={styles.pick}
          selectedValue={valueFrom}
          onValueChange={itemValue => setValueFrom(itemValue)}>
          <Picker.Item label="Centimeter" value="Centimeter" />
          <Picker.Item label="Meter" value="Meter" />
          <Picker.Item label="Kilometer" value="Kilometer" />
        </Picker>
      </View>
      <View style={styles.horizontal}>
        <Text style={styles.paragraph}>To : </Text>
        <Picker
          style={styles.pick}
          selectedValue={valueTo}
          onValueChange={itemValue => setValueTo(itemValue)}>
          <Picker.Item label="Centimeter" value="Centimeter" />
          <Picker.Item label="Meter" value="Meter" />
          <Picker.Item label="Kilometer" value="Kilometer" />
        </Picker>
      </View>
      <TextInput
        value={firstVal}
        onChangeText={text => setFirstVal(text)}
        style={styles.input}
        placeholder="Enter Value Here"
        keyboardType="numeric"
      />

      <View style={styles.horizontal}>
        <TouchableOpacity onPress={convert} style={styles.button}>
          <Text style={styles.text}>Convert</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset} style={styles.button}>
          <Text style={styles.text}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 5,
    alignItems: 'center',
    textAlign: 'center',
  },

  paragraph: {
    margin: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  horizontal: {
    flexDirection: 'column',
  },
  pick: {
    margin: 5,
    width: 150,
    borderWidth: 10,
    borderRadius: 20,
    backgroundColor: 'grey',
    marginBottom: 10,
  },

  input: {
    width: 200,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 20,
    marginBottom: 20,
    backgroundColor: 'grey',
  },
  button: {
    backgroundColor: 'darkgrey',
    padding: 15,
    borderRadius: 15,
    width: 100,
    height: 50,
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Length;
