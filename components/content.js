const content = ( raw_content, is_article = false ) => {
  let stuff =
`
<div class="container"><div class="row">
<div class="col-lg-8 col-md-10 mx-auto">
${raw_content}
</div></div></div>
`
  if( is_article === true )
    return `<article>${stuff}</article>`
  else
    return stuff
}
module.exports = { content }
