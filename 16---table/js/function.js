//get data from server
let dataTable = [];
$.ajax({
    url: 'https://ducnguyenh.github.io/16---table/js/data.json',
    type: 'GET',
    dataType: 'json',
}).done(function (data) {
    dataTable = data;
    makeTable(dataTable);
})

//make table
function makeTable(data) {
    let tbody = $('<tbody/>').addClass('containerTbody');
    $.each(data, function (rowIndex, r) {
        let row = $('<tr/>');
        $.each(r, function (colIndex, c) {
            if (colIndex == 'thumbnail') {
                row.append($('<td/>').addClass('poster').append('<img src = ' + c + '>'));
            } else {
                row.append($('<td/>').text(c))
            }
        });

        //add class for td
        rowIndex % 2 == 0 ? row.addClass('even') : row.addClass('odd')

        tbody.append(row);
    });
    return tbody.insertAfter('thead');
}

function sortColumn(thElement) {
    thElement = $(thElement);
    const iElement = thElement.children();
    const column = thElement.attr('data-column');

    // default class
    $('i.fa').attr('class', 'fa fa-sort');

    // Sort asc
    if (thElement.attr('data-order') === 'asc') {
        thElement.attr('data-order', 'desc');
        iElement.removeClass('fa-sort-asc').addClass('fa-sort-desc');
        sort(column, 1);
    }
    // Sort desc
    else {
        thElement.attr('data-order', 'asc');
        iElement.removeClass('fa-sort-desc').addClass('fa-sort-asc');
        sort(column, -1);
    }
    $('.containerTbody').remove();
    makeTable(dataTable);
}

function sort(column, order) {
    // Sort by column (1 is asc, -1 is desc)
    dataTable.sort(function (a, b) {
        let x = a[column];
        let y = b[column];

        if (typeof x == 'string') x = x.toLocaleLowerCase()
        if (typeof y == 'string') y = y.toLocaleLowerCase()

        if (x < y) return -order;
        if (x > y) return order;

        return 0;
    })
}