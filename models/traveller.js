const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) =>{
    const journeyStart = journey.startLocation;
    return journeyStart
  });
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) =>{
    const journeyEnd = journey.endLocation;
    return journeyEnd
  });
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter(journey => journey.distance >= minDistance);
  return result
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  totalDistance = this.journeys.reduce((accum, journey) => {
      return accum + journey.distance;
    }, 0);
    return totalDistance;
  };


Traveller.prototype.getUniqueModesOfTransport = function () {
// uniqueModeTransport = this.journeys.reduce((accum, transport) => {
//   if(!accum + journey.transport === transport)
//   return accum
// }, []);
// return uniqueModeTransport;
// };


module.exports = Traveller;
