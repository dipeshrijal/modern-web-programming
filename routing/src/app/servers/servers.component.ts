import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    this.router.navigate(['/servers'], {relativeTo: this.route});
  }

  loadServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'],
      {queryParams: {editing: 1}, fragment: 'loading'}
      );
  }

}
