// 1. Promise

function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}

const messages = async () => {
  const msg = await helloWorld();
  console.log(msg);
};

messages();

// 2. Fetch
// function ambilDataUser() {
//   fetch("https://reqres.in/api/users")
//     .then((response) => response.json())
//     .then((json) => {
//       if (json.data && Array.isArray(json.data)) {
//         json.data.forEach(({ first_name, last_name }) => {
//           console.log(`${first_name} ${last_name}`);
//         });
//       } else {
//         console.log("Data tidak ditemukan atau bukan array.");
//       }
//     })
//     .catch((error) => console.log("Fetch error:", error));
// }

// ambilDataUser();

// 3. Async await
async function ambilDataUser() {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const json = await response.json();

    if (json.data && Array.isArray(json.data)) {
      json.data.forEach(({ first_name, last_name }) => {
        console.log(`${first_name} ${last_name}`);
      });
    } else {
      console.log("Data tidak ditemukan atau bukan array.");
    }
  } catch (error) {
    console.log("Fetch error:", error);
  }
}

ambilDataUser();
