//hook//
   export const getGifs = async (category) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Hic2vwswvkxnSL3IQ9p3lbGwjChyC4Yv`;
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifData = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        });
       return gifData;
        
    }
