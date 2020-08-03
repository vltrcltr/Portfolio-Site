# Project Explanation
This is a personal portfolio site created using React.js. I wanted to learn and utilize React because it seemed fairly intuitive, and a cool new approach to structure a website from the ways I had become used to. It’s by no means perfect, and I still have some things to learn, but it definitely taught me a lot and I look forward to learning more.

##API.js
This is a simple api I built to handle standardized information pertaining to clients and associated projects, with the intent on minimizing the amount of components I’d have to import. There are two functions that will either retrieve all the information from the data array (**all()**), or return specific information based on an id number given to each project (**get()**). The project number is also used to handle navigation utilized by components.

## Components

#### AboutMe.js
Some information about myself.

#### Client.js
Uses the const ‘project’ that utilizes the API’s **get()** function to retrieve client information based on the corresponding id number. It returns multiple divs with the client, description of the project, and also maps through an array of images pertaining to the specific project. There are also links that navigate to the previous or next project in the data array.

#### componentViewport.js
Works in conjunction with **viewportCheck.js** to determine the user’s device viewport size. If it is above a width of 768px, it will return either the mobile or desktop version of the site. It is the final step before being exported to **App.js**.

#### Final.js
There are two components that are exported to the **componentViewport.js**: *AppMobile* and *AppDesktop*. They each coordinate the final step of the overall routing, as the desktop version has multiple divs that require unique routing.

#### Header.js
There are two header components, one for mobile and another for desktop. The main difference lies in the navigation. With mobile, it requires a link to the Project List, as all information is routed to the same div (**mainContainer**). In the desktop version, no Project link is required because the Project List remains permanent, while the selected project link is routed to a new div (**mainContainer2**).

#### Main.js
Controls the main routing for mobile and desktop versions of the site. **Main()** is for mobile, in which all navigation is routed through the *MainContainer* div. **MainDesktop()** switches the routing so that the Project Links are permanently shown on the *MainContainer* div. **Main2Desktop()** routes the selected projects and the About section to the *MainContainer2* div, which is exclusive to the desktop version. These are then exported to **Final.js**.

#### ProjectList.js
Uses the API’s all() function to map through the data array and retrieve selected information to be shown in the *MainContainer* div. **ProjectList()** is then exported to **Projects.js**.


#### Projects.js
Handles the ProjectList navigation routing for Mobile and Desktop versions of the site, which are then exported to **Main.js**.

## Hooks

#### viewportCheck.js
const **ViewportContext** utilizes **React.createContext()** in tandem with const **ViewportProvider()** to target the { children } within the context. It checks the user’s window.innerwidth every 200ms (handled by **throttledWindowResize** attached to a window.addEventListener) to see if it has been resized, and will apply the necessary changes. In this case, it controls whether the site is in Mobile or Desktop mode. It is then exported to the very top level to **index.js**, which then wraps around the App component.
