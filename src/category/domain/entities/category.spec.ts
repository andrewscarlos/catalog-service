import {Category} from "./category";

describe("Category Test", ()=>{
    it("should be created", ()=>{
        const category = new Category("andrews");
        expect(category).toBeTruthy();
    }
    );
})