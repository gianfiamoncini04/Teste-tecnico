import * as HomeStyles from "./styles"

export const Home = () => {
  return (
    <>
      <HomeStyles.Container>
        <HomeStyles.Button to="/products">GO TO PRODUCTS!</HomeStyles.Button>
      </HomeStyles.Container>
    </>
  );
};
