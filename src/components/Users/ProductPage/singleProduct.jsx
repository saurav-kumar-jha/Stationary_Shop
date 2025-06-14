import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../ui/button";
import { ShoppingCart } from "lucide-react";
import { Textarea } from "../../ui/textarea";
import { Card, CardContent } from "../../ui/card";

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
      id: 6,
      name: "A5 Notebook",
      price: 140,
      category: "School",
      image:
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=60",
  },
  {
      id: 2,
      name: "Gel Pen Pack",
      price: 90,
      category: "Office",
      image:
          "/images/gel_pen.webp",
  },
  {
      id: 3,
      name: "Sticky Notes",
      price: 60,
      category: "Student",
      image:
          "https://images.unsplash.com/photo-1507924538820-ede94a04019d?auto=format&fit=crop&w=400&q=60",
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
  // ...add more items
];
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

export function SingleProductPage() {
    const { id } = useParams()
    const prodId = parseInt(id)
    const [product, setproduct] = useState([])
    const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
  
    useEffect(()=>{
      const found = PRODUCTS.find((item)=> item.id === prodId)
      setproduct(found)
    },[])

    console.log(product)


    const addComment = () => {
      if (!comment.trim()) return;
      setComments([{ id: Date.now(), text: comment }, ...comments]);
      setComment("");
    };


    if(!product) return <p>Loading....</p>
  
    return (
      <div className="max-w-5xl mx-auto p-4 space-y-8">
        {/* <Button variant="outline" onClick={onBack} className="mb-4">Back to Products</Button> */}
  
        {/* Product Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <img src={product.image} alt={product.name} className="w-full rounded-2xl object-cover" />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-2xl text-primary font-semibold">₹{product.price}/--</p>
  
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
              <ProductCard key={p.id} product={p} onClick={() => onBack(() => onBack())} />
            ))}
          </div>
        </div>
      </div>
    );
  }