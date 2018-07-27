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
                if(activePlayer === 0) {
                    poles[i].innerHTML = 'X';
                    poles[i].classList.add('disable');
                    nextPlayer();
                    checkWinner();
                } else {
                poles[i].innerHTML = 'O';
                poles[i].classList.add('disable');
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
            let wins = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6]
  ]

  // Loop through each possible win and test if there is a win
  for (let i in wins) {
            let items = wins[i].map(function(key) {
               return poles[key]; 
            });
            if(items.every(function(itm) {
                return itm.innerHTML === 'X'
            })) {
                console.log('Player 1 win');
            } else if(items.every(function(itm) {
                return itm.innerHTML === 'O';
            })) {
                console.log('Wygrał Gracz 2')
            }
        }
    }
})();

//poles = Array.from(document.querySelectorAll('div > span'))
//
//function testWin(player) {
//  // An array of all possible wins
//  let wins = [
//    [0, 1, 2],
//    [3, 4, 5],
//    [6, 7, 8],
//    [0, 3, 6],
//    [1, 4, 7],
//    [2, 5, 8],
//    [0, 4, 8],
//    [2, 4, 6]
//  ]
//
//  // Loop through each possible win and test if there is a win
//  for (let i in wins) {
//    // Get a list item from the poles array based on each win
//    let itms = wins[i].map(key => poles[key])
//    // Test the array to see if it is a valid win
//    if (itms.every(itm => itm.innerHTML === player)) {
//      return {win: true, line: i, player}
//    }
//  }
//  // No win was found, return false
//  return {win: false, player}
//}
//
//
//console.log(JSON.stringify(testWin('X')))
//console.log(JSON.stringify(testWin('O')))