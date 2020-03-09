var tabListePatients = ['Emile A','Louis A','Martin A','Emile B','Louis B','Martin B','Emile C','Louis C','Martin C'];

var recherchePatients = new Vue({
  el: '#recherchePatients',
  data: {
    message: ''
  }
})
// Mettre en place un système qui permet de verifier si le patient est dans la liste avant de cliquer sur le bouton recherche

function créationListePatient(){
/*Création de la liste*/
let listePatient = '<ul id="listePatient">';
for(let i=0; i < tabListePatients.length; i++){
    listePatient += '<li>'+tabListePatients[i]+'</li>';
}
listePatient += '</ul>';
document.getElementById("patients").innerHTML = listePatient;
}
/*Fonction pour faire la recheche dans la liste*/
function recherche(){
  inputRecherche = document.getElementById("inputRecherche");
  if(inputRecherche.value === ''){
    alert("Veuillez introduire quelque chose svp")
  }
  else{
    let foundPatient = tabListePatients.find(element => element == inputRecherche.value);
    if(foundPatient === undefined){
      listePatient = '<ul id="listePatient"><li>Patient n\'existe pas </li></ul>';
    }
    else{
      listePatient = '<ul id="listePatient"><li>'+foundPatient+'</li></ul>';
    }
    document.getElementById("patients").innerHTML = listePatient;
  }
}

function goResultats(){
  $(document).ready(function(){
    $('#listePatient').click(function(){
        $('#resultatsGraph').show();
        $('#divPatient').hide();
        $('#resultatTexte').show();
        $('#graphique2').hide();
        $('#graphique1').hide();
    });

    $('#boutonResultatTexte').click(function(){
      $('#resultatTexte').show();
      $('#graphique2').hide();
      $('#graphique1').hide();
  }); 

   $('#boutonResultatGraph1').click(function(){
      $('#resultatTexte').hide();
      $('#graphique2').hide();
      $('#graphique1').show();
  });

  $('#boutonResultatGraph2').click(function(){
    $('#resultatTexte').hide();
    $('#graphique2').show();
    $('#graphique1').hide();
  });

    $('#boutonRetour').click(function(){
      $('#resultatTexte').hide();
      $('#divPatient').show();
    });

  });

  //partie pour le graph en formage
  new Chart(document.getElementById("graphique1"), {
    type: 'pie',
    data: {
      labels: ["Activité 1", "Activité 2", "Activité 3", "Activité 4"],
      datasets: [{
        label: "Tentatives aux différents activités",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [10,15,5,2]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Tentatives aux différents activités'
      }
    }
});// fin du graph en fromage ici

  //partie pour le graph en bar

new Chart(document.getElementById("graphique2"), {
  type: 'bar',
  data: {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Points par activités'
    }
  }
}); // fin du graph bat ici

}
