// Wait until the DOM is fully loaded before executing the script
$(document).ready(function() {

    // Set up a click event listener for the button with ID 'get-pokemon-button'
    $('#get-pokemon-button').on('click', function() {

        // Perform an AJAX GET request to the Pokémon API to fetch a list of Pokémon
        $.get('https://pokeapi.co/api/v2/pokemon/', function(data, status) {
            
            // The AJAX request returns data in the 'data' parameter and status in the 'status' parameter
            // Initialize an empty string to build the HTML for displaying the Pokémon list
            var string = "";
            
            // Start constructing a table to display the Pokémon names
            string += "<table class ='table'>"
            
            // Loop through each item (Pokémon) in the 'results' array from the API response
            $.each(data.results, function(index, item) {
                
                // For each Pokémon, create a table row with the Pokémon name as a clickable link
                // The URL for each Pokémon is available in the 'url' property
                // Add a 'Hide' button in each row to allow users to hide the respective Pokémon row
                string += "<tr><td><a href='" + item.url + "'>" + item.name + "</a></td><td><button class='hide-button btn btn-primary'>Hide</button></td></tr>"
            });
            
            // Close the table tag after iterating through the Pokémon list
            string += "</table>";

            // Insert the generated HTML (the table with Pokémon names) into the 'poke-list' element
            $('#poke-list').html(string);

            // If the AJAX request is successful (status is truthy)
            if (status) {
                
                // Attach a click event listener to each 'Hide' button
                // When clicked, it will hide the row of the Pokémon by selecting its parent elements
                $('.hide-button').on('click', function() {
                    // Hide the row containing the clicked button (this refers to the button that was clicked)
                    $(this).parent().parent().hide();
                });
            }

        });

    });

}); // End of the document ready function

// Example of conditional code; this part does not affect the AJAX code
if ('this_is' == /an_example/) {
    // A function call to 'of_beautifier()' if the condition is true (it’s just a placeholder)
    of_beautifier();
} else {
    // A ternary operation that evaluates a condition and returns different values based on that condition
    var a = b ? (c % d) : e[f];
}
