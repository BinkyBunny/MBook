<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p class="hosp-name lato primary-color">{{ user }}</p>
                    <br />
                    <p class="dept-name lato primary-color">{{ email }}</p>
                    <br />
                    <div class="bp">
                     <router-link to="/home"><MadButton v-bind:msg="Book"></MadButton></router-link>
                    </div>
                    <br />
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <ul class="card-holder">
                        <li class="card-current" v-for="book in bookings" v-if="book.active" v-on:click="selectBooking(book.hospname, book.doctor, book.token, book.dept, book.date, book.id)"> <div class="text-current">{{ book.hospname }} </div> <div class="text-under-current">{{ book.doctor }}</div> <div class="text-under-under-current"><a class="cancel">Cancel</a></div></li>
                        <li class="card-history" v-for="book in bookings" v-if="!book.active"> <div class="text-history">{{ book.hospname }} </div> <div class="text-under-history">{{ book.doctor }}</div></li>
                    </ul>
                </div>
            </div>
        </div>

        
    </div>
</template>

<script>
  import MadButton from '@/components/MadButton'
  export default {
    name: 'History',
    components: {
      MadButton
    },
    data () {
      return {
        Book: 'Home',
        Cancel: 'Cancel',
        bookingSelected: []
      }
    },
    methods: {
      selectBooking: function (ho, doc, to, de, da, id) {
        this.bookingSelected[0] = {
          hos: ho,
          doc: doc,
          tok: to,
          dep: de,
          dat: da,
          idn: id
        }
        // console.log(this.bookingSelected[0])
        this.$store.commit('setSelectedBooking', this.bookingSelected[0])
        this.$router.push({path: '/view'})
      }
    },
    computed: {
      user: function () {
        return this.$store.getters.getName
      },
      email: function () {
        return this.$store.getters.getEmail
      },
      bookings: function () {
        return this.$store.getters.getBookingList
      }
    }
  }
</script>

<style scoped>
.bp{
    display: inline-block;
    position: absolute;
    right: 40px;
    top: 45px;
}

.cancel{
    display: inline-block;
    margin-top: -5px;
    color: white;
    transition: color 0.2s ease;
    text-decoration: none;
    font-size: 0.6em;
}

a:hover{
    color: #ffcc00;
}

.hosp-name{
    display: inline-block;
    position: relative;
    font-size: 2.1em;
    top: 25px;
    left: 25px;
    font-weight: 700;
}

.dept-name{
    display: inline-block;
    position: relative;
    top: 12px;
    left: 25px;
    font-size: 1.2em;
    font-weight: 300;
}

.primary-color{
    color: #3b2577;
}

.lato {
    font-family: "Lato", sans-serif;

}

.card-holder {
	background: white;
	display: flex;
	flex-wrap: wrap;
    margin-top: 12%;
}

.card-history {
	flex-grow: 1;
	width: 30%;
    max-width: 30%;
	height: 100px;
    background-color: #3b2577;
    margin: 10px;
    color: white;
    transition: all 0.5s ease;
    list-style-type: none;
    font-family: "Lato", sans-serif;
    font-weight: 300;
    text-align: center;
    cursor: not-allowed;
    font-size: 1.5em;
}

.card-current {
	flex-grow: 1;
	width: 30%;
    max-width: 30%;
	height: 100px;
    background-color: #0ba00b;
    margin: 10px;
    color: white;
    transition: all 0.5s ease;
    list-style-type: none;
    font-family: "Lato", sans-serif;
    font-weight: 300;
    text-align: center;
    cursor: pointer;
    font-size: 1.5em;
}

.card-current:hover, 
.card-current:active {
    background-color: #0d840d;
}
.text-history{
    display: block;
    margin-top: 8.5%;
}

.text-under-history{
    font-size: 0.5em;
}

.text-current{
    display: block;
    margin-top: 6.5%;
}

.text-under-current{
    font-size: 0.5em;
}

.text-under-under-current{
    font-size: 1em;
    margin-top: -1%;
}
</style>