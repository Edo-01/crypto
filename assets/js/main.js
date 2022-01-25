//JS
"use strict";

 
// gestione lingue
let elemLanguage = document.querySelector('.container-1-header-col-2');
let iconLanguage = document.querySelector('#icon-language');
let labelLang = document.querySelector('.label-lang');

elemLanguage.addEventListener('mouseenter', function() {
       iconLanguage.src = "assets/img/tendina-lingua-hover.png";
})
elemLanguage.addEventListener('mouseleave', function() {
    iconLanguage.src = "assets/img/tendina-lingua.png";
})

let containerLanguage = document.createElement('div');
containerLanguage.classList.add('container-language');
let listLang = document.createElement('ul');
containerLanguage.append(listLang);
let listatoENG = document.createElement('li');
listatoENG.classList.add('lista-lang');
listLang.append(listatoENG);
listatoENG.textContent = 'English';
let listatoITA = document.createElement('li');
listatoITA.classList.add('lista-lang');
listLang.append(listatoITA);
listatoITA.textContent = 'Italiano';
let listatoES = document.createElement('li');
listatoES.classList.add('lista-lang');
listLang.append(listatoES);
listatoES.textContent = 'Español';

iconLanguage.addEventListener('mouseenter', function() {
    document.body.prepend(containerLanguage);
})

listatoITA.addEventListener('click', function() {
  labelLang.textContent = 'ITA';
})
listatoENG.addEventListener('click', function() {
  labelLang.textContent = 'ENG';
})
listatoES.addEventListener('click', function() {
  labelLang.textContent = 'ES';
})
// fine gestione lingue 


// bottoni animazione
let bottone = document.querySelectorAll('.bottone-pink');
for (let i = 0; i < bottone.length; i++) {
bottone[i].addEventListener('mouseenter', function() {
    bottone[i].classList.remove('bottone-leave');
    bottone[i].classList.add('bottone-enter');
});
bottone[i].addEventListener('mouseleave', function() {
    bottone[i].classList.remove('bottone-enter');
    bottone[i].classList.add('bottone-leave');
});
}

let bottoneBlue = document.querySelectorAll('.bottone-blue');
for (let i = 0; i < bottoneBlue.length; i++) {
bottoneBlue[i].addEventListener('mouseenter', function() {
    bottoneBlue[i].classList.remove('bottone-leave-blue');
    bottoneBlue[i].classList.add('bottone-enter-blue');
});
bottoneBlue[i].addEventListener('mouseleave', function() {
    bottoneBlue[i].classList.remove('bottone-enter-blue');
    bottoneBlue[i].classList.add('bottone-leave-blue');
});
}



let contBtn = document.querySelectorAll('.cont-btn');
for(let i = 0; i < contBtn.length; i++) {
contBtn[i].addEventListener('mouseenter', function() {
    contBtn[i].classList.add('btn-sugiu');
})
contBtn[i].addEventListener('mouseleave', function() {
    contBtn[i].classList.remove('btn-sugiu');
})
}

// fine bottone animazioni





// sezione copia chiave e mostra pop up
let ElemkeyCrypto = document.querySelector('.key-crypto');
let keyCrypto = ElemkeyCrypto.textContent;
let keyCryptoMob = ElemkeyCrypto.textContent; //MOB
let buttonCopyKey = document.querySelector('.copy-key');
let buttonCopyKeyMob = document.querySelector('.copy-key-mob'); //MOB
let popupOne = document.createElement('div');
popupOne.classList.add('back-popup-one');  
let avviso = document.createElement('h3');
avviso.textContent = 'The key was successfully saved!';
let imgPopup = document.createElement('img');
imgPopup.src = 'assets/img/balena.png';
imgPopup.classList.add = '';

