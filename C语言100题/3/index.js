var date=new Date(window.prompt('请输入一个日期：'));
console.log(date);
var year=date.getFullYear();
var month=date.getMonth();
var day=date.getDate();

function findOneYearDay(year,month,date) {
    var days=[31,28,31,30,31,30,31,31,30,31,30,31];
    var sum=0;
    for (var i=0;i<month;i++){
        sum+=days[i]
    }
    if((year%400===0||(year%4===0&&year%100!=0))&&month>2){
        sum++;
    }
    return sum+date
}
alert('这是'+year+'年的第'+findOneYearDay(year,month,day)+'天');