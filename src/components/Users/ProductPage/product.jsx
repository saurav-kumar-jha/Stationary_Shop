import React, { useEffect, useState } from "react";
import { Search, Filter, ShoppingCart, ChevronDown, MoreHorizontal, Star, } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useParams } from "react-router-dom";
// import { motion } from "framer-motion";

// const navigate = useNavigate()

const PRODUCTS = [
    {
        id: 1,
        name: "A4 Notebook",
        price: 120,
        category: "School",
        image:
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=60",
    },
    {
        id: 2,
        name: "Gel Pen Pack (Pack of 6)",
        price: 90,
        category: "Office",
        image:
            "/images/gel_pen.webp",
    },
    {
        id: 3,
        name: "Sticky Notes (Pack of 6)",
        price: 60,
        category: "Student",
        image:
            "/images/stick.webp",
    },
    {
        id: 4,
        name: "Wooden Study Table",
        price: 5499,
        category: "Furniture",
        image:
            "/images/wooden_study_table.webp",
    },
    {
        id: 5,
        name: "Gift Wrapping Paper",
        price: 35,
        category: "Gifting",
        image:
            "/images/gift_wrapping.webp",
    },
    {
        id: 6,
        name: "A5 Notebook",
        price: 140,
        category: "School",
        image:
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=60",
    },
];

const CATEGORIES = [
    "All",
    "School",
    "Student",
    "Office",
    "Furniture",
    "Gifting",
];

function CategoryFilter({ value, onChange }) {
    return (
        <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
                <Button
                    key={cat}
                    variant={value === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => onChange(cat)}
                    className="rounded-full text-xs"
                >
                    {cat}
                </Button>
            ))}
        </div>
    );
}

function SortBy({ value, onChange }) {
    return (
        <div className="inline-flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <Button
                variant="outline"
                size="sm"
                onClick={() => onChange(value === "asc" ? "desc" : "asc")}
                className="gap-1"
            >
                Price {value === "asc" ? <ChevronDown className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 rotate-180" />}
            </Button>
        </div>
    );
}



function ProductCard({ product, onClick }) {
    return (
        <Card className="cursor-pointer py-0 " onClick={onClick}>
            <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover rounded-t-2xl"
            />
            <CardContent className="p-4 space-y-1 h-[108px] ">
                <h3 className="font-medium text-gray-800 truncate">{product.name}</h3>
                <p className="text-primary font-semibold">₹{product.price}</p>
            </CardContent>
        </Card>
    );
}

export function ProductListingPage({ onSelectProduct }) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("asc");
    const [visibleCount, setVisibleCount] = useState(6);
    const navigate = useNavigate()

    const filtered = PRODUCTS.filter((p) => {
        const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
        const matchesCat = category === "All" || p.category === category;
        return matchesSearch && matchesCat;
    }).sort((a, b) => (sort === "asc" ? a.price - b.price : b.price - a.price));

    const handlesingleProduct = (prod) => {

        navigate(`/products/${prod.id}`)
    }

    return (
        <div className="max-w-6xl mx-auto p-4" id="products">
            {/* Header Bar */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                {/* Search */}
                <div className="relative w-full md:w-1/3">
                    <Input
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-10"
                    />
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
                {/* Filters & Sort */}
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <CategoryFilter value={category} onChange={setCategory} />
                    <SortBy value={sort} onChange={setSort} />
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.slice(0, visibleCount).map((product) => (
                    <div key={product.id} >
                        <ProductCard product={product} onClick={() => handlesingleProduct(product)} />
                    </div>
                ))}
                {filtered.length > visibleCount && (
                    <Button
                        variant="outline"
                        className="h-40 flex-col gap-2"
                        onClick={() => setVisibleCount((c) => c + 3)}
                    >
                        <MoreHorizontal className="w-6 h-6" />
                        Show more
                    </Button>
                )}
            </div>
        </div>
    );
}


export function SingleProductPage() {
    const { id } = useParams()
    const prodId = parseInt(id)
    const [product, setproduct] = useState([])
    const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const navigate = useNavigate()
  
    useEffect(()=>{
      const found = PRODUCTS.find((item)=> item.id === prodId)
      setproduct(found)
    },[prodId])

    const handlesingleProduct = (prod) => {
        console.log(prod)
        navigate(`/products/${prod.id}`)
    }

    const handleBack = ()=>{
        navigate(-1)
    }



    const addComment = () => {
      if (!comment.trim()) return;
      setComments([{ id: Date.now(), text: comment }, ...comments]);
      setComment("");
    };


    if(!product) return <p>Loading....</p>
  
    return (
      <div className="max-w-5xl mx-auto p-4 space-y-8">
        <Button variant="outline" onClick={handleBack} className="mb-4">Back to Products</Button>
  
        {/* Product Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <img src={product.image} alt={product.name} className="w-full rounded-2xl object-cover" />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-2xl text-primary flex items-center font-semibold">₹{product.price}&nbsp;<span className="text-[10px] text-zinc-600 ">with COD</span> </p>
  
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, officia.
            </p>
  
            <div className="flex gap-2">
              <Button className="flex-1 gap-2">
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </Button>
              <Button variant="secondary" className="flex-1">Buy Now</Button>
            </div>
          </div>
        </div>
  
        {/* Comments */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Comments</h3>
          <div className="flex gap-2">
            <Textarea
              placeholder="Write your comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="flex-1"
            />
            <Button onClick={addComment}>Post</Button>
          </div>
          <ul className="space-y-2">
            {comments.map((c) => (
              <li key={c.id} className="bg-gray-100 rounded-lg p-3 text-sm text-gray-700">
                {c.text}
              </li>
            ))}
            {!comments.length && <p className="text-gray-500 text-sm">No comments yet.</p>}
          </ul>
        </div>
  
        {/* Related Products */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} onClick={() => handlesingleProduct(p) } />
            ))}
          </div>
        </div>
      </div>
    );
  }
export default function Shop() {
    const [selected, setSelected] = useState(null);

    return selected ? (
        <SingleProductPage product={selected} onBack={() => setSelected(null)} />
    ) : (
        <ProductListingPage onSelectProduct={setSelected} />
    );
}
