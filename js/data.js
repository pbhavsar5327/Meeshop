// ===== MEESHOP - PRODUCT DATA =====
const PRODUCTS = [
  {
    "id": 1,
    "name": "Floral Printed Silk Saree",
    "category": "Women Ethnic",
    "price": 499,
    "oldPrice": 849,
    "rating": 4.0,
    "reviews": 493,
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733981-b1e57b27fd19?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Floral Printed Silk Saree – Beautifully designed for festive days, family functions, and comfortable daily wear with soft fabric and elegant finishing.",
    "highlights": [
      "Soft breathable fabric",
      "Rich colour finish",
      "Comfort fit for long wear",
      "Easy wash care",
      "Great for festive and daily use"
    ]
  },
  {
    "id": 2,
    "name": "Chikankari Cotton Kurti",
    "category": "Women Ethnic",
    "price": 399,
    "oldPrice": 699,
    "rating": 4.2,
    "reviews": 566,
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Chikankari Cotton Kurti – Beautifully designed for festive days, family functions, and comfortable daily wear with soft fabric and elegant finishing.",
    "highlights": [
      "Soft breathable fabric",
      "Rich colour finish",
      "Comfort fit for long wear",
      "Easy wash care",
      "Great for festive and daily use"
    ]
  },
  {
    "id": 3,
    "name": "Festive Anarkali Suit Set",
    "category": "Women Ethnic",
    "price": 999,
    "oldPrice": 1599,
    "rating": 4.3,
    "reviews": 639,
    "badge": "TRENDING",
    "image": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Festive Anarkali Suit Set – Beautifully designed for festive days, family functions, and comfortable daily wear with soft fabric and elegant finishing.",
    "highlights": [
      "Soft breathable fabric",
      "Rich colour finish",
      "Comfort fit for long wear",
      "Easy wash care",
      "Great for festive and daily use"
    ]
  },
  {
    "id": 4,
    "name": "Printed Palazzo Co-ord Set",
    "category": "Women Ethnic",
    "price": 649,
    "oldPrice": 1099,
    "rating": 4.5,
    "reviews": 712,
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Printed Palazzo Co-ord Set – Beautifully designed for festive days, family functions, and comfortable daily wear with soft fabric and elegant finishing.",
    "highlights": [
      "Soft breathable fabric",
      "Rich colour finish",
      "Comfort fit for long wear",
      "Easy wash care",
      "Great for festive and daily use"
    ]
  },
  {
    "id": 5,
    "name": "Traditional Embroidered Dupatta",
    "category": "Women Ethnic",
    "price": 299,
    "oldPrice": 499,
    "rating": 4.6,
    "reviews": 785,
    "badge": null,
    "image": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733981-b1e57b27fd19?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Traditional Embroidered Dupatta – Beautifully designed for festive days, family functions, and comfortable daily wear with soft fabric and elegant finishing.",
    "highlights": [
      "Soft breathable fabric",
      "Rich colour finish",
      "Comfort fit for long wear",
      "Easy wash care",
      "Great for festive and daily use"
    ]
  },
  {
    "id": 6,
    "name": "Ribbed Bodycon Midi Dress",
    "category": "Women Western",
    "price": 899,
    "oldPrice": 1499,
    "rating": 4.0,
    "reviews": 858,
    "badge": "TRENDING",
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Ribbed Bodycon Midi Dress – Modern everyday fashion with flattering fits, comfortable fabric, and clean styling that works from day to night.",
    "highlights": [
      "Stylish modern fit",
      "Soft stretchable fabric",
      "Easy to style",
      "Comfortable all-day wear",
      "Premium stitched finish"
    ]
  },
  {
    "id": 7,
    "name": "Oversized Denim Jacket",
    "category": "Women Western",
    "price": 1199,
    "oldPrice": 1899,
    "rating": 4.2,
    "reviews": 931,
    "badge": "TOP RATED",
    "image": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Oversized Denim Jacket – Modern everyday fashion with flattering fits, comfortable fabric, and clean styling that works from day to night.",
    "highlights": [
      "Stylish modern fit",
      "Soft stretchable fabric",
      "Easy to style",
      "Comfortable all-day wear",
      "Premium stitched finish"
    ]
  },
  {
    "id": 8,
    "name": "High Waist Wide Leg Jeans",
    "category": "Women Western",
    "price": 999,
    "oldPrice": 1599,
    "rating": 4.3,
    "reviews": 1004,
    "badge": null,
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "High Waist Wide Leg Jeans – Modern everyday fashion with flattering fits, comfortable fabric, and clean styling that works from day to night.",
    "highlights": [
      "Stylish modern fit",
      "Soft stretchable fabric",
      "Easy to style",
      "Comfortable all-day wear",
      "Premium stitched finish"
    ]
  },
  {
    "id": 9,
    "name": "Pastel Summer Crop Top",
    "category": "Women Western",
    "price": 349,
    "oldPrice": 599,
    "rating": 4.5,
    "reviews": 1077,
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Pastel Summer Crop Top – Modern everyday fashion with flattering fits, comfortable fabric, and clean styling that works from day to night.",
    "highlights": [
      "Stylish modern fit",
      "Soft stretchable fabric",
      "Easy to style",
      "Comfortable all-day wear",
      "Premium stitched finish"
    ]
  },
  {
    "id": 10,
    "name": "Pleated Casual Midi Skirt",
    "category": "Women Western",
    "price": 699,
    "oldPrice": 1099,
    "rating": 4.6,
    "reviews": 1150,
    "badge": null,
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Pleated Casual Midi Skirt – Modern everyday fashion with flattering fits, comfortable fabric, and clean styling that works from day to night.",
    "highlights": [
      "Stylish modern fit",
      "Soft stretchable fabric",
      "Easy to style",
      "Comfortable all-day wear",
      "Premium stitched finish"
    ]
  },
  {
    "id": 11,
    "name": "Oversized Cotton Graphic Tee",
    "category": "Men Fashion",
    "price": 549,
    "oldPrice": 899,
    "rating": 4.0,
    "reviews": 1223,
    "badge": null,
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Oversized Cotton Graphic Tee – Built for daily comfort with a modern cut, premium feel, and easy styling for casual outings and college wear.",
    "highlights": [
      "Comfortable regular fit",
      "Breathable fabric",
      "Durable stitching",
      "Easy wash care",
      "Everyday styling essential"
    ]
  },
  {
    "id": 12,
    "name": "Slim Fit Chino Pants",
    "category": "Men Fashion",
    "price": 799,
    "oldPrice": 1299,
    "rating": 4.2,
    "reviews": 1296,
    "badge": null,
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Slim Fit Chino Pants – Built for daily comfort with a modern cut, premium feel, and easy styling for casual outings and college wear.",
    "highlights": [
      "Comfortable regular fit",
      "Breathable fabric",
      "Durable stitching",
      "Easy wash care",
      "Everyday styling essential"
    ]
  },
  {
    "id": 13,
    "name": "Checked Casual Shirt",
    "category": "Men Fashion",
    "price": 699,
    "oldPrice": 1199,
    "rating": 4.3,
    "reviews": 1369,
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Checked Casual Shirt – Built for daily comfort with a modern cut, premium feel, and easy styling for casual outings and college wear.",
    "highlights": [
      "Comfortable regular fit",
      "Breathable fabric",
      "Durable stitching",
      "Easy wash care",
      "Everyday styling essential"
    ]
  },
  {
    "id": 14,
    "name": "Athleisure Jogger Pants",
    "category": "Men Fashion",
    "price": 749,
    "oldPrice": 1249,
    "rating": 4.5,
    "reviews": 1442,
    "badge": "TRENDING",
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Athleisure Jogger Pants – Built for daily comfort with a modern cut, premium feel, and easy styling for casual outings and college wear.",
    "highlights": [
      "Comfortable regular fit",
      "Breathable fabric",
      "Durable stitching",
      "Easy wash care",
      "Everyday styling essential"
    ]
  },
  {
    "id": 15,
    "name": "Classic Polo T-Shirt",
    "category": "Men Fashion",
    "price": 599,
    "oldPrice": 999,
    "rating": 4.6,
    "reviews": 1515,
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Classic Polo T-Shirt – Built for daily comfort with a modern cut, premium feel, and easy styling for casual outings and college wear.",
    "highlights": [
      "Comfortable regular fit",
      "Breathable fabric",
      "Durable stitching",
      "Easy wash care",
      "Everyday styling essential"
    ]
  },
  {
    "id": 16,
    "name": "Matte Lipstick Set - 6 Shades",
    "category": "Beauty",
    "price": 299,
    "oldPrice": 549,
    "rating": 4.0,
    "reviews": 1588,
    "badge": "TOP RATED",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583241800698-e8ab01830b07?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Matte Lipstick Set - 6 Shades – A reliable beauty essential with skin-friendly ingredients, strong performance, and a smooth finish for everyday glam.",
    "highlights": [
      "Skin-friendly formula",
      "Long lasting use",
      "Smooth finish",
      "Travel friendly pack",
      "Daily use essential"
    ]
  },
  {
    "id": 17,
    "name": "Glow Boost Vitamin C Serum",
    "category": "Beauty",
    "price": 549,
    "oldPrice": 899,
    "rating": 4.2,
    "reviews": 1661,
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583241800698-e8ab01830b07?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Glow Boost Vitamin C Serum – A reliable beauty essential with skin-friendly ingredients, strong performance, and a smooth finish for everyday glam.",
    "highlights": [
      "Skin-friendly formula",
      "Long lasting use",
      "Smooth finish",
      "Travel friendly pack",
      "Daily use essential"
    ]
  },
  {
    "id": 18,
    "name": "Waterproof Kajal Combo Pack",
    "category": "Beauty",
    "price": 249,
    "oldPrice": 399,
    "rating": 4.3,
    "reviews": 1734,
    "badge": null,
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Waterproof Kajal Combo Pack – A reliable beauty essential with skin-friendly ingredients, strong performance, and a smooth finish for everyday glam.",
    "highlights": [
      "Skin-friendly formula",
      "Long lasting use",
      "Smooth finish",
      "Travel friendly pack",
      "Daily use essential"
    ]
  },
  {
    "id": 19,
    "name": "Compact Makeup Kit Pro",
    "category": "Beauty",
    "price": 1199,
    "oldPrice": 1799,
    "rating": 4.5,
    "reviews": 1807,
    "badge": "TRENDING",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Compact Makeup Kit Pro – A reliable beauty essential with skin-friendly ingredients, strong performance, and a smooth finish for everyday glam.",
    "highlights": [
      "Skin-friendly formula",
      "Long lasting use",
      "Smooth finish",
      "Travel friendly pack",
      "Daily use essential"
    ]
  },
  {
    "id": 20,
    "name": "Hydrating Sheet Mask Pack",
    "category": "Beauty",
    "price": 199,
    "oldPrice": 349,
    "rating": 4.6,
    "reviews": 1880,
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Hydrating Sheet Mask Pack – A reliable beauty essential with skin-friendly ingredients, strong performance, and a smooth finish for everyday glam.",
    "highlights": [
      "Skin-friendly formula",
      "Long lasting use",
      "Smooth finish",
      "Travel friendly pack",
      "Daily use essential"
    ]
  },
  {
    "id": 21,
    "name": "Structured Tote Handbag",
    "category": "Accessories",
    "price": 599,
    "oldPrice": 999,
    "rating": 4.0,
    "reviews": 1953,
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Structured Tote Handbag – Stylish and practical design with premium detailing, good storage or fit, and everyday versatility.",
    "highlights": [
      "Premium look and feel",
      "Lightweight design",
      "Daily utility friendly",
      "Strong hardware finish",
      "Easy to carry"
    ]
  },
  {
    "id": 22,
    "name": "Sequin Party Clutch Bag",
    "category": "Accessories",
    "price": 1399,
    "oldPrice": 1999,
    "rating": 4.2,
    "reviews": 2026,
    "badge": "TRENDING",
    "image": "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Sequin Party Clutch Bag – Stylish and practical design with premium detailing, good storage or fit, and everyday versatility.",
    "highlights": [
      "Premium look and feel",
      "Lightweight design",
      "Daily utility friendly",
      "Strong hardware finish",
      "Easy to carry"
    ]
  },
  {
    "id": 23,
    "name": "Minimal Analog Wrist Watch",
    "category": "Accessories",
    "price": 999,
    "oldPrice": 1499,
    "rating": 4.3,
    "reviews": 2099,
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Minimal Analog Wrist Watch – Stylish and practical design with premium detailing, good storage or fit, and everyday versatility.",
    "highlights": [
      "Premium look and feel",
      "Lightweight design",
      "Daily utility friendly",
      "Strong hardware finish",
      "Easy to carry"
    ]
  },
  {
    "id": 24,
    "name": "UV Protection Sunglasses",
    "category": "Accessories",
    "price": 399,
    "oldPrice": 699,
    "rating": 4.5,
    "reviews": 2172,
    "badge": null,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "UV Protection Sunglasses – Stylish and practical design with premium detailing, good storage or fit, and everyday versatility.",
    "highlights": [
      "Premium look and feel",
      "Lightweight design",
      "Daily utility friendly",
      "Strong hardware finish",
      "Easy to carry"
    ]
  },
  {
    "id": 25,
    "name": "Travel Sling Crossbody Bag",
    "category": "Accessories",
    "price": 549,
    "oldPrice": 899,
    "rating": 4.6,
    "reviews": 2245,
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Travel Sling Crossbody Bag – Stylish and practical design with premium detailing, good storage or fit, and everyday versatility.",
    "highlights": [
      "Premium look and feel",
      "Lightweight design",
      "Daily utility friendly",
      "Strong hardware finish",
      "Easy to carry"
    ]
  },
  {
    "id": 26,
    "name": "Block Heel Sandals",
    "category": "Footwear",
    "price": 799,
    "oldPrice": 1299,
    "rating": 4.0,
    "reviews": 2318,
    "badge": "TRENDING",
    "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Block Heel Sandals – Comfort-focused footwear with a stable sole, durable build, and easy all-day wear for work or outings.",
    "highlights": [
      "Comfort sole support",
      "Anti-slip outsole",
      "Durable build quality",
      "Lightweight wear",
      "True-to-size fit"
    ]
  },
  {
    "id": 27,
    "name": "Casual Running Sneakers",
    "category": "Footwear",
    "price": 1499,
    "oldPrice": 2299,
    "rating": 4.2,
    "reviews": 2391,
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Casual Running Sneakers – Comfort-focused footwear with a stable sole, durable build, and easy all-day wear for work or outings.",
    "highlights": [
      "Comfort sole support",
      "Anti-slip outsole",
      "Durable build quality",
      "Lightweight wear",
      "True-to-size fit"
    ]
  },
  {
    "id": 28,
    "name": "White Everyday Sneakers",
    "category": "Footwear",
    "price": 1299,
    "oldPrice": 1899,
    "rating": 4.3,
    "reviews": 2464,
    "badge": "TOP RATED",
    "image": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "White Everyday Sneakers – Comfort-focused footwear with a stable sole, durable build, and easy all-day wear for work or outings.",
    "highlights": [
      "Comfort sole support",
      "Anti-slip outsole",
      "Durable build quality",
      "Lightweight wear",
      "True-to-size fit"
    ]
  },
  {
    "id": 29,
    "name": "Comfort Slide Sandals",
    "category": "Footwear",
    "price": 499,
    "oldPrice": 799,
    "rating": 4.5,
    "reviews": 2537,
    "badge": null,
    "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Comfort Slide Sandals – Comfort-focused footwear with a stable sole, durable build, and easy all-day wear for work or outings.",
    "highlights": [
      "Comfort sole support",
      "Anti-slip outsole",
      "Durable build quality",
      "Lightweight wear",
      "True-to-size fit"
    ]
  },
  {
    "id": 30,
    "name": "Classic Canvas Shoes",
    "category": "Footwear",
    "price": 899,
    "oldPrice": 1399,
    "rating": 4.6,
    "reviews": 2610,
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Classic Canvas Shoes – Comfort-focused footwear with a stable sole, durable build, and easy all-day wear for work or outings.",
    "highlights": [
      "Comfort sole support",
      "Anti-slip outsole",
      "Durable build quality",
      "Lightweight wear",
      "True-to-size fit"
    ]
  },
  {
    "id": 31,
    "name": "Pearl Drop Earrings",
    "category": "Jewellery",
    "price": 249,
    "oldPrice": 449,
    "rating": 4.0,
    "reviews": 2683,
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Pearl Drop Earrings – Elegant fashion jewellery that adds shine instantly while staying lightweight, stylish, and easy to pair.",
    "highlights": [
      "Lightweight finish",
      "Premium polish look",
      "Party and festive ready",
      "Comfortable to wear",
      "Gift-worthy design"
    ]
  },
  {
    "id": 32,
    "name": "Layered Gold Necklace Set",
    "category": "Jewellery",
    "price": 599,
    "oldPrice": 999,
    "rating": 4.2,
    "reviews": 2756,
    "badge": "TRENDING",
    "image": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Layered Gold Necklace Set – Elegant fashion jewellery that adds shine instantly while staying lightweight, stylish, and easy to pair.",
    "highlights": [
      "Lightweight finish",
      "Premium polish look",
      "Party and festive ready",
      "Comfortable to wear",
      "Gift-worthy design"
    ]
  },
  {
    "id": 33,
    "name": "Rose Gold Bracelet",
    "category": "Jewellery",
    "price": 349,
    "oldPrice": 649,
    "rating": 4.3,
    "reviews": 2829,
    "badge": null,
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Rose Gold Bracelet – Elegant fashion jewellery that adds shine instantly while staying lightweight, stylish, and easy to pair.",
    "highlights": [
      "Lightweight finish",
      "Premium polish look",
      "Party and festive ready",
      "Comfortable to wear",
      "Gift-worthy design"
    ]
  },
  {
    "id": 34,
    "name": "Traditional Jhumka Pair",
    "category": "Jewellery",
    "price": 299,
    "oldPrice": 549,
    "rating": 4.5,
    "reviews": 2902,
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Traditional Jhumka Pair – Elegant fashion jewellery that adds shine instantly while staying lightweight, stylish, and easy to pair.",
    "highlights": [
      "Lightweight finish",
      "Premium polish look",
      "Party and festive ready",
      "Comfortable to wear",
      "Gift-worthy design"
    ]
  },
  {
    "id": 35,
    "name": "Minimal Ring Combo",
    "category": "Jewellery",
    "price": 199,
    "oldPrice": 399,
    "rating": 4.6,
    "reviews": 2975,
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Minimal Ring Combo – Elegant fashion jewellery that adds shine instantly while staying lightweight, stylish, and easy to pair.",
    "highlights": [
      "Lightweight finish",
      "Premium polish look",
      "Party and festive ready",
      "Comfortable to wear",
      "Gift-worthy design"
    ]
  },
  {
    "id": 36,
    "name": "Cotton Bedsheet Set - King Size",
    "category": "Home & Kitchen",
    "price": 899,
    "oldPrice": 1499,
    "rating": 4.0,
    "reviews": 3048,
    "badge": "TRENDING",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Cotton Bedsheet Set - King Size – Useful for daily home living with durable material, clean design, and practical performance you can trust.",
    "highlights": [
      "Durable material",
      "Useful everyday design",
      "Easy to clean",
      "Space-saving or practical build",
      "Value for money"
    ]
  },
  {
    "id": 37,
    "name": "Decorative Cushion Cover Set",
    "category": "Home & Kitchen",
    "price": 399,
    "oldPrice": 699,
    "rating": 4.2,
    "reviews": 3121,
    "badge": null,
    "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Decorative Cushion Cover Set – Useful for daily home living with durable material, clean design, and practical performance you can trust.",
    "highlights": [
      "Durable material",
      "Useful everyday design",
      "Easy to clean",
      "Space-saving or practical build",
      "Value for money"
    ]
  },
  {
    "id": 38,
    "name": "Non-Stick Cookware Combo",
    "category": "Home & Kitchen",
    "price": 1499,
    "oldPrice": 2499,
    "rating": 4.3,
    "reviews": 3194,
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Non-Stick Cookware Combo – Useful for daily home living with durable material, clean design, and practical performance you can trust.",
    "highlights": [
      "Durable material",
      "Useful everyday design",
      "Easy to clean",
      "Space-saving or practical build",
      "Value for money"
    ]
  },
  {
    "id": 39,
    "name": "Ceramic Coffee Mug Set",
    "category": "Home & Kitchen",
    "price": 549,
    "oldPrice": 899,
    "rating": 4.5,
    "reviews": 3267,
    "badge": "TOP RATED",
    "image": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Ceramic Coffee Mug Set – Useful for daily home living with durable material, clean design, and practical performance you can trust.",
    "highlights": [
      "Durable material",
      "Useful everyday design",
      "Easy to clean",
      "Space-saving or practical build",
      "Value for money"
    ]
  },
  {
    "id": 40,
    "name": "Storage Basket Organiser",
    "category": "Home & Kitchen",
    "price": 349,
    "oldPrice": 599,
    "rating": 4.6,
    "reviews": 3340,
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Storage Basket Organiser – Useful for daily home living with durable material, clean design, and practical performance you can trust.",
    "highlights": [
      "Durable material",
      "Useful everyday design",
      "Easy to clean",
      "Space-saving or practical build",
      "Value for money"
    ]
  },
  {
    "id": 41,
    "name": "Kids Cartoon Night Suit",
    "category": "Kids Wear",
    "price": 499,
    "oldPrice": 799,
    "rating": 4.0,
    "reviews": 3413,
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Kids Cartoon Night Suit – Soft, safe, and playful kidswear made for comfort, movement, and easy everyday use.",
    "highlights": [
      "Soft on skin",
      "Comfort fit",
      "Play-friendly design",
      "Easy wash care",
      "Cute trendy look"
    ]
  },
  {
    "id": 42,
    "name": "Girls Floral Frock Dress",
    "category": "Kids Wear",
    "price": 699,
    "oldPrice": 1099,
    "rating": 4.2,
    "reviews": 3486,
    "badge": "TRENDING",
    "image": "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Girls Floral Frock Dress – Soft, safe, and playful kidswear made for comfort, movement, and easy everyday use.",
    "highlights": [
      "Soft on skin",
      "Comfort fit",
      "Play-friendly design",
      "Easy wash care",
      "Cute trendy look"
    ]
  },
  {
    "id": 43,
    "name": "Boys Printed Hoodie Set",
    "category": "Kids Wear",
    "price": 899,
    "oldPrice": 1399,
    "rating": 4.3,
    "reviews": 3559,
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Boys Printed Hoodie Set – Soft, safe, and playful kidswear made for comfort, movement, and easy everyday use.",
    "highlights": [
      "Soft on skin",
      "Comfort fit",
      "Play-friendly design",
      "Easy wash care",
      "Cute trendy look"
    ]
  },
  {
    "id": 44,
    "name": "Toddler Cotton T-Shirt Pack",
    "category": "Kids Wear",
    "price": 399,
    "oldPrice": 649,
    "rating": 4.5,
    "reviews": 3632,
    "badge": null,
    "image": "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Toddler Cotton T-Shirt Pack – Soft, safe, and playful kidswear made for comfort, movement, and easy everyday use.",
    "highlights": [
      "Soft on skin",
      "Comfort fit",
      "Play-friendly design",
      "Easy wash care",
      "Cute trendy look"
    ]
  },
  {
    "id": 45,
    "name": "Kids Festive Kurta Set",
    "category": "Kids Wear",
    "price": 799,
    "oldPrice": 1299,
    "rating": 4.6,
    "reviews": 3705,
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Kids Festive Kurta Set – Soft, safe, and playful kidswear made for comfort, movement, and easy everyday use.",
    "highlights": [
      "Soft on skin",
      "Comfort fit",
      "Play-friendly design",
      "Easy wash care",
      "Cute trendy look"
    ]
  },
  {
    "id": 46,
    "name": "Wireless Bluetooth Earbuds",
    "category": "Electronics",
    "price": 1299,
    "oldPrice": 1999,
    "rating": 4.0,
    "reviews": 3778,
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Wireless Bluetooth Earbuds – A smart gadget pick with practical features, dependable performance, and a sleek everyday-ready design.",
    "highlights": [
      "Reliable performance",
      "Modern compact design",
      "Easy to use",
      "Travel friendly",
      "Great value feature set"
    ]
  },
  {
    "id": 47,
    "name": "Fast Charging Power Bank",
    "category": "Electronics",
    "price": 999,
    "oldPrice": 1499,
    "rating": 4.2,
    "reviews": 3851,
    "badge": "TRENDING",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Fast Charging Power Bank – A smart gadget pick with practical features, dependable performance, and a sleek everyday-ready design.",
    "highlights": [
      "Reliable performance",
      "Modern compact design",
      "Easy to use",
      "Travel friendly",
      "Great value feature set"
    ]
  },
  {
    "id": 48,
    "name": "Smart Watch Fitness Tracker",
    "category": "Electronics",
    "price": 1799,
    "oldPrice": 2699,
    "rating": 4.3,
    "reviews": 3924,
    "badge": "TOP RATED",
    "image": "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Smart Watch Fitness Tracker – A smart gadget pick with practical features, dependable performance, and a sleek everyday-ready design.",
    "highlights": [
      "Reliable performance",
      "Modern compact design",
      "Easy to use",
      "Travel friendly",
      "Great value feature set"
    ]
  },
  {
    "id": 49,
    "name": "Portable Bluetooth Speaker",
    "category": "Electronics",
    "price": 1499,
    "oldPrice": 2299,
    "rating": 4.5,
    "reviews": 3997,
    "badge": null,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Portable Bluetooth Speaker – A smart gadget pick with practical features, dependable performance, and a sleek everyday-ready design.",
    "highlights": [
      "Reliable performance",
      "Modern compact design",
      "Easy to use",
      "Travel friendly",
      "Great value feature set"
    ]
  },
  {
    "id": 50,
    "name": "Phone Tripod with Remote",
    "category": "Electronics",
    "price": 699,
    "oldPrice": 1099,
    "rating": 4.6,
    "reviews": 4070,
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=900&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=900&auto=format&fit=crop"
    ],
    "description": "Phone Tripod with Remote – A smart gadget pick with practical features, dependable performance, and a sleek everyday-ready design.",
    "highlights": [
      "Reliable performance",
      "Modern compact design",
      "Easy to use",
      "Travel friendly",
      "Great value feature set"
    ]
  }
];

