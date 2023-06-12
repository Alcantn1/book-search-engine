# book-search-engine

## Description
This challenge focuses on refactoring a fully functioning Google Books API search engine from a RESTful API to a GraphQL API using the MERN stack (MongoDB, Express.js, React, Node.js) and Apollo Server.

The application allows users to search for books, save them to their account, and view their saved books. It also provides user authentication functionality, allowing users to sign up and log in to their accounts.





## Installation

To run the Book Search Engine locally, follow these steps:

1.Clone the repository.
2.Navigate to the project's root directory.
3.Install the dependencies by running the following command:
npm install
4.Set up a MongoDB database.
5.Create a .env file in the root directory and provide the necessary environment variables. Refer to .env.example for the required variables.
6.Start the application by running the following command:
npm start (in client directory)



## Usage
Once the application is running, you can access it by visiting http://localhost:3000 in your web browser. The following functionality is available:

Search for Books: Use the search bar on the homepage to search for books. The search results will be displayed with book details such as title, author, description, image, and a link to the book on the Google Books site.
Authentication: Click on the "Login/Signup" menu option to open a modal.
Saving Books: When logged in, each search result will have a "Save This Book!" button. Clicking the button will save the book to the user's account.
Viewing Saved Books: When logged in, click on the "See Your Books" menu option to view the books saved in the user's account. The saved books will be displayed with their details and an option to remove a book from the list.

## Credits

N/A

## License

Please refer to the LICENSE in the repo