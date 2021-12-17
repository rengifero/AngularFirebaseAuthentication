import { SettingsService } from './../../shared/settings-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Settings } from '../../model/settings';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: Settings;

  constructor(public settingsService: SettingsService,
              //public flashMessagesService: FlashMessagesService,
              public router: Router) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
  }

  onSubmit() {
    this.settingsService.changeSettings(this.settings);
    //this.flashMessagesService.show('Settings are saved', {cssClass: 'alert-success', timeout: 4000});
    this.router.navigate(['/autos-list']);
  }

}
