# Forkify: Recipe Search and Management Application

## Project Overview

**Forkify** is a modern, single-page web application designed for searching, viewing, and managing millions of recipes. Built with a focus on clean architecture and modern JavaScript, it allows users to search for recipes, adjust serving sizes, bookmark favorites, and even upload their own recipes to the public API.

The application is a front-end project that interacts with the **Forkify API** to fetch and manage recipe data.

## Features

- **Recipe Search:** Search over 1,000,000 recipes using keywords.

- **Detailed Recipe View:** View comprehensive details for any selected recipe, including ingredients, cooking time, and publisher.

- **Servings Adjustment:** Dynamically adjust the number of servings, which automatically recalculates ingredient quantities.

- **Bookmarks:** Save favorite recipes locally using `localStorage` for persistence.

- **Pagination:** Navigate through search results with clear pagination controls.

- **User Recipe Upload:** Upload new recipes to the Forkify API, which are automatically bookmarked and marked as user-generated.

- **Clean Architecture:** Implements a clear separation of concerns using a Model-View-Controller (MVC) pattern.

## Technology Stack

The project is built using modern web technologies and a robust development setup:

| Category | Technology | Purpose |
| --- | --- | --- |
| **Core Language** | JavaScript (ES6+) | Application logic and interactivity. |
| **Bundler** | Parcel | Fast, zero-configuration web application bundler. |
| **Styling** | SASS/SCSS | CSS preprocessor for maintainable and modular styles. |
| **Polyfills** | `core-js`, `regenerator-runtime` | Ensures compatibility with older browsers for modern features like `async/await`. |
| **Utility** | `fractional` | Used for handling and displaying fractional ingredient quantities. |

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (or [pnpm](https://pnpm.io/)) installed on your system.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Yiranubari/Forkify.git
   cd Forkify
   ```

1. **Install dependencies:**

   ```bash
   npm install
   # or
   pnpm install
   ```

### Running the Application

#### Development Mode

To run the application in development mode with hot-reloading:

```bash
npm start
# or
pnpm start
```

This will start the Parcel development server, typically at `http://localhost:1234`.

#### Production Build

To create a production-ready build of the application:

```bash
npm run build
# or
pnpm run build
```

The optimized files will be generated in the `dist/` directory.

## Architecture and Data Flow

The project follows a structured Model-View-Controller (MVC ) pattern to manage complexity:

- **Model (****`src/js/model.js`****):** Manages the application state, handles all business logic, and communicates with the external Forkify API for data fetching, searching, and uploading. It also manages local storage for bookmarks.

- **Views (****`src/js/views/*.js`****):** Responsible for rendering the UI and handling presentation logic. Each major component (recipe, search results, pagination, bookmarks, add recipe modal) has its own view.

- **Controller (****`src/js/controller.js`****):** Acts as the bridge between the Model and the Views. It handles all user events (e.g., search submission, serving updates, bookmark clicks) and delegates tasks to the Model, then instructs the Views to render or update the UI based on the new state.

The repository includes architectural diagrams that visually represent the data flow and component interaction:

- `forkify-architecture-recipe-loading.png`

- `forkify-flowchart-part-1.png`

- `forkify-flowchart-part-2.png`

- `forkify-flowchart-part-3.png`

## API Integration

The application uses the public **Forkify API** (`https://forkify-api.jonas.io/api/v2/recipes/` ) for all recipe data.

A personal API key is configured in `src/js/config.js` to allow for the uploading of new recipes. **Note:** If you intend to fork and deploy this project, you may need to register for your own API key to enable the recipe upload functionality.

## Author

- **Yiranubari Maamaa** (The author's name is listed in `package.json` and the copyright in `index.html`).

