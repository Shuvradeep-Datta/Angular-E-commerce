import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{
ngOnInit(): void { }
constructor(private seller:SellerService,private route:Router){}
signUp(data:any) {
  console.warn(data);
  this.seller.userSignUp(data);
}

}
