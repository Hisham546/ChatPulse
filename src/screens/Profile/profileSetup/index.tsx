import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import styles from "./styles";

import TextInputOutlined from "../../../components/textBox/inputText";

import ButtonComponent from "../../../components/button/button";
import { Icon } from "../../../utilities/Icons";
import { SetupProfileProps } from "../../../containers/profileContainer/modal";
import useAuthStore from "../../../containers/authContainer/zustandAuthStore";
import { createUsers, getAllUsers } from "../../../services/api/apiFunction";
const SetupProfile: React.FC<SetupProfileProps> = (props) => {



  const { navigation, handleCreateProfile } = props

  const setButtonLoading = useAuthStore((state) => state.setLoading);

  const [formData, setFormData] = useState({

    phone: '',
    //countryCode: '91',
    password: '',
    name: '',




  });

  const onChangeText = (state, value) => {





    setFormData(prevState => ({
      ...prevState,
      [state]: value,
    }));

  };








  return (

    <View style={styles.containerStyle}>
      <View style={styles.topView}>
        <View style={styles.iconCircleView}>
          <Icon

            iconFamily={'SimpleLineIcons'}
            size={23}
            style={{ color: 'white' }}
            name={'user-follow'}
          />
        </View>

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
            handleCreateProfile(formData)
            // navigation.navigate('BottomTabs')

          }}
          buttonText={"Save"}
          loading={setButtonLoading}

          textStyle={styles.buttonTextStyle}
          buttonStyle={styles.buttonStyle}
        />
      </View>

    </View>
  )

}

export default SetupProfile;