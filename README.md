## Plan for From Scratch List / Detail using Supabase

### Supabase Setup

1. Need to setup your supabase database -- add your table with you <thing> -- remember that object keys are columns, and object values are rows
1. Update the fetch-utils.js with your supabase URL and key
1. ACP

### Design Your List Page

1. Design list item -- add the HTMl elements that you want to display on the list
1. TDD my render function for that list item
1. ACP

### Connect Render Function to Data and Display (list page)

1. Add fetchItems function to fetchUtils.js
1. Update your app.js
    1. Get the data from supabase (using fetchItems function) (console.log to make sure the data is coming back)
    1. loop through each item from supabase and use the render function
    1. append the html to the page
1. ACP

### Design Your Detail Page

1. Design detail page -- add the HTMl elements that you want to display on the list
1. TDD render function for the detail
1. ACP

### Connect Render Function to Data and Display (detail page)

1. Add fetchItemById function to fetchUtils
1. Update your detail.js
    1. Get the data from supabase (using fetchItemsById function) (console.log to make sure the data is coming back)
    1. render the item using render function
    1. append the html to the page
1. ACP