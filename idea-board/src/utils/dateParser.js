export default function dateParser(timestamp){

    let objToday = new Date(timestamp),
    dayOfMonth = objToday.getDate(),
    curMonth = objToday.getMonth() + 1,
    curYear = objToday.getFullYear(),
    curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
    curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
    curSecond = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
    curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";

    const parsedDateTime = `${curHour}:${curMinute}:${curSecond}${curMeridiem} on ${dayOfMonth}/${curMonth}/${curYear}`
    
    return parsedDateTime
}
