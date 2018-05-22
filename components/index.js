const make_post_previews = ( posts ) => {
  out = ''
  for ( let i = 0; i < posts.length; i++ ) {
    out += `
<div class="post-preview">
<a href="${posts[i].name}.html">
<h2 class="post-title">${posts[i].title}</h2>
<h3 class="post-subtitle">${posts[i].subtitle}</h3>
</a>
<p class="post-meta">Posted by ${posts[i].author} on ${posts[i].date}</p>
</div>
`
  }
  return out
}
const index_content = ( post_previews ) => {
  return `
<div class="container"><div class="row">
<div class="col-lg-8 col-md-10 mx-auto">
${make_post_previews(post_previews)}
</div></div></div>
`
}
module.exports = { index_content }
// <!-- Pager -->
// <div class="clearfix">
// <a class="btn btn-secondary float-right" href="#">Older Posts &rarr;</a>
// </div>
