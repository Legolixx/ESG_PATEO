const stream = require("stream");
const express = require("express");
const session = require('express-session');
const multer = require("multer");
const path = require("path");
const { google } = require("googleapis");
const { DateTime } = require('luxon');
const upload = multer();
require('dotenv').config();





const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define the username and password
const usernameRecife = process.env.USERNAME_RECIFE;
const passwordRecife = process.env.PASSWORD_RECIFE;

const usernameRetiro = process.env.USERNAME_RETIRO;
const passwordRetiro = process.env.PASSWORD_RETIRO;

const usernameOlinda = process.env.USERNAME_OLINDA;
const passwordOlinda = process.env.PASSWORD_OLINDA;

const usernamePiedade = process.env.USERNAME_PIEDADE;
const passwordPiedade = process.env.PASSWORD_PIEDADE;

const usernameJp = process.env.USERNAME_JOAOPESSOA;
const passwordJp = process.env.PASSWORD_JOAOPESSOA;

const usernameFeira = process.env.USERNAME_FEIRA;
const passwordFeira = process.env.PASSWORD_FEIRA;

const usernameManaus = process.env.USERNAME_MANAUS;
const passwordManaus = process.env.PASSWORD_MANAUS;

const usernameBequimao = process.env.USERNAME_BEQUIMAO;
const passwordBequimao = process.env.PASSWORD_BEQUIMAO;

const usernameHolandeses = process.env.USERNAME_HOLANDESES;
const passwordHolandeses = process.env.PASSWORD_HOLANDESES;

// config  express-session
app.use(session({
  secret: 'segredo',
  resave: false,
  saveUninitialized: true
}));

// Authentication middleware
function authenticate(req, res, next) {
  if (req.session.authenticated) {
    return next();
  }

  // User is not authenticated, redirect to the login page
  res.redirect('/');
}


app.get("/", (req, res) => {

  res.render("login", { message: '' })

});

