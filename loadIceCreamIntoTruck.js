const loadIceCreamIntoTruck = (iceCreamTruck, iceCream) => {
  iceCreamTruck.push({ iceCream, date: Date.now() });
};

export default loadIceCreamIntoTruck;
