import { AttributeReference } from './AttributeReference';
import { Relationship } from './Relationship';

/**
 * A relationship of with a single key to a field.
 */
export abstract class SingleKeyRelationship extends Relationship {
    public fromAttribute : AttributeReference;
    public toAttribute : AttributeReference;
}
