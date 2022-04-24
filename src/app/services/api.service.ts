import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor() { }
  
  getMovie(){
    const movie = this.MyMovies[Math.floor(Math.random() * this.MyMovies.length)];
  //return "Night at t  he Museum"
  return movie;
  }
   MyMovies = [
    "Black Panther",
    "Mad Max Fury Road",
    "Wonder Woman",
    "Metropolis",
    "Coco",
    "Dunkirk",
    "Incredibles 2",
    "Star Wars The Last Jedi",
    "Logan",
    "Star Wars Episode VII The Force Awakens",
    "King Kong",
    "The Adventures of Robin Hood",
    "Thor Ragnarok",
    "Baby Driver",
    "Zootopia",
    "Seven Samurai",
    "SpiderMan Homecoming",
    "Up",
    "The Jungle Book",
    "War for the Planet of the Apes",
    "The Treasure of the Sierra Madre",
    "Lawrence of Arabia",
    "The Dark Knight",
    "Captain America Civil War",
    "Jaws",
    "Harry Potter and the Deathly Hallows Part 2",
    "The Hurt Locker",
    "Aliens",
    "The LEGO Movie",
    "Skyfall",
    "AntMan and the Wasp",
    "Star Wars Episode IV A New Hope",
    "WALLE",
    "Moana",
    "The Searchers",
    "Star Trek",
    "Kubo and the Two Strings",
    "The 39 Steps",
    "Rio Bravo",
    "The Terminator",
    "Mission Impossible Rogue Nation",
    "Marvels The Avengers",
    "The African Queen",
    "Star Wars Episode V The Empire Strikes Back",
    "Once Upon a Time in the West",
    "Apocalypse Now",
    "Blade Runner 2049",
    "The French Connection",
    "True Grit",
    "Isle of Dogs",
    "Throne of Blood",
    "Aguirre the Wrath of God",
    "Badlands",
    "Avengers Infinity War",
    "Yellow Submarine",
    "Guardians of the Galaxy",
    "Iron Man",
    "Chicken Run",
    "Spartacus",
    "The Princess Bride",
    "Hunt for the Wilderpeople",
    "Ghostbusters",
    "Goldfinger",
    "Paths of Glory",
    "Casino Royale",
    "All Is Lost",
    "Ran",
    "The Lego Batman Movie",
    "Doctor Strange",
    "A Fistful of Dollars",
    "Assault on Precinct 13",
    "XMen Days of Future Past",
    "No Country for Old Men",
    "The Lord of the Rings The Two Towers",
    "Looper",
    "Back to the Future",
    "The Right Stuff",
    "Gojira",
    "Crouching Tiger Hidden Dragon",
    "The Fugitive",
    "Dawn Of The Planet Of The Apes",
    "Mad Max 2 The Road Warrior",
    "Mandy",
    "Who Framed Roger Rabbit",
    "Annihilation",
    "Close Encounters of the Third Kind",
    "Diva",
    "The Bridge on the River Kwai",
    "Babe",
    "Dr No",
    "The Lion King",
    "Sicario",
    "Jurassic Park",
    "In the Line of Fire",
    "Raiders of the Lost Ark",
    "From Russia With Love",
    "Superman",
    "Saving Private Ryan",
    "The Lord of the Rings The Return of the King",
    "Embrace Of The Serpent",
    "Inside Out",
    "Coco",
    "Paddington 2",
    "Incredibles 2",
    "Snow White and the Seven Dwarfs",
    "Toy Story 2",
    "Zootopia",
    "Up",
    "Toy Story 3",
    "Finding Nemo",
    "Pinocchio",
    "Finding Dory",
    "Toy Story",
    "The LEGO Movie",
    "WALLE",
    "Moana",
    "Kubo and the Two Strings",
    "Shaun the Sheep Movie",
    "Ratatouille",
    "Only Yesterday",
    "How to Train Your Dragon",
    "Isle of Dogs",
    "The Incredibles",
    "Yellow Submarine",
    "Beauty and the Beast",
    "Chicken Run",
    "My Life as a Zucchini",
    "101 Dalmatians",
    "The Nightmare Before Christmas",
    "Fantasia",
    "Monsters Inc",
    "The Lego Batman Movie",
    "The Iron Giant",
    "Spirited Away",
    "Tower",
    "Song Of The Sea",
    "Who Framed Roger Rabbit",
    "Anomalisa",
    "The Lion King",
    "Your Name",
    "Waltz with Bashir",
    "Persepolis",
    "Wallace Gromit The Curse of the WereRabbit",
    "The Secret World of Arrietty",
    "Ernest CÃlestine",
    "The Red Turtle",
    "Long Way North",
    "Aladdin",
    "Fantastic Mr Fox",
    "Frozen",
    "The Breadwinner",
    "Ghost in the Shell",
    "Coraline",
    "Lady and the Tramp",
    "Antz",
    "The Triplets of Belleville",
    "How to Train Your Dragon 2",
    "Bambi",
    "My Neighbor Totoro",
    "Big Hero 6",
    "The Little Mermaid",
    "A Bugs Life",
    "Princess Mononoke",
    "Arthur Christmas",
    "Mary and Max",
    "James and the Giant Peach",
    "Teen Titans Go To the Movies",
    "Ponyo",
    "Shrek 2",
    "Bolt",
    "Tangled",
    "The Simpsons Movie",
    "Shrek",
    "Frankenweenie",
    "The Wind Rises",
    "Boy and the World",
    "Winnie the Pooh",
    "Rango",
    "The Illusionist",
    "ParaNorman",
    "The Peanuts Movie",
    "Kung Fu Panda",
    "Wreckit Ralph",
    "Millennium Actress",
    "When Marnie Was There",
    "The Secret of Kells",
    "Howls Moving Castle",
    "Tarzan",
    "Kung Fu Panda 3",
    "The Boy And The Beast",
    "Captain Underpants The First Epic Movie",
    "Sausage Party",
    "Tokyo Godfathers",
    "Mary and The Witchs Flower",
    "My Dog Tulip",
    "The Pirates Band of Misfits",
    "The Princess and the Frog",
    "Loving Vincent",
    "Akira",
    "Tim Burtons Corpse Bride",
    "The Cabinet of Dr Caligari",
    "Metropolis",
    "La Grande illusion",
    "Nosferatu a Symphony of Horror",
    "The Battle of Algiers",
    "M",
    "Seven Samurai",
    "The 400 Blows",
    "Army of Shadows",
    "RashÃmon",
    "The Wages of Fear",
    "Open City",
    "Tokyo Story",
    "The Leopard",
    "Battleship Potemkin",
    "The Conformist",
    "Au Hasard Balthazar",
    "Things to Come",
    "La Dolce Vita",
    "Let the Right One In",
    "Playtime",
    "The Discreet Charm Of The Bourgeoisie",
    "The Rules of the Game",
    "Faces Places",
    "The Passion of Joan of Arc",
    "Only Yesterday",
    "Tampopo",
    "The Salesman",
    "Throne of Blood",
    "A Separation",
    "Aguirre the Wrath of God",
    "Eyes Without a Face",
    "Gloria",
    "Pather Panchali",
    "The Umbrellas of Cherbourg",
    "A Fantastic Woman",
    "Three Colors Red",
    "My Life as a Zucchini",
    "Le Cercle Rouge",
    "The Tale of the Princess Kaguya",
    "Amy",
    "BPM",
    "Sing Street",
    "Ran",
    "A Fistful of Dollars",
    "GETT The Trial of Viviane Amsalem",
    "Solaris",
    "Wings of Desire",
    "The Young Girls of Rochefort",
    "Gojira",
    "Crouching Tiger Hidden Dragon",
    "Timbuktu",
    "Jiro Dreams of Sushi",
    "Diva",
    "Aruitemo Aruitemo",
    "The Taste of Others",
    "All About My Mother",
    "Toni Erdmann",
    "Waste Land",
    "The Bands Visit",
    "Poetry",
    "The Vanishing",
    "Loveless",
    "Elevator to the Gallows",
    "Gods Own Country",
    "Afghan Star",
    "A Prophet",
    "Waltz with Bashir",
    "Three Colors Blue",
    "Embrace Of The Serpent",
    "After the Storm",
    "About Elly",
    "Fireworks Wednesday",
    "Last Train Home",
    "The Seventh Seal",
    "Project Nim",
    "Monsieur Lazhar",
    "Mafioso",
    "Maria Full of Grace",
    "Hero",
    "An Education",
    "Nostalgia for the Light",
    "Amour",
    "LAvventura",
    "The Look of Silence",
    "Rivers and Tides Andy Goldsworthy Working With Time",
    "MoolaadÃ",
    "The Class",
    "The Man Without a Past",
    "The Twilight Samurai",
    "The Kid with a Bike",
    "This Is Not a Film",
    "Rififi",
    "The Secret World of Arrietty",
    "Elle",
    "District 9",
    "Ernest CÃlestine",
    "Sex Lies and Videotape",
    "The Red Turtle",
    "The Wizard of Oz",
    "Citizen Kane",
    "The Third Man",
    "The Cabinet of Dr Caligari",
    "All About Eve",
    "Metropolis",
    "It Happened One Night",
    "Modern Times",
    "Casablanca",
    "La Grande illusion",
    "Singin in the Rain",
    "Psycho",
    "Laura",
    "A Hard Days Night",
    "King Kong",
    "Nosferatu a Symphony of Horror",
    "Snow White and the Seven Dwarfs",
    "The Adventures of Robin Hood",
    "Repulsion",
    "North by Northwest",
    "Sunset Boulevard",
    "Rear Window",
    "The Bride of Frankenstein",
    "The Philadelphia Story",
    "Touch of Evil",
    "Seven Samurai",
    "All Quiet on the Western Front",
    "12 Angry Men",
    "The Treasure of the Sierra Madre",
    "A Streetcar Named Desire",
    "Vertigo",
    "The 400 Blows",
    "Rebecca",
    "Lawrence of Arabia",
    "Rosemarys Baby",
    "Dr Strangelove Or How I Learned to Stop Worrying and Love the Bomb",
    "Frankenstein",
    "RashÃmon",
    "On the Waterfront",
    "The Grapes of Wrath",
    "The Big Sleep",
    "Roman Holiday",
    "The Lady Vanishes",
    "The Last Picture Show",
    "Cool Hand Luke",
    "The Leopard",
    "Chinatown",
    "Battleship Potemkin",
    "The Searchers",
    "Anatomy of a Murder",
    "Invasion of the Body Snatchers",
    "Gone With the Wind",
    "An American in Paris",
    "The Gold Rush",
    "The 39 Steps",
    "The Red Shoes",
    "Rio Bravo",
    "Sweet Smell of Success",
    "To Be or Not to Be",
    "Mary Poppins",
    "The African Queen",
    "City Lights",
    "Miracle on 34th Street",
    "2001 A Space Odyssey",
    "His Girl Friday",
    "Its a Wonderful Life",
    "Night of the Living Dead",
    "The French Connection",
    "The Passion of Joan of Arc",
    "Throne of Blood",
    "Badlands",
    "The Manchurian Candidate",
    "Gentlemen Prefer Blondes",
    "Freaks",
    "The Birth of a Nation",
    "Spartacus",
    "Forbidden Planet",
    "The Best Years of Our Lives",
    "101 Dalmatians",
    "Goldfinger",
    "Paths of Glory",
    "Bringing Up Baby",
    "Some Like It Hot",
    "Duck Soup",
    "Fantasia",
    "Sunrise A Song of Two Humans",
    "The Day the Earth Stood Still",
    "Ran",
    "Rebel Without a Cause",
    "Peeping Tom",
    "A Fistful of Dollars",
    "The Lord of the Rings The Two Towers",
    "The Apartment",
    "The Birds",
    "The Young Girls of Rochefort",
    "One Flew Over the Cuckoos Nest",
    "The Bridge on the River Kwai",
    "Dr No",
    "Mean Streets",
    "Dont Look Now",
    "Lady Bird",
    "BlacKkKlansman",
    "Coco",
    "It Happened One Night",
    "Modern Times",
    "Paddington 2",
    "The Big Sick",
    "Eighth Grade",
    "Singin in the Rain",
    "A Hard Days Night",
    "La La Land",
    "The Philadelphia Story",
    "Toy Story 2",
    "Zootopia",
    "Up",
    "Three Billboards Outside Ebbing Missouri",
    "Toy Story 3",
    "Finding Nemo",
    "Dr Strangelove Or How I Learned to Stop Worrying and Love the Bomb",
    "The Death of Stalin",
    "Roman Holiday",
    "Toy Story",
    "The LEGO Movie",
    "AntMan and the Wasp",
    "Crazy Rich Asians",
    "Monty Python and the Holy Grail",
    "Paterson",
    "Sorry to Bother You",
    "The Gold Rush",
    "Shaun the Sheep Movie",
    "La Dolce Vita",
    "To Be or Not to Be",
    "Mary Poppins",
    "City Lights",
    "Birdman",
    "Love Friendship",
    "Playtime",
    "The Disaster Artist",
    "Annie Hall",
    "The Discreet Charm Of The Bourgeoisie",
    "The Artist",
    "His Girl Friday",
    "Ratatouille",
    "The Rules of the Game",
    "Tampopo",
    "Isle of Dogs",
    "The Incredibles",
    "Gentlemen Prefer Blondes",
    "The Nice Guys",
    "Yellow Submarine",
    "Paddington",
    "Spy",
    "Chicken Run",
    "Logan Lucky",
    "Hunt for the Wilderpeople",
    "101 Dalmatians",
    "Airplane",
    "Ghostbusters",
    "Bringing Up Baby",
    "Big",
    "Some Like It Hot",
    "Duck Soup",
    "The Player",
    "Dont Think Twice",
    "Monsters Inc",
    "The Lego Batman Movie",
    "Monty Pythons Life of Brian",
    "The Grand Budapest Hotel",
    "Sideways",
    "The Apartment",
    "Back to the Future",
    "The Edge of Seventeen",
    "Groundhog Day",
    "What We Do In The Shadows",
    "Tangerine",
    "Bull Durham",
    "Who Framed Roger Rabbit",
    "Moonrise Kingdom",
    "Anomalisa",
    "Lost In Translation",
    "Enough Said",
    "Broadcast News",
    "The Taste of Others",
    "The Muppets",
    "The Bands Visit",
    "Hannah Gadsby Nanette",
    "Repo Man",
    "The Truman Show",
    "Le Havre",
    "Say Anything",
    "Wallace Gromit The Curse of the WereRabbit",
    "Hairspray",
    "Silver Linings Playbook",
    "American Graffiti",
    "Monsieur Lazhar",
    "Juno",
    "Mafioso",
    "We Are the Best",
    "Manhattan",
    "Bullets Over Broadway",
    "Wont You Be My Neighbor",
    "I Am Not Your Negro",
    "Man on Wire",
    "Life Itself",
    "Faces Places",
    "20 Feet From Stardom",
    "Three Identical Strangers",
    "The Last Waltz",
    "Amy",
    "Taxi to the Dark Side",
    "Kedi",
    "Blackfish",
    "Citizenfour",
    "Murderball",
    "Minding the Gap",
    "Shirkers",
    "Tower",
    "Weiner",
    "Inside Job",
    "The Missing Picture",
    "Deliver Us from Evil",
    "Seymour An Introduction",
    "RBG",
    "Anvil The Story of Anvil",
    "Jiro Dreams of Sushi",
    "Bright Lights Starring Carrie Fisher and Debbie Reynolds",
    "The Square",
    "Waste Land",
    "Hoop Dreams",
    "Mr Death The Rise and Fall of Fred A Leuchter Jr",
    "Strong Island",
    "Afghan Star",
    "Capturing the Friedmans",
    "Waltz with Bashir",
    "Iris",
    "The Overnighters",
    "Jodorowskys Dune",
    "The Interrupters",
    "How to Survive a Plague",
    "March of the Penguins",
    "56 Up",
    "Last Train Home",
    "The Invisible War",
    "Kurt Cobain Montage Of Heck",
    "Project Nim",
    "Spellbound",
    "Everyday Sunshine The Story of Fishbone",
    "Nostalgia for the Light",
    "We Were Here",
    "Enron The Smartest Guys in the Room",
    "Bill Cunningham New York",
    "The Look of Silence",
    "Rivers and Tides Andy Goldsworthy Working With Time",
    "When We Were Kings",
    "The Act Of Killing",
    "13th",
    "This Is Not a Film",
    "Elaine Stritch Shoot Me",
    "HitchcockTruffaut",
    "The King of Kong A Fistful of Quarters",
    "The Fog of War Eleven Lessons from the Life of Robert S McNamara",
    "Bowling for Columbine",
    "The Imposter",
    "The War Tapes",
    "Cave of Forgotten Dreams",
    "West of Memphis",
    "The Beatles Eight Days a Week The Touring Years",
    "Ai Weiwei Never Sorry",
    "Beware Of Mr Baker",
    "Jafar Panahis Taxi",
    "Marwencol",
    "Undefeated",
    "Sicko",
    "Finders Keepers",
    "Mea Maxima Culpa Silence In The House Of God",
    "Blindsight",
    "Sound City",
    "The Devil Came on Horseback",
    "Call Me Kuchu",
    "The Island President",
    "For the Bible Tells Me So",
    "Welcome To Leith",
    "Keep On Keepin On",
    "Let The Fire Burn",
    "Restrepo",
    "The Life and Times of Hank Greenberg",
    "Born To Be Wild",
    "Surfwise",
    "Lo and Behold Reveries of the Connected World",
    "Bus 174",
    "Stories We Tell",
    "Wordplay",
    "Control Room",
    "Burma VJ Reporter i et Lukket Land",
    "No End in Sight",
    "49 Up",
    "The Cove",
    "Winged Migration",
    "Muscle Shoals",
    "The Queen of Versailles",
    "Black Panther",
    "Lady Bird",
    "Citizen Kane",
    "BlacKkKlansman",
    "Moonlight",
    "Wonder Woman",
    "All About Eve",
    "Metropolis",
    "A Quiet Place",
    "Spotlight",
    "Dunkirk",
    "Selma",
    "Casablanca",
    "La Grande illusion",
    "The Godfather",
    "Call Me by Your Name",
    "Arrival",
    "Leave No Trace",
    "Star Wars The Last Jedi",
    "Logan",
    "The Shape of Water",
    "Boyhood",
    "The Maltese Falcon",
    "Gravity",
    "12 Years a Slave",
    "Argo",
    "Repulsion",
    "Sunset Boulevard",
    "Thor Ragnarok",
    "Rear Window",
    "The Battle of Algiers",
    "Baby Driver",
    "The Florida Project",
    "Alien",
    "La La Land",
    "Manchester by the Sea",
    "Bicycle Thieves",
    "M",
    "Taxi Driver",
    "Touch of Evil",
    "Seven Samurai",
    "SpiderMan Homecoming",
    "All Quiet on the Western Front",
    "Hell or High Water",
    "War for the Planet of the Apes",
    "12 Angry Men",
    "The Treasure of the Sierra Madre",
    "Three Billboards Outside Ebbing Missouri",
    "The Babadook",
    "A Streetcar Named Desire",
    "Vertigo",
    "The 400 Blows",
    "Rebecca",
    "Brooklyn",
    "The Night of the Hunter",
    "Lawrence of Arabia",
    "Army of Shadows",
    "The Dark Knight",
    "The Death of Stalin",
    "The Wrestler",
    "RashÃmon",
    "Jaws",
    "The Wages of Fear",
    "LA Confidential",
    "Creed",
    "Open City",
    "On the Waterfront",
    "Harry Potter and the Deathly Hallows Part 2",
    "The Grapes of Wrath",
    "Tokyo Story",
    "The Big Sleep",
    "Roman Holiday",
    "The Hurt Locker",
    "The Last Picture Show",
    "Cool Hand Luke",
    "The Leopard",
    "Star Wars Episode IV A New Hope",
    "Paterson",
    "Phantom Thread",
    "Room",
    "Hidden Figures",
    "I Tonya",
    "The Godfather Part II",
    "Chinatown",
    "Battleship Potemkin",
    "The Searchers",
    "The Post",
    "Anatomy of a Murder",
    "Gone With the Wind",
    "Carol",
    "Nightcrawler",
    "Star Trek",
    "Before Midnight",
    "The Conformist",
    "Au Hasard Balthazar",
    "Things to Come",
    "The Red Shoes",
    "Schindlers List",
    "La Dolce Vita",
    "Sweet Smell of Success",
    "Get Out",
    "The Cabinet of Dr Caligari",
    "A Quiet Place",
    "Psycho",
    "King Kong",
    "Nosferatu a Symphony of Horror",
    "Repulsion",
    "The Bride of Frankenstein",
    "The Babadook",
    "Rosemarys Baby",
    "Frankenstein",
    "Aliens",
    "It Follows",
    "Let the Right One In",
    "Night of the Living Dead",
    "Hereditary",
    "Eyes Without a Face",
    "Freaks",
    "The Witch",
    "The Silence of the Lambs",
    "Pans Labyrinth",
    "Evil Dead 2 Dead by Dawn",
    "The Birds",
    "Halloween",
    "Gojira",
    "Dont Look Now",
    "The Vanishing",
    "The Innocents",
    "The Cabin in the Woods",
    "A Girl Walks Home Alone at Night",
    "Drag Me to Hell",
    "It",
    "Invasion of the Body Snatchers",
    "The Evil Dead",
    "The Endless",
    "Carrie",
    "ReAnimator",
    "Young Frankenstein",
    "The Loved Ones",
    "Nosferatu Phantom der Nacht",
    "The Love Witch",
    "Room 237",
    "Suspiria",
    "Train to Busan",
    "A Nightmare on Elm Street",
    "Shaun of the Dead",
    "The Host",
    "Dracula",
    "The Fly",
    "Zombieland",
    "What Ever Happened to Baby Jane",
    "CAM",
    "Eraserhead",
    "It Comes At Night",
    "Dawn of the Dead",
    "Dont Breathe",
    "Phantom Of The Opera",
    "We Are Still Here",
    "The Wicker Man",
    "Little Shop of Horrors",
    "The Texas Chainsaw Massacre",
    "Let Me In",
    "Frankenweenie",
    "Upgrade",
    "Halloween",
    "The Blair Witch Project",
    "The Exorcist",
    "The Conjuring",
    "The Dead Zone",
    "Bone Tomahawk",
    "Misery",
    "The Shining",
    "Cronos",
    "The Orphanage",
    "28 Days Later",
    "Geralds Game",
    "The Devils Candy",
    "An American Werewolf in London",
    "Near Dark",
    "Poltergeist",
    "Henry Portrait of a Serial Killer",
    "This Is the End",
    "Chronicle",
    "The Descent",
    "The Omen",
    "Donnie Darko The Directors Cut",
    "Save the Green Planet",
    "Slither",
    "Ginger Snaps",
    "The Autopsy of Jane Doe",
    "A Field in England",
    "Backcountry",
    "Goodnight Mommy",
    "Altered States",
    "The Thing",
    "Better Watch Out",
    "They Live",
    "The House of the Devil",
    "The Conjuring 2",
    "The Others",
    "The Wizard of Oz",
    "Inside Out",
    "ET The ExtraTerrestrial",
    "Coco",
    "Paddington 2",
    "Incredibles 2",
    "Snow White and the Seven Dwarfs",
    "Toy Story 2",
    "Up",
    "The Jungle Book",
    "Toy Story 3",
    "Finding Nemo",
    "Pinocchio",
    "Harry Potter and the Deathly Hallows Part 2",
    "Toy Story",
    "The LEGO Movie",
    "Moana",
    "Mary Poppins",
    "Miracle on 34th Street",
    "Its a Wonderful Life",
    "Ratatouille",
    "How to Train Your Dragon",
    "The Incredibles",
    "Yellow Submarine",
    "Paddington",
    "Beauty and the Beast",
    "Chicken Run",
    "The Princess Bride",
    "My Life as a Zucchini",
    "101 Dalmatians",
    "The Nightmare Before Christmas",
    "Big",
    "Fantasia",
    "Monsters Inc",
    "The Lego Batman Movie",
    "The Iron Giant",
    "Spirited Away",
    "Song Of The Sea",
    "Who Framed Roger Rabbit",
    "Babe",
    "The Lion King",
    "The Muppets",
    "About Elly",
    "Wallace Gromit The Curse of the WereRabbit",
    "My Fair Lady",
    "The Straight Story",
    "Hugo",
    "Aladdin",
    "Fantastic Mr Fox",
    "Enchanted",
    "Frozen",
    "The Breadwinner",
    "Coraline",
    "Lady and the Tramp",
    "Antz",
    "Jason and the Argonauts",
    "How to Train Your Dragon 2",
    "Bambi",
    "The Secret of Roan Inish",
    "My Neighbor Totoro",
    "Big Hero 6",
    "Harry Potter and the Prisoner of Azkaban",
    "The Little Mermaid",
    "Spy Kids",
    "How Green Was My Valley",
    "LHeure dÃtÃ",
    "Petes Dragon",
    "A Bugs Life",
    "Princess Mononoke",
    "A Monster Calls",
    "Arthur Christmas",
    "Harry Potter and the Goblet of Fire",
    "James and the Giant Peach",
    "That Thing You Do",
    "Teen Titans Go To the Movies",
    "Willy Wonka and the Chocolate Factory",
    "Ponyo",
    "Shrek 2",
    "Tangled",
    "First Position",
    "Shrek",
    "Lassie",
    "Duma",
    "Winnie the Pooh",
    "Rango",
    "A Christmas Story",
    "ParaNorman",
    "The Peanuts Movie",
    "The Sound of Music",
    "Kung Fu Panda",
    "Wreckit Ralph",
    "Millions",
    "The Secret of Kells",
    "Howls Moving Castle",
    "Cinderella",
    "Disneynature Bears",
    "The Muppet Movie",
    "Harry Potter and the HalfBlood Prince",
    "The Karate Kid",
    "Freaky Friday",
    "The Wizard of Oz",
    "Singin in the Rain",
    "A Hard Days Night",
    "La La Land",
    "Pinocchio",
    "An American in Paris",
    "The Red Shoes",
    "Mary Poppins",
    "Gentlemen Prefer Blondes",
    "Yellow Submarine",
    "The Umbrellas of Cherbourg",
    "Beauty and the Beast",
    "20 Feet From Stardom",
    "The Last Waltz",
    "Amy",
    "Some Like It Hot",
    "Fantasia",
    "Sing Street",
    "The Young Girls of Rochefort",
    "Once",
    "Anvil The Story of Anvil",
    "The Lion King",
    "Waste Land",
    "West Side Story",
    "Amadeus",
    "Afghan Star",
    "Hairspray",
    "We Are the Best",
    "Everyday Sunshine The Story of Fishbone",
    "Bill Cunningham New York",
    "My Fair Lady",
    "Rivers and Tides Andy Goldsworthy Working With Time",
    "Johnny Guitar",
    "Whats Love Got To Do With It",
    "Aladdin",
    "Beware Of Mr Baker",
    "Sound City",
    "Nashville",
    "Keep On Keepin On",
    "Wordplay",
    "49 Up",
    "The Full Monty",
    "Muscle Shoals",
    "Marley",
    "Hairspray",
    "Searching for Sugar Man",
    "Les Plages dAgnÃs",
    "Festival Express",
    "20000 Days on Earth",
    "Exit Through The Gift Shop",
    "Funny Girl",
    "Love Mercy",
    "Born Into Brothels",
    "Pina",
    "Crumb",
    "The Little Mermaid",
    "Marina Abramovic The Artist Is Present",
    "Los Angeles Plays Itself",
    "Straight Outta Compton",
    "Lost in La Mancha",
    "Lagaan Once Upon a Time in India",
    "Hedwig and the Angry Inch",
    "Crazy Heart",
    "My Kid Could Paint That",
    "End of the Century The Story of the Ramones",
    "The Wrecking Crew",
    "Willy Wonka and the Chocolate Factory",
    "Dave Chappelles Block Party",
    "The Filth and the Fury",
    "The Sapphires",
    "Sing Your Song",
    "Tangled",
    "A Band Called Death",
    "Florence Foster Jenkins",
    "My Architect",
    "Little Shop of Horrors",
    "Every Little Step",
    "U2 3D",
    "Sid and Nancy",
    "Scratch",
    "The Sound of Music",
    "F for Fake",
    "Ballets Russes",
    "Standing in the Shadows of Motown",
    "Shine",
    "Born To Be Blue",
    "Five Easy Pieces",
    "Neil Young Heart of Gold",
    "Buena Vista Social Club",
    "TopsyTurvy",
    "Chicago",
    "Sweeney Todd The Demon Barber of Fleet Street",
    "The Devil and Daniel Johnston",
    "The Muppet Movie",
    "Caesar Must Die",
    "Metallica Some Kind of Monster",
    "The Punk Singer",
    "Control",
    "Mamma Mia Here We Go Again",
    "Beats Rhymes Life The Travels of a Tribe Called Quest",
    "Citizen Kane",
    "Get Out",
    "The Third Man",
    "The Cabinet of Dr Caligari",
    "A Quiet Place",
    "Spotlight",
    "Arrival",
    "Psycho",
    "Laura",
    "The Maltese Falcon",
    "Argo",
    "Repulsion",
    "North by Northwest",
    "Rear Window",
    "Alien",
    "M",
    "Taxi Driver",
    "Touch of Evil",
    "Hell or High Water",
    "The Babadook",
    "Vertigo",
    "Rebecca",
    "The Night of the Hunter",
    "Rosemarys Baby",
    "RashÃmon",
    "Jaws",
    "The Wages of Fear",
    "LA Confidential",
    "Harry Potter and the Deathly Hallows Part 2",
    "The Big Sleep",
    "The Lady Vanishes",
    "High Noon",
    "Skyfall",
    "The Godfather Part II",
    "Chinatown",
    "The Post",
    "Anatomy of a Murder",
    "Invasion of the Body Snatchers",
    "Nightcrawler",
    "Strangers on a Train",
    "The 39 Steps",
    "The Salesman",
    "Badlands",
    "The Manchurian Candidate",
    "Eyes Without a Face",
    "Freaks",
    "The Conversation",
    "The Silence of the Lambs",
    "Forbidden Planet",
    "101 Dalmatians",
    "Goldfinger",
    "Le Cercle Rouge",
    "Sunrise A Song of Two Humans",
    "Casino Royale",
    "Eye In The Sky",
    "All Is Lost",
    "The Guilty",
    "Blood Simple",
    "Peeping Tom",
    "Assault on Precinct 13",
    "No Country for Old Men",
    "Looper",
    "The Birds",
    "Halloween",
    "The Fugitive",
    "Bridge of Spies",
    "Mad Max 2 The Road Warrior",
    "Searching",
    "Mandy",
    "Who Framed Roger Rabbit",
    "Close Encounters of the Third Kind",
    "Diva",
    "Dr No",
    "Ex Machina",
    "Sicario",
    "Jurassic Park",
    "Dont Look Now",
    "10 Cloverfield Lane",
    "In the Line of Fire",
    "From Russia With Love",
    "The Vanishing",
    "Elevator to the Gallows",
    "In the Heat of the Night",
    "Wake in Fright",
    "Three Colors Blue",
    "Blue Ruin",
    "The Cabin in the Woods",
    "The Killer",
    "The Bourne Ultimatum",
    "To Catch a Thief",
    "Gone Girl",
    "The Imitation Game",
    "Blue Velvet",
    "LAvventura",
    "Diabolique",
    "A Girl Walks Home Alone at Night",
    "Children of Men",
    "Wild Tales",
    "You Were Never Really Here",
    "Drag Me to Hell",
    "It Happened One Night",
    "Casablanca",
    "The Big Sick",
    "Call Me by Your Name",
    "Singin in the Rain",
    "The Shape of Water",
    "The Adventures of Robin Hood",
    "The Philadelphia Story",
    "Vertigo",
    "On the Waterfront",
    "Roman Holiday",
    "Gone With the Wind",
    "An American in Paris",
    "Carol",
    "Before Midnight",
    "The Red Shoes",
    "The African Queen",
    "City Lights",
    "Beauty and The Beast",
    "Miracle on 34th Street",
    "Annie Hall",
    "The Artist",
    "Her",
    "Only Yesterday",
    "Gentlemen Prefer Blondes",
    "The Umbrellas of Cherbourg",
    "Beauty and the Beast",
    "Three Colors Red",
    "The Princess Bride",
    "The Best Years of Our Lives",
    "Bringing Up Baby",
    "Sunrise A Song of Two Humans",
    "The Hustler",
    "Before Sunrise",
    "Sideways",
    "The Apartment",
    "Groundhog Day",
    "Wings of Desire",
    "The Young Girls of Rochefort",
    "Bull Durham",
    "Crouching Tiger Hidden Dragon",
    "Sense and Sensibility",
    "Lost In Translation",
    "Enough Said",
    "Titanic",
    "Slumdog Millionaire",
    "West Side Story",
    "Elevator to the Gallows",
    "Gods Own Country",
    "Your Name",
    "Three Colors Blue",
    "Say Anything",
    "To Catch a Thief",
    "Daughters of the Dust",
    "Manhattan",
    "A Girl Walks Home Alone at Night",
    "Shakespeare in Love",
    "Giant",
    "Up in the Air",
    "Eternal Sunshine Of The Spotless Mind",
    "The Lunchbox",
    "Before Sunset",
    "Dave",
    "The Town",
    "Midnight in Paris",
    "From Here to Eternity",
    "Four Weddings and a Funeral",
    "A Summers Tale",
    "The Crying Game",
    "Enchanted",
    "Big Night",
    "Howards End",
    "Million Dollar Baby",
    "About a Boy",
    "The General",
    "Knocked Up",
    "Monsoon Wedding",
    "Masculin Feminin",
    "Hamlet",
    "Revanche",
    "To All the Boys Ive Loved Before",
    "Out of Sight",
    "The Graduate",
    "The Remains of the Day",
    "Strictly Ballroom",
    "The Spectacular Now",
    "Moonstruck",
    "The Little Mermaid",
    "The Duke Of Burgundy",
    "Brief Encounter",
    "The Piano",
    "Southside With You",
    "Y Tu Mama Tambien",
    "Lone Star",
    "Hannah and Her Sisters",
    "Crazy Heart",
    "Kung Fu Hustle",
    "Open Hearts",
    "Obvious Child",
    "Husbands and Wives",
    "Black Panther",
    "The Wizard of Oz",
    "Mad Max Fury Road",
    "Wonder Woman",
    "ET The ExtraTerrestrial",
    "Metropolis",
    "Arrival",
    "Star Wars The Last Jedi",
    "Logan",
    "The Shape of Water",
    "Gravity",
    "Star Wars Episode VII The Force Awakens",
    "Nosferatu a Symphony of Horror",
    "Snow White and the Seven Dwarfs",
    "Thor Ragnarok",
    "The Bride of Frankenstein",
    "Alien",
    "Toy Story 2",
    "SpiderMan Homecoming",
    "War for the Planet of the Apes",
    "Toy Story 3",
    "Dr Strangelove Or How I Learned to Stop Worrying and Love the Bomb",
    "Frankenstein",
    "The Dark Knight",
    "Captain America Civil War",
    "Pinocchio",
    "Harry Potter and the Deathly Hallows Part 2",
    "Aliens",
    "Toy Story",
    "AntMan and the Wasp",
    "Star Wars Episode IV A New Hope",
    "WALLE",
    "Sorry to Bother You",
    "Invasion of the Body Snatchers",
    "Star Trek",
    "Kubo and the Two Strings",
    "The Terminator",
    "Marvels The Avengers",
    "The Martian",
    "Mary Poppins",
    "Beauty and The Beast",
    "Miracle on 34th Street",
    "Star Wars Episode V The Empire Strikes Back",
    "Snowpiercer",
    "2001 A Space Odyssey",
    "The Discreet Charm Of The Bourgeoisie",
    "Its a Wonderful Life",
    "Blade Runner 2049",
    "Her",
    "How to Train Your Dragon",
    "Avengers Infinity War",
    "8 12",
    "Yellow Submarine",
    "Guardians of the Galaxy",
    "Beauty and the Beast",
    "Iron Man",
    "The Princess Bride",
    "Forbidden Planet",
    "Ghostbusters",
    "The Nightmare Before Christmas",
    "Big",
    "Pans Labyrinth",
    "Fantasia",
    "The Day the Earth Stood Still",
    "Monsters Inc",
    "Doctor Strange",
    "XMen Days of Future Past",
    "The Lord of the Rings The Two Towers",
    "Live Die Repeat Edge of Tomorrow",
    "Looper",
    "Back to the Future",
    "Groundhog Day",
    "The Iron Giant",
    "Spirited Away",
    "Solaris",
    "Wings of Desire",
    "Gojira",
    "Dawn Of The Planet Of The Apes",
    "Song Of The Sea",
    "Mad Max 2 The Road Warrior",
    "Annihilation",
    "Close Encounters of the Third Kind",
    "Babe",
    "Ex Machina",
    "Jurassic Park",
    "Brazil",
    "10 Cloverfield Lane",
    "Blade Runner",
    "Repo Man",
    "Jodorowskys Dune",
    "The Lord of the Rings The Return of the King",
    "The Seventh Seal",
    "SpiderMan 2",
    "Captain America The Winter Soldier",
    "Children of Men",
    "The Secret World of Arrietty",
    "Invasion of the Body Snatchers",
    "The Evil Dead",
    "District 9",
    "Eternal Sunshine Of The Spotless Mind",
    "The Bride of Frankenstein",
    "Frankenstein",
    "Man on Wire",
    "Life Itself",
    "Miracle on 34th Street",
    "The Discreet Charm Of The Bourgeoisie",
    "Her",
    "Amy",
    "Taxi to the Dark Side",
    "Blackfish",
    "Murderball",
    "Groundhog Day",
    "Inside Job",
    "Jiro Dreams of Sushi",
    "The Square",
    "Hoop Dreams",
    "Mr Death The Rise and Fall of Fred A Leuchter Jr",
    "Afghan Star",
    "Capturing the Friedmans",
    "Waltz with Bashir",
    "The Overnighters",
    "Jodorowskys Dune",
    "The Interrupters",
    "How to Survive a Plague",
    "56 Up",
    "Last Train Home",
    "The Invisible War",
    "Spellbound",
    "Enron The Smartest Guys in the Room",
    "Love Is Strange",
    "The Act Of Killing",
    "This Is Not a Film",
    "Elaine Stritch Shoot Me",
    "The King of Kong A Fistful of Quarters",
    "The Fog of War Eleven Lessons from the Life of Robert S McNamara",
    "Bowling for Columbine",
    "The Imposter",
    "The War Tapes",
    "Cave of Forgotten Dreams",
    "Ai Weiwei Never Sorry",
    "Undefeated",
    "LannÃe derniÃre Ã Marienbad",
    "Sicko",
    "Mea Maxima Culpa Silence In The House Of God",
    "Blindsight",
    "The Devil Came on Horseback",
    "Call Me Kuchu",
    "For the Bible Tells Me So",
    "Let The Fire Burn",
    "Restrepo",
    "The Life and Times of Hank Greenberg",
    "Surfwise",
    "Bus 174",
    "Wordplay",
    "Control Room",
    "Burma VJ Reporter i et Lukket Land",
    "No End in Sight",
    "49 Up",
    "Winged Migration",
    "Muscle Shoals",
    "The Queen of Versailles",
    "Marley",
    "Finding Vivian Maier",
    "An Inconvenient Truth",
    "A Film Unfinished",
    "Bigger Stronger Faster",
    "Sweetgrass",
    "Trouble the Water",
    "To Be and to Have",
    "Food Inc",
    "The Wild Parrots of Telegraph Hill",
    "Chasing Ice",
    "20000 Days on Earth",
    "Exit Through The Gift Shop",
    "Shaun of the Dead",
    "The Gatekeepers",
    "Touching the Void",
    "Born Into Brothels",
    "Crumb",
    "I Am Divine",
    "Manakamana",
    "Deep Water",
    "The Last of the Unjust",
    "Cutie And The Boxer",
    "Brooklyn Castle",
    "Up the Yangtze",
    "Good Hair",
    "5 Broken Cameras",
    "National Gallery",
    "The Salt of the Earth",
    "Last Days in Vietnam",
    "Plagues Pleasures on the Salton Sea",
    "Promises",
    "The Arbor",
    "The Endurance",
    "Eraserhead",
    "Los Angeles Plays Itself",
    "Super Size Me",
    "My Winnipeg",
    "The Story of the Weeping Camel",
    "Murderball",
    "Hoop Dreams",
    "When We Were Kings",
    "The King of Kong A Fistful of Quarters",
    "Rocky",
    "Undefeated",
    "The Life and Times of Hank Greenberg",
    "Surfwise",
    "Touching the Void",
    "Red Army",
    "Battle of the Sexes",
    "The Fighter",
    "The Crash Reel",
    "Sugar",
    "The Damned United",
    "Boxing Gym",
    "Riding Giants",
    "Senna",
    "Dogtown and ZBoys",
    "The Color of Money",
    "Tristram Shandy A Cock Bull Story",
    "Up for Grabs",
    "Hoosiers",
    "Field of Dreams",
    "Girlfight",
    "The Heart of the Game",
    "Tyson",
    "Chariots of Fire",
    "The Hurricane",
    "Looking for Eric",
    "The Armstrong Lie",
    "Major League",
    "Goon",
    "Beyond the Mat",
    "The Boxer",
    "Invictus",
    "Fed Up",
    "A League of Their Own",
    "Step Into Liquid",
    "Once in a Lifetime The Extraordinary Story of the New York Cosmos",
    "Stoked The Rise and Fall of Gator",
    "Talladega Nights The Ballad of Ricky Bobby",
    "Invincible",
    "Gunnin for That 1 Spot",
    "Ultimate X The Movie",
    "The Blind Side",
    "More Than a Game",
    "Secretariat",
    "Dust to Glory",
    "NASCAR The IMAX Experience",
    "Glory Road",
    "The Sandlot",
    "Because of WinnDixie",
    "The Perfect Game",
    "Steep",
    "First Descent",
    "Soul Surfer",
    "Goal The Dream Begins",
    "The Replacements",
    "Beerfest",
    "Grudge Match",
    "Jiminy Glick in Lalawood",
    "Playing for Keeps",
    "Life Itself",
    "Afghan Star",
    "49 Up",
    "Room 237",
    "Behind the Candelabra",
    "A Film Unfinished",
    "The Return",
    "Being Elmo A Puppeteers Journey",
    "Not Quite Hollywood The Wild Untold Story of Ozploitation",
    "Los Angeles Plays Itself",
    "Lost in La Mancha",
    "Best Worst Movie",
    "Sing Your Song",
    "American Movie",
    "The Normal Heart",
    "Yoohoo Mrs Goldberg",
    "The Kid Stays in the Picture",
    "Side by Side",
    "Joan Rivers A Piece Of Work",
    "F for Fake",
    "Duel",
    "Saraband",
    "Cormans World Exploits Of A Hollywood Rebel",
    "Electric Boogaloo The Wild Untold Story of Cannon Films",
    "Tell Them Who You Are",
    "The Five Obstructions",
    "Doctor Zhivago",
    "This Film Is Not Yet Rated",
    "Trekkies",
    "Inside Deep Throat",
    "Outfoxed Rupert Murdochs War on Journalism",
    "Trumbo",
    "Confirmation",
    "Tupac Resurrection",
    "Overnight",
    "Teachers Pet",
    "POM Wonderful Presents The Greatest Movie Ever Sold",
    "Fellini Im a Born Liar",
    "My Date With Drew",
    "Only Human",
    "Waking Sleeping Beauty",
    "Porn Star The Legend of Ron Jeremy",
    "The Rugrats Movie",
    "Im Still Here",
    "No Strings Attached",
    "Bamboozled",
    "The Real Cancun",
    "I Am",
    "15 Minutes",
    "Man of the Year",
    "Pokemon 3 The Movie",
    "The Honeymooners",
    "From Justin To Kelly",
    "The Treasure of the Sierra Madre",
    "The Good the Bad and the Ugly",
    "High Noon",
    "The Searchers",
    "Rio Bravo",
    "Once Upon a Time in the West",
    "True Grit",
    "Unforgiven",
    "A Fistful of Dollars",
    "The Wild Bunch",
    "The Ballad of Buster Scruggs",
    "Johnny Guitar",
    "Giant",
    "Sweetgrass",
    "The Man Who Shot Liberty Valance",
    "Lone Star",
    "Butch Cassidy and the Sundance Kid",
    "310 to Yuma",
    "Django Unchained",
    "Blazing Saddles",
    "True Grit",
    "McCabe Mrs Miller",
    "Bone Tomahawk",
    "The Magnificent Seven",
    "Near Dark",
    "The Three Burials of Melquiades Estrada",
    "Meeks Cutoff",
    "The Proposition",
    "Dances With Wolves",
    "The Homesman",
    "The Hateful Eight",
    "The Good the Bad the Weird",
    "Open Range",
    "Shanghai Noon",
    "Appaloosa",
    "The Assassination of Jesse James by the Coward Robert Ford",
    "Hostiles",
    "Red Hill",
    "In a Valley of Violence",
    "The Keeping Room",
    "The Horse Whisperer",
    "Blackthorn",
    "Tombstone",
    "Fah talai jone",
    "The Magnificent Seven",
    "The Salvation",
    "Dead Man",
    "The Rover",
    "Maverick",
    "The Claim",
    "The Missing",
    "Heavens Gate",
    "Legends of the Fall",
    "The Quick and the Dead",
    "Sukiyaki Western Django",
    "The Killer Inside Me",
    "Seraphim Falls",
    "Ned Kelly",
    "Down in the Valley",
    "Cowboys Aliens",
    "Forsaken",
    "Jane Got a Gun",
    "Brimstone",
    "A Million Ways to Die in the West",
    "The Lone Ranger",
    "The Alamo",
    "The Warriors Way",
    "The Dark Tower",
    "Wild Wild West",
    "Priest",
    "American Outlaws",
    "September Dawn",
    "Jonah Hex",
    "Texas Rangers",
  ];
}
