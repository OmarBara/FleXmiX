//movie, series, episode

var moviesList = [
{
	Title:'Spiderman',
	Year:'1990',
	Rated:'N/A',
	Language:'Eng',
	imdbRating:"5.7/10",
	Genre:'Action, Sci-Fi',
	src:'https://i0.wp.com/fullcirclecinema.com/wp-content/uploads/2019/09/lede-the-matrix-1300x731.jpg?resize=960%2C640&ssl=1',
	link:'videoplayback.mp4'
},
{
	Title:"The Matrix",
	Year: "1999",
	Rated:'',
	Language:'Eng',
	imdbRating:"8.7",
	Genre:'Action, Sci-Fi',
	src:'https://i0.wp.com/fullcirclecinema.com/wp-content/uploads/2019/09/lede-the-matrix-1300x731.jpg?resize=960%2C640&ssl=1',
	link:''
}]
// {
// 	Title:
// 	Year:
// 	Rated:
// 	Language:
// 	imdbRating:
// 	Genre:
// 	link:
// }

// ]

function displayMovies(list) {
	// body...
	for (var i = 0; i < list.length; i++) {
		$('#main').append('<div>').append('<a class="clip" href="#v"></a>')
		.append($('<h1></h1>').text(list[i].Title +' '+ list[i].Year))
		.append($('<img height="170" width="200">').attr('src', list[i].src))
			$('<div>').wrap('<div></div>')
		//.append($('<img>').attr('src',list[i].src))height="42" width="42"
		//return list[i].Title +' '+ list[i].Year;
	}
}
displayMovies(moviesList)
