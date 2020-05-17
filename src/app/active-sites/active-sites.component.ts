import { Component, OnInit } from '@angular/core';
import {ApiService} from "../_services/api.service";
import {GlobalVariables} from "../globals";

@Component({
  selector: 'app-active-sites',
  templateUrl: './active-sites.component.html',
  styleUrls: ['./active-sites.component.scss']
})
export class ActiveSitesComponent implements OnInit {
  loading = false;
  title = "Active Websites";
  sites; // Store list of VHost objects
  applications = []; // Store results of Application object search
  infoScapeUrl;

  constructor(private _api: ApiService) {
    this.loadSites(); // Load sites
    this.infoScapeUrl = GlobalVariables.INFOSCAPE_URL;
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
    let self = this; // Needed to call class variables inside loop
    return this.sites.forEach(function (site) {
      let vhost = site.subdomain + '.' + site.domain;
      self._api.post('applications/search', {vhost: vhost}).subscribe(
        data => self.applications[site.id] = data
      );
    });
  }

  getApplications(siteId)
  {
    return this.applications[siteId];
  }

  // Required to wait for Promise of sites to resolve
  async ngOnInit() {
    this.sites = await this.loadSites();
    this.loadApplications(this.sites);
    this.loading = false;
  }

}
