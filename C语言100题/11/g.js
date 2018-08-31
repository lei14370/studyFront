
function f() {

   return function sum(i){
        var f1=1,f2=1,sum=0;
        for (var a=1;a<=i;a++){
            if(a==1||a==2){
                sum=1;
            }else {
                sum=f1+f2;
                f1=f2;
                f2=sum;
            }
        }
        return sum;
    }
}
