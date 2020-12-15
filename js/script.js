var app = new Vue({
el:"#container",
data:{
  contacts: [
	{
		name: 'Michele',
		avatar: "img/avatar-2.png",
    text: 'Tutto fatto!',
    lastDate: '10/01/2020 16:15:22',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				text: 'Hai portato a spasso il cane?',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				text: 'Ricordati di dargli da mangiare',
				status: 'sent'
			},
			{
				date: '10/01/2020 16:15:22',
				text: 'Tutto fatto!',
				status: 'received'
			}
		],
	},
	{
		name: 'Fabio',
		avatar: "img/avatar3.png",
    text: 'Mi piacerebbe ma devo andare...',
    lastDate: '20/03/2020 16:35:00',
		visible: true,
		messages: [
			{
				date: '20/03/2020 16:30:00',
				text: 'Ciao come stai?',
				status: 'sent'
			},
			{
				date: '20/03/2020 16:30:55',
				text: 'Bene grazie! Stasera ci vediamo?',
				status: 'received'
			},
			{
				date: '20/03/2020 16:35:00',
				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
				status: 'sent'
			}
		],
	},
	{
		name: 'Samuele',
		avatar: 'img/avatar5.png',
    text: 'Ah scusa!',
    lastDate: '28/03/2020 16:15:22',
		visible: true,
		messages: [
			{
				date: '28/03/2020 10:10:40',
				text: 'La Marianna va in campagna',
				status: 'received'
			},
			{
				date: '28/03/2020 10:20:10',
				text: 'Sicuro di non aver sbagliato chat?',
				status: 'sent'
			},
			{
				date: '28/03/2020 16:15:22',
				text: 'Ah scusa!',
				status: 'received'
			}
		],
	},
	{
		name: 'Luisa',
		avatar: 'img/avatar4.png',
    text: 'Si, ma preferirei andare al cinema',
    lastDate: '10/01/2020 15:50:00',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				text: 'Lo sai che ha aperto una nuova pizzeria?',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				text: 'Si, ma preferirei andare al cinema',
				status: 'received'
			}
		],
	},
],
  newMessage : "",
  activeUser: 0,
  search:"",
  show:false
},


  methods:{

    //funzione che seleziona il contatto attivo
    SetActiveUser: function(newIndex){
      this.activeUser = newIndex
    },

    // funzione invio messaggio
    SendMessage: function () {
      this.contacts[this.activeUser].messages.push({
      text: this.newMessage,
      date: moment().format("MM/DD/YYYY HH:mm:ss"),
      status:'sent',
      })
      this.newMessage = " "
      this.SendAnswer()
    },

    // funzione per cancellare messaggi dalla chat e dalla lista contatti
    remove: function (index,i) {
      var thisContact = this.contacts[this.activeUser]
      thisContact.messages.splice(i,1);
        if (thisContact.messages.length >= 1) {
          thisContact
        } else {
        thisContact.text = ' ';
        thisContact.lastDate = ' ';
        }
    },
    // fare una funzione delete for each




    // funzione invio risposta
    SendAnswer: function () {
      var thisContact = this.contacts[this.activeUser]
      setTimeout(function () {
        thisContact.messages.push({
        text:"ok",
        status:'received',
        date: moment().format("MM/DD/YYYY HH:mm:ss")
      });
      }, 1500);
    },
  },


  computed: {
    // funzione search
    filteredContact:function(){
      return this.contacts.filter((el,name)=> {
        return el.name.toLowerCase().match(this.search)
      });
    }
  },
}
)
