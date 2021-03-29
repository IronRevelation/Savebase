export const onlySameDays = (
	arrayMadeOfMoney: { date: string; value: number }[]
): { date: string; value: number }[] => {
	const justDays = arrayMadeOfMoney.map((x) => ({
		date: new Date(x.date.substr(0, 10)).toISOString(),
		value: x.value,
	}));

	const sameDays: { date: string; value: number }[] = [];

	justDays.forEach((currMoney) => {
		if (sameDays.length === 0) {
			sameDays.push(currMoney);
			return;
		}
		if (sameDays[sameDays.length - 1].date === currMoney.date) {
			sameDays[sameDays.length - 1].value += currMoney.value;
			return;
		}
		sameDays.push(currMoney);
	});

	return sameDays;
};

// export const dateSinceNowOfETA = (
// 	sameDaysNotAccumulated: { date: string; value: number }[],
// 	goal: number
// ) => {
// 	if (sameDaysNotAccumulated.length < 2) throw new Error("NOTENOUGHITEMS");
// 	const startingPoint = sameDaysNotAccumulated.shift()!;
// 	const differences = [
// 		{
// 			value: sameDaysNotAccumulated[0].value,
// 			days:
// 				new Date(sameDaysNotAccumulated[0].date).getTime() -
// 				new Date(startingPoint.date).getTime(),
// 		},
// 	];
// 	let prevPoint = sameDaysNotAccumulated.shift()!;
// 	sameDaysNotAccumulated.forEach((curPoint) => {
// 		differences.push({
// 			value: curPoint.value,
// 			days:
// 				new Date(curPoint.date).getTime() - new Date(prevPoint.date).getTime(),
// 		});
// 		prevPoint = curPoint;
// 	});

// 	differences.forEach((val) => (val.days /= 86400000));

// 	const mediumSpeeds = differences.map((val) => val.value / val.days);

// 	const mediumSpeed =
// 		mediumSpeeds.reduce((prev, cur) => prev + cur, 0) / mediumSpeeds.length;

// 	const totalMoney = differences.reduce(
// 		(prev, cur) => prev + cur.value,
// 		startingPoint.value
// 	);

// 	const distanceToGoal = goal - totalMoney;

// 	const daysToGoal = distanceToGoal / mediumSpeed;

// 	console.log({ mediumSpeed, totalMoney, daysToGoal });
// };

export const dateSinceNowOfETA = (
	sameDaysNotAccumulated: { date: string; value: number }[],
	goal: number
) => {
	if (sameDaysNotAccumulated.length < 2) throw new Error("NOTENOUGHITEMS");
	const totalMoney = sameDaysNotAccumulated.reduce(
		(prev, cur) => prev + cur.value,
		0
	);
	if (totalMoney >= goal) throw new Error("GOALALREADYREACHED");
	const lastOperationDate =
		sameDaysNotAccumulated[sameDaysNotAccumulated.length - 1].date;
	const daysSinceLastOperation = Math.floor(
		(Date.now() - Date.parse(lastOperationDate)) / 86400000
	);
	const startingPoint = sameDaysNotAccumulated.shift()!;
	const differences = [
		{
			value: sameDaysNotAccumulated[0].value,
			days:
				new Date(sameDaysNotAccumulated[0].date).getTime() -
				new Date(startingPoint.date).getTime(),
		},
	];
	let prevPoint = sameDaysNotAccumulated.shift()!;
	sameDaysNotAccumulated.forEach((curPoint) => {
		differences.push({
			value: curPoint.value,
			days:
				new Date(curPoint.date).getTime() - new Date(prevPoint.date).getTime(),
		});
		prevPoint = curPoint;
	});

	differences.forEach((val) => (val.days /= 86400000));

	const sumOfValues = differences.reduce((prev, cur) => prev + cur.value, 0);

	const sumOfDays = differences.reduce((prev, cur) => prev + cur.days, 0);

	const mediumSpeed = sumOfValues / (sumOfDays + daysSinceLastOperation);

	const distanceToGoal = goal - totalMoney;

	const daysToGoal = distanceToGoal / mediumSpeed;

	return new Date(Date.now() + daysToGoal * 86400000);
};
