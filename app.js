const sablonoldalid = document.getElementById("sablonoldalid");
const krativid = document.getElementById("krativid");
const webshopid = document.getElementById("webshopid");
const teljesar = document.getElementById('teljesar');
const seomax = document.getElementById('seomax');
const google = document.getElementById('google');
const seotart = document.getElementById('seotart');
const ppc = document.getElementById('ppc');
const egyenifunk = document.getElementById('egyenifunk');
// Változók definiálása
const checkboxes = document.querySelectorAll('.checkbox');
const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('.progress-text');
const spantext = document.getElementById("spany");


// Egyszeri ár def
const seoMaxCheckbox = document.getElementById('seoMaxCheckbox');
const googleAdsCheckbox = document.getElementById('googleAdsCheckbox');
const seoContentCheckbox = document.getElementById('seoContentCheckbox');
const ppcContentCheckbox = document.getElementById('ppcContentCheckbox');
const customFunctionsCheckbox = document.getElementById('customFunctionsCheckbox');

//havi ár def
const seoMaxCheckboxhavi = document.getElementById('seoMaxCheckboxhavi');
const googleAdsCheckboxhavi= document.getElementById('googleAdsCheckboxhavi');
const seoContentCheckboxhavi= document.getElementById('seoContentCheckboxhavi');
const ppcContentCheckboxhavi= document.getElementById('ppcContentCheckboxhavi');
const customFunctionsCheckboxhavi = document.getElementById('customFunctionsCheckboxhavi');

// havi ár def hónap bealitása def
const seoMaxrange = document.getElementById('seoMaxrange');
const googleAdsMaxrange = document.getElementById('googleAdsMaxrange');
const seoContentMaxrange = document.getElementById('seoContentMaxrange');
const ppcContentMaxrange = document.getElementById('ppcContentMaxrange');
const customFunctionsMaxrange = document.getElementById('customFunctionsMaxrange');
// Hozzátarzoto html
const seoMaxrangehavi = document.getElementById('havikoltsegseoMax');
const googleAdsMaxrangehavi = document.getElementById('havikoltsegGoogle');
const seoContentMaxrangehavi = document.getElementById('havikoltsegseoContent');
const ppcContentMaxrangehavi = document.getElementById('havikoltsegppcContent');
const customFunctionsMaxrangehavi = document.getElementById('havikoltsegcustomFunctions');
let haviteljesErtekseoMax = 15000;
let haviteljesErtekgoogleAds = 30000;
let haviteljesErtekseoContent = 50000;
let haviteljesErtekppcContent = 10000;
let haviteljesErtekcustomFunctions = 0;
//csúszka változo kiszervezve
const checkboxes2 = document.querySelectorAll('.checkboxoldal');
const kreativCheckbox = document.querySelector('#creativeCheckbox');
const webshopCheckbox = document.querySelector('#webshopCheckbox');
const sablonoldalCheckbox = document.querySelector('#templateCheckbox');
const osszesHavikoltseg = document.getElementById('osszesHavikoltseg');


let teljesarErtek = 0;
let haviteljesErtek = 0;
const arnem = 'Ft';


// globális változók
let honapok = 0;
let haviKoltseg = 0;

let összeshaviárérték = 0;

const sablonoldal = {
    price:80000,
}

const  kreativ = {
    price:150000,
}
const webshop = {
    price:200000,
}


const seomaxar = {
  price: 30000,
  monthly:25000,
  info: 'Google Ads hirdetéskezelés (PPC BASIC)'
}

const googlear = {
  price: 20000,
  monthly: 15000,
  info: 'Google Ads hirdetéskezelés (PPC PRO)'
}

const seotartalomar = {
  price: 50000,
  monthly: 5000,
  info: 'SEO tartalom készítés'
}

const ppcar = {
  price: 50000,
  monthly: 50000,
  info: 'Weboldal karbantartás'
}

const sablegyenifunkar = {
  price: "",
  monthly: 5000,
  info: 'Egyéni funkciók fejlesztése'
}

seomax.innerHTML = `${seomaxar.price} ${arnem}`;
google.innerHTML = `${googlear.price} ${arnem}`;
seotart.innerHTML = `${seotartalomar.price} ${arnem}`;
ppc.innerHTML = `${ppcar.price} ${arnem}`;
egyenifunk.innerHTML = `${sablegyenifunkar.price} `;





// oldalak 
kreativCheckbox.addEventListener('change', () => {
  if (kreativCheckbox.checked) {
    webshopCheckbox.disabled = true;
    sablonoldalCheckbox.disabled = true;
    teljesarErtek += kreativ.price;
  } else {
    webshopCheckbox.disabled = false;
    sablonoldalCheckbox.disabled = false;
    teljesarErtek -= kreativ.price;
  }
  teljesar.innerHTML = `Teljes Ár: ${teljesarErtek} ${arnem}`;
});

webshopCheckbox.addEventListener('change', () => {
  if (webshopCheckbox.checked) {
    kreativCheckbox.disabled = true;
    sablonoldalCheckbox.disabled = true;
    teljesarErtek += webshop.price;
  } else { 
    kreativCheckbox.disabled = false;
    sablonoldalCheckbox.disabled = false;
    teljesarErtek -= webshop.price;
  } 
  teljesar.innerHTML = `Teljes Ár: ${teljesarErtek} ${arnem}`;
});

