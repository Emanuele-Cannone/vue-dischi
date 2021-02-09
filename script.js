// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Stampiamo tutto a schermo, in questo momento non è importante la parte grafica.
    
// Bonus:
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo i corrispondenti cd.
//     Chiamata: https://flynn.boolean.careers/exercises/api/array/music


// MODELLO DI RISULTATO

// "success": true,
//     "response": [
//         {
//             "poster": "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg",
//             "title": "New Jersey",
//             "author": "Bon Jovi",
//             "genre": "Rock",
//             "year": "1988"
//         },


var app = new Vue({
    
    el: '#esercizio',
    data:{
        tuttiGeneri: [],// mi serve per definire tutti i generi una sola volta in modo da avere una lista
        arrayAppoggio: [],// uso un arrray di appoggio per inserire i dati della chiamata 
        // CHIEDI SE E' GIUSTO FARE COSI PER LAVORARE PIU VEOCEMENTE ED EVITARE MOLTEPLICI CHIAMATE
    },

    mounted(){// al caricamento della pagina

            axios // uso la chiamata per prendermi l'array
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then(
                        ((result) => {
    
                        this.arrayAppoggio = result.data.response
                        //console.log(this.arrayAppoggio);// lo uso per vedere cosa effettivamente ho preso

                        for (let i = 0; i < this.arrayAppoggio.length; i++) {
                            
                            if (!this.tuttiGeneri.includes(this.arrayAppoggio[i].genre)) {
                                
                                this.tuttiGeneri.push(this.arrayAppoggio[i].genre)
                            }
                            
                        }       
                        })    
                    )

                    
    },
    methods:{


        altro(){
            console.log('arrayAppoggio',this.arrayAppoggio);
            console.log('array generi',this.tuttiGeneri);

        }
        
    }

});