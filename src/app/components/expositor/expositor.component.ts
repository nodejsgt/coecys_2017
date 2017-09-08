import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ExpositorService } from '../../services/expositor.service';
import { Expositor } from '../../classes/expositor';
import { Exposicion } from '../../classes/exposicion';
import { BlockUI, NgBlockUI } from 'ng-block-ui'

@Component({
  selector: 'app-expositor',
  templateUrl: './expositor.component.html',
  styleUrls: ['./expositor.component.css']
})
export class ExpositorComponent implements OnInit {
  expositorSelected:Expositor;
  haveExpo:boolean = false;
  showModal:boolean = false;
  @BlockUI() blockUI: NgBlockUI;
  @ViewChild('descriptionExpositor')descriptionExpositor: ElementRef;
  @ViewChild('closeBtn')closeBtn: ElementRef;
  constructor(
    private service:ExpositorService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  sanitizeName(name:string):string{
    return name.split(' ').join('-');
  }

  openModal(){
    this.showModal = true;
    console.log(this.showModal);
  }

  closeModal() {
    this.showModal = false;
  }

  gotoUpdate(expositor:Expositor) {
    this.router.navigate(['/expositors/update',this.sanitizeName(this.expositorSelected.name)]);
  }

  getExpositorById(){
    let idExpositor = localStorage.getItem('expositorId');

    this.service.getExpositorById(idExpositor)
                .then(expositor=>{
                  this.expositorSelected = expositor;
                  this.descriptionExpositor.nativeElement.innerHTML = this.expositorSelected.description;
                  this.haveExpo = this.expositorSelected.exposiciones.length > 0 ? true:false;
                  this.blockUI.stop();
                })
                .catch(err => {
                  console.log(err);
                })
  }

  onAddExposicion(exposicion:any) {
    let idExpositor = localStorage.getItem('expositorId');

    this.expositorSelected.exposiciones.push(exposicion);

    this.service.addExposicion(idExpositor, this.expositorSelected)
                .then(message => {
                  this.closeBtn.nativeElement.click();
                })
                .catch(error=>{
                  console.log(error);
                  this.closeBtn.nativeElement.click();
                })

  }

  ngOnInit() {
    this.blockUI.start("Cargando Expositor");
    this.getExpositorById();
  }

}
