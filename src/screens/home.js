import { View } from "react-native";

import Header from "../components/header";
import Stories from "../components/stories";
import Posts from "../components/posts";
import Footer from "../components/footer";

const Home = () => {
    return(
        <View>
            <Header />
            <Stories />
            <Posts />
            <Footer />
        </View>
    );
};

export default Home;