const cata = document.querySelector('.cata');

const apparition = (data) => {
    // html = `<div>
    //             <img src="${data.image}" alt="bougies" height="200px">
    //             <h2>${data.nom}</h2>
    //             <p>${data.prix}</p>
    //         </div>
    //         `

    html = `
    <div class="max-w-xs rounded overflow-hidden shadow-lg">
    <img class="w-full" src="${data.image}" alt="bougies" >
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">${data.nom}</div>
      <p class="text-gray-700 text-base">
      ${data.prix}
      </p>
    </div>
  </div>
    `
    
    cata.innerHTML += html;
};

db.collection('catalogue').get().then(snap => {
    let el = snap.docs;
    el.forEach(id => {
        // console.log(id.data())
        apparition(id.data())
    })
}).catch(err => console.log(err))