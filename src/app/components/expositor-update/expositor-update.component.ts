import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ExpositorService } from '../../services/expositor.service';
import { Expositor } from '../../classes/expositor';
import { Exposicion } from '../../classes/exposicion';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-expositor-update',
  templateUrl: './expositor-update.component.html',
  styleUrls: ['./expositor-update.component.css']
})
export class ExpositorUpdateComponent implements OnInit {
  @Input() expositorSelected:Expositor;
  @ViewChild('closeBtn')closeBtn: ElementRef;
  @BlockUI() blockUI: NgBlockUI;
  options:Object = {
    toolbarButtons: ['bold','italic', 'underline','insertLink','fontFamily', 'fontSize']
  }
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private service:ExpositorService,
    private location:Location
  ) { }

  cancel(){
    this.location.back();
  }

  sanitizeName(name:string):string{
    return name.split(' ').join('-');
  }

  gotoDetail(expositor:Expositor) {
    this.router.navigate(['/expositors', this.sanitizeName(expositor.name)]);
  }  

  getExpositorById(){
    let idExpositor = localStorage.getItem('expositorId');

    this.service.getExpositorById(idExpositor)
                .then(expositor=>{
                  this.expositorSelected = expositor;
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

  onUpdate(){
    this.blockUI.start();
    let idExpositor = localStorage.getItem('expositorId');
    this.service.updateExpositor(this.expositorSelected, idExpositor)
                .then(expositor => {
                  this.blockUI.stop();
                  this.gotoDetail(expositor);
                })
                .catch(err=>{
                  console.log(err);
                })
  }


  ngOnInit() {
    this.blockUI.start("Cargando Informacion");
    this.getExpositorById();
  }

}
