---
site_title: IPA API
layout: work.liquid
permalink: /ipa-api/
favicon: 🍺
id_name: ipa-api
tags: project
project_title: IPA API
project_thumbnail_color: "/assets/images/api-color.png" 
project_thumbnail_bw: "/assets/images/api-bw.png" 
thumbnail_alt: Preview of a digital beer menu that filters beers by style, ABV, and IBU.
project_thumbnail1: "/assets/images/project3.png" 
project_thumbnail2: "/assets/images/project3.png" 
project_thumbnail3: "/assets/images/project3.png" 

# thumbnail_alt: 
project_summary: A digital beer menu that filters beers by style, ABV, and IBU.
project_type: Personal
project_role: Front-end development, visual design
project_stack: JavaScript, HTML, CSS 
project_demo: https://hipstina.github.io/ipa-api
project_code: https://github.com/hipstina/ipa-api
status: enabled

---
### Overview
A web app that allows the user to generate a custom beer menu by filtering beers by style, ABV, and IBU. **Key feature:** Client side tools fetch and filter beers styles from an API.

### Purpose & Goal
I was charmed by <a href="https://www.taniarascia.com/" target="_blank" rel="noopener noreferrer">Tania Rascia's</a><span class="sr-only">Opens in new window</span> simple exercise for <a href="https://tania.dev/how-to-connect-to-an-api-with-javascript" target="_blank" rel="noopener noreferrer">connecting to an API with plain Javascript</a><span class="sr-only">Opens in new window</span>, and so I decided to expand upon her tutorial and make my web app interactive, too. To keep things simple, I picked a free, open-source API that didn't require authentication or a password to connect to the data. I also chose this API as it happened to be related to a passion of mine: craft beer. 

Building this web app gave me experience working with the XMLHttpRequest object and the opportunity to build a client-side tool for rendering filtered API data. It also gave me a chance to create the kind of tool that I'd like to see on a beer site or digital bar menus: visually informative and targeting amateur or less experienced beer drinkers.

<figure class="prj-fig" aria-labelledby="{{id_name}}-img" role="group">
<img id="{{id_name}}-img" class="prj-img" src="{{project_thumbnail_color}}" alt="{{thumbnail_alt}}">
<figcaption class="fig-caption">↑ A caption for my project.</figcaption>
</figure>

### Thought process
An issue I faced during development was in constructing a new XMLHttpRequest based on user triggered events. I needed to chain together one or multiple parameters and update the rendered data everytime a filter changed states. I solved this by storing the user input value and then using a separate function to check the current state of the other filter types. 

Another issue I faced was repainting an updated Menu everytime a new search filter was (de)selected. I am particularly proud of a simple little function I wrote `wipeMenu` for recursively removing HTML elements when a filter was updated.


<figure class="prj-fig" aria-labelledby="{{id_name}}-img" role="group">
<img id="{{id_name}}-img" class="prj-img" src="{{project_thumbnail_color}}" alt="{{thumbnail_alt}}">
<figcaption class="fig-caption">↑ A caption for my project.</figcaption>
</figure>

### Takeaways
This project gave me a lot of insight into how powerful APIs can be, and also that a web app is only as robust as its API. The API I used capped each data request at no more than 80 beers at a time, and lacked methods for searching within many of the beer properties. In the future, I know better what I should look for the next time I get to work with an API of my choice.

As this is the biggest project I've worked on so far, I also got a taste of just how important my code structure is for development. As my web app grew more complex with each feature, I iterated through my scripts quite a bit until I realized that I needed to just break up my 3-4 giant functions into smaller pieces. This step toward modularity improved my code's readabilty and made adding new features more efficient because it allowed me to introduce complexity quickly.

<figure class="prj-fig" aria-labelledby="{{id_name}}-img" role="group">
<img id="{{id_name}}-img" class="prj-img" src="{{project_thumbnail_color}}" alt="{{thumbnail_alt}}">
<figcaption class="fig-caption">↑ A caption for my project.</figcaption>
</figure>


A project is never truly finished, there is always something that can be improved. To improve this project, there are 2 features I may add on later:
* A button on each card that triggers an overlay of the beer description. 
* Make the side toolbar toggle in-to and out-of view, so that the app holds up better on smaller devices.
  

