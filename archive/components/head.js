const head = ( title, description, keywords,  author, mathjax = false, prism = false, additions = "" ) => {
  let mathjax_snippet = ""
  if(mathjax) {
    mathjax_snippet = '<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/latest.js?config=TeX-MML-AM_CHTML"> </script>'
  }
  let prism_snippet = ""
  if(prism) {
    prism_snippet = `
    <link href="css/prism.css" rel="stylesheet" />
    <!--<link href="css/prism-atom-dark.css" rel="stylesheet" />-->
    `
  }
  return `
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="${description}">
<meta name="keywords" content="${keywords}">
<meta name="author" content="${author}">
<title>${title}</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
<link href="css/clean-blog.css" rel="stylesheet">
${mathjax_snippet}
${prism_snippet}
${additions}
</head>
`
}
module.exports = { head }
