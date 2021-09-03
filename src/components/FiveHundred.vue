<template>
 
  <div class="hello"> 
    
    <v-card
    class="mx-auto"
    max-width="500"
    >
    <v-toolbar
      color=""
      
    >
      <v-spacer> </v-spacer>
      <v-toolbar-title> <h1>500 </h1> </v-toolbar-title>
    
      <v-spacer></v-spacer>

     
    </v-toolbar>
    <v-container>
      <v-row dense>
        <v-col
          v-for="(team, index) in teams"
          :key="team.name"
          cols= 6
        >
          <v-card
            @click="setATeam(index, team)"
            >
            <v-overlay
              absolute
              :value="isBidder(index)"
              opacity="0.8" 
              color="success" 
            >
            <div
            class="text-h2">Bidding</div>
            </v-overlay>
            
            <v-img
              :src=team.img
              class="white--text align-top"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              
            >
              
              <v-card-title v-text="team.name" class="text-h3"> </v-card-title>
              
               <div class="text-h1"> {{team.score}}  </div>
            </v-img>

            
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
 
    <v-card 
      class="bid-table  mx-auto pt-5"
      max-width="500"
    >
    <v-card-text>
      <v-row dense>
    <v-col>
    </v-col>
          <v-col>
            Spades
          </v-col>
          <v-col>
            Clubs
          </v-col>
          <v-col>
            Diamonds
          </v-col>
          <v-col>
            Hearts
          </v-col>
          <v-col>
            No Trump
          </v-col>
      </v-row>
      <v-row 
        v-for="(bids, index) in bidSheet" :key="bids.index" 
        dense
      >
        <v-col>
          {{index}}
        </v-col>
        <v-col
            v-for="bid in bids"
            :key="bid.index">
              <v-btn @click= "makeABid(bid)">
                {{bid.points}}
              </v-btn>
        </v-col>
      </v-row>
    </v-card-text>

    <v-expand-transition
      v-if="overlay"
    >
    
      <v-card
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-system-bar
          lights-out
        >
          <v-spacer></v-spacer>
          <v-icon @click="clearRound()">mdi-close</v-icon>
        </v-system-bar>
        <v-card-text>
          <div class="text-h4 pb-4">
            {{teams[game.currentRound.team].name}} calls:
          </div>
          <div class="text-center text-h4 pa-4">
            {{game.currentRound.bid.shortCode[0]}}
            <v-icon large> {{game.currentRound.bid.icon}} </v-icon>
          </div>
          <v-btn
            color="success"
            @click="scoring=true"
          >
            End Round
          </v-btn>
        </v-card-text>
      </v-card>
    </v-expand-transition>
    <v-expand-transition
        v-if="scoring"
        >
      <v-card
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
       <v-system-bar
          lights-out
        >
          <v-spacer></v-spacer>
          <v-icon @click="scoring=false">mdi-close</v-icon>
        </v-system-bar>
      
        <v-card-text>
         
          <div class="text-center text-h5 ma-3">
            Did {{biddingTeam.name}} win:
            {{game.currentRound.bid.shortCode[0]}}?
            <v-icon large> {{game.currentRound.bid.icon}} </v-icon>
          </div>
          <v-btn-toggle>
          <v-btn
            @click="game.currentRound.bidWon = true"
          
          >
           yes
          </v-btn>
          <v-btn
            @click="game.currentRound.bidWon=false"
          >
           no
          </v-btn>
          </v-btn-toggle>
              
          <div class="text-center text-h5 pb-4">
           How many tricks did {{defendingTeam.name}} take?
            <v-row>
               <v-spacer></v-spacer>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
       
            <v-text-field
           
            label="Tricks"
            v-model="game.currentRound.tricksTaken">
            </v-text-field>
        </v-col>
         <v-spacer></v-spacer>
            </v-row>
          </div>
             <v-btn
            color="success"
            @click="scoreRound()"
          >
            Score Round
          </v-btn>
        </v-card-text>
      </v-card> 
    </v-expand-transition>
  </v-card>
    
   
  </div>
</template>