const CATEGORIES = [
  {
    "id": "women-ethnic",
    "name": "Women Ethnic",
    "icon": "👗",
    "image": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop",
    "count": 5
  },
  {
    "id": "women-western",
    "name": "Women Western",
    "icon": "👚",
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900&auto=format&fit=crop",
    "count": 5
  },
  {
    "id": "men-fashion",
    "name": "Men Fashion",
    "icon": "👔",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop",
    "count": 5
  },
  {
    "id": "beauty",
    "name": "Beauty",
    "icon": "💄",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=900&auto=format&fit=crop",
    "count": 5
  },
  {
    "id": "accessories",
    "name": "Accessories",
    "icon": "👜",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=900&auto=format&fit=crop",
    "count": 5
  },
  {
    "id": "footwear",
    "name": "Footwear",
    "icon": "👡",
    "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=900&auto=format&fit=crop",
    "count": 5
  },
  {
    "id": "jewellery",
    "name": "Jewellery",
    "icon": "💍",
    "image": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop",
    "count": 5
  },
  {
    "id": "home-and-kitchen",
    "name": "Home & Kitchen",
    "icon": "🏠",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=900&auto=format&fit=crop",
    "count": 5
  },
  {
    "id": "kids-wear",
    "name": "Kids Wear",
    "icon": "🧒",
    "image": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=900&auto=format&fit=crop",
    "count": 5
  },
  {
    "id": "electronics",
    "name": "Electronics",
    "icon": "📱",
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=900&auto=format&fit=crop",
    "count": 5
  }
];

