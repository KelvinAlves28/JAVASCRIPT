//Um ano é bissexto se ele for divisível por 400 ou se ele for divisível por 4 e não por 100.

function bissexto(ano){
    if (ano % 400 == 0){
        console.log(`O ano ${ano} é bissexto!`)
    } else if (ano % 4 == 0 && ano % 100 != 0){
        console.log(`O ano ${ano} é bissexto!`)
    } else{
        console.log(`O ano ${ano} não é bissexto!`)
    }
}

bissexto(2000)
bissexto(2001)
bissexto(2002)
bissexto(2003)
bissexto(2004)
bissexto(2005)
bissexto(2006)
bissexto(2007)
bissexto(2008)
bissexto(2009)
bissexto(2010)
bissexto(2011)
bissexto(2012)