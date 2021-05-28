// **********************Chapter # 31 to 34**>>>>>>>>>>>>>>>>>

// Assignment # 1

// var time = new Date();
// console.log(time);


// Assignment # 2

// var monthName= ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
// var time = new Date().getMonth();
// alert("Current Month : "+ monthName[time]);

// Assignment # 3

// var dayName= ["Sun","Mon","Tues","Weds","Thurs","Fri","Sat"];
// var time = new Date().getDay();
// alert("Today is "+ dayName[time]);

// Assignment # 4

// var dayName= ["Sun","Mon","Tues","Weds","Thurs","Fri","Sat"];
// var time = new Date().getDay();
// if(time === 6 || time === 0){
//     alert("Its Fun day");
// }
// else{
//     alert("Its "+ dayName[time] + "day");
// }

// Assignment # 5

// var time = new Date().getDate();
// if(time <= 15){
//     alert("First Fifteen days of the Month");
// }
// else{
//     alert("Last days of the Month");
// }

// Assignment # 6

// var currentDate = new Date();
// var milliSec=currentDate.getTime();
// var mintes =  (milliSec/(1000*60));
// document.write("<div>","Current Date : "+currentDate+ "</div>");
// document.write("<div>","Elapsed milliseconds from 01 January 1970 : "+ milliSec+ "</div>");
// document.write("<div>","Elapsed minutes from 01 January 1970 : "+ mintes+ "</div>");

// Assignment # 7

// var time = new Date().getHours();
// if(time < 12){
//     alert("Its A.M");
// }
// else{
//     alert("Its P.M");
// }

// Assignment # 8

// var laterDate = new Date("31 December 2020");
// document.write("<div>","Later Date : "+laterDate+ "</div>");

// Assignment # 9

// var ramadan = new Date("14 April 2021").getTime();
// var dayPass = (ramadan / (1000 * 60 *60 *24)/365)-new Date().getDay();
// dayPass= Math.floor(dayPass);

// document.write("<div>"+dayPass+" days have passed since 1st Ramadan , 2021"+ "</div>");


// Assignment # 10

// var currentDate2021 = new Date().getTime()/1000;
// var beginYear2021=new Date("01 January 2021").getTime()/1000;
// document.write("<div>","On reference date "+currentDate2021+ "</div>");
// document.write("<div>"+ (currentDate2021 - beginYear2021) + " seconds passed since the begining of 2021"+"</div>");
