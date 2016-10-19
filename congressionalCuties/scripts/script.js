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
        


       



       htmlString += '<div class="legislator">'
       htmlString += '<h1 class="name">' + legislatorname + '</h1>'
       htmlString += '<p class="stats">' + legislatorstats + '</p>'
       htmlString += '<ul class = "contactinfo">' + "<li> email: " + legislator.oc_email + "</li> <li> website: " + legislator.website + "</li> <li> facebook: " + legislator.facebook_id + "</li> <li> twitter: " + legislator.twitter_id + "</li> </ul>"
       htmlString += '</div>'
    }
    
    legislatorContainer.innerHTML = htmlString
    
}



var findLegislators = function() {
    var legislators =  "https://congress.api.sunlightfoundation.com/legislators?apikey=1010e34bf92e4d98bb1d2b674bd2b19a"
    var promise = $.getJSON(legislators)
    promise.then(handleRetrievedData)
}






findLegislators()	

