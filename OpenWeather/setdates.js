const apikey = "cdbb9bb9e06c4573812185129230406";
const apiurl = "https://api.weatherapi.com/v1/current.json?key=";

const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")

async function checkDate(city) {
    const response = await fetch(apiurl + apikey + `&q=${city}`);
        
    var data = await response.json();

    const exactTime = data.location.localtime.split(" ")[1];
    const exactDate = data.location.localtime.split(" ")[0];
    const exactDay = getDayFullName(new Date(exactDate).getDay());
    const exactMonth = getMonthFullName(new Date(exactDate).getMonth());

    const exactHour = exactTime.split(":")[0];
    const exactMinute = exactTime.split(":")[1];

    document.getElementById('date').innerHTML = 
    exactHour+`:`+exactMinute+` - ` +  exactDay + `, ` + new Date(exactDate).getDate() + ` ` + exactMonth + ` ` + new Date(exactDate).getFullYear();
}

searchbtn.addEventListener("click",()=>{
    checkDate(searchbox.value);
})

// Function to get the name of day
function getDayFullName(num) {
    switch (num) {
      case 0:
        return "Sunday";
  
      case 1:
        return "Monday";
  
      case 2:
        return "Tuesday";
  
      case 3:
        return "Wednesday";
  
      case 4:
        return "Thursday";
  
      case 5:
        return "Friday";
  
      case 6:
        return "Saturdat";
  
      default:
        return "Don't Know";
    }
  }

// function to get the name of the month
function getMonthFullName(num) {
    switch(num){
        case 0: 
            return "January"; 
        case 1: 
            return "February"; 
        case 2: 
            return "March";
        case 3: 
            return "April"; 
        case 4: 
            return "May"; 
        case 5: 
            return "June"; 
        case 6: 
            return "July"; 
        case 7: 
            return "August"; 
        case 8: 
            return "September"; 
        case 9: 
            return "October"; 
        case 10: 
            return "November"; 
        case 11: 
            return "December"; 
    }
}
