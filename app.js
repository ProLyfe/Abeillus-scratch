const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const nom = form.firstname.value;
    const prenom = form.lastname.value;
    const mail = form.mail.value;
    const sujet = form.subject.value;

    const client = {
        nom: nom,
        prenom: prenom,
        mail: mail,
        sujet: sujet
    };

    db.collection('formulaire').add(client).then(() => {
        console.log('Envoi réussi');
    }).catch(err => console.log(err))
    
    // console.log(client)
})

// console.log(db.collection('formulaire'))


