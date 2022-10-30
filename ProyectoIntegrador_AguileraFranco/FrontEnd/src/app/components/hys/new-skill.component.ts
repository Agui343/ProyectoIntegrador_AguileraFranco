import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/srvice/skill.service';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private skill: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skill.save(skill).subscribe(
      data =>{
        alert("Skill creado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo al añadir la skill");
        this.router.navigate(['']);
      }
    )
  }

}
