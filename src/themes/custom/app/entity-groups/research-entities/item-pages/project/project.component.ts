import { Component } from '@angular/core';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import {
  listableObjectComponent
} from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import {
  ProjectComponent as BaseComponent
} from '../../../../../../../app/entity-groups/research-entities/item-pages/project/project.component';
import { Context } from '../../../../../../../app/core/shared/context.model';

@listableObjectComponent('Project', ViewMode.StandalonePage, Context.Any, 'custom')
@Component({
  selector: 'ds-project',
  // styleUrls: ['./project.component.scss'],
  styleUrls: ['../../../../../../../app/entity-groups/research-entities/item-pages/project/project.component.scss'],
  templateUrl: './project.component.html',
	//templateUrl: '../../../../../../../app/entity-groups/research-entities/item-pages/project/project.component.html',
})
export class ProjectComponent extends BaseComponent {
}
