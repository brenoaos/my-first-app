

import React, { Component, memo, ReactNode } from 'react';
import { Text, View, Button, StyleSheet, ScrollView, FlatList } from 'react-native';


import Slider from '@react-native-community/slider';
interface IAppState {
  valor: number;
}


interface IAppProps {
  nome?: string
}

export default class App extends Component<IAppProps, IAppState> {

  constructor(props: any) {
    super(props)
    this.state = {
      valor: 0
    }
  }


  render() {
    return (
      <View style={style.container}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={(valor: number) => this.setState({ valor })}
          value={this.state.valor}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="red"
          thumbTintColor="yellow"
        />
        <Text style={{fontSize: 20, textAlign: 'center', marginTop: 40}}>{this.state.valor}</Text>
      </View>


    )
  }
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  pizzas: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center'
  }
})

