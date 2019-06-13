$(function () {
    //--------------------change theme--------------------------------
    $('.theme1').click(
        function () {
            $('#color-theme').attr('href', 'theme1.css')
        }
    )

    $('.theme2').click(
        function () {
            $('#color-theme').attr('href', 'theme2.css')
        }
    )
    //--------------------variable declared--------------------------------
    let expression = '';
    let expressionArray = [];
    let screenArray = [];
    let bracket = 0;
    let ansOnScreen = false;
    let ans = null;
    let error = false;
    let inverted = false;
    //--------------------default screen--------------------------------
    function original() {
        expression = '';
        expressionArray = [];
        screenArray = [];
        bracket = 0;
        ansOnScreen = false;
        ans = null;
        error = false;
        inverted = false;
        $('.history').html('');
        $('.screentext').html('');
        $('.suggest').html('');
    }

    //--------------------function for screen--------------------------------
    function toInverted() {
        $('.math .inv').toggle();
        inverted = inverted ? false : true;
    }

    function adjustbracket(num) {
        $('.suggest').html(')'.repeat(num));
    }

    function writeToScreen(mode, text) {
        if (mode == 'append') {
            if (error) {
                screenArray = [];
            }
            error = false;
            screenArray.push(text);
        } else if (mode == 'write') {
            screenArray = [text];
        } else if (mode == 'delete') {
            let popped = screenArray.pop();
            if (/[(]$/g.test(popped)) {
                bracket > 0 ? bracket-- : bracket = 0;
                adjustbracket(bracket);
            }
        }

        $('.screentext').html(screenArray.join(''));

        if (inverted) {
            toInverted();
        }
    }

    function addToExpression(text) {
        expressionArray.push(text);
        expression += text;
    }

    function removeFromExpression() {
        let count = expressionArray.pop().length;
        expression = expression.slice(0, -count);
    }

    // --------------------calculator history --------------------------------
    $('.equal').click(
        function () {
            if (ansOnScreen) {
                expressionArray = [ans];
            }

            addToExpression(')'.repeat(bracket));

            try {
                math.eval(expressionArray.join('')).toPrecision(11);
            } catch (e) {
                error = true;
            }

            if (error) {
                original();
                error = true;
                writeToScreen('write', 'Syntax Error');
            } else {
                $('.history').html($('.screentext').html().replace(/Ans/, ans) + ')'.repeat(bracket) + ' =');
                ans = math.eval(expressionArray.join('')).toPrecision(11);
                writeToScreen('write', ans.toString().replace(/(\.0+$)|(0+$)/g, ''));
                $('.suggest').html('');

                let el = $('#screentext');
                let newone = el.clone(true);
                el.before(newone);
                $(".animated:last").remove();

                ansOnScreen = true;
            }
            bracket = 0;
            expression = '';
            expressionArray = [];
        }
    );

    // --------------------clear the screen --------------------------------
    $('.clear').click(
        function () {
            original();
        }
    );

    // --------------------invert functions (Inv)---------------------
    $('.invert').click(
        function () {
            toInverted();
        }
    );

    // --------------------delete 1 symbol---------------------
    $('.del').click(
        function () {
            if (inverted) {
                toInverted();
            }

            if (ansOnScreen) {
                writeToScreen('write', '');
                ansOnScreen = false;
            }

            if (expressionArray.length) {
                removeFromExpression();
                writeToScreen('delete', '');
            }
        }
    );

    // -------------------add a number to the screen -----------------------
    $('.number').click(
        function () {
            let key = $(this).attr('key');

            if (inverted) {
                toInverted();
            }

            if (ansOnScreen) {
                $('.history').html('Ans = ' + $('.screentext').html());
                writeToScreen('write', '');
                ansOnScreen = false;
            }

            addToExpression(key);
            writeToScreen('append', $(this).html());
        }
    );

    // -----------add an operator to the screen if there's no other operator ----------
    $('.operator').click(
        function () {
            let key = $(this).attr('key');
            let char = $(this).attr('char');
            if (inverted) {
                toInverted();
            }

            if (ansOnScreen) {
                $('.history').html('Ans = ' + $('.screentext').html());
                writeToScreen('write', 'Ans');
                expression = ans;
                expressionArray = [ans];
                bracket = 0;
                $('.suggest').html('');
                ansOnScreen = false;
            }

            if ((/[/]$|[*]$/g.test(expression) && (key == '/' || key == '*'))) {
                writeToScreen('write', $('.screentext').html().replace(/[÷]$|[×]$/g, char));
                removeFromExpression();
                addToExpression(key);
            } else if (/[+]$|[-]$/g.test(expression) && (key == '+' || key == '-')) {
                writeToScreen('write', $('.screentext').html().replace(/[+]$|[-]$/g, char));
                removeFromExpression();
                addToExpression(key);
            } else {
                writeToScreen('append', char);
                addToExpression(key);
            }

            ansOnScreen = false;
        }
    );

    //------------add a bracket both to screen and to a global let ----------------
    $('.bracket').click(
        function () {
            let key = $(this).attr('key');
            if (inverted) {
                toInverted();
            }

            if (ansOnScreen) {
                writeToScreen('write', '');
                ansOnScreen = false;
            }

            addToExpression(key);
            writeToScreen('append', key);

            if (key == '(') {
                bracket++;
                adjustbracket(bracket);
            } else if (key == ')') {
                bracket > 0 ? bracket-- : bracket = 0;
                adjustbracket(bracket);
            }
        }
    );

    // --------------------add a function, change bracket ------------------------
    $('.math').click(
        function () {
            let key1 = $(this).attr('key1');
            let key2 = $(this).attr('key2');

            if (ansOnScreen) {
                writeToScreen('write', '');
                ansOnScreen = false;
            }

            if (!inverted) {
                addToExpression(key1);
            } else {
                addToExpression(key2);
            }

            writeToScreen('append', $(this).html() + '(');

            bracket++;
            adjustbracket(bracket);

            if (inverted) {
                toInverted();
            }
        }
    );

    // --------------------append the old history to the expression---------------------
    $('.answer').click(
        function () {
            if (ansOnScreen) {
                writeToScreen('write', '');
                ansOnScreen = false;
            }
            if (!/[Ans]$|[0-9]$|[π]$|[e]$/g.test($('.screentext').html())) {
                addToExpression(ans.toString());
                writeToScreen('append', 'Ans');
            }
        }
    );

    // --------------------percent---------------------
    $('.percent').click(
        function () {
            let element = Number($('.screentext').html()) / 100;
            let temp = $('.screentext').html() + $('.percent').attr('key');
            $('.history').html(temp + ' =');
            writeToScreen('write', element.substr(0, 10));
        }
    )

    // -------------------- convert to radian--------------------
    $('.rad').click(
        function () {
            let element = Number($('.screentext').html()) * Math.PI / 180;
            let temp = 'Rad(' + $('.screentext').html() + ')';
            $('.history').html(temp + ' =');
            writeToScreen('write', element.toPrecision(10));
        }
    )
});