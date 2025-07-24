import uploadOnCloudinary from "../config/cloudinary.js"
import Product from "../model/product.model.js"




export const addProduct = async (req, res) => {
    try {
        const {
            name, description, price, category, subCategory, sizes, bestSeller
        } = req.body

        const image1 = await uploadOnCloudinary(req.files.image1[0])
        const image2 = await uploadOnCloudinary(req.files.image2[0])
        const image3 = await uploadOnCloudinary(req.files.image3[0])
        const image4 = await uploadOnCloudinary(req.files.image4[0])

        const productData = {
          name,
          description,
          price: Number(price),
          category,
          subCategory,
          sizes: JSON.parse(sizes),
          bestSeller: bestSeller === "true"? true : false,
          date: Date.now,
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
        console.log("Add poduct Error ");
        return res.status(500).json({ message: `Add product Error: ${error}` });
    }
}