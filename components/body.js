const body = ( navigation, page_header, main_content, footer ) => {
  return `
<body>
${navigation}
${page_header}
${main_content}
${footer}
</body>
`
}
module.exports = { body }