// ===== CART UTILITIES =====
function getCart() { return JSON.parse(localStorage.getItem('ms_cart') || '[]'); }
function saveCart(cart) { localStorage.setItem('ms_cart', JSON.stringify(cart)); updateCartBadge(); }
function getCartCount() { return getCart().reduce((sum, i) => sum + i.qty, 0); }

function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === productId);
  if (existing) { existing.qty += qty; } else { cart.push({ ...product, qty }); }
  saveCart(cart);
  showToast('Added to cart! 🛒', 'success');
}

function removeFromCart(productId) {
  const cart = getCart().filter(i => i.id !== productId);
  saveCart(cart);
}

function updateCartQty(productId, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) { item.qty = qty; if (item.qty <= 0) removeFromCart(productId); else saveCart(cart); }
}

// ===== WISHLIST UTILITIES =====
function getWishlist() { return JSON.parse(localStorage.getItem('ms_wishlist') || '[]'); }
function saveWishlist(wl) { localStorage.setItem('ms_wishlist', JSON.stringify(wl)); updateWishBadge(); }

function toggleWishlist(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const wl = getWishlist();
  const idx = wl.findIndex(i => i.id === productId);
  if (idx === -1) { wl.push(product); saveWishlist(wl); showToast('Added to wishlist ❤️', 'success'); return true; }
  else { wl.splice(idx, 1); saveWishlist(wl); showToast('Removed from wishlist', ''); return false; }
}

