import "reflect-metadata"

// importando app
import {app} from "./api/app"

// importando data source
import { dataSource } from "./db/dataSource"

dataSource.initialize().then(async () =>{
    console.log("banco conectado")
    app.listen(process.env.PORTA, () =>{
        console.log(`aplicação iniciada na porta ${process.env.PORTA}`)
    })
})

