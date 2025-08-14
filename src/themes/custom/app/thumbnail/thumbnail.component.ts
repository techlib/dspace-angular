import { Component } from '@angular/core';
import { ThumbnailComponent as BaseComponent } from '../../../../app/thumbnail/thumbnail.component';

// RA
import { DsRaComponent } from '../ds-ra/ds-ra.component';

@Component({
  selector: 'ds-thumbnail',
  //styleUrls: ['./thumbnail.component.scss'],
  styleUrls: ['../../../../app/thumbnail/thumbnail.component.scss'],
  //templateUrl: './thumbnail.component.html',
  templateUrl: '../../../../app/thumbnail/thumbnail.component.html',
//imports: [DsRaComponent], // the error error NG2010: 'imports' is only valid on a component that is standalone.
})
export class ThumbnailComponent extends BaseComponent {
}
