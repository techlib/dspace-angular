import { Component, Input } from '@angular/core';

// import { Item } from '../../../../app/core/shared/item.model';
// import { ItemDataService } from '../../../../app/core/data/item-data.service';
// import { ItemPageComponent as BaseComponent } from '../../../../app/item-page/simple/item-page.component';
// import { ItemDataService } from '../../core/data/item-data.service';

import { Item as BaseComponent } from '../../../../app/core/shared/item.model';

@Component({
  // standalone: true,
  selector: 'ds-access-icon',
  templateUrl: './ds-access-icon.component.html',
  styleUrls: ['./ds-access-icon.component.scss'],
  // imports: [ItemDataService],
  // provide{ };
})
export class DsAccessIconComponent extends BaseComponent  {

  @Input() url;
  @Input() entitytype;
  @Input() tooltip;

  // private itemDataService: ItemDataService;

  /**
   * Initialize instance variables
   */
  ngOnInit(): void { 
    //return; 

    console.log("<ds-access-icon> init");
    console.log("Item Access Icon: ", this )

    /* works only with import as BaseComponent of ItemPageComponent */
    // console.log("items:", this.items );
    // console.log("id:", this.id );
    // console.log("itemURL:", this.itemUrl );
    // console.log("find by id:", this.items.findById('b865d869-6038-410a-bc27-5a6c74900dca'))

    // console.log("", this.)

  }

}
