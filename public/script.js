document.getElementById("submit-btn").addEventListener("click", () => {

    const url = "https://chunk-headerparser-5d3c53a20d9c.herokuapp.com/api/whoami"
    fetch (url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("ip-address").textContent = `IP Address: ${data.ipaddress}`;
            document.getElementById("preferred-language").textContent = `Language(s): ${data.language}`;
            document.getElementById("software").textContent = `Software: ${data.software}`
        })
        .catch(error => {
            alert("Server error - please try again")
        })

})