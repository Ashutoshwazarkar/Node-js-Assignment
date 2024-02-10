
// Names of Movies and Actor/actress stored in the below  
const actorsData = {
    SharukKhan: ['Pathan', 'Dilwale'],
    RanbirKapoor: ['Animal', 'ye jawani ye diwani'],
    ShahidKapoor: ['Kabir Singh', 'jersey'],
    DeepikaPadukone: ['Pathan', 'Fighter'],
    AliBhat: ['Brahmastra'],
  };
  
  
  // Find actor or actress names based on movie name.

  // Function to search Actor/Actress by movies
  function findActorByMovieName(movieName) {

    // condition to check whether input is string or not if not gives error
    if (!movieName || typeof movieName !== 'string') {
      throw new Error('Invalid input. Please provide a valid movie name.');
    }
  
    // empty Array
    const result = [];

    // Loop for finding out actor on the basis of movieName
    for (const actor in actorsData) {
      if (actorsData[actor].includes(movieName)) {
        result.push(actor);
      }
    }
  
  // Condition for empty Response
    if (result.length === 0) {
      console.log(`No actors/actresses found for ${movieName}.`);
    }
  
    return result;
  }
  

    // Function to search  movies by Actor/Actress
  function findMoviesByActorName(actorName) {
    if (!actorName || typeof actorName !== 'string') {
      throw new Error('Invalid input. Please provide a valid actor or actress name.');
    }
  
    // assigning movie on the basis actorname or empty 
    const movies = actorsData[actorName] || [];
  
    if (movies.length === 0) {
      console.log(`No movies found featuring ${actorName}.`);
    }
  
    return movies;
  }
  
  // Example 
  
  try {
    const movieName = 'Pathan';
    const actorName = 'RanbirKapoor';
  
    const actorsInMovie = findActorByMovieName(movieName);
    console.log(`Actors/Actresses in ${movieName}:`, actorsInMovie);
  
    const moviesByActor = findMoviesByActorName(actorName);
    console.log(`Movies featuring ${actorName}:`, moviesByActor);
  } catch (error) {
    console.error('Error:', error.message);
  }
  