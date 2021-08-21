<template>
 
  <div class="hello"> 
    <h2>Bid Table</h2>
    <div class="bid-table">
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
              <v-btn>
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
    </div>
    
    <v-icon> {{bidSheet.Six.spades.icon}} </v-icon>
    <v-icon>mdi-cards-spade</v-icon>
    
    End bid table
    
    <div class="score">
    {{team[0].name}}
    {{team[1].name}}
    </div>
    
   
    <hr />
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      team: [{name:"Us", bid: "", score: 0},{name: "Them", bid:"", score: 0} ],
      bidder: 0,
      bidSheet: {"Six": {
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
      return null
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