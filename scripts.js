async function fetchRandomUser(gender) {
    const response = await fetch(
      `https://randomuser.me/api/?gender=${gender}`
    );
    const data = await response.json();
    const user = data.results[0];
  
    document.getElementById("user-image").src = user.picture.large;
    document.getElementById("user-name").innerText = `${user.name.first} ${user.name.last}`;
    document.getElementById("user-email").innerText = user.email;
  }
  