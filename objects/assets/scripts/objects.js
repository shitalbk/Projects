// const movieList = document.getElementById('movie-list');
// movieList.style['backgroundColor'] = 'red';
// movieList.style.display = 'block';

// const userChosenKeyName = 'level';

// const person = {
//   'first name': 'Max',
//   age: 30,
//   hobbies: ['Sports','Cooking'],
//   test: 'Fail',
//   [userChosenKeyName]: '...',
//   greet: function(){
//     alert('Hi there!!');
//   },
//   1.5: 'Hello'
// };

// person.isAdmin = true;
// //delete person.age;
// person.age = null;

// const keyName = 'first name';

// //console.log(person[keyName]);
// //console.log(person[1.5]);
// console.log(person);


const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');
  if(movies.length === 0){
    movieList.classList.remove('visible');
    return;
  } else{
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filterMovies = !filter 
  ? movies : movies.filter(movie => movie.info.title.includes(filter));

  filterMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    /*
        if('info' in movie){
          //property existance
        }
        if(!('info' in movie)){
          // property not exist
        }
        if(!(movie.info === undefined)){
           // property exist
        }
        if(movie.info === undefined){
          // property doesn't exist
        }
    */
    const { info, ...otherprops } = movie;
    /*
        if(info){

        }
    */
    console.log(otherprops);
  //  const { title: movieTitle } = info;
     let { getFormattedTitle } = movie;
    //  getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle.call(movie) + ' - ';
    for(const key in info){
      if(key !== 'title'){
        text = text + `${key}: ${info[key]} `;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if(
      title.trim() === '' || 
      extraName.trim() === '' ||
      extraValue.trim() === ''
    ) {
      return;
    }

    const newMovie = {
      info: {
        title,
        [extraName]: extraValue
      },
      id: Math.random().toString(),
      getFormattedTitle() {
         console.log(this);
        return this.info.title.toUpperCase();
      }
    };
 
    movies.push(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
   renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click',addMovieHandler);
searchBtn.addEventListener('click',searchMovieHandler);

