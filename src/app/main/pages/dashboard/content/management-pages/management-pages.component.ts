import { FormControl } from '@angular/forms';
import { EtudiantServiceService } from './../../../../../service/etudiant-service.service';
import { Etudiant } from './../../../../utils/interface/etudiant';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-pages',
  templateUrl: './management-pages.component.html',
  styleUrl: './management-pages.component.scss',
})
export class ManagementPagesComponent implements OnInit {
  constructor(private etudiantService: EtudiantServiceService) {}

  etudiantList: Etudiant[] | undefined;

  currentStudent: Etudiant = {
    id: -1,
    nom: '',
    prenom: '',
    numero: '',
    classe: 'L1',
    mention: 'AES',
    dateNaiss: '',
  };

  annuler() {
    this.currentStudent = {
      id: -1,
      nom: '',
      prenom: '',
      numero: '',
      classe: '',
      mention: '',
      dateNaiss: '',
    };
  }

  ngOnInit(): void {
    this.getEtudiantInLocal();
  }
  getEtudiantInLocal(): void {
    this.etudiantList = this.etudiantService.getEtudiant();
  }

  handleClick() {
    if (this.currentStudent) {
      this.etudiantService.addNewEtudiant(this.currentStudent);
      this.getEtudiantInLocal();
    }
  }

  deleteEtudiantIntable(id: number): void {
    this.etudiantService.deleteEtudiant(id);
    this.getEtudiantInLocal();
  }
  getEtudiantObject(etudiant: Etudiant) {
    this.currentStudent = {
      ...etudiant,
    };
  }
  confirmEdit() {
    this.etudiantService.editEtudiant(this.currentStudent);
    this.getEtudiantInLocal();
  }
}
