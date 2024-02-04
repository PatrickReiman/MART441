count = 1;

function favWeb(){
    console.log("My favorite websites are youtube.com, instagram.com, and twitter.com.");
}

function favGame(){
    console.log("My favorite games are Minecraft, Terraria, and Civ5.")
}

function favArtist(){
    console.log("My favorite artists (artist being anyone who creates something) are Kyle Hill, Kevin Penkin, and Jean Pierre Ugarte. Kyle Hill is a science educator on YouTube who covers a variety of topics from silly comic/cartoon theories to real-world [nuclear] disasters and the safeness of nuclear power. Kevin Penkin is a music artist who primarily makes soundtracks, I particularly like how he incorporates such unique instruments and vocalizations into his music rather than the standard we see now-a-days. Jean-Pierre Ugarte is an artist who specializes in painting large concrete architecture that almost seemlessly incorporates into nature. It borders on brutalist art, however, the image seems surreal as the paintings obviously depict a non-manmade structure.")
}

function changeBackground(){
    if (count == 1){
        document.body.style.backgroundSize = "0%";
        count -= 1;
    } else {
        document.body.style.backgroundSize = "100%";
        count += 1;
    }
}