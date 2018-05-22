// main make script

// dependencies
const cp = require("child_process")
const fs = require("fs")
const p = require("path")
const tools = require("./tools")

// the components render the different HTML bootstrap elements
const cmp = require("./components/components")
// site_config contains all the common user-defined data
// and a list of posts information
const user = require("./site_config") // user data

// helpers
const log = console.log
const exit = process.exit
const save = fs.writeFileSync

// definitions that you might want to change
const html_minify = true

// make the navigation bar
const nav_bar = cmp.navigation( user.nav_items )

// configure the footer
const copyright = user.copyright
const footer = cmp.footer( user.brand_items, user.copyright )

// make the pages content for the pages
const pages = user.pages

// loop over the pages and make them
log("1. Generating main pages")
for( let i = 0; i < pages.length; i++ ) {
  let head = cmp.head(
    pages[i].title || user.site_title,
    pages[i].description || user.description,
    user.keywords + (pages[i].keywords) ? ", " + pages[i].keywords : "",
    pages[i].author || user.author,
  )
  let page_header = cmp.page_header(
    pages[i].heading || "",
    pages[i].heading_type || "page-heading",
    pages[i].subheading || "",
    pages[i].image_url || "img/home-bg.png"
  )
  let content = cmp.content( pages[i].content, false )
  let doc = cmp.document( page_header, content, head, nav_bar, footer )
  let filename = `${pages[i].name}.html`
  save( filename, doc )
  if( html_minify === true ) {
    tools.minify_html( filename, filename )
  }
}

// np posts available at the moment
/*
// make the posts
log("2. Generating posts")
const posts = user.posts
for( let i = 0; i < posts.length; i++ ) {
  let head = cmp.head(
    posts[i].page_title,
    posts[i].page_description,
    posts[i].keywords,
    posts[i].author,
  )
  let page_header = cmp.page_header(
    posts[i].title,
    "post-heading",
    posts[i].subtitle,
    posts[i].image_url
  )
  let content = cmp.content( tools.pandoc( `posts/${posts[i].file}` ).toString(), true )
  //log(content)
  let doc = cmp.document( page_header, content, head, nav_bar, footer )
  let filename = `${posts[i].name}.html`
  save( filename, doc )
  if( html_minify === true ) {
    tools.minify_html( filename, filename )
  }
}
*/

// sass processor
log("3. Run SASS")
tools.sass( "scss", "css" )

// JS processor
log("4. Compress JavaScript")
tools.uglify( "js/clean-blog.js", "js/clean-blog.min.js")
