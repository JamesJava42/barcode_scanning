export class Product {
  constructor(
    public id: string,
    public name: string,
    public category: string,
    public price: number,
    public quantity: number,
    public inStock: boolean,
    public barcode: string,
    public lastUpdated: Date,
    public imageUrl: string  // Add imageUrl property here

  ) {}

  // Rename the method to avoid conflict
  public checkAvailability(): boolean {
    return this.inStock && this.quantity > 0;
  }
}
