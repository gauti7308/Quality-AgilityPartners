import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit  {
  CompaniesDropdownList: any;
  constructor() {
		this.CompaniesDropdownList = [
			{
				id: 'C001',
				label: 'Jobs',
				value: 'Job_Exchange',
			},
			{
				id: 'C002',
				label: 'Apprenticeships',
				value: 'Apprenticeships',
			}
		];
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
}
