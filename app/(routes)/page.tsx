import Container from "@/app/components/ui/container";
import getBillboard from "@/actions/get-billboard";
import Billboard from "@/app/components/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/app/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("46611b40-a2df-4285-ab6b-0f77a90b6947");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      {/* Billboard */}
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        {/* Products */}
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
