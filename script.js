function calculate() {
    setInterval(() => {
        let birthdate = new Date(document.querySelector('#birthdate').value)
        let now = new Date()
        let ageInMs = now.getTime() - birthdate.getTime()
        let ageInS = ageInMs / 1000
        let ageInMins = ageInS / 60
        let ageInHrs = ageInMins / 60
        let ageInDays = ageInHrs / 24
        let ageInMonths = ageInDays / 30.4375
        let ageInYears = ageInMonths / 12
        document.querySelector('#years').innerHTML = Math.floor(ageInYears)
        document.querySelector('#months').innerHTML = Math.floor(ageInMonths % 12)
        document.querySelector('#days').innerHTML = Math.floor(ageInDays % 30.4375)
        document.querySelector('#hours').innerHTML = Math.floor(ageInHrs % 24)
        document.querySelector('#minutes').innerHTML = Math.floor(ageInMins % 60)
        document.querySelector('#seconds').innerHTML = Math.floor(ageInS % 60)
        document.querySelector('#seconds').style.borderBottom = '1px grey solid'
    }, 1000);    
}
function reset() {
    window.location.reload()
}