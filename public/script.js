document.getElementById("submit-btn").addEventListener("click", () => {

    const url = "https://chunk-headerparser-5d3c53a20d9c.herokuapp.com/"
    fetch (url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("ip-address").textContent = JSON.stringify(data.ipaddress, null, 2);
            document.getElementById("preferred-language").textContent = JSON.stringify(data.language, null, 2);
            document.getElementById("software").textContent = JSON.stringify(data.software, null, 2)
        })
        .catch(error => {
            alert("Server error - please try again")
        })

})