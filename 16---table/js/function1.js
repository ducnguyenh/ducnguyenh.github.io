$(function () {
    function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let data = JSON.parse(this.responseText);
                makeTable(data.dataTable);

                $('tr th:first-child').click(function () {
                    $('tr th i').attr('class', "fa fa-sort");
                    if ($('tr th:first-child').attr('class') == 'desc') {
                        increaseSortByNumber(data.dataTable, 'top');
                        $('tr th:first-child').attr('class', 'asc');
                        $('#top').attr('class', 'fa fa-sort-numeric-asc');
                        $('.containerTbody').remove();

                    } else if (($('tr th:first-child').attr('class') == 'asc')) {
                        decreaseSortByNumber(data.dataTable, 'top');
                        $('tr th:first-child').attr('class', 'desc');
                        $('#top').attr('class', 'fa fa-sort-numeric-desc');
                        $('.containerTbody').remove();
                    };
                    makeTable(data.dataTable);
                })

                //sort gross
                $('tr th:nth-child(4)').click(function () {
                    $('tr th i').attr('class', "fa fa-sort");
                    if ($('tr th:nth-child(4)').attr('class') == 'desc') {
                        increaseSortByNumber(data.dataTable, 'worldwideGross');
                        $('tr th:nth-child(4)').attr('class', 'asc');
                        $('#gross').attr('class', 'fa fa-sort-numeric-asc');
                        $('.containerTbody').remove();

                    } else if (($('tr th:nth-child(4)').attr('class') == 'asc')) {
                        decreaseSortByNumber(data.dataTable, 'worldwideGross');
                        $('tr th:nth-child(4)').attr('class', 'desc');
                        $('#gross').attr('class', 'fa fa-sort-numeric-desc');
                        $('.containerTbody').remove();
                    };
                    makeTable(data.dataTable);
                })

                //sort release
                $('tr th:nth-child(5)').click(function () {
                    $('tr th i').attr('class', "fa fa-sort");
                    if ($('tr th:nth-child(5)').attr('class') == 'desc') {
                        increaseSortByNumber(data.dataTable, 'release');
                        $('tr th:nth-child(5)').attr('class', 'asc');
                        $('#release').attr('class', 'fa fa-sort-numeric-asc');
                        $('.containerTbody').remove();

                    } else if (($('tr th:nth-child(5)').attr('class') == 'asc')) {
                        decreaseSortByNumber(data.dataTable, 'release');
                        $('tr th:nth-child(5)').attr('class', 'desc');
                        $('#release').attr('class', 'fa fa-sort-numeric-desc');
                        $('.containerTbody').remove();
                    };
                    makeTable(data.dataTable);
                })

                //sort film name
                $('tr th:nth-child(2)').click(function () {
                    $('tr th i').attr('class', "fa fa-sort");
                    if ($('tr th:nth-child(2)').attr('class') == 'desc') {
                        increaseSortByStr(data.dataTable, 'filmName');
                        $('tr th:nth-child(2)').attr('class', 'asc');
                        $('#film').attr('class', 'fa fa-sort-alpha-asc');
                        $('.containerTbody').remove();

                    } else if (($('tr th:nth-child(2)').attr('class') == 'asc')) {
                        decreaseSortByStr(data.dataTable, 'filmName');
                        $('tr th:nth-child(2)').attr('class', 'desc');
                        $('#film').attr('class', 'fa fa-sort-alpha-desc');
                        $('.containerTbody').remove();
                    };
                    makeTable(data.dataTable);
                })

                //sort director
                $('tr th:nth-child(6)').click(function () {
                    $('tr th i').attr('class', "fa fa-sort");
                    if ($('tr th:nth-child(6)').attr('class') == 'desc') {
                        increaseSortByStr(data.dataTable, 'director');
                        $('tr th:nth-child(6)').attr('class', 'asc');
                        $('#director').attr('class', 'fa fa-sort-alpha-asc');
                        $('.containerTbody').remove();

                    } else if (($('tr th:nth-child(6)').attr('class') == 'asc')) {
                        decreaseSortByStr(data.dataTable, 'director');
                        $('tr th:nth-child(6)').attr('class', 'desc');
                        $('#director').attr('class', 'fa fa-sort-alpha-desc');
                        $('.containerTbody').remove();
                    };
                    makeTable(data.dataTable);
                })

                //sort studio
                $('tr th:nth-child(7)').click(function () {
                    $('tr th i').attr('class', "fa fa-sort");
                    if ($('tr th:nth-child(7)').attr('class') == 'desc') {
                        increaseSortByStr(data.dataTable, 'studio');
                        $('tr th:nth-child(7)').attr('class', 'asc');
                        $('#studio').attr('class', 'fa fa-sort-alpha-asc');
                        $('.containerTbody').remove();

                    } else if (($('tr th:nth-child(7)').attr('class') == 'asc')) {
                        decreaseSortByStr(data.dataTable, 'studio');
                        $('tr th:nth-child(7)').attr('class', 'desc');
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
        function compare(a, b) {
            return a[properties].localeCompare(b[properties]);
        }
        return data.sort(compare)
    }

    function decreaseSortByStr(data, properties) {
        function compare(a, b) {
            return b[properties].localeCompare(a[properties]);
        }
        return data.sort(compare)
    };

    //sort to number [top, worldwideGross, release]
    function increaseSortByNumber(data, prop) {
        function compare(a, b) {
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
        }
        return data.sort(compare);
    }

    function decreaseSortByNumber(data, prop) {
        function compare(a, b) {
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
        }
        return data.sort(compare);
    }

    //make data
    loadDoc();
});

