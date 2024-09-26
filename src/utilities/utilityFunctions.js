



export const regex = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    // name: /^[a-zA-Z]{1,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$/,
    name: /^[a-zA-Z0-9]{1,}(?: [a-zA-Z0-9]+)?(?: [a-zA-Z0-9]+)?$/,
    //name: /^[a-zA-Z ]{2,}$/,

    mobile: /^[0-9]{8,12}$/,//between 8 an 12 digits and there can be no other characters
    password: /^.{6,}$/,

    number_regex: /^[0-9]*$/,
    month_regex: /^(0?[1-9]|1[012])$/,
    cvv_regex: /^[0-9]{3,4}$/,
    countryCode: /.*\S.*/,
}





