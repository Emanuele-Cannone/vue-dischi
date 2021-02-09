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
        arrayAppoggio: [],// uso un arrray di appoggio per inserire i dati della chiamata 
        // CHIEDI SE E' GIUSTO FARE COSI PER LAVORARE PIU VEOCEMENTE ED EVITARE MOLTEPLICI CHIAMATE
    },

    mounted(){// al caricamento della pagina

        for (let i = 0; i < 10; i++) {// ciclo per 10 volte
            
            axios // la chiamata per prendermi i dati 
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then(
                    ((response) => {
    
                        this.arrayAppoggio.map(...element,
                            {
                                poster: response.data.poster
                            }
                        )
                    })
                )
        }
        console.log(this.arrayAppoggio);
    }
});