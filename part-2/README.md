# Basic Markdown Parser with YOUTUBE embed

This contains basic markdown parser to parse markdown text and convert it into HTML

In this, we convert the below markdown text to HTML
```
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
```

The above text will generate the following HTML
```html
<h1>h1 Heading</h1>
<h2>h2 Heading</h2>
<h3>h3 Heading</h3>
<h4>h4 Heading</h4>
<h5>h5 Heading</h5>
<h6>h6 Heading</h6>
<p><strong>This is bold text</strong><br>
  <strong>This is bold text</strong><br>
  <em>This is italic text</em><br>
  <em>This is italic text</em><br>
  <ins>This is underline text</ins><br>
  <s>Strikethrough</s></p>
<blockquote>
  <p>Blockquotes can also be nested...</p>
  <blockquote>
    <p>...by using additional greater-than signs right next to each other...</p>
    <blockquote>
      <p>...or with spaces between arrows.</p>
    </blockquote>
  </blockquote>
</blockquote>
<p><a href="https://blog.bhanuteja.dev" target="_blank" rel="noopener">My Blog</a></p>
<p>Unordered</p>
<ul>
  <li>Create a list by starting a line with '+', '-', or '*'</li>
  <li>Sub-lists are made by indenting 2 spaces:
    <ul>
      <li>Marker character change forces new list start:
        <ul>
          <li>Ac tristique libero volutpat at</li>
        </ul>
        <ul>
          <li>Facilisis in pretium nisl aliquet</li>
        </ul>
        <ul>
          <li>Nulla volutpat aliquam velit</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Very easy!</li>
</ul>
<p>Ordered</p>
<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
</ol>
<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>data</td>
      <td>path to data files to supply the data that will be passed into
        templates.</td>
    </tr>
    <tr>
      <td>engine</td>
      <td>engine to be used for processing templates. Handlebars is the default.</td>
    </tr>
    <tr>
      <td>ext</td>
      <td>extension to be used for dest files.</td>
    </tr>
  </tbody>
</table>
<div class="text-center video-container">
  <iframe
    src="https://www.youtube-nocookie.com/embed/0pThnRneDjw"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;
    picture-in-picture" allowfullscreen>
  </iframe>
</div>
<div class="text-center font-weight-light text-capitalize">
  <p>Web Development In 2020</p>
</div>
```

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
