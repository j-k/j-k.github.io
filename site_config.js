// dependencies
const p = require("path")

// specific site information
const cmp = require( "./components/components" )
const tools = require( "./tools" )

const site_title = "jkubacki"
const site_description = "J. Kubacki's personal page"
const site_keywords = "jens, kubacki, blog"
const author = "J. Kubacki"

const nav_items = [
  ["index.html", "Home"],
  ["about.html", "About"],
	["contact.html", "Contact"]
]

const brand_items = [
  { "link": "https://github.com/j-k", brand: "github" }
]

const copyright = "Jens Kubacki 2018"

const posts = []

const pages = [
	{
    name: "index",
    heading: "Hi, there ...",
    heading_type: "site-heading",
    subheading: "... welcome to my website!",
    content: cmp.index_content( posts )
  },
	{
    name: "about",
    title: site_title,
    heading: "About me",
    content: cmp.content( tools.pandoc( "md/about.md" ) ),
    image_url: "img/about-bg.png"
  },
	{
    name: "contact",
    title: site_title,
    heading: "Contact me",
    content: cmp.content( tools.pandoc( "md/contact.md" ) ),
    image_url: "img/contact-bg.png"
  }
]

module.exports = { site_title, site_description, site_keywords, author, nav_items, brand_items, copyright, pages }
