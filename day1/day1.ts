export function calorieCounter(input: string): number[] {
  const inputAsArray: string[] = input.split("\n").map((el) => el.trim());
  let calorieCounter = 0;
  const calorieMap: number[] = [];

  inputAsArray.forEach((calories: string) => {
    if (calories == "") {
      calorieMap.push(calorieCounter);
      calorieCounter = 0;
    } else {
      calorieCounter += parseInt(calories);
    }
  });
  calorieMap.push(calorieCounter);

  return calorieMap.sort((a, b) => b - a).slice(0, 3);
}
