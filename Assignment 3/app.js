(async function () {
    // Targeting DOM elements
    const genre = document.getElementById('genre-dropdown')
    const year = document.getElementById('year-dropdown')
    const language = document.getElementById('lang-dropdown')
    const rating = document.getElementById('rating-dropdown')

    // Fetching Data
    const res = await fetch("./data.json")
    const films = await res.json()
    // slicing data for dropdown
    const genres = films.map((m) => {
        return m.genres
    })
    const flatArr = genres.flat()

    const Lang = films.map((l) => {
        return l.original_language
    })
    const Rating = films.map((r) => {
        return r.vote_average
    })
    const Year = films.map((y) => {
        let year = y.release_date
        let yr = new Date(year)
        return yr.getFullYear()
    })
    function getYear(year) {
        let y = new Date(year)
        return y.getFullYear()
    }
    // Duplicate element remover function
    function remove_duplicates_es6(arr) {
        let s = new Set(arr);
        let it = s.values();
        return Array.from(it);
    }

    // sorted data for dropdown
    const sortedGenre = remove_duplicates_es6(flatArr);
    const sortedYears = remove_duplicates_es6(Year);
    const sortedLang = remove_duplicates_es6(Lang);
    const sortedRating = remove_duplicates_es6(Rating);

    // Time convertor

    function timeConvert(n) {
        let num = n;
        let hours = (num / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        return `${rhours}h ${rminutes}min`
    }


    // Creating Option element in Select Box
    sortedGenre.filter((cat) => {
        const newGenreList = document.createElement('option')
        genre.appendChild(newGenreList).innerHTML = cat
    })
    sortedYears.sort().filter((yr) => {
        const newYearList = document.createElement('option')
        year.appendChild(newYearList).innerHTML = yr
    })
    sortedLang.sort().filter((lang) => {
        const newLangList = document.createElement('option')
        language.appendChild(newLangList).innerHTML = lang
    })
    sortedRating.sort().filter((rate) => {
        const newRateList = document.createElement('option')
        rating.appendChild(newRateList).innerHTML = rate
    })

    // Creating table Row in Table element dynamically

    const itemsContainer = document.getElementsByTagName("tbody")[0];

    function createTrElement(item) {
        const itemElement = document.createElement("tr");
        itemElement.classList.add("movie-item")
        itemElement.innerHTML = `
        <td>${item.id}</td>
        <td class="movie-details">
            <img
                src=${`https://image.tmdb.org/t/p/w45${item.poster_path}`}
                alt="movie-img"
                width="50px"
                height="60px"
            />
            <div class="movie-text">
                <h3 class="movie-title">${item.title}</h3>
                <div class="gen-duration">
                    <span class="certificate"> ${item.certification} </span>
                    <p class="genre">${Array.isArray(item.genres) ? item.genres.join(", ") : item.genres}</p>
                    <p class="duration">${timeConvert(item.runtime)}</p>
                </div>
            </div>
        </td>
        <td>
            <span>${getYear(item.release_date)}</span>
        </td>
    `;
        return itemElement;
    }

    function displayItems(items) {
        itemsContainer.innerHTML = `
        <th>
        <tr>
            <td>Rank</td>
            <td>Movie</td>
            <td>Year</td>
        </tr>
    </th>
        `;
        items.forEach((item) => {
            const itemElement = createTrElement(item);
            itemsContainer.appendChild(itemElement);
        });
    }
    displayItems(films);

    // Genre Search function
    function searchGenre() {
        const selectedGenre = genre.value;
        const filteredItems = films.filter(item => {
            if (Array.isArray(item.genres)) {
                return item.genres.some(genre => genre === selectedGenre);
            } else {
                return item.genres === selectedGenre
            }
        });

        displayItems(filteredItems);
        genre.removeEventListener('change', searchGenre)
    }
    genre.addEventListener('change', searchGenre)

    // Language Search function
    function searchLanguage() {
        const selectedLanguage = language.value;
        const filteredItems = films.filter(item => {
            if (Array.isArray(item.original_language)) {
                return item.original_language.some(lang => lang === selectedLanguage);
            } else {
                return item.original_language === selectedLanguage
            }
        });

        displayItems(filteredItems);
        language.removeEventListener('change', searchLanguage)
    }
    language.addEventListener('change', searchLanguage)

    // Year Search function
    function searchYear() {
        const selectedYear = year.value;
        const filteredItems = films.filter(item => {
            const yr = getYear(item.release_date)
            return yr.toString() === selectedYear
        });

        displayItems(filteredItems);
        year.removeEventListener('change', searchYear)

    }
    year.addEventListener('change', searchYear)

    // Rating Search function
    function searchRating() {
        const selectedRating = rating.value;
        console.log(selectedRating);
        const filteredItems = films.filter(item => {
            const rate = item.vote_average
            return rate.toString() === selectedRating
        });

        displayItems(filteredItems);
        rating.removeEventListener('change', searchRating)
    }
    rating.addEventListener('change', searchRating)



})()


