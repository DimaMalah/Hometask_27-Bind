const user = {
	name: "Joseph",
}

const user2 = {
	name: "Dima",
}
function showInfo(address, tel) {
	return {
		name: this.name,
		tel: `${tel}`,
		address: `${address}`,
	}
}

function bind(func, context, ...rest) {
	return function (...args) {
		const uniqKey = Math.random();
		context[uniqKey] = func;
		const result = context[uniqKey](...rest.concat(args));
		delete context[uniqKey];
		return result
	}
}

// Передаём параметры как аргументы функции showInfo (...args)
console.log(bind(showInfo, user)("Kyiv", "0955555555"));

// Передаём параметры как аргументы функции bind (...rest)
console.log(bind(showInfo, user2, "Odesa")("0677777777"));
