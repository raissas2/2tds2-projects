// Categoria possui varios produtos => 1:n
class Category {
    constructor(id,name){
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

class Product{
    constructor(id,name,price,category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService{
    constructor(){
        this.categories = [];
        this.nextCategoryId = 1;
    }
    addCategory(name){
        const id = this.nextCategoryId++;
        const category = new Category(id,name);
        this.categories.push(category);
    }
}

class ProductSevice{
    constructor(){
        this.product = [];
        this.nextProductId = 0;
    }
 
addProduct (name, price, category){
 const id = this.nextCategoryId++;
 const product = new Product (id , name, price, category);
 category.products.push(product);
 this.products.push(product);
 }
}

const categoryService = new CategoryService();

function createCategory(){
    const categoryName = "Doce";

    categoryService.addCategory(categoryName);
    console.log(categoryService.categories);

}