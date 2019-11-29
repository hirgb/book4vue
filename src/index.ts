import TpText1 from './typegraphy/TpText1'

class Global {
    backgroundImage: string
    backgroundColor: string
}

class Cover {
    title: string
    author: string
    backgroundImage: string
}

class BackCover {
    backgroundColor: string
    text: string
}

type Content = TpText1

class BookData {
    global: Global
    cover: Cover
    backCover: BackCover
    content: Content[]
}

class Book {
    data: BookData
    constructor(data: BookData = null) {
        if (data) {
            this.data = data
        } else {
            this.data = {
                global: new Global(),
                cover: new Cover(),
                backCover: new BackCover(),
                content: [new TpText1()]
            }
        }
    }

    setCover(cover: Cover) {
        this.data.cover = cover
    }

    setGlobal(global: Global) {
        this.data.global = global
    }

    setBackCover(backCover: BackCover) {
        this.data.backCover = backCover
    }

    addContent(index: number, content: Content) {
        let dataContent = this.data.content
        if (index >= 0 && index < dataContent.length) {
            dataContent.splice(index, 0, content)
        } else {
            throw new Error('The index is not in the book content.')
        }
    }

    delContent(index: number) {
        let content = this.data.content
        if (index >= 0 && index < content.length) {
            content.splice(index, 1)
        } else {
            throw new Error('The index is not in the book content.')
        }
    }
}

export default Book