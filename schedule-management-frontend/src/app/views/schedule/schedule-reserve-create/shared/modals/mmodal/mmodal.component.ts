import { Component, Input } from '@angular/core';
import {NmodalService} from '../nmodal/nmodal.service';

@Component({
  selector: 'app-mmodal',
  templateUrl: './mmodal.component.html',
  styleUrls: ['./mmodal.component.scss']
})
export class MmodalComponent {

  constructor(private modalService:NmodalService){}

  ngOnInit() {
    
    this.modalService.getAction().subscribe(action => {
      if (action === 'doSomething') {
        this.showModal();
      }
    });
  }

  
  @Input() title='';
  public show = false;

  showModal(){
    this.show=true;
  }
  hideModal(){
    this.show=false;
    console.log(this.show+"valor despues de cerrado")
  }

}
