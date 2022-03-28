class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    if (this.length > 1) {
      this.items.sort((a, b) => {
        if (a > b) {
          return 1;
        } else if (a === b) {
          return 0;
        } else {
          return -1;
        }
      });
    }
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    return this.items.reduce((total, value) => {
      return total + value;
    }, 0);
  }

  avg() {
    if (this.length) {
      return this.sum() / this.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
