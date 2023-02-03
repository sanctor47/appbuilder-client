import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCategories, getFeatures } from "./appbuilder.helpers";
import FeatureArea from "./FeatureArea";
import SideBar from "./SideBar";

const AppBuilder = () => {
  const [feature, setFeature] = useState();
  const [features, setFeatures] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState();

  useEffect(() => {
    getCategories()
      .then((categories) => {
        console.log(categories);
        setCategories(categories);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCat(categories[2]._id);
    }
  }, [categories]);

  useEffect(() => {
    console.log("Selected: ", selectedCat, typeof selectedCat);
    getFeatures(1, 70, selectedCat)
      .then((features) => {
        console.log(features);
        setFeatures(features);
      })
      .catch((err) => console.error(err));
  }, [selectedCat]);

  return (
    <Container>
      <SideBar
        categories={categories}
        features={features}
        setSelectedCat={setSelectedCat}
        selectedCat={selectedCat}
        setFeature={setFeature}
        feature={feature}
      />
      <FeatureArea feature={feature} />
    </Container>
  );
};

export default AppBuilder;

const Container = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  gap: 1rem;
  height: 100vh;
`;
