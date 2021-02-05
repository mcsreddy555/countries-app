import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  public result:any;
  constructor(private service:CountriesService) { }

  ngOnInit(): void {
    this.service.getCountries().subscribe((posRes)=>{
      this.result=posRes;
    },(errRes:HttpErrorResponse)=>{
      if (errRes.error instanceof Error){
        console.log("client side error")
      } else {
        console.log("server side error")
      }
    })
  }

}
