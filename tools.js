// main make script

// dependencies
const cp = require("child_process")
const fs = require("fs")
const p = require("path")

const bin_folder = "node_modules/.bin"
const def_sass_command = "node-sass"
const def_min_html_command = "html-minifier"
const def_min_html_conf = "./html_min.json"
const def_uglify_command = "uglifyjs"

const save = fs.writeFileSync

function sass( input_folder, output_folder ) {
  cp.execFileSync(
    p.join( bin_folder, def_sass_command ), [
      input_folder,
      "--output-style",
      "compressed",
      "-o",
      output_folder
    ]
  )
}

function minify_html(  input_filename, output_filename ) {
  cp.execFileSync(
    p.join( bin_folder, def_min_html_command ), [
      '-c',
      def_min_html_conf,
      '-o',
      output_filename,
      input_filename
    ]
  )
}

function uglify( input_filename, output_filename ) {
  cp.execFileSync(   p.join( bin_folder, def_uglify_command ), [
      '-o',
      output_filename,
      input_filename
    ]
  )
}

function pandoc( markdown_filename ) {
  return cp.execFileSync( "pandoc" , [ markdown_filename ] )
}

function copy_folder( from, to ) {
  return cp.execFileSync( "cp" , [ from,  to,  "-r" ] )
}

module.exports = { sass, minify_html, uglify, pandoc, copy_folder }
