



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



// export const actualTime = (dateTime) => {
//     if (!dateTime) return '';  // Handle invalid or empty date input

//     let [hours, minutes] = dateTime.split("T")[1].split(":") || [];
//     hours = parseInt(hours, 10);  // Convert hours to a number

//     let period = "AM";
//     if (hours >= 12) {
//         period = "PM";
//         hours = hours > 12 ? hours - 12 : hours;  // Convert 13+ hours to 1-12
//     } else if (hours === 0) {
//         hours = 12;  // Handle midnight (0:00) case
//     }

//     // Ensure minutes are two digits (e.g., "03" instead of "3")
//     minutes = minutes.padStart(2, '0');

//     return `${hours}:${minutes} ${period}`;
// }

export const actualTime = (dateTime) => {
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();

    let period = "AM";
    if (hours >= 12) {
        period = "PM";
        hours = hours > 12 ? hours - 12 : hours;  // Convert 13+ hours to 1-12
    } else if (hours === 0) {
        hours = 12;  // Handle midnight (0:00) case
    }
    return `${hours}:${minutes} ${period} ${period}`;
}
