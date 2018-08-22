const body = ( navigation, page_header, main_content, footer, prism = false ) => {
  let prism_snippet = ''
  if(prism) {
    prism_snippet = '<script src="js/prism.js"></script>'
  }
  return `
<body>
${navigation}
${page_header}
${main_content}
${footer}
${prism_snippet}
</body>
`
}
module.exports = { body }
