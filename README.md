# tmc-clusters
A small app that sorts and filters data in a table.

**Set Up**

* Clone the repo
* cd into client directory and run ```npm install```, then run ```npm start```
* if it doesnt compile by chance, you may need to upgrade your node version to 15.2.0 (I noticed this issue when I cloned the project down to another computer where I was using a lower version of node). 
* Navigate to localhost:3000 in your browser
* Begin searching for relevant data in the search bar or click on the header cells to sort from high to low/alpha. 
* to reset the search either click the "X" icon in the search bar, or completely delete any text in search. 


**Description**

tmc-clusters is an app I developed using Typescript and React. It grabs static data and puts it in a table that is searchable and sortable. I used an npm package called `react-data-table-component` as well as another npm package called `material-ui-search-bar`. These packages were quick to implement, and the table was especially simple because it gave me pagination as well as sorting out of the box with just a few props to add. I found these packages had plenty of documentation and a robust community answering questions. 

**Challenges**

One of the biggest challenges came when I tried to start testing. I think some of the enzyme, jest setup wasn't totally correct, I had issues getting mount to work so I wasn't able to get past the shell of the componets to test them. I would have normally spent time investigating and looking up answers to similar problems to get that working, but in light of keeping within 3 hours of time spent, I decided to forego the testing. Had I been able to get mount working I would have 
1. simulated an onChange event when testing the search and expected that the state of value is being changed.
2. simulated an onClick event of clearing out my search and expected that the data matches the initialData prop. 
3. checked that the data being returned had the same words being searched in it. 

when testing the table I would have tested there was data in it that matches initialData on page load. I would have simulated 2 clicks on one of the cell headers and expected that the data retured be in some sort. The first expecting an ascending order and the second click expecting a descending order.

I also didnt have time to work on the Add another row feature. Had I had time I would have used localstorage since this is such a small app. I'm not entirely sure how I would have structured this. Perhaps adding an Add button, which brings up a form with inputs for all the relevant data and on submit it would push that object of new data into the data array and then would be populated in the table. 

Overall this project was fun to work on and I got familiar with a few new packages!

**Screenshot**

<img width="1280" alt="Screen Shot 2020-12-19 at 12 33 54 PM" src="https://user-images.githubusercontent.com/18603030/102697871-8ab7e580-41f6-11eb-8f6a-9e23011b46a2.png">

