import React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

export default class Contador extends React.Component {
    constructor () {
        super ();
        this.state = {
            contador: 0,
        };
    }
Decrementar() {
    this.setState({
        contador: this.state.contador - 1
    });
}
Incrementar () {
    this.setState({
        contador: this.state.contador + 1
    });
}
render () {
    return (
        <View>
            <View style={StyleSheet.texto}>
                <Text>{this.state.texto</Text>
        </View>
        <View style={StyleSheet.botoes}>
            <Button
                style={StyleSheet.botoes}>
                title="Aumenta"
                onPress={this.Incrementar.bind(this)}
                />
                </Button
                    style={StyleSheet.botao2}
                    onPress={this.Decrementar.bind(this)}
                    title="Diminui"
                />
            </View>
        </View>
    );  }   }

    const styles = StyleSheet.create({
        botoes: {
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            top: 220,
            height: 40,
        },

        texto: {
            alignItems: 'center',
            top: 200,
        },
});
