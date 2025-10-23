# Demo WishList

A responsive CRUD React application for managing personal wishes.

## Live Demo

🔗 [View on GitHub Pages](https://torry455.github.io/wishlist/)

## Tech Stack

- React (latest version)
- TypeScript
- Tailwind CSS
- Context API
- Custom hooks
- Fake REST API: [json-server](https://github.com/typicode/json-server)

## Features

- Add, update, delete wishes (CRUD)
- Sort by creation date (newest / oldest)
- Sort by price (high to low / low to high)
- Combine both filters simultaneously
- Paginated grid layout (6 cards per page)
- Wish detail page with attractive layout
- Modal form for adding/updating wishes
- Confirm modal for deletion
- Success/error snackbars for all API requests
- Responsive design (min width: 320px)

## App Structure

- **Dashboard**: filters, add button, grid of wish cards
- **WishCard**: image, title, description, price, action buttons
- **WishPage**: detailed view with image, title, description, and actions
- **FiltersBar**: two dropdowns for sorting
- **WishModalForm**: form with prefilled data for editing
- **ConfirmModal**: yes/no confirmation before deletion


▶️ How to Run the Project Locally
To launch the WishList app:

1. 	Clone the repository
Open your terminal and run:

git clone https://github.com/torry455/wishlist.git
cd wishlist

3. 	Install dependencies

npm install


5. 	Start the local API server
The app uses  to simulate a backend. Run:

npm run server


3. 	This will start the API at .
4. 	Start the React app
In a separate terminal window or tab, run:

npm start


4. 	The app will open in your browser at http://localhost:3000.


