# **COOLMOVIEZ API**

This is an unofficial [Coolmoviez](https://www.coolmoviez.shop/) api written in javascript (using nodejs) and cheerio (a web scraper) to extract information.

### **installation:**
`npm install coolmoviez-api`

---
## **INSTRUCTIONS**

### **getGenre()**
Used to get the all the movies in a specified genre. Takes the genre and page number as the arguments (parameters). The default values are **genre="Action"** and **page="1"** which are both strings.
>Returns an array of objects

```js
const movies =  require("coolmoviez-api")

const genre = movies.getGenre(genre,page)

console.log(genre)

//const genre = movies.getGenre("Action",1)
```

### **getDetails()**
Used to get details of a particular movie. It takes the movie id and code as the parameters. Both the id and code can be obtained from the returned object of **getGenre()**
> Returns an object containing details about the movie

```js
const movies =  require("coolmoviez-api")

const details = movies.getDetails(id,code)

console.log(details)

//const details = movies.getDetails("The-lego-batman-movie-(2017)-english-movie",575)
```

### **getDownload()**

Used to get the download link. Takes the id and code as the parameter.
> Returns an object with a download link

```js
const movies =  require("coolmoviez-api")

const download = movies.getDownload(id,code)

console.log(download)

//const download = movies.getDownload("The-lego-batman-movie-(2017)-english-movie",575)
```

> Both the **getDownload()** and **getDetails()** have the same parameters that is **id** and **code** which are both strings

---

## **NOTE**
>Whilst working of this api, I found that the download link **might** not work. Currently working on it.

## **TO DO**
- [x] getGenre()
- [x] getDetails()
- [x] getDownload()
- [ ] search()
- [ ] getLatestMovies()
- [ ] showTotalGenrePages()
- [ ] Make app using coolmoviez-app (This api)
---

### IMPORTANT
> In case of any problems using this api, please do address it on **this api github repo** by creating an issue and will gladely respond.

**HAPPY PROGRAMMING, ALL THE BEST**
