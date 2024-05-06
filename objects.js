class Job {
  constructor(item, salary, description) {
    this.item = item;
    this.salary = salary;
    this.description = description;
  }

  describe() {
    console.log(
      `${this.item} is the framework I specialise in. My salary is ${this.salary}`
    );
  }
}

const developer = new Job("node", 30000, "Node Js developer");
developer.describe();

console.log(developer);
