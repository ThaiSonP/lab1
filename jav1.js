  const express = require('express');
  const app = express()
  const port = 3000



  app.get('/:routes/:functioner',(req,res)=>{
    // let routes = req.params.routes;
    let functioner = req.params.functioner;
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

      if(functioner=="add"){
        res.send(sumOutPut)
      }else if(functioner=="subtract"){
        res.send(subOutPut)
      }else if(functioner=="divide"){
        res.send(divOutPut)
      }else if (functioner=="multiply") {
        res.send(mulOutPut)
      }
  })

  app.listen(port,()=>{
    console.log('app is working')
  })
