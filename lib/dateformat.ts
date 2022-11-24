export function dateFormat(data:Date) {
    let date = new Date(data);
    let month:any = date.getMonth() + 1;
    let day:any = date.getDate();
    let hour:any = date.getHours();
    let minute:any = date.getMinutes();
    let second:any = date.getSeconds();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
    hour = hour >= 10 ? hour : '0' + hour;
    minute = minute >= 10 ? minute : '0' + minute;
    second = second >= 10 ? second : '0' + second;

    return date.getFullYear() + '년 ' + month + '월 ' + day+'일';
}