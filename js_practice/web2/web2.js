//숫자 타입
var intNum = 10;
document.write("intNum = 10<br/>");
var floatNum = 0.1;
document.write("floatNum = 0.1<br/>")

//문자열 타입
var singleQuoteStr = 'single quote string';
document.write("singleQuoteStr = 'single quote string'<br/>");
var doubleQuoteStr = "double quote string";
document.write("doubleQuoteStr = 'double quote string'<br/>")
var singleChar = 'a';

//부울린 타입
var boolVar = true;
document.write("boolVar = true<br/>");

//undefined 타입
var emptyVar;
document.write("emptyVar;<br/>")

//null 타입
var nullVar = null;
document.write("nullVar = null<br/><br/>");

document.write("각각의 타입은?<br/>");
document.write(typeof intNum + " ");
document.write(typeof floatNum + " ");
document.write(typeof singleQuoteStr + " ");
document.write(typeof doubleQuoteStr + " ");
document.write(typeof boolVar + " ");
document.write(typeof nullVar + " ");
document.write(typeof emptyVar);