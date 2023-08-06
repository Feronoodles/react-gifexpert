export const getGifs = async(category) =>{
    //no olvides el protocolo https tarado imbecil idiota
   const url = `https://api.giphy.com/v1/gifs/search?api_key=OWHtLMJo2edLWttPznkwSZQdgU6tL1MU&q=${category}&limit=10`;
   const resp = await fetch( url );
 
   const {data} = await resp.json();

   const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
   }));
 
   return gifs;
}