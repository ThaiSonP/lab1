const express = require('express');
const app = express()
const port = 3000
const GphApiClient = require('giphy-js-sdk-core')
const client = GphApiClient('fUEj6NbZBdv7R2poC3q9T3CbcOXqtEGo')

app.get('/gif',(req,res)=>{
  let searchFor = req.query
  let searchValue = Object.values(searchFor)

  client.search('gifs', {"q": searchValue})
  .then((response) => {
    let ary = []
    for(let i =0 ; i< response.data.length; i++){
      ary.push(response.data[i].url)
    }
    res.json(ary)
    })
  .catch((err) => {
  })

})

  app.get('/math/:subroute',(req,res)=>{

    // let routes = req.params.routes;
    let subroute = req.params.subroute;
    let inputs = req.query

    let inputValues = Object.values(inputs)

    let sumOut = inputValues.reduce((acc, el) => {
        return parseInt(acc) + parseInt(el);
    })
    let divOut = inputValues.reduce((acc, el) => {
        return parseInt(acc) / parseInt(el);
    })
    let subOut = inputValues.reduce((acc, el) => {
        return parseInt(acc) - parseInt(el);
    })
    let mulOut = inputValues.reduce((acc, el) => {
        return parseInt(acc) * parseInt(el);
    })
      let sumOutPut = {
        input: inputs,
        sumString: inputValues.join(" + "),
        sum: sumOut
      }
      let divOutPut = {
        input: inputs,
        divString: inputValues.join(" / "),
        quotient: divOut
      }
      let subOutPut = {
        input: inputs,
        subString: inputValues.join(" - "),
        remainder: subOut
      }
      let mulOutPut = {
        input: inputs,
        mulString: inputValues.join(" * "),
        product: mulOut
      }



      let error = {
        validRoutes: ["math","gif"],
        validMathPath: "/:routes/:function/?num1=2&num2=3...",
        validMathFunction: ["add","subtract","divide","multiply"]
      }

      if(subroute=="add"){
        res.json(sumOutPut)
      }else if(subroute=="subtract"){
        res.json(subOutPut)
      }else if(subroute=="divide"){
        res.json(divOutPut)
      }else if (subroute=="multiply") {
        res.json(mulOutPut)
      }else{
        res.json(error)
      }
  })
  //
  app.listen(port,()=>{
    console.log('app is working')
  //
  })
