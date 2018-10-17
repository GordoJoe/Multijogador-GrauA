export class Player {
  id: number;
  Gold: number = 0;
  Vivo: boolean = true;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}