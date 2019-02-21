import { autoserialize, autoserializeAs, deserialize, serialize } from 'cerialize';
import { DSpaceObject } from '../../shared/dspace-object.model';
import { MetadataMap } from '../../shared/metadata.interfaces';
import { ResourceType } from '../../shared/resource-type';
import { mapsTo } from '../builders/build-decorators';
import { NormalizedObject } from './normalized-object.model';

/**
 * An model class for a DSpaceObject.
 */
@mapsTo(DSpaceObject)
export class NormalizedDSpaceObject extends NormalizedObject {

  /**
   * The link to the rest endpoint where this object can be found
   *
   * Repeated here to make the serialization work,
   * inheritSerialization doesn't seem to work for more than one level
   */
  @deserialize
  self: string;

  /**
   * The human-readable identifier of this DSpaceObject
   *
   * Currently mapped to uuid but left in to leave room
   * for a shorter, more user friendly type of id
   */
  @autoserializeAs(String, 'uuid')
  id: string;

  /**
   * The universally unique identifier of this DSpaceObject
   *
   * Repeated here to make the serialization work,
   * inheritSerialization doesn't seem to work for more than one level
   */
  @autoserialize
  uuid: string;

  /**
   * A string representing the kind of DSpaceObject, e.g. community, item, …
   */
  @autoserialize
  type: ResourceType;

  /**
   * All metadata of this DSpaceObject
   */
  @autoserialize
  metadata: MetadataMap;

  /**
   * An array of DSpaceObjects that are direct parents of this DSpaceObject
   */
  @deserialize
  parents: string[];

  /**
   * The DSpaceObject that owns this DSpaceObject
   */
  @deserialize
  owner: string;

  /**
   * The links to all related resources returned by the rest api.
   *
   * Repeated here to make the serialization work,
   * inheritSerialization doesn't seem to work for more than one level
   */
  @deserialize
  _links: {
    [name: string]: string
  }
}