sablonoldalCheckbox.addEventListener('change', () => {
  if (sablonoldalCheckbox.checked) {
    kreativCheckbox.disabled = true;
    webshopCheckbox.disabled = true;
    teljesarErtek += sablonoldal.price;
  } else { 
    kreativCheckbox.disabled = false;
    webshopCheckbox.disabled = false;
    teljesarErtek -= sablonoldal.price;
  } 
  teljesar.innerHTML = `Teljes Ár: ${teljesarErtek} ${arnem} `;
});
// igényelhető szolgáltatások
//SEO MAX
//SEO MAX
seoMaxCheckbox.addEventListener('change', function() {
  if (this.checked) {
    teljesarErtek += seomaxar.price;
    haviteljesErtek += seomaxar.monthly;
     
    }  else {
    teljesarErtek -= seomaxar.price;
     haviteljesErtek -= seomaxar.monthly;
  }
  teljesar.innerHTML = `Teljes Ár: ${teljesarErtek} ${arnem}`;


});



seoMaxrange.addEventListener('input', function () {
   let honapok = parseInt(seoMaxrange.value);
   let haviKoltsegSeoMax = haviteljesErtekseoMax * honapok;
  seoMaxrangehavi.innerHTML = `${haviKoltsegSeoMax.toFixed(0)} ${arnem} (${honapok} hónap) ${seomaxar.info}`;

 
});
// Gooale Ads 
googleAdsCheckbox.addEventListener('change', function() {
  if (this.checked) {
    teljesarErtek += googlear.price;
    haviteljesErtek += googlear.monthly;
  } else {
    teljesarErtek -= googlear.price;
    haviteljesErtek -= googlear.monthly;
  }
  teljesar.innerHTML = `Teljes Ár: ${teljesarErtek} ${arnem} `;

 
});
googleAdsMaxrange.addEventListener('input', function() {
  const honapok = parseInt(googleAdsMaxrange.value);
  const haviKoltseg = haviteljesErtekgoogleAds * honapok;
  googleAdsMaxrangehavi.innerHTML = `${haviKoltseg.toFixed(0)} ${arnem} (${honapok} hónap) ${googlear.info}`;

  
});
// SEO CONTENT
seoContentCheckbox.addEventListener('change', function() {
  if (this.checked) {
    teljesarErtek += seotartalomar.price;
    haviteljesErtek += seotartalomar.monthly;
  } else {
    teljesarErtek -= seotartalomar.price;
     haviteljesErtek -= seotartalomar.monthly;
  }
  teljesar.innerHTML = `Teljes Ár: ${teljesarErtek} ${arnem}`;
   
});
seoContentMaxrange.addEventListener('input', function() {
  const honapok = parseInt(seoContentMaxrange.value);
  const haviKoltseg = haviteljesErtekseoContent * honapok;
  seoContentMaxrangehavi.innerHTML = `${haviKoltseg.toFixed(0)} ${arnem} (${honapok} hónap) ${seotartalomar.info}`;

  
});
// PPC CONTENT
ppcContentCheckbox.addEventListener('change', function() {
  if (this.checked) {
    teljesarErtek += ppcar.price;
    haviteljesErtek += ppcar.monthly;
  } else {
    teljesarErtek -= ppcar.price;
    haviteljesErtek -= ppcar.monthly;
  }
  teljesar.innerHTML = `Teljes Ár: ${teljesarErtek} ${arnem}`;

});
ppcContentMaxrange.addEventListener('input', function() {
  const honapok = parseInt(ppcContentMaxrange.value);
  const haviKoltseg = haviteljesErtekppcContent * honapok;
  ppcContentMaxrangehavi.innerHTML = `${haviKoltseg.toFixed(0)} ${arnem} (${honapok} hónap) ${ppcar.info}`;

});

// Custom Functions 
customFunctionsCheckbox.addEventListener('change', function() {
  if (this.checked) {
    teljesarErtek += sablegyenifunkar.price;
    haviteljesErtek += sablegyenifunkar.monthly;
  } else {
    teljesarErtek -= sablegyenifunkar.price;
    haviteljesErtek -= sablegyenifunkar.monthly;
  }
  teljesar.innerHTML = `Teljes Ár: ${teljesarErtek} ${arnem}`;
 
});


customFunctionsMaxrange.addEventListener('input', function() {
  const honapok = parseInt(customFunctionsMaxrange.value);
  const haviKoltseg = haviteljesErtekcustomFunctions * honapok;
  customFunctionsMaxrangehavi.innerHTML = `${haviKoltseg.toFixed(0)} ${arnem} (${honapok} hónap) ${sablegyenifunkar.info}`;


});
// ezmásmár

sablonoldalid.innerHTML =  `${sablonoldal.price} ${arnem}`
krativid.innerHTML =  `${kreativ.price}  ${arnem}`
webshopid.innerHTML =  `${webshop.price}  ${arnem}`

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const checkedCount = document.querySelectorAll('.checkbox:checked').length;

    if (checkedCount < 2) { 
      progressBar.classList.remove('active1', 'active2');
      progressBar.classList.add('active');
      progressBar.style.borderColor = 'red';
      spantext.innerText = "Látogatott";
    } else if (checkedCount >= 3 && checkedCount < 4) {
      progressBar.classList.remove('active', 'active2');
      progressBar.classList.add('active1');
      progressBar.style.borderColor = 'orange';
      spantext.innerText = "Elismert";
    } else if (checkedCount > 4) { 
      progressBar.classList.remove('active', 'active1');
      progressBar.classList.add('active2');
      progressBar.style.borderColor = 'lightgreen';
      spantext.innerText = "Felkapott";
    }
    
    progressText.textContent = `${Math.round((checkedCount / checkboxes.length) * 100)}%`;
  });
});