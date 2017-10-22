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



var qualities = ["Race", "Gender", "Cis / Trans", "Sexual Orientation"];

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
           "California": { 
               "Race": { "White": 37.7,
                         "Black": 6.5,
                         "Native American": 1.7,
                         "Hispanic": 38.9,
                         "Asian": 14.8,
                         "Pacific Islander": 0.5,
                         "Mixed": 3.8}      
            },
           "Mississippi": { 
               "Race": { "White": 56.9,
                         "Black": 37.7,
                         "Native American": 0.1,
                         "Hispanic": 3.1,
                         "Asian": 1.1,
                         "Pacific Islander": 0.1,
                         "Mixed": 1.2} 
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