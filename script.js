(() => {
    let poles, activePlayer, round, choosePlayer, restartBtn, gamePlaying, activePlayerBanner;
    poles = Array.prototype.slice.call(document.querySelectorAll(".pole"));
    restartBtn = document.querySelector('.restart');
    init();
    let game = (function game() {
        if(gamePlaying) {
                for(let i = 0, size = poles.length; i < size; i++) {
                    poles[i].style.backgroundColor = '#ccc';
                    let pole = document.getElementById([i +1]);
                    pole.addEventListener('click', () => {
                        if(gamePlaying) {
                        poles[i].style.backgroundColor = '#fff';
                        poles[i].classList.add('disable');
                        if(activePlayer === 1) {
                            poles[i].innerHTML = 'O';
                            checkWinner();
                        } else {
                            poles[i].innerHTML = 'X';
                            checkWinner();
                        }
                    }
                });
            }
        }
})();
    
    function nextPlayer() {
        if(gamePlaying) {
            activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
            console.log(activePlayer);
            round++;
        }
    }
    
    function checkWinner() {
        if(gamePlaying) {
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
                if(items.every(itm => itm.innerHTML === "O") || items.every(itm => itm.innerHTML === "X")) {
                    const markup = `<h1 class="result_banner">Player ${activePlayer} Win!</h1>`;
                    items.every(itm => itm.style.backgroundColor = '#22dc2e');
                    restartBtn.style.visibility = "visible";
                    document.querySelector('.game__table').insertAdjacentHTML('beforeend', markup);
                    gamePlaying = false;
                    return;
                }
            }
            if(round >= 8) {
                const markup = `<h1 class="result_banner" style="color: orange;">DRAW</h1>`;
                restartBtn.style.visibility = "visible";
                document.querySelector('.game__table').insertAdjacentHTML('beforeend', markup);
            }
            nextPlayer();
        }
    }
    restartBtn.addEventListener('click', () => {
        init();
        document.querySelectorAll('.result_banner').forEach(e => e.remove(e));
    });
    
    function init() {
        activePlayer = 1;
        round = 0;
        gamePlaying = true;
        restartBtn.style.visibility = "hidden";
        poles.every(item => item.innerHTML = " ");
         for(let i = 0; i < poles.length; i++) {
            poles[i].classList.remove('disable');
            poles[i].style.backgroundColor = '#ccc';
        }
    }
})();