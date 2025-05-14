document.getElementById("fetch-btn").addEventListener("click", fetchProfiles);

function fetchProfiles() {
  const userName = document.querySelector("#username").value.trim();
  if (!userName) alert(`Please enter a valid 🧑‍💻GitHub username.`);

  fetch(`https://api.github.com/users/${userName}`)
    .then((raw) => raw.json())
    .then((data) => {
      if (data.message == "Not Found") alert("User not found.");
      else {
        document.querySelector(".result").style.display = "flex";
        document.querySelector("#avatar").src = data.avatar_url;
        document.querySelector("#Name").textContent = `Name: ${
          data.name || "Not Available"
        }`;
        document.querySelector(
          "#public-repos"
        ).textContent = `Public Repos: ${data.public_repos}`;
        document.querySelector(
          "#followers"
        ).textContent = `Followers: ${data.followers}`;
        document.querySelector(
          "#following"
        ).textContent = `Following: ${data.following}`;
        document.querySelector("#email").textContent = `Email: ${
          data.email || "Not Available"
        }`;
        document.querySelector("#linkdin a").href = data.blog || "#";
        document.querySelector("#linkdin a").textContent = data.blog
          ? "LinkedIn Profile"
          : "Not Available";
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
}