function isWishlisted(productId) { return getWishlist().some(i => i.id === productId); }

// ===== AUTH UTILITIES =====
function getUser() { return JSON.parse(localStorage.getItem('ms_user') || 'null'); }
function saveUser(user) { localStorage.setItem('ms_user', JSON.stringify(user)); }
function isLoggedIn() { return !!getUser(); }
function logout() { localStorage.removeItem('ms_user'); window.location.href = 'signin.html'; }

// ===== ORDERS UTILITIES =====
function getOrders() { return JSON.parse(localStorage.getItem('ms_orders') || '[]'); }
function saveOrder(order) {
  const orders = getOrders();
  order.id = 'ORD' + Date.now();
  order.date = new Date().toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
  order.status = 'Confirmed';
  orders.unshift(order);
  localStorage.setItem('ms_orders', JSON.stringify(orders));
  return order;
}

// ===== TOAST =====
function showToast(msg, type = '') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.innerHTML = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ===== BADGE UPDATES =====
function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(el => { el.textContent = count; el.style.display = count > 0 ? 'flex' : 'none'; });
}

function updateWishBadge() {
  const count = getWishlist().length;
  document.querySelectorAll('.wish-badge').forEach(el => { el.textContent = count; el.style.display = count > 0 ? 'flex' : 'none'; });
}

