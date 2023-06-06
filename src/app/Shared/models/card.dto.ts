export class CardDTO {
  id: string;
  name: string;
  status: string;
  locationName: string;
  image: string;

  constructor(
    id: string,
    name: string,
    status: string,
    locationName: string,
    image: string
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.locationName = locationName;
    this.image = image;
  }
}
