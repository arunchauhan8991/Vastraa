import uploadOnCloudinary from "../config/cloudinary.js"
import Product from "../model/product.model.js"




export const addProduct = async (req, res) => {
    try {
        const {
            name, description, price, category, subCategory, sizes, bestSeller
        } = req.body

        const image1 = await uploadOnCloudinary(req.files.image1[0].path)
        const image2 = await uploadOnCloudinary(req.files.image2[0].path)
        const image3 = await uploadOnCloudinary(req.files.image3[0].path)
        const image4 = await uploadOnCloudinary(req.files.image4[0].path)

        const productData = {
          name,
          description,
          price: Number(price),
          category,
          subCategory,
          sizes: JSON.parse(sizes),
          bestSeller: bestSeller === "true"? true : false,
          date: Date.now(),
          image1,
          image2,
          image3,
          image4
        };

        const product = await Product.create(productData)

        return res
        .status(201)
        .json(product)

    } catch (error) {
        console.log("Add product Error ");
        return res.status(500).json({ message: `Add prroduct Error: ${error}` });
    }
}

export const listProduct = async (req, res) => {
    try {
        const product = await Product.find({})
        return res
        .status(200)
        .json(product)
    } catch (error) {
         console.log("list product Error ");
         return res
           .status(500)
           .json({ message: `list product Error: ${error}` });
    }
}

export const removeProduct = async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id);
         return res.status(200).json(product);
    } catch (error) {
        console.log("Remove product Error ");
        return res
          .status(500)
          .json({ message: `remove product Error: ${error}` });
    }
}