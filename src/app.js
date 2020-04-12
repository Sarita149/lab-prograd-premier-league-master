//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, anagerAge, currentTeam, trophiesWon) {
  let Manager = []
  Manager.push(managerName, anagerAge, currentTeam, trophiesWon);
  return Manager;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];
//write your function here
function createFormation(Arr) {
  if (Arr.length == 0) {
    return null;
  }
  let object = {
    "defender": Arr[0], "midfield": Arr[1], "forward": Arr[2]
  };
  return object;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  let debutedYR = []
  for (let i = 0; i < players.length; i++) {
    if (players[i].debut == year) {
      debutedYR.push(players[i]);
    }
  }
  return debutedYR;
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  let fbp = []
  for (let i = 0; i < players.length; i++) {
    if (players[i].position == position) {
      fbp.push(players[i]);
    }
  }
  return fbp;
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let specificAwardPlyr = []
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if ((players[i].awards[j].name == awardName)) {
        // specificAwardPlyr.push(players[i].awards[j].name);
        if (!(specificAwardPlyr.includes(players[i])))
          specificAwardPlyr.push(players[i]);
      }
    }
  }
  return specificAwardPlyr;
}
//Progression 6 - Filter players that won ______ award ____ times

//NOT DONE
function filterByAwardxTimes(awardName, noOfTimes) {
  var plyr = [];
  var count = 0;
  if (plyr == 0) {
    return plyr;
  }
  else {
    var awardName = ["The Best FIFA Men's Player"]
    for (let i = 0; i < players.length; i++) {
      for (let j = 0; j < players[i].awards.length; j++) {
        if (players[i].awards.name == awardName) {
          for (let k = 0; k < awardName.length; k++)
            if (awardName[k] <= 2) {
              count++;
              noOfTimes = count;
              // plyr.push(awardName, noOfTimes)
            }
        }
      }
    }
  }
}
//Progression 7 - Filter players that won ______ award and belong to ______ country

//NOT DONE
function filterByAwardxCountry(awardName, country) {
  var cntry = [];
  // var country = "England";
  // var awardName = "Premier League Golden Boot";
  if (cntry == 0) {
    return cntry;
  }
  else {
    for (let i = 0; i < players.length; i++) {
      if ((players[i].country == country)) {
        if (!(cntry.includes(players[i]))) {
          cntry.push(players[i]);
          // cntry.push(players[i].awards[j].name);
          for (let j = 0; j < players[i].awards.length; j++) {
            if ((players[i].awards[j].name == awardName)) {
              // cntry.push(players[i].country);
              if (!(cntry.includes(players[i])))
                cntry.push(players[i]);
            }
          }
        }
      }
    }
    return cntry;
  }
  // country.push(player[i].country)

}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
let emptyArr=[]
if(emptyArr==0){
  return emptyArr;
}
}
//Progression 9 - Sort players in descending order of their age
function SortByAge() {

}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {

}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {

}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {

}