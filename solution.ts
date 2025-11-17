const formatValue = (value: string | number | boolean) => {
  if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "boolean") {
    return !value;
  }
};

const getLength = (value: string | Array<number>) => {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

interface FilterRating {
  title: string;
  rating: number;
}

const filterByRating = (books: Array<FilterRating>): Array<FilterRating> => {
  return books.filter((book) => book.rating > 4);
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (value: Array<User>): Array<User> => {
  return value.filter((val) => val.isActive === true);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (value: Book) => {
  const isAvailableStatus = value.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${isAvailableStatus}`
  );
};

const getUniqueValues = (
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] => {
  const result: (string | number)[] = [];

  const dublicateValue = (value: string | number): boolean => {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    if (!dublicateValue(arr1[i])) {
      result[result.length] = arr1[i];
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!dublicateValue(arr2[i])) {
      result[result.length] = arr2[i];
    }
  }
  return result;
};

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => {
    const baseTotal = product.price * product.quantity;

    let finalPrice;

    if (product.discount !== undefined) {
      const discountAmount = (baseTotal * product.discount) / 100;
      finalPrice = baseTotal - discountAmount;
    } else {
      finalPrice = baseTotal;
    }

    return total + finalPrice;
  }, 0);
};
