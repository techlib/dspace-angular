import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { Context } from '../../../../../../../app/core/shared/context.model';
import { PublicationComponent as BaseComponent } from '../../../../../../../app/item-page/simple/item-types/publication/publication.component';

// #RA added to get current UI language - required public TranslateService (singleton service to translate is not public !!!)
//import { TranslateService } from '@ngx-translate/core';
//import { inject } from '@angular/core';

/**
 * Component that represents a publication Item page
 */

@listableObjectComponent('Publication', ViewMode.StandalonePage, Context.Any, 'custom')
@Component({
  selector: 'ds-publication',
  // styleUrls: ['./publication.component.scss'],
  styleUrls: ['../../../../../../../app/item-page/simple/item-types/publication/publication.component.scss',
    './publication.component.scss'],
  templateUrl: './publication.component.html',
  //templateUrl: '../../../../../../../app/item-page/simple/item-types/publication/publication.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicationComponent extends BaseComponent {

//  // #RA added to get current UI language - required public TranslateService (singleton service to translate is not public !!!)
//  public translatePublicationPubService = inject(TranslateService);


}
