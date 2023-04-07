# 🇬🇧 A DOCTOR WHO INSPIRED SHOPPING APP: THE 'BLUE BOX' SHOP 🇬🇧
#### A barebones shopping app dedicated to **BBC's DOCTOR WHO**
https://github.com/ElMoscaviador/shopping-cart

---
## ALL ABOUT THE PROJECT

Welcome to the BLUE BOX SHOP! A mobile-first barebones shopping app, made with accessibility in mind, designed for DOCTOR WHO's 60th anniversary.
I am a huge fan of DOCTOR WHO's classic era, revived era & expanded universe - this show is basically my biggest passion in life. 
When I started learning web development, I just *knew* I'd build some kind of Doctor Who website at some point. Now it's done!

### DESCRIPTION
Browse the app's products, add your favorites to the cart and manage their quantity.

### WALKTHROUGH OF THE APP

#### Header
- Features either the currently selected category or a catchphrase from the show's history
- Features the shop's logo
#### Home page
- Features a CSS-animated SVG Tardis materializing
#### Shop page
- Features a fully swipeable categories selection menu
#### Category page
- Features product cards for all products of a given category
- Features navigation arrows if the number of products exceeds the maximum allowed per page
#### Product page 
- Features the product's title, price & description
- Features a form to update the product's quantity & add it to the cart
- Features a full-sized picture of the product
#### The cart page
- Features an SVG picture and a placeholder if the cart is empty
- Features a picture & information & a form to update the quantity of the added products if the cart is not empty
#### The 404 page
- Features indicative text and a button to browse back to the home page.

### RESPONSIVE DESIGN
- The app is mobile-first & fully responsive. 
- It has been tested for resolutions ranging from 5120 * 1440px to 375 * 667px.

### ACCESSIBILITY
The app's accessibility (contrast, colors, labels, keyboard navigation) has been thoroughly tested at every step of the design process using:
- WebAIM WAVE plugin
- Firefox's accessibility tool
- Orca screen reader on Linux
- NVDA screen reader on Windows

An accessibility button is included in the app's top right corner, which highlights all interactive elements and adds textual indication to image buttons.

### ORGANIZATIONAL METHOD
- The app's CSS and file structure was organized using the tried and true BEM method. 
- I dabbled with BEM in the past, but this time, I aimed to be very orthodox in applying its rules strictly. 
- I created folders for blocks, elements & modifiers following the 'nested' file structure encouraged by BEM.

### EXTENSIONS USED
- React Router v6

### JEST TESTING
- This app has been integration tested using Jest & React Testing Library.

### FUTURE UPDATES
- I plan to circle back to this project and add more animations and UI perks later in my learning, once I near completion of the course.

### KNOWN ISSUES
- While I have strived to make the app responsive, smaller resolutions in landscape mode may break the layout.

### ABOUT UNKNOWN ISSUES
Please do not hesitate to report any lingering issues to me - I am all ears & would be grateful to you.

### CREDITS & MATERIALS USED
#### Made by the author
- Category bubbles 
- Empty Child hero
- Shop Logo 
- Tardis hero
#### Made by Material Icons and edited by the author using Inkscape & Gimp
- Home, shop, cart & accessibility icons
#### Made by the BBC and edited by the author using Inkscape & Gimp
- All other featured icons and artwork 
#### Made by the BBC
- BBC Reith font
#### Made by Jeremy Thomas on Unsplash: https://unsplash.com/fr/@jeremythomasphoto
- Galaxy background mask

## GENESIS OF THIS PROJECT

### WHY I TOOK ON THIS PROJECT
As a web developer in the making, I started The Odin Project's course in late 2021. 

This shopping app is the latest project I was asked to tackle as part of the course.

### WHAT MY LEARNING TARGETS WERE FOR THIS PROJECT
- Getting to know and coming to grips with React Router v6
- Understanding how any router works, transmits information, and how programmatic navigation can be paired with React's state features.
- Mastering React Testing Library's testing tools and their philosophy of testing a website as the user browses it.
- Learning to design a mobile-first app
- Improving my responsive design skills by partially working with size scales for font sizes & spaces.
- Animating individual SVG units with CSS

### THE DESIGN PROCESS, STEP BY STEP
#### Writing down the specs 
At the start of the project, it was important for me to keep the planned list features very simple, since my main focus was on learning React Router.
- A mobile-first SHEIN-like fashion app with a home page, a shop page divided into categories, product pages, and a cart
- Allow the user to add a product to the cart from the product page 
- Allow the user to adjust a product's quantity manually & automatically from both the product page and the cart
- Allow the user to navigate programmatically between all of the app's pages using a navbar
#### Writing tests & code
I aimed to apply the TDD philosophy to write more robust code.
- The Odin Project still teaches React Router v5, as do many resources, but I wanted to limit myself to v6. It took a few days to understand how to integrate RRv6 in Jest. I was against using v5's `BrowserRouter` wrapper at render and `createBrowserRouter` did not work. I then adopted `createMemoryRouter`, which facilitates navigation with the `initialEntries` array.
- Following the React Testing Library core philosophy, I wrote integration tests which closely followed the user's natural browsing flow. 
- As advised by React Testing Library, I queried most elements using `getByRole`, to ensure accessibility. This led me to add `aria-label` everywhere at first, which was not a good practice. I then read through the WCAG guidelines and used several tools & screen readers to make sure my `aria-label` were placed appropriately.

