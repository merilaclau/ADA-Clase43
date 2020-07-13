/**
Hacer un programa que nos permita cargar/modificar/borrar un catalogo de
productos (deberían tener "id", como identificador único de número, por ej: 1, 2, 3.; título, descripción
de producto y precio (float)).
*/

const catalogue = {
    productList: [],
    idAssigner: 1,
    validFields: ["title", "description", "price"],
    addProduct: function (title, description, price) {
        let product = {
            id: this.idAssigner,
            title,
            description,
            price,
        }
        this.productList.push(product);
        this.idAssigner++
    },
    modifyProduct: function (id, field, newValue) {
        const index = this.findById(id);
        this.validateFields(field);
        this.productList[index][field] = newValue;
    },
    removeProduct: function (id) {
        this.findById(id);
        return this.productList.filter(product => id !== product.id);
    },
    findById: function (id) {        
        const index = this.productList.findIndex(product => id === product.id);
        if (index == -1) throw new Error ("El id ingresado no corresponde a ningún producto existente.");
        return index;   
    },
    validateFields: function (field) {
        if (!this.validFields.includes(field)) throw new Error ("El campo ingresado no corresponde a ningún campo editable.");
    }
}

catalogue.addProduct("Gato", "Juguete de peluche", 250.68);
catalogue.addProduct("Perro", "Juguete de peluche", 258.89);
catalogue.addProduct("Elefante", "Juguete de peluche", 200.89);
catalogue.addProduct("Mono", "Juguete de peluche", 230.89);


