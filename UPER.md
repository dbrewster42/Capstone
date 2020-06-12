The Problem Solving Framework : 'UPER'
U = "Understand"
P = "Plan"
E = "Execute"
R = "Reflect" / "Refactor"

1. Understanding the Problem

---

I need to find out whether the best way to navigate the site would be with toggles that swaps out components or if it would be best to the link the pages with react router // I originally planned to go with a single component that toggled the different pages in and out like I  would in Angular but using the router seemed to be the optimal solution for react.

I also don't exactly understand what it means by 'Search Functionality By Product Name' //asked and answered in slack

2. Planning the Solution

---

I have planned out the basic framework in my mind. I will dynamically build a grid system. A flex design that goes 3 across for each row, and if I have time, make it scalable for smaller screens. I will find out how to dynamically input the images of the book covers. I am going to have one main component for the home page with all the products, another page for the product details/option to buy with a quantity option. And finally a shopping cart where the user can "pay" for their books with a form to fill out below a total of all products selected.

Then I am going to edit the main page to make the inventory "dynamic" and, time permitting, will strike through any books that are sold out.

A search component, probably one that reorders the array of files alphabetically by author or genre

A header and possibly a fixed position footer that shows the status of the shopping cart but probably a sidebar where the search function resides

Bonus features- 1. a display option that sorts the items by author or genre 2.connect with stripe or paypal 3. doesn't allow user to purchase amount greater than inventory available 4. mutate JSON file 5. strike out sold out items

3. Executing the Plan

---

Search, shopping cart with item#, Display by genre

Started with main page, dynamically rendered all components. Then imported all pictures, trickier than I assumed. Ran into big block trying to link the pages. Turns out it was a syntax error in a separate file than was hitting the error. Related syntax problem solved by Jessica. 

Pretty easy sailing after that, created search bar, checkout page, and all other required components. Attempting to add a 3rd party payment processing (stripe) but having difficulty


4. Reflection / Refactor

---
I've refactored more times than I can count. Project now meets MVP requirements, will look to add on bonus' and stripe. If I can figure out what an employee view looks like then I can do that. 

I had a couple things I wanted to do that required a modulus operator inside the render and I guess I just have to scratch that