#### Designing the app's appearance
As all features were implemented and the app was basically working, I reassessed my original concept of a SHEIN lookalike and realized that I did not like how generic & uninspired it felt.
I then brainstormed at length in search for THE concept I'd be passionate about, and I remembered 2023 to be DOCTOR WHO's 60th anniversary. My favorite show turning 60! Surely There must be something I can do to honor it? One thing was for certain: whatever it looked like, it'd be a mobile first design, since constraining myself to a small screen would limit the number of changes later on. It had to feel like a native mobile app on a smartphone.
- I first pondered on the app's accent colors. Should it be Tardis Blue? Regeneration orange? I created color palettes for both, and experimented with a mood board, but was ultimately let down by the result.
- As I sat on my disappointment, I had a breaktrough: the Whoniverse isn't monotone. It's a new adventure each week, in whole new places of the galaxy! I couldn't just use plain colors. I had to use gradients, and masks, and layers. But creating this visual identity terrified me. I'm not a colors expert, though I do try my best to understand their psychology and the feelings they induce.
- After much experimenting, I completed a background which consisted of shades of purple, blue and gray, plus a mask of the actual universe. I was quite happy with the result! This, I thought, felt like DOCTOR WHO.
##### Home page
- I designed a fully-realized SVG Tardis and blended poppy purple-orange gradients into it, along with a glowing lamp. The Tardis would be animated to give the impression that it is flying & materializing at the same time.
##### Header
- I wanted the header to blend in with the background while still feeling like its own entity.
- I created the logo from scratch by taking inspiration from the brand new 60th Anniversary logo. I was quite happy with the result which I thought was faithful to the original.
##### NavBar
- I wanted the navbar to blend in with the background while still remaining perfectly visible. I thus gave it a fully opaque gradient border.
##### Shop page
- I did not want a traditional menu for selecting a category, so I created a swipeable bubbly menu which animates on swipe, based on the swipe direction. 
##### Categories page
- I wanted the products' basic information and picture to blend in with the background. 
##### Product page
- I thought contrasting the product's information on the left & a full-sized picture on the right would help the page breathe more than placing the picture in a regular square. 
##### Cart
- I wanted the user to immediately see if the cart was empty. I originally thought a placeholder text would suffice, but realize that a SVG Hero would helkp highlight the empty cart state. I first included the Adipose from the show's fourth season, but determined it did not make sense contextually. Luckily, one of the most widely recognized episodes of the revived era is The Empty Child: what would be better to represent an empty cart?
##### 404 Page
- As many companies include easter eggs in their 404 Page, which range from obscure to obvious, I thought I'd include something in the middle. Classic Who fans, along with New Who fans who've watched the Chibnall era, will probably recognize the Master & Missy's shrinking device. Others may look it up and be rewarded for it!

### THE CHALLENGES I FACED DURING THIS PROJECT
- Many online resources provide information on React Router v5, but I was eager to use v6 exclusively. This led me to spend much time looking up information on v6 and its use in Jest, but it was worth it in the end as the hours invested allowed me to deeply understand React Router.
- I have had much time to experiment with responsive design and fluid typography. I implemented scales and bypassed them when I felt they were inappropriate for a specific case. Yet, I remain unsure about some of the scaling choices I've made, especially with the product cards. Their growing pace still feels unnatural to me. I'm eager to practice more.
- Animating the swipe feature on the category bubbles was a challenge. I experimented a lot with Javascript-rendered animations, bezier curves and timing, which helped me appreciate how to manipulate x & y coordinates in JS. However, I settled on CSS in the end, as handling several animations at once is made much more easier with it.
- One drawback of designing a website's appearance, even partially, on Inkscape, is that some things that are dead easy to make in the editor are impossible to transcribe in CSS. One example of this is a container with gradient background, which has a rounded border which itself is gradiented. This takes 30 seconds in a graphics software, but CSS does not support both a border with `border-radius` & a gradient, since a gradient is technically an image.
- Therefore, while I have strived to style most components using CSS & HTML, there are elements like the navbar which had to be styled using a `background-image` as there was no other way to reconcile different gradients for rounded borders & the container.
- I already had experience with React Testing Library before starting the project, yet I still encountered difficulties mocking methods such as `useLoader`: this necessitated some additional research.
- All in all, the difficulties encountered were essential to my progress and to the deepening of my skills.

### CLOSING THOUGHTS ON COMPLETING THE PROJECT
- When experimenting with React Router and all available methods: `useOutletContext`, `useLoader`... I realized its biggest draw of React Router: there is so much you can do programmatically! Forwarding information can be done through actions, loaders, context, URL params... which mitigates the use of React state.
- Implementing the BEM method for this project helped me immensely. While thinking about each of your classes and how they fit in your app may feel like a time waste, you'll be glad to know exactly why you named your components a certain way when you finish a project, and modification will be all the more easier.
- While CSS modules & styled components now appear to be prefered by many, BEM has been proven reliable over the years, so I felt it was important to master it before moving on to more recent methods.
- Putting myself in the shoes of a visually impaired person was eye-opening and allowed me to be much more precise in my implementation of `aria-label` and the choice of colors. My implementation of an actual 'accessibility mode' is still rudimentary, but accessibility will be my main priority on all future projects.
- Tonally, the final product looks exactly like I envisioned it. I am glad that my original visual ambitions paid off.
- I learned so much working on this project, and now that I am knowledgeable about React Router, I feel like I'm much more closer to building actual websites professionally. I'm eager to further improve my skills on future projects!

## REFERENCES TO DOCTOR WHO
- The home page features a TARDIS, the Doctor's time travelling spaceship.
- The 404 page portrays Michelle Gomez's Missy shrinking Sacha Dhawan's Master with the iconic shrinking device.
- The empty cart page portrays the empty child from series 1's episode of the same name.
- The products represent the Doctor's various sonic screwdrivers, costumes, enemies.


## AUTHOR
ElMoscaviador
https://github.com/ElMoscaviador/shopping-app

