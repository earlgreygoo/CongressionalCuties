var apikey = "?apikey=1010e34bf92e4d98bb1d2b674bd2b19a"

// get data from https://congress.api.sunlightfoundation.com



var legislatorContainer = document.querySelector(".legislatorContainer")

var handleRetrievedData = function(apiResponse) {
    var htmlString = ''
    var legislatorsArray = apiResponse.results
    console.log(apiResponse)
    for ( var i = 0; i < legislatorsArray.length; i ++) {
    	legislator = legislatorsArray[i]
      var legislatorname = legislator.first_name + " " + legislator.last_name
      var legislatorstats = legislator.title + "--" + legislator.party + "-" + legislator.state_name
      
      //used for more declarative programming below
      legislator.get = handleNullInfo

      htmlString += '<div class="legislator">'
      htmlString += '<h1 class="name">' + legislatorname + '</h1>'
      htmlString += '<p class="stats">' + legislatorstats + '</p>'
      htmlString += '<ul class = "contactinfo">'
      htmlString +=   "<li> email: " + legislator.get("oc_email") + "</li>"
      htmlString +=   "<li> website: " + legislator.get("website") + "</li> "
      htmlString +=   "<li> facebook: " + legislator.get("facebook_id") + "</li>" 
      htmlString +=   "<li> twitter: " + legislator.get("twitter_id") + "</li>"
      htmlString += "</ul>"
      htmlString += '</div>'
    }
    
    legislatorContainer.innerHTML = htmlString
}

//use ternary operator to check if property of an object exists. True = return property. False = return "no <propName> available"
var handleNullInfo = function(prop) {
  return this[prop] ? this[prop] : 'no ' + cleanInfo(prop) + ' available'
}

//Cleans specific data for the handleNullInfo string output if none are available.
var cleanInfo = function(word) {
  if(word ==="oc_email"){
    return "email"
  }
  if(word ==="facebook_id"){
    return "facebook"
  }
  if(word ==="twitter_id"){
    return "twitter"
  }
  return word
}



var findLegislators = function() {
    var legislators =  "https://congress.api.sunlightfoundation.com/legislators?apikey=1010e34bf92e4d98bb1d2b674bd2b19a"
    var promise = $.getJSON(legislators)
    promise.then(handleRetrievedData)
}






findLegislators()	

