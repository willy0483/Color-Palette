const baseColors = [ 
    '#9e0142',
    '#d53e4f',
    '#f46d43',
    '#fdae61',
    '#fee08b',
    '#abdda4',
    '#66c2a5',
    '#3288bd',
    '#5e4fa2'
  ];

  createTiles()

// denne funktion skal skabe dom elementer til styling så du kan få det resultat, din underviser hat vist dig.
function createTiles(){

  const myApp = document.getElementById('app')

  const colorHeader = document.createElement('h1')
  colorHeader.innerText = 'Color Plaette'
  myApp.appendChild(colorHeader)

  const mySection = document.createElement('section')
  myApp.appendChild(mySection)


  console.log(myApp)
//du kan bruge denne array funktion til at loope gennem din array for at skabe dom elementer til hver farve.
 baseColors.forEach(color => {
      // color er farve koderne fra baseColors som tekst strenge
      const colorbox = document.createElement('div')
      colorbox.classList.add('colorbox')
      colorbox.style.backgroundColor = color;
                    // add box-shadow to colorbox
      // colorbox.style.boxShadow = `0px 0px 10px 3px ${color}`;
      colorbox.textContent = color
      mySection.appendChild(colorbox)   
      });
  }
