(function () {
    "use strict";
    angular
        .module('staticContent')
        .component('about', {
            'templateUrl': 'static/html/about.template.html',
            'controller': [function () {
                self = this;
                this.shortBio = ["Born in Vypin Islands (near Cochin, India) to Thankamani and Dharmajan, Baiju started his musical career at the age of 14. He began with the Carnatic violin but then slowly shifted to the guitar. His father used to play the Hawaiian guitar and his grandfather was a Carnatic musician. His first role as a performer began at the age of 5 as a guitar player in a traveling troop of musicians, giving him the opportunity to play with legendary Malayalam singer Yesudas.",
                                 "After relocating to his hometown in Vypin in the 90's, he started playing in a band called Instinct, followed by short stints with the bands Wrenz and Aatma. During one of the practice sessions of the band Aatma, he met John of Motherjane, who then invited him to audition for the lead guitarist position in the band.",
                                 "He has cited his influences as Jimi Hendrix, Jimmy Page, Jeff Beck, Steve Vai, Joe Satriani, Reb Beach and Brian May.",
                                 "Baiju is also a big fan of Illayaraja and loves the compositions of other Indian composers like Raveendran, Devarajan, Naushad and R.D. Burman. His father had a vast collection of ghazals by Mehdi Hassan, Anup Jalota, and Pankaj Udhas and he grew up listening to Malayalam, Tamil and Hindi film music.",
                                 "His favourite guitarists include Jimi Hendrix, dJimmy Page, Steve Vai, Mattias Ekhlund and Guthrie Govan."
                ];
                this.awards = ["Awarded – Prathibha Puraskaram (2014) - State of Kerala",
                               "Winner – Best Indian Lead Guitarist (2014) – Jack Daniel’s Rock Awards",
                               "Winner – Best Indian Lead Guitarist (2008) – Jack Daniel’s Rock Awards",
                               "Winner – Best Indian Lead Guitarist (2007) – Jack Daniel’s Rock Awards",
                               "Winner – Best Indian Rock Album (2008) – Rolling Stone",
                               "Winner – Rock Band of the Decade (2000-2010) – Rock Street Journal",
                               "Winner – Band of the Year (2009) – Rock Street Journal",
                               "Winner – Album of the Year (2009) – Rock Street Journal",
                               "Winner – Best Indian Rock Album (2003) – June Rock Out",
                               "Winner – Best International Rock Act (2009) – Asia’s Voice Independent Music Awards",
                ];
            }]
        });
}());
