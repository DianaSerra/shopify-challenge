# The Shoppies!

![Main Page](/demo_images/The_Shoppies_Home.png)

This little web app was made using ReactJS as a submission to the 2020 shopify front end internship challenge. It is deployed at : https://the-shoppies-diana.herokuapp.com/

## The Challenge

We need a webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

We'd like a simple to use interface that makes it easy to:

1. Search OMDB and display the results (movies only)
2. Add a movie from the search results to our nomination list
3. View the list of films already nominated
4. Remove a nominee from the nomination list

## UI Design

Though the end product was a little different, the [initial UI layout](https://www.figma.com/file/E8CigwDUUtNEqBHSQIXvLd/The-Shoppies?node-id=0%3A1) was done on figma. The concept was to make the layout as simple and minimal as possible, while giving it fun elements like the little trophy icons, and the old-hollywood-marquee-inspired header.

## Demo

The main feature of this app, is of course, nomination. To nominate a film, simply type the name into the search bar and click "nominate" on the films you want included in the list.

![Main Nomination](/demo_images/Main_Nominate.png)

Alternatively, if you want to see more details about the film before nominating, click "More Details" and a Modal with further information about the film will appear. You can also nominate the film straight from the Modal.

![More Details](/demo_images/More_Details.png)
![Modal](/demo_images/Modal.png)

Lastly, once you nominate the movie, it should appear on the rightmost box, along with a small "x" button that you can click to delete it from the list.

![Nomination List](/demo_images/Nomination_List.png)

## Future Scope

I had so much fun with this little project and had so many features I wish I had the time to implement so here are a few of my ideas:

- Instead of just Stitch popping up to give the "no results found" message, have a huge folder of many different movie characters/scenes/gifs to draw from and randomly get a different one every time
- Be able to drag and drop items in the list to change the order of the 5 nominations (assuming ordering matters in these lists)
- Making this a full fledged app with a login process for each employee and a database that stores submissions, maybe even using an algorithm in the backend to keep track of who the current winners are office-wide.
- Being able to look up another employees nomination list to see what kind of movies your work friends like!
- Have a confetti animation that accompanies the modal telling you your nomination list is full
- Fun sound effects!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
