import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Modulos
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DialogAgenciasComponent } from './components/dialogs/dialog-agencias/dialog-agencias.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DialogAgenciasComponent],
  imports: [
    BrowserModule,
    FormsModule,
    PagesModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
