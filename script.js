(() => {
    let poles, activePlayer, round, choosePlayer, restartBtn;
    poles = Array.prototype.slice.call(document.querySelectorAll(".pole"));
    restartBtn = document.querySelector('.restart')
    init();
    let game = (function game() {
        for(let i = 0, size = poles.length; i < size; i++) {
            poles[i].style.backgroundColor = '#ccc';
            let pole = document.getElementById([i +1]);
            pole.addEventListener('click', () => {
                poles[i].style.backgroundColor = '#fff';
                poles[i].classList.add('disable');
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
        activePlayer === 2 ? activePlayer = 1 : activePlayer = 2;
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
        for(let i in matrix) {
            let items = matrix[i].map(key => poles[key]);
            if(items.every(itm => itm.innerHTML === "X") || items.every(itm => itm.innerHTML === "O")) {
                const markup = `<h1 class="result_banner">Player ${activePlayer} Win!</h1>`;
                items.every(itm => itm.style.backgroundColor = '#22dc2e');
                restartBtn.style.visibility = "visible";
                document.querySelector('.game__table').insertAdjacentHTML('beforeend', markup);
                return false;
            }
        }
        if(round >= 8) {
            const markup = `<h1 class="result_banner">DRAW</h1>`;
            restartBtn.style.visibility = "visible";
            document.querySelector('.game__table').insertAdjacentHTML('beforeend', markup);
        }
    }
    restartBtn.addEventListener('click', () => {
        init();
        document.querySelector('.result_banner').remove();
    });
    function init() {
        activePlayer = 1;
        round = 0;
        restartBtn.style.visibility = "hidden";
        poles.every(item => item.innerHTML = " ");
         for(let i = 0; i < poles.length; i++) {
            poles[i].classList.remove('disable');
            poles[i].style.backgroundColor = '#ccc';
        }
    }
})();