//cara export dari backend
// module.exports = {fullName,}; // backend

const fullName = "John Doe";

const numbers = [1, 2, 3, 4, 5];

const john = { fullName: "John Doe", age: 30 };

const sayGreetings = () => {
  console.log("Hello world");
};

export { fullName, numbers, john };
export default sayGreetings;
