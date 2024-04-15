// Define the make_album Function
function make_album(artist_name:string, album_title:string, tracks?:number){
  let album: {artist:string, title:string, tracks?:number}={
    artist: artist_name,
    title: album_title,
  };

if(tracks !== undefined){
  album.tracks = tracks;
}
  
  return album;

}

// Calling three function with defferent values
let album1 = make_album("Umair","Album title 1");

let album2 = make_album("Amir","Album title 2");

let album3 = make_album("Ahmad", "Album title 3", 10);
//Print values of our function created my object  

console.log(album1);

console.log(album2);

console.log(album3);
