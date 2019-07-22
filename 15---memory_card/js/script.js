$(function () {
    const cards = document.querySelectorAll('.card');
    let counter = 0;
    let imgFound = 0;
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    //draw cards
    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');

        if (!hasFlippedCard) {
            //first click
            hasFlippedCard = true;
            firstCard = this;
            counter += 1;
            $('#counter').html("" + counter);
            return;
        }

        //second click
        secondCard = this;
        counter += 1;
        lockBoard = true;

        $('#counter').html("" + counter);
        checkMatch();
    }

    //do cards match?
    function checkMatch() {
        let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        setTimeout(() => {
            firstCard.style.opacity = '0';
            firstCard.style.pointerEvents = 'none';
            secondCard.style.opacity = '0';
            secondCard.style.pointerEvents = 'none';

            resetBoard();
        }, 800);

        imgFound++;
        if (imgFound == $('.card').length / 2) {
            $("#counter").prepend('<span id="success">You found all cards with </span>');
        };
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        hasFlippedCard = false
        lockBoard = false;
        firstCard = null;
        secondCard = null;
    }

    function resetGame() {
        shuffle();
        counter = 0;
        imgFound = 0;
        $('#success').remove();
        $('#counter').html("" + counter);
        $('.card').removeClass('flip');
        $('.card').css({ 'pointerEvents': 'auto', 'opacity': '1' });

        return false;
    }

    //random cards
    function shuffle() {
        cards.forEach(card => {
            let randomPos = Math.ceil(Math.random() * 24);
            card.style.order = randomPos;
        });
    };

    $('.card').click(flipCard);
    $('.reset').click(resetGame);
    shuffle();
})