// 1
class Person {
    name;
    age;

    introduce() {
        console.log(`Привет, я ${this.name}, мне ${this.age} лет`)
    }
}

const tom = new Person()

tom.name = `jopa`
tom.age = 3

tom.introduce()

const jopa = new Person()

jopa.name = `tom`
jopa.age = 12

jopa.introduce()

// 2
class Rectangle {
    width;
    height;

    getArea() {
        return this.width * this.height
    }

    getPerimeter() {
        return (this.width + this.height) * 2
    }
}

const rec = new Rectangle()

rec.width = 12
rec.height = 8

console.log(`${rec.getArea()}   ${rec.getPerimeter()}`)


// 3
class Counter {
    count = 0

    increment() {
        this.count += 1
    }

    decrement() {
        this.count -= 1
    }

    getValue() {
        return this.count
    }
}

const counter = new Counter()
counter.increment()
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.getValue())

// 4
class Book {
    title
    author
    year

    getInfo() {
        return `${this.title} (${this.year}) — ${this.author}`
    }
}

const book = new Book()

book.author = `jopa`
book.title = `jopaTitle`
book.year = 2000
console.log(book.getInfo())

// 5
class CountdownTimer {
    seconds

    start() {
        setTimeout(() => {
            console.log(`Время вышло!`)}, this.seconds * 1000
        )
    }

    reset(newSeconds) {
        this.seconds = newSeconds
    }
}

const timer = new CountdownTimer()

timer.seconds = 3
timer.start()

// 6
class ShoppingCart {
    items = []
    addItem(item) {
        this.items.push(item)
    }

    removeItem(item) {
        if (this.items.includes(item)) {
            this.items.pop()
        }
    }

    getTotalItems() {
        return this.items.length
    }

    showItems() {
        console.log(this.items)
    }
}

const items = new ShoppingCart()

items.addItem('ggg')
items.addItem('gggg')
items.addItem('ggggg')

items.removeItem('ggggg')
console.log(items.getTotalItems())
items.showItems()

// 7
class Password {
    value

    isValid() {
        return this.value.length >= 7
    }

    mask() {
        
    }

}