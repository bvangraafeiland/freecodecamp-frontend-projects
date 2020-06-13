import { useState } from "react"
import marked from "marked"

marked.setOptions({
    breaks: true
})

const style = {
    width: '50%',
    margin: 'auto'
}

export default function MarkdownPreviewer() {
    const [input, setInput] = useState(`# Markdown previewer
## Subtitle
See [here](https://www.google.com) for **some** \`code\`
\`\`\`
alert('Hello world!')
\`\`\`
- Some
- List
- Items
> Blockquotes are very handy in email to emulate reply text.

And an image: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
`)
    return (
        <div style={style}>
            <textarea id="editor" cols="30" rows="10" value={input} onChange={e => setInput(e.target.value)} />
            <div id="preview" dangerouslySetInnerHTML={{ __html: marked(input)}} />
        </div>
    )
}