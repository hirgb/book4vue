let coverDom = document.createElement('template')
coverDom.innerHTML = `
<style>
.wrapper {
    border: 0px solid #f0f0f0;
    border-radius: 8px;
    background-color: #f2f1ed;
    box-shadow: 0px 3px 5px #00000030;
    text-shadow: 0px -1px 0px #00000040;
    width: 100%;
    height: 60px;
    font-family: sans-serif;
    font-size: 32px;
    font-weight: 900;
    color: #777;
    line-height: 60px;
    text-align: center;
    user-select: none;
    cursor: pointer;
}
</style>
<div class="wrapper">
</div>
`

class CoverEl extends HTMLElement {
    constructor() {
        super()
        let shadow = this.attachShadow({mode: 'closed'})
        let content = coverDom.content.cloneNode(true)
        shadow.appendChild(content)
        this.$body = shadow.querySelector('.wrapper')

        this.$body.addEventListener('mousedown', () => {
            this.$body.style.boxShadow = '0px 1px 1px #00000030'
        })

        this.$body.addEventListener('mouseup', () => {
            this.$body.style.boxShadow = '0px 3px 5px #00000030'
        })
    }

    static get observedAttributes() {
        return ['label', 'bgcolor', 'color', 'height', 'lineheight']
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal
        this.render()
    }

    render() {
        this.$body.innerHTML = this.label
        this.$body.style.background = this.bgcolor
        this.$body.style.borderColor = this.bgcolor
        this.$body.style.color = this.color
        this.$body.style.height = this.height
        this.$body.style.lineHeight = this.lineheight
    }
}

window.customElements.define('sos-button', SosButton)
