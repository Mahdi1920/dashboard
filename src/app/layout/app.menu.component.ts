import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/users.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];
    isVisualisation!:boolean;
    isTracabilite!:boolean;
    isTracabiliteMap!:boolean;
    isAnalyse!:boolean;
    isImport!:boolean;



    constructor(public layoutService: LayoutService , private authService:AuthService , private userService:UserService) {}

    ngOnInit() {
        // const id =this.authService.getId;
        // console.log('id',id)
        // this.userService.getUserById(3).subscribe(
        //     (r)=>{
        //         this.isVisualisation=r.visualisation;
        //         console.log('r.visualisation',r)
        //         console.log('this.isVisualisation',this.isVisualisation)
        //     }
        // )
        this.fetchUserData();
        const isAdmin = this.authService.isAdmin();
        const isAnalyse=this.authService.isAnalyse();
        const isTracabilite=this.authService.isTracabilite();
        const isTracabiliteMap=this.authService.isTracabiliteMap();
        const isVisualisation=this.authService.isVisualisation();
        const isImportCSV=this.authService.isimportCSV();
        // const isAnalyse=this.authService.isAnalyse();
        console.log('hfgfghfgtt',isVisualisation)
        this.model = [
            {
                label: 'Accueil',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/dashboard'],
                    },
                ],
            },
            {
                label: 'Modules',
                items: [
                    {
                        label: 'Formation',
                        icon: 'pi pi-fw pi-user-edit',
                        routerLink: ['/contenu/formation'],
                    },
                    {
                        label: 'reservation',
                        icon: 'pi pi-fw pi-user-edit',
                        routerLink: ['/contenu/reservation'],
                    },
                    {
                        label: 'Formation User',
                        icon: 'pi pi-fw pi-user-edit',
                        routerLink: ['/contenu/FormationUser'],
                    },
                    {
                        label: 'Calendrier',
                        icon: 'pi pi-fw pi-user-edit',
                        routerLink: ['/contenu/calendrier'],
                    }


                ],
            },
            {
                label: 'Paramètres',
                items: isAdmin?[
                    {
                        label: 'Employés',
                        icon: 'pi pi-fw pi-user-edit',
                        routerLink: ['/contenu/utilisateurs'],
                    }


                ]:[],
            },
        ];
    }
    private fetchUserData() {
        const userId = this.authService.getId;
        console.log('userId', userId);

        this.userService.getUserById(userId).subscribe((user) => {
          this.isVisualisation = user.visualisation;
          console.log('user', user);
          console.log('this.isVisualisation', this.isVisualisation);
        });
      }

}