buttonCopyKey.addEventListener('click', function() {
    navigator.clipboard.writeText(keyCrypto)
        .then(() => {
        console.log("Text copied to clipboard...");
        popupOne.append(avviso);
        popupOne.prepend(imgPopup);
        document.body.prepend(popupOne);
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
});

document.body.addEventListener('click', function() {
    popupOne.remove();
    containerLanguage.remove();
})
// fine sezione copia chiave e mostra pop up

buttonCopyKeyMob.addEventListener('click', function() {
    navigator.clipboard.writeText(keyCryptoMob)
        .then(() => {
        console.log("Text copied to clipboard...");
        popupOne.append(avviso);
        popupOne.prepend(imgPopup);
        document.body.prepend(popupOne);
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
});

document.body.addEventListener('click', function() {
    popupOne.remove();
    containerLanguage.remove();
})

// fine sezione copia chiave e mostra pop up






let logo = document.querySelector('#logo');
console.log(logo.src.length);

logo.addEventListener('mouseenter', function() {
    if(logo.src.length < 65) {
        logo.src = 'assets/img/logo-colore.png';
    } else {
        logo.src = 'assets/img/logo.png';
    }
})
logo.addEventListener('mouseleave', function() {
    if(logo.src.length > 65) {
        logo.src = 'assets/img/logo-colore.png';
    } else {
        logo.src = 'assets/img/logo.png';
    }
})
logo.addEventListener('click', function(){
    event.preventDefault();
    document.body.scrollIntoView({behavior: 'smooth'});
});



// aproi e chiudi menu

let navMob = document.querySelector('.nav-mob');  
let chiudiMenu = document.querySelector('#chiudi')
let hamburger = document.querySelector('#hamburg');

hamburger.addEventListener('click', function() {
    navMob.style.visibility = 'visible';
})
chiudiMenu.addEventListener('click', function() {
    navMob.style.visibility = 'hidden';
})


// aproi e chiudi menu

// auto scritta titolo

var quoteArray = ["A decentralized platform for the future DeFi generations"];
var textPosition = 0;
var speed = 70;

function typewriter() {
  document.querySelector("#quote").innerHTML = quoteArray[0].substring(0, textPosition) + '<span id="lampeggia">_</span>';

  if(textPosition++ != quoteArray[0].length)
    setTimeout(typewriter, speed);
}
window.addEventListener('load', typewriter);

// auto scritta titolo


// SWITCH
let pallina = document.querySelector('.pallina');

function muoviDx() {
    pallina.className = 'pallina-dx';
}

 function muoviSx() {
    pallina.className = 'pallina';
}
// SWITCH

let dx = document.querySelector('.dx');
let sx = document.querySelector('.sx');
let contPrimo = document.querySelector('#cont-primo');
let contSecondo = document.querySelector('#cont-secondo');


dx.addEventListener('click', function() {
   contPrimo.style.display = 'none';
   contSecondo.removeAttribute('style');
});

sx.addEventListener('click', function() {
    contSecondo.style.display = 'none';
    contPrimo.removeAttribute('style');
 });


 let pippo = document.querySelector('#start');
 let progetto =  document.querySelector('#progetto');
 let buy = document.querySelector('#buy');
 let buyRotella = document.querySelector('#buy-rotella');
 let tokenBott = document.querySelector('#token-bott');
 let tokenBolle = document.querySelector('#token-bolle');
 
 

 pippo.addEventListener('click', function() {
     event.preventDefault();
   progetto.scrollIntoView({behavior: 'smooth'});
 });

 buy.addEventListener('click', function() {
    event.preventDefault();
    buyRotella.scrollIntoView({behavior: 'smooth'});
});

tokenBott.addEventListener('click', function() {
    event.preventDefault();
    tokenBolle.scrollIntoView({behavior: 'smooth'});
});

//barre che si caricano
let misUno = document.querySelector('#mis-1');
let misDue = document.querySelector('#mis-2');
let misTre = document.querySelector('#mis-3');
let misQuattro = document.querySelector('#mis-4');
let misCinque = document.querySelector('#mis-5');
let misSei = document.querySelector('#mis-6');


window.addEventListener('scroll', function() {
    if(window.pageYOffset > 3150) {
      misUno.classList.add('misuratore-pieno-1');
      misDue.classList.add('misuratore-pieno-2');
      misTre.classList.add('misuratore-pieno-3');
      misQuattro.classList.add('misuratore-pieno-4');
      misCinque.classList.add('misuratore-pieno-5');
      misSei.classList.add('misuratore-pieno-6');
    } else if (window.pageYOffset < 3149) {
      misUno.classList.remove('misuratore-pieno-1');
      misDue.classList.remove('misuratore-pieno-2');
      misTre.classList.remove('misuratore-pieno-3');
      misQuattro.classList.remove('misuratore-pieno-4');
      misCinque.classList.remove('misuratore-pieno-5');
      misSei.classList.remove('misuratore-pieno-6');
    }
  });