<script>
export default {
  name: 'FiveHundred',
  data () {
    return {
      selected: false,
      overlay: false,
      scoring: false,
      absolute: true,
      teams: [{"name":"Us", "bid": "", "score": 210, "img": "https://picsum.photos/200"},{"name": "Them", "bid":"", "score": -400, "img": "https://picsum.photos/201"} ],
      bidder: 0,
      //bidSheet should be a added as a mixin
      bidSheet: {
        "Six": {
          "spades": {"points": 40, "shortCode": "6S", "icon": "mdi-cards-spade" },
          "clubs": {"points": 60, "shortCode": "6C", "icon": "mdi-cards-club" },
          "diamonds": {"points": 80, "shortCode": "6D", "icon": "mdi-cards-diamond" },
          "hearts": {"points": 100, "shortCode": "6H", "icon": "mdi-cards-heart" },
          "notrump":{"points": 120, "shortCode": "6NT", "icon": "mdi-cards" }
        },
        "Seven": {
          "spades": {"points": 140, "shortCode": "7S", "icon": "mdi-cards-spade" },
          "clubs": {"points": 160, "shortCode": "7C", "icon": "mdi-cards-club" },
          "diamonds": {"points": 180, "shortCode": "7D", "icon": "mdi-cards-diamond" },
          "hearts": {"points": 200, "shortCode": "7H", "icon": "mdi-cards-heart" },
          "notrump":{"points": 220, "shortCode": "7NT", "icon": "mdi-cards" }
        },
        "Eight": {
          "spades": {"points": 240, "shortCode": "8S", "icon": "mdi-cards-spade" },
          "clubs": {"points": 260, "shortCode": "8C", "icon": "mdi-cards-club" },
          "diamonds": {"points": 280, "shortCode": "8D", "icon": "mdi-cards-diamond" },
          "hearts": {"points": 300, "shortCode": "8H", "icon": "mdi-cards-heart" },
          "notrump":{"points": 320, "shortCode": "8NT", "icon": "mdi-cards" }
        },
        "Nine": {
          "spades": {"points": 340, "shortCode": "9S", "icon": "mdi-cards-spade" },
          "clubs": {"points": 360, "shortCode": "9C", "icon": "mdi-cards-club" },
          "diamonds": {"points": 380, "shortCode": "9D", "icon": "mdi-cards-diamond" },
          "hearts": {"points": 400, "shortCode": "9H", "icon": "mdi-cards-heart" },
          "notrump":{"points": 420, "shortCode": "9NT", "icon": "mdi-cards" }
        },
        "Ten": {
          "spades": {"points": 440, "shortCode": "10S", "icon": "mdi-cards-spade" },
          "clubs": {"points": 460, "shortCode": "10C", "icon": "mdi-cards-club" },
          "diamonds": {"points": 480, "shortCode": "10D", "icon": "mdi-cards-diamond" },
          "hearts": {"points": 500, "shortCode": "10H", "icon": "mdi-cards-heart" },
          "notrump":{"points": 520, "shortCode": "10NT", "icon": "mdi-cards" }
        }
      },
      game: {"currentRound":{
                "team": {},
                "bid":{},
                "bidWon": true,
                "tricksTaken": null,
              } , 
            "history": []}
    }             
  },
  computed: {
    biddingTeam: function () {
      return this.teams[this.game.currentRound.team]
    },
    currentBid: function (){
      return this.game.currentRound.bid
      
    },
    defendingTeam: function () {
      if (this.biddingTeam){
        if (this.game.currentRound.team == 0){
          return this.teams[1]
        }
        else 
          return this.teams[0]
      }
    },
  },
  methods: {
    scoreRow: function (row) {
      return Object.entries(row)
    },
   
    newGame: function () {
      return null
      
    },
    makeABid: function (bid) {
      this.game.currentRound.bid = bid
      console.log(this.game.currentRound.team)
      if (this.game.currentRound.team == 0 || this.game.currentRound.team == 1)
        this.overlay= true
      return null
    },
    setATeam: function(team) {
      console.log(`Team: ${team}`)
      this.game.currentRound.team = team
      if (this.game.currentRound.bid.shortCode)
        this.overlay= true
    },
    isBidder: function (selectedTeam) {
      if (this.game.currentRound.team == selectedTeam){
        return true   
      }
      return false
    },
    scoreRound: function() {
      if (this.game.currentRound.bidWon == true)
        this.biddingTeam.score += this.game.currentRound.bid.points
      else
        this.biddingTeam.score -= this.game.currentRound.bid.points
      
      this.defendingTeam.score += (this.game.currentRound.tricksTaken * 10)
      
      this.scoring = false
      this.clearRound()
      //what was the result of the bid? Won? Lost?
      //how many points did the other team make
      //add or subtract the points from the bidder
      //add points for tricks taken
      //check for a winner (over 500 or under -500)
    },
    clearRound: function () {
      this.game.currentRound.bid= {}
      this.game.currentRound.team= {}
      this.game.currentRound.tricksTaken= 0
      this.overlay= false
      this.scoring= false
      
    } 
    
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.v-card--reveal {
bottom: 0;
opacity: 1 !important;
position: absolute;
width: 100%;
}
</style>