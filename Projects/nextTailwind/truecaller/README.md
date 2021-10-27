# TrueCaller Blog App (Next.js + Tailwind CSS)

A Blog app that lists various posts written by a variety of authors falls into many categories. Users could be able to view any post by filtering through the categories and can go to different pages as paginations are handled.

## Installation

Use the package manager NPM or Yarn.

For Yarn
```bash
yarn install
```

For Npm
```bash
npm install
```

## Demo Link : https://truecaller-blog-eight.vercel.app/

## Usage

Run in Development mode and listen for changes within project directory.
```bash
yarn dev
```
Build Production mode - you should see new build files being generated.
```bash
yarn build
```
Run in Production mode
```bash
yarn start
```

## Structure
```python
 - truecaller (root Dir)
 |- component
 |   |- common
 |   |   |- banner.js       // banner Component for (Home/postDetails) page
 |   |   |- card.js         // card Component for posts applied with filters.
 |   |   |- dropdown.js     // dropdown Component (category selection filter)
 |   |   |- footer.js       // Footer Component of the Truecaller blog app
 |   |   |- header.js       // Header Component with Truecaller logo  
 |   |   |- pagination.js   // pagination Component to traverse multiple posts
 |   |
 |   |- posts
 |      |- avatar.js        // Avatar Component used in post description page.
 |      |- description.js   // Individual Post Description Component.
 |      |- listing.js       // Listing Component with pagination & cat. filter
 |    
 |- config
 |  |- index.js            // API Configurations of the WordPress website
 |
 |- pages
 |  |- api (empty dir)     // we never used internal Nextjs api so empty
 |  |
 |  |- _app.js             // Starting file
 |  |- _error.js           // 404 page on invalid routes
 |  |- index.js            // Home page of app
 |  |- posts               // "/posts" route
 |     |-[slug].js         // "/posts/:slug" route(Post Description Page)
 |  
 |- public
 |  |- assets                 // static assets folder
 |  |  |- banner              // banner images for home page
 |  |  |  |- homeBanner.jpg    
 |  |  |- logo                // Truecaller Logo Images for manifest
 |  |     |- logo192.png
 |  |     |- logo512.png
 |  |- favicon.ico            // Truecaller favicon that appears on titlebar 
 |  |- manifest.json          // describes about the application to browser
 |  |- robots.txt             // can be used to block or allow crawler
 |  |- truecaller.svg           
 |
 |- services
 |  |- index.js.              // Actual Api call methods for 
 |                            // posts,categories, and post details
 |- styles
 |  |- description.scss       // Custom css required 
 |
 |- utils
 |  |- date.js.               // Date utils for formating dates
 |  |- mdRenderer.js          // mdRenderer for rendering html strings
 |
 |- .gitignore                // ignore node_modules and builds to github
 |- next.config.js            // NextJs config file (only image domains added)
 |- package.json.             // All packages and dependecies are included
 |- postcss.config.js         // postcss configurations for tailwind setup
 |- tailwind.config.js        // tailwind configuration (We customized themes)
```

## License
[MIT](https://choosealicense.com/licenses/mit/)