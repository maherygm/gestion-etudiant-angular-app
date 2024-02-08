import { Etudiant } from './../main/utils/interface/etudiant';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EtudiantServiceService {
  constructor() {}

  getEtudiant(): Etudiant[] {
    let etudiantList: Etudiant[] = [];

    let etudiant = JSON.parse(localStorage.getItem('etudiant')!);
    if (etudiant) {
      console.log(etudiant);
      etudiantList = [...etudiant];
    }
    return etudiantList;
  }

  addNewEtudiant(etu: Etudiant) {
    let etudiantList: Etudiant[] = this.getEtudiant();

    if (etudiantList.length > 0) {
      const id = etudiantList[etudiantList.length - 1].id;
      etu.id = id + 1;
    } else {
      etu.id = 1;
    }
    etudiantList.push(etu);
    localStorage.setItem('etudiant', JSON.stringify(etudiantList));
  }

  deleteEtudiant(id: number): void {
    let etudiantList: Etudiant[] = this.getEtudiant();

    const etudianListFilter: Etudiant[] = etudiantList.filter(
      (etudiant) => etudiant.id != id
    );

    localStorage.setItem('etudiant', JSON.stringify(etudianListFilter));
  }

  editEtudiant(etudiantModiFier: Etudiant): void {
    let etudiantList: Etudiant[] = this.getEtudiant();

    etudiantList = etudiantList.map((etudiant) => {
      if (etudiant.id === etudiantModiFier.id) {
        return etudiantModiFier;
      }
      return etudiant;
    });
    console.log(etudiantList);
    localStorage.setItem('etudiant', JSON.stringify(etudiantList));
  }
}
