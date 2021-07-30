
let videos_div=document.getElementById("videos")

async function defaultVideos(){
    videos_div.innerHTML=null
    
    let res=await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyCqqEL64PvDYgjKhg7PkiDl-4MM2W4sLL0&maxResults=21`);
    let data=await res.json()
    console.log(data);
   
    let {items}=data;
    items = items.filter((el) => {return el.id != undefined})
    items.forEach(({id} ) => {
        let div=document.createElement("div")
         div.setAttribute("class","each-video")
        div.innerHTML=`<iframe width="260" height="180" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        videos_div.appendChild(div)

    })
    

}
defaultVideos()



async function findVideos(){
    videos_div.innerHTML=null
    let q=document.getElementById("query").value;
    let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${q}&key=AIzaSyCqqEL64PvDYgjKhg7PkiDl-4MM2W4sLL0&maxResults=21`);
    let data=await res.json()
    // console.log(data);
   
    let {items}=data;
    items = items.filter((el) => {return el.id.videoId != undefined})
    items.forEach(({id:{ videoId } } ) => {
        let div=document.createElement("div")
         div.setAttribute("class","each-video")
        div.innerHTML=`<iframe width="260" height="180" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        videos_div.appendChild(div)

    })
    

}




