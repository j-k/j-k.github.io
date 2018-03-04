const make_brand_items = ( brand_items ) => {
  out = ''
  for ( let i = 0; i < brand_items.length; i++ ) {
    out += `
      <li class="list-inline-item">
      <a href="${brand_items[i].link}">
      <span class="fa-stack fa-lg">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-${brand_items[i].brand} fa-stack-1x fa-inverse"></i>
      </span></a></li>
    `
  }
  return out
}
const footer = ( brand_items, copyright ) => {
  return `
<footer>
<div class="container">
<div class="row">
<div class="col-lg-8 col-md-10 mx-auto">
<ul class="list-inline text-center">
${make_brand_items( brand_items )}
</ul>
<p class="copyright text-muted">Copyright &copy; ${copyright}</p>
</div></div></div></footer>
`
}
module.exports = { footer }
