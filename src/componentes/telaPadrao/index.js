import React from "react";
import { KeyboardAvoidingView, SafeAreaView, StatusBar } from "react-native";
import estilosGlobal from "../../estilos"

export default function TelaPadrao({ children }) {
    return <SafeAreaView style={estilosGlobal.preencher}>
        <StatusBar />
        <KeyboardAvoidingView
            behavior={Platform.OS == "android" ? "height" : "padding"}
            style={{ flex: 1 }}
        >
            {children}
        </KeyboardAvoidingView>
    </SafeAreaView>
}