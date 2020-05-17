import { Component, OnInit } from '@angular/core';
import {ApiService} from "../_services/api.service";

@Component({
  selector: 'app-active-sites',
  templateUrl: './active-sites.component.html',
  styleUrls: ['./active-sites.component.scss']
})
export class ActiveSitesComponent implements OnInit {
  loading = false;
  title = "Active Websites";
  sites;

  constructor(private _api: ApiService) {
    this.loadSites(); // Load sites
  }

  // This exists because the constructor cannot return a Promise
  loadSites() {
    this.loading = true;
    return this._api.post('vhosts/search', {status: ['acti']}).toPromise();
  }

  /**
   * Find any Application objects assigned to VHosts
   * @param sites Array of VHost data from API
   */
  loadApplications(sites) {
    this.loading = true;

  }

  // Required to wait for Promise of sites to resolve
  async ngOnInit() {
    this.sites = await this.loadSites();
    this.loading = false;
  }

}
