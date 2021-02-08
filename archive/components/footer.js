const make_brand_items = ( brand_items ) => {
  let out = ''
  for ( let i = 0; i < brand_items.length; i++ ) {
    out += `
      <li class="list-inline-item">
      <a href="${brand_items[i].link}">
      <span class="fa-stack fa-lg">
      <!--<i class="fa fa-circle fa-stack-2x"></i>-->
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
<p class="copyright text-muted">Copyright &copy; ${copyright}. Last edit: see <a href="https://github.com/j-k/j-k.github.io">this github repository.</a></p> 
<p class="copyright text-muted">
<a href="https://creativecommons.org/licenses/by/4.0/"><img src="https://licensebuttons.net/l/by/4.0/88x31.png" alt="Creative Commons Attribution 4.0" width="88" height="31" />
</a>
This wiki is licensed to the public under a Creative Commons Attribution 4.0 license.
</p>
</div></div></div></footer>
`
}
module.exports = { footer }
