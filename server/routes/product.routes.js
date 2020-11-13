const ProductController = require('../controllers/product.controller');

module.exports = function(app){    
        //Get ALL
        app.get("/api/products", ProductController.findAllProducts);
        
        //get ONE
        app.get("/api/products/:_id", ProductController.findOneProduct);
        
        //Create ONE
        app.post("/api/products/new", ProductController.createProduct);
       
        //Delete ONE
        app.delete("/api/products/delete/:_id", ProductController.deleteProduct);
        
        //Update ONE
        app.put("/api/products/update/:_id", ProductController.updateProduct);
}