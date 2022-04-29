export function signIn(user) {
  return fetch(`https://gs-app-order-service.herokuapp.com/api/users/${user.id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("auth-api: signIn", data);
      return data;
    });
}

export async function signUp(user) {
  return true;
}

export async function signOut() {
  return true;
}

export async function updateUser(user) {
  return fetch(`https://gs-app-order-service.herokuapp.com/api/${user.id}`, {
    method: "POST",
    body: user,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("auth-api: updateUser", data);
      return data;
    });
}
