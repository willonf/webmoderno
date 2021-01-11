const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// Método GET
app.use(express.static('.')) //Carregar os arquivos da pasta atual
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/teste', (req, res) => res.send("Ok!"));

// Upload de arquivos
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, fCallback) {
        fCallback(null, "./uploads");
    },
    filename: function (req, file, fCallback) {
        fCallback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo'); // No método construtor do Multer é necessário passar um objeto do tipo Storage

app.post('/upload', (req,res) => {
    upload(req, res, err => {
        if (err){
            return res.end("Ocorreu um erro...");
        }
        res.end("Concluído!")
    })
})

// Formulários



// Abertura da porta
app.listen(8080, () => console.log("Executando..."));