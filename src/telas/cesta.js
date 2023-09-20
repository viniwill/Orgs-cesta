import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";


import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width;

export default function Cesta(){
return <>
    <Image source={topo} style={estilos.topo}></Image>
    <Text style={estilos.titulo}>Detalhe da Cesta</Text>
    <View>
        <Text style={estilos.nome}>Cesta de Verduras</Text>
        <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
        <Text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda para a cozinha!</Text>
        <Text style={estilos.preco}>40,00</Text>
    </View>
</>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578/768 * width //essa conta são as medidas da imagem multiplicado pelo width da tela do celular
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
    nome:{
        fontSize: 26, 
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        color: "#A3A3A3",
    },
    imagemFazenda:{
        Height: 32
    }
})
