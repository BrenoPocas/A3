import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from './pages/home';
import Termos from './pages/termos';
import Politicas from './pages/politica-privacidade';
import Acoes from './pages/acoes';
import Blog from './pages/blog';
import FaleConosco from './pages/fale-conosco';
import Faq from './pages/faq';
import Forum from './pages/forum';
import ONGS from './pages/ongs';
import PontosColeta from './pages/pontos-coleta';

import Certificados from './pages/configuracoes/certificados';
import EncerrarConta from './pages/configuracoes/encerrar-conta';
import Favoritos from './pages/configuracoes/favoritos';
import Newsletter from './pages/configuracoes/newsletter';
import Perfil from './pages/configuracoes/perfil';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/termos",
    element: <Termos/>
  },
  {
    path: "/politica-privacidade",
    element: <Politicas/>
  },
  {
    path: "/acoes",
    element: <Acoes/>
  },
  {
    path: "/blog",
    element: <Blog/>
  },
  {
    path: "/fale-conosco",
    element: <FaleConosco/>
  },
  {
    path: "/faq",
    element: <Faq/>
  },
  {
    path: "/forum",
    element: <Forum/>
  },
  {
    path: "/ongs",
    element: <ONGS/>
  },
  {
    path: "/pontos-coleta",
    element: <PontosColeta/>
  },
  {
    path: "/configuracoes/certificados",
    element: <Certificados/>
  },
  {
    path: "/configuracoes/encerrar-conta",
    element: <EncerrarConta/>
  },
  {
    path: "/configuracoes/favoritos",
    element: <Favoritos/>
  },
  {
    path: "/configuracoes/newsletter",
    element: <Newsletter/>
  },
  {
    path: "/configuracoes/perfil",
    element: <Perfil/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();