// ===== DISCOUNT CALC =====
function calcDiscount(price, oldPrice) { return Math.round(((oldPrice - price) / oldPrice) * 100); }

// ===== STARS =====
function starsHtml(rating) {
  const full = Math.floor(rating);
  return `<span class="stars">${'★'.repeat(full)}${'☆'.repeat(5-full)}</span>`;
}

function renderCategoryFilters() {
  const container = document.getElementById('categoryFilters');
  if (!container) return;
  container.innerHTML = `<label class="filter-check"><input type="radio" name="cat" value="all" checked> All Categories</label>` +
    CATEGORIES.map(cat => `<label class="filter-check"><input type="radio" name="cat" value="${cat.name}"> ${cat.name}</label>`).join('');
}

// ===== NAV HTML =====
const NAV_HTML = `
<div class="top-bar">
  <div class="container top-bar-content">
    <span>Free Delivery on 1st Order</span>
    <span>Easy 7-Day Returns</span>
    <span>Cash on Delivery Available</span>
  </div>
</div>
<header class="header" id="mainHeader">
  <div class="container navbar">
    <div class="logo"><a href="index.html">Mee<span>Shop</span></a></div>
    <div class="search-box">
      <input type="text" id="searchInput" placeholder="Search sarees, kurtis, beauty, bags…">
      <button id="searchBtn">Search</button>
    </div>
    <nav class="nav-links">
      <a href="index.html">Home</a>
      <a href="categories.html">Categories</a>
      <a href="products.html">Products</a>
      <a href="orders.html">Orders</a>
    </nav>
    <div class="nav-icons">
      <a href="wishlist.html" class="nav-icon-btn">
        <svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        Wishlist
        <span class="nav-badge wish-badge" style="display:none">0</span>
      </a>
      <a href="cart.html" class="nav-icon-btn">
        <svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
        Cart
        <span class="nav-badge cart-badge" style="display:none">0</span>
      </a>
      <a href="profile.html" class="nav-icon-btn" id="navAuthLink">
        <svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
        <span id="navAuthText">Sign In</span>
      </a>
    </div>
    <button class="menu-toggle" id="menuToggle">☰</button>
  </div>
</header>
<div class="mobile-menu" id="mobileMenu">
  <div class="mobile-menu-panel">
    <div class="mobile-menu-header">
      <span class="logo"><a href="index.html" style="font-size:20px">Mee<span>Shop</span></a></span>
      <button class="mobile-menu-close" id="menuClose">✕</button>
    </div>
    <a href="index.html" class="mobile-nav-link">🏠 Home</a>
    <a href="categories.html" class="mobile-nav-link">📦 Categories</a>
    <a href="products.html" class="mobile-nav-link">🛍 Products</a>
    <a href="wishlist.html" class="mobile-nav-link">❤️ Wishlist</a>
    <a href="cart.html" class="mobile-nav-link">🛒 Cart</a>
    <a href="orders.html" class="mobile-nav-link">📋 Orders</a>
    <a href="profile.html" class="mobile-nav-link">👤 Profile</a>
    <a href="signin.html" class="mobile-nav-link">🔐 Sign In</a>
  </div>
</div>`;

