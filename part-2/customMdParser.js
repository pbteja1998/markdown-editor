// customMdParser.js

const MarkdownIt = require('markdown-it')
const insert = require('markdown-it-ins')
const mila = require('markdown-it-link-attributes')
const markdownItContainer = require('markdown-it-container')

function getYoutubeVideoId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)

  return match && match[2].length === 11 ? match[2] : null
}

const getYoutubeIframeMarkup = ({ url }) => {
  const videoId = getYoutubeVideoId(url)
  if (!videoId) {
    return ''
  }
  return `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}

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
    .use(markdownItContainer, 'youtube', {
      validate: function (params) {
        return params.trim().match(/^youtube\s*\[(.*)]$/)
      },
      render: function (tokens, idx) {
        if (tokens[idx].type === 'container_youtube_open') {
          const matches = tokens[idx].info.trim().match(/^youtube\s*\[(.*)]$/)
          if (matches && matches[1]) {
            return (
                '<div class="text-center video-container">' +
                getYoutubeIframeMarkup({ url: matches[1].trim() }) +
                '</div><div class="text-center font-weight-light text-capitalize">'
            )
          }
          return
        } else if (tokens[idx].type === 'container_youtube_close') {
          return '</div>'
        }
      },
    })

exports.customMdParser = customMdParser
