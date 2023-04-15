const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image:
      "https://cdn.motor1.com/images/mgl/NGGrzb/s1/2024-mercedes-amg-c63-s-e-performance-exterior-front-quarter.jpg",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image: "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
  },
];

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

let createTransportCard = () => {
  alert;
};

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
