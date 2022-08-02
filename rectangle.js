class Rectangle {
    x
    y
    width
    height
    color
    constructor(x,y,width, height, color) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
    }
    setX(x) {
        this.x = x
    }
    setY(y) {
        this.y = y
    }
    setWidth(width) {
        this.width = width
    }
    setHeight(height) {
        this.height = height
    }
    setColor(color) {
        this.color = color
    }
    render() {
        let ctx = document.getElementById("canvas").getContext("2d")
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

}