draw();

function draw() {
    for(let loop = 0; loop < 5; loop++) {
        let str = "";
        for(let iLoop = 0; iLoop <= loop; iLoop++) {
            str += "* ";
        }
        console.log(str);
    }
}