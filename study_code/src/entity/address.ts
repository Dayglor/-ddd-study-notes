export default class Address {
  constructor(
    private readonly street: string,
    private readonly city: string,
    private readonly state: string,
    private readonly zip: string,
  ) {

    this.validate();
  }

  validate(): void {
      if(this.city.length < 3) {
          throw new Error('City must be at least 3 characters long');
      }

      if(this.state.length < 2) {
          throw new Error('State must be at least 2 characters long');
      }

      if(this.zip.length < 5) {
          throw new Error('Zip must be at least 5 characters long');
      }

      if(this.street.length < 5) {
          throw new Error('Street must be at least 5 characters long');
      }
  }

  toString() {
      return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
  }
}