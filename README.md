# BookFinder

Book Finder is a React web application that allows users to search for books by title and view key details about each book. It uses the Open Library API to fetch real-time book data.

## Purpose
- Quickly find information about books by searching their titles.
- View author, publication year, edition count, and direct links to Open Library.

## Main Features

- Search for books by title using the Open Library API
- Display search results in a clean, card-based layout
- View book details: title, author(s), first publish year, edition count
- Direct link to each book’s Open Library page
- Responsive design for desktop and mobile
- Error handling for failed searches or empty results
- Loading indicator while fetching data
- User-friendly messages for no results or errors
- Modular component structure for easy maintenance

## Technologies Used

- **React**: Frontend library for building user interfaces with components and hooks
- **CSS**: Custom styles for layout and responsive design
- **Open Library API**: Source for real-time book data
- **Fetch API**: Used for making HTTP requests to fetch book data
- **gh-pages**: Tool for deploying the app to GitHub Pages

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Getting Started

Follow these steps to set up and run the Book Finder app locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/AyushBhardwaj611/BookFinder.git
   cd BookFinder
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm start
   ```
4. **Open the app in your browser**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

You can now search for books and explore the features locally!

## How to Use

- Enter a book title in the search bar and click the "Search" button.
- View the list of matching books displayed as cards with title, author, year, and edition info.
- Click the "View Book" link on any card to open the book’s page on Open Library.
- If no results are found or an error occurs, a message will be shown.
- The app provides loading and error indicators for a smooth user experience.

## Live Demo

You can access the live Book Finder app here:

[Book Finder on GitHub Pages](https://AyushBhardwaj611.github.io/BookFinder)

Simply open the link in your browser to start searching for books instantly.

## Main Components & Responsibilities

| Component    | Responsibility                                                      |
|--------------|---------------------------------------------------------------------|
| Home         | Main page; manages search, loading, error, and displays BookList     |
| SearchBar    | Input field and button for entering and submitting search queries    |
| BookList     | Displays a list of books or a no-results message                    |
| BookCard     | Shows individual book details (title, author, year, editions, link) |
| useBooks     | Custom hook for fetching books and managing state                    |
| openLibrary  | API utility for making requests to Open Library                      |
| helpers      | Utility functions for formatting and other logic                     |

## AI Assistance

ChatGPT was used throughout the development of the Book Finder app to:
- Design the project structure and component architecture
- Generate and refine React component code and custom hooks
- Suggest best practices for state management and API integration
- Provide CSS styling and UI improvements
- Troubleshoot issues and guide deployment to GitHub Pages

This accelerated the build process and ensured clean, maintainable code.

## Future Improvements & Advanced Features

- Add search by author, ISBN, or subject
- Implement pagination for large result sets
- Allow users to save favorite books
- Add book cover images to results
- Integrate user authentication for personalized features
- Provide filters and sorting options (e.g., by year, author)
- Add dark mode and theme customization
- Display more detailed book info (description, publisher, etc.)
- Improve accessibility and mobile experience
- Add unit and integration tests for reliability
