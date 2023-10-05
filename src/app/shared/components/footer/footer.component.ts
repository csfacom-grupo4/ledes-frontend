import { Component } from '@angular/core';
import { LINKS } from '../../constants/links';
import { Link } from '../../interfaces/link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  links: Link[] = LINKS;
}
