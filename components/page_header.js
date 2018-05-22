page_header = ( heading, heading_type, subheading, background_image ) => {
  return `
<header class="masthead" style="background-image: url('${background_image}')">
<div class="container">
<div class="row">
<div class="col-lg-8 col-md-10 mx-auto">
<div class="${heading_type}">
<h1>${heading}</h1>
<span class="subheading">${subheading}</span>
</div></div></div></div></header>
`
}
module.exports = { page_header }
