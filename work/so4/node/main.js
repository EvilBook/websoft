function main() {
    let a = 1;
    let b;
    let range = "";

    b = a + 1;

    for (let i=0; i < 9; i++) {
        range += i + ", ";
    }

    console.info("no");
    console.info(range.substring(0, range.length - 2));
    console.info(a, b);
    while(b > 0){
        if(b===1){
            console.log("b is one");
        }
        b--;
    }
}
main();

var date=new Date();
console.log(date.getDate()+ " "+date.getMonth()+" "+date.getFullYear())