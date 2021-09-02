<template>
 
  <div class="hello"> 

    <v-card
    class="mx-auto"
    max-width="500"
    >

    <v-toolbar
      color=""
      dark
    >
      <v-spacer> </v-spacer>
      <v-toolbar-title> <h2>Score </h2> </v-toolbar-title>
    
      <v-spacer></v-spacer>

     
    </v-toolbar>
    {{game.currentRound}}
    <v-container>
      <v-row dense>
        <v-col
          v-for="(team, index) in teams"
          :key="team.name"
          cols= 6
        >
          <!--<v-card
            @click="game.currentRound=team"> -->
          <v-card>
            <v-img
              :src=team.img
              class="white--text align-top"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              
            >
              
              <v-card-title v-text="team.name" class="text-h3"> </v-card-title>
              
               <div class="text-h1"> {{team.score}}  </div>
               {{index}}
            </v-img>

            
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <div class="pt-5 pb-2 text-h4">
  Bid Table
  </div>
    <v-card 
      class="bid-table  mx-auto"
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
    
    <v-card-text>
      <div class="text-center text-h4 pb-4">
      Whose bid is it?</div>
      <v-btn-toggle>
        <v-btn>
            {{teams[0].name}}
        </v-btn>
        <v-btn>
          {{teams[1].name}}
        </v-btn>

        
      </v-btn-toggle>
      <div class="text-center text-h4 pa-4">
        {{game.currentRound.bid.shortCode[0]}}
        <v-icon large> {{game.currentRound.bid.icon}} </v-icon>
   
      </div>

        <v-btn
            color="success"
            @click="overlay = false"
          >
            Score Round
          </v-btn>
          
        <v-btn
            color="error"
            @click="overlay = false"
          >
            Cancel
          </v-btn>
          </v-card-text>
        </v-card>
      </v-expand-transition>
        <!-- </v-overlay> -->
    
    </v-card>
    
   
  </div>
</template>

<script>
export default {
  name: 'FiveHundred',
  data () {
    return {
      overlay: false,
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
                "bid":{}
              } , 
            "history": []}
    
      
    }             
   
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
      //what is the bid?
      // who is making it
      this.overlay= true

      return null
    },
    scoreRound: function() {
      //what was the result of the bid?
      //how many points did the other team make
      //update the teams' score
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