function computerPlay() {
    const play = [
        "rock",
        "paper",
        "scissors"
    ];
    const randomPlay = play[Math.floor(Math.random()*play.length)];
    return randomPlay;

}
console.log(computerPlay());