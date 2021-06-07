import React, { Component, ReactNode } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

interface IAppState {
  nome?: string
}


interface IAppProps {
  nome?: string
}

export default class App extends Component<IAppProps, IAppState> {


  render() {
    return (
      <View style={{ flex: 1, flexDirection:'row', backgroundColor: '#222' }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'red' }}></View>
        <View style={{ width: 50, height: 50, backgroundColor: 'green' }}></View>
        <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }}></View>
        <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}></View>
      </View>

    )
  }
}

const style = StyleSheet.create({

})

