export class CharacterDTO {
  id!: string;
  name!: string;
  status!: string;
  species!: string;
  type!: string;
  gender!: string;
  origin!: {
    name: string;
    url: string;
  };
  location!: {
    name: string;
    url: string;
  };
  image!: string;
  episode!: string[];
  url!: string;
  created!: string;

  constructor() {
    this.id = '';
    this.name = 'Unknown';
    this.status = '-';
    this.species = '-';
    this.type = '';
    this.gender = '';
    this.origin = { name: '', url: '' };
    this.location = { name: '', url: '' };
  }
}
