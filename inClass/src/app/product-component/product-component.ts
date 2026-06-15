import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-component',
  imports: [],
  templateUrl: './product-component.html',
  styleUrl: './product-component.scss',
})
export class ProductComponent implements OnInit{
  // Use to display single product info
  private ar = inject(ActivatedRoute);

  ngOnInit(): void {
    // retrieve path parameter from current route
    this.ar.params.subscribe(params =>{
      console.log("using params", params['id'], params['userId'])
    })
    this.ar.paramMap.subscribe(params =>{
      console.log("using paramMap", params.get('id'), params.get('userId'))
    })
    // snapshot - one time
    console.log("using snapshot", this.ar.snapshot.params['id'], this.ar.snapshot.queryParams['sort'])

    // retreive query paramters
    this.ar.queryParamMap.subscribe((query)=>{
      console.log(query.get('sort'), query.get('page'))
    })
  }
}
