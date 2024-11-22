class SymbolTable {
  private parent: SymbolTable | null;
  private table: { [key: string]: any };

  constructor(parent: SymbolTable | null = null) {
    this.parent = parent;
    this.table = {};
  }

  set(key: string, value: any): void {
    if (this.table.hasOwnProperty(key)) {
      this.table[key] = value;
    } else if (this.parent) {
      this.parent.set(key, value);
    } else {
      this.table[key] = value;
    }
  }

  get(key: string): any {
    if (this.table.hasOwnProperty(key)) {
      return this.table[key];
    } else if (this.parent) {
      return this.parent.get(key);
    } else {
      throw new Error(`KeyError: ${key}`);
    }
  }

  hasKey(key: string): boolean {
    return (
      this.table.hasOwnProperty(key) ||
      (this.parent ? this.parent.hasKey(key) : false)
    );
  }

  push(): SymbolTable {
    return new SymbolTable(this);
  }

  pop(): SymbolTable | null {
    return this.parent;
  }
}

export default SymbolTable;
