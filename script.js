(function() {
    let poles = Array.prototype.slice.call(document.querySelectorAll(".pole"));
    let activePlayer = 0;
    let arrOne = [];
    let arrTwo = [];
    let playerOnePoles;
    let playerTwoPoles;
    let disabledPole = [];
    
    
    var game = (function game() {
        for(let i = 0, size = poles.length; i < size; i++) {
            let pole = document.getElementById([i +1]);
            pole.addEventListener('click', function() {
                if(activePlayer === 0) {
                    poles[i].innerHTML = 'X';
                    poles[i].classList.add('disable');
                    playerOnePoles = poles[i].getAttribute('id');
                    playerOnePoles = parseInt(playerOnePoles, 10);
                    arrOne.push(playerOnePoles);
                    nextPlayer();
                    checkWinner();
                    console.log(arrOne);
                } else {
                poles[i].innerHTML = 'O';
                playerTwoPoles = poles[i].getAttribute('id');
                poles[i].classList.add('disable');
                playerTwoPoles = parseInt(playerTwoPoles, 10);
                arrTwo.push(playerTwoPoles);
                nextPlayer();
                checkWinner();
                console.log(arrTwo);
            }
        });
    }
})();
    
    function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    }
    
    function checkWinner() {
        if((arrOne[0] === 1 && arrOne[1] === 2 && arrOne[2] === 3) || (arrOne[0] === 1 && arrOne[1] === 5 && arrOne[2] === 9) || (arrOne[0] === 1 && arrOne[1] === 4 && arrOne[2] === 7 )) {
            console.log('winner chicken dinner');
        }
    }
    
})();