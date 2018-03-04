const make_nav_items = ( nav_items ) => {
  out = ""
  for(i of nav_items) {
    out += `
      <li class="nav-item"><a class="nav-link" href="${i[0]}">${i[1]}</a></li>
    `
  }
  return out
}
const navigation = ( nav_items ) => {
  return `
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
<div class="container">
<!-- <a class="navbar-brand" href="index.html">Start Bootstrap</a>-->
<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
Menu
<i class="fa fa-bars"></i>
</button>
<div class="collapse navbar-collapse" id="navbarResponsive">
<ul class="navbar-nav ml-auto">
${make_nav_items(nav_items)}
</ul></div></div></nav>
`
}
module.exports = { navigation }
