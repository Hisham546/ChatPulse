import React, {useEffect, useRef, useState} from 'react';
import {Modal, Animated, Text, View, TouchableOpacity} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Space from '../space';
import colors from '../../themes/colors';
import styles from './styles';
import countryCode from '../../utilities/countryCode.json';
import { Icon } from '../../utilities/Icons';
const CountryCodeUtility = ({ onChangeCountryCode, defaultValue}) => {
  /* refs */
  const inputRef = useRef({});
  /* states */
  const [modalVisible, setModalVisible] = useState(false);
  const [currentCode, setCurrentCode] = useState(defaultValue ?? '+91');
  const [data, setdata] = useState(countryCode);
  /* render functions */
  useEffect(() => {
    setCurrentCode(defaultValue);
  }, [defaultValue]);
  useEffect(() => {
    setdata(countryCode);
  }, [modalVisible]);
  /* functions */

  const handleFilter = text => {
    /* filtering data in accordance with text from TextInput */

    const newdata = [...countryCode];
    const filterdData = newdata.filter(item => {
      return String(item.name).toLowerCase().includes(text.toLowerCase());
    });
    setdata(filterdData.length ? filterdData : countryCode);
  };
  const handleItemClick = item => {
    setCurrentCode(item.dial_code);
    setModalVisible(false);
    onChangeCountryCode && onChangeCountryCode(item.dial_code);
  };
  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setModalVisible(true)}
        style={currentCode.length > 3 ? styles.longCode : styles._code}>
        
        <Text style={styles._code_text}>{currentCode}</Text>
        <Icon
            iconFamily={'MaterialIcons'}
            size={20}
            style={{ color: colors.WHITE }}
            name={ 'arrow-drop-down'}
          />
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={styles._modal_view_1}>
          <TouchableOpacity activeOpacity={1} style={styles._modal_view_2}>
            <Space height={30} />
            <View style={styles._inputConatiner_1}>
              <View style={styles._inputConatiner_2}>
                <View style={styles._inputConatiner_3}>
                  <MaterialIcons name="search" style={styles._search_icon} />
                  <TextInput
                    ref={inputRef}
                    autoCorrect={false}
                    placeholder="Search country codes"
                    placeholderTextColor={'#999999'}
                    onChangeText={handleFilter}
                    keyboardType="default"
                    returnKeyType="done"
                    style={styles._input}
                  />
                </View>
                <View style={styles._clear_View}>
                  <MaterialIcons
                    name="clear"
                    style={styles._clear_icon}
                    onPress={() => {
                      inputRef.current?.clear();
                      setdata(countryCode);
                    }}
                  />
                </View>
              </View>
              <Text
                style={styles._cancel_text}
                onPress={() => setModalVisible(false)}>
                Cancel
              </Text>
            </View>
            <Space height={10} />
            <Space height={1} width="100%" backgroundColor={colors.gray_200} />
            <FlatList
              data={data ?? []}
              keyExtractor={(_, index) => String(index)}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={styles._item}
                    onPress={() => {
                      handleItemClick(item);
                    }}>
                    <Text style={styles._item_text}>
                      {item.name} ({item.dial_code})
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export {CountryCodeUtility};
