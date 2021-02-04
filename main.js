let dice = document.getElementById("dice");
let player = 1;
let currentToken;
let diceNum;
let playerOnePos = [0,0,0,0];
let playerTwoPos = [0,0,0,0];

dice.addEventListener("click", () => {
    diceNum = Math.floor(Math.random() * 6) + 1;
    //dice.style.pointerEvents = 'none';
    console.log(diceNum);
    if(player === 1) {
        let out = false;
        for(let x in playerOnePos) {
            console.log(x);
            if(playerOnePos[x] == 0) {
                console.log('hi');
                out = false;
            } else {
                out = true;
                console.log('hi2');
                break;
            }
        }

        let playerOnePrevPos = [...playerOnePos];
        console.log('outofloop');
        if(!out  && diceNum !== 6) {
            console.log('still in!');
        } else if (!out && diceNum === 6) {
            console.log('hiiiiiiii');
            document.getElementById("token00").onclick = () => {
                playerOnePos[0] = 1;
                document.getElementById(`tok0place`).innerHTML = "";
                document.getElementById('block-2').innerHTML = '<div class="token token0" id="token00"></div>';
                console.log(playerOnePos);
                dice.style.pointerEvents = 'all';
                document.getElementById("token00").onclick = () => {
                    event.preventDefault()
                }
                document.getElementById("token01").onclick = () => {
                    event.preventDefault()
                }
                document.getElementById("token02").onclick = () => {
                    event.preventDefault()
                }
                document.getElementById("token03").onclick = () => {
                    event.preventDefault()
                }
            }
            document.getElementById("token01").onclick = () => {
                playerOnePos[1] = 1;
                document.getElementById(`tok1place`).innerHTML = "";
                document.getElementById('block-2').innerHTML = '<div class="token token0" id="token01"></div>';
                console.log(playerOnePos);
                dice.style.pointerEvents = 'all';
                document.getElementById("token00").onclick = () => {
                    event.preventDefault()
                }
                document.getElementById("token01").onclick = () => {
                    event.preventDefault()
                }
                document.getElementById("token02").onclick = () => {
                    event.preventDefault()
                }
                document.getElementById("token03").onclick = () => {
                    event.preventDefault()
                }
            }
            document.getElementById("token02").onclick = () => {
                playerOnePos[2] = 1;
                document.getElementById(`tok2place`).innerHTML = "";
                document.getElementById('block-2').innerHTML = '<div class="token token0" id="token02"></div>';
                dice.style.pointerEvents = 'all';
                console.log(playerOnePos);
                document.getElementById("token00").onclick = () => {
                    event.preventDefault()
                }
                document.getElementById("token01").onclick = () => {
                    event.preventDefault()
                }
                document.getElementById("token02").onclick = () => {
                    event.preventDefault()
                }
                document.getElementById("token03").onclick = () => {
                    event.preventDefault()
                }
            }
            document.getElementById("token03").onclick = () => {
                playerOnePos[3] = 1;
                document.getElementById(`tok3place`).innerHTML = "";
                document.getElementById('block-2').innerHTML = '<div class="token token0" id="token03"></div>';
                console.log(playerOnePos);
                dice.style.pointerEvents = 'all';
                document.getElementById("token00").onclick = () => {
                    event.preventDefault()
                }
                document.getElementById("token01").onclick = () => {
                    event.preventDefault()
                }
                document.getElementById("token02").onclick = () => {
                    event.preventDefault()
                }
                document.getElementById("token03").onclick = () => {
                    event.preventDefault()
                }
            }
        } else if (out && diceNum !== 6) {

        }
    } else if(player === 2) {

    }
    /*console.log(diceNum, player);
    if(player > 1) {
        player = 1;
    } else {
        ++player;
    }*/
});

