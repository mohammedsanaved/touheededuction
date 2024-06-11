import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Styles } from "./styles/Features";
import { useDispatch, useSelector } from "react-redux";
import { featureAction } from "../actions/LandingPageActions";

const Features = () => {
  const dispatch = useDispatch();
  const featureList = useSelector((state) => state.featureList);
  const { feature, error, loading } = featureList;
  console.log(featureList, "from featureList");

  useEffect(() => {
    dispatch(featureAction());
  }, [dispatch]);
  const imageData = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1544640808-32ca72ac7f37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Library",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b25saW5lJTIwc3VwcG9ydHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Online Support",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1584750153892-38414eb8e76a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
      title: "Many Locations",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1683325815930-9040546c777f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D",
      title: "Online Courses",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1677966680369-e58671606570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D",
      title: "Best Teachers",
    },

    // Add more objects as needed
  ];

  return (
    <Styles>
      <Container>
        <div className="feature_header">Our Best Features</div>
        <div className="feature_main">
          {feature?.rows?.map((img, index) => (
            <div key={index} className="feature_card" style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL}/${img.image})` }}>
              <img
                src={`${process.env.REACT_APP_API_URL}/${img.image}`}
                className="Featureimg"
                alt="alt"
              />
              <h4 className="Featuretitle">{img.title}</h4>
            </div>
          ))}
        </div>
      </Container>
    </Styles>
  );
};

export default Features;
