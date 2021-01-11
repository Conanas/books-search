let mongoose = require("mongoose");
const { Books } = require("../models");
let db = require("../models");

mongoose.connect("mongodb://localhost/booksearchdb", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let bookSeed = [
  {
    title: "Mythos: The Greek Myths Retold",
    authors: "Stephen Dry",
    description: "In Stephen Fry's vivid retelling we gaze in wonder as wise Athena is born from the cracking open of the great head of Zeus and follow doomed Persephone into the dark and lonely realm of the Underworld. We shiver when Pandora opens her jar of evil torments and watch with joy as the legendary love affair between Eros and Psyche unfolds. Mythos captures these extraodinary myths for our modern age - in all their dazzling and deeply human relevance.",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554890590l/45013685._SY475_.jpg",
    link: "https://www.goodreads.com/book/show/45013685-mythos"
  },
  {
    title: "White Fang",
    authors: "Jack London",
    description: "Fast-moving and accessible, each story in this series is a shortened, illustrated version of the classic novel, which loses none of the strength and flavour of the original. Each book also contains biographical details of the original author, and a glossary of unusual words and activity suggestions.",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1356458612l/371220.jpg",
    link: "https://www.goodreads.com/book/show/371220.White_Fang"
  },
  {
    title: "To Kill a Mockingbird",
    authors: "Harper Lee",
    description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. 'To Kill A Mockingbird' became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic. Compassionate, dramatic, and deeply moving, 'To Kill A Mockingbird' takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos.Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal.Harper Lee always considered her book to be a simple love story.Today it is regarded as a masterpiece of American literature.",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg",
    link: "https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird"
  },
  {
    title: "The Power of One",
    authors: "Bryce Courtney",
    description: "In 1939, as Hitler casts his enormous, cruel shadow across the world, the seeds of apartheid take root in South Africa. There, a boy called Peekay is born. His childhood is marked by humiliation and abandonment, yet he vows to survive and conceives heroic dreams, which are nothing compared to what life actually has in store for him. He embarks on an epic journey through a land of tribal superstition and modern prejudice where he will learn the power of words, the power to transform lives and the power of one.",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388184360l/122.jpg",
    link: "https://www.goodreads.com/book/show/122.The_Power_of_One"
  },
  {
    title: "The Da Vinci Code",
    authors: "Dan Brown",
    description: "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols. As Langdon and gifted French cryptologist Sophie Neveu sort through the bizarre riddles, they are stunned to discover a trail of clues hidden in the works of Leonardo da Vinci—clues visible for all to see and yet ingeniously disguised by the painter. Even more startling, the late curator was involved in the Priory of Sion—a secret society whose members included Sir Isaac Newton, Victor Hugo, and Da Vinci—and he guarded a breathtaking historical secret.Unless Langdon and Neveu can decipher the labyrinthine puzzle—while avoiding the faceless adversary who shadows their every move—the explosive, ancient truth will be lost forever.",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579621267l/968.jpg",
    link: "https://www.goodreads.com/book/show/968.The_Da_Vinci_Code"
  },
  {
    title: "Misery",
    authors: "Stephen King",
    description: "Paul Sheldon. He's a bestselling novelist who has finally met his biggest fan. Her name is Annie Wilkes and she is more than a rabid reader - she is Paul's nurse, tending his shattered body after an automobile accident. But she is also his captor, keeping him prisoner in her isolated house.",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554220401l/10614.jpg",
    link: "https://www.goodreads.com/book/show/10614.Misery"
  },
  {
    title: "The Light Fantastic",
    authors: "Terry Pratchett",
    description: "In The Light Fantastic only one individual can save the world from a disastrous collision. Unfortunately, the hero happens to be the singularly inept wizard Rincewind, who was last seen falling off the edge of the world...",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389554927l/34506.jpg",
    link: "https://www.goodreads.com/book/show/34506.The_Light_Fantastic"
  }
]

db.Books.deleteMany({})
  .then(() => db.Books.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });