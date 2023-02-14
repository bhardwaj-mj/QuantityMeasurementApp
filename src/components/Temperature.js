import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Temperature = () => {
  const [firstVal, setFirstVal] = useState('');
  const [secondVal, setSecondVal] = useState('');
  const [valueFrom, setValueFrom] = useState('Celcius');
  const [valueTo, setValueTo] = useState('Celcius');

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
      if (valueFrom === 'Celcius') {
        if (valueTo === 'Fahrenheit ') {
          setSecondVal(firstVal * (9 / 5) + 32);
        } else if (valueTo === 'Kelvin') {
          setSecondVal(+firstVal + 273.15);
        }
      } else if (valueFrom === 'Fahrenheit') {
        if (valueTo === 'Celcius') {
          setSecondVal((+firstVal - 32) * (5 / 9));
        }
        if (valueTo === 'Kelvin') {
          setSecondVal((+firstVal - 32) * (5 / 9) + 273.15);
        }
      } else if (valueFrom === 'Kelvin') {
        if (valueTo === 'Celcius') {
          setSecondVal(+firstVal - 273.15);
        }
        if (valueTo === 'Fahrenheit') {
          setSecondVal((+firstVal - 273.15) * (9 / 5) + 32);
        }
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {firstVal} {valueFrom} = {secondVal} {valueTo}
      </Text>
      <View style={styles.horiz}>
        <Text style={styles.paragraph}>From : </Text>
        <Picker
          style={styles.pick}
          selectedValue={valueFrom}
          onValueChange={(itemValue, itemIndex) => setValueFrom(itemValue)}>
          <Picker.Item label="Celsius" value="Celsius" />
          <Picker.Item label="Fahrenheit " value="Fahrenheit " />
          <Picker.Item label="Kelvin" value="Kelvin" />
        </Picker>
      </View>
      <View style={styles.horiz}>
        <Text style={styles.paragraph}>To : </Text>
        <Picker
          style={styles.pick}
          selectedValue={valueTo}
          onValueChange={(itemValue, itemIndex) => setValueTo(itemValue)}>
          <Picker.Item label="Celsius" value="Celsius" />
          <Picker.Item label="Fahrenheit " value="Fahrenheit " />
          <Picker.Item label="Kelvin" value="Kelvin" />
        </Picker>
      </View>
      <TextInput
        value={firstVal}
        onChangeText={text => setFirstVal(text)}
        style={styles.input}
        placeholder="Enter Value Here"
        keyboardType="numeric"
      />

      <View style={styles.horiz}>
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
  horiz: {
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
export default Temperature;
