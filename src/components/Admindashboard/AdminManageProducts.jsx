// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   TextField,
//   Grid,
// } from "@mui/material";
// import {
//   getAllProducts,
//   deleteProduct,
//   createProduct, // استيراد createProduct بدلاً من addProduct
//   updateProduct,
// } from "../../services/productService";

// const AdminManageProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     price: "",
//     categoryName: "",
//     description: "",
//     author: "",
//     genre: "",
//     publicationYear: "",
//     imageUrl: "",
//   });

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await getAllProducts(); // جلب المنتجات من الـ API

//         // طباعة البيانات لمراجعة الهيكل
//         console.log("Fetched data:", data);

//         // التأكد من أن الكائن يحتوي على مفتاح 'items' وأنه مصفوفة
//         if (Array.isArray(data?.items)) {
//           setProducts(data.items); // تعيين المنتجات الفعلية من 'items'
//         } else {
//           console.error(
//             "Expected 'items' to be an array but got:",
//             data?.items
//           );
//           setProducts([]); // تعيين مصفوفة فارغة إذا كانت البيانات غير صحيحة
//         }
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setIsLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await deleteProduct(id); // استدعاء دالة حذف المنتج
//       setProducts(products.filter((product) => product.id !== id)); // تحديث القائمة بعد الحذف
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   const handleAddProduct = async () => {
//     try {
//       const newProductData = await createProduct(newProduct); // استبدال addProduct بـ createProduct
//       setProducts([...products, newProductData]); // تحديث قائمة المنتجات
//       setNewProduct({}); // إعادة تعيين النموذج بعد إضافة المنتج بنجاح
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct({
//       ...newProduct,
//       [name]: value,
//     });
//   };

//   const handleEditProduct = async (id, updatedProduct) => {
//     try {
//       const updatedData = await updateProduct(id, updatedProduct); // استدعاء دالة تحديث المنتج
//       setProducts(
//         products.map((product) =>
//           product.id === id ? { ...product, ...updatedData } : product
//         )
//       ); // تحديث قائمة المنتجات بالبيانات الجديدة
//     } catch (error) {
//       console.error("Error editing product:", error);
//     }
//   };

//   return (
//     <div>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Price</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {isLoading ? (
//               <TableRow>
//                 <TableCell colSpan={3}>Loading...</TableCell>
//               </TableRow>
//             ) : products.length > 0 ? (
//               products.map((product) => (
//                 <TableRow key={product.id}>
//                   <TableCell>{product.name}</TableCell>
//                   <TableCell>{product.price}</TableCell>
//                   <TableCell>
//                     <Button
//                       color="primary"
//                       onClick={() =>
//                         handleEditProduct(product.id, { name: "Updated Name" })
//                       }
//                     >
//                       Edit
//                     </Button>
//                     <Button
//                       color="secondary"
//                       onClick={() => handleDelete(product.id)}
//                     >
//                       Delete
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={3}>No products found</TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Form to Add a New Product */}
//       <Grid container spacing={2} style={{ marginTop: "20px" }}>
//         <Grid item xs={12}>
//           <TextField
//             label="Name"
//             name="name"
//             value={newProduct.name}
//             onChange={handleInputChange}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             label="Price"
//             name="price"
//             value={newProduct.price}
//             onChange={handleInputChange}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             label="Category"
//             name="categoryName"
//             value={newProduct.categoryName}
//             onChange={handleInputChange}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             label="Description"
//             name="description"
//             value={newProduct.description}
//             onChange={handleInputChange}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             label="Author"
//             name="author"
//             value={newProduct.author}
//             onChange={handleInputChange}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             label="Genre"
//             name="genre"
//             value={newProduct.genre}
//             onChange={handleInputChange}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             label="Publication Year"
//             name="publicationYear"
//             value={newProduct.publicationYear}
//             onChange={handleInputChange}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             label="Image URL"
//             name="imageUrl"
//             value={newProduct.imageUrl}
//             onChange={handleInputChange}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleAddProduct}
//           >
//             Add Product
//           </Button>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default AdminManageProducts;

// import { useState, useEffect } from "react";
// import { getAllProducts } from "../../services/productService";
// import "./Adminstyle.css";

// const AdminManageProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await getAllProducts(); // جلب المنتجات من الـ API

//         // طباعة البيانات بالكامل لمراجعة الهيكل
//         console.log("Fetched data:", data);

//         // التأكد من أن الكائن يحتوي على 'product' ومفتاح 'items' وأنه مصفوفة
//         if (data?.product && Array.isArray(data.product.items)) {
//           console.log("Items array found:", data.product.items); // طباعة البيانات للتأكد
//           setProducts(data.product.items); // تعيين المنتجات من 'items'
//         } else {
//           console.error(
//             "Expected 'items' to be an array but got:",
//             data?.product?.items
//           );
//           setProducts([]); // تعيين مصفوفة فارغة إذا كانت البيانات غير صحيحة
//         }
//         setIsLoading(false); // إنهاء التحميل
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setIsLoading(false); // إنهاء التحميل في حال حدوث خطأ
//       }
//     };

//     fetchProducts(); // استدعاء الوظيفة لجلب البيانات
//   }, []); // هذه الدالة تعمل فقط عند أول تحميل للمكون

//   // طباعة حالة المنتجات للتحقق من أن state يتم تحديثها
//   console.log("Current products state:", products);

//   // عرض حالة التحميل
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   // عرض قائمة المنتجات بعد تحميلها
//   return (
//     <div>
//       <h1>Admin Manage Products</h1>
//       <ul>
//         {products.length > 0 ? (
//           products.map((product) => (
//             <li key={product.id}>
//               <h3>{product.name}</h3>
//               <p>{product.description}</p>
//               <p>Price: ${product.price}</p>
//             </li>
//           ))
//         ) : (
//           <li>No products available</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default AdminManageProducts;

// const AdminManageProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await getAllProducts();

//         if (data?.product && Array.isArray(data.product.items)) {
//           setProducts(data.product.items);
//         } else {
//           console.error(
//             "Expected 'items' to be an array but got:",
//             data?.product?.items
//           );
//           setProducts([]);
//         }
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container-fluid my-5">
//       <div className="row justify-content-start">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div className="col-12 mb-3" key={product.id}>
//               <div className="d-flex align-items-center border p-3 rounded product-box">
//                 <img
//                   src={product.imageUrl}
//                   alt={product.name}
//                   className="rounded"
//                   style={{
//                     width: "100px",
//                     height: "100px",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <div className="ms-3 flex-grow-1">
//                   <h5 className="mb-1">{product.name}</h5>
//                   <p className="mb-1 text-muted">{product.description}</p>
//                   <p className="mb-0">
//                     <strong>Price:</strong> ${product.price}
//                   </p>
//                 </div>
//                 <div className="d-flex">
//                   <button className="btn btn-primary me-2">Edit</button>
//                   <button className="btn btn-danger">Delete</button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div>No products available</div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default AdminManageProducts;

// import { Box, Typography } from "@mui/material";
// import AdminSidebar from "./AdminSidebar";
// import { useState, useEffect } from "react";
// import { getAllProducts, deleteProduct, updateProduct } from "./productService"; // تأكد من استيراد الدوال المطلوبة

// const AdminManageProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await getAllProducts();
//         setProducts(data?.product?.items || []);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // وظيفة لحذف المنتج
//   const handleDeleteProduct = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this product?"
//     );
//     if (confirmDelete) {
//       try {
//         await deleteProduct(id); // إرسال طلب الحذف للـ Back-end
//         setProducts(products.filter((product) => product.id !== id)); // تحديث الواجهة بعد الحذف
//       } catch (error) {
//         console.error("Error deleting product:", error);
//       }
//     }
//   };

//   // وظيفة لتحديث المنتج (مثال على تحديث السعر والاسم)
//   const handleUpdateProduct = async (id) => {
//     const updatedProduct = {
//       name: "Updated Product Name", // تحديث البيانات كما تريد
//       price: 99.99, // مثال على تحديث السعر
//     };

//     try {
//       await updateProduct(id, updatedProduct); // إرسال طلب التحديث للـ Back-end
//       setProducts(
//         products.map((product) =>
//           product.id === id ? { ...product, ...updatedProduct } : product
//         )
//       ); // تحديث الواجهة بعد التحديث
//     } catch (error) {
//       console.error("Error updating product:", error);
//     }
//   };

//   return (
//     <Box>
//       {/* الشريط الجانبي */}
//       <AdminSidebar />

//       {/* محتوى المنتجات */}
//       <Box
//         component="main"
//         sx={{
//           marginLeft: "250px", // مساحة الشريط الجانبي
//           padding: "20px",
//           paddingTop: "84px",
//           backgroundColor: "#f5f5f5",
//           height: "calc(100vh - 64px)",
//           overflowY: "auto",
//         }}
//       >
//         <Typography variant="h4" align="center" gutterBottom>
//           Products
//         </Typography>

//         <div className="container-fluid my-5">
//           <div className="row justify-content-start">
//             {isLoading ? (
//               <div>Loading...</div>
//             ) : products.length > 0 ? (
//               products.map((product) => (
//                 <div className="col-12 mb-3" key={product.id}>
//                   <div className="d-flex align-items-center border p-3 rounded product-box">
//                     <img
//                       src={product.imageUrl}
//                       alt={product.name}
//                       className="rounded"
//                       style={{
//                         width: "100px",
//                         height: "100px",
//                         objectFit: "cover",
//                       }}
//                     />
//                     <div className="ms-3 flex-grow-1">
//                       <h5 className="mb-1">{product.name}</h5>
//                       <p className="mb-1 text-muted">{product.description}</p>
//                       <p className="mb-0">
//                         <strong>Price:</strong> ${product.price}
//                       </p>
//                     </div>
//                     <div className="d-flex">
//                       <button
//                         className="btn btn-primary me-2"
//                         onClick={() => handleUpdateProduct(product.id)}
//                       >
//                         Edit
//                       </button>
//                       <button
//                         className="btn btn-danger"
//                         onClick={() => handleDeleteProduct(product.id)}
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div>No products available</div>
//             )}
//           </div>
//         </div>
//       </Box>
//     </Box>
//   );
// };

// export default AdminManageProducts;

import { Box, Typography, TextField, Button, Modal } from "@mui/material";
import AdminSidebar from "./AdminSidebar";
import { useState, useEffect } from "react";
import {
  getAllProducts,
  deleteProduct,
  updateProduct,
} from "../../services/productService";

const AdminManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [updatedProductData, setUpdatedProductData] = useState({
    name: "",
    price: 0.01,
    description: "",
    author: "",
    genre: "",
    publicationYear: new Date().getFullYear(),
    imageUrl: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data?.product?.items || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDeleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      try {
        await deleteProduct(id);
        setProducts(products.filter((product) => product.id !== id));
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setUpdatedProductData({
      name: product.name || "",
      price: product.price || 0.01,
      description: product.description || "",
      author: product.author || "",
      genre: product.genre || "",
      publicationYear: product.publicationYear || new Date().getFullYear(),
      imageUrl: product.imageUrl || "",
    });
    setShowEditModal(true);
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      console.log("Updated Data:", updatedProductData);

      const updatedProduct = await updateProduct(
        selectedProduct.id,
        updatedProductData
      );

      setProducts(
        products.map((product) =>
          product.id === selectedProduct.id
            ? { ...product, ...updatedProductData }
            : product
        )
      );
      setShowEditModal(false);
    } catch (error) {
      console.error(
        "Error updating product:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <Box>
      <AdminSidebar />
      <Box
        component="main"
        sx={{
          marginLeft: "250px",
          padding: "20px",
          paddingTop: "84px",
          backgroundColor: "#f5f5f5",
          height: "calc(100vh - 64px)",
          overflowY: "auto",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Products
        </Typography>

        <div className="container-fluid my-5">
          <div className="row justify-content-start">
            {isLoading ? (
              <div>Loading...</div>
            ) : products.length > 0 ? (
              products.map((product) => (
                <div className="col-12 mb-3" key={product.id}>
                  <div className="d-flex align-items-center border p-3 rounded product-box">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="rounded"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="ms-3 flex-grow-1">
                      <h5 className="mb-1">{product.name}</h5>
                      <p className="mb-1 text-muted">{product.description}</p>
                      <p className="mb-0">
                        <strong>Price:</strong> ${product.price}
                      </p>
                    </div>
                    <div className="d-flex">
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => handleEditProduct(product)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>No products available</div>
            )}
          </div>
        </div>

        <Modal open={showEditModal} onClose={() => setShowEditModal(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "400px",
              boxShadow: 24,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Update Product
            </Typography>
            <form onSubmit={handleUpdateProduct}>
              <TextField
                label="Product Name"
                fullWidth
                value={updatedProductData.name}
                onChange={(e) =>
                  setUpdatedProductData({
                    ...updatedProductData,
                    name: e.target.value,
                  })
                }
                margin="normal"
                required
              />
              <TextField
                label="Price"
                type="number"
                fullWidth
                value={updatedProductData.price}
                onChange={(e) => {
                  // استبدال الفاصلة بنقطة (إذا كانت موجودة)
                  let value = e.target.value.replace(",", ".");

                  // التحقق من أن القيمة الناتجة هي رقم صالح
                  if (!isNaN(value)) {
                    setUpdatedProductData({
                      ...updatedProductData,
                      price: value, // تحديث السعر بالقيمة المعدلة
                    });
                  }
                }}
                margin="normal"
                required
              />

              <TextField
                label="Description"
                fullWidth
                value={updatedProductData.description}
                onChange={(e) =>
                  setUpdatedProductData({
                    ...updatedProductData,
                    description: e.target.value,
                  })
                }
                margin="normal"
                required
              />
              <TextField
                label="Author"
                fullWidth
                value={updatedProductData.author}
                onChange={(e) =>
                  setUpdatedProductData({
                    ...updatedProductData,
                    author: e.target.value,
                  })
                }
                margin="normal"
                required
              />
              <TextField
                label="Genre"
                fullWidth
                value={updatedProductData.genre}
                onChange={(e) =>
                  setUpdatedProductData({
                    ...updatedProductData,
                    genre: e.target.value,
                  })
                }
                margin="normal"
                required
              />
              <TextField
                label="Publication Year"
                type="number"
                fullWidth
                value={updatedProductData.publicationYear}
                onChange={(e) =>
                  setUpdatedProductData({
                    ...updatedProductData,
                    publicationYear: parseInt(e.target.value),
                  })
                }
                margin="normal"
                required
              />
              <TextField
                label="Image URL"
                fullWidth
                value={updatedProductData.imageUrl}
                onChange={(e) =>
                  setUpdatedProductData({
                    ...updatedProductData,
                    imageUrl: e.target.value,
                  })
                }
                margin="normal"
              />
              <div className="mt-3">
                <Button variant="contained" color="primary" type="submit">
                  Update Product
                </Button>
              </div>
            </form>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default AdminManageProducts;
