$(function () {
    let dataTable = [
        {
            top: 1,
            filmName: 'Avatar',
            thumbnail: 'https://upload.wikimedia.org/wikipedia/vi/b/b0/Avatar-Teaser-Poster.jpg',
            worldwideGross: '$2,787,965,087',
            release: 2009,
            director: 'James Cameron',
            studio: '20th Century Fox'
        },
        {
            top: 2,
            filmName: 'Avengers: Endgame',
            thumbnail: 'https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg',
            worldwideGross: '$2,750,760,348',
            release: 2019,
            director: 'Anthony Russo & Joe Russo',
            studio: 'Marvel'
        },
        {
            top: 3,
            filmName: 'Titanic',
            thumbnail: 'https://upload.wikimedia.org/wikipedia/vi/a/ab/Titanic_3D_poster_Vietnam.jpg',
            worldwideGross: '$2,186,772,302',
            release: 1997,
            director: 'James Cameron',
            studio: '20th Century Fox'
        },
        {
            top: 4,
            filmName: 'Star Wars: The Force Awakens',
            thumbnail: 'https://upload.wikimedia.org/wikipedia/vi/2/26/Star_Wars_The_Force_Awakens_7.jpg',
            worldwideGross: '$2,068,223,624',
            release: 2017,
            director: 'J. J. Abrams',
            studio: 'Disney'
        },
        {
            top: 5,
            filmName: 'Avengers: Infinity War',
            thumbnail: 'https://upload.wikimedia.org/wikipedia/vi/e/e8/Avengers-Infinity_War-Official-Poster.jpg',
            worldwideGross: '$2,046,909,636',
            release: 2018,
            director: 'Anthony Russo & Joe Russo',
            studio: 'Marvel'
        },
        {
            top: 6,
            filmName: 'Jurassic World',
            thumbnail: 'https://upload.wikimedia.org/wikipedia/vi/0/01/JurassicWorldPoster.jpg',
            worldwideGross: '$1,671,713,208',
            release: 2015,
            director: 'Colin Trevorrow',
            studio: 'Universal'
        },
        {
            top: 7,
            filmName: 'The Avengers',
            thumbnail: 'https://upload.wikimedia.org/wikipedia/vi/f/f9/TheAvengers2012Poster.jpg',
            worldwideGross: '$1,518,812,988',
            release: 2012,
            director: 'Joss Whedon',
            studio: 'Marvel'
        },
        {
            top: 8,
            filmName: 'Fast & Furious 7',
            thumbnail: 'https://upload.wikimedia.org/wikipedia/vi/b/b8/Furious_7_poster.jpg',
            worldwideGross: '$1,511,726,205',
            release: 2015,
            director: 'James Wan',
            studio: 'Universal'
        },
        {
            top: 9,
            filmName: 'Avengers: Age Of Ultron',
            thumbnail: 'https://upload.wikimedia.org/wikipedia/vi/f/f8/Avengers_-_Age_of_Utron_Poster.jpg',
            worldwideGross: '$1,405,413,868',
            release: 2015,
            director: 'Joss Whedon',
            studio: 'Marvel'
        },
        {
            top: 10,
            filmName: 'Black Panther',
            thumbnail: 'https://upload.wikimedia.org/wikipedia/vi/3/31/Chi%E1%BA%BFn_binh_b%C3%A1o_%C4%91en_2018.jpg',
            worldwideGross: '$1,346,630,283',
            release: 2018,
            director: 'Ryan Coogler',
            studio: 'Marvel'
        }];

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

    //sort for string [filmName, director, studio]
    function increaseSortByStr(data, properties) {
        function compare(a, b) {
            if (a[properties].toLowerCase() < b[properties].toLowerCase()) {
                return -1;
            }
            if (a[properties].toLowerCase() > b[properties].toLowerCase()) {
                return 1;
            }
            return 0;
        }
        return data.sort(compare)
    };

    function decreaseSortByStr(data, properties) {
        function compare(a, b) {
            if (a[properties].toLowerCase() < b[properties].toLowerCase()) {
                return 1;
            }
            if (a[properties].toLowerCase() > b[properties].toLowerCase()) {
                return -1;
            }
            return 0;
        }
        return data.sort(compare)
    };

    //sort for number [top, worldwideGross, release]
    function increaseSortByNumber(data, prop) {
        function compare(a, b) {
            if (typeof a[prop] === 'string' & typeof b[prop] === 'string') {
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

    makeTable(dataTable);

    //sort top
    $('tr th:first-child').click(function () {
        if ($('tr th:first-child').attr('class') == 'desc') {
            increaseSortByNumber(dataTable, 'top');
            $('tr th:first-child').attr('class', 'asc');
            $('#top').attr('class', 'fa fa-sort-numeric-asc');
            $('.containerTbody').remove();

        } else if (($('tr th:first-child').attr('class') == 'asc')) {
            decreaseSortByNumber(dataTable, 'top');
            $('tr th:first-child').attr('class', 'desc');
            $('#top').attr('class', 'fa fa-sort-numeric-desc');
            $('.containerTbody').remove();
        };
        makeTable(dataTable);
    })

    //sort gross
    $('tr th:nth-child(4)').click(function () {
        if ($('tr th:nth-child(4)').attr('class') == 'desc') {
            increaseSortByNumber(dataTable, 'worldwideGross');
            $('tr th:nth-child(4)').attr('class', 'asc');
            $('#gross').attr('class', 'fa fa-sort-numeric-asc');
            $('.containerTbody').remove();

        } else if (($('tr th:nth-child(4)').attr('class') == 'asc')) {
            decreaseSortByNumber(dataTable, 'worldwideGross');
            $('tr th:nth-child(4)').attr('class', 'desc');
            $('#gross').attr('class', 'fa fa-sort-numeric-desc');
            $('.containerTbody').remove();
        };
        makeTable(dataTable);
    })

    //sort release
    $('tr th:nth-child(5)').click(function () {
        if ($('tr th:nth-child(5)').attr('class') == 'desc') {
            increaseSortByNumber(dataTable, 'release');
            $('tr th:nth-child(5)').attr('class', 'asc');
            $('#release').attr('class', 'fa fa-sort-numeric-asc');
            $('.containerTbody').remove();

        } else if (($('tr th:nth-child(5)').attr('class') == 'asc')) {
            decreaseSortByNumber(dataTable, 'release');
            $('tr th:nth-child(5)').attr('class', 'desc');
            $('#release').attr('class', 'fa fa-sort-numeric-desc');
            $('.containerTbody').remove();
        };
        makeTable(dataTable);
    })

    //sort film name
    $('tr th:nth-child(2)').click(function () {
        if ($('tr th:nth-child(2)').attr('class') == 'desc') {
            increaseSortByStr(dataTable, 'filmName');
            $('tr th:nth-child(2)').attr('class', 'asc');
            $('#film').attr('class', 'fa fa-sort-alpha-asc');
            $('.containerTbody').remove();

        } else if (($('tr th:nth-child(2)').attr('class') == 'asc')) {
            decreaseSortByStr(dataTable, 'filmName');
            $('tr th:nth-child(2)').attr('class', 'desc');
            $('#film').attr('class', 'fa fa-sort-alpha-desc');
            $('.containerTbody').remove();
        };
        makeTable(dataTable);
    })

    //sort director
    $('tr th:nth-child(6)').click(function () {
        if ($('tr th:nth-child(6)').attr('class') == 'desc') {
            increaseSortByStr(dataTable, 'director');
            $('tr th:nth-child(6)').attr('class', 'asc');
            $('#director').attr('class', 'fa fa-sort-alpha-asc');
            $('.containerTbody').remove();

        } else if (($('tr th:nth-child(6)').attr('class') == 'asc')) {
            decreaseSortByStr(dataTable, 'director');
            $('tr th:nth-child(6)').attr('class', 'desc');
            $('#director').attr('class', 'fa fa-sort-alpha-desc');
            $('.containerTbody').remove();
        };
        makeTable(dataTable);
    })

    //sort director
    $('tr th:nth-child(7)').click(function () {
        if ($('tr th:nth-child(7)').attr('class') == 'desc') {
            increaseSortByStr(dataTable, 'studio');
            $('tr th:nth-child(7)').attr('class', 'asc');
            $('#studio').attr('class', 'fa fa-sort-alpha-asc');
            $('.containerTbody').remove();

        } else if (($('tr th:nth-child(7)').attr('class') == 'asc')) {
            decreaseSortByStr(dataTable, 'studio');
            $('tr th:nth-child(7)').attr('class', 'desc');
            $('#studio').attr('class', 'fa fa-sort-alpha-desc');
            $('.containerTbody').remove();
        };
        makeTable(dataTable);
        if (!$('tr th:nth-child(7)').attr('class')) {
            $('tr th > i').attr('class', '')
        };
    })

});

