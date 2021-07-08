import './Content.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../views/example/Home'
import Input from '../views/example/login/Input'
import Cadastro from '../views/example/login/Cadastro'
import ListView from '../views/example/ListView'
import ListaSimples from '../views/example/ListaSimples'
import ListaAninhada from '../views/example/ListaAninhada'
import ListaPastas from '../views/example/ListaPastas'
import VendaPS5 from '../views/example/vendas/VendaPs5'
import VendaNotebook from '../views/example/vendas/VendaNotebook'
import Carrinho from '../views/example/vendas/Carrinho'
import FinalizarCompra from '../views/example/vendas/FinalizarCompra'
import Console from '../views/example/Console'
import Notebooks from '../views/example/Notebooks'
import Celulares from '../views/example/Celulares'
import VendaPS4 from '../views/example/vendas/VendaPs4'
import VendaPS4Jogos from '../views/example/vendas/VendaPs4Jogos'
import VendaPS4Spider from '../views/example/vendas/VendaPs4Spider'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route path="/login">
                <Input />
            </Route>
            <Route path="/cadastro">
                <Cadastro />
            </Route>
            <Route path="/lista">
                <ListView />
            </Route>
            <Route path="/lista-simples">
                <ListaSimples />
            </Route>
            <Route path="/lista-aninhada">
                <ListaAninhada />
            </Route>
            <Route path="/lista-pastas">
                <ListaPastas />
            </Route>
            <Route path="/venda-ps">
                <VendaPS5 />
            </Route>
            <Route path="/venda-notebook">
                <VendaNotebook />
            </Route>
            <Route path="/carrinho">
                <Carrinho />
            </Route>
            <Route path="/finalizar-compra">
                <FinalizarCompra />
            </Route>
            <Route path="/consoles">
                <Console />
            </Route>
            <Route path="/computadores">
                <Notebooks />
            </Route>
            <Route path="/celulares">
                <Celulares />
            </Route>
            <Route path="/venda-ps4">
                <VendaPS4 />
            </Route>
            <Route path="/venda-ps4-jogos">
                <VendaPS4Jogos />
            </Route>
            <Route path="/venda-ps4-spider">
                <VendaPS4Spider />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </main>
)

export default Content