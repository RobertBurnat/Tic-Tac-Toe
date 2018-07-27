(function() {
    let poles = Array.prototype.slice.call(document.querySelectorAll(".pole"));
    let activePlayer = 0;
    let disabledPole = [];
    var round = 0;
    var restart = document.querySelector('.restart');
    restart.classList.add('hide');
    var game = (function game() {
        for(let i = 0, size = poles.length; i < size; i++) {
            let pole = document.getElementById([i +1]);
            pole.addEventListener('click', function() {
                let disablePole = poles[i].classList.add('disable');
                if(activePlayer === 0) {
                    poles[i].innerHTML = 'X';
                    nextPlayer();
                    checkWinner();
                } else {
                    poles[i].innerHTML = 'O';
                    nextPlayer();
                    checkWinner();
                }
        });
    }
})();
    
    function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        round++;
    }
    
    function checkWinner() {
        let matrix = [
            //horizontal
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            //Vertical
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            //Diagonal
            [0, 4, 8],
            [2, 4, 6]
            
        ]
//        var player1 = 'X';
//        var player2 = 'O'
//        if((poles[0].innerHTML === player1 && poles[1].innerHTML === player1 && poles[2].innerHTML === player1)
//          ||
//          (poles[3].innerHTML === player1 && poles[4].innerHTML === player1 && poles[5].innerHTML === player1)
//          ||
//          (poles[6].innerHTML === player1 && poles[7].innerHTML === player1 && poles[8].innerHTML === player1)
//          ||
//          (poles[0].innerHTML === player1 && poles[3].innerHTML === player1 && poles[6].innerHTML === player1)
//          ||
//          (poles[1].innerHTML === player1 && poles[4].innerHTML === player1 && poles[7].innerHTML === player1)
//          ||
//          (poles[2].innerHTML === player1 && poles[5].innerHTML === player1 && poles[8].innerHTML === player1)
//          ||
//          (poles[0].innerHTML === player1 && poles[4].innerHTML === player1 && poles[8].innerHTML === player1)
//          ||
//          (poles[2].innerHTML === player1 && poles[4].innerHTML === player1 && poles[6].innerHTML === player1)) {
//            alert('Player One WIN');
//            restart.classList.remove('hide');
//            
//        } else if((poles[0].innerHTML === player2 && poles[1].innerHTML === player2 && poles[2].innerHTML === player2)
//          ||
//          (poles[3].innerHTML === player2 && poles[4].innerHTML === player2 && poles[5].innerHTML === player2)
//          ||
//          (poles[6].innerHTML === player2 && poles[7].innerHTML === player2 && poles[8].innerHTML === player2)
//          ||
//          (poles[0].innerHTML === player2 && poles[3].innerHTML === player2 && poles[6].innerHTML === player2)
//          ||
//          (poles[1].innerHTML === player2 && poles[4].innerHTML === player2 && poles[7].innerHTML === player2)
//          ||
//          (poles[2].innerHTML === player2 && poles[5].innerHTML === player2 && poles[8].innerHTML === player2)
//          ||
//          (poles[0].innerHTML === player2 && poles[4].innerHTML === player2 && poles[8].innerHTML === player2)
//          ||
//          (poles[2].innerHTML === player2 && poles[4].innerHTML === player2 && poles[6].innerHTML === player2)) {
//            alert('Player Two WIN');
//            restart.classList.remove('hide');
//        } else if(round >= 9) {
//            alert('DRAW');
//            restart.classList.remove('hide');
//        }
    }
    
})();