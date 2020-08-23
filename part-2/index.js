const customMdParser = require('./customMdParser').customMdParser
const format = require('html-format');
const markdownText = `
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

**This is bold text**
__This is bold text__
*This is italic text*
_This is italic text_
++This is underline text++
~~Strikethrough~~

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

[My Blog](https://blog.bhanuteja.dev)

Unordered

+ Create a list by starting a line with '+', '-', or '*'
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

:::youtube[https://www.youtube.com/watch?v=0pThnRneDjw]
Web Development In 2020
:::
`
console.log(format(customMdParser.render(markdownText)))
