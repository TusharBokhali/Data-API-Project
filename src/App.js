import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './App-Employess';
import SecondPage from './App-investors';
function Libarray(){
  let inver = [
      {
        "id": 1,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "ISBN": "9780061120084",
        "genre": "Fiction",
        "publicationDate": "1960-07-11",
        "availableCopies": 10
      },
      {
        "id": 2,
        "title": "1984",
        "author": "George Orwell",
        "ISBN": "9780451524935",
        "genre": "Fiction",
        "publicationDate": "1949-06-08",
        "availableCopies": 5
      },
      {
        "id": 3,
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "ISBN": "9780141439518",
        "genre": "Romance",
        "publicationDate": "1813-01-28",
        "availableCopies": 15
      },
      {
        "id": 4,
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "ISBN": "9780316769488",
        "genre": "Fiction",
        "publicationDate": "1951-07-16",
        "availableCopies": 8
      },
      {
        "id": 5,
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "ISBN": "9780590353427",
        "genre": "Fantasy",
        "publicationDate": "1997-06-26",
        "availableCopies": 20
      },
      {
        "id": 6,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "ISBN": "9780743273565",
        "genre": "Fiction",
        "publicationDate": "1925-04-10",
        "availableCopies": 12
      },
      {
        "id": 7,
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "ISBN": "9780345339683",
        "genre": "Fantasy",
        "publicationDate": "1937-09-21",
        "availableCopies": 18
      },
      {
        "id": 8,
        "title": "Jane Eyre",
        "author": "Charlotte Brontë",
        "ISBN": "9780141441146",
        "genre": "Romance",
        "publicationDate": "1847-10-16",
        "availableCopies": 6
      },
      {
        "id": 9,
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "ISBN": "9780261103252",
        "genre": "Fantasy",
        "publicationDate": "1954-07-29",
        "availableCopies": 10
      },
      {
        "id": 10,
        "title": "Moby-Dick",
        "author": "Herman Melville",
        "ISBN": "9780142437247",
        "genre": "Adventure",
        "publicationDate": "1851-10-18",
        "availableCopies": 7
      },
      {
        "id": 11,
        "title": "The Adventures of Huckleberry Finn",
        "author": "Mark Twain",
        "ISBN": "9780142437179",
        "genre": "Adventure",
        "publicationDate": "1884-12-10",
        "availableCopies": 9
      },
      {
        "id": 12,
        "title": "The Chronicles of Narnia",
        "author": "C.S. Lewis",
        "ISBN": "9780066238500",
        "genre": "Fantasy",
        "publicationDate": "1950-10-16",
        "availableCopies": 14
      },
      {
        "id": 13,
        "title": "Frankenstein",
        "author": "Mary Shelley",
        "ISBN": "9780141439471",
        "genre": "Horror",
        "publicationDate": "1818-01-01",
        "availableCopies": 11
      },
      {
        "id": 14,
        "title": "The Odyssey",
        "author": "Homer",
        "ISBN": "9780140268867",
        "genre": "Epic Poetry",
        "publicationDate": "8th century BCE",
        "availableCopies": 16
      },
      {
        "id": 15,
        "title": "The Picture of Dorian Gray",
        "author": "Oscar Wilde",
        "ISBN": "9780141442464",
        "genre": "Gothic Fiction",
        "publicationDate": "1890-07-20",
        "availableCopies": 13
      },
      {
        "id": 16,
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "ISBN": "9780060850524",
        "genre": "Science Fiction",
        "publicationDate": "1932-06-01",
        "availableCopies": 10
      },
      {
        "id": 17,
        "title": "The Road",
        "author": "Cormac McCarthy",
        "ISBN": "9780307387899",
        "genre": "Dystopian Fiction",
        "publicationDate": "2006-09-26",
        "availableCopies": 8
      },
      {
        "id": 18,
        "title": "Wuthering Heights",
        "author": "Emily Brontë",
        "ISBN": "9780141439556",
        "genre": "Gothic Fiction",
        "publicationDate": "1847-12-19",
        "availableCopies": 9
      },
      {
        "id": 19,
        "title": "The Count of Monte Cristo",
        "author": "Alexandre Dumas",
        "ISBN": "9780140449266",
        "genre": "Adventure",
        "publicationDate": "1844-08-28",
        "availableCopies": 12
      },
      {
        "id": 20,
        "title": "The Secret Garden",
        "author": "Frances Hodgson Burnett",
        "ISBN": "9780141321066",
        "genre": "Children's Literature",
        "publicationDate": "1911-08-16",
        "availableCopies": 15
      },
      {
        "id": 21,
        "title": "Anna Karenina",
        "author": "Leo Tolstoy",
        "ISBN": "9780143035008",
        "genre": "Novel",
        "publicationDate": "1877-03-14",
        "availableCopies": 7
      },
      {
        "id": 22,
        "title": "The Divine Comedy",
        "author": "Dante Alighieri",
        "ISBN": "9780141197494",
        "genre": "Epic Poetry",
        "publicationDate": "1320",
        "availableCopies": 10
      },
      {
        "id": 23,
        "title": "The Brothers Karamazov",
        "author": "Fyodor Dostoevsky",
        "ISBN": "9780140449242",
        "genre": "Philosophical Novel",
        "publicationDate": "1880-11-16",
        "availableCopies": 11
      },
      {
        "id": 24,
        "title": "The Iliad",
        "author": "Homer",
        "ISBN": "9780140275360",
        "genre": "Epic Poetry",
        "publicationDate": "8th century BCE",
        "availableCopies": 14
      },
      {
        "id": 25,
        "title": "Les Misérables",
        "author": "Victor Hugo",
        "ISBN": "9780451419439",
        "genre": "Historical Fiction",
        "publicationDate": "1862-03-30",
        "availableCopies": 6
      },
      {
        "id": 26,
        "title": "The Grapes of Wrath",
        "author": "John Steinbeck",
        "ISBN": "9780143039433",
        "genre": "Realist Novel",
        "publicationDate": "1939-04-14",
        "availableCopies": 9
      },
      {
        "id": 27,
        "title": "Gone with the Wind",
        "author": "Margaret Mitchell",
        "ISBN": "9781416548942",
        "genre": "Historical Fiction",
        "publicationDate": "1936-06-30",
        "availableCopies": 8
      },
      {
        "id": 28,
        "title": "Crime and Punishment",
        "author": "Fyodor Dostoevsky",
        "ISBN": "9780140449136",
        "genre": "Psychological Fiction",
        "publicationDate": "1866-12-22",
        "availableCopies": 12
      },
      {
        "id": 29,
        "title": "The Canterbury Tales",
        "author": "Geoffrey Chaucer",
        "ISBN": "9780140424386",
        "genre": "Poetry",
        "publicationDate": "1400",
        "availableCopies": 10
      },
      {
        "id": 30,
        "title": "One Hundred Years of Solitude",
        "author": "Gabriel García Márquez",
        "ISBN": "9780060883287",
        "genre": "Magical Realism",
        "publicationDate": "1967-05-30",
        "availableCopies": 11
      },
      {
        "id": 31,
        "title": "Middlemarch",
        "author": "George Eliot",
        "ISBN": "9780141196893",
        "genre": "Novel",
        "publicationDate": "1871-12-01",
        "availableCopies": 7
      },
      {
        "id": 32,
        "title": "Don Quixote",
        "author": "Miguel de Cervantes",
        "ISBN": "9780142437230",
        "genre": "Novel",
        "publicationDate": "1605-01-16",
        "availableCopies": 9
      },
      {
        "id": 33,
        "title": "The Old Man and the Sea",
        "author": "Ernest Hemingway",
        "ISBN": "9780684801223",
        "genre": "Novella",
        "publicationDate": "1952-09-01",
        "availableCopies": 10
      },
      {
        "id": 34,
        "title": "Ulysses",
        "author": "James Joyce",
        "ISBN": "9781840226355",
        "genre": "Modernist Novel",
        "publicationDate": "1922-02-02",
        "availableCopies": 8
      },
      {
        "id": 35,
        "title": "The Sun Also Rises",
        "author": "Ernest Hemingway",
        "ISBN": "9780743297332",
        "genre": "Novel",
        "publicationDate": "1926-10-22",
        "availableCopies": 6
      },
      {
        "id": 36,
        "title": "David Copperfield",
        "author": "Charles Dickens",
        "ISBN": "9780140439441",
        "genre": "Novel",
        "publicationDate": "1850-11-01",
        "availableCopies": 11
      },
      {
        "id": 37,
        "title": "War and Peace",
        "author": "Leo Tolstoy",
        "ISBN": "9780143039990",
        "genre": "Historical Novel",
        "publicationDate": "1869-01-01",
        "availableCopies": 12
      },
      {
        "id": 38,
        "title": "The Scarlet Letter",
        "author": "Nathaniel Hawthorne",
        "ISBN": "9780142437261",
        "genre": "Romance Novel",
        "publicationDate": "1850-03-16",
        "availableCopies": 9
      },
      {
        "id": 39,
        "title": "The Wind in the Willows",
        "author": "Kenneth Grahame",
        "ISBN": "9780143039099",
        "genre": "Children's Literature",
        "publicationDate": "1908-10-08",
        "availableCopies": 13
      },
      {
        "id": 40,
        "title": "The Three Musketeers",
        "author": "Alexandre Dumas",
        "ISBN": "9780140437645",
        "genre": "Historical Adventure",
        "publicationDate": "1844-03-14",
        "availableCopies": 10
      },
      {
        "id": 41,
        "title": "The Grapes of Wrath",
        "author": "John Steinbeck",
        "ISBN": "9780140186406",
        "genre": "Realist Novel",
        "publicationDate": "1939-04-14",
        "availableCopies": 8
      },
      {
        "id": 42,
        "title": "The Call of the Wild",
        "author": "Jack London",
        "ISBN": "9780143039198",
        "genre": "Adventure Novel",
        "publicationDate": "1903-06-01",
        "availableCopies": 11
      },
      {
        "id": 43,
        "title": "Alice's Adventures in Wonderland",
        "author": "Lewis Carroll",
        "ISBN": "9780141439761",
        "genre": "Fantasy",
        "publicationDate": "1865-11-26",
        "availableCopies": 14
      },
      {
        "id": 44,
        "title": "The Importance of Being Earnest",
        "author": "Oscar Wilde",
        "ISBN": "9780141439693",
        "genre": "Comedy",
        "publicationDate": "1895-02-14",
        "availableCopies": 9
      },
      {
        "id": 45,
        "title": "Walden",
        "author": "Henry David Thoreau",
        "ISBN": "9780140390445",
        "genre": "Philosophy",
        "publicationDate": "1854-08-09",
        "availableCopies": 12
      },
      {
        "id": 46,
        "title": "Great Expectations",
        "author": "Charles Dickens",
        "ISBN": "9780141439563",
        "genre": "Novel",
        "publicationDate": "1861-12-01",
        "availableCopies": 7
      },
      {
        "id": 47,
        "title": "Slaughterhouse-Five",
        "author": "Kurt Vonnegut",
        "ISBN": "9780385333849",
        "genre": "Satirical Novel",
        "publicationDate": "1969-03-31",
        "availableCopies": 10
      },
      {
        "id": 48,
        "title": "Oliver Twist",
        "author": "Charles Dickens",
        "ISBN": "9780141439747",
        "genre": "Novel",
        "publicationDate": "1838-11-01",
        "availableCopies": 8
      },
      {
        "id": 49,
        "title": "The Time Machine",
        "author": "H.G. Wells",
        "ISBN": "9780141439976",
        "genre": "Science Fiction",
        "publicationDate": "1895-05-07",
        "availableCopies": 9
      },
      {
        "id": 50,
        "title": "The Jungle Book",
        "author": "Rudyard Kipling",
        "ISBN": "9780141325293",
        "genre": "Children's Literature",
        "publicationDate": "1894-11-01",
        "availableCopies": 11
      }
    ]
  return(
      <>
      <h1 align='center'>Library catelog</h1>
              <table border="1" width="100%" cellPadding="5" cellSpacing="0">
                  <tr>
                    <td>id</td>
                    <td>title</td>
                    <td>author</td>
                    <td>ISBN</td>
                    <td>genre</td>
                    <td>publicationDate</td>
                    <td>availableCopies</td>
                  </tr>
                    {
                      inver.map(function (el){
                        return ( <tr>
                          <td>{el.id}</td>
                          <td>{el.title}</td>
                          <td>{el.author}</td>
                          <td>{el.ISBN}</td>
                          <td>{el.genre}</td>
                          <td>{el.publicationDate}</td>
                          <td>{el.availableCopies}</td>
                        </tr>
                        
                        )
                      })
                    }
                  
              </table>
              
      </>
  )
}
export default Libarray