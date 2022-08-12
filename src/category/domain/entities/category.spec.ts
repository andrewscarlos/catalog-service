import { Category } from "./category";
import { omit } from "lodash";
describe("Category Unit Tests", () => {
  it("constructor of category", () => {
    let category = new Category({ name: "Movie" });
    let props = omit(category.props, "created_at");
    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      is_active: true,
    });
    expect(category.props.created_at).toBeInstanceOf(Date);

    let createdAt = new Date();
    category = new Category({
      name: "Movie",
      description: "Some Description",
      is_active: false,
    });

    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "Some Description",
      is_active: false,
      created_at: createdAt,
    });

    category = new Category({
      name: "Movie",
      description: "Other Description",
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      description: "Other Description",
    });

    category = new Category({
      name: "Movie",
      is_active: true,
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      is_active: true,
    });

    category = new Category({
      name: "Movie",
      created_at: createdAt,
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      created_at: createdAt,
    });
  });
  it("getter of name field", () => {
    const category = new Category({ name: "Movie" });
    expect(category.name).toBe("Movie");
  });

  it("getter and setter of description field", () => {
    let category = new Category({
      name: "Movie",
      description: "Some description",
    });
    expect(category.description).toBe("Some description");
    category = new Category({
      name: "Movie",
    });
    expect(category.description).toBe(null);

    category = new Category({
      name: "Movie",
    });
    category["description"] = "Other description";
    expect(category.description).toBe("Other description");

    category["description"] = undefined;
    expect(category.description).toBeNull();
  });

  it("getter and setter of is_active field", () => {
    let category = new Category({
      name: "Movie",
      is_active: true,
    });
    expect(category.is_active).toBeTruthy();

    category = new Category({
      name: "Movie",
    });
    expect(category.is_active).toBeTruthy();

    category = new Category({
      name: "Movie",
      is_active: false,
    });
    expect(category.is_active).toBeFalsy();
  });

  it("getter of created_at prop", () => {
    let category = new Category({
      name: "Movie",
    });
    expect(category.created_at).toBeInstanceOf(Date);

    let created_at = new Date();
    category = new Category({
      name: "Movie",
      created_at,
    });
    expect(category.created_at).toBe(created_at);
  });
});
