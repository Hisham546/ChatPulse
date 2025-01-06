
import { Image, Text, View, ImageBackground } from "react-native";
import styles from "./styles";
import TextInputOutlined from "../../../components/textBox/inputText";
import ButtonComponent from "../../../components/button/button";
import { Icon } from "../../../utilities/Icons";
import { RegisterProps } from "../../../containers/profileContainer/modal";
import useAuthStore from "../../../containers/authContainer/zustandAuthStore";
import { useCamera } from "../../../services/camera";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImagePickerStore from "../../../services/camera/zustandCameraStore";
import ToastMessage from "../../../components/toast";
import { IMAGES } from "../../../assets/images/assetsExport";



const Register: React.FC<RegisterProps> = (props) => {

  const { openPicker } = useCamera()

  const { navigation, handleCreateProfile, onChangeText, formData } = props

  const buttonLoading = useAuthStore((state: any) => state.loading);


  const imageUrl = ImagePickerStore((state: any) => state.imageUrl);





  return (

    <ImageBackground
      source={IMAGES.backgroundImage}
      resizeMode={'cover'}

      style={styles.containerStyle}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Icon

            iconFamily={'Ionicons'}
            size={23}
            style={{ color: 'white', marginLeft: '20%' }}
            name={'chevron-back'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.secondView}>
        <View style={styles.profileLogoMainView}>
          <TouchableOpacity
            onPress={openPicker}
            style={styles.iconCircleView}>
            {imageUrl ?

              <Image
                resizeMode={'cover'}
                style={styles.profileLogo}
                source={{
                  uri: imageUrl
                }}
              // onLoadStart={() => setLoading(true)}
              // onLoad={() => setLoading(false)}
              // onError={() => {
              //     setLoading(false);

              // }}

              /> :
              <Icon

                iconFamily={'SimpleLineIcons'}
                size={23}
                style={{ color: 'black' }}
                name={'user-follow'}
              />
            }
          </TouchableOpacity>
        </View>
        <View style={styles.registerView}>

          <Text style={styles.registerText}>Register</Text>
          <Text style={styles.belowDetails}>Enter the below details to proceed</Text>
        </View>
        <TextInputOutlined
          labelstyle={styles.labelstyle}
          parentContaineStyle={styles.parentContaineStyle}
          textInputStyle={styles.textInputStyle}
          showLabel={true}
          placeholderText={"Enter your name"}
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
          placeholderText={" Enter your phone number"}
          keyboardType='numeric'
          onChangeText={value => onChangeText("phone", value)}
          value={formData.phone}
        />
        <TextInputOutlined
          labelstyle={styles.labelstyle}
          parentContaineStyle={styles.parentContaineStyle}
          textInputStyle={styles.textInputStyle}
          showLabel={true}
          maxLength={10}
          placeholderText={" Password"}
          keyboardType='numeric'
          onChangeText={value => onChangeText("password", value)}
          value={formData.password}
          secureTextEntry
        />

        <ButtonComponent
          onPress={() => {
            if (formData.password || formData.name) {
              handleCreateProfile(formData)
            } else {

              ToastMessage({
                message: 'please fill all fields',
                type: 'error',

              });
            }


          }}
          buttonText={"Save"}
          loading={buttonLoading}
          textStyle={styles.buttonTextStyle}
          buttonStyle={styles.buttonStyle}
        />
      </View>


    </ImageBackground>
  )

}

export default Register;