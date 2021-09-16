<template>
 
  <div class="hello"> 
  
    <v-card
    class="mx-auto overflow-hidden"
    max-width="450"
    >
    <v-overlay
      :value="winner">
      <v-card>
        <div 
        class="mx-auto text-h1 pa-6 ma-6">
        {{winner}} wins!
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        
      <v-btn
      color="success"
      
      @click="newGame()">
        New game
      </v-btn>
       <v-spacer></v-spacer>
      </v-card-actions>
      </v-card>

    </v-overlay>
    <v-toolbar
      color=""
      
    >
      <v-spacer></v-spacer>
      <v-toolbar-title> <h1>500 </h1></v-toolbar-title>
    <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
     
    </v-toolbar>
     <v-navigation-drawer
      v-model="drawer"
      right
      absolute
      temporary
      width="150"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
        >
          <v-list-item
           @click="newGame()">
            <v-list-item-title  
            >
              New Game
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Rules</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
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
      max-width="450"
    >
   
    <v-card-text>
      
      <v-container 
        fill-height 
        fluid
      >
       
        <v-row 
          align="center"
          justify="center"
        >
        <v-col
          cols=2>
        </v-col>
            
            <v-col>
             <v-icon large>mdi-cards-spade</v-icon>
            </v-col>
            <v-col>
            
             <v-icon large>mdi-cards-club</v-icon>
            
            </v-col>
            <v-col>
            <v-icon large>mdi-cards-diamond</v-icon>
            
            </v-col>
            <v-col>
             <v-icon large>mdi-cards-heart</v-icon>
            </v-col>
            <v-col>
            <span>No Trump</span>
            </v-col>
        </v-row>
      </v-container>
     
      <v-row 
        v-for="(bids, index) in bidSheet" :key="bids.index" 
        dense
      >
       
        <v-col
          >
          {{index}}
        </v-col>
       
        <v-col
            v-for="bid in bids"
            :key="bid.index"
            >
              <v-btn 
                @click= "makeABid(bid)"
                
              >
                {{bid.points}}
              </v-btn>
        </v-col>
        
      </v-row>
      <v-row>
        <v-col
        cols=1>
        </v-col>
        <v-col>
          <v-btn> misere</v-btn>
        </v-col>

        <v-col>
          <v-btn> open misere</v-btn>
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
            {{game.currentRound.bid.shortCode.slice(0,-1)}}
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
         
          <div class="text-center text-h5 pt-0 mt-0 mb-3">
            Did {{biddingTeam.name}} win:
            {{game.currentRound.bid.shortCode.slice(0,-1)}}
            <v-icon large> {{game.currentRound.bid.icon}} </v-icon> ?
          </div>
          <v-btn-toggle
            v-model=game.currentRound.bidWon
          >
            <v-btn>
            yes
            </v-btn>
            <v-btn>
            no
            </v-btn>
          </v-btn-toggle>
              
          <div class="text-center text-h5 mb-2 mt-4">
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
      drawer: false,
      group: null,
      teams: [{"name":"Us", "bid": "", "score": 0, "img": "https://picsum.photos/200"},{"name": "Them", "bid":"", "score": 0, "img": "https://picsum.photos/201"} ],
      bidder: 0,
      //bidSheet should be a added as a mixin
      bidSheet: {
        "6": {
          "spades": {"points": 40, "shortCode": "6S", "icon": "mdi-cards-spade" },
          "clubs": {"points": 60, "shortCode": "6C", "icon": "mdi-cards-club" },
          "diamonds": {"points": 80, "shortCode": "6D", "icon": "mdi-cards-diamond" },
          "hearts": {"points": 100, "shortCode": "6H", "icon": "mdi-cards-heart" },
          "notrump":{"points": 120, "shortCode": "6NT", "icon": "mdi-cards" }
        },
        "7": {
          "spades": {"points": 140, "shortCode": "7S", "icon": "mdi-cards-spade" },
          "clubs": {"points": 160, "shortCode": "7C", "icon": "mdi-cards-club" },
          "diamonds": {"points": 180, "shortCode": "7D", "icon": "mdi-cards-diamond" },
          "hearts": {"points": 200, "shortCode": "7H", "icon": "mdi-cards-heart" },
          "notrump":{"points": 220, "shortCode": "7NT", "icon": "mdi-cards" }
        },
        "8": {
          "spades": {"points": 240, "shortCode": "8S", "icon": "mdi-cards-spade" },
          "clubs": {"points": 260, "shortCode": "8C", "icon": "mdi-cards-club" },
          "diamonds": {"points": 280, "shortCode": "8D", "icon": "mdi-cards-diamond" },
          "hearts": {"points": 300, "shortCode": "8H", "icon": "mdi-cards-heart" },
          "notrump":{"points": 320, "shortCode": "8NT", "icon": "mdi-cards" }
        },
        "9": {
          "spades": {"points": 340, "shortCode": "9S", "icon": "mdi-cards-spade" },
          "clubs": {"points": 360, "shortCode": "9C", "icon": "mdi-cards-club" },
          "diamonds": {"points": 380, "shortCode": "9D", "icon": "mdi-cards-diamond" },
          "hearts": {"points": 400, "shortCode": "9H", "icon": "mdi-cards-heart" },
          "notrump":{"points": 420, "shortCode": "9NT", "icon": "mdi-cards" }
        },
        "10": {
          "spades": {"points": 440, "shortCode": "10S", "icon": "mdi-cards-spade" },
          "clubs": {"points": 460, "shortCode": "10C", "icon": "mdi-cards-club" },
          "diamonds": {"points": 480, "shortCode": "10D", "icon": "mdi-cards-diamond" },
          "hearts": {"points": 500, "shortCode": "10H", "icon": "mdi-cards-heart" },
          "notrump":{"points": 520, "shortCode": "10NT", "icon": "mdi-cards" }
        }
      },
      winner: "",
      game: {"currentRound":{
                "team": {},
                "bid":{},
                "bidWon": 0,
                "tricksTaken": null,
              } , 
            "history": []}
    }             
  },
  watch: {
      group () {
        this.drawer = false
      },
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
      return null
    },
  },
  methods: {
    scoreRow: function (row) {
      return Object.entries(row)
    },
   
    newGame: function () {
      this.clearRound()
      for (const i of this.teams){
        i.score=0
      }
      this.winner=""
    },
    makeABid: function (bid) {
      this.game.currentRound.bid = bid
      if (this.game.currentRound.team == 0 || this.game.currentRound.team == 1)
        this.overlay= true
      return null
    },
    setATeam: function(team) {
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
      if (this.game.currentRound.bidWon == 0)
        this.biddingTeam.score += this.game.currentRound.bid.points
      else
        this.biddingTeam.score -= this.game.currentRound.bid.points
      this.defendingTeam.score += (this.game.currentRound.tricksTaken * 10)
      this.scoring = false
      this.isWinner()
      this.clearRound()
    },
    isWinner: function () {
      for (const i of this.teams) {
        if (i.score >= 500){
          this.winner= i.name
        }
        else if (i.score < -500){
          //Assume that the bidding team lost their bid and 
          //went out the back door 
          this.winner=this.defendingTeam.name}
      }
      return null
    },
    clearRound: function () {
      this.game.currentRound.bid= {}
      this.game.currentRound.team= {}
      this.game.currentRound.bidWon= 0
      this.game.currentRound.tricksTaken= null
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