app.post('/', (req, res) => {
  const enteredUsername = req.body.username;
  const enteredPassword = req.body.password;

  if (enteredUsername === usernameRecife && enteredPassword === passwordRecife) {
    req.session.authenticated = true;
    req.session.unidade = "Recife";
    req.session.contaminado = "1YuVjPqf7mbdrutq-ZtY7tXxVu0ixCBx4";
    req.session.oleo = "11XWfZlTWuLNPf1a5kK2NJ5fnXfplOMb5";
    req.session.filtro = "1h8HE5nQQxOZftWjyClTWyN1TGpDmfa4K";
    req.session.bateria = "1J_9LnViioSZCsPROIoiPy4FbI8aGKnyU";
    res.render('menu', { filial: "Recife" });
  } else if (enteredUsername === usernameRetiro && enteredPassword === passwordRetiro) {
    req.session.authenticated = true;
    req.session.unidade = "Retiro";
    req.session.contaminado = "12MO1eYZC9uhq4wao14Ta7IlDIZ5pxwN6";
    req.session.oleo = "1c1dsGpqXgVSOkH9iAl--6xVJzOfl9QX9";
    req.session.filtro = "1cfMtHdafsjeLJ5jNKmZ91QP_romWG5e7";
    req.session.bateria = "1kM2i7KQ71kNt1zQiqMpnkYW7jJ6Bs12T";
    res.render('menu', { filial: "Retiro" });
  } else if (enteredUsername === usernameOlinda && enteredPassword === passwordOlinda) {
    req.session.authenticated = true;
    req.session.unidade = "Olinda";
    req.session.contaminado = "1nbxJ9kFVTE_HnsaL7KUhSsDYEo9KUBmS";
    req.session.oleo = "1eXOBAC-Se9eVjoMOY3eVkWpVo7lJ6xaQ";
    req.session.filtro = "1RgGZXPSTH_l8EMIWDoAmaVwE_1f6-oMK";
    req.session.bateria = "1ukVO0q0SL06rmCd8In2pReKRDC_Vk_h5";
    res.render('menu', { filial: "Olinda" });
  } else if (enteredUsername === usernamePiedade && enteredPassword === passwordPiedade) {
    req.session.authenticated = true;
    req.session.unidade = "Piedade";
    req.session.contaminado = "1eMgPFnAtlqIPhj-5nkQd62xY1vFkBmMQ";
    req.session.oleo = "1fmxzHxFQ1NAM4jWCROvPiT_OrRNrQzuZ";
    req.session.filtro = "1RIFuGi2E878noYaxGOLmC5_A41bN_YCR";
    req.session.bateria = "1dzLtHOywpb3-FBj7O-s4Wl-7yi4XVct1";
    res.render('menu', { filial: "Piedade" });
  } else if (enteredUsername === usernameJp && enteredPassword === passwordJp) {
    req.session.authenticated = true;
    req.session.unidade = "João Pessoa";
    req.session.contaminado = "1XhrDRZFSFpdtoYOgYv4fR8dvrBoxrnCp";
    req.session.oleo = "1BPnd8CIxGj5gDBv31D9UemtvRwKiceBX";
    req.session.filtro = "1dyxKyYKPaasOrALhFUGtH7fnhUWxRtIQ";
    req.session.bateria = "19LvKhegW-oojzRRSqnS_7AkRQuZ8DnV6";
    res.render('menu', { filial: "João Pessoa" });
  } else if (enteredUsername === usernameFeira && enteredPassword === passwordFeira) {
    req.session.authenticated = true;
    req.session.unidade = "Feira";
    req.session.contaminado = "1RofakN98UpVD6DoDp3n8Jkz2XZX6lVj9";
    req.session.oleo = "1EpB1h6qBjH_22ihFbjkhTFoYxCW24DyC";
    req.session.filtro = "1CCCm1VeZE55XptMjGdOwA0vyTdc1p7Rp";
    req.session.bateria = "16NragrckUmoqevrgfDems3iq5YxiVehl";
    res.render('menu', { filial: "Feira" });
  } else if (enteredUsername === usernameManaus && enteredPassword === passwordManaus) {
    req.session.authenticated = true;
    req.session.unidade = "Manaus";
    req.session.contaminado = "114VTzJsBjvPbszQmbKEdqGlB-uVB5hbj";
    req.session.oleo = "15_JftaRgHC0xgmWutSiRE71JOZmn_j5y";
    req.session.filtro = "1xHIvHtohLoUxmCow0t-yeO_fKgRIUawg";
    req.session.bateria = "1Q1e-xSqlMxyVqpUG9maUeL-bkoZKFeHe";
    res.render('menu', { filial: "Manaus" });
  } else if (enteredUsername === usernameBequimao && enteredPassword === passwordBequimao) {
    req.session.authenticated = true;
    req.session.unidade = "Bequimão";
    req.session.contaminado = "1laAxK0IYt6je9XG36QlPAZsiXyjqWva7";
    req.session.oleo = "1rcCT3KgYgHhZ0jhSywTzdDd70AUTapsV";
    req.session.filtro = "1sdBpFjF_AHOYsOp2ewQ57Uy_GW169fM6";
    req.session.bateria = "1fHJou3AF0rWlhIli4YVtFPLr7VNo0kmg";
    res.render('menu', { filial: "Bequimão" });
  } else if (enteredUsername === usernameHolandeses && enteredPassword === passwordHolandeses) {
    req.session.authenticated = true;
    req.session.unidade = "Holandeses";
    req.session.contaminado = "1zPP6JGuxNkh2FIcxpMtgzEX5OHuJjGLn";
    req.session.oleo = "1lWUgqFFA_aPs1tInW-m-7Dj9JSkvJRgX";
    req.session.filtro = "1NL-tH2X0fs3hwtQ6d3eZnNAut0hTC6Ts";
    req.session.bateria = "1VPxnhjIc5J-FuOzMry88_ip0aOMRofaq";
    res.render('menu', { filial: "Holandeses" });
  } else {
    // Render the login page with an alert message
    res.render('login', { message: 'Usuário ou senha incorretos.' });
  }


});



app.get("/menu", authenticate, (req, res) => {

  const unidade = req.session.unidade;
  res.render('menu', { filial: unidade })

});

app.get("/tutorial", authenticate, async (req, res) => {

  const unidade = req.session.unidade;
  res.render('tutorial', { filial: unidade })

});


app.get("/form", authenticate, (req, res) => {
  const unidade = req.session.unidade;
  res.render("form", { filial: unidade })

});

var name = '';
var month = '';
var pasteId = '';
var year = '';