const BOTTOM_NAV_HTML = `
<nav class="bottom-nav">
  <div class="bottom-nav-items">
    <a href="index.html" class="bottom-nav-item" data-page="home"><svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>Home</a>
    <a href="categories.html" class="bottom-nav-item" data-page="categories"><svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>Categories</a>
    <a href="wishlist.html" class="bottom-nav-item" data-page="wishlist"><svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>Wishlist<span class="bottom-nav-badge wish-badge" style="display:none">0</span></a>
    <a href="cart.html" class="bottom-nav-item" data-page="cart"><svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>Cart<span class="bottom-nav-badge cart-badge" style="display:none">0</span></a>
    <a href="profile.html" class="bottom-nav-item" data-page="profile"><svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>Profile</a>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <span class="logo-text">MeeShop</span>
        <p>A better, cleaner, and more modern shopping experience with 50 real product cards, responsive pages, and a polished buying flow.</p>
        <div class="social-links"><a href="#" class="social-link">f</a><a href="#" class="social-link">in</a><a href="#" class="social-link">tw</a><a href="#" class="social-link">yt</a></div>
      </div>
      <div class="footer-col"><h4>Quick Links</h4><a href="index.html">Home</a><a href="products.html">All Products</a><a href="categories.html">Categories</a><a href="orders.html">My Orders</a><a href="wishlist.html">Wishlist</a></div>
      <div class="footer-col"><h4>Help & Support</h4><a href="#">About Us</a><a href="#">Contact Us</a><a href="#">Return Policy</a><a href="#">Privacy Policy</a><a href="#">Terms & Conditions</a></div>
      <div class="footer-col"><h4>Stay Updated</h4><div class="footer-newsletter"><input type="email" placeholder="Enter your email"><button class="btn btn-primary btn-sm btn-full">Subscribe</button></div></div>
    </div>
  </div>
  <div class="footer-bottom"><div class="container"><p>© 2026 MeeShop – UI/UX Revamp Project. All rights reserved.</p></div></div>
</footer>`;

