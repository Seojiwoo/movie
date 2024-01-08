function searchMovies() {
    const searchInput = document.getElementById('searchInput').value;
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = ''; // 이전 검색 결과를 초기화
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmIxMWRmYzg2N2JiODYwYmQ5MGZjNmNmMDgyNDgzOCIsInN1YiI6IjY1OWI0NGZhY2E0ZjY3MDFmZTc3MmI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nfFxdwFpDiVnEftEnzOh8LZGD9DA7fk1Vt9RkaLVDts'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let lists = data.results
 
            lists.forEach((a) => {

            const img = 'https://image.tmdb.org/t/p/w500' + a['poster_path'];

            const title = a['title'];

            const va = a['vote_average'];

            const overview = a['overview'];

            const idA = a['id'];

            let temp_html = `<div class = "poster">

                                              <div>${img}</div>

                                              <h2>${title}</h2>

                                              <p>${overview}</p>

                                              <h5>${va}</h5>

                                       </div>`

 

            document.getElementById('movieInfo').append(temp_html);

            card.addEventListener('click', () =>{

            alert("That Movie's ID is : " + idA + " , Thank you");

            });

       })
            if (data.results && data.results.length > 0) {
                data.results.forEach(movie => {
                    const div = document.createElement('div');
                    div.className = 'movieItem';
                    div.innerHTML = `
                        <img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}" alt="${movie.title}" width="100">
                        <h3>${movie.title}</h3>
                        <p>${movie.release_date}</p>
                    `;
                    movieList.appendChild(div);
                });
            } else {
                alert('검색 결과가 없습니다.');
            }
        })
        .catch(error => console.error('에러 발생:', error));
}