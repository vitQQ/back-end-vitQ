const activityLevel = (actLevel, bmr) => {
  switch (actLevel) {
    case 1:
      return bmr * 1.2;
    case 2:
      return bmr * 1.375;
    case 3:
      return bmr * 1.55;
    case 4:
      return bmr * 1.725;
    case 5:
      return bmr * 1.9;
    default:
      break;
  }
};

const kalori = (sex, height, weight, age, actLevel) => {
  const bmr = 10 * weight + 6.25 * height - 5 * age + (sex == "L" ? +5 : -161);
  console.log(bmr);
  return activityLevel(actLevel, bmr);
};

module.exports = kalori;