function initNav(activePage) {
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
  const bottomNavPlaceholder = document.getElementById('bottom-nav-placeholder');
  if (bottomNavPlaceholder) bottomNavPlaceholder.outerHTML = BOTTOM_NAV_HTML;
  if (activePage) {
    document.querySelectorAll('.nav-links a').forEach(a => { if (a.href.includes(activePage)) a.classList.add('active'); });
    document.querySelectorAll('.bottom-nav-item').forEach(a => { if (a.dataset.page === activePage) a.classList.add('active'); });
  }
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuClose = document.getElementById('menuClose');
  if (menuToggle) menuToggle.addEventListener('click', () => mobileMenu.classList.add('open'));
  if (menuClose) menuClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
  if (mobileMenu) mobileMenu.addEventListener('click', e => { if (e.target === mobileMenu) mobileMenu.classList.remove('open'); });
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => { if (header) header.classList.toggle('scrolled', window.scrollY > 20); });
  const user = getUser();
  const navAuthText = document.getElementById('navAuthText');
  const navAuthLink = document.getElementById('navAuthLink');
  if (user && navAuthText) navAuthText.textContent = user.name.split(' ')[0];
  if (user && navAuthLink) navAuthLink.href = 'profile.html';
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');
  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', doSearch);
    searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
  }
  updateCartBadge();
  updateWishBadge();
}

