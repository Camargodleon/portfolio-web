import { Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { ContatoComponent } from "./contato/contato.component";
import { LandingComponent } from "./landing/landing.component";
import { ServicoComponent } from "./servico/servico.component";
import { TecnologiaComponent } from "./tecnologia/tecnologia.component";


export const routes:Routes = [
    {path: 'home', component: LandingComponent},
    {path: '', component: LandingComponent},
    {path: 'tecnologia', component: TecnologiaComponent},
    {path: 'servicos', component: ServicoComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'admin', component: AdminComponent}
]