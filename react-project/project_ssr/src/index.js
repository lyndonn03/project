import 'babel-polyfill'
import express from 'express'
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'
import Renderer from './helpers/Renderer';
import createStore from './helpers/createStore';
import Routes from './client/Routes'


const app = express()


app.use('/api', proxy('http://localhost:8080'))
app.use(express.static('public'))

app.get('*', (req, res) => {

    const store = createStore(req)

    const promises = matchRoutes(Routes, req.path).map(({route}) => {
        return route.loadData ? route.loadData(store) : null
    }).map(promise => {
        if(promise) {
            return new Promise((resolve, reject) => promise.then(resolve).catch(resolve))
        }
    })

    Promise.all(promises).then(() => {
        const context = {}

        const content = Renderer(req, store, context)

        if(context.url) {
            console.log("If url")
            return res.redirect(301, context.url)
        }

        if(context.notFound) {
            res.status(404)
        }
        
        res.send(content)
    })

   
})


const port = process.env.port || 3000
app.listen(port, () => console.log(`Renderer is running at port ${port}`))