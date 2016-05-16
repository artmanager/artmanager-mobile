var root = './www/app/';
var files =
    [
        "app.js",
        "routeConfig.js",
        "!views.js",
        "common/controllers/appController.js",
        "login/controllers/loginController.js",
        "production/controllers/productionController.js",
        "production/controllers/productionDetailController.js",
        "production/controllers/orderRegisterController.js",
        "user/controllers/userController.js",
        "provider/controllers/providerController.js",
        
        // "production/controllers/productionController.js",
        
        // "production/controllers/productionDetailController.js",
        
        
        "client/controllers/clientController.js",
        "product/controllers/productController.js",
        "product/controllers/productCountController.js",
        "product/controllers/productRegisterController.js",
        "employee/controllers/employeeController.js",
        "employee/controllers/employeeDetailController.js",



        "provider/services/providerService.js",
        "login/services/loginService.js",
        "production/services/productionService.js",
        "user/services/userService.js",
        "client/services/clientService.js",
        "product/services/productService.js",
        "employee/services/employeeService.js",
        "common/services/utilFactory.js",
        
        "common/filters/commonFilters.js",
        "common/directives/filter-grid.js"
        
    ];
    
function rootFiles(item) {
    var file = root + item;
    return file;
}    
files = files.map(rootFiles);
module.exports = files;