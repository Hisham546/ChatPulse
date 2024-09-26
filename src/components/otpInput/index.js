

import { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput,Keyboard } from "react-native";
import styles from "./styles";
import { regex } from "../../utilities/utilityFunctions";




const OtpInputBox = (props) => {
    const { } = props


    const ref_one = useRef();
    const ref_two = useRef();
    const ref_three = useRef();
    const ref_four = useRef();
    const ref_five = useRef();
    const ref_six = useRef();


    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');


    const [val_one, setOneState] = useState('');
    const [val_two, setTwoState] = useState('');
    const [val_three, setThreeState] = useState('');
    const [val_four, setFourState] = useState('');
    const [val_five, setFiveState] = useState('');
    const [val_six, setSixState] = useState('');



    const onChange = async (value, index) => {

        if (regex.number_regex.test(value)) {

            let numberInString = value.toString();
            index === 1
                ? (setOneState(numberInString), ref_two.current?.focus())
                : index === 2
                    ? (setTwoState(numberInString), ref_three.current?.focus())
                    : index === 3
                        ? (setThreeState(numberInString), ref_four.current?.focus())
                        : index === 4
                            ? (setFourState(numberInString), ref_five.current?.focus())
                            : index === 5
                                ? (setFiveState(numberInString), ref_six.current?.focus())
                                : index === 6
                                    ? (setSixState(numberInString),
                                        props.onFinish(val_one + val_two + val_three + val_four + val_five + numberInString))
                                    : null;
        }
    };
    return (
        <View style={styles.otpParentView}>

            <TextInput
                ref={ref_one}
                style={styles.input}
                onChangeText={text => onChange(text, 1)}
                value={val_one}
                underlineColorAndroid="transparent"
                maxLength={1}
                keyboardType={'numeric'}
            />
            <TextInput
                ref={ref_two}
                style={styles.input}
                onChangeText={text => onChange(text, 2)}
                value={val_two}
                underlineColorAndroid="transparent"
                maxLength={1}
                keyboardType={'numeric'}


            />

            <TextInput
                ref={ref_three}
                style={styles.input}
                onChangeText={text => onChange(text, 3)}
                value={val_three}
                underlineColorAndroid="transparent"
                maxLength={1}
                keyboardType={'numeric'}
            />
            <TextInput
                ref={ref_four}
                style={styles.input}
                onChangeText={text => onChange(text, 4)}
                value={val_four}
                underlineColorAndroid="transparent"
                maxLength={1}
                keyboardType={'numeric'}
            />
            <TextInput
                ref={ref_five}
                style={styles.input}
                onChangeText={text => onChange(text, 5)}
                value={val_five}
                underlineColorAndroid="transparent"
                maxLength={1}
                keyboardType={'numeric'}
            />
            <TextInput
                ref={ref_six}
                style={styles.input}
                onChangeText={text => onChange(text, 6)}
                value={val_six}
                underlineColorAndroid="transparent"
                maxLength={1}
                keyboardType={'numeric'}
            />
        </View>


    );
};



export default OtpInputBox;