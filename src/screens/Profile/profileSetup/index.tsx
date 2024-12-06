
import { Image, View } from "react-native";
import styles from "./styles";
import TextInputOutlined from "../../../components/textBox/inputText";
import ButtonComponent from "../../../components/button/button";
import { Icon } from "../../../utilities/Icons";
import { SetupProfileProps } from "../../../containers/profileContainer/modal";
import useAuthStore from "../../../containers/authContainer/zustandAuthStore";
import { useCamera } from "../../../services/camera";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImagePickerStore from "../../../services/camera/zustandCameraStore";



const SetupProfile: React.FC<SetupProfileProps> = (props) => {

  const { openPicker } = useCamera()

  const { navigation, handleCreateProfile, onChangeText, formData } = props

  const buttonLoading = useAuthStore((state: any) => state.loading);


  const imageUrl = ImagePickerStore((state: any) => state.imageUrl);





  return (

    <View style={styles.containerStyle}>
      <View style={styles.topView}>
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
              style={{ color: 'white' }}
              name={'user-follow'}
            />
          }
        </TouchableOpacity>


        <TextInputOutlined
          labelstyle={styles.labelstyle}
          parentContaineStyle={styles.parentContaineStyle}

          textInputStyle={styles.textInputStyle}


          showLabel={true}


          placeholderText={"Enter your name"}
          keyboardType='numeric'
          onChangeText={value => onChangeText("name", value)}

          value={formData.name}
        />

        <TextInputOutlined
          labelstyle={styles.labelstyle}
          parentContaineStyle={styles.parentContaineStyle}

          textInputStyle={styles.textInputStyle}

          countryCode={true}
          showLabel={true}
          maxLength={10}

          placeholderText={" Enter your phone number"}
          keyboardType='numeric'
          onChangeText={value => onChangeText("phone", value)}
          // onChangeCountryCode={e => onChangeText('countryCode', parseInt(e, 10))}
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
        />
      </View>
      <View style={styles.centerView}>

        <ButtonComponent
          onPress={() => {
            if (formData.password || formData.name) {
              handleCreateProfile(formData)
            } else {

            }


          }}
          buttonText={"Save"}
          loading={buttonLoading}

          textStyle={styles.buttonTextStyle}
          buttonStyle={styles.buttonStyle}
        />
      </View>

    </View>
  )

}

export default SetupProfile;