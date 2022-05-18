import { storage, db } from "./apps";
import { addProduct, uploadImages } from "./functions/addProduct";

const createProductForm = document.getElementById("createProductForm");

createProductForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = createProductForm.name.value;
    const description = createProductForm.description.value;
    const price = createProductForm.price.value;
    const material = createProductForm.material.value;
    const images = createProductForm.images.files;

    let gallery = [];
c
    if (images.length) {
        const uploadedImages = await uploadImages(storage, [...images]);
        
        gallery = await Promise.all(uploadedImages);
    }

    const newProduct = {
        name,
        description,
        price,
        material,
        images: gallery,
    };

    await addProduct(db, newProduct);


});