import UniqueEntityId from "../../../@seedwork/domain/unique-entity-id.vo";

export type CategoryProperties = {
  name: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
};
export class Category {
  public readonly id: UniqueEntityId;
  constructor(public readonly props: CategoryProperties, id?: UniqueEntityId) {
    this.id = id ?? new UniqueEntityId();
    this.description = this.props.description;
    this.props.is_active = this.props.is_active ?? true;
    this.props.created_at = this.props.created_at ?? new Date();
  }
  get name(): string {
    return this.props.name;
  }
  get description(): string | undefined {
    return this.props.description;
  }
  get is_active(): boolean | undefined {
    return this.props.is_active;
  }
  get created_at(): Date | undefined {
    return this.props.created_at;
  }

  private set description(value: string) {
    this.props.description = value ?? null;
  }

  private set is_active(value: boolean) {
    this.props.is_active = value ?? true;
  }
}
