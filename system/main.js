//movie, series, episode
//list for all movies
var moviesList = [
{
	Title:'Spiderman',
	Year:'1990',
	Rated:'N/A',
	Language:'Eng',
	imdbRating:"5.7/10",
	Genre:'Action, Sci-Fi',
	src:'https://cdn.vox-cdn.com/thumbor/Md4vxxazIX3_4SAMluJvjEKCers=/0x0:655x365/920x613/filters:focal(249x23:353x127):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55356661/spider_man_homecoming.0.jpg',
	link:'https://www.youtube.com/embed/KwWT8HCB4f4'
},
{
	Title:"The Matrix",
	Year: "1999",
	Rated:'',
	Language:'Eng',
	imdbRating:"8.7",
	Genre:'Action, Sci-Fi',
	src:'https://i0.wp.com/fullcirclecinema.com/wp-content/uploads/2019/09/lede-the-matrix-1300x731.jpg?resize=960%2C640&ssl=1',
	link:'https://www.youtube.com/embed/3WfR87K5zW8'
},{
	Title:"Spider-Man Far From Home",
	Year: "2019",
	Rated:'',
	Language:'Eng',
	imdbRating:"8.7",
	Genre:'Action, Sci-Fi',
	src:'https://ohthatfilmblog.files.wordpress.com/2019/07/maxresdefault-13.jpg?w=1200',
	link:'https://www.youtube.com/embed/Nt9L1jCKGnE'
},{
	Title:"The Joker",
	Year: "2019",
	Rated:'',
	Language:'Eng',
	imdbRating:"8.1",
	Genre:'Action, Sci-Fi',
	src:'https://pmcvariety.files.wordpress.com/2019/04/joker-trailer.jpg?w=1000',
	link:'https://www.youtube.com/embed/zAGVQLHvwOY'
},{
	Title:"avengers endgame",
	Year: "2019",
	Rated:'',
	Language:'Eng',
	imdbRating:"8.8",
	Genre:'Action, Sci-Fi',
	src:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
	link:'https://www.youtube.com/embed/JyGGLB542ks'
},{
	Title:"Star Wars: The Rise of Skywalker",
	Year: "2019",
	Rated:'',
	Language:'Eng',
	imdbRating:"8.8",
	Genre:'Action, Sci-Fi',
	src:'https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/10/strwars-920x584.jpg',
	link:'https://www.youtube.com/embed/8Qn_spdM5Zg'
},{
	Title:"Maleficent 2",
	Year: "2019",
	Rated:'',
	Language:'Eng',
	imdbRating:"8.8",
	Genre:'Action, Sci-Fi',
	src:'https://specials-images.forbesimg.com/imageserve/5d68088b68cb0a0008c0cc44/960x0.jpg?fit=scale',
	link:'https://www.youtube.com/embed/R3b1mp21eMU'
},{
	Title:"Long Shot 2019",
	Year: "2019",
	Rated:'',
	Language:'Eng',
	imdbRating:"8.8",
	Genre:'Comedy, Drama',
	src:'http://t0.gstatic.com/images?q=tbn:ANd9GcRdYEUTglbyUYS7KQbSlHMFcUFWGPm7Vd-7IBK4FCa-Zed3N9wg',
	link:'https://www.youtube.com/embed/ZKsc2I4Tgsk'
},{
	Title:"Jumanji The Next Level",
	Year: "2019",
	Rated:'',
	Language:'Eng',
	imdbRating:"8.8",
	Genre:'Action, Comedy',
	src:'http://t1.gstatic.com/images?q=tbn:ANd9GcSZR0-0imZAReMUVlMR8fQdGV48IUhFsMyvi3xwhwfFLqIv1_Vn',
	link:'https://www.youtube.com/embed/rBxcF-r9Ibs'
}]

//series list future work
var seriesList =[
{
	Title:"Game of Thrones",
	Year: "2019",
	Rated:'',
	Language:'Eng',
	imdbRating:"8.8",
	Genre:'Action, Drama',
	src:'http://www.gstatic.com/tv/thumb/tvbanners/17021627/p17021627_b_v8_aa.jpg',
	link:'https://www.youtube.com/embed/rlR4PJn8b8I'
},
{
	Title:"Chernobyl (miniseries)",
	Year: "2019",
	Rated:'',
	Language:'Eng',
	imdbRating:"9",
	Genre:'Action, Drama',
	src:'http://www.gstatic.com/tv/thumb/tvbanners/16695117/p16695117_b_v8_ae.jpg',
	link:'https://www.youtube.com/embed/s9APLXM9Ei8'
}]
//music list future work
var musicList =[{},{}]

//display all movies in movie list
function displayMovies(list) {
		for (var i = 0; i < list.length; i++) {
		var column = $('<div class="column" id=""></div>').attr('id',list[i] )
		var card = $('<div class="card" id="'+ i +'">')
		$('#row').append(column.append(card.append($('<a onclick="display('+list[i]+')" href=""></a>')
			.append($('<img>').attr('src', list[i].src)) // maybe add play link or onclick function to call play
			.append($('<h4></h4>').text(list[i].Title)))// +''+ list[i].Year))
			.append('<h5>'+list[i].Year+'</h5>')))
		
	}
}


//empty row clas 
function empty(){
	$('#row').html('')
}
//empty side section
function emptyAside(){
	$('#picAside').html('')
	$('#sidePlay').html('')
}


displayMovies(moviesList)



//when selecting a video view more ditails
$('.card').on('click', function() {
	var id = $(this).attr('id')
	empty();
	//display(id)
	$('#picAside').append(($('<img width=100%>').attr('src', moviesList[id].src)))
	$('#sidePlay').append($('<h4></h4>').text('Title: ' + moviesList[id].Title),
    $('<h4></h4>').text('Imdb Rating: '+moviesList[id].imdbRating),
    $('<h4></h4>').text('Language: '+moviesList[id].Language),
    $('<h4></h4>').text('Genre: '+moviesList[id].Genre),
    $('<h4></h4>').text('Year: '+moviesList[id].Year),
    $('<a href="#" onclick="play('+id+')">Play</a>'))

	
})

//play video after selected
function play(id) {
	emptyAside()
	var frame = 
	`
	<iframe width="960" height="615" src="${moviesList[id].link}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	`
	$('#main').append(frame)
	// $('#main').append('<video width="800" height="640" controls><source src="'+moviesList[id].link+'" type="video/mp4"><source src="movie.ogg" type="video/ogg" autoplay poster="'+ moviesList[id].src +'"></video>')

}



$('#search').on('click', function() { 
var x =$('#sear').val()
var result = []
for (var i = 0; i < moviesList.length; i++) {
	 if(moviesList[i].Title == x)
	result.push(moviesList[i])
	//if( moviesList[i].name )
}
displayMovies(result)
})


$('#Series').on('click', function() {
	empty()
	emptyAside()
	displayMovies(seriesList)
})