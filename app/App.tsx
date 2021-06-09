import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, ScrollView, FlatList } from 'react-native';

import moment from 'moment'
import { DataTable } from 'react-native-paper';


import Ads from './src/components/Ads'


interface IAppState {
  timer?: moment.Moment;
  timerVolta: moment.Moment;
  textBtnParar: string;
  textBtnIniciar: string;
  voltas: any[];
}


interface IAppProps {
}

export default class App extends Component<IAppProps, IAppState> {

  interval: any

  constructor(props: any) {
    super(props)

    this.state = {
      timer: moment().utcOffset(0).set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
      timerVolta: moment().utcOffset(0).set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
      textBtnParar: 'Zerar',
      textBtnIniciar: 'Iniciar',
      voltas: []
    }

    this.btnEsquerdo = this.btnEsquerdo.bind(this)
    this.btnDireito = this.btnDireito.bind(this)
  }

  btnEsquerdo() {
    if (!this.interval) {
      this.interval = setInterval(() => this.setState({
        timer: this.state.timer?.add(100, 'millisecond'),
        timerVolta: this.state.timerVolta?.add(100, 'millisecond')
      }), 100)
      this.setState({
        textBtnIniciar: 'Pausar',
        textBtnParar: 'Volta'
      })

    }
    else {
      clearInterval(this.interval);
      this.interval = null;
      this.setState({
        textBtnIniciar: 'Iniciar',
        textBtnParar: 'Zerar'
      })
    }
  }

  btnDireito() {
    if (this.interval) {
      this.state.voltas.push({
        id: (this.state.voltas.length + 1),
        tempo: this.state.timerVolta.format('mm:ss:S'),
      })
      this.setState({
        timerVolta: this.state.timerVolta.set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
      })
    } else {
      this.setState({
        timer: this.state.timer?.set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
        timerVolta: this.state.timerVolta.set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
        voltas: []
      })
    }


  }

  render() {

    let dataTableRow = this.state.voltas.map(volta => {
      return (
        <DataTable.Row>
          <DataTable.Cell style={style.dataTableRowText}> {volta.id} </DataTable.Cell>
          <DataTable.Cell style={style.dataTableRowText}> {volta.tempo} </DataTable.Cell>
        </DataTable.Row>
      )
    })

    return (
      <View style={style.container}>
        <Ads style={{flex: .3, flexDirection: 'row', marginBottom: 10}} />
        <Image style={style.image} source={require('./assets/imagens/cronometro.png')} />
        <Text style={style.contador}>{this.state.timer?.format('mm:ss:S')}</Text>
        <Text style={style.contadorVolta}>{this.state.timerVolta?.format('mm:ss:S')}</Text>
        <View style={style.botoeira}>
          <TouchableOpacity style={style.botao} onPress={this.btnEsquerdo}>
            <Text style={style.btnText}>{this.state.textBtnIniciar}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.botao} onPress={this.btnDireito}>
            <Text style={style.btnText}>{this.state.textBtnParar}</Text>
          </TouchableOpacity>
        </View>

        <DataTable style={style.dataTableArea}>
          <DataTable.Header style={style.dataTableHeader}>
            <DataTable.Title style={style.dataTableHeaderText} >Volta</DataTable.Title>
            <DataTable.Title style={style.dataTableHeaderText} >Tempo</DataTable.Title>
          </DataTable.Header>
          <ScrollView>
            {dataTableRow}
          </ScrollView>
        </DataTable>
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
    marginTop: -160,
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold'
  },
  contadorVolta: {
    color: '#FFF',
    fontSize: 20,
  },
  voltasArea: {
    flexDirection: 'row',
    width: 200,
    padding: 10,
    borderRadius: 10
  },
  botoeira: {
    flexDirection: 'row',
    marginTop: 70,
  },
  dataTableArea: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#FFF',
    height: 200,
    marginBottom: 0,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
  },
  dataTableHeader: {
    backgroundColor: '#FFF',
    color: '#00eaaf',
    fontSize: 50
  },
  dataTableHeaderText: {
    justifyContent: 'center',
    color: '#FFF'
  },
  dataTableRowText: {
    textAlign: 'center',
    justifyContent: 'center',
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

