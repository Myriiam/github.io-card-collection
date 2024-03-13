const moviesCollection = [
  {
    name: 'Madame Doubtfire',
    director: 'Chris Colombus',
    releaseYear: 1994,
    picture: 'images/doubfire.jpg',
    genre: ['Family', 'Comedy'],
    resume: "After a painful divorce, a middle-aged male disguises himself as a female to be a nanny to spend more time with his kids who are in the custody of their mother. He does everything that he can to keep them in his life ...",
    cast: ['Robin Williams', 'Sally Field', 'Matthew Lawrence', 'Mara Wilson'],
    trailer: "https://www.youtube.com/watch?v=3euGQ7-brs4",
  },
  {
    name: 'King Kong',
    director: 'Peter Jackson',
    releaseYear: 2005,
    picture: 'images/kingKong.jpg',
    genre: ['Action', 'Fiction'],
    resume: "Carl Denham needs to finish his movie and has the perfect location; Skull Island. No one knows what they will encounter on this island and why it is so mysterious. They will soon find out. Living on this hidden island is a giant gorilla ..." ,
    cast: ['Naomie Watts', 'Jack Black', 'Andy Serkis'],
    trailer: "https://www.youtube.com/watch?v=AYaTCPbYGdk",
  },
  {
    name: 'Jumanji',
    director: 'Joe Johnston',
    releaseYear: 1996,
    picture: 'images/jumanji.jpg',
    genre: ['Adventure', 'Family', 'Fantasy'],
    resume: "When two kids find and play a magical board game, they release a man trapped in it for decades - and a host of dangers that can only be stopped by finishing the game.",
    cast: ['Robin Williams', 'Kristen Dunst', 'Bradley Pierce', 'Bonnie Hunt', 'David Allan Grier'],
    trailer: "https://www.youtube.com/watch?v=eTjDsENDZ6s",
  },
  {
    name: 'The Mummy',
    director: 'Stephen Sommers',
    releaseYear: 1999,
    picture: 'images/mummy.jpg',
    genre: ['Action', 'Fiction', 'Fantasy'],
    resume: "At an archaeological dig in the ancient city of Hamunaptra, an American serving in the French Foreign Legion accidentally awakens a mummy who begins to wreak havoc as he searches for the reincarnation of his long-lost love.",
    cast: ['Brendan Fraser', 'John Hannah', 'Rachel Weisz', 'Arnold Vosloo'],
    trailer: "https://www.youtube.com/watch?v=f7oKxlaUBac",
  },
  {
    name: 'Harry Potter',
    director: 'Chris Columbus',
    releaseYear: 2001,
    picture: 'images/harryPotter.jpg',
    genre: ['Adventure', 'Family'],
    resume: "On his eleventh birthday, Harry Potter discovers that he is no ordinary boy. Hagrid, a beetle-eyed giant, tells Harry that he is a wizard and has a place at Hogwarts School of Witchcraft and Wizardry. And He'll learn the terrible evil that haunts the magical world.",
    cast: ['Daniel Radcliffe', 'Rupert Grint', 'Emma Watson', 'Alan Rickman', 'Tom Felton'],
    trailer: "https://www.youtube.com/watch?v=VyHV0BRtdxo",
  },
  {
    name: 'The Karate Kid',
    director: 'John G. Avildsen',
    releaseYear: 1984,
    picture: 'images/karate.jpg',
    genre: ['Action', 'Family'],
    resume: "Daniel LaRusso moves with his mother in sunny Los Angeles. And as if new beginnings weren't challenging enough, a gang of karate bullies have set their sights on making his life miserable. With no one to turn to for advice, Daniel has an encounter with Mr Miyagi...",
    cast: ['Pat Morita', 'Ralph Macchio', 'Elisabeth Shue', 'William Zabka', 'Martin Kove'],
    trailer: "https://www.youtube.com/watch?v=r_8Rw16uscg",
  },
];


moviesCollection.map((data) => {
    console.log(data);
    //Creation of the div : card
    const divCard = document.createElement("div");
    const cardsContainer = document.getElementsByClassName("cards-container")[0];
    cardsContainer.appendChild(divCard);
    divCard.classList.add("card");

    //Creation of the img tag
    const image = document.createElement("img");
    divCard.appendChild(image);
    image.setAttribute("src",`${data.picture}`);

    //Creation of the div : text-content
    const divText = document.createElement("div");
    divCard.appendChild(divText);
    divText.classList.add("text-content");

    //Creation of the div : categories 
    const divCatg = document.createElement("div");
    divText.appendChild(divCatg);
    divCatg.classList.add("categories");
    //Creation of p inside categories
        data.genre.forEach(element => {
        const p = document.createElement("p");
        divCatg.appendChild(p);
        p.classList.add("cat-1-blue");
        p.innerText = element;
    });

    //Creation of title/director/year
    const pTitle = document.createElement("p");
    const pAuthor = document.createElement("p");
    
    divText.appendChild(pTitle);
    divText.appendChild(pAuthor);
    
    pTitle.classList.add("title");
    pTitle.innerText = data.name;
    pAuthor.classList.add("author");
    pAuthor.innerText = data.director;
    //Creation of a span inside the pTitle
    const spanYear = document.createElement("span");
    pTitle.appendChild(spanYear);
    spanYear.classList.add("year");
    spanYear.innerText = " - "+ data.releaseYear;

    //Creation of the div : link
    const divLink = document.createElement("div");
    divText.appendChild(divLink);
    divLink.classList.add("link");
    //Creation of the a : trailer-link
    const a = document.createElement("a");
    divLink.appendChild(a);
    a.classList.add("trailer-link");
    a.setAttribute("href",`${data.trailer}`);
    a.setAttribute("target", "_blank");
    //Creation of th <i> icone inside the divLink
    let i = document.createElement("i");
    i.classList.add("fa-brands","fa-youtube", "fa-2xl");
    i.style.color = "#ed1707";
    a.appendChild(i);

    //Creation of the div : text
    const textDiv = document.createElement("div");
    divText.appendChild(textDiv);
    textDiv.classList.add("text");
    //Creation of p inside the div : text
    const pText = document.createElement("p");
    textDiv.appendChild(pText);
    pText.innerText = data.resume;


/***************** Extra *********************/
    //Create a button into a div to show or hide the resume
    const divButton = document.createElement("div");
    divText.appendChild(divButton);
    divButton.classList.add("button");
    const button = document.createElement("button");
    divButton.appendChild(button);
    button.classList.add("button-resume");
    button.innerText = "Show Synopsis";


    //Show or Hide the resume
    button.addEventListener("click", (e) => {
        textDiv.classList.toggle("show");
        let nodeTextContent = e.target.parentNode.parentNode.parentNode.querySelector(".text-content");
        if (textDiv.classList.contains("show")) {
            button.innerText = "Hide Synopsis";
            nodeTextContent.style.height = "400px";
        } else {
            button.innerText = "Show Synopsis";
            nodeTextContent.style.height = "270px";
        };
    });
});
