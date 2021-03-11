const axios = require("axios")
const c = require("cheerio")

//make a genre function
async function getGenre(genre='Action',page=1) {
  
  const list = []
  await axios.get(`https://www.coolmoviez.shop/genre/${genre}/${page}.html`)
  .then(async function({data}) {
    const $ = c.load(data)

    $(".fileName").each(async function(i,el) {
      const code = el.attribs.href.split('/')[4]
      const id = el.attribs.href.split('/')[5].replace(/_/g, "-").split('.')[0]
      const title = el.attribs.title
      const img = el.children[0].children[0].children[0].attribs.src
        list.push({
          title,
          img,
          id,
          code
        })  
    })

    if (list.length == 0) {
      throw "Nothing found"
    } else {
      return list; 
    }
  })
  .catch(function(error) {
    return error;
  })
}

//make a details function
async function getDetails(id="The-lego-batman-movie-(2017)-english-movie", code="575") {

  const uid = id.replace(/-/g, "_").trim()
  const {data} = await axios.get(`https://www.coolmoviez.shop/movie/${code}/${uid}.html`)
  
  const $ = c.load(data)
  try {  
    const title = $(".description").children(".M1").children("font").text().trim()
    const des = $(".M1").get(2).children[2].children[0].children[0].data.trim()
    const date = $(".M1").get(3).children[2].children[0].data.trim()
    const dur = $(".M2").get(3).children[2].children[0].children[0].data.trim()
    const size = $(".fileName span").get(1).children[0].data.trim()
    const list = {
      title,
      des,
      size,
      dur,
      date
    }
    
    if (list.length == 0) {
    throw "Nothing found"
    } else {
      return list; 
    } 
  } catch (error) {
    return "Nothing found"
  }
}
//module.exports.getDetails = getDetails

//make a download function
async function getDownload(id="The-lego-batman-movie-(2017)-english-movie", code="575") {
  
  const uid = id.replace(/-/g, "_").trim()
 
  const {data} = await axios.get(`https://www.coolmoviez.shop/movie/${code}/${uid}.html`)
  
  try {
    const $ = c.load(data)
    const link = $(".fileName").get(0).attribs.href
    await axios.get(link).then(async function({data}) {
      const $ = c.load(data)
      const dwn_link = $(".dwnLink").get(0).attribs.href
      
      await axios.get(dwn_link).then(async function ({data}) {
        const $ = c.load(data)
        const download = $(".dwnLink").get(0).attribs.href.trim()
        return {download};
      })
    })
  } catch (error) {
    return "No download link available";
  }
}
module.exports = { getGenre, getDetails, getDownload }