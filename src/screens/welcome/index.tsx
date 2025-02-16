import React, { useState, useEffect } from "react";
import { View, ImageBackground, Text, FlatList, Image } from "react-native";
import styles from "./styles";
import ButtonComponent from "../../components/button/button";
import { IMAGES } from "../../assets/images/assetsExport"
import { ScrollView } from "react-native-gesture-handler";
const Welcome = ({ navigation }) => {

    return (
        <ImageBackground
            source={IMAGES.backgroundImage}
            resizeMode={'cover'}
            style={styles.containerStyle}
        >
            <ScrollView 
                contentContainerStyle={{ flexGrow: 1 }} 
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.topView}>
                    <Image resizeMode={'contain'} style={styles.welcomeLogo} source={IMAGES.welcomeImage} />
                    <Image resizeMode={'contain'} style={styles.welcomeLogo2} source={IMAGES.welcomeImage2} />
                </View>

                <View style={styles.descriptionView}>
                    <Text style={styles.descriptionTextStyle}>Stay connected</Text>
                    <Text style={styles.descriptionTextStyle}>with your friends</Text>
                    <Text style={styles.descriptionTextStyle}>and family!</Text>
                </View>

                <View style={styles.centerView}>
                    <ButtonComponent
                        onPress={() => navigation.navigate("Login")}
                        buttonText={"Get Started"}
                        textStyle={styles.buttonTextStyle}
                        buttonStyle={styles.buttonStyle}
                    />
                </View>
            </ScrollView>
        </ImageBackground>
    );

}

export default Welcome