app.post("/upload", authenticate, upload.any(), async (req, res) => {

  const { body, files } = req;
  name = body.Category;
  const selectedMonth = req.body.Month;
  console.log(selectedMonth);

  const formattedDate = `${selectedMonth}-01`; // Add day component
  const parsedDate = DateTime.fromISO(formattedDate).setLocale('pt-BR');
  const monthName = parsedDate.monthLong;
  const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);

  console.log(capitalizedMonth);

  month = capitalizedMonth;




  year = new Date().getFullYear();

  if (req.session.unidade === "Recife" && name === "contaminado") {
    pasteId = req.session.contaminado
  } else if (req.session.unidade === "Recife" && name === "Óleo") {
    pasteId = req.session.oleo
  } else if (req.session.unidade === "Recife" && name === "filtrantes") {
    pasteId = req.session.filtro
  } else if (req.session.unidade === "Recife" && name === "Bateria") {
    pasteId = req.session.bateria


  } else if (req.session.unidade === "Retiro" && name === "contaminado") {
    pasteId = req.session.contaminado
  } else if (req.session.unidade === "Retiro" && name === "Óleo") {
    pasteId = req.session.oleo
  } else if (req.session.unidade === "Retiro" && name === "filtrantes") {
    pasteId = req.session.filtro
  } else if (req.session.unidade === "Retiro" && name === "Bateria") {
    pasteId = req.session.bateria


  } else if (req.session.unidade === "Holandeses" && name === "contaminado") {
    pasteId = req.session.contaminado
  } else if (req.session.unidade === "Holandeses" && name === "Óleo") {
    pasteId = req.session.oleo
  } else if (req.session.unidade === "Holandeses" && name === "filtrantes") {
    pasteId = req.session.filtro
  } else if (req.session.unidade === "Holandeses" && name === "Bateria") {
    pasteId = req.session.bateria


  } else if (req.session.unidade === "João Pessoa" && name === "contaminado") {
    pasteId = req.session.contaminado
  } else if (req.session.unidade === "João Pessoa" && name === "Óleo") {
    pasteId = req.session.oleo
  } else if (req.session.unidade === "João Pessoa" && name === "filtrantes") {
    pasteId = req.session.filtro
  } else if (req.session.unidade === "João Pessoa" && name === "Bateria") {
    pasteId = req.session.bateria


  } else if (req.session.unidade === "Manaus" && name === "contaminado") {
    pasteId = req.session.contaminado
  } else if (req.session.unidade === "Manaus" && name === "Óleo") {
    pasteId = req.session.oleo
  } else if (req.session.unidade === "Manaus" && name === "filtrantes") {
    pasteId = req.session.filtro
  } else if (req.session.unidade === "Manaus" && name === "Bateria") {
    pasteId = req.session.bateria


  } else if (req.session.unidade === "Olinda" && name === "contaminado") {
    pasteId = req.session.contaminado
  } else if (req.session.unidade === "Olinda" && name === "Óleo") {
    pasteId = req.session.oleo
  } else if (req.session.unidade === "Olinda" && name === "filtrantes") {
    pasteId = req.session.filtro
  } else if (req.session.unidade === "Olinda" && name === "Bateria") {
    pasteId = req.session.bateria


  } else if (req.session.unidade === "Feira" && name === "contaminado") {
    pasteId = req.session.contaminado
  } else if (req.session.unidade === "Feira" && name === "Óleo") {
    pasteId = req.session.oleo
  } else if (req.session.unidade === "Feira" && name === "filtrantes") {
    pasteId = req.session.filtro
  } else if (req.session.unidade === "Feira" && name === "Bateria") {
    pasteId = req.session.bateria


  } else if (req.session.unidade === "Piedade" && name === "contaminado") {
    pasteId = req.session.contaminado
  } else if (req.session.unidade === "Piedade" && name === "Óleo") {
    pasteId = req.session.oleo
  } else if (req.session.unidade === "Piedade" && name === "filtrantes") {
    pasteId = req.session.filtro
  } else if (req.session.unidade === "Piedade" && name === "Bateria") {
    pasteId = req.session.bateria


  } else if (req.session.unidade === "Bequimão" && name === "contaminado") {
    pasteId = req.session.contaminado
  } else if (req.session.unidade === "Bequimão" && name === "Óleo") {
    pasteId = req.session.oleo
  } else if (req.session.unidade === "Bequimão" && name === "filtrantes") {
    pasteId = req.session.filtro
  } else if (req.session.unidade === "Bequimão" && name === "Bateria") {
    pasteId = req.session.bateria
  } else return


  for (let f = 0; f < files.length; f += 1) {
    await uploadFile(files[f]);
  }

  res.status(200).send("Form Submitted");

});



const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: ['https://www.googleapis.com/auth/drive'],
});

