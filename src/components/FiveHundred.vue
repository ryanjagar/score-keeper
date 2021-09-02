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

    <v-container>
      <v-row dense>
        <v-col
          v-for="team in teams"
          :key="team.name"
          cols= 6
        >
          <v-card>
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
  <h2>Bid Table</h2>
    <v-card class="bid-table pa-5">
    <v-overlay
          :absolute="absolute"
          :value="overlay"
        > 
        <v-btn-toggle>
          <v-btn>
            {{teams[0].name}}
          </v-btn>
          <v-btn>
            {{teams[1].name}}
          </v-btn>
        </v-btn-toggle>
        <br />
        {{game.currentBid}}
        <br />

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
        </v-overlay>
  
   <v-row>
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
    <v-row>
      <v-col>
        <v-row>
          <v-col>
            Six
          </v-col>
          <v-col
            v-for="bid in bidSheet.Six"
            :key="bid.index">
              <v-btn>
                {{bid.points}}
              </v-btn>
          </v-col> 
        </v-row>
        
        <v-row>
          <v-col>
            Seven
          </v-col>
          <v-col
            v-for="bid in bidSheet.Seven"
            :key="bid.index">
              <v-btn
              @click= "makeABid(bid)">
                {{bid.points}}
              </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Eight
          </v-col>
            <v-col>
            <v-btn>240 </v-btn>
          </v-col>
          <v-col>
            <v-btn>260</v-btn>
          </v-col>
          <v-col>
             <v-btn> 280 </v-btn>
            </v-col>
            <v-col>
              <v-btn> 300 </v-btn>
            </v-col>
            <v-col>
              <v-btn> 320 </v-btn>
            </v-col>
          </v-row>
          <v-row>
           <v-col>
            Nine
            </v-col>
            <v-col>
            <v-btn>340 </v-btn>
          </v-col>
          <v-col>
            <v-btn>360</v-btn>
          </v-col>
          <v-col>
             <v-btn> 380 </v-btn>
            </v-col>
            <v-col>
              <v-btn> 400 </v-btn>
            </v-col>
            <v-col>
              <v-btn> 420 </v-btn>
            </v-col>
          </v-row>
          <v-row>
          <v-col>
            Ten
            </v-col>
            <v-col>
            <v-btn>440 </v-btn>
          </v-col>
          <v-col>
            <v-btn>460</v-btn>
          </v-col>
          <v-col>
             <v-btn> 480 </v-btn>
            </v-col>
            <v-col>
              <v-btn> 500 </v-btn>
            </v-col>
            <v-col>
              <v-btn> 520 </v-btn>
            </v-col>
          </v-row>
       
      </v-col>
     
    </v-row>
    </v-card>
    
    <v-icon> {{bidSheet.Six.spades.icon}} </v-icon>
    <v-icon>mdi-cards-spade</v-icon>
    
    End bid table
    
    <div class="score">
    {{teams[0].name}}
    {{teams[1].name}}
    </div>
    
   
    <hr />
   
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
          "spades": {"points": 140, "shortCode": "6S", "icon": "mdi-cards-spade" },
          "clubs": {"points": 160, "shortCode": "6C", "icon": "mdi-cards-club" },
          "diamonds": {"points": 180, "shortCode": "6D", "icon": "mdi-cards-diamond" },
          "hearts": {"points": 200, "shortCode": "6H", "icon": "mdi-cards-heart" },
          "notrump":{"points": 220, "shortCode": "6NT", "icon": "mdi-cards" }
        }
      },
      game: {"currentBid":{}, "history": []}
    
      
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
      this.game.currentBid = bid
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
</style>