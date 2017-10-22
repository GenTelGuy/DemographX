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
       "Sexual Orientation": {"Female": {"Lesbian": 1.3,
                                       "Bisexual": 5.5,
                                       "Hetero": 92.3},
                              "Male": {"Gay": 1.9,
                                       "Bisexual": 2.0,
                                       "Hetero": 95.1}}};
    
var allData = {"USA" : USA}

for(var i = 1; i<=10; i++){
    $('#numberToGenerate').append($('<option>', {
        value: i,
        text: i
    }));
}
    
for(var i = 0; i<=qualities.length; i++){
    $('#profileTableHeaders').append($('<th />', {
        text: qualities[i]
    }));
}



function generateProfile(country, state){
    profile={};
    
    for(var i=0; i<qualities.length; i++){
        dataSource=allData;
        if(dataSource.hasOwnProperty(country) && dataSource[country].hasOwnProperty(qualities[i])){
            dataSource=dataSource[country];
        }
        if(dataSource.hasOwnProperty(state) && dataSource[state].hasOwnProperty(qualities[i])){
            dataSource=dataSource[state];
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
    for(var i = 0; i < $("#numberToGenerate").val(); i++){
        var profile = generateProfile("USA", "");
        
        a=$("#profileTable").find('tbody')
            .append($('<tr>'));
        for(var j = 0; j < qualities.length; j++){
            a.append($('<td>')
                    .text(profile[qualities[j]]));
        }
    }
    
})
});