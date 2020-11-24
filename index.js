const axios = require ('axios')
const cheerio = require('cheerio')

const fetchData = async (url) => {
    const result = await axios.get(url)
    return result.data
}

const main = async () => {
    const content = await fetchData ('https://liturgia.cancaonova.com/pb/')
    const $ = cheerio.load(content)

    const title = $('.content-header > h1').text()
    const leituras = $('.container-leituras>leituras').text()
    
    console.log(leituras)
}

main ()