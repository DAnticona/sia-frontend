import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { RouterModule } from '@angular/router';

// Componentes
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
	declarations: [
		HeaderComponent,
		SidebarComponent,
		BreadcrumbsComponent,
		FooterComponent,
		NopagefoundComponent,
	],
	imports: [RouterModule, CommonModule],
	exports: [HeaderComponent, SidebarComponent, BreadcrumbsComponent, FooterComponent, NopagefoundComponent],
})
export class SharedModule {}
