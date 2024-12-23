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
import { Button } from '../../components/button/button';
import { Icon } from '../../utilities/Icons';
const { deviceHeight, deviceWidth } = deviceProps;

export default function MessageDetailsModal({ IsMessageDetailModal, setIsMessageDetailModal, messageDate }) {
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

                            >
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
