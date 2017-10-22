function convertToPercentage(ratioToOne){
    return ratioToOne/(ratioToOne+1.0);
}

function selectRandomItem(obj){
    total=0.0;
    var keys = Object.keys(obj);
    //console.log(keys);
    for(var i=0; i<keys.length; i++){
        //console.log(keys[i]);
        total+=obj[keys[i]];
    }
    //console.log(total);
    
    var adjustedMap = {};
    var runningTotal=0.0
    for(var i=0; i<keys.length; i++){
        adjustedMap[keys[i]]=obj[keys[i]]/total + runningTotal;
        runningTotal+=obj[keys[i]]/total;
    }
    
    var randomVal = Math.random();
    for(var i=0; i<keys.length-1; i++){
        if(randomVal<adjustedMap[keys[i]]){
            return(keys[i]);
        }
    }
    return(keys[keys.length-1]);
    
}

function selectOrientation(obj, gender){
    return selectRandomItem(obj[gender]);
}



var qualities = ["Race", "Gender", "Sexual Orientation", "Cis / Trans"];

$(document).ready(function() {
    

USA = {"Gender": {"Male":  0.97,
                  "Female": 1.0},
       "Race": {"White": 61.3,
                "Black": 13.3,
                "Native American": 1.3,
                "Asian": 5.7,
                "Pacific Islander": 0.2,
                "Hispanic": 17.8,
                "Mixed": 2.6
               },
       "Cis / Trans": {"Trans": 0.58,
                       "Cis": 100-0.58},
       "Sexual Orientation": {
           "Female": {"Lesbian": 1.3,          
                      "Bisexual": 5.5,
                      "Hetero": 92.3},
           "Male": {"Gay": 1.9,
                    "Bisexual": 2.0,
                    "Hetero": 95.1}},
       "States": {
           "Alabama": {
               "Race": {
                   "White": 65.8,
                   "Black": 26.8,
                   "Native American": 0.7,
                   "Hispanic": 4.2,
                   "Asian": 1.4,
                   "Pacific Islander": 0.1,
                   "Mixed": 1.6
               } 
           },
           "Alaska": {
               "Race": {
                   "White": 61.2,
                   "Black": 3.8,
                   "Native American": 15.2,
                   "Hispanic": 7.0,
                   "Asian": 6.3,
                   "Pacific Islander": 1.3,
                   "Mixed": 7.3
               } 
           },
           "Arizona": {
               "Race": {
                   "White": 55.5,
                   "Black": 4.9,
                   "Native American": 5.4, 
                   "Hispanic": 30.9,
                   "Asian": 3.4,
                   "Pacific Islander": 0.3,
                   "Mixed": 2.8
               } 
           },
           "Arkansas": {
               "Race": {
                   "White": 72.9,
                   "Black": 15.7,
                   "Native American": 0.3,
                   "Hispanic": 7.3,
                   "Asian": 1.6,
                   "Pacific Islander": 0.3,
                   "Mixed": 2.0
               } 
           },
           "California": { 
               "Race": { "White": 37.7,
                         "Black": 6.5,
                         "Native American": 1.7,
                         "Hispanic": 38.9,
                         "Asian": 14.8,
                         "Pacific Islander": 0.5,
                         "Mixed": 3.8}      
            },
           "Colorado": { 
               "Race": { "White": 68.6,
                         "Black": 4.5,
                         "Native American": 1.6,
                         "Hispanic": 21.3,
                         "Asian": 3.3,
                         "Pacific Islander": 0.2,
                         "Mixed": 3.0} 
           },
           "Connecticut": { 
               "Race": { "White": 67.7,
                         "Black": 11.8,
                         "Native American": 0.5,
                         "Hispanic": 15.7,
                         "Asian": 4.7,
                         "Pacific Islander": 0.1,
                         "Mixed": 2.3} 
           },
           "Delaware": { 
               "Race": { "White": 62.9,
                         "Black": 22.6,
                         "Native American": 0.6,
                         "Hispanic": 9.2,
                         "Asian": 4.0,
                         "Pacific Islander": 0.1,
                         "Mixed": 2.6} 
           },
           "Florida": { 
               "Race": { "White": 54.9,
                         "Black": 16.8,
                         "Native American": 0.1,
                         "Hispanic": 24.9,
                         "Asian": 2.9,
                         "Pacific Islander": 0.1,
                         "Mixed": 2.1} 
           },
           "Georgia": { 
               "Race": { "White": 53.4,
                         "Black": 32.0,
                         "Native American": 0.5,
                         "Hispanic": 9.4,
                         "Asian": 4.1,
                         "Pacific Islander": 0.1,
                         "Mixed": 2.1} 
           },
           "Hawaii": { 
               "Race": { "White": 22.1,
                         "Black": 2.2,
                         "Native American": 0.4,
                         "Hispanic": 10.4,
                         "Asian": 37.7,
                         "Pacific Islander": 10.2,
                         "Mixed": 23.7} 
           },
           "Idaho": { 
               "Race": { "White": 82.4,
                         "Black": 0.8,
                         "Native American": 1.8,
                         "Hispanic": 12.3,
                         "Asian": 1.5,
                         "Pacific Islander": 0.2,
                         "Mixed": 2.4} 
           },
           "Illinois": { 
               "Race": { "White": 61.7,
                         "Black": 14.7,
                         "Native American": 0.6,
                         "Hispanic": 17.0,
                         "Asian": 5.5,
                         "Pacific Islander": 0.1,
                         "Mixed": 1.9} 
           },
           "Indiana": { 
               "Race": { "White": 79.6,
                         "Black": 9.7,
                         "Native American": 0.4,
                         "Hispanic": 6.8,
                         "Asian": 2.2,
                         "Pacific Islander": 0.1,
                         "Mixed": 2.0} 
           },
           "Iowa": { 
               "Race": { "White": 86.2,
                         "Black": 3.7,
                         "Native American": 0.5,
                         "Hispanic": 5.8,
                         "Asian": 2.5,
                         "Pacific Islander": 0.1,
                         "Mixed": 1.8} 
           },
           "Kansas": { 
               "Race": { "White": 76.3,
                         "Black": 6.2,
                         "Native American": 1.2,
                         "Hispanic": 11.6,
                         "Asian": 3.0,
                         "Pacific Islander": 0.1,
                         "Mixed": 2.9} 
           },
           "Kentucky": { 
               "Race": { "White": 85.0,
                         "Black": 8.3,
                         "Native American": 0.3,
                         "Hispanic": 3.5,
                         "Asian": 1.5,
                         "Pacific Islander": 0.1,
                         "Mixed": 1.9} 
           },
           "Louisiana": { 
               "Race": { "White": 59.0,
                         "Black": 32.6,
                         "Native American": 0.8,
                         "Hispanic": 5.0,
                         "Asian": 1.8,
                         "Pacific Islander": 0.1,
                         "Mixed": 1.6} 
           },
           "Maine": { 
               "Race": { "White": 93.5,
                         "Black": 1.5,
                         "Native American": 0.7,
                         "Hispanic": 1.6,
                         "Asian": 1.2,
                         "Pacific Islander": 0.005,
                         "Mixed": 1.7} 
           },
           "Maryland": { 
               "Race": { "White": 51.5,
                         "Black": 30.7,
                         "Native American": 0.6,
                         "Hispanic": 9.8,
                         "Asian": 6.6,
                         "Pacific Islander": 0.1,
                         "Mixed": 2.8} 
           },
           "Massachusetts": { 
               "Race": { "White": 73.0,
                         "Black": 8.6,
                         "Native American": 0.5,
                         "Hispanic": 11.5,
                         "Asian": 6.7,
                         "Pacific Islander": 0.1,
                         "Mixed": 2.3} 
           },
           "Michigan": { 
               "Race": { "White": 75.4,
                         "Black": 14.2,
                         "Native American": 0.7,
                         "Hispanic": 5.0,
                         "Asian": 3.1,
                         "Pacific Islander": 0.005,
                         "Mixed": 2.4} 
           },
           "Minnesota": { 
               "Race": { "White": 80.6,
                         "Black": 6.2,
                         "Native American": 1.3,
                         "Hispanic": 5.2,
                         "Asian": 4.9,
                         "Pacific Islander": 0.1,
                         "Mixed": 2.4} 
           },
           "Mississippi": { 
               "Race": { "White": 56.9,
                         "Black": 37.7,
                         "Native American": 0.1,
                         "Hispanic": 3.1,
                         "Asian": 1.1,
                         "Pacific Islander": 0.1,
                         "Mixed": 1.2} 
           },
           "Missouri": { 
               "Race": { "White": 79.7,
                         "Black": 11.8,
                         "Native American": 0.6,
                         "Hispanic": 4.1,
                         "Asian": 2.0,
                         "Pacific Islander": 0.1,
                         "Mixed": 2.2} 
           },
           "Montana": { 
               "Race": { "White": 86.5,
                         "Black": 0.6,
                         "Native American": 6.6,
                         "Hispanic": 3.6,
                         "Asian": 0.8,
                         "Pacific Islander": 0.1,
                         "Mixed": 2.7} 
           },
           "Nebraska": { 
               "Race": { "White": 79.6,
                         "Black": 5.0,
                         "Native American": 1.4,
                         "Hispanic": 10.7,
                         "Asian": 2.5,
                         "Pacific Islander": 0.1,
                         "Mixed": 2.1} 
           },
           "Nevada": { 
               "Race": { "White": 49.9,
                         "Black": 9.6,
                         "Native American": 1.6,
                         "Hispanic": 28.5,
                         "Asian": 8.7,
                         "Pacific Islander": 0.8,
                         "Mixed": 4.2} 
           },
           "New Hampshire": { 
               "Race": { "White": 90.8,
                         "Black": 1.5,
                         "Native American": 0.3,
                         "Hispanic": 3.5,
                         "Asian": 2.7,
                         "Pacific Islander": 0.1,
                         "Mixed": 1.7} 
           },
           "New Jersey": { 
               "Race": { "White": 55.8,
                         "Black": 15.0,
                         "Native American": 0.6,
                         "Hispanic": 20.0,
                         "Asian": 9.8,
                         "Pacific Islander": 0.1,
                         "Mixed": 2.2} 
           },
           "New Mexico": { 
               "Race": { "White": 38.1,
                         "Black": 2.5,
                         "Native American": 10.6,
                         "Hispanic": 48.5,
                         "Asian": 1.7,
                         "Pacific Islander": 0.2,
                         "Mixed": 2.5} 
           },
           "New York": { 
               "Race": { "White": 55.8,
                         "Black": 17.7,
                         "Native American": 1.0,
                         "Hispanic": 19.0,
                         "Asian": 8.9,
                         "Pacific Islander": 0.1,
                         "Mixed": 2.5} 
           },
           "North Carolina": { 
               "Race": { "White": 63.5,
                         "Black": 22.2,
                         "Native American": 1.6,
                         "Hispanic": 9.2,
                         "Asian": 2.9,
                         "Pacific Islander": 0.1,
                         "Mixed": 2.2} 
           },
           "North Dakota": { 
               "Race": { "White": 90.8,
                         "Black": 1.5,
                         "Native American": 0.3,
                         "Hispanic": 3.5,
                         "Asian": 2.7,
                         "Pacific Islander": 0.1,
                         "Mixed": 1.7} 
           },
           "Ohio": { 
               "Race": { "White": 79.5,
                         "Black": 12.8,
                         "Native American": 0.3,
                         "Hispanic": 3.7,
                         "Asian": 2.2,
                         "Pacific Islander": 0.1,
                         "Mixed": 2.2} 
           },
           "Oklahoma": { 
               "Race": { "White": 66.2,
                         "Black": 7.8,
                         "Native American": 9.2,
                         "Hispanic": 10.3,
                         "Asian": 2.2,
                         "Pacific Islander": 0.2,
                         "Mixed": 6.1} 
           },
           "Oregon": { 
               "Race": { "White": 76.4,
                         "Black": 2.1,
                         "Native American": 1.8,
                         "Hispanic": 12.8,
                         "Asian": 4.5,
                         "Pacific Islander": 0.4,
                         "Mixed": 3.8} 
           },
           "Pennsylvania": { 
               "Race": { "White": 77.0,
                         "Black": 11.8,
                         "Native American": 0.4,
                         "Hispanic": 7.0,
                         "Asian": 3.5,
                         "Pacific Islander": 0.1,
                         "Mixed": 1.9} 
           },
           "Rhode Island": { 
               "Race": { "White": 73.3,
                         "Black": 8.1,
                         "Native American": 1.0,
                         "Hispanic": 14.9,
                         "Asian": 3.6,
                         "Pacific Islander": 0.2,
                         "Mixed": 2.7} 
           },
           "South Carolina": { 
               "Race": { "White": 63.9,
                         "Black": 27.5,
                         "Native American": 0.5,
                         "Hispanic": 5.5,
                         "Asian": 1.6,
                         "Pacific Islander": 0.1,
                         "Mixed": 1.8} 
           },
           "South Dakota": { 
               "Race": { "White": 82.5,
                         "Black": 2.0,
                         "Native American": 9.0,
                         "Hispanic": 3.7,
                         "Asian": 1.5,
                         "Pacific Islander": 0.1,
                         "Mixed": 3.7} 
           },
           "Tennessee": { 
               "Race": { "White": 74.2,
                         "Black": 17.1,
                         "Native American": 0.4,
                         "Hispanic": 5.2,
                         "Asian": 1.8,
                         "Pacific Islander": 0.1,
                         "Mixed": 1.9} 
           },
           "Texas": { 
               "Race": { "White": 42.6,
                         "Black": 12.6,
                         "Native American": 1.0,
                         "Hispanic": 39.1,
                         "Asian": 4.8,
                         "Pacific Islander": 0.1,
                         "Mixed": 1.9} 
           },
           "Utah": { 
               "Race": { "White": 78.8,
                         "Black": 1.4,
                         "Native American": 1.6,
                         "Hispanic": 13.8,
                         "Asian": 2.5,
                         "Pacific Islander": 1.0,
                         "Mixed": 2.5} 
           },
           "Vermont": { 
               "Race": { "White": 93.1,
                         "Black": 1.3,
                         "Native American": 0.4,
                         "Hispanic": 1.9,
                         "Asian": 1.8,
                         "Pacific Islander": 0.005,
                         "Mixed": 1.9} 
           },
           "Virginia": { 
               "Race": { "White": 62.4,
                         "Black": 19.8,
                         "Native American": 0.5,
                         "Hispanic": 9.1,
                         "Asian": 6.6,
                         "Pacific Islander": 0.1,
                         "Mixed": 2.9} 
           },
           "Washington": { 
               "Race": { "White": 69.5,
                         "Black": 4.1,
                         "Native American": 1.9,
                         "Hispanic": 12.4,
                         "Asian": 8.6,
                         "Pacific Islander": 0.8,
                         "Mixed": 4.6} 
           },
           "West Virginia": { 
               "Race": { "White": 92.3,
                         "Black": 3.6,
                         "Native American": 0.2,
                         "Hispanic": 1.5,
                         "Asian": 0.8,
                         "Pacific Islander": 0.005,
                         "Mixed": 1.7} 
           },
           "Wisconsin": { 
               "Race": { "White": 81.7,
                         "Black": 6.6,
                         "Native American": 1.1,
                         "Hispanic": 6.7,
                         "Asian": 2.8,
                         "Pacific Islander": 0.1,
                         "Mixed": 1.9} 
           },
           "Wyoming": { 
               "Race": { "White": 84.1,
                         "Black": 1.3,
                         "Native American": 2.7,
                         "Hispanic": 10.0,
                         "Asian": 1.0,
                         "Pacific Islander": 0.1,
                         "Mixed": 2.1} 
           }
       }};
    
var allData = {"USA" : USA}

for(var i = 1; i<=10; i++){
    $('#numberToGenerate').append($('<option>', {
        value: i,
        text: i
    }));
}
    
for(var key in allData){
    $('#countrySelect').append($('<option>', {
        value: key,
        text: key
    }));
}
    
for(var key in allData[$('#countrySelect').val()]["States"]){
    $('#stateSelect').append($('<option>', {
        value: key,
        text: key
    }));
}
function fillHeaders(){  
    for(var i = 0; i<qualities.length; i++){
        $('#profileTableHeaders').append($('<th />', {
            text: qualities[i]
        }));
    }
}
fillHeaders();


function generateProfile(country, state){
    profile={};
    for(var i=0; i<qualities.length; i++){
        dataSource=allData;
        if(dataSource.hasOwnProperty(country) && dataSource[country].hasOwnProperty(qualities[i])){
            //alert("Using country-level data for:" + qualities[i]);
            dataSource=dataSource[country];
        }
        console.log(dataSource["States"][state]);
        if(dataSource["States"].hasOwnProperty(state) && dataSource["States"][state].hasOwnProperty(qualities[i])){
            dataSource=dataSource["States"][state];
        }
        if(qualities[i]!=="Sexual Orientation"){
            profile[qualities[i]] = selectRandomItem(dataSource[qualities[i]])
        }
        else{
            profile[qualities[i]] = selectOrientation(dataSource[qualities[i]], profile["Gender"]);
        }
    }
    return profile;
}
    


$('#generateButton').click(function() {
    //alert(allData["USA"]["Gender"]["Male"]);
    $('#profileTable tr:not(:first)').remove();
    for(var i = 0; i < $("#numberToGenerate").val(); i++){
        var profile = generateProfile($('#countrySelect').val(), $('#stateSelect').val());
        
        a=$("#profileTable").find('tbody');
        b=$('<tr/>');
        b.append($('<td class=\"entry\"/>')
                    .text(i+1));
        for(var j = 0; j < qualities.length; j++){
            b.append($('<td class=\"entry\"/>')
                    .text(profile[qualities[j]]));
        }
        a.append(b);
    }
    
})
});