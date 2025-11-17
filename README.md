## **1️ Interfaces এবং Types এর মধ্যে পার্থক্য**

TypeScript-এ `interface` এবং `type` দুটিই object-এর structure নির্ধারণ করতে ব্যবহৃত হয়, তবে এদের কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

### **1.1 Declaration Merging — শুধুমাত্র interface সাপোর্ট করে**

একটি interface বারবার call করলে ও সেটি merge হয়ে একটি interface ই থাকে।

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
```

type-এ এই merging হয়না।

---

### **1.2 Union এবং Intersection — type দিয়ে করা সহজ**

```ts
type Status = "success" | "error" | "loading";
```

Interface দিয়ে union type করা যায় না।

---

### **1.3 Extends / Inheritance**

দুটোতেই inheritance করা যায়, তবে interface বেশি flexible।

---

### **1.4 Function Type structure — type সহজ**

```ts
type Add = (a: number, b: number) => number;
```

---

## **2️. keyof keyword এর ব্যবহার**

TypeScript-এ `keyof` এমন একটি keyword যা কোনো object-type এর সমস্ত property name কে একটি union type হিসেবে রিটার্ন করে।

### example

```ts
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

type PersonKeys = keyof Person;
```

---

### Practical Example

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const student = { name: "Rashed", age: 22 };

getProperty(student, "name");
getProperty(student, "age");
```
