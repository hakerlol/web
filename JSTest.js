jQuery('document').ready(function () {
    jQuery('button').on('click', function () {
        var firstNum, secondNum;
        firstNum = parseInt( jQuery('#firstInput').val());
        secondNum =parseInt( jQuery('#secondInput').val());
        alert(firstNum + secondNum);

    });
})