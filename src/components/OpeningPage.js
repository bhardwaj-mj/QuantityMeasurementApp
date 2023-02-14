import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

const OpeningPage = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('Conversion');
  };

  return (
    <View style={styles.body}>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({
          backgroundColor: pressed ? 'grey' : 'darkgrey',
          borderRadius: 5,
        })}>
        <Text style={styles.text}>Start</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    color: '#fff',
  },
  appText: {
    color: '#555',
    width: '90%',
    textAlign: 'center',
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default OpeningPage;
