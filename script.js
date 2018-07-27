(function() {
    let poles = Array.prototype.slice.call(document.querySelectorAll(".pole"));
    let activePlayer = 1
    let disabledPole = [];
    let round = 0;
    let restart = document.querySelector('.restart');
    let gamePlaying = true;
    restart.classList.add('hide');
    let game = (function game() {
        for(let i = 0, size = poles.length; i < size; i++) {
            let pole = document.getElementById([i +1]);
            pole.addEventListener('click', () => {
                let disablePole = poles[i].classList.add('disable');
                if(activePlayer === 1) {
                    poles[i].innerHTML = 'X';
                    checkWinner();
                    nextPlayer();
                } else {
                    poles[i].innerHTML = 'O';
                    checkWinner();
                    nextPlayer();
                }
        });
    }
})();
    
    function nextPlayer() {
        activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
        round++;
        console.log(round);
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
        for(let i in matrix) {
            let items = matrix[i].map(key => poles[key]);
            if(items.every(itm => itm.innerHTML === "X") || items.every(itm => itm.innerHTML === "O")) {
                console.log(`Player ${activePlayer} Win!`)
                return;
            }
        }
        if(round >= 8) {
            console.log('DRAW');
        }
    }
    
})();