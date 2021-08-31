var port = process.env.PORT || 3333;
const express = require('express'),
    app = express(),
    http = require('http'),
    hostname = '127.0.0.1',
    cors = require('cors'),
    es6Renderer = require('express-es6-template-engine')
const helmet = require("helmet");
const { clientOrigins, serverPort } = require("./config/env.dev");
const apiRouter = express.Router();

const corsOptions = {
    origin: clientOrigins,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    };
app.engine('html', es6Renderer)
app.set('views', '/views')
app.set('view engine', 'html')

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const server = http.createServer(app);

server.listen(serverPort, () => {
    console.log(`Listening at ${serverPort}`)
})

app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).send(err.message)
})

app.use(cors(corsOptions))
app.use ("/api", apiRouter)

const rootController = require('./routes/index')
const leaderController = require('./routes/leaders')
const teammembersController = require('./routes/teammembers')
const teammemberController = require('./routes/teammember')
const notesController = require('./routes/notes')
const allnotesController = require('./routes/allnotes')
const templateController = require('./routes/templates')

app.use('/', rootController)
apiRouter.use('/leader', leaderController)
apiRouter.use('/teammembers', teammembersController)
apiRouter.use('/notes', notesController)
apiRouter.use('/allnotes', allnotesController)
apiRouter.use('/teammember',teammemberController)
apiRouter.use('/templates', templateController)
module.exports = app;