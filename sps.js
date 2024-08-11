

let rn;

let score = JSON.parse(localStorage.getItem('score'));


if (score === null) {
    score = {
        wins: 0,
        loss: 0,
        ties: 0
    }
}
document.querySelector('.w').textContent = score.wins;
document.querySelector('.l').textContent = score.loss;
document.querySelector('.t').textContent = score.ties;

function box_resize() {
    let box = document.querySelector('.box');
    box.style.width = '200px';
    box.style.height = '100px';
    box.style.background = 'linear-gradient(to right,red,yellow,green)';
}

function rock() {
    box_resize();

    document.querySelector('.ym').innerHTML = '<img src="img/stone.png" style="height: 50px;width: 50px;border-radius: 25px;" alt="">';
    rn = Math.random()
    if (rn >= 0 && rn <= 1 / 3) {
        document.querySelector('.boxp').innerHTML = 'RESULT IS TIE';
        document.querySelector('.cm').innerHTML = '<img src="img/stone.png" style="height: 50px;width: 50px;border-radius: 25px;" alt="">';

        score.ties += 1;
        document.querySelector('.sc').innerHTML = `Score: wins ${score.wins},Losses ${score.loss}, Ties ${score.ties}`;
    }
    if (rn >= 1 / 3 && rn <= 2 / 3) {
        document.querySelector('.boxp').innerHTML = 'YOU LOSSED';

        document.querySelector('.cm').innerHTML = '<img src="img/paper.png" style="height: 50px;width: 50px;border-radius: 25px;" alt="">';

        score.loss += 1;
        document.querySelector('.sc').innerHTML = `Score: wins ${score.wins},Losses ${score.loss}, Ties ${score.ties}`;


    }
    if (rn >= 2 / 3 && rn <= 1) {
        document.querySelector('.boxp').innerHTML = 'YOU WON';
        document.querySelector('.cm').innerHTML = '<img src="img/scissor.png" style="height: 50px;width: 50px;border-radius: 25px;" alt="">';

        score.wins += 1;
        document.querySelector('.sc').innerHTML = `Score: wins ${score.wins},Losses ${score.loss}, Ties ${score.ties}`;

    }
    localStorage.setItem('score', JSON.stringify(score))
    console.log(localStorage.getItem('score'));





}
function paper() {
    box_resize();
    document.querySelector('.ym').innerHTML = '<img src="img/paper.png" style="height: 50px;width: 50px;border-radius: 25px;" alt="">';
    rn = Math.random()
    if (rn >= 0 && rn <= 1 / 3) {
        document.querySelector('.boxp').innerHTML = 'YOU WON';
        document.querySelector('.cm').innerHTML = '<img src="img/stone.png" style="height: 50px;width: 50px;border-radius: 25px;" alt="">';

        score.wins += 1;
        document.querySelector('.sc').innerHTML = `Score: wins ${score.wins},Losses ${score.loss}, Ties ${score.ties}`;

    }
    if (rn >= 1 / 3 && rn <= 2 / 3) {
        document.querySelector('.boxp').innerHTML = 'RESULT IS TIE';

        document.querySelector('.cm').innerHTML = '<img src="img/paper.png" style="height: 50px;width: 50px;border-radius: 25px;" alt="">';

        score.ties += 1;
        document.querySelector('.sc').innerHTML = `Score: wins ${score.wins},Losses ${score.loss}, Ties ${score.ties}`;

    }
    if (rn >= 2 / 3 && rn <= 1) {
        document.querySelector('.boxp').innerHTML = 'YOU LOSSED';

        document.querySelector('.cm').innerHTML = '<img src="img/scissor.png" style="height: 50px;width: 50px;border-radius: 25px;" alt="">';

        score.loss += 1;
        document.querySelector('.sc').innerHTML = `Score: wins ${score.wins},Losses ${score.loss}, Ties ${score.ties}`;

    }
    localStorage.setItem('score', JSON.stringify(score))
    console.log(localStorage.getItem('score'));


}
function scissor() {
    box_resize();
    document.querySelector('.ym').innerHTML = '<img src="img/scissor.png" style="height: 50px;width: 50px;border-radius: 25px;" alt="">';
    rn = Math.random()
    if (rn >= 0 && rn <= 1 / 3) {
        document.querySelector('.boxp').innerHTML = 'YOU LOSSED';

        document.querySelector('.cm').innerHTML = '<img src="img/stone.png" style="height: 50px;width: 50px;border-radius: 25px;" alt="">';

        score.loss += 1;
        document.querySelector('.sc').innerHTML = `Score: wins ${score.wins},Losses ${score.loss}, Ties ${score.ties}`;

    }
    if (rn >= 1 / 3 && rn <= 2 / 3) {
        document.querySelector('.boxp').innerHTML = 'YOU WON';
        document.querySelector('.cm').innerHTML = '<img src="img/paper.png" style="height: 50px;width: 50px;border-radius: 25px;" alt="">';

        score.wins += 1;
        document.querySelector('.sc').innerHTML = `Score: wins ${score.wins},Losses ${score.loss}, Ties ${score.ties}`;

    }
    if (rn >= 2 / 3 && rn <= 1) {
        document.querySelector('.boxp').innerHTML = 'RESULT IS TIE';

        document.querySelector('.cm').innerHTML = '<img src="img/scissor.png" style="height: 50px;width: 50px;border-radius: 25px;" alt="">';

        score.ties += 1;
        document.querySelector('.sc').innerHTML = `Score: wins ${score.wins},Losses ${score.loss}, Ties ${score.ties}`;

    }
    localStorage.setItem('score', JSON.stringify(score))
    console.log(localStorage.getItem('score'));



}

function reset() {
    document.querySelector('.cm').innerHTML = '';
    document.querySelector('.ym').innerHTML = '';
    document.querySelector('.boxp').innerHTML = 'RESULT';


    score = {
        wins: 0,
        loss: 0,
        ties: 0
    }
    document.querySelector('.sc').innerHTML = `Score: wins ${score.wins},Losses ${score.loss}, Ties ${score.ties}`;

    localStorage.removeItem('score');
    console.log(localStorage.getItem('score'));

}

