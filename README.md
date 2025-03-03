# Pokémon List Fetcher

This project fetches a list of Pokémon from the [PokéAPI](https://pokeapi.co) using jQuery and AJAX, and displays it in a table format on a webpage. Each Pokémon name is a clickable link that takes you to the detailed page of that Pokémon. Additionally, there is a "Hide" button to hide any Pokémon row.

## Features

- Fetches a list of Pokémon from the PokéAPI.
- Displays the list in a table with Pokémon names.
- Each name is a clickable link that redirects to the Pokémon's detailed page.
- Each row has a "Hide" button to hide the Pokémon.

## How to Use

1. Ensure you have the latest version of jQuery included in your project. You can include it from a CDN, like so:

    ```html
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    ```

2. Create a button in your HTML with the ID `get-pokemon-button` to trigger the API request:

    ```html
    <button id="get-pokemon-button">Get Pokémon</button>
    ```

3. Create a div (or any other container) where the Pokémon list will be injected:

    ```html
    <div id="poke-list"></div>
    ```

4. Add the provided JavaScript code within a `<script>` tag to handle the AJAX request and DOM manipulation.

5. Once the "Get Pokémon" button is clicked, a list of Pokémon will be fetched and displayed in a table format. You can hide a row by clicking the "Hide" button in that row.

## How It Works

- **AJAX Request:** The script uses `$.get()` to fetch data from the PokéAPI. The URL `https://pokeapi.co/api/v2/pokemon/` provides a list of Pokémon.
  
- **Table Creation:** Upon receiving the data, the script constructs a table where each row contains the name of a Pokémon as a clickable link (directing to the Pokémon's detailed page) and a "Hide" button to remove the row.

- **Hide Functionality:** When a "Hide" button is clicked, the corresponding row is hidden using jQuery's `.hide()` method.

URL to access - https://tripathyelima1989.github.io/JS-Project/index.html 
  
