import { Component } from '@angular/core';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import {
  listableObjectComponent
} from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import {
  OrgUnitComponent as BaseComponent
} from '../../../../../../../app/entity-groups/research-entities/item-pages/org-unit/org-unit.component';
import { Context } from '../../../../../../../app/core/shared/context.model';

@listableObjectComponent('OrgUnit', ViewMode.StandalonePage, Context.Any, 'custom')
@Component({
  selector: 'ds-org-unit',
  // styleUrls: ['./org-unit.component.scss'],
  styleUrls: ['../../../../../../../app/entity-groups/research-entities/item-pages/org-unit/org-unit.component.scss'],
  // templateUrl: './org-unit.component.html',
  templateUrl: '../../../../../../../app/entity-groups/research-entities/item-pages/org-unit/org-unit.component.html',
})
export class OrgUnitComponent extends BaseComponent {
}
