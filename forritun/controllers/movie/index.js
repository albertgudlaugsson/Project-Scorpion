const themoviedb = require('./../../db/TheMovieDB.js')
const Movies = require('./../../db/Movies.js')
const db = new Movies();

exports.show = function(req, res, next){
	db.getById({id: req.params.movie_id}, data=>{
		const movie = JSON.parse(data);
		db.getCredits({id: req.params.movie_id}, cdata=> {
			const movieCredit = JSON.parse(cdata);
			db.getSimilarMovies({id: req.params.movie_id}, sdata=> {
				const movieSimilar = JSON.parse(sdata);
				console.log(movieSimilar);
				res.render('show', {data: movie, credit: movieCredit, similar: movieSimilar});
			})
			
		})
	});
  	
};