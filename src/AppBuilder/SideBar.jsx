import styled from "styled-components";

const SideBar = ({
  categories,
  features,
  setSelectedCat,
  selectedCat,
  setFeature,
  feature,
}) => {
  return (
    <Container>
      <SearchAndFilter>
      <h2>Category</h2>
        {/* <SearchBar>
          <input type="text" placeholder="Search" />
        </SearchBar> */}
        <CategoryFilter>
          <select
            value={selectedCat}
            onChange={(e) => setSelectedCat(e.target.value)}
          >
            {categories.map((category) => {
              return (
                <option key={category._id} value={category._id}>
                  {category.icon}{category.name}
                </option>
              );
            })}
          </select>
        </CategoryFilter>
      </SearchAndFilter>
      <Features>
        <h2>Features</h2>
        <FeaturesList>
          {features.map((feature) => {
            return (
              <FeaturesListItem
                key={feature._id}
                onClick={() => setFeature(feature)}
              >
                <span>{feature.name}</span>
                <img src={feature.icon} alt="None" />
              </FeaturesListItem>
            );
          })}
        </FeaturesList>
      </Features>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  /* width: 360px; */
  border-right: 1px solid gray;
  padding: 1rem;
  overflow-y: scroll;
`;
const SearchAndFilter = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
`;
const SearchBar = styled.div`
  input{
    padding: 1rem;
  }
`;
const CategoryFilter = styled.div`
  select {
    padding: 1rem;
  }
`;
const Features = styled.div``;
const FeaturesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 0.5rem;
`;
const FeaturesListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  /* background-color: gray; */
  cursor: pointer;
  img{
    width:1.6rem;
    height: 1.6rem;
  }
  :hover{
    opacity: 0.8;
  }
`;
