// customMdParser.js

const MarkdownIt = require('markdown-it')
const insert = require('markdown-it-ins')
const mila = require('markdown-it-link-attributes')

const customMdParser =  new MarkdownIt({
        html: false, // do not allow embedding html
        linkify: true, // auto-detect links and convert them to links
        breaks: true, // convert \n to <br>
    })
    .use(insert) // used for adding underlines to text
    .use(mila, {
      attrs: {
        // For opening all the links in new tab
        target: '_blank',
        rel: 'noopener',
      },
    })

exports.customMdParser = customMdParser