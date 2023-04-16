
const header = document.querySelector(".transport-info");
const price = document.querySelector(".transport-price");

class Transport {
  constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }

  getInfo() {
    return `${this.type} ${this.brand}`;
  }

  getPrice() {
    return `${this.price} rub.`;
  }
}

class Car extends Transport {
  constructor(type, price, brand, doors) {
    super(type, price, brand);
    this.doors = doors;
  }

  getDoorsCount() {
    return this.doors;
  }
}

class Bike extends Transport {
  constructor(type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
  }

  getMaxSpeed() {
    return this.maxSpeed;
  }
}

data.forEach((item) => {

  let transportItem;

  if (item.type === "car") {

      transportItem = new Car(item.type, item.price, item.brand, item.doors);

      const transportInfo = document.createElement("h4");
      transportInfo.textContent = transportItem.getInfo();
      header.append(transportInfo);

      const transportPrice = document.createElement("span");
      transportPrice.textContent = transportItem.getPrice();
      header.append(transportPrice);

      const carDoors = document.createElement("div");
      carDoors.textContent = `${transportItem.getDoorsCount()} doors`;
      header.append(carDoors);

      const transportImage = document.createElement("img");
      transportImage.src = item.image;
      transportImage.width = 450;
      header.append(transportImage);

  } else if (item.type === "bike") {

      transportItem = new Bike(item.type, item.price, item.brand, item.maxSpeed);

      const transportInfo = document.createElement("h4");
      transportInfo.textContent = transportItem.getInfo();
      header.append(transportInfo);

      const transportPrice = document.createElement("span");
      transportPrice.textContent = transportItem.getPrice();
      header.append(transportPrice);

      const bikeMaxSpeed = document.createElement("div");
      bikeMaxSpeed.textContent = `${transportItem.getMaxSpeed()} km/h`;
      header.append(bikeMaxSpeed);

      const transportImage = document.createElement("img");
      transportImage.src = item.image;
      transportImage.width = 450;
      header.append(transportImage);
  }
});
