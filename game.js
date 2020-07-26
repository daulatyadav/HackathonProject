var looseCount = 1
    var sumPoint =0
    var startColArr =[]
    var levelCount = 1
    var fillArr = ['','','','']
    var pickColorValue;
    var pointArr=[];
    function fillColor(val){
    //console.log("fill color is workin",val,pickColorValue)
    document.body.children[4].children[0].children[val-1].style.backgroundColor = pickColorValue;
    fillArr[val-1] = pickColorValue
    }
    function pickColor(color){
        //document.body.children[4].children[0].children[0].style.backgroundColor = ;
        pickColorValue = color;
        //console.log("pick color value",pickColorValue)
        
    }

    function checkFunction(){
        //startColArr.splice(0,1)
       
        if(fillArr.toString()===startColArr.toString()){
            alert('Congratulations, You win this round',+levelCount)
            //console.log("levelCout yaha hai",levelCount)
            if(levelCount===1){
                pointArr.push(5)
               // console.log(pointArr)
            }else if(levelCount===2){
                pointArr.push(10)
            }else if(levelCount===3){
                pointArr.push(15)
            }else if(levelCount===4){
                pointArr.push(20)
            }else if(levelCount===5){
                pointArr.push(25)
            }else if(levelCount===6){
                pointArr.push(30)
            }else if(levelCount===7){
                pointArr.push(35)
            }else if(levelCount===8){
                pointArr.push(40)
            }else if(levelCount===9){
                pointArr.push(10)
            }
            levelCount++
            myScore()
            document.getElementById("myRound").value = levelCount
        //alert(levelCount)
            document.body.children[4].children[0].children[0].style.backgroundColor = "gray"
            document.body.children[4].children[0].children[1].style.backgroundColor = "gray"
            document.body.children[4].children[0].children[2].style.backgroundColor = "gray"
            document.body.children[4].children[0].children[3].style.backgroundColor = "gray"
        }else{
            if(looseCount === 1){
                document.getElementById('heart1').style.color="black";   
                looseCount ++
                document.body.children[4].children[0].children[0].style.backgroundColor = "gray"
            document.body.children[4].children[0].children[1].style.backgroundColor = "gray"
            document.body.children[4].children[0].children[2].style.backgroundColor = "gray"
            document.body.children[4].children[0].children[3].style.backgroundColor = "gray"
            alert("Wrong Paint")

            }else if(looseCount === 2){
                document.getElementById('heart1').style.color="black";   
                document.getElementById('heart2').style.color="black";   
                looseCount = 2
            document.body.children[4].children[0].children[0].style.backgroundColor = "gray"
            document.body.children[4].children[0].children[1].style.backgroundColor = "gray"
            document.body.children[4].children[0].children[2].style.backgroundColor = "gray"
            document.body.children[4].children[0].children[3].style.backgroundColor = "gray"
            looseCount ++

            alert("Wrong Paint")
            }else if(looseCount ===3){
                document.getElementById('heart1').style.color="black";   
                document.getElementById('heart2').style.color="black";   
                document.getElementById('heart3').style.color="black";   
                looseCount ++
            document.body.children[4].children[0].children[0].style.backgroundColor = "gray"
            document.body.children[4].children[0].children[1].style.backgroundColor = "gray"
            document.body.children[4].children[0].children[2].style.backgroundColor = "gray"
            document.body.children[4].children[0].children[3].style.backgroundColor = "gray"
            alert("Wrong Paint")
            }else{
                alert("Game Over")
                location.href = 'index.html'
            }         
            }
       // console.log("Fill Color",fillArr)
       // console.log("inital Vla",startColArr)
    }

function startGame() {
    document.getElementById("myRound").value = levelCount

    startColArr = []
    fillArr = []
    var colors = ['red', 'green', 'blue', 'orange', 'black','pink'];

    function getRandomInt(max) {
        let instCheck = Math.floor(Math.random() * Math.floor(max));
        
        startColArr.push(colors[instCheck])
        //console.log(startColArr)
        return colors[instCheck]
    }
    document.body.children[4].children[0].children[0].style.backgroundColor = getRandomInt(6)
    document.body.children[4].children[0].children[1].style.backgroundColor = getRandomInt(6)
    document.body.children[4].children[0].children[2].style.backgroundColor = getRandomInt(6)
    document.body.children[4].children[0].children[3].style.backgroundColor = getRandomInt(6)
            
            if(levelCount===1){
                timeLeft = 5
            }else if(levelCount ===2){
                timeLeft = 4.5
            }else if(levelCount===3){
                timeLeft = 4
            }else if(levelCount===4){
                timeLeft = 3.5
            }else if(levelCount===5){
                timeLeft = 3
            }else if(levelCount===6){
                timeLeft = 2.5
            }else if(levelCount===7){
                timeLeft = 2
            }else if(levelCount===8){
                timeLeft = 1.5
            }else if(levelCount===9){
                timeLeft = 1
            }else if(levelCount===10){
                timeLeft = 0
            }
        
        var elem = document.getElementById('some_div');
        var timerId = setInterval(countdown, 1000);

        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                doSomething();
            } else {
                elem.innerHTML = timeLeft +" Sec"
                if(timeLeft % 1 != 0){
                    setTimeout(function(){ 
                        timeLeft = timeLeft -0.5
                        elem.innerHTML = timeLeft +" Sec"
                     }, 500);
                }else{
                    timeLeft--;

                }
            }
        }

        function doSomething(){
            elem.innerHTML = "Time Over"
            document.body.children[4].children[0].children[0].style.backgroundColor = "gray"
            document.body.children[4].children[0].children[1].style.backgroundColor = "gray"
            document.body.children[4].children[0].children[2].style.backgroundColor = "gray"
            document.body.children[4].children[0].children[3].style.backgroundColor = "gray"
        }


}

function myScore() {
    pointArr.forEach(e=>{
        sumPoint = sumPoint+ Number(e)
    })
   // console.log("total score yaha hai",sumPoint)
  document.getElementById("myScore").value = sumPoint;
  
}