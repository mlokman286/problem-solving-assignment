//homework-1 convater.
function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    return "Unexpected value. Value cannot be minus";
  } else {
    var meter = kilometer * 1000; //we know that 1km= 1000m;
    return meter;
  }
}
var result = kilometerToMeter(5);
console.log(result);

//home work-2 buget calculetor.
function bugetCalculator(watch, phone, laptop) {
  if (watch < 0 || phone < 0 || laptop < 0) {
    return "Unexpected value. Quantity cannot be less than zero";
  } else {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;

    var total = watchPrice + phonePrice + laptopPrice;
    return total;
  }
}
var result2 = bugetCalculator(7, -3, 2);
console.log(result2);

//homework-3;hotelcost;
function hotelCost(nights) {
  var nightCost = 0;
  if (nights < 0) {
    return "Unexpected value."; //if any result is less than zero, this messege will be shown.
  } else if (nights <= 10) {
    nightCost = nights * 100;
  } else if (nights <= 20) {
    var first10Nights = 10 * 100;
    var reminingNights = nights - 10;
    var lastnights = reminingNights * 80;
    nightCost = first10Nights + lastnights;
  } else {
    var first10Nights = 10 * 100;
    var second10Nights = 10 * 80;
    var reminingNights = nights - 20;
    var lastNights = reminingNights * 50;
    nightCost = first10Nights + second10Nights + lastNights;
  }
  return nightCost;
}
var totalNightCost = hotelCost(30);
console.log(totalNightCost);

//homework-4 ,mega friend
var friends = ["Assadurzzaman", "Sujon", "Nadim", "Joynal", "Najim", "saiful"];
function megaFriend(friends) {
  for (var i; i <= friends.lenth; i++) {}
}