function doSearch() {
  const q = document.getElementById('searchInput').value.trim();
  if (q) window.location.href = `search-results.html?q=${encodeURIComponent(q)}`;
}

function productCardHtml(p, showLink = true) {
  const discount = calcDiscount(p.price, p.oldPrice);
  const wished = isWishlisted(p.id);
  return `
    <div class="product-card">
      <div class="product-card-img">
        ${showLink ? `<a href="product-detail.html?id=${p.id}">` : ''}
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        ${showLink ? '</a>' : ''}
        ${p.badge ? `<span class="product-card-badge">${p.badge}</span>` : ''}
        <button class="product-card-wish ${wished ? 'active' : ''}" onclick="handleWish(${p.id}, this)">♥</button>
      </div>
      <div class="product-card-body">
        <div class="product-card-cat">${p.category}</div>
        <div class="product-card-name">${showLink ? `<a href="product-detail.html?id=${p.id}" style="text-decoration:none;color:inherit">${p.name}</a>` : p.name}</div>
        <div class="product-card-rating">${starsHtml(p.rating)}<span class="rating-count">(${p.reviews.toLocaleString()})</span></div>
        <div class="product-card-price"><span class="price-now">₹${p.price.toLocaleString()}</span><span class="price-old">₹${p.oldPrice.toLocaleString()}</span><span class="price-off">${discount}% off</span></div>
        <button class="product-card-btn" onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    </div>`;
}

function handleWish(id, btn) {
  const added = toggleWishlist(id);
  btn.classList.toggle('active', added);
}
