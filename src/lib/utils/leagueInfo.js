/*   STEP 1   */
export const leagueID = "1110971924051677184"; // your league ID
export const leagueName = "XXXFL"; // your league name
export const dues = 150; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Soucy's fantasy football dream page</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
  {
    "managerID": "376083791103651840",
    "name": "David",  
    "location": "Denver",  
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2009,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": null,
      "image": "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Losing in the playoffs",
    "tradingScale": 5,
    "preferredContact": "Text",
  },
  {
    "managerID": "595647794249793536",
    "name": "Gold Coast Dinos",
    "location": "Denver",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2009,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": null,
      "image": "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Losing in the playoffs",
    "tradingScale": 5,
    "preferredContact": "Text",
  },
  {
    "managerID": "723567072075948032",
    "name": "Don Cheadle Think Tank",
    "location": "Denver",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2009,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": null,
      "image": "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Losing in the playoffs",
    "tradingScale": 5,
    "preferredContact": "Text",
  },
  {
    "managerID": "1110973885027143680",
    "name": "Nate Boychuck", 
    "location": "Denver",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2009,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": null,
      "image": "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Losing in the playoffs",
    "tradingScale": 5,
    "preferredContact": "Text",
  },
  {
    "managerID": "1110984079849320448",
    "name": "Michael Mertz",  
    "location": "Denver",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2009,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": null,
      "image": "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Losing in the playoffs",
    "tradingScale": 5,
    "preferredContact": "Text",
  },
  {
    "managerID": "1111000388456755200",
    "name": "Steven Cox",  
    "location": "Denver",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2009,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": null,
      "image": "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Losing in the playoffs",
    "tradingScale": 5,
    "preferredContact": "Text",
  },
  {
    "managerID": "1111062183489671168",
    "name": "Lex Steele A-Minors",
    "location": "Denver",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2009,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": null,
      "image": "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Losing in the playoffs",
    "tradingScale": 5,
    "preferredContact": "Text",
  },
  {
    "managerID": "1111164680913022976",
    "name": "Bruce’s Nifty Team",
    "location": "Denver",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2009,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": null,
      "image": "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Losing in the playoffs",
    "tradingScale": 5,
    "preferredContact": "Text",
  },
  {
    "managerID": "1111351539651682304",
    "name": "Hawk Tua",
    "location": "Denver",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2009,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": null,
      "image": "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Losing in the playoffs",
    "tradingScale": 5,
    "preferredContact": "Text",
  },
  {
    "managerID": "1111353514405511168",
    "name": "Matt Misirly",  
    "location": "Denver",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2009,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": null,
      "image": "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Losing in the playoffs",
    "tradingScale": 5,
    "preferredContact": "Text",
  },
  {
    "managerID": "1111448406897086464",
    "name": "AJ Champ", 
    "location": "Denver",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2009,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": null,
      "image": "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Losing in the playoffs",
    "tradingScale": 5,
    "preferredContact": "Text",
  },
  {
    "managerID": "1111456280306188288",
    "name": "Atlee",  
    "location": "Denver",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2009,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": null,
      "image": "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Losing in the playoffs",
    "tradingScale": 5,
    "preferredContact": "Text",
  }
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2009, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    