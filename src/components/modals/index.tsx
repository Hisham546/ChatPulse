import React from 'react';
import {
    Modal,
    TouchableOpacity,
    View,
    StyleSheet,
    Text
} from 'react-native';

import deviceProps from '../../utilities/deviceProps';


import colors from '../../themes/colors';
import fontSize from '../../themes/fontSize';
import fontFamily from '../../themes/fontFamily';
import ButtonComponent from '../button/button';
import { Icon } from '../../utilities/Icons';
const { deviceHeight, deviceWidth } = deviceProps;

export function MessageDetailsModal({ IsMessageDetailModal, setIsMessageDetailModal, messageDate ,deleteMessage}) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={IsMessageDetailModal}

        >
            <TouchableOpacity style={styles.transparentView}
                activeOpacity={1}
                onPress={() => {
                    setIsMessageDetailModal(false)
                }}>
                <View style={styles.modalView}>
                    <View style={styles.mainView}>
                        <View style={styles.closeContainer}>
                            <Text style={styles.messageDate}>{messageDate}</Text>
                            <TouchableOpacity
                                style={styles.closeIconParent}
                                onPress={() => {
                                    setIsMessageDetailModal(false)
                                }}>
                                <Icon

                                    iconFamily={'AntDesign'}
                                    size={20}
                                    style={{ color: 'gray' }}

                                    name={'close'}
                                />
                            </TouchableOpacity>


                        </View>
                        <View style={styles.textContainer}>
                            <TouchableOpacity style={styles.textViews}
                            >
                                <Text style={styles.headingText}>Replay</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.textViews}
                            >
                                <Text style={styles.headingText}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.textViews}

                                onPress={() => {
                                    deleteMessage()
                                }}>
                                <Text style={styles.headingText}>Delete</Text>

                            </TouchableOpacity>

                        </View>


                    </View>
                </View>
            </TouchableOpacity >
        </Modal>
    );
}

const styles = StyleSheet.create({
    transparentView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        width: deviceWidth * 0.65,
        height: deviceHeight * 0.20,
        backgroundColor: colors.WHITE,
        borderRadius: 14,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    mainView: {
        width: deviceWidth * 0.80,
        height: deviceHeight * 0.19,
        //backgroundColor:'green',

        alignItems: 'center',
    },

    buttonTextStyle: {
        color: colors.LIGHT_GOLDEN_YELLOW,
        fontSize: fontSize.p,
        fontStyle: 'normal',
        fontFamily: fontFamily.P_MEDIUM

    },
    buttonStyle: {
        marginTop: 1,
        width: deviceWidth * 0.33,
        height: deviceHeight * 0.048,
        borderRadius: 5,
        backgroundColor: colors.DARK_SLATE_GREEN

    },
    closeContainer: {

        height: deviceHeight * 0.05,
        width: deviceWidth * 0.75,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',



    },
    closeIconParent: {
        height: deviceHeight * 0.05,
        width: deviceWidth * 0.07,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textContainer: {
        height: deviceHeight * 0.14,
        width: deviceWidth * 0.75,
        justifyContent: 'center',
        //   backgroundColor: 'red'

    },
    headingText: {
        color: colors.DARK_SLATE_GREEN,
        fontFamily: fontFamily.P_MEDIUM,
        fontSize: fontSize.p,

    },

    messageDate: {
        color: colors.DARK_SLATE_GREEN,
        fontFamily: fontFamily.P_MEDIUM,
        fontSize: fontSize.p,

    },
    textViews: {
        height: deviceHeight * 0.04,
        marginTop: '1%',
        width: deviceWidth * 0.70,
        // backgroundColor:'red' 
    }
});


export function LogoutModal({ logoutModalVisible, setLogoutModalVisible, onPressLogout }) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={logoutModalVisible}
        >
            <View style={logoutStyles.transparentView}>
                <View style={logoutStyles.modalView}>
                    <View style={logoutStyles.mainView}>
                        <View style={logoutStyles.textContainer}>
                            <Text style={logoutStyles.headingText1}>Log out ?</Text>
                            <Text style={logoutStyles.headingText2}>Are you sure you want to log out ?</Text>
                        </View>
                        <View style={logoutStyles.buttonContainer}>

                            <ButtonComponent
                                onPress={() => {
                                    setLogoutModalVisible(false)
                                }}
                                buttonText={"Cancel"}


                                textStyle={[logoutStyles.buttonTextStyle, { color: colors.DARK_SLATE_GREEN }]}
                                buttonStyle={[logoutStyles.buttonStyle, { backgroundColor: 'white', borderWidth: 1, borderColor: '#DEDEDE' }]}
                            />
                            <ButtonComponent
                                onPress={() => {
                                    onPressLogout()
                                }}
                                buttonText={"Log out"}


                                textStyle={logoutStyles.buttonTextStyle}
                                buttonStyle={logoutStyles.buttonStyle}
                            />
                        </View>

                    </View>
                </View>
            </View>
        </Modal>
    );
}

const logoutStyles = StyleSheet.create({
    transparentView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        width: deviceWidth * 0.85,
        height: deviceHeight * 0.24,
        backgroundColor: colors.WHITE,
        borderRadius: 14,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    mainView: {
        width: '100%',
        height: deviceHeight * 0.15,

        alignItems: 'center',
    },

    buttonTextStyle: {
        color: colors.WHITE,
        fontSize: fontSize.p,
        fontStyle: 'normal',
        fontFamily: fontFamily.P_MEDIUM

    },
    buttonStyle: {
        marginTop: 1,
        width: deviceWidth * 0.33,
        height: deviceHeight * 0.048,
        borderRadius: 5,
        backgroundColor: colors.blue_100

    },
    buttonContainer: {

        height: deviceHeight * 0.09,
        width: deviceWidth * 0.75,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',


    },
    textContainer: {
        height: deviceHeight * 0.10,
        width: deviceWidth * 0.75,
        justifyContent: 'center',


    },
    headingText1: {
        color: colors.BLACK,
        fontFamily: fontFamily.P_MEDIUM,
        fontSize: fontSize.h5,
        marginBottom: 10
    },
    headingText2: {
        color: '#9C9C9C',
        fontFamily: fontFamily.P_MEDIUM,
        fontSize: fontSize._13

    }
});

