import React from "react";
import { ScrollView, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";



const ScrollViewContainer = ({ children, enableKeyboardAvoiding = false }) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={styles.flex}
            enabled={enableKeyboardAvoiding}
        >
            <ScrollView
                contentContainerStyle={[styles.container]}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    container: {
        flexGrow: 1,
        width: "100%",
    },
});

export default ScrollViewContainer;