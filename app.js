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
// var current = new Date();
// var currentDate2021 = current.getTime()/1000;
// var beginYear2021=new Date("01 January 2021").getTime()/1000;
// document.write("<div>","On reference date "+current+ "</div>");
// document.write("<div>"+ (currentDate2021 - beginYear2021) + " seconds passed since the begining of 2021"+"</div>");

// Assignment # 11

// var current = new Date();
// document.write("<div>","Current Date "+current+ "</div>");
// current.setHours(current.getHours()-1);
// document.write("<div>","1 hour ago, it was "+current+ "</div>");

// Assignment # 12

// var current = new Date();
// document.write("<div>","Current Year "+current+ "</div>");
// current.setFullYear(current.getFullYear()-100);
// document.write("<div>","100 years ago, it was "+current+ "</div>");

// Assignment # 13

// var user = +prompt("Enter Your Age");
// var abc = new Date().getFullYear();
// var x = abc-user;
// document.write("<div>","Your age is "+user+ "</div>");
// document.write("<div>","Your birth year is "+x+ "</div>");

// Assignment # 14
// var cust = "ABC";
// var month= "February";
// var unitUse= 410;
// var chargeUnit=16;
// var surCharge = 350;
// var netAmount = unitUse * chargeUnit;
// var grossAmount = netAmount + surCharge;

// document.write("<h1>","K-Electric Bill "+ "</h1>");
// document.write("<div>","Customer Name : "+cust+ "</div>");
// document.write("<div>","Month : "+month+ "</div>");
// document.write("<div>","Number of Units : "+unitUse+ "</div>");
// document.write("<div>","Charges per unit : "+chargeUnit+ "</div>");
// document.write("<div>"+"  "+"</div>");
// document.write("<div>","Net Amount Payble (within Due Date) : "+netAmount+ "</div>");
// document.write("<div>"+"Late payment surcharge : "+surCharge+"</div>");
// document.write("<div>","Gross Amount Payble (after Due Date) : "+grossAmount+ "</div>");