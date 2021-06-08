import React, { Component, ReactNode } from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IAppState {
  textoFrase?: string;
  image: any
}
interface IAppProps {
  nome?: string
}

export default class App extends Component<IAppProps, IAppState> {

  frases = [
    'Siga os bons e aprenda com eles!',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distancia entre duas pessoas',
    'Deixe de lado as perocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e consquite o impossível.'
  ]

  constructor(props: any) {
    super(props)
    this.state = {
      textoFrase: '',
      image: require('./assets/imagens/biscoito.png')
    }

    this.abrirBiscoito = this.abrirBiscoito.bind(this)
  }

  abrirBiscoito() {
    this.setState({
      textoFrase: this.frases[Math.floor(Math.random() * this.frases.length)],
      image: require('./assets/imagens/biscoitoAberto.png')
    })
  }

  render() {
    return (
      <View style={style.container}>
        <Image style={style.img}
          source={this.state.image}
        />
        <Text style={style.textoBiscoito}>{this.state.textoFrase}</Text>
        <TouchableOpacity
          style={style.botao}
          onPress={this.abrirBiscoito}
        >
          <View style={style.botaoArea}>
            <Text style={style.textoBntQuebrar}>Abrir biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>

    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textoBiscoito: {

    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  botaoArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textoBntQuebrar: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#dd7b22'
  }
})

