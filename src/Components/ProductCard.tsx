import { useState } from "react";
import type { Product } from "../Types/Product";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../Reduxs/store";
import { Button } from "../../@/components/ui/button";
import { Card, CardContent } from "../../@/components/ui/card";
import { toast } from "sonner";
import { Badge } from "../../@/components/ui/badge";
import { useProduct } from "@/Hooks/useProduct";

type ProductCartType = {
  items: Product[] | null | undefined;
  error: Error | null;
  cartBtn: boolean;
  badgeState?: boolean;
  badge?: string | null;
};

const ProductCard = ({
  items,
  error: err,
  cartBtn,
  badgeState,
  badge,
}: ProductCartType) => {
  const [addedProductId, setAddedProductId] = useState<number | null>(null);
  const user = useSelector((state: RootState) => state.auth.user);

  const { mutate, error, isPending } = useProduct();

  const handleAddCart = async (item: Product) => {
    mutate(item);

    if (isPending) {
      return <p>isPending ....</p>;
    }

    if (error) {
      return <p>{error.message}</p>;
    }
  };
  return (
    <>
      {items?.map((item) => (
        <Card
          key={item.id}
          className="basis-xs md:basis-[30%] lg:basis-[20%] gap-2  border border-[#8B5CF6] duration-300 hover:translate-y-[-10px]"
        >
          <CardContent>
            {badgeState && <Badge>{badge}</Badge>}
            <img
              src={item.image}
              alt={item.name}
              className="w-[150px] h-[150px] object-cover"
            />
            <h3 className="text-2xl text-zinc-100">{item.name}</h3>
            <p>{item.price}</p>
            <div className="flex flex-col gap-2 justify-center items-center">
              {cartBtn && (
                <>
                  <Button
                    className="w-[160px] hover:bg-[#A855F7] duration-600 hover:text-zinc-950 cursor-pointer"
                    onClick={() => {
                      handleAddCart(item);
                      setAddedProductId(item.id);
                      setTimeout(() => {
                        setAddedProductId(null);
                      }, 2000);
                    }}
                  >
                    {" "}
                    Add to Cart
                  </Button>
                  {user &&
                    addedProductId === item.id &&
                    toast.success("Product added to cart!")}
                  {!user &&
                    addedProductId === item.id &&
                    toast.error(
                      "Some things went wrong | Please sign in first.",
                    )}
                </>
              )}
              <Link to={`/productdetail/${item.id}`}>
                <Button className="w-[160px] bg-[#A855F7] cursor-pointer">
                  See details
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}

      {err && <p>{err.message}</p>}
    </>
  );
};

export default ProductCard;
