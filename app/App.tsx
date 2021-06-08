import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

interface IAppState {
  timer?: number
  textBtnParar: string;
  textBtnIniciar: string;
}


interface IAppProps {
}

export default class App extends Component<IAppProps, IAppState> {

  interval: any

  constructor(props: any) {
    super(props)

    this.state = {
      timer: 0,
      textBtnParar: 'Zerar',
      textBtnIniciar: 'Iniciar',
    }

    this.iniciar = this.iniciar.bind(this)
    this.zerar = this.zerar.bind(this)
  }

  iniciar() {
    if (!this.interval) {
      this.interval = setInterval(() => this.setState({
        timer: (this.state.timer || 0) + 0.1
      }), 100)
      this.setState({
        textBtnIniciar: 'Pausar',
      })

    }
    else {
      clearInterval(this.interval);
      this.interval = null;
      return;
    }
  }

  zerar() {

    this.setState({
      timer: 0,
    })

  }

  render() {
    return (
      <View style={style.container}>
        <Image style={style.image} source={require('./assets/imagens/cronometro.png')} />
        <Text style={style.contador}>{this.state.timer?.toFixed(1)}</Text>
        <View style={style.botoeira}>
          <TouchableOpacity style={style.botao} onPress={this.iniciar}>
            <Text style={style.btnText}>{this.state.textBtnIniciar}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.botao} onPress={this.zerar}>
            <Text style={style.btnText}>{this.state.textBtnParar}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aeef',
    paddingTop: 0
  },
  contador: {
    marginTop: -170,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  botoeira: {
    flexDirection: 'row',
    marginTop: 70
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFF",
    height: 40,
    margin: 17,
    borderRadius: 10
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  image: {
    width: 250,
    height: 300,
  }
})

