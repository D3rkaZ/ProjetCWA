import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from '../../shared/service/auth-login.service';
import { UtilisateurService } from '../../shared/service/utilisateur.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[AuthLoginService, UtilisateurService]
})
export class MenuComponent implements OnInit {
  public uid:any=localStorage.getItem("uid");
  constructor(private auth:AuthLoginService , private uS:UtilisateurService) { 
  }
  
  ngOnInit(): void {
  }

}
