interface Item {
    name: string;
}

interface ProductsQueue {
    getAll(): any[]
}

class Queue<T> {
    private data: T[] = [];

    push(item: T) {
        this.data.push(item);
    }

    pop() {
        this.data.shift();
    }
}

interface ProductItem {
    id: number;
}

const peaople = new Queue<string>();
peaople.push('1');
peaople.push('123');

// const numbers = new Queue<number>();
// peaople.push(1);
// peaople.push(123);