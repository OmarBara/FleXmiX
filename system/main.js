//movie, series, episode

var moviesList = [
{
	Title:'Spiderman',
	Year:'1990',
	Rated:'N/A',
	Language:'Eng',
	imdbRating:"5.7/10",
	Genre:'Action, Sci-Fi',
	src:'https://cdn.vox-cdn.com/thumbor/Md4vxxazIX3_4SAMluJvjEKCers=/0x0:655x365/920x613/filters:focal(249x23:353x127):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55356661/spider_man_homecoming.0.jpg',
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
},{
	Title:"The Matrix",
	Year: "1999",
	Rated:'',
	Language:'Eng',
	imdbRating:"8.7",
	Genre:'Action, Sci-Fi',
	src:'https://i0.wp.com/fullcirclecinema.com/wp-content/uploads/2019/09/lede-the-matrix-1300x731.jpg?resize=960%2C640&ssl=1',
	link:''
},{
	Title:"The Matrix",
	Year: "1999",
	Rated:'',
	Language:'Eng',
	imdbRating:"8.7",
	Genre:'Action, Sci-Fi',
	src:'https://i0.wp.com/fullcirclecinema.com/wp-content/uploads/2019/09/lede-the-matrix-1300x731.jpg?resize=960%2C640&ssl=1',
	link:''
},{
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

var seriesList =[{},{}]
var musicList =[{},{}]


function displayMovies(list) {
	// body...
	for (var i = 0; i < list.length; i++) {

		var column = $('<div class="column"></div>')
		var card = $('<div class="card" id="'+ i +'">')
		$('#row').append(column.append(card.append($('<img width=100%>').attr('src', list[i].src)) // maybe add play link or onclick function to call play
			.append($('<h4></h4>').text(list[i].Title))// +''+ list[i].Year))
			.append('<h5>'+list[i].Year+'</h5>'))
		//.append($('<img height="170" width="200">').attr('src', list[i].src))
		

		)
		//$("#element").append('<a ></a>')		 
		// '<a href="'+'" >play</a>')
		// 	$('<div>').wrap('<div></div>')
		//.append($('<img>').attr('src',list[i].src))height="42" width="42"
		//return list[i].Title +' '+ list[i].Year;
	}
}



function empty(){
	$('#row').html('')
}
function emptyAside(){
	$('#picAside').html('')
	$('#sidePlay').html('')
}

//display the selectd clip with details
function display() {
	empty();

	$('#picAside').append(($('<img width=100%>').attr('src', moviesList[0].src)))
	$('#sidePlay').append($('<h4></h4>').text('Title: ' + moviesList[0].Title),
    $('<h4></h4>').text('Imdb Rating: '+moviesList[0].imdbRating),
    $('<h4></h4>').text('Language: '+moviesList[0].Language),
    $('<h4></h4>').text('Genre: '+moviesList[0].Genre),
    $('<h4></h4>').text('Year: '+moviesList[0].Year),
    $('<a href="#" onclick="">Play</a>')//.attr('onclick',play(moviesList[0]))
   )



}

//play the passsed clip
function play() {
	emptyAside()
	$('#main').append('<video width="800" height="640" controls><source src="system/videoplayback.mp4" type="video/mp4"><source src="movie.ogg" type="video/ogg" autoplay poster="'+ moviesList[0].src +'"></video>')

}

displayMovies(moviesList)







/*$.get( "https://tastedive.com/api/similar?q=spiderman%2C+pulp+fiction", 
	function( data ) {
  $( "#play" ).html( data.similar);
	})

	$.get("https://tastedive.com/api/similar?q=spiderman%2C+pulp+fiction", function(data){
  alert("Data: " + data);
});*/
//moviesList[0]