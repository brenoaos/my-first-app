import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


class Pessoa extends Component<{ data: any }> {

    render() {
        return (
            <View style={style.pessoaArea}>
                <Text style={style.textoPessoa}>{this.props.data.nome}</Text>
                <Text style={style.textoPessoa}>{this.props.data.idade}</Text>
                <Text style={style.textoPessoa}>{this.props.data.email}</Text>
            </View>
        )
    }

}


const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    box1: {
        height: 250,
        width: 150,
        backgroundColor: 'red'
    },
    box2: {
        height: 250,
        width: 150,
        backgroundColor: 'green'
    },
    box3: {
        height: 250,
        width: 150,
        backgroundColor: 'yellow'
    },
    box4: {
        height: 250,
        width: 150,
        backgroundColor: 'blue'
    },
    pessoaArea: {
        backgroundColor: '#222',
        height: 200,
        marginBottom: 15
    },
    textoPessoa: {
        color: '#FFF',
        fontSize: 20
    }
})



export default Pessoa
