<template>
 
  <div class="hello"> 
    <h2>Bid Table</h2>
    <v-card
    class="mx-auto"
    max-width="500"
  >
   

    <v-toolbar
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Discover</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
    
    <v-card class="bid-table">
    <v-overlay
          :absolute="absolute"
          :value="overlay"
        > 
        <v-btn-toggle>
          <v-btn>
            {{team[0].name}}
          </v-btn>
          <v-btn>
            {{team[1].name}}
          </v-btn>
        </v-btn-toggle>
        <v-btn
            color="success"
            @click="overlay = false"
          >
            Score Round
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
              @click= "makeABid()"">
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
      overlay: false,
      absolute: true,
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