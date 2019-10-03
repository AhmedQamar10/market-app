import { createStackNavigator,createAppContainer} from 'react-navigation';
import Home from './component/Home';
import Categories from './component/Categories';
import CategoryDetails from './component/CategoryDetails';
import ProductDetails from './component/ProductDetails';

const AppNavigator = createStackNavigator({
        home: {
            screen: Home
        },
        categories:{
            screen:Categories
        },
        category_details:{
            screen:CategoryDetails
        },
        product_details:{
            screen:ProductDetails
        }
    }, {
        headerMode: 'none'
    })
    
export default  createAppContainer(AppNavigator);