const uploadFile = async (fileObject) => {
  const bufferStream = new stream.PassThrough();
  bufferStream.end(fileObject.buffer);
  const { data } = await google.drive({ version: "v3", auth }).files.create({
    media: {
      mimeType: fileObject.mimeType,
      body: bufferStream,
    },
    requestBody: {
      name: `${month}_${year}`,
      parents: [pasteId],
    },
    fields: "id,name",
  });
  console.log(`Uploaded file ${data.name}`);
};



app.get("/search", authenticate, async (req, res) => {

  const unidade = req.session.unidade;

  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: ['https://www.googleapis.com/auth/drive'],
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Drive API
  const drive = google.drive({ version: 'v3', auth });


  const contaminadosPromise = drive.files.list({
    q: `'${req.session.contaminado}' in parents`,
    pageSize: 100,
    fields: 'files(id, name)',
  });

  const oleoPromise = drive.files.list({
    q: `'${req.session.oleo}' in parents`,
    pageSize: 100,
    fields: 'files(id, name)',
  });

  const filtroPromise = drive.files.list({
    q: `'${req.session.filtro}' in parents`,
    pageSize: 100,
    fields: 'files(id, name)',
  });

  const bateriaPromise = drive.files.list({
    q: `'${req.session.bateria}' in parents`,
    pageSize: 100,
    fields: 'files(id, name)',
  });

  const arrayContaminado = (await contaminadosPromise).data.files;
  const arrayOleo = (await oleoPromise).data.files;
  const arrayFiltro = (await filtroPromise).data.files;
  const arrayBateria = (await bateriaPromise).data.files;


  res.render("dash", { unidade, arrayContaminado, arrayOleo, arrayFiltro, arrayBateria })
});


app.get('/contato', authenticate, (req, res) => {
  const unidade = req.session.unidade;
  res.render('contato', { filial: unidade })

});


app.get('/toleo', (req, res) => {
  const unidade = req.session.unidade;
  res.render('./tutorial/oleo', { filial: unidade })

});

app.get('/tfiltro', authenticate, (req, res) => {
  const unidade = req.session.unidade;
  res.render('./tutorial/filtro', { filial: unidade })

});

app.get('/tbateria', authenticate, (req, res) => {
  const unidade = req.session.unidade;
  res.render('./tutorial/bateria', { filial: unidade })

});

app.get('/tcontaminados', authenticate, (req, res) => {
  const unidade = req.session.unidade;
  res.render('./tutorial/contaminado', { filial: unidade })

});


app.get('/valida', authenticate, async (req, res) => {

  const contaminado = req.session.contaminado;
  const oleo = req.session.oleo;
  const filtro = req.session.filtro;
  const bateria = req.session.bateria;
  const unidade = req.session.unidade;

  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: ['https://www.googleapis.com/auth/drive'],
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Drive API
  const drive = google.drive({ version: 'v3', auth });



  // Retrieve a list of files in Google Drive
  const folderOleo = await drive.files.list({
    q: `'${oleo}' in parents`,
    pageSize: 10,
    fields: 'files(id, name)',
  });

  // Extract file ID and name from the response
  const filesOleo = folderOleo.data.files.map((file) => {
    return {
      id: file.id,
      name: file.name
    };
  });

  // Retrieve a list of files in Google Drive
  const folderFiltro = await drive.files.list({
    q: `'${filtro}' in parents`,
    pageSize: 10,
    fields: 'files(id, name)',
  });

  // Extract file ID and name from the response
  const filesFiltro = folderFiltro.data.files.map((file) => {
    return {
      id: file.id,
      name: file.name
    };
  });

  // Retrieve a list of files in Google Drive
  const folderBateria = await drive.files.list({
    q: `'${bateria}' in parents`,
    pageSize: 10,
    fields: 'files(id, name)',
  });

  // Extract file ID and name from the response
  const filesBateria = folderBateria.data.files.map((file) => {
    return {
      id: file.id,
      name: file.name
    };
  });

  // Retrieve a list of files in Google Drive
  const folderContaminado = await drive.files.list({
    q: `'${contaminado}' in parents`,
    pageSize: 10,
    fields: 'files(id, name)',
  });

  // Extract file ID and name from the response
  const filesContaminado = folderContaminado.data.files.map((file) => {
    return {
      id: file.id,
      name: file.name
    };
  });






  res.render('check', { filial: unidade, oleo: filesOleo, filtro: filesFiltro, bateria: filesBateria, contaminado: filesContaminado })

});





const PORT = 3000;

app.listen(PORT, (req, res) => console.log(`http://localhost:${PORT}`))
