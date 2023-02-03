import { useState } from "react";
import styled from "styled-components";

// {
//   "feature_screenshots": {
//       "ios": "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_ios_image/59fd16f188f3ac61106b37b6/Product_20quickview.png",
//       "web": "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_web_image/59fd16f188f3ac61106b37b6/Product_20quickview.png",
//       "android": "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd16f188f3ac61106b37b6/Product_20quickview.png"
//   },
//   "_id": "63dc92d46a7d2c83a414127a",
//   "name": "Product Quickview",
//   "weeks": 0.54,
//   "description": "A clickable or scrollable gallery of smaller product images under a main image. Users can click on their preferred image immediately.",
//   "difficulty": 1,
//   "algorithm": "none",
//   "effective_cost": 900,
//   "effective_weeks": 1,
//   "category": "63dc8205e97c2ff10ad4cabb",
//   "category_name": "Ecommerce",
//   "complexity": "beginner",
//   "feature_weeks": 0.54,
//   "price": 320.34,
//   "feature_price": 2625,
//   "icon": "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd16f188f3ac61106b37b6/Product_20Quickview.png",
//   "createdAt": "2023-02-03T04:51:32.654Z",
//   "updatedAt": "2023-02-03T04:51:32.654Z",
//   "__v": 0
// }

const FeatureArea = ({ feature }) => {
  const [imgSelector, setImgSelector] = useState("ios");
  return (
    <Container>
      {feature ? (
        <>
          <InfoCard>
            <Title>
              <img src={feature.icon} alt="" />
              <div className="text">{feature.name}</div>
            </Title>

            <div className="description">
              <h3>Description</h3>
              {feature.description}
            </div>
            <div className="complexity">Complexity: {feature.complexity}</div>
            <div className="price">Price: {feature.price}</div>
            <div className="duration">Duration: {feature.weeks}Weeks</div>
          </InfoCard>
          <ImgArea>
            <ButtonGroup>
              <Selector onClick={() => setImgSelector("ios")}>IOS</Selector>
              <Selector onClick={() => setImgSelector("android")}>
                Android
              </Selector>
              <Selector onClick={() => setImgSelector("web")}>Web</Selector>
            </ButtonGroup>
            <ImgContainer>
              <img src={feature.feature_screenshots[imgSelector]} alt="" />
            </ImgContainer>
          </ImgArea>
        </>
      ) : (
        <h1>Please Select Feature</h1>
      )}
    </Container>
  );
};

export default FeatureArea;

const Container = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  /* border: 1px solid black; */
  width: 100%;
  /* height: 100%; */
  /* align-items: center; */
  /* flex-direction: column; */
`;
const InfoCard = styled.div`
  /* border: 1px solid black; */
  /* height: 100%; */
  padding: 200px 20px;
  flex: 1;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* justify-content: space-evenly; */
  /* align-items: center; */
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  img {
    width: 2rem;
    height: 2rem;
  }
  .text {
    font-size: 2rem;
    font-weight: bold;
  }
`;
const ImgArea = styled.div`
  /* border: 1px solid black; */
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  img {
    height: 540px;
  }
`;
const ImgContainer = styled.div``;
const ButtonGroup = styled.div``;
const Selector = styled.button``;
