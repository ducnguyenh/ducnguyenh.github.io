$(function () {
    //get data from server and sort
    function loadData() {
        let _col1 = $('tr th:first-child');
        let _col2 = $('tr th:nth-child(2)');
        let _col4 = $('tr th:nth-child(4)');
        let _col5 = $('tr th:nth-child(5)');
        let _col6 = $('tr th:nth-child(6)');
        let _col7 = $('tr th:nth-child(7)');
        let _iTag = $('tr th i');

        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let data = JSON.parse(this.responseText);
                makeTable(data.dataTable);

                //sort top
                _col1.click(function () {
                    _iTag.attr('class', "fa fa-sort");
                    if (_col1.attr('class') == 'desc') {
                        increaseSortByNumber(data.dataTable, 'top');
                        _col1.attr('class', 'asc');
                        $('#top').attr('class', 'fa fa-sort-numeric-asc');
                        $('.containerTbody').remove();

                    } else if ((_col1.attr('class') == 'asc')) {
                        decreaseSortByNumber(data.dataTable, 'top');
                        _col1.attr('class', 'desc');
                        $('#top').attr('class', 'fa fa-sort-numeric-desc');
                        $('.containerTbody').remove();
                    };
                    makeTable(data.dataTable);
                })

                //sort gross
                _col4.click(function () {
                    _iTag.attr('class', "fa fa-sort");
                    if (_col4.attr('class') == 'desc') {
                        increaseSortByNumber(data.dataTable, 'worldwideGross');
                        _col4.attr('class', 'asc');
                        $('#gross').attr('class', 'fa fa-sort-numeric-asc');
                        $('.containerTbody').remove();

                    } else if ((_col4.attr('class') == 'asc')) {
                        decreaseSortByNumber(data.dataTable, 'worldwideGross');
                        _col4.attr('class', 'desc');
                        $('#gross').attr('class', 'fa fa-sort-numeric-desc');
                        $('.containerTbody').remove();
                    };
                    makeTable(data.dataTable);
                })

                //sort release
                _col5.click(function () {
                    _iTag.attr('class', "fa fa-sort");
                    if (_col5.attr('class') == 'desc') {
                        increaseSortByNumber(data.dataTable, 'release');
                        _col5.attr('class', 'asc');
                        $('#release').attr('class', 'fa fa-sort-numeric-asc');
                        $('.containerTbody').remove();

                    } else if ((_col5.attr('class') == 'asc')) {
                        decreaseSortByNumber(data.dataTable, 'release');
                        _col5.attr('class', 'desc');
                        $('#release').attr('class', 'fa fa-sort-numeric-desc');
                        $('.containerTbody').remove();
                    };
                    makeTable(data.dataTable);
                })

                //sort film name
                _col2.click(function () {
                    _iTag.attr('class', "fa fa-sort");
                    if (_col2.attr('class') == 'desc') {
                        increaseSortByStr(data.dataTable, 'filmName');
                        _col2.attr('class', 'asc');
                        $('#film').attr('class', 'fa fa-sort-alpha-asc');
                        $('.containerTbody').remove();

                    } else if ((_col2.attr('class') == 'asc')) {
                        decreaseSortByStr(data.dataTable, 'filmName');
                        _col2.attr('class', 'desc');
                        $('#film').attr('class', 'fa fa-sort-alpha-desc');
                        $('.containerTbody').remove();
                    };
                    makeTable(data.dataTable);
                })

                //sort director
                _col6.click(function () {
                    _iTag.attr('class', "fa fa-sort");
                    if (_col6.attr('class') == 'desc') {
                        increaseSortByStr(data.dataTable, 'director');
                        _col6.attr('class', 'asc');
                        $('#director').attr('class', 'fa fa-sort-alpha-asc');
                        $('.containerTbody').remove();

                    } else if ((_col6.attr('class') == 'asc')) {
                        decreaseSortByStr(data.dataTable, 'director');
                        _col6.attr('class', 'desc');
                        $('#director').attr('class', 'fa fa-sort-alpha-desc');
                        $('.containerTbody').remove();
                    };
                    makeTable(data.dataTable);
                })

                //sort studio
                _col7.click(function () {
                    _iTag.attr('class', "fa fa-sort");
                    if (_col7.attr('class') == 'desc') {
                        increaseSortByStr(data.dataTable, 'studio');
                        _col7.attr('class', 'asc');
                        $('#studio').attr('class', 'fa fa-sort-alpha-asc');
                        $('.containerTbody').remove();

                    } else if ((_col7.attr('class') == 'asc')) {
                        decreaseSortByStr(data.dataTable, 'studio');
                        _col7.attr('class', 'desc');
                        $('#studio').attr('class', 'fa fa-sort-alpha-desc');
                        $('.containerTbody').remove();
                    };
                    makeTable(data.dataTable);
                })
            }
        };
        xhttp.open("GET", "https://ducnguyenh.github.io/16---table/js/data.json", true);
        xhttp.send();
    }
    //print on screen
    loadData();

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

    //sort to string [filmName, director, studio]
    function increaseSortByStr(data, properties) {
        data.sort(function (a, b) {
            return a[properties].localeCompare(b[properties]);
        });
    }

    function decreaseSortByStr(data, properties) {
        data.sort(function (a, b) {
            return b[properties].localeCompare(a[properties]);
        });
    };

    //sort to number [top, worldwideGross, release]
    function increaseSortByNumber(data, prop) {
        data.sort(function (a, b) {
            if (typeof a[prop] === 'string') {
                if (Number(a[prop].replace(/[^0-9]+/g, "")) < Number(b[prop].replace(/[^0-9]+/g, ""))) {
                    return -1;
                }
                if (Number(a[prop].replace(/[^0-9]+/g, "")) > Number(b[prop].replace(/[^0-9]+/g, ""))) {
                    return 1;
                }
                return 0;
            } else {
                return a[prop] - b[prop];
            }
        });
    }

    function decreaseSortByNumber(data, prop) {
        data.sort(function (a, b) {
            if (typeof a[prop] === 'string') {
                if (Number(a[prop].replace(/[^0-9]+/g, "")) < Number(b[prop].replace(/[^0-9]+/g, ""))) {
                    return 1;
                }
                if (Number(a[prop].replace(/[^0-9]+/g, "")) > Number(b[prop].replace(/[^0-9]+/g, ""))) {
                    return -1;
                }
                return 0;
            } else {
                return b[prop] - a[prop];
            }
        });
    }
});

