import React from "react";
import { FlatList } from "react-native";
import StatusCarrinho from "../../componentes/StatusCarrinho";
import TelaPadrao from "../../componentes/telaPadrao";
import Item from "./item";

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "Não dê banho no seu gato, deixe com a gente",
        quantidade: 1
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose da vacina V4, seu gato precisa de duas.",
        quantidade: 2
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.9,
        descricao: "Uma dose da vacina antirrábica, seu gato precisa de 1 por ano",
        quantidade: 1
    }
];

export default function Carrinho() {
    const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0)
    
    return <TelaPadrao>
        <StatusCarrinho total={total} />
        <FlatList
            data={servicos}
            removeClippedSubviews={false}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={({ id }) => String(id)}
        />
    </TelaPadrao>
}