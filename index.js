document.getElementById("getActivityBtn").addEventListener("click", getActivity)

function getActivity() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity-container").textContent = data.activity
      console.log(data)
        return data.activity
    })
}

