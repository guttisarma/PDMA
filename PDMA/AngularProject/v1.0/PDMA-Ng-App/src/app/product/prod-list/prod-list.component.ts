import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProdHelp, Dummylsproduct } from '../HelperProd';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit,OnDestroy {

  lsproduct: ProdHelp[] = [];
  lsselectedproduct: ProdHelp[] = [];
  pagenumber: number;
  search: string;

  constructor(private prodservice:ProductService) { }

  ngOnInit() {
    this.pagenumber = 0;
    this.lsproduct = Dummylsproduct;
  }
  ngOnDestroy(){
    this.prodservice.selprod=this.lsselectedproduct;
    console.log('Product list destroyed');
  /*   this.lsselectedproduct.forEach(p=>{ 
      this.prodservice.selprod.push(p);
    }); */
  }
  RemoveItem(prod: any) {
    for (var i = 0; i < this.lsselectedproduct.length; i++) {
      if (this.lsselectedproduct[i].ProdHelpPID === prod.ProdHelpPID) {
        this.lsselectedproduct.splice(i, 1);
      }
    }
    this.lsproduct.push(prod);
  }
  SelectItem(prod: any) {

    for (var i = 0; i < this.lsproduct.length; i++) {
      if (this.lsproduct[i].ProdHelpPID === prod.ProdHelpPID) {
        this.lsproduct.splice(i, 1);
      }
    }

    this.lsselectedproduct.push(prod);
  }
  SeachByCodeRName() {
    console.log('sarma');
  }
  GotoPage() {

  }
  Next() {
    this.pagenumber = this.pagenumber + 1;
  }

}
