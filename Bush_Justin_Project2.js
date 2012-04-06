// Justin Bush
// SDI 04/12
// Project 2 
// 04/5/12


// Variables
var myFavoriteTeam = "Oakland Raiders";
var numberOfTeams = 32;
var numberOfConferences = 2;
var numberOfDivisions = 8;
var teamsPerDivision = 4;
var afcConferenceDivisions = "AFC North, AFC South, AFC West, AFC East";
var nfcDivisions = "NFC North, NFC South, NFC West, NFC East";
var isOaklandClose = false;
var winsNeededToMakePlayoffs = 11;
var winsForOakland = 7;
var backToBack = true;

// Football History
console.log("There are " + numberOfTeams + " teams in the National Football League.");
console.log("There are  " + numberOfConferences + " conferences," + " the AFC and NFC.");
console.log("Each team is placed into " + numberOfDivisions + " seperate divisions.");
console.log("The AFC consists of the " + afcConferenceDivisions + " and the NFC is consisted of the " + nfcDivisions + ".");
console.log("My favorite team is " + myFavoriteTeam + ", they have not been to a Superbowl since 2002.");
console.log("One team from each Conference makes it to the Super Bowl each year.");







// With 32 NFL teams are the Raiders at the bottom of the standings?
// Can teams tie and if they do what will happen?
// Can Superbowl Winners come back a season later and repeat?

console.log("The teams with the worst records in each division at the end of the regular season will not be in the playoffs.");
if (isOaklandClose === false) {
    if (winsNeededToMakePlayoffs < winsForOakland) {
        console.log("The Oakland Raiders made it to the playoffs!");
        console.log("Out of the 3 rounds of the playoffs, there can only be one winner in each of the " + numberOfConferences + " conferences.");
        console.log("I would love to see it be the " + myFavoriteTeam + '.');
        
        
    } else {
        
        
        console.log(" Oakland has had a tie in their division, and has to play a wild card game to go to the playoffs.");
        
        
        if (backToBack = true) {
            console.log("Even though it seems nearly impossible a team may be Super Bowl victors back to back!");
            console.log("The odds at the beginning of the season are 1 in 32 at the beginning of the season, in Vegas they have preseason odds for a team winning a Superbowl again.");
            console.log("Even though it is  unlikely that the previous Super Bowl victor wins consecutively, it has been done before.");
   
   
        } else {
            
            
            console.log("The winning Superbowl Team cannot repeat back to back.");
            console.log("Cheer along with RaiderNation to see if the " + myFavoriteTeam + " can get back to the Championship!");
        }
    }
     
} else {

    
    var justMissed = (winsNeededToMakePlayoffs - winsForOakland);
        console.log("The Oakland Raiders are out of the playoffs by " + justMissed + " wins.");
        
}

console.log("RAIDER NATION");

//variables
var defensivePersonnel = 11;
var offensivePersonnel = 11;
var offsides = true;
var passInt = false
var flagsThrown = false;
var coinToss = true;
var minutesPerQuarter = 15;
var quartersPerGame = 4;
var leader = ["Quarterback"];


console.log ("On each side of the ball there are " + defensivePersonnel +  " defensive players, and " + offensivePersonnel + " offensive players.");
var playersOnField =  11;
for (var playersOnField = 11; playersOnField > 11; playersOnField--) {
    console.log (playersOnField + " Player loses yards, and sometimes can be ejected if they get a penalty called on them ." );
    playersOnField--;}
console.log ("The same rules apply for the Defensive players." );
var defensivePlayers = 1;
while (defensivePlayers > 0) {
     console.log ( "11 players have to be on the field at all times. ");
     defensivePlayers--;
     
};


var penaltyCalls = ["Offsides", "Pass Interference", "Roughing the Kicker", "Unsportsman Like Conduct"];
var minutesPerPenalty = [5,10,15,20];
for (var penaltyNumber = 0; penaltyNumber < penaltyCalls.length; penaltyCalls++){
     var penaltyCalls = penaltyCalls[penaltyNumber];
     minutesThisPenalty = minutesPerPenalty[penaltyNumber];
console.log ("A player that gets called for " + penaltyCalls + " can receive " + minutesThisPenalty + " yards lost for their team!");
};
console.log ("Every NFL game lasts " + quartersPerGame + " quarters.");
var endGame1 = "At the end of regulation if there is a tie,";
var endGame2 = "If at the end of overtime there is still a tie, the game counts as a tie during regular season.";{
console.log (endGame3 = endGame1 + " Overtime results in an extra quarter for 15 minutes. " + endGame2);
};



console.log ("Each team gets a chance to score if the first team to score kicks a field goal on the opening drive");
console.log ("If the team scores on the opening drive ");
var bothTeamsKickFieldgoal = true;
var theGameContinues = false;
if (bothTeamsKickFieldgoal === theGameContinues){
    console.log ("that team wins.");
} else {
console.log ("then the game is tied.");
};
console.log ("The " + [leader] + "s are the team leaders.");
console.log ( "The " + leader [0] + " is the most valuable player to the team, he leads the team mentally and physically.")
console.log ("Raider Nation Stand Up!");




