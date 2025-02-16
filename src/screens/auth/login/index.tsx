
import { View, TouchableOpacity, Text, Image, ImageBackground } from "react-native";
import styles from "./styles";
import TextInputOutlined from "../../../components/textBox/inputText";
import { IMAGES } from "../../../assets/images/assetsExport"
import ButtonComponent from "../../../components/button/button";
import { PhoneProps } from "../../../containers/authContainer/modal";
import ScrollViewContainer from "../../../components/scrollViewContainer";
const Login: React.FC<PhoneProps> = (props) => {
    const { navigation, login, onChangeText, formData, buttonLoading } = props




    return (

        <ImageBackground
            source={IMAGES.backgroundImage}
            resizeMode={'cover'}

            style={styles.containerStyle}>
            <ScrollViewContainer enableKeyboardAvoiding={true}>
                <View style={styles.topView}>
                    <View style={styles.descriptionView}>
                        <Text style={styles.getStarted}>Get Started</Text>
                        <Text style={styles.getStarted2}>Start with login or register</Text>
                        <Image
                            resizeMode={'contain'}
                            style={styles.welcomeLogo2}
                            source={IMAGES.welcomeImage2}
                        />
                    </View>
                </View>
                <View style={styles.centerView}>
                    <TextInputOutlined
                        labelstyle={styles.labelstyle}
                        parentContaineStyle={styles.parentContaineStyle}
                        textInputStyle={styles.textInputStyle}
                        showLabel={true}
                        placeholderText={" Enter your name"}
                        keyboardType='default'
                        onChangeText={value => onChangeText("name", value)}
                        value={formData.name}
                    />
                    <TextInputOutlined
                        labelstyle={styles.labelstyle}
                        parentContaineStyle={styles.parentContaineStyle}
                        textInputStyle={styles.textInputStyle}
                        showLabel={true}
                        maxLength={10}
                        placeholderText={" Enter your password"}
                        keyboardType='numeric'
                        onChangeText={value => onChangeText("password", value)}
                        secureTextEntry
                        value={formData.password}
                    />
                    <ButtonComponent
                        onPress={() => {
                            let data = {
                                password: formData.password,
                                name: formData.name
                            }
                            props.login?.(data)
                        }}
                        buttonText={"Login"}
                        loading={buttonLoading}
                        textStyle={styles.buttonTextStyle}
                        buttonStyle={styles.buttonStyle}
                    />
                    <View style={styles.registerNowView}>
                        <Text style={styles.dontHaveAc}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.registerNowText} >Register now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollViewContainer>
        </ImageBackground>
    )

}

export default Login