import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Loading from '../../components/loading';
import LatestProducts from '../../modules/latest_products';
import OnSale from '../../modules/onsale';
import ProductCategories from '../../modules/product_categories';
import { getProducts } from '../../redux/actions/products';

interface IHomepage {
    getProducts: () => void;
    propsData: any;
}

const HomePage = ({getProducts: handleGetProducts, propsData}: IHomepage) => {
    const history: any = useHistory();
    useEffect(() => {
        handleGetProducts();
        
        
    }, []);
    // console.log('propsData', propsData);
    if(!propsData.data){
        return <Loading />;
    }
    return (
        <>
            <OnSale />
            <LatestProducts />
            <ProductCategories />
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        propsData: state.productsReducer
    }
  }
  
  const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        getProducts
    },
    dispatch
  )
  
  export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
