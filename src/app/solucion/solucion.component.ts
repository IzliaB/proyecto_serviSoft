import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
//import { emit } from 'process';



import { SolucionService } from '../services/solucion.service'



@Component({
  selector: 'app-solucion',
  templateUrl: './solucion.component.html',
  styleUrls: ['./solucion.component.css']
})
export class SolucionComponent implements OnInit {

  searchInput: any = '';
  //object : { [autolist: string]: any } = {}
  // autoList: any[] = [];
  autoList: any[] = [];


  

  constructor(
    private videoService: SolucionService,
    private router: Router ,
    ) { }


  ngOnInit(): void {
  }
  // getAutocomplete(input: any) {
  //   this.videoService.getAutocomplete(input).subscribe(res => {
  //     this.autoList = res[1];
  //     var list = document.getElementById('autoList');
  //     if (this.autoList.length == 0) {
  //       return;
  //     }
  //     list.innerHTML = "";
  //     for (var i = 0; i < this.autoList.length; i++) {
  //       var option = document.createElement('option');
  //       option.value = this.autoList[i];
  //       list.appendChild(option);
  //     }
  //   })
  // }

  
  getValue(input: any) {
    this.videoService.searchVideo(input);
    this.searchInput = '';
    this.router.navigate(['/solucion/search']);
  }


  
}
