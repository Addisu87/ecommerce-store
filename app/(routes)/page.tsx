import getBillboard from "@/actions/get-billboard";
import Container from "../components/ui/container";
import Billboard from "../components/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "../components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("5330676a-e22d-4cff-af55-360579149a23");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      {/* Billboard */}
      <div className="space-y-8 bp-8">
        <Billboard data={billboard} />
      </div>

      {/* Products */}
